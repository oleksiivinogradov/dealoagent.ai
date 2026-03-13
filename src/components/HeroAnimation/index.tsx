/**
 * HeroAnimation orchestrator.
 * Owns all playback state and routes to individual scene components.
 * Passes "last frame" state between scenes that share visual continuity.
 */
import React, { useEffect, useState } from 'react';
import {
  Scene,
  SCENE_ORDER,
  SCENE_DURATIONS,
  DEBUG_BLOCKS,
  FPS,
  MS_PER_FRAME,
  SliderLastFrame,
} from './types';

// Scene components
import { SceneIntro } from './scenes/SceneIntro';
import { SceneSprawl } from './scenes/SceneSprawl';
import { SceneSlider } from './scenes/SceneSlider';
import { SceneTooManyApps } from './scenes/SceneTooManyApps';
import { SceneTapering } from './scenes/SceneTapering';
import { SceneTools } from './scenes/SceneTools';
import { SceneContextLost } from './scenes/SceneContextLost';
import { SceneLineDot } from './scenes/SceneLineDot';
import { SceneKillsHuman } from './scenes/SceneKillsHuman';
import { SceneKillsAI } from './scenes/SceneKillsAI';
import { ScenePunchline } from './scenes/ScenePunchline';
import { SceneConvergence } from './scenes/SceneConvergence';
import { SceneHub } from './scenes/SceneHub';
import { DebugPanel } from './DebugPanel';

const DEBUG_DEFAULT =
  typeof window !== 'undefined' && /[?&]debug=1/.test(window.location.search);

export const HeroAnimation = () => {
  const [scene, setScene] = useState<Scene>('intro');
  const [sceneIndex, setSceneIndex] = useState(0);
  const [debugOpen, setDebugOpen] = useState(DEBUG_DEFAULT);
  const [elapsedInScene, setElapsedInScene] = useState(0);
  const [playing, setPlaying] = useState(false);
  const blockStartRef = React.useRef<number>(Date.now());
  /** When true, play effect stops at end of current block */
  const playOnlyCurrentBlockRef = React.useRef(false);

  /** Last-frame state from Slider — forwarded to TooManyApps for seamless dot continuity */
  const sliderLastFrameRef = React.useRef<SliderLastFrame | undefined>(undefined);

  // On first load, allow jumping to an absolute video frame via ?frame=NN
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const frameParam = params.get('frame');
    if (!frameParam) return;
    const absoluteFrame = parseInt(frameParam, 10);
    if (!Number.isFinite(absoluteFrame)) return;

    const block =
      DEBUG_BLOCKS.find((b) => absoluteFrame >= b.frameFrom && absoluteFrame <= b.frameTo) ??
      DEBUG_BLOCKS[0];
    if (!block) return;

    const rawIndexInBlock = absoluteFrame - block.frameFrom;
    const maxFrameIndex = Math.max(0, Math.round((block.durationMs / 1000) * FPS) - 1);
    const frameIndexInBlock = Math.max(0, Math.min(rawIndexInBlock, maxFrameIndex));
    const msWithinScene = frameIndexInBlock * MS_PER_FRAME;

    setPlaying(false);
    setSceneIndex(block.index);
    setScene(block.scene);
    setElapsedInScene(msWithinScene);
    blockStartRef.current = Date.now() - msWithinScene;
  }, []);

  // When scene changes, reset block start time
  useEffect(() => {
    blockStartRef.current = Date.now();
    setElapsedInScene(0);
  }, [sceneIndex]);

  // Playback — advance through scenes
  useEffect(() => {
    if (!playing) return;
    const current = SCENE_ORDER[sceneIndex];
    const duration = SCENE_DURATIONS[current];
    blockStartRef.current = Date.now();

    const t = setTimeout(() => {
      setPlaying(false);
      setElapsedInScene(duration);

      if (!playOnlyCurrentBlockRef.current) {
        setTimeout(() => {
          if (!playOnlyCurrentBlockRef.current) {
            const next = (sceneIndex + 1) % SCENE_ORDER.length;
            setScene(SCENE_ORDER[next]);
            setSceneIndex(next);
            setElapsedInScene(0);
            setPlaying(true);
          }
        }, 1000);
      }
    }, duration);
    return () => clearTimeout(t);
  }, [playing, sceneIndex]);

  // Keep elapsedInScene updated at ~20fps while playing, and sync URL with current frame
  useEffect(() => {
    if (!playing) return;
    const current = SCENE_ORDER[sceneIndex];
    const duration = SCENE_DURATIONS[current];
    const block = DEBUG_BLOCKS[sceneIndex];
    const iv = setInterval(() => {
      const elapsed = Math.min(Date.now() - blockStartRef.current, duration);
      setElapsedInScene(elapsed);
      // Update URL with current absolute frame so it can be shared/inspected
      if (block && typeof window !== 'undefined') {
        try {
          const frameIndexInBlock = Math.min(
            Math.floor((elapsed / 1000) * FPS),
            Math.round((block.durationMs / 1000) * FPS) - 1
          );
          const absoluteFrame = block.frameFrom + frameIndexInBlock;
          const url = new URL(window.location.href);
          url.searchParams.set('frame', String(absoluteFrame));
          url.searchParams.set('debug', '1');
          window.history.replaceState({}, '', url.toString());
        } catch {
          // ignore
        }
      }
    }, 50);
    return () => clearInterval(iv);
  }, [playing, sceneIndex]);

  // Extra update for debug display (100ms cadence)
  useEffect(() => {
    if (!debugOpen || !playing) return;
    const current = SCENE_ORDER[sceneIndex];
    const duration = SCENE_DURATIONS[current];
    const iv = setInterval(() => {
      const elapsed = Math.min(Date.now() - blockStartRef.current, duration);
      setElapsedInScene(elapsed);
    }, 100);
    return () => clearInterval(iv);
  }, [debugOpen, playing, sceneIndex]);

  // ---- Navigation helpers ----
  const goToBlock = (index: number) => {
    setPlaying(false);
    setSceneIndex(index);
    setScene(SCENE_ORDER[index]);
    setElapsedInScene(0);
  };

  const playBlockOnly = (index: number) => {
    playOnlyCurrentBlockRef.current = true;
    setPlaying(false);
    setSceneIndex(index);
    setScene(SCENE_ORDER[index]);
    setElapsedInScene(0);
    blockStartRef.current = Date.now();
    setPlaying(true);
  };

  const nextBlock = () => {
    setPlaying(false);
    const next = (sceneIndex + 1) % SCENE_ORDER.length;
    setSceneIndex(next);
    setScene(SCENE_ORDER[next]);
    setElapsedInScene(0);
  };

  const prevBlock = () => {
    setPlaying(false);
    const prev = sceneIndex === 0 ? SCENE_ORDER.length - 1 : sceneIndex - 1;
    setSceneIndex(prev);
    setScene(SCENE_ORDER[prev]);
    setElapsedInScene(0);
  };

  const scrubToFrameInBlock = (blockIndex: number, absoluteFrame: number) => {
    const block = DEBUG_BLOCKS[blockIndex];
    if (!block) return;
    const clampedFrame = Math.max(block.frameFrom, Math.min(absoluteFrame, block.frameTo));
    const frameIndexInBlock = clampedFrame - block.frameFrom;
    const maxFrameIndex = Math.max(0, Math.round((block.durationMs / 1000) * FPS) - 1);
    const safeFrameIndex = Math.max(0, Math.min(frameIndexInBlock, maxFrameIndex));
    const msWithinScene = safeFrameIndex * MS_PER_FRAME;

    setPlaying(false);
    setSceneIndex(blockIndex);
    setScene(block.scene);
    setElapsedInScene(msWithinScene);
    blockStartRef.current = Date.now() - msWithinScene;

    if (typeof window !== 'undefined') {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('frame', String(clampedFrame));
        url.searchParams.set('debug', '1');
        window.history.replaceState({}, '', url.toString());
      } catch {
        // ignore
      }
    }
  };

  const show = (s: Scene) => scene === s;

  const sceneProps = { elapsedInScene };

  return (
    <section
      className={`relative w-full h-screen min-h-[700px] flex items-center justify-center -mt-16 pt-16 ${
        scene === 'tooManyApps' ? 'overflow-visible' : 'overflow-hidden'
      }`}
    >
      {/* ---- Backgrounds ---- */}

      {/* White/pink gradient — intro, sprawl, slider, tooManyApps, tapering, kills, punchline */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-white to-[#f8ecee] transition-opacity duration-500 ${
          ['intro', 'sprawl', 'slider', 'tooManyApps', 'tapering', 'killsHuman', 'killsAI', 'punchline'].includes(scene)
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Dark starry — tools, contextLost */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          show('tools') || show('contextLost') ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Light grey — lineDot */}
      <div
        className={`absolute inset-0 bg-[#f5f5f5] transition-opacity duration-500 ${
          show('lineDot') ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Convergence/Hub gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#fefafb] to-[#f8ecee] transition-opacity duration-500 ${
          show('convergence') || show('hub') ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* ---- Scene components ---- */}
      {show('intro') && <SceneIntro {...sceneProps} />}
      {show('sprawl') && <SceneSprawl {...sceneProps} />}
      {show('slider') && (
        <SceneSlider
          {...sceneProps}
          onLastFrame={(state) => {
            sliderLastFrameRef.current = state;
          }}
        />
      )}
      {show('tooManyApps') && (
        <SceneTooManyApps {...sceneProps} startFrame={sliderLastFrameRef.current} />
      )}
      {show('tapering') && <SceneTapering {...sceneProps} />}
      {show('tools') && <SceneTools {...sceneProps} />}
      {show('contextLost') && <SceneContextLost {...sceneProps} />}
      {show('lineDot') && <SceneLineDot {...sceneProps} />}
      {show('killsHuman') && <SceneKillsHuman {...sceneProps} />}
      {show('killsAI') && <SceneKillsAI {...sceneProps} />}
      {show('punchline') && <ScenePunchline {...sceneProps} />}
      {show('convergence') && <SceneConvergence {...sceneProps} />}
      {show('hub') && <SceneHub {...sceneProps} />}

      {/* Scroll hint when hub is visible */}
      <div
        className={`absolute bottom-8 z-50 transition-all duration-500 ${
          show('hub') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="animate-bounce flex flex-col items-center text-gray-400">
          <span className="text-xs uppercase tracking-widest font-semibold mb-2">Explore Features</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Debug panel */}
      <DebugPanel
        debugOpen={debugOpen}
        setDebugOpen={setDebugOpen}
        scene={scene}
        sceneIndex={sceneIndex}
        elapsedInScene={elapsedInScene}
        playing={playing}
        setPlaying={setPlaying}
        debugBlocks={DEBUG_BLOCKS}
        playOnlyCurrentBlockRef={playOnlyCurrentBlockRef}
        onGoToBlock={goToBlock}
        onPlayBlockOnly={playBlockOnly}
        onNextBlock={nextBlock}
        onPrevBlock={prevBlock}
        onScrubToFrame={scrubToFrameInBlock}
      />
    </section>
  );
};
