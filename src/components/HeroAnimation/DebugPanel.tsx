import React from 'react';
import { Scene, DebugBlock, FPS } from './types';

interface DebugPanelProps {
  debugOpen: boolean;
  setDebugOpen: (v: (prev: boolean) => boolean) => void;
  scene: Scene;
  sceneIndex: number;
  elapsedInScene: number;
  playing: boolean;
  setPlaying: (v: (prev: boolean) => boolean) => void;
  debugBlocks: DebugBlock[];
  playOnlyCurrentBlockRef: React.MutableRefObject<boolean>;
  onGoToBlock: (index: number) => void;
  onPlayBlockOnly: (index: number) => void;
  onNextBlock: () => void;
  onPrevBlock: () => void;
  onScrubToFrame: (blockIndex: number, absoluteFrame: number) => void;
}

export function DebugPanel({
  debugOpen,
  setDebugOpen,
  scene,
  sceneIndex,
  elapsedInScene,
  playing,
  setPlaying,
  debugBlocks,
  playOnlyCurrentBlockRef,
  onGoToBlock,
  onPlayBlockOnly,
  onNextBlock,
  onPrevBlock,
  onScrubToFrame,
}: DebugPanelProps) {
  const currentBlock = debugBlocks[sceneIndex];
  const currentFrameInBlock = Math.min(
    Math.floor((elapsedInScene / 1000) * FPS),
    currentBlock ? Math.round((currentBlock.durationMs / 1000) * FPS) - 1 : 0
  );
  const displayFrameFrom = currentBlock ? currentBlock.frameFrom + currentFrameInBlock : 0;

  return (
    <div className="absolute top-20 left-4 right-4 sm:right-auto sm:w-[340px] z-[100] font-mono text-xs">
      <button
        type="button"
        onClick={() => setDebugOpen((o) => !o)}
        className="px-2 py-1.5 rounded bg-gray-900/90 text-white border border-gray-600 hover:bg-gray-800"
      >
        {debugOpen ? '▼ Hide debug' : '▶ Show debug (blocks + frames)'}
      </button>

      {debugOpen && (
        <div className="mt-2 rounded-lg border-2 border-amber-500/80 bg-gray-900/95 text-gray-100 shadow-xl overflow-hidden">
          <div className="px-3 py-2 bg-amber-600/30 border-b border-amber-500/50 font-semibold text-amber-200">
            Hero animation blocks (video_frames_01s @ 10fps)
          </div>

          <div className="px-2 py-1.5 border-b border-gray-600 text-gray-300">
            Current: <span className="text-white font-bold">{scene}</span> · frame{' '}
            <span className="text-amber-300">{displayFrameFrom}</span>
            {currentBlock && (
              <span className="text-gray-500">
                {' '}(block frames {currentBlock.frameFrom}–{currentBlock.frameTo})
              </span>
            )}
            {typeof window !== 'undefined' && currentBlock && (
              <button
                type="button"
                onClick={() => {
                  try {
                    const url = new URL(window.location.href);
                    url.searchParams.set('frame', String(displayFrameFrom));
                    url.searchParams.set('debug', '1');
                    if (navigator && 'clipboard' in navigator) {
                      navigator.clipboard.writeText(url.toString());
                    } else {
                      window.prompt('Copy frame URL', url.toString());
                    }
                  } catch {
                    // ignore
                  }
                }}
                className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded border border-amber-500/60 text-[10px] text-amber-200 hover:bg-amber-500/10"
              >
                copy ?frame URL
              </button>
            )}
          </div>

          <div className="px-2 py-2 border-b border-gray-600 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                if (!playing) playOnlyCurrentBlockRef.current = false;
                setPlaying((p) => !p);
              }}
              className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
            >
              {playing ? '⏸ Pause' : '▶ Play'}
            </button>
            <button
              type="button"
              onClick={onPrevBlock}
              className="px-3 py-1.5 rounded bg-gray-600 hover:bg-gray-500 text-white"
            >
              ◀ Prev
            </button>
            <button
              type="button"
              onClick={onNextBlock}
              className="px-3 py-1.5 rounded bg-gray-600 hover:bg-gray-500 text-white"
            >
              Next ▶
            </button>
          </div>

          <ul className="max-h-[60vh] overflow-y-auto">
            {debugBlocks.map((b) => {
              const isActive = b.index === sceneIndex;
              const sliderValue = isActive ? displayFrameFrom : b.frameFrom;
              return (
                <li key={b.scene}>
                  <div
                    className={`w-full text-left px-2 py-2 flex flex-col gap-1.5 border-b border-gray-700/80 hover:bg-gray-800/80 ${
                      isActive
                        ? 'bg-amber-500/20 border-l-4 border-l-amber-400'
                        : 'border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          if (playing && isActive) {
                            setPlaying(() => false);
                          } else {
                            onPlayBlockOnly(b.index);
                          }
                        }}
                        className={`flex-shrink-0 w-7 h-7 rounded text-white flex items-center justify-center text-[10px] ${
                          playing && isActive
                            ? 'bg-amber-500/80 hover:bg-amber-500'
                            : 'bg-emerald-600/80 hover:bg-emerald-500'
                        }`}
                        title={playing && isActive ? 'Pause' : `Play only ${b.scene}`}
                      >
                        {playing && isActive ? '⏸' : '▶'}
                      </button>
                      <button
                        type="button"
                        onClick={() => onGoToBlock(b.index)}
                        className="flex-1 min-w-0 text-left flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
                      >
                        <span className={isActive ? 'text-amber-200 font-bold' : 'text-gray-300'}>
                          {b.index + 1}. {b.scene}
                        </span>
                        <span className="text-gray-500">{b.durationMs}ms</span>
                        <span className="text-amber-400/90">frames {b.frameFrom}–{b.frameTo}</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <span className="whitespace-nowrap">Frame {sliderValue}/{b.frameTo}</span>
                      <input
                        type="range"
                        min={b.frameFrom}
                        max={b.frameTo}
                        value={sliderValue}
                        onChange={(e) => onScrubToFrame(b.index, Number(e.target.value))}
                        className="flex-1 accent-amber-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="px-3 py-1.5 bg-gray-800/80 text-gray-500 border-t border-gray-700">
            Top Play: from selected stage without stops. Row ▶: play only that block. Click block to jump. ?debug=1
          </div>
        </div>
      )}
    </div>
  );
}
