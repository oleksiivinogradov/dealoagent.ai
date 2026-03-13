import React from 'react';
import { SceneProps, SCENE_DURATIONS, THEME } from '../types';
import { DealoagentLogo, SPRAWL_NODES, SPRAWL_ARROWS, catmullRomToCubic } from '../shared';
import { SliderLastFrame } from '../types';

interface SceneSliderProps extends SceneProps {
  onLastFrame?: (state: SliderLastFrame) => void;
}

const globalHorizontalLen = 740;
const globalCurveLen = 110;
const globalTotalLen = globalHorizontalLen + globalCurveLen;

/** Compute all dot/zoom values from t ∈ [0,1] */
function computeSliderState(t: number) {
  const actionEnd = 0.45;
  const progressLocal = Math.min(t / 0.55, 1);
  const easeProgressLocal = Math.pow(progressLocal, 1.2);
  const dotScale = 1 + Math.pow(easeProgressLocal, 1.1) * 2.2;

  const isCurvePhase = t >= 0.55;
  let unifiedPhaseT = 0;
  let unifiedDrawnLen = 0;
  let unifiedDotX = 0;
  let unifiedDotY = 200;
  let originX = 0;
  const originY = 200;

  if (!isCurvePhase) {
    const visibleLineLen = 310;
    unifiedDotX = -70 + visibleLineLen * easeProgressLocal;
    unifiedDrawnLen = 430 + 310 * easeProgressLocal;
  } else {
    unifiedPhaseT = Math.min(Math.max((t - 0.55) / (1 - 0.55), 0), 1);
    unifiedDrawnLen = globalHorizontalLen + globalCurveLen * unifiedPhaseT;
    const seg1 = 47 / 100;
    unifiedDotX =
      unifiedPhaseT <= seg1
        ? 240 + (280 - 240) * (unifiedPhaseT / seg1)
        : 280 + (320 - 280) * ((unifiedPhaseT - seg1) / (1 - seg1));
    unifiedDotY =
      unifiedPhaseT <= seg1
        ? 200 + (175 - 200) * (unifiedPhaseT / seg1)
        : 175 + (140 - 175) * ((unifiedPhaseT - seg1) / (1 - seg1));
  }

  originX = isCurvePhase ? 240 : -70 + 310 * easeProgressLocal;
  if (t > 0.55) originX = 240;

  const contentOpacity = t < 0.45 ? 1 : Math.max(0, 1 - (t - 0.45) / 0.1);
  // Fade in the path layer over the first 250ms so the pre-drawn line at t=0 doesn't abruptly appear.
  // (At t=0 the path already has 430 pre-drawn units which are visible on wide screens.)
  const pathFadeIn = Math.min(t / 0.09, 1); // fully opaque by frame 52 (200ms)
  const showSpeedLines = t >= 0.4 && t < 0.65;
  const speedLineOpacity = showSpeedLines
    ? t < 0.44
      ? (t - 0.4) / 0.04
      : 1 - (t - 0.55) / 0.1
    : 0;

  const phaseT = Math.min(Math.max((t - 0.55) / (1 - 0.55), 0), 1);
  const inlineLabelStart = 0.15;
  const manyStart = 0.35;
  const showInlineLabel = t >= 0.55 && phaseT >= inlineLabelStart;
  const showManyWord = t >= 0.55 && phaseT >= manyStart;

  return {
    dotScale,
    unifiedDotX,
    unifiedDotY,
    unifiedDrawnLen,
    originX,
    originY,
    contentOpacity,
    pathFadeIn,
    speedLineOpacity,
    showInlineLabel,
    showManyWord,
    actionEnd,
  };
}

const block3Pts: [number, number][] = [[-500, 200], [240, 200], [280, 175], [320, 140]];
const pathD = catmullRomToCubic(block3Pts);

export function SceneSlider({ elapsedInScene, onLastFrame }: SceneSliderProps) {
  const sliderDuration = SCENE_DURATIONS['slider'];
  const t = Math.min(elapsedInScene / sliderDuration, 1);

  const {
    dotScale,
    unifiedDotX,
    unifiedDotY,
    unifiedDrawnLen,
    originX,
    originY,
    contentOpacity,
    pathFadeIn,
    speedLineOpacity,
    showInlineLabel,
    showManyWord,
  } = computeSliderState(t);

  // Report last frame state at t=1 so TooManyApps can start seamlessly
  React.useEffect(() => {
    if (t >= 0.98 && onLastFrame) {
      const s = computeSliderState(1);
      onLastFrame({
        dotX: s.unifiedDotX,
        dotY: s.unifiedDotY,
        drawnLen: s.unifiedDrawnLen,
        dotScale: s.dotScale,
        originX: s.originX,
        originY: s.originY,
      });
    }
  }, [t, onLastFrame]);

  return (
    <>
      <div className="absolute inset-0 z-10 bg-white" />

      {/* Zoomed content layer — sprawl diagram fades as camera zooms in */}
      {contentOpacity > 0 && (
        <div
          className="absolute inset-0 z-10"
          style={{
            transform: `scale(${dotScale})`,
            transformOrigin: `calc(50% + ${originX - 250}px) calc(50% + ${originY - 160}px)`,
            opacity: contentOpacity,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,200,200,0.35) 0%, transparent 70%)',
              opacity: (0.3 + contentOpacity * 0.7) * contentOpacity,
            }}
          />
          <svg className="w-full h-full overflow-visible" aria-hidden style={{ opacity: contentOpacity }}>
            <defs>
              <marker id="hero-arrow-slider" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={THEME.arrowFill} />
              </marker>
            </defs>
            {SPRAWL_ARROWS.map((a) => (
              <line
                key={a.id}
                x1={`${a.x1}%`}
                y1={`${a.y1}%`}
                x2={`${a.x2}%`}
                y2={`${a.y2}%`}
                stroke={THEME.arrowFill}
                strokeWidth="2"
                markerEnd="url(#hero-arrow-slider)"
              />
            ))}
          </svg>
          {SPRAWL_NODES.map((node) => (
            <div
              key={node.id}
              className={`absolute z-20 flex items-center justify-center text-center leading-snug whitespace-pre-wrap ${
                node.className?.includes('border-none')
                  ? node.className
                  : `bg-white border rounded-xl shadow-sm ${THEME.roseBorder} p-3 text-[10px] sm:text-[13px] font-medium ${THEME.roseText} ` +
                    (node.className || '')
              }`}
              style={{ top: `${node.y}%`, left: `${node.x}%`, opacity: contentOpacity, transition: 'opacity 0.2s ease-out' }}
            >
              {node.content}
            </div>
          ))}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            {/*
              scale(0.95) translateX(2%) matches sprawl t=1 headline exactly.
              Applied directly here (NOT inside the outer zoom div) so the
              off-center transformOrigin on the zoom div doesn't affect it.
            */}
            <div className="flex flex-col items-start text-left" style={{ transform: 'scale(0.95) translateX(2%)', transformOrigin: 'center center' }}>
              <div className="h-8 sm:h-9 md:h-10 shrink-0" aria-hidden />
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] font-bold text-black tracking-tighter leading-none"
                style={{ opacity: contentOpacity, transition: 'opacity 0.2s ease-out' }}
              >
                Work Sprawl
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-black tracking-tight mt-1 leading-tight relative inline-flex items-baseline">
                <span style={{ opacity: contentOpacity, transition: 'opacity 0.2s ease-out' }}>is&nbsp;</span>
                <span className="inline-flex items-baseline align-baseline" style={{ opacity: contentOpacity, transition: 'opacity 0.2s ease-out' }}>
                  killing us
                </span>
                {/* Period dot — matches sprawl's dot exactly so frame 49→50 is identical */}
                <span className="absolute left-full bottom-[0.22em] ml-[0.05em]" style={{ opacity: contentOpacity }}>
                  <svg width="320" height="24" viewBox="0 0 320 24" fill="none" className="overflow-visible">
                    <circle cx="6" cy="16" r="5" fill="black" />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Speed lines during zoom transition */}
      {speedLineOpacity > 0 && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" style={{ opacity: speedLineOpacity }}>
          <div className="absolute top-[40%] w-full h-0.5 bg-[#f1c5cb]" style={{ animation: 'slide-left 0.4s linear infinite', width: '200%' }} />
          <div className="absolute top-[45%] w-full h-1 bg-[#df8a9a] opacity-50" style={{ animation: 'slide-left 0.3s linear infinite', width: '200%', animationDelay: '0.1s' }} />
          <div className="absolute top-[65%] w-full h-0.5 bg-[#fef0f2]" style={{ animation: 'slide-left 0.5s linear infinite', width: '200%', animationDelay: '0.2s' }} />
          <div className="absolute top-[60%] w-full h-1 bg-gray-300 opacity-30" style={{ animation: 'slide-left 0.25s linear infinite', width: '200%' }} />
        </div>
      )}

      {/* "Too many" — continuous line + dot: moves along straight then curves up */}
      <div className="absolute inset-0 z-20 flex items-start justify-center pt-[14%] sm:pt-[18%] px-6 pb-8 pointer-events-none overflow-visible">
        <div className="relative w-full max-w-4xl min-h-[320px] overflow-visible">
          <div
            className="absolute inset-0 z-20 overflow-visible"
            style={{
              transform: `scale(${dotScale})`,
              transformOrigin: `calc(50% + ${originX - 250}px) calc(50% + ${originY - 160}px)`,
              // Fade in the path layer so the pre-drawn line isn't visible at t=0
              opacity: pathFadeIn,
            }}
          >
            <svg
              className="absolute inset-0 w-[200vw] h-full overflow-visible"
              style={{ left: '-50vw' }}
              viewBox="-250 0 1000 320"
              fill="none"
              stroke="#111827"
              strokeLinecap="round"
            >
              {showInlineLabel && (
                <text
                  x="-5"
                  y="193"
                  textAnchor="start"
                  dominantBaseline="alphabetic"
                  fill="#111827"
                  fontSize={42 / dotScale}
                  fontWeight="bold"
                  fontFamily="system-ui, sans-serif"
                  className="tracking-tight animate-fade-in-scale"
                >
                  Too{' '}
                  {showManyWord && (
                    <tspan fill="#6b7280" className="animate-fade-in-scale">
                      many
                    </tspan>
                  )}
                </text>
              )}
              <path
                d={pathD}
                strokeWidth={5 / dotScale}
                style={{
                  strokeDasharray: globalTotalLen,
                  strokeDashoffset: Math.max(0, globalTotalLen - unifiedDrawnLen),
                }}
              />
              <circle cx={unifiedDotX} cy={unifiedDotY} r={14 / dotScale} fill="#111827" stroke="none" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}
