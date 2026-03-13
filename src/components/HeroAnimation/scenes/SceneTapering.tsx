import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';
import { CheckSquare } from 'lucide-react';

export function SceneTapering(_props: SceneProps) {
  return (
    <>
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="relative w-full max-w-2xl h-40">
          <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
            <defs>
              <linearGradient id="taperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            </defs>
            <path d="M 0 35 L 100 48 L 250 55 L 380 58 L 380 62 L 250 56 L 100 50 L 0 40 Z" fill="url(#taperGrad)" />
            <path d="M 0 50 L 380 58" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity={0.9} />
            <circle cx="85" cy="50" r="4" fill="#dc2626" />
            <ellipse cx="60" cy="35" rx="35" ry="12" stroke="#9ca3af" strokeWidth="1" fill="none" opacity={0.6} />
            <ellipse cx="60" cy="65" rx="30" ry="10" stroke="#9ca3af" strokeWidth="1" fill="none" opacity={0.6} />
          </svg>
          <div className="absolute left-[12%] top-0 flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 shadow flex items-center justify-center">
              <CheckSquare className="w-4 h-4 text-gray-700" />
            </div>
            <span className="w-5 h-5 rounded bg-amber-400 flex items-center justify-center text-[10px] font-bold text-black">!</span>
          </div>
          <div className="absolute left-[10%] bottom-2 w-8 h-8 rounded-lg bg-[#2b579a] flex items-center justify-center shadow">
            <span className="text-white font-bold text-sm">W</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-20">
        <DealoagentLogo />
      </div>
    </>
  );
}
