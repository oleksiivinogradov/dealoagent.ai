import { SceneProps, SCENE_DURATIONS, THEME } from '../types';
import { DealoagentLogo, SPRAWL_NODES, SPRAWL_ARROWS } from '../shared';

export function SceneSprawl({ elapsedInScene }: SceneProps) {
  const sprawlDuration = SCENE_DURATIONS['sprawl'];
  const progress = Math.min(elapsedInScene / sprawlDuration, 1);
  const decreaseEnd = 0.38;
  const scale = progress < decreaseEnd ? 1 - (progress / decreaseEnd) * 0.05 : 0.95;
  const translateX = progress < decreaseEnd ? (progress / decreaseEnd) * 2 : 2;
  const isOpacity = progress < 0.12 ? 0 : Math.min((progress - 0.12) / 0.1, 1);
  const killingOpacity = progress < 0.2 ? 0 : Math.min((progress - 0.2) / 0.2, 1);

  return (
    <>
      {/* Arrow lines */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full overflow-visible" aria-hidden>
          <defs>
            <marker
              id="hero-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
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
              markerEnd="url(#hero-arrow)"
              className="animate-draw-line"
              style={{ animationDelay: `${a.delay}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Sprawl nodes */}
      {SPRAWL_NODES.map((node) => (
        <div
          key={node.id}
          className={`absolute z-20 animate-fade-in-scale-centered flex items-center justify-center text-center leading-snug whitespace-pre-wrap ${
            node.className?.includes('border-none')
              ? node.className
              : `bg-white border rounded-xl shadow-sm ${THEME.roseBorder} p-3 text-[10px] sm:text-[13px] font-medium ${THEME.roseText} ` +
                (node.className || '')
          }`}
          style={{ top: `${node.y}%`, left: `${node.x}%`, animationDelay: `${node.delay}s` }}
        >
          {node.content}
        </div>
      ))}

      {/* Central headline — no vertical jump between intro and sprawl */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          className="flex flex-col items-start text-left"
          style={{ transform: `scale(${scale}) translateX(${translateX}%)`, transformOrigin: 'center center' }}
        >
          {/* Spacer keeps "Work Sprawl" at same vertical position as intro */}
          <div className="h-8 sm:h-9 md:h-10 shrink-0" aria-hidden />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] font-bold text-black tracking-tighter leading-none">
            Work Sprawl
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-black tracking-tight mt-1 leading-tight relative inline-flex items-baseline">
            <span style={{ opacity: isOpacity }}>is&nbsp;</span>
            <span style={{ opacity: killingOpacity }}>killing us</span>
            {killingOpacity > 0.5 && (
              <span className="absolute left-full bottom-[0.22em] ml-[0.05em]" style={{ opacity: killingOpacity }}>
                <svg width="320" height="24" viewBox="0 0 320 24" fill="none" className="overflow-visible">
                  <circle cx="6" cy="16" r="5" fill="black" />
                </svg>
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}
