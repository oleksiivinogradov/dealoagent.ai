import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';

export function SceneKillsHuman(_props: SceneProps) {
  return (
    <>
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="text-center" style={{ transform: 'rotate(-12deg)' }}>
          <p className="text-lg sm:text-xl text-gray-400 font-normal mb-1">Work sprawl kills</p>
          <p className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight">
            human productivity
          </p>
        </div>
      </div>
      <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-black/20" />
      <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 rounded-full bg-black/30" />
      <svg
        className="absolute top-[22%] right-[10%] w-24 h-20 text-black opacity-40"
        viewBox="0 0 80 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M 70 5 Q 50 25 40 45" />
      </svg>
      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}
