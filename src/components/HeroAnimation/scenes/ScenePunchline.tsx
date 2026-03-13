import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';

export function ScenePunchline(_props: SceneProps) {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#e8f4fc] to-[#d4e8f5]" />
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="text-center relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gray-900">It's time to kill </span>
            <span className="text-gray-500">sprawl.</span>
          </h2>
          <svg
            className="absolute left-1/2 top-full mt-3 w-64 h-20 -translate-x-1/2 overflow-visible"
            viewBox="0 0 200 60"
            fill="none"
          >
            <path
              d="M 90 8 Q 110 28 125 48 T 160 52 T 195 45"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: 'draw-path 1.1s 0.5s ease-out forwards' }}
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}
