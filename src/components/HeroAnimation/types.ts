/**
 * Shared types, constants, and scene definitions for the HeroAnimation.
 */

export type Scene =
  | 'intro'
  | 'sprawl'
  | 'slider'
  | 'tooManyApps'
  | 'tapering'
  | 'tools'
  | 'contextLost'
  | 'lineDot'
  | 'killsHuman'
  | 'killsAI'
  | 'punchline'
  | 'convergence'
  | 'hub';

/** Common props passed to every scene component */
export interface SceneProps {
  /** Time elapsed inside the current scene, in milliseconds */
  elapsedInScene: number;
}

/** State the Slider scene passes to TooManyApps so the dot starts exactly where it ended */
export interface SliderLastFrame {
  dotX: number;
  dotY: number;
  drawnLen: number;
  dotScale: number;
  originX: number;
  originY: number;
}

/** State the Sprawl scene passes to Slider (nodes are fully visible) */
export interface SprawlLastFrame {
  fullyShown: true;
}

export const THEME = {
  roseText: 'text-[#c04b5f]',
  roseBorder: 'border-[#f1c5cb]',
  magentaBox: 'bg-[#e83f71] text-white',
  arrowFill: '#df8a9a',
  bgPink: 'from-white to-[#fef0f2]',
} as const;

// Scene duration in ms (matches video flow)
export const SCENE_DURATIONS: Record<Scene, number> = {
  intro: 900,
  sprawl: 4000,
  slider: 2800,
  tooManyApps: 2200,
  tapering: 1200,
  tools: 2200,
  contextLost: 2200,
  lineDot: 1000,
  killsHuman: 1800,
  killsAI: 1800,
  punchline: 2500,
  convergence: 1500,
  hub: 12000,
};

export const SCENE_ORDER: Scene[] = [
  'intro',
  'sprawl',
  'slider',
  'tooManyApps',
  'tapering',
  'tools',
  'contextLost',
  'lineDot',
  'killsHuman',
  'killsAI',
  'punchline',
  'convergence',
  'hub',
];

/** 10 fps from video_frames_01s extraction */
export const FPS = 10;
export const MS_PER_FRAME = 1000 / FPS;

export interface DebugBlock {
  index: number;
  scene: Scene;
  durationMs: number;
  frameFrom: number;
  frameTo: number;
}

export const DEBUG_BLOCKS: DebugBlock[] = (() => {
  let frameStart = 1;
  return SCENE_ORDER.map((scene, index) => {
    const durationMs = SCENE_DURATIONS[scene];
    const frameCount = Math.round((durationMs / 1000) * FPS);
    const frameTo = frameStart + frameCount - 1;
    const block = { index, scene, durationMs, frameFrom: frameStart, frameTo };
    frameStart = frameTo + 1;
    return block;
  });
})();
