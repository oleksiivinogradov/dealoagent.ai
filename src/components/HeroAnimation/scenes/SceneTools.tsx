import { SceneProps } from '../types';
import { DealoagentLogo } from '../shared';

export function SceneTools(_props: SceneProps) {
  return (
    <>
      <div className="absolute inset-0 z-20 flex items-center px-6">
        <p className="text-white text-3xl sm:text-4xl font-bold tracking-tight z-10">
          Too many AI tools...
        </p>
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 500 300"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <defs>
            <linearGradient id="toolsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <path
            d="M 40 150 L 120 150 Q 160 100 220 130 T 340 90 T 420 150 T 380 220 T 260 200 T 140 180"
            stroke="url(#toolsGrad)"
            fill="none"
            style={{ strokeDasharray: 950, strokeDashoffset: 950, animation: 'draw-path 2.2s ease-out forwards' }}
          />
          <circle cx="420" cy="150" r="3" fill="white" style={{ animation: 'draw-path 0.5s 2s ease-out forwards', opacity: 0 }} />

          {/* Blue 4-point star circle */}
          <g className="animate-fade-in-scale" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
            <circle cx="180" cy="115" r="18" fill="white" stroke="white" strokeWidth="1" />
            <path d="M 180 102 L 184 118 L 200 118 L 186 128 L 190 144 L 180 134 L 170 144 L 174 128 L 160 118 L 176 118 Z" fill="#4692d3" />
          </g>

          {/* Orange asterisk circle */}
          <g className="animate-fade-in-scale" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
            <circle cx="320" cy="95" r="18" fill="#f5f0eb" stroke="white" strokeWidth="1" />
            <path
              d="M 320 82 L 323 92 L 333 92 L 324 98 L 327 108 L 320 102 L 313 108 L 316 98 L 307 92 L 317 92 Z"
              fill="#e2b28b"
            />
            <path d="M 320 85 L 320 105 M 308 90 L 332 100 M 308 100 L 332 90" stroke="#e2b28b" strokeWidth="2" />
          </g>

          {/* ChatGPT-like spiral circle */}
          <g className="animate-fade-in-scale" style={{ animationDelay: '1.8s', animationFillMode: 'both' }}>
            <circle cx="400" cy="175" r="18" fill="#e5e5e5" stroke="white" strokeWidth="1" />
            <path
              d="M 392 168 Q 400 162 408 168 Q 412 175 408 182 Q 400 188 392 182 Q 388 175 392 168"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
            />
            <path
              d="M 396 172 Q 400 168 404 172 Q 406 175 404 178 Q 400 182 396 178 Q 394 175 396 172"
              fill="none"
              stroke="#374151"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 z-20 opacity-60">
        <DealoagentLogo light />
      </div>
    </>
  );
}
