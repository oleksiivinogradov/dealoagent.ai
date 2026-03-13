import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';
import { User, FileText, MessageCircle, Link2, HelpCircle } from 'lucide-react';

export function SceneContextLost(_props: SceneProps) {
  const bubbles = [
    { q: "Who approved this?", icon: <User className="w-4 h-4" /> },
    { q: "You didn't see the report?", icon: <FileText className="w-4 h-4" /> },
    { q: "What was the decision?", icon: <MessageCircle className="w-4 h-4" /> },
    { q: "Who said what now?", icon: <User className="w-4 h-4" /> },
    { q: "Is that accurate?", icon: <MessageCircle className="w-4 h-4" /> },
    { q: "How do I do this?", icon: <Link2 className="w-4 h-4" /> },
    { q: "Can you send me the Q4 numbers?", icon: <FileText className="w-4 h-4" /> },
    { q: "Who would know?", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <h2 className="text-white text-4xl sm:text-5xl font-bold tracking-tight mb-8 z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Context is lost.
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          {bubbles.map(({ q, icon }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gray-900/60 border border-white/30 text-white text-sm font-medium animate-fade-in-scale shadow-lg"
              style={{ animationDelay: `${0.15 + i * 0.08}s`, animationFillMode: 'both' }}
            >
              <span className="text-white/90">{icon}</span>
              <HelpCircle className="w-3.5 h-3.5 text-white/70" />
              <span>{q}</span>
            </div>
          ))}
        </div>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          viewBox="0 0 600 400"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M 80 120 L 200 100 L 300 140 L 400 110 L 520 150" style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: 'draw-path 1.5s 0.5s ease-out forwards' }} />
          <path d="M 100 280 Q 180 320 260 280 Q 340 240 420 280 Q 500 320 560 280" style={{ strokeDasharray: 400, strokeDashoffset: 400, animation: 'draw-path 1.2s 0.8s ease-out forwards' }} />
          <path d="M 120 300 Q 200 340 280 300 Q 360 260 440 300" style={{ strokeDasharray: 350, strokeDashoffset: 350, animation: 'draw-path 1.2s 1s ease-out forwards' }} />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 z-20 opacity-50">
        <DealoagentLogo light />
      </div>
    </>
  );
}
