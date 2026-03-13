import { useEffect, useRef, useState } from 'react';
import './MainPageAnimation.css';

// Animation is ~310 frames total at 30fps = ~10.3 seconds
// We run it on a 10s timeline and map progress to frames

interface AnimState {
  frame: number;
  progress: number; // 0..1
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.min(1, Math.max(0, t));
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Map progress 0..1 to frame 0..310
function progressToFrame(p: number): number {
  return p * TOTAL_FRAMES;
}

// Opacity helpers – fade in/out between frame ranges
function fadeIn(frame: number, startFrame: number, endFrame: number): number {
  if (frame <= startFrame) return 0;
  if (frame >= endFrame) return 1;
  return easeInOut((frame - startFrame) / (endFrame - startFrame));
}

function fadeOut(frame: number, startFrame: number, endFrame: number): number {
  if (frame <= startFrame) return 1;
  if (frame >= endFrame) return 0;
  return easeInOut(1 - (frame - startFrame) / (endFrame - startFrame));
}

// Clamp 0..1
function clamp01(v: number) { return Math.min(1, Math.max(0, v)); }

const TOTAL_FRAMES = 520;
const BASE_DURATION = 18000; // ms at 1× speed (increased for more frames)

export default function MainPageAnimation() {
  const [animState, setAnimState] = useState<AnimState>({ frame: 0, progress: 0 });
  const [paused, setPaused] = useState(false);
  const [looping, setLooping] = useState(true);
  const [speed, setSpeed] = useState(1);
  const pausedRef = useRef(false);
  const loopingRef = useRef(true);
  const speedRef = useRef(1);
  const startTimeRef = useRef<number | null>(null);
  const pausedAtRef = useRef<number>(0); // progress 0..1 when paused
  const rafRef = useRef<number>(0);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const subtitleRef = useRef<SVGTextElement | null>(null);
  const usRef = useRef<SVGTSpanElement | null>(null);

  // We center the text using absolute positioning in CSS to guarantee it always aligns
  // relative to the 1000x600 viewBox standard, bypassing browser variance in font tracking.
  const DEFAULT_US_BOUNDS = { x: 635, y: 404, width: 70, height: 46 };
  const DEFAULT_US_ANCHOR = { x: 705, y: 450 };
  const [usBounds, setUsBounds] = useState(DEFAULT_US_BOUNDS);
  const [usAnchor, setUsAnchor] = useState(DEFAULT_US_ANCHOR);
  const SHOW_ANCHOR_DEBUG = false;

  // Keep refs in sync with React state used by the rAF loop.
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    loopingRef.current = looping;
  }, [looping]);

  useEffect(() => {
    const updateDotOrigin = () => {
      const us = usRef.current;
      const subtitle = subtitleRef.current;
      const svg = svgRef.current;
      if (!us && !subtitle) return;
      try {
        // Exact anchor source: baseline + glyph metrics for the "us" tspan.
        if (us && svg) {
          const text = us.textContent || 'us';
          const style = window.getComputedStyle(us);
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const hasGlyphApis = us.getNumberOfChars() > 0;
          if (ctx && hasGlyphApis) {
            ctx.font = `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
            const m = ctx.measureText(text);
            const start = us.getStartPositionOfChar(0);
            const baselineY = start.y;

            if (
              Number.isFinite(m.actualBoundingBoxAscent) &&
              Number.isFinite(m.actualBoundingBoxDescent) &&
              Number.isFinite(m.actualBoundingBoxLeft) &&
              Number.isFinite(m.actualBoundingBoxRight)
            ) {
              const exactBounds = {
                x: start.x + m.actualBoundingBoxLeft,
                y: baselineY - m.actualBoundingBoxAscent,
                width: m.actualBoundingBoxRight - m.actualBoundingBoxLeft,
                height: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent,
              };
              const exactAnchor = {
                x: start.x + m.actualBoundingBoxRight,
                y: baselineY + m.actualBoundingBoxDescent,
              };
              if (
                Number.isFinite(exactBounds.x) &&
                Number.isFinite(exactBounds.y) &&
                Number.isFinite(exactBounds.width) &&
                Number.isFinite(exactBounds.height) &&
                Number.isFinite(exactAnchor.x) &&
                Number.isFinite(exactAnchor.y) &&
                exactBounds.width > 0 &&
                exactBounds.height > 0
              ) {
                setUsBounds(exactBounds);
                setUsAnchor(exactAnchor);
                return;
              }
            }
          }

          // Fallback 1: SVG-space bbox on the tspan itself.
          const exact = us.getBBox();
          if (
            Number.isFinite(exact.x) &&
            Number.isFinite(exact.y) &&
            Number.isFinite(exact.width) &&
            Number.isFinite(exact.height)
          ) {
            setUsBounds(exact);
            setUsAnchor({ x: exact.x + exact.width, y: exact.y + exact.height });
            return;
          }
        }

        // Fallback 2: combine the last two chars from subtitle.
        if (subtitle) {
          const totalChars = subtitle.getNumberOfChars();
          if (totalChars < 2) return;
          const usCharIndex = Math.max(0, totalChars - 2); // "u" in "us."
          const uBounds = subtitle.getExtentOfChar(usCharIndex);
          const sBounds = subtitle.getExtentOfChar(usCharIndex + 1);
          const fallback = {
            x: Math.min(uBounds.x, sBounds.x),
            y: Math.min(uBounds.y, sBounds.y),
            width: Math.max(uBounds.x + uBounds.width, sBounds.x + sBounds.width) - Math.min(uBounds.x, sBounds.x),
            height: Math.max(uBounds.y + uBounds.height, sBounds.y + sBounds.height) - Math.min(uBounds.y, sBounds.y),
          };
          if (
            Number.isFinite(fallback.x) &&
            Number.isFinite(fallback.y) &&
            Number.isFinite(fallback.width) &&
            Number.isFinite(fallback.height)
          ) {
            setUsBounds(fallback);
            setUsAnchor({ x: fallback.x + fallback.width, y: fallback.y + fallback.height });
          }
        }
      } catch {
        // Keep fallback bounds if browser can't measure yet.
      }
    };

    const measureOnNextFrame = () => requestAnimationFrame(updateDotOrigin);
    const resizeHandler = () => measureOnNextFrame();

    const rafId = measureOnNextFrame();
    window.addEventListener('resize', resizeHandler);

    if ('fonts' in document) {
      document.fonts.ready.then(() => updateDotOrigin());
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    const duration = () => BASE_DURATION / speedRef.current;

    const animate = (timestamp: number) => {
      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      if (startTimeRef.current === null) {
        // Resume from where we paused
        startTimeRef.current = timestamp - pausedAtRef.current * duration();
      }
      const elapsed = timestamp - startTimeRef.current;
      let progress = elapsed / duration();

      if (progress >= 1) {
        if (loopingRef.current) {
          startTimeRef.current = timestamp;
          progress = 0;
        } else {
          progress = 1;
          setPaused(true);
          pausedAtRef.current = 1;
        }
      }

      pausedAtRef.current = progress;
      const frame = progressToFrame(progress);
      setAnimState({ frame, progress });
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // single rAF loop; reads all values via refs

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const p = Number(e.target.value) / TOTAL_FRAMES;
    pausedAtRef.current = p;
    startTimeRef.current = null; // force recalc on resume
    setAnimState({ frame: Number(e.target.value), progress: p });
    if (!pausedRef.current) setPaused(true); // pause while scrubbing
  };

  const handleScrubEnd = () => {
    // resume after user releases scrubber
    startTimeRef.current = null;
    setPaused(false);
  };

  const stepFrame = (delta: number) => {
    setPaused(true);
    setAnimState(prev => {
      const next = Math.min(TOTAL_FRAMES, Math.max(0, prev.frame + delta));
      const p = next / TOTAL_FRAMES;
      pausedAtRef.current = p;
      startTimeRef.current = null;
      return { frame: next, progress: p };
    });
  };

  const restart = () => {
    pausedAtRef.current = 0;
    startTimeRef.current = null;
    setPaused(false);
  };

  const { frame } = animState;

  // ─── TEXT OPACITIES ──────────────────────────────────────────────────────────
  // "Work" appears at frame 70 (light grey), darkens at 80
  const workOpacity = fadeIn(frame, 60, 75);
  const workColor = frame < 80 ? '#9CA3AF' : frame < 100 ? `rgb(${Math.round(lerp(156, 17, (frame - 80) / 20))},${Math.round(lerp(163, 24, (frame - 80) / 20))},${Math.round(lerp(175, 39, (frame - 80) / 20))})` : '#111827';



  // "Sprawl" fades in at frame 90, both merge into centered "Work Sprawl" at 100
  const sprawlOpacity = frame < 85 ? 0 : frame < 100 ? fadeIn(frame, 85, 100) : 0;
  // After 100 they become one single text element
  const combinedOpacity = frame < 95 ? 0 : fadeIn(frame, 95, 108);
  // Force fast split->combined merge in 95-100 to avoid ghost duplicate words.
  const mergeProgress = frame < 95 ? 0 : frame < 100 ? (frame - 95) / 5 : 1;
  const splitOpacityFactor = 1 - mergeProgress;
  const workSplitOpacity = workOpacity * splitOpacityFactor;
  const sprawlSplitOpacity = sprawlOpacity * splitOpacityFactor;
  const workX_Merge = 35;
  const sprawlX_Merge = lerp(65, 50, mergeProgress);

  // Subtitle "is" → "is killing" → "is killing us"
  const isOpacity = fadeIn(frame, 135, 148);
  // "killing" fades in at 148
  const killingOpacity = fadeIn(frame, 145, 158);
  const killingColor = frame < 160 ? '#9CA3AF' : '#111827';
  // "us" fades in at 168
  const usOpacity = fadeIn(frame, 165, 178);
  const usColor = frame < 180 ? '#9CA3AF' : '#111827';
  // Fade out "us" once motion takeover starts.
  const usTakeoverOpacity = frame < 348 ? 1 : fadeOut(frame, 348, 360);
  const usVisibleOpacity = usOpacity * usTakeoverOpacity;
  const punctuationDotOpacity = fadeIn(frame, 175, 185);

  // ─── MIND MAP NODE OPACITIES ─────────────────────────────────────────────────
  // Left nodes (Ideas, Executive, Requests, Fixes) fade in at 140
  const mindMapFadeOut = fadeOut(frame, 320, 340);
  const leftNodesOpacity = fadeIn(frame, 132, 145) * mindMapFadeOut;

  // Top center list node fades in at 150
  const topListOpacity = fadeIn(frame, 145, 158) * mindMapFadeOut;
  // Top list items fill in
  const topListItem2Opacity = fadeIn(frame, 155, 165) * mindMapFadeOut;

  // Translucent nodes at 170, solid at 180
  const approvalOpacity = (frame < 168 ? 0 : frame < 180 ? clamp01(fadeIn(frame, 168, 178) * 0.5) : 1) * mindMapFadeOut;
  const missingContextOpacity = (frame < 168 ? 0 : frame < 180 ? clamp01(fadeIn(frame, 168, 178) * 0.5) : 1) * mindMapFadeOut;
  const mazeOpacity = (frame < 168 ? 0 : frame < 180 ? clamp01(fadeIn(frame, 168, 178) * 0.5) : 1) * mindMapFadeOut;

  // "Decisions get LOST" at 190
  const decisionsOpacity = (frame < 188 ? 0 : frame < 198 ? clamp01(fadeIn(frame, 188, 198) * 0.6) : 1) * mindMapFadeOut;

  // "EXECS CAN'T SEE" at 200
  const execsOpacity = (frame < 198 ? 0 : frame < 210 ? clamp01(fadeIn(frame, 198, 208) * 0.6) : 1) * mindMapFadeOut;

  // "Feedback SCATTERED" at 200
  const feedbackOpacity = (frame < 198 ? 0 : frame < 210 ? clamp01(fadeIn(frame, 198, 208) * 0.6) : 1) * mindMapFadeOut;

  // "REWORK" at 220
  const reworkOpacity = (frame < 218 ? 0 : frame < 228 ? clamp01(fadeIn(frame, 218, 228) * 0.6) : 1) * mindMapFadeOut;

  // "8 HOURS" at 220
  const hoursOpacity = (frame < 218 ? 0 : frame < 228 ? clamp01(fadeIn(frame, 218, 228) * 0.6) : 1) * mindMapFadeOut;

  // "Productivity VANISHES" pink node at 240, grows to 90% at 250, solid at 260
  const prodOpacity = (frame < 238 ? 0 : frame < 260 ? fadeIn(frame, 238, 258) : 1) * mindMapFadeOut;
  const prodBg = frame < 258 ? '#F472B6' : '#E11D48';

  // Dot + line anchor from exact "us" painted bounds.
  const DOT_RADIUS = 8;
  const DOT_GAP_RIGHT = 4;
  const DOT_COLOR = '#111827';
  const dotBaseX = usAnchor.x + DOT_GAP_RIGHT + DOT_RADIUS;
  const dotBaseY = usAnchor.y - DOT_RADIUS;

  // Frame 300+: same dot, same size, horizontal-only movement.
  // Keep dot speed lower than camera follow speed.
  const horizontalMoveProgress = frame < 300 ? 0 : frame < 430 ? (frame - 300) / 130 : 1;
  const movingDotX = dotBaseX + horizontalMoveProgress * 170;
  const movingDotY = dotBaseY;
  const movingSegmentOpacity = frame >= 300 && frame < 440 ? (frame < 430 ? 1 : fadeOut(frame, 430, 440)) : 0;
  // Zoom / Shift (320-360)
  const zoomFactor = frame < 320 ? 1 : 
                     frame < 330 ? lerp(1, 1.2, (frame - 320) / 10) :
                     frame < 340 ? lerp(1.2, 2.5, (frame - 330) / 10) :
                     frame < 350 ? lerp(2.5, 5, (frame - 340) / 10) :
                     frame < 360 ? lerp(5, 10, (frame - 350) / 10) : 
                     frame < 430 ? 10 :
                     frame < 460 ? lerp(10, 1, (frame - 430) / 30) : 1;
  // Camera follows dot and keeps it centered as zoom increases.
  const cameraPanProgress = frame < 300 ? 0 : frame < 348 ? (frame - 300) / 48 : 1;
  const targetCenterX = 500; // screen center x in viewBox coords
  const targetCenterY = 300; // screen center y in viewBox coords
  // Group transform is scale-around-dotBase then camera translate.
  // To keep moving dot centered, pan must compensate current zoom.
  const targetPanX = Math.max(0, (movingDotX - dotBaseX) * zoomFactor + dotBaseX - targetCenterX);
  const targetPanY = Math.max(0, dotBaseY - targetCenterY);
  const panXStrength = 1;
  const panYStrength = 1;
  // "Camera moves right/down" => scene shifts left/up by pan amount.
  const cameraPanX = lerp(0, targetPanX * panXStrength, cameraPanProgress);
  const cameraPanY = lerp(0, targetPanY * panYStrength, cameraPanProgress);
  const textPanXPercent = (cameraPanX / 1000) * 100;
  const textPanYPercent = (cameraPanY / 600) * 100;

  // ─── EXTENDED ANIMATION (320-520) ───────────────────────────────────────────

  const workX_Zoom = 35;
  const sprawlX_Zoom = 50;
  const isKillingUsX_Zoom = 50;


  // Disabled while horizontal debug path is required.
  const thickLineOpacity = 0;
  
  // Panning/Blur (370-410)
  const blurOpacity = fadeIn(frame, 365, 375) * fadeOut(frame, 410, 420);

  // "Too many apps..." pull back (440-520)
  const tooManyOpacity = fadeIn(frame, 435, 450);
  const tooManyX = frame < 460 ? 25 : frame < 470 ? lerp(25, 20, (frame - 460) / 10) : 15;
  const appsOpacity = fadeIn(frame, 465, 475);
  
  // Chaotic loopy path opacity and morphing
  const loopyOpacity = fadeIn(frame, 465, 475);
  const iconsOpacity = fadeIn(frame, 470, 500);

  // Red speed-lines from frame 358 to 430: fixed baseline, balanced up/down offsets.
  const quickSpeedOpacity = frame >= 358 && frame <= 430 ? fadeIn(frame, 358, 366) * fadeOut(frame, 424, 430) : 0;
  const speedFrame = Math.max(358, Math.min(frame, 430));
  const renderedDotCenterY = (movingDotY - dotBaseY) * zoomFactor + dotBaseY - cameraPanY;
  const renderedDotRadius = DOT_RADIUS * zoomFactor;
  const speedBaselineY = renderedDotCenterY;
  const speedInset = renderedDotRadius * 2; // at least one full dot diameter from center line
  const speedLineSpecs = [
    { offset: -(speedInset + 20), phase: 0, cycle: 26, width: 4, alpha: 0.62, length: 360 },
    { offset: -(speedInset + 44), phase: 6, cycle: 22, width: 3, alpha: 0.52, length: 300 },
    { offset: -(speedInset + 72), phase: 9, cycle: 30, width: 3, alpha: 0.42, length: 320 },
    { offset: speedInset + 20, phase: 11, cycle: 24, width: 4, alpha: 0.58, length: 340 },
    { offset: speedInset + 44, phase: 17, cycle: 28, width: 3, alpha: 0.48, length: 380 },
    { offset: speedInset + 72, phase: 14, cycle: 32, width: 3, alpha: 0.40, length: 320 },
  ] as const;
  const speedLines = speedLineSpecs.map((spec) => {
    const local = (speedFrame - 358 + spec.phase) % spec.cycle;
    const activeLen = 10;
    const isActive = local < activeLen;
    if (!isActive) {
      return { ...spec, visible: false, y: speedBaselineY + spec.offset, x1: 0, x2: 0, opacity: 0 };
    }
    const t = local / activeLen; // 0..1 within this burst
    const x1 = 1080 - t * 2000; // right -> left sweep
    const x2 = x1 + spec.length;
    const fade = t < 0.2 ? t / 0.2 : t > 0.85 ? (1 - t) / 0.15 : 1;
    return {
      ...spec,
      visible: true,
      y: speedBaselineY + spec.offset,
      x1,
      x2,
      opacity: quickSpeedOpacity * spec.alpha * Math.max(0, fade),
    };
  });

  return (
    <div className="mpa-root">
      {/* SVG Canvas */}
      <svg
        ref={svgRef}
        className="mpa-svg"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform={`translate(${-cameraPanX} ${-cameraPanY}) translate(${dotBaseX} ${dotBaseY}) scale(${zoomFactor}) translate(${-dotBaseX} ${-dotBaseY})`}
        >
        {/* ── LEFT NODES ── */}
        <g opacity={leftNodesOpacity}>
          {/* Ideas */}
          <rect x="20" y="60" width="80" height="44" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="60" y="87" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#991B1B" textAnchor="middle">Ideas</text>
          <line x1="100" y1="82" x2="160" y2="90" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="160,90 152,93 153,85" fill="#991B1B"/>

          {/* Executive Direction */}
          <rect x="10" y="210" width="80" height="50" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="50" y="230" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#991B1B" textAnchor="middle">Executive</text>
          <text x="50" y="245" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#991B1B" textAnchor="middle">Direction</text>
          <line x1="90" y1="235" x2="155" y2="168" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="155,168 152,176 146,171" fill="#991B1B"/>

          {/* Requests */}
          <rect x="10" y="360" width="80" height="44" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="50" y="387" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#991B1B" textAnchor="middle">Requests</text>
          <line x1="90" y1="382" x2="155" y2="270" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="155,270 154,279 148,275" fill="#991B1B"/>

          {/* Fixes */}
          <rect x="30" y="510" width="80" height="44" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="70" y="537" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="500" fill="#991B1B" textAnchor="middle">Fixes</text>
          <line x1="110" y1="530" x2="158" y2="420" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="158,420 159,429 151,426" fill="#991B1B"/>
        </g>

        {/* ── TOP CENTER LIST NODE ── */}
        <g opacity={topListOpacity}>
          <rect x="170" y="30" width="160" height="130" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="178" y="58" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#991B1B">1. Is this a PRIORITY?</text>
          <g opacity={topListItem2Opacity}>
            <text x="178" y="80" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="400" fill="#991B1B">2. HOW will work get done?</text>
            <text x="178" y="100" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="400" fill="#991B1B">3. WHO will do the work?</text>
            <text x="178" y="120" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#991B1B">4. Do we have all</text>
            <text x="178" y="136" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#991B1B">REQUIRED info?</text>
          </g>

          {/* Arrow out right from node */}
          <line x1="330" y1="58" x2="395" y2="48" stroke="#991B1B" strokeWidth="1.2" opacity={topListItem2Opacity}/>
          <polygon points="390,44 398,48 390,52" fill="#991B1B" opacity={topListItem2Opacity}/>
          <line x1="330" y1="120" x2="400" y2="240" stroke="#991B1B" strokeWidth="1.2" opacity={topListItem2Opacity}/>
          <polygon points="400,240 392,237 399,232" fill="#991B1B" opacity={topListItem2Opacity}/>
        </g>

        {/* ── MID NODES ── */}
        {/* Approvals take FOREVER */}
        <g opacity={approvalOpacity}>
          <rect x="400" y="24" width="130" height="48" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="465" y="44" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">Approvals take</text>
          <text x="465" y="62" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#991B1B" textAnchor="middle">FOREVER</text>
        </g>

        {/* Context is MISSING */}
        <g opacity={missingContextOpacity}>
          <rect x="220" y="480" width="110" height="48" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="275" y="500" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">Context is</text>
          <text x="275" y="518" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#991B1B" textAnchor="middle">MISSING</text>
          <line x1="275" y1="480" x2="290" y2="420" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="290,420 283,425 291,428" fill="#991B1B"/>
        </g>

        {/* NAVIGATING A MAZE */}
        <g opacity={mazeOpacity}>
          <rect x="420" y="492" width="240" height="64" rx="8" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="540" y="524" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#991B1B" textAnchor="middle">NAVIGATING A MAZE</text>
          <text x="540" y="544" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">of disconnected apps</text>
        </g>

        {/* ── DECISIONS LOST ── */}
        <g opacity={decisionsOpacity}>
          <rect x="545" y="132" width="115" height="52" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="602" y="153" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">Decisions get</text>
          <text x="602" y="173" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#991B1B" textAnchor="middle">LOST</text>
          <line x1="530" y1="78" x2="560" y2="132" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="560,132 552,129 558,124" fill="#991B1B"/>
        </g>

        {/* ── FEEDBACK SCATTERED ── */}
        <g opacity={feedbackOpacity}>
          <rect x="700" y="542" width="130" height="50" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="765" y="562" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">Feedback is</text>
          <text x="765" y="580" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#991B1B" textAnchor="middle">SCATTERED</text>
          <line x1="700" y1="568" x2="665" y2="550" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="665,550 674,550 670,558" fill="#991B1B"/>
        </g>

        {/* ── REWORK ── */}
        <g opacity={reworkOpacity}>
          <rect x="836" y="30" width="160" height="54" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="916" y="52" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">REWORK happens</text>
          <text x="916" y="70" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">causing delays</text>
        </g>

        {/* ── EXECS CAN'T SEE (overlaps REWORK) ── */}
        <g opacity={execsOpacity}>
          <rect x="636" y="26" width="150" height="58" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="711" y="50" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">EXECS CAN'T SEE</text>
          <text x="711" y="68" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#991B1B" textAnchor="middle">to unblock</text>
          {/* Decisions -> EXECS from top border of Decisions box */}
          <line x1="602" y1="132" x2="690" y2="84" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="690,84 681,86 685,92" fill="#991B1B"/>
          {/* EXECS -> REWORK */}
          <line x1="786" y1="56" x2="836" y2="56" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="830,52 838,56 830,60" fill="#991B1B"/>
          {/* EXECS -> 8 HOURS (downward) */}
          <line x1="752" y1="84" x2="798" y2="132" stroke="#991B1B" strokeWidth="1.2"/>
          <polygon points="798,132 789,130 793,124" fill="#991B1B"/>
        </g>

        {/* ── 8 HOURS SPENT ── */}
        <g opacity={hoursOpacity}>
          <rect x="755" y="132" width="130" height="70" rx="4" fill="white" stroke="#991B1B" strokeWidth="1.5"/>
          <text x="820" y="158" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#991B1B" textAnchor="middle">8 HOURS SPENT</text>
          <text x="820" y="176" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="400" fill="#991B1B" textAnchor="middle">in meetings with</text>
          <text x="820" y="194" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="400" fill="#991B1B" textAnchor="middle">no outcome</text>
        </g>

        {/* ── PRODUCTIVITY VANISHES (pink) ── */}
        <g opacity={prodOpacity}>
          <rect x="810" y="365" width="160" height="54" rx="4" fill={prodBg} stroke="#DB2777" strokeWidth="1.5"/>
          <text x="890" y="388" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">Productivity</text>
          <text x="890" y="406" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">VANISHES</text>
          <line x1="820" y1="202" x2="860" y2="365" stroke="#991B1B" strokeWidth="1.2" opacity={prodOpacity}/>
          <line x1="890" y1="84" x2="890" y2="365" stroke="#991B1B" strokeWidth="1.2" opacity={prodOpacity}/>
          <polygon points="860,365 854,358 862,356" fill="#991B1B" opacity={prodOpacity}/>
          <polygon points="886,359 894,359 890,367" fill="#991B1B" opacity={prodOpacity}/>
        </g>

        {/* Static punctuation dot: visible from ~frame 180 until motion starts */}
        <g opacity={frame < 300 ? punctuationDotOpacity : 0}>
          <circle cx={dotBaseX} cy={dotBaseY} r={DOT_RADIUS} fill={DOT_COLOR} />
        </g>

        {/* Frame 300+: horizontal moving dot with trailing line */}
        <g opacity={movingSegmentOpacity}>
          <line
            x1={dotBaseX}
            y1={dotBaseY}
            x2={movingDotX}
            y2={movingDotY}
            stroke={DOT_COLOR}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx={movingDotX} cy={movingDotY} r={DOT_RADIUS} fill={DOT_COLOR} />
        </g>

        {/* ── THICK LINE & ZOOM CIRCLE (disabled) ── */}
        <g opacity={thickLineOpacity}>
          <line 
            x1={dotBaseX}
            y1={dotBaseY}
            x2={movingDotX}
            y2={movingDotY}
            stroke={DOT_COLOR}
            strokeWidth={5}
            strokeLinecap="round"
          />
          <circle 
            cx={movingDotX}
            cy={movingDotY}
            r={DOT_RADIUS} 
            fill={DOT_COLOR}
          />
        </g>

        {/* ── DEBUG GUIDES: "us" bounds + baseline + origin dot ── */}
        {SHOW_ANCHOR_DEBUG && (
          <g opacity={0.95} pointerEvents="none">
            <rect
              x={usBounds.x}
              y={usBounds.y}
              width={usBounds.width}
              height={usBounds.height}
              fill="none"
              stroke="#22C55E"
              strokeWidth="0.8"
            />
            <line
              x1={usBounds.x - 24}
              y1={usAnchor.y}
              x2={usAnchor.x + 80}
              y2={usAnchor.y}
              stroke="#22C55E"
              strokeWidth="0.8"
            />
            <circle
              cx={dotBaseX}
              cy={dotBaseY}
              r={1.5}
              fill="none"
              stroke="#22C55E"
              strokeWidth="0.8"
            />
          </g>
        )}

        {/* ── MOTION BLUR LINES (370-410) ── */}
        <g opacity={blurOpacity}>
          <line x1="28%" y1="41%" x2="90%" y2="41%" stroke="#fbcfe8" strokeWidth="4" opacity="0.6"/>
          <line x1="18%" y1="67%" x2="80%" y2="67%" stroke="#fbcfe8" strokeWidth="4" opacity="0.6"/>
          <line x1="10%" y1="20%" x2="95%" y2="20%" stroke="#fbcfe8" strokeWidth="4" opacity="0.4"/>
        </g>

        {/* ── CHAOTIC LOOPY PATH AND ICONS (470-520) ── */}
        <g opacity={loopyOpacity}>
          <path 
            d="M0,420 C150,420 250,510 400,270 C475,120 350,30 300,60 C250,90 275,240 325,300 C375,360 450,300 350,425 C325,475 250,450 290,460" 
            stroke="black" 
            strokeWidth="3" 
            fill="none"
            transform="scale(2) translate(0, -100)"
            style={{ transition: 'all 0.5s ease' }}
          />
          <g opacity={iconsOpacity}>
            {/* Slack */}
            <rect x="580" y="80" width="60" height="48" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
            <circle cx="610" cy="104" r="12" fill="#36C5F0"/>
            {/* Warning triangle */}
            {frame > 480 && <polygon points="580,70 610,20 640,70" fill="#FACC15"/>}

            {/* Monday */}
            <rect x="820" y="150" width="70" height="54" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
            <circle cx="870" cy="150" r="10" fill="#EF4444"/>
            <text x="870" y="154" fontFamily="Inter" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">1</text>

            {/* Jira / Notion */}
            <rect x="800" y="348" width="50" height="42" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="2"/>
            <text x="825" y="375" fontFamily="Inter" fontSize="14" fontWeight="900" fill="black" textAnchor="middle">N</text>
          </g>
        </g>
        
        {/* ── NATIVE SVG SUBTITLE ── */}
        {/* Placed natively inside the SVG to guarantee 1:1 scaling alignment with the dot */}
        <text
          ref={subtitleRef}
          x={zoomFactor > 1.2 ? `50%` : "50%"} 
          y="440" 
          textAnchor="middle" 
          alignmentBaseline="middle"
          fontSize="64" 
          fontWeight="700" 
          fontFamily="'Inter', sans-serif"
          className="mpa-heading-text"
        >
          <tspan fill="#111827" opacity={isOpacity}>is </tspan>
          <tspan fill={killingColor} opacity={killingOpacity}>killing </tspan>
          <tspan ref={usRef} fill={usColor} opacity={usVisibleOpacity}>us</tspan>
        </text>
        </g>

        <g opacity={quickSpeedOpacity}>
          {speedLines.map((line, idx) => (
            line.visible ? (
              <line
                key={idx}
                x1={line.x1}
                y1={line.y}
                x2={line.x2}
                y2={line.y}
                stroke="#ef4444"
                strokeWidth={line.width}
                opacity={line.opacity}
              />
            ) : null
          ))}
        </g>

      </svg>

      {/* ── TEXT OVERLAY ── */}
      <div className="mpa-text-layer" style={{ 
        transform: `translate(${-textPanXPercent}%, ${-textPanYPercent}%) scale(${zoomFactor})`,
        transformOrigin: `${(dotBaseX / 1000) * 100}% ${(dotBaseY / 600) * 100}%`,
      }}>
        {/* "Work Sprawl" main heading */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '100%', 
          opacity: frame < 360 ? 1 : frame < 430 ? fadeOut(frame, 360, 400) : 0 
        }}>
          <span
            className="mpa-word-work mpa-heading-text"
            style={{
              opacity: workSplitOpacity,
              left: `${zoomFactor > 1.2 ? workX_Merge : workX_Merge}%`,
              color: workColor,
              transform: 'translateX(-50%)',
            }}
          >
            Work
          </span>
          <span
            className="mpa-word-sprawl mpa-heading-text"
            style={{ 
              opacity: sprawlSplitOpacity, 
              color: '#9CA3AF',
              left: `${zoomFactor > 1.2 ? sprawlX_Merge : sprawlX_Merge}%`,
            }}
          >
            Sprawl
          </span>

          {/* Combined "Work Sprawl" */}
          <span
            className="mpa-combined mpa-heading-text"
            style={{ 
              opacity: combinedOpacity,
              left: `${zoomFactor > 1.2 ? sprawlX_Zoom - 15 : 50}%`,
            }}
          >
            Work Sprawl
          </span>

          {/* Subtitle logic is now handled in the SVG above */}
        </div>

        {/* "Too many apps..." phase (440-520) */}
        <div className="mpa-too-many-layer" style={{ opacity: tooManyOpacity }}>
          <span 
            className="mpa-heading-text" 
            style={{ 
              left: `${tooManyX}%`, 
              top: '45%', 
              fontSize: '8vw', 
              color: '#111827',
              transform: 'translateY(-50%)' 
            }}
          >
            Too many
          </span>
          <span 
            className="mpa-heading-text" 
            style={{ 
              left: '60%', 
              top: '45%', 
              fontSize: '8vw', 
              color: '#111827', 
              opacity: appsOpacity,
              transform: 'translateY(-50%)' 
            }}
          >
            apps...
          </span>
        </div>
      </div>

      {/* ── PLAYBACK CONTROLS ── */}
      <div className="mpa-controls">
        {/* Restart */}
        <button className="mpa-btn mpa-btn-icon" title="Restart" onClick={restart}>⏮</button>

        {/* Step back */}
        <button className="mpa-btn mpa-btn-icon" title="-1 frame" onClick={() => stepFrame(-1)}>⏪</button>

        {/* Play / Pause */}
        <button
          className="mpa-btn mpa-btn-primary"
          onClick={() => {
            if (paused) {
              startTimeRef.current = null;
              setPaused(false);
            } else {
              setPaused(true);
            }
          }}
        >
          {paused ? '▶ Play' : '⏸ Pause'}
        </button>

        {/* Step forward */}
        <button className="mpa-btn mpa-btn-icon" title="+1 frame" onClick={() => stepFrame(1)}>⏩</button>

        {/* Scrubber */}
        <input
          className="mpa-scrubber"
          type="range"
          min={0}
          max={TOTAL_FRAMES}
          step={1}
          value={Math.round(frame)}
          onChange={handleScrub}
          onMouseUp={handleScrubEnd}
          onTouchEnd={handleScrubEnd}
        />

        {/* Frame counter */}
        <span className="mpa-frame-counter">{Math.round(frame)} / {TOTAL_FRAMES}</span>

        {/* Speed */}
        <select
          className="mpa-select"
          value={speed}
          onChange={e => {
            const s = Number(e.target.value);
            setSpeed(s);
            speedRef.current = s;
            startTimeRef.current = null; // recalc timing
          }}
        >
          {[0.25, 0.5, 1, 1.5, 2, 3].map(s => (
            <option key={s} value={s}>{s}×</option>
          ))}
        </select>

        {/* Loop toggle */}
        <button
          className={`mpa-btn mpa-btn-icon ${looping ? 'mpa-btn-active' : ''}`}
          title="Toggle loop"
          onClick={() => setLooping(l => !l)}
        >
          ↺
        </button>
      </div>
    </div>
  );
}
