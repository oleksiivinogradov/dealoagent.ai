import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';

export function SceneIntro(_props: SceneProps) {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-white" />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,200,200,0.35) 0%, rgba(255,220,220,0.15) 40%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-tighter text-center px-4">
          <span className="text-black animate-intro-work">Work </span>
          <span className="animate-intro-sprawl" style={{ color: 'rgb(115 115 115)', opacity: 0.35 }}>
            Sprawl
          </span>
        </h1>
      </div>
      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}
