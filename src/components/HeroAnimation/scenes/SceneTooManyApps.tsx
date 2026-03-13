import { SceneProps, SCENE_DURATIONS } from '../types';
import { DealoagentLogo, catmullRomToCubic } from '../shared';
import { SliderLastFrame } from '../types';

interface SceneTooManyAppsProps extends SceneProps {
  /** State from the end of SceneSlider for seamless dot continuity */
  startFrame?: SliderLastFrame;
}

const appNodes = [
  { id: 'slack', x: 285, y: 52, warn: true },
  { id: 'monday', x: 318, y: 88, warn: false, badge: '3' },
  { id: 'miro', x: 358, y: 62, warn: false, badge: '1' },
  { id: 'notion', x: 368, y: 142, warn: false, badge: '2' },
  { id: 'word', x: 318, y: 178, warn: false },
  { id: 'jira', x: 248, y: 168, warn: true },
  { id: 'dropbox', x: 198, y: 192, warn: false, badge: '2' },
  { id: 'trello', x: 288, y: 198, warn: false, badge: '2' },
] as const;

const LINE_Y = 200;
const pathPoints: [number, number][] = [
  [320, 140],
  [300, 75],
  [330, 95],
  [365, 78],
  [355, 135],
  [315, 172],
  [255, 165],
  [205, 188],
  [275, 192],
  [320, LINE_Y],
  [420, LINE_Y],
  [520, LINE_Y],
];
const block3PathPoints: [number, number][] = [[-500, LINE_Y], [240, LINE_Y], [280, 175], [320, 140]];
const allPathPoints = [...block3PathPoints, ...pathPoints.slice(1)];
const mainPathD = catmullRomToCubic(allPathPoints);
const mainPathLen = 1780;
const lenToCurveEnd = 840;
const pathSegments = pathPoints.length - 1;

function renderIcon(type: (typeof appNodes)[number]['id']) {
  if (type === 'slack')
    return (
      <div className="flex gap-px flex-wrap w-5 h-5">
        <span className="w-2 h-2 rounded-full bg-[#e01e5a]" />
        <span className="w-2 h-2 rounded-full bg-[#ecb22e]" />
        <span className="w-2 h-2 rounded-full bg-[#2eb67d]" />
        <span className="w-2 h-2 rounded-full bg-[#36c5f0]" />
      </div>
    );
  if (type === 'miro') return <span className="text-amber-500 font-bold text-lg">M</span>;
  if (type === 'monday')
    return (
      <div className="w-6 h-5 flex gap-px">
        <span className="w-1.5 bg-red-500 rounded-sm" />
        <span className="w-1.5 bg-amber-400 rounded-sm" />
        <span className="w-1.5 bg-green-400 rounded-sm" />
      </div>
    );
  if (type === 'notion') return <span className="text-black font-black text-xl">N</span>;
  if (type === 'word') return <span className="text-[#2b579a] font-bold text-lg">W</span>;
  if (type === 'jira') return <span className="text-[#2684ff] font-bold text-lg">J</span>;
  if (type === 'dropbox')
    return <div className="w-5 h-4 border-2 border-[#0061ff] rounded-sm" style={{ borderTopWidth: '3px' }} />;
  return (
    <div className="w-5 h-4 bg-blue-400 rounded-sm flex items-center justify-center">
      <span className="w-3 h-1.5 bg-white rounded" />
    </div>
  );
}

export function SceneTooManyApps({ elapsedInScene, startFrame }: SceneTooManyAppsProps) {
  const tooManyDuration = SCENE_DURATIONS['tooManyApps'];
  const t = Math.min(elapsedInScene / tooManyDuration, 1);
  const clamp01 = (v: number) => Math.max(0, Math.min(v, 1));

  // ---- Zoom-out from slider's final zoom to 1.0 over first 35% of scene ----
  // slider ends at dotScale ≈ 3.2 with originX=240, originY=200
  const startZoom = startFrame?.dotScale ?? 1;
  // Transform-origin must match slider's final origin so the zoom-out feels like a continuous camera pull-back
  const originX = startFrame?.originX ?? 240;  // 240 at slider t=1
  const originY = startFrame?.originY ?? 200;  // 200 (SVG y) at slider t=1
  const zoomOutEnd = 0.35; // first 35% of scene = ~770ms
  const zoomProgress = clamp01(t / zoomOutEnd);
  // Ease-out quadratic: fast initial pull-back, slows at end
  const eased = 1 - Math.pow(1 - zoomProgress, 2);
  const currentZoom = startZoom + (1 - startZoom) * eased;

  // Inverse-scale SVG primitives so they stay constant visual size during zoom-out
  const invZoom = 1 / currentZoom;

  // Progress through path segments
  const pathProgress = clamp01(t * 1.05);
  const segIdx = Math.min(Math.floor(pathProgress * pathSegments), pathSegments - 1);
  const segT = pathProgress * pathSegments - segIdx;
  const [x0, y0] = pathPoints[segIdx];
  const [x1, y1] = pathPoints[segIdx + 1];
  const dotX = x0 + (x1 - x0) * segT;
  const dotY = y0 + (y1 - y0) * segT;

  const drawnLen = lenToCurveEnd + (mainPathLen - lenToCurveEnd) * pathProgress;
  const firstAppPathIndex = 1;

  return (
    <>
      <div className="absolute inset-0 z-20 flex items-start justify-center pt-[14%] sm:pt-[18%] px-6 pb-8 overflow-visible">
        <div className="relative w-full max-w-4xl min-h-[320px] overflow-visible">
          {/* Zoom wrapper — starts at slider's final zoom and eases to 1× */}
          <div
            className="absolute inset-0 overflow-visible"
            style={{
              transform: `scale(${currentZoom})`,
              transformOrigin: `calc(50% + ${originX - 250}px) calc(50% + ${originY - 160}px)`,
            }}
          >
            <svg
              className="absolute inset-0 w-[200vw] h-full pointer-events-none overflow-visible"
              style={{ left: '-50vw' }}
              viewBox="-250 0 1000 320"
              fill="none"
              stroke="#111827"
              strokeLinecap="round"
            >
              {/* "Too many apps..." label — inverse-scaled font during zoom-out to keep visual size stable */}
              <text
                x="-5"
                y="193"
                textAnchor="start"
                dominantBaseline="alphabetic"
                fill="#111827"
                fontSize={42 * invZoom}
                fontWeight="bold"
                fontFamily="system-ui, sans-serif"
                className="tracking-tight"
                style={{ transform: 'translateY(-2px)' }}
              >
                Too many <tspan fill="#6b7280">apps...</tspan>
              </text>

              {/* Continuous path from block 3 — stroke inverse-scaled */}
              <path
                d={mainPathD}
                strokeWidth={5 * invZoom}
                style={{
                  strokeDasharray: mainPathLen,
                  strokeDashoffset: Math.max(0, mainPathLen - drawnLen),
                  transform: 'translateY(-2px)',
                }}
              />

              {/* Branch lines — inverse-scaled */}
              {appNodes.map((node, i) => {
                const pathThreshold = (firstAppPathIndex + i) / pathSegments;
                const visible = pathProgress >= pathThreshold;
                const bx = pathPoints[firstAppPathIndex + i][0];
                const by = pathPoints[firstAppPathIndex + i][1];
                const dx = node.x - bx;
                const dy = node.y - by;
                const len = Math.hypot(dx, dy) || 1;
                const perpX = -dy / len;
                const perpY = dx / len;
                const midX = (bx + node.x) / 2;
                const midY = (by + node.y) / 2;
                const bulge = 0.2 * len;
                const ctrlX = midX + perpX * bulge;
                const ctrlY = midY + perpY * bulge;
                const branchD = `M ${bx} ${by} Q ${ctrlX} ${ctrlY} ${node.x} ${node.y}`;
                return (
                  <path
                    key={`branch-${node.id}`}
                    d={branchD}
                    fill="none"
                    stroke="#374151"
                    strokeWidth={1.8 * invZoom}
                    strokeLinecap="round"
                    style={{ opacity: visible ? 1 : 0, transform: 'translateY(-2px)' }}
                  />
                );
              })}

              {/* Moving dot — inverse-scaled radius */}
              <circle cx={dotX} cy={dotY} r={14 * invZoom} fill="#111827" style={{ transform: 'translateY(-2px)' }} />
            </svg>

            {/* App icon nodes */}
            <div className="absolute inset-0">
              {appNodes.map((node, i) => {
                const pathThreshold = (firstAppPathIndex + i) / pathSegments;
                const local = clamp01((pathProgress - pathThreshold) * pathSegments);
                return (
                  <div
                    key={node.id}
                    className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white border border-gray-100 shadow-md flex items-center justify-center"
                    style={{
                      left: `${(node.x / 500) * 100}%`,
                      top: `${(node.y / 320) * 100}%`,
                      opacity: local,
                      // Inverse-scale the icon cards too so they stay constant visual size
                      transform: `translate(-50%, -50%) scale(${(0.85 + 0.15 * local) * invZoom})`,
                    }}
                  >
                    {renderIcon(node.id)}
                    {node.warn && (
                      <span className="absolute -top-1 -left-1 w-4 h-4 rounded bg-amber-400 flex items-center justify-center text-[10px] font-bold text-black">
                        !
                      </span>
                    )}
                    {'badge' in node && node.badge && (
                      <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                        {node.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}

