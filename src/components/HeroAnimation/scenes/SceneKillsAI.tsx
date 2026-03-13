import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';

export function SceneKillsAI(_props: SceneProps) {
  return (
    <>
      <div className="absolute inset-0 bg-[#f0f0f0]" />
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="text-center relative">
          <p className="text-xl sm:text-2xl text-[#6e6e6e] font-medium mb-1">Work sprawl kills</p>
          <p className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight" style={{ transform: 'rotate(-2deg)' }}>
            AI{' '}
            <span className="relative inline-block">
              productiv
              <span className="relative inline-block">
                o
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-400/50 border-2 border-gray-500/60 animate-pulse" />
              </span>
              tivity
            </span>
          </p>
          <svg className="absolute left-1/2 top-[54%] w-28 h-20 -translate-x-1/2 pointer-events-none text-black" viewBox="0 0 70 50" fill="none" stroke="currentColor">
            <path
              d="M 8 48 Q 22 32 38 24 Q 52 18 64 12"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ strokeDasharray: 95, strokeDashoffset: 95, animation: 'draw-path 0.8s 0.3s ease-out forwards' }}
            />
            <circle cx="64" cy="12" r="3" fill="black" style={{ opacity: 0, animation: 'draw-path 0.3s 1s ease-out forwards' }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}
