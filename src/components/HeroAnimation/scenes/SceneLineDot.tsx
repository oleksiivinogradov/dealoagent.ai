import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';

export function SceneLineDot(_props: SceneProps) {
  return (
    <>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-full max-w-2xl px-8 flex items-center">
          <div className="h-2 flex-1 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          <div className="w-6 h-6 rounded-full bg-white ml-3 flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-20 opacity-50">
        <DealoagentLogo light />
      </div>
    </>
  );
}
