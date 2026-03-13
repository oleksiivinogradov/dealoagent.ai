/**
 * Shared sub-components and data used by multiple HeroAnimation scenes.
 */
import { THEME } from './types';

/** DealoAgent logo from frames: two upward chevrons + "DealoAgent" text, dark grey */
export function DealoagentLogo({ className = '', light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" aria-hidden>
        <path
          d="M10 4L14 10H6L10 4Z"
          fill={light ? 'rgba(255,255,255,0.7)' : '#6b7280'}
          stroke={light ? 'rgba(255,255,255,0.5)' : '#4b5563'}
          strokeWidth="0.5"
        />
        <path
          d="M10 8L12 11H8L10 8Z"
          fill={light ? 'rgba(255,255,255,0.5)' : '#9ca3af'}
          stroke={light ? 'rgba(255,255,255,0.4)' : '#6b7280'}
          strokeWidth="0.5"
        />
      </svg>
      <span className={`text-sm font-medium ${light ? 'text-white/70' : 'text-gray-600'}`}>DealoAgent</span>
    </div>
  );
}

/** Brand icons used in the Sprawl maze node */
export const MAZE_APP_ICONS = (
  <div className="flex flex-wrap justify-center items-center gap-1.5">
    {/* Microsoft Teams */}
    <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden flex items-center justify-center bg-[#5059C9]" aria-hidden>
      <img src="/icons/Microsoft_Teams.svg" alt="" className="w-full h-full object-contain" />
    </div>
    {/* OpenAI */}
    <div className="w-6 h-6 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center bg-black" aria-hidden>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="block">
        <path d="M17 7 A6 6 0 0 0 7 13 A6 6 0 0 1 17 19" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
    {/* Gmail */}
    <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden flex items-center justify-center" aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" className="block h-full w-auto max-w-full object-contain">
        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
      </svg>
    </div>
    {/* Google Calendar */}
    <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#4285F4' }} aria-hidden>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="block">
        <rect x="3" y="4" width="18" height="16" rx="1.5" fill="white" />
        <rect x="3" y="4" width="18" height="5" rx="1.5" fill="#34A853" />
        <path d="M9.5 10.5h3a1 1 0 0 1 0 2h-2.2a1 1 0 0 0 0 2H12a1 1 0 0 0 0 2H9.5" stroke="#5F6368" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M14.5 10v7" stroke="#5F6368" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
    {/* Slack */}
    <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden flex items-center justify-center bg-white border border-gray-100" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 127 127" fill="none" className="block">
        <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A" />
        <path d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0" />
        <path d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D" />
        <path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" fill="#ECB22E" />
      </svg>
    </div>
    {/* Notion */}
    <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden flex items-center justify-center bg-black" aria-hidden>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="block">
        <path d="M7 5v14M7 5l10 14M17 5v14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    {/* Asana */}
    <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#F06A6A' }} aria-hidden>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="block">
        <circle cx="9" cy="10" r="3.5" fill="white" opacity={0.9} />
        <circle cx="15" cy="10" r="3.5" fill="white" opacity={0.9} />
        <circle cx="12" cy="14.5" r="3.5" fill="white" opacity={0.9} />
      </svg>
    </div>
    {/* Jira */}
    <div className="w-6 h-6 rounded flex-shrink-0 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#DE350B' }} aria-hidden>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="block">
        <path d="M11 5L7 12h3l-2 7 6-7H10l2-7z" fill="white" fillRule="evenodd" />
      </svg>
    </div>
  </div>
);

/** Sprawl diagram nodes data */
export const SPRAWL_NODES = [
  { id: 'ideas', x: 10, y: 18, delay: 0.2, content: 'Ideas' },
  { id: 'exec-dir', x: 8, y: 38, delay: 0.3, content: 'Executive\nDirection' },
  { id: 'requests', x: 7, y: 58, delay: 0.4, content: 'Requests' },
  { id: 'fixes', x: 10, y: 82, delay: 0.5, content: 'Fixes' },
  {
    id: 'questions',
    x: 30,
    y: 19,
    delay: 0.8,
    content: (
      <div className="text-left text-[11px] sm:text-[13px] leading-tight space-y-1">
        <p>1. Is this a <span className={THEME.roseText + ' font-bold'}>PRIORITY?</span></p>
        <p>2. <span className={THEME.roseText + ' font-bold'}>HOW</span> will work get done?</p>
        <p>3. <span className={THEME.roseText + ' font-bold'}>WHO</span> will do the work?</p>
        <p>4. Do we have all the <span className={THEME.roseText + ' font-bold'}>REQUIRED</span> info?</p>
      </div>
    ),
    className: 'w-44 sm:w-52 !items-start !justify-start p-3',
  },
  {
    id: 'approvals',
    x: 48,
    y: 10,
    delay: 1.2,
    content: (
      <>
        Approvals take <span className={THEME.roseText + ' font-bold'}>FOREVER</span>
      </>
    ),
  },
  {
    id: 'decisions',
    x: 60,
    y: 28,
    delay: 1.4,
    content: (
      <>
        Decisions get <span className={THEME.roseText + ' font-bold'}>LOST</span>
      </>
    ),
  },
  { id: 'execs-cant', x: 72, y: 14, delay: 1.6, content: "EXECS CAN'T SEE\nto unblock" },
  { id: 'rework', x: 88, y: 12, delay: 1.8, content: 'REWORK happens\ncausing delays' },
  {
    id: 'hours',
    x: 78,
    y: 28,
    delay: 2.1,
    content: (
      <>
        <span className={THEME.roseText + ' font-bold'}>8 HOURS SPENT</span>
        <br />
        and still unsure if it moved the needle
      </>
    ),
    className: 'w-36 sm:w-44',
  },
  {
    id: 'productivity',
    x: 90,
    y: 65,
    delay: 2.5,
    content: 'Productivity\nVANISHES',
    className: `${THEME.magentaBox} font-bold border-none shadow-lg text-sm px-5 py-3`,
  },
  {
    id: 'context',
    x: 30,
    y: 85,
    delay: 0.8,
    content: (
      <>
        Context is <span className={THEME.roseText + ' font-bold'}>MISSING</span>
      </>
    ),
  },
  {
    id: 'feedback',
    x: 62,
    y: 92,
    delay: 1.5,
    content: (
      <>
        Feedback is <span className={THEME.roseText + ' font-bold'}>SCATTERED</span>
      </>
    ),
  },
  {
    id: 'apps',
    x: 60,
    y: 73,
    delay: 1.2,
    content: (
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] sm:text-xs font-bold uppercase text-center">
          <span className="text-[#c04b5f]">NAVIGATING A MAZE</span>
          <span className="text-[#b85c6b] font-medium"> of disconnected apps</span>
        </p>
        {MAZE_APP_ICONS}
      </div>
    ),
    className: 'w-64 sm:w-80 p-3 sm:p-4',
  },
];

/** Sprawl diagram arrows */
export const SPRAWL_ARROWS = [
  { id: 'a1', x1: 14, y1: 18, x2: 23, y2: 19, delay: 0.3 },
  { id: 'a2', x1: 12, y1: 38, x2: 23, y2: 24, delay: 0.4 },
  { id: 'a3', x1: 11, y1: 58, x2: 22, y2: 30, delay: 0.5 },
  { id: 'a4', x1: 14, y1: 82, x2: 25, y2: 84, delay: 0.6 },
  { id: 'a5', x1: 14, y1: 79, x2: 30, y2: 55, delay: 0.8 },
  { id: 'a18', x1: 35, y1: 27, x2: 42, y2: 38, delay: 0.9 },
  { id: 'a6', x1: 38, y1: 16, x2: 44, y2: 12, delay: 1.0 },
  { id: 'a7', x1: 50, y1: 14, x2: 58, y2: 26, delay: 1.3 },
  { id: 'a8', x1: 67, y1: 16, x2: 63, y2: 26, delay: 1.5 },
  { id: 'a9', x1: 76, y1: 12, x2: 82, y2: 12, delay: 1.7 },
  { id: 'a10', x1: 90, y1: 15, x2: 90, y2: 60, delay: 1.9 },
  { id: 'a11', x1: 85, y1: 16, x2: 80, y2: 24, delay: 2.0 },
  { id: 'a12', x1: 80, y1: 32, x2: 88, y2: 60, delay: 2.2 },
  { id: 'a14', x1: 36, y1: 83, x2: 44, y2: 78, delay: 1.0 },
  { id: 'a13', x1: 36, y1: 87, x2: 56, y2: 91, delay: 1.3 },
  { id: 'a15', x1: 62, y1: 88, x2: 60, y2: 78, delay: 1.6 },
  { id: 'a16', x1: 72, y1: 72, x2: 84, y2: 67, delay: 1.8 },
];

/** Catmull-Rom to cubic Bezier conversion used by Slider and TooManyApps */
export function catmullRomToCubic(pts: [number, number][]): string {
  if (pts.length < 2) return `M ${pts[0][0]} ${pts[0][1]}`;
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  const n = pts.length;
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(n - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/** Render sprawl nodes with consistent styling */
export function SprawlNodeList({ opacity = 1, animated = false }: { opacity?: number; animated?: boolean }) {
  return (
    <>
      {SPRAWL_NODES.map((node) => (
        <div
          key={node.id}
          className={`absolute z-20 flex items-center justify-center text-center leading-snug whitespace-pre-wrap ${
            animated ? 'animate-fade-in-scale-centered' : ''
          } ${
            node.className?.includes('border-none')
              ? node.className
              : `bg-white border rounded-xl shadow-sm ${THEME.roseBorder} p-3 text-[10px] sm:text-[13px] font-medium ${THEME.roseText} ` +
                (node.className || '')
          }`}
          style={{
            top: `${node.y}%`,
            left: `${node.x}%`,
            opacity,
            animationDelay: animated ? `${node.delay}s` : undefined,
          }}
        >
          {node.content}
        </div>
      ))}
    </>
  );
}
