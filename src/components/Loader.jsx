import { useEffect, useRef, useState } from 'react';
import './Loader.css';

const LOADER_NAME = 'MUHAMMAD AFIF ABIYYU';
const LOADER_FONT = '"Plus Jakarta Sans", sans-serif';
const LOADER_COLORS = ['#ff5d73', '#ffa726', '#8f7bff'];
const SESSION_KEY = 'afif-portfolio-loader-seen';
const MINIMUM_DURATION = 3200;
const LOAD_FALLBACK_DURATION = 6000;
const SAMPLE_GAP = 4;
const MINIMUM_PARTICLE_COUNT = 1800;
const POINTER_RADIUS = 95;

const STATUS_STAGES = [
  { start: 0, text: 'Menyiapkan halaman' },
  { start: 30, text: 'Menyusun partikel' },
  { start: 65, text: 'Memuat proyek' },
  { start: 92, text: 'Hampir selesai' }
];

const randomGlyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%&';

function getSeenThisSession() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch (error) {
    console.warn('Tidak dapat membaca status loading dari sessionStorage.', error);
    return false;
  }
}

function markSeenThisSession() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, 'true');
  } catch (error) {
    console.warn('Tidak dapat menyimpan status loading ke sessionStorage.', error);
  }
}

function Loader() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef(null);
  const canvasRef = useRef(null);
  const percentRef = useRef(null);
  const statusRef = useRef(null);
  const accessibleStatusRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    if (getSeenThisSession()) {
      body.classList.add('ready');
      setVisible(false);
      return undefined;
    }

    const previousOverflow = body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    const percentElement = percentRef.current;
    const statusElement = statusRef.current;
    const accessibleStatusElement = accessibleStatusRef.current;
    const context = canvas?.getContext('2d');

    body.classList.remove('ready');
    body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    let animationFrame = 0;
    let fallbackTimer = 0;
    let disposed = false;
    let loadReady = document.readyState === 'complete';
    let targetsReady = false;
    let completed = false;
    let explodedAt = null;
    let revealStartedAt = null;
    let lastStatusStage = -1;
    let shownProgress = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = 1;
    let pointerX = -10000;
    let pointerY = -10000;
    const particles = [];
    let targets = [];

    const restoreAndRemove = () => {
      if (completed) return;
      completed = true;
      markSeenThisSession();
      body.classList.add('ready');
      body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      setVisible(false);
    };

    if (!context || !overlay) {
      console.error('Canvas 2D tidak tersedia; loading screen dilewati.');
      restoreAndRemove();
      return () => {
        body.style.overflow = previousOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
      };
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      if (percentElement) percentElement.textContent = '100%';
      if (statusElement) statusElement.textContent = 'Hampir selesai';
      if (accessibleStatusElement) accessibleStatusElement.textContent = 'Hampir selesai';
      const reducedMotionTimer = window.setTimeout(restoreAndRemove, 300);
      return () => {
        window.clearTimeout(reducedMotionTimer);
        if (!completed) {
          body.style.overflow = previousOverflow;
          document.documentElement.style.overflow = previousHtmlOverflow;
        }
      };
    }

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (targetsReady) buildTargets();
    };

    const buildTargets = () => {
      const offscreen = document.createElement('canvas');
      offscreen.width = Math.ceil(width);
      offscreen.height = Math.ceil(height);
      const textContext = offscreen.getContext('2d', { willReadFrequently: true });

      if (!textContext) {
        console.error('Canvas 2D offscreen tidak tersedia; loading screen dilewati.');
        restoreAndRemove();
        return;
      }

      textContext.clearRect(0, 0, offscreen.width, offscreen.height);
      textContext.fillStyle = '#fff';
      textContext.textAlign = 'center';
      textContext.textBaseline = 'middle';
      textContext.font = `800 100px ${LOADER_FONT}`;
      const measuredWidth = textContext.measureText(LOADER_NAME).width;
      const fontSize = Math.min(100, (width * 0.84 * 100) / measuredWidth);
      textContext.font = `800 ${fontSize}px ${LOADER_FONT}`;
      textContext.fillText(LOADER_NAME, width / 2, height / 2);

      const image = textContext.getImageData(0, 0, offscreen.width, offscreen.height);
      targets = [];
      for (let y = 0; y < offscreen.height; y += SAMPLE_GAP) {
        for (let x = 0; x < offscreen.width; x += SAMPLE_GAP) {
          const alpha = image.data[(y * offscreen.width + x) * 4 + 3];
          if (alpha > 128) targets.push({ x: x - width / 2, y: y - height / 2 });
        }
      }

      const sampledTargets = [...targets];
      const sampledTargetCount = sampledTargets.length;
      while (targets.length > 0 && targets.length < MINIMUM_PARTICLE_COUNT) {
        const source = sampledTargets[targets.length % sampledTargetCount];
        targets.push({
          x: source.x + (Math.random() - 0.5) * 2,
          y: source.y + (Math.random() - 0.5) * 2
        });
      }

      while (particles.length < targets.length) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.min(width, height) * 0.46;
        particles.push({
          x: width / 2 + Math.cos(angle) * radius,
          y: height / 2 + Math.sin(angle) * radius,
          tx: 0,
          ty: 0,
          angle,
          radius,
          spin: 0.001 + Math.random() * 0.004,
          threshold: Math.random() * 0.85,
          color: LOADER_COLORS[Math.floor(Math.random() * LOADER_COLORS.length)],
          size: 1 + Math.random() * 1.25,
          attracted: false,
          vx: 0,
          vy: 0
        });
      }
      particles.length = targets.length;
      particles.forEach((particle, index) => {
        particle.tx = targets[index].x + width / 2;
        particle.ty = targets[index].y + height / 2;
      });
      targetsReady = true;
    };

    const updateStatus = (progress) => {
      let stageIndex = 0;
      for (let index = 1; index < STATUS_STAGES.length; index += 1) {
        if (progress >= STATUS_STAGES[index].start) stageIndex = index;
      }
      const stage = STATUS_STAGES[stageIndex];
      if (stageIndex !== lastStatusStage) {
        lastStatusStage = stageIndex;
        if (accessibleStatusElement) accessibleStatusElement.textContent = stage.text;
      }

      const nextStart = STATUS_STAGES[stageIndex + 1]?.start ?? 100;
      const revealRatio = Math.min(1, (progress - stage.start) / Math.max(1, nextStart - stage.start));
      const revealedCount = Math.floor(stage.text.length * revealRatio);
      const scrambledText = [...stage.text]
        .map((character, index) => {
          if (character === ' ' || index < revealedCount) return character;
          return randomGlyphs[Math.floor(Math.random() * randomGlyphs.length)];
        })
        .join('');
      if (statusElement && statusElement.textContent !== scrambledText) {
        statusElement.textContent = scrambledText;
      }
    };

    const draw = (timestamp) => {
      if (completed) return;

      const elapsed = timestamp - startedAt;
      const timeProgress = Math.min(92, (elapsed / MINIMUM_DURATION) * 92);
      const targetProgress = loadReady && elapsed >= MINIMUM_DURATION && targetsReady
        ? 100
        : timeProgress;
      shownProgress += (targetProgress - shownProgress) * 0.1;
      if (targetProgress === 100 && shownProgress > 99.7) shownProgress = 100;

      if (percentElement) percentElement.textContent = `${String(Math.floor(shownProgress)).padStart(2, '0')}%`;
      overlay.style.setProperty('--loader-progress', String(shownProgress / 100));
      updateStatus(shownProgress);

      context.clearRect(0, 0, width, height);
      const progressRatio = shownProgress / 100;

      if (shownProgress < 100) {
        particles.forEach((particle) => {
          if (progressRatio >= particle.threshold) particle.attracted = true;
          if (particle.attracted) {
            particle.x += (particle.tx - particle.x) * 0.075;
            particle.y += (particle.ty - particle.y) * 0.075;
          } else {
            particle.angle += particle.spin;
            particle.x = width / 2 + Math.cos(particle.angle) * particle.radius;
            particle.y = height / 2 + Math.sin(particle.angle) * particle.radius;
          }

          const dx = particle.x - pointerX;
          const dy = particle.y - pointerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 0 && distance < POINTER_RADIUS) {
            const force = (POINTER_RADIUS - distance) / POINTER_RADIUS * 4;
            particle.x += (dx / distance) * force;
            particle.y += (dy / distance) * force;
          }

          context.fillStyle = particle.color;
          context.fillRect(particle.x, particle.y, particle.size, particle.size);
        });

        if (shownProgress === 100 && explodedAt === null) explodedAt = timestamp + 350;
      } else {
        if (explodedAt === null) explodedAt = timestamp + 350;
        if (timestamp >= explodedAt && revealStartedAt === null) {
          revealStartedAt = timestamp;
          particles.forEach((particle) => {
            const angle = Math.atan2(particle.y - height / 2, particle.x - width / 2)
              + (Math.random() - 0.5) * 0.8;
            const speed = 3 + Math.random() * 9;
            particle.vx = Math.cos(angle) * speed;
            particle.vy = Math.sin(angle) * speed;
          });
        }

        if (revealStartedAt !== null) {
          const revealProgress = Math.min(1, (timestamp - revealStartedAt) / 1100);
          const easedReveal = 1 - ((1 - revealProgress) ** 3);
          const revealRadius = Math.hypot(width / 2, height / 2) * easedReveal;
          overlay.style.setProperty('--r', `${revealRadius}px`);

          particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vx *= 0.985;
            particle.vy *= 0.985;
            context.globalAlpha = 1 - revealProgress;
            context.fillStyle = particle.color;
            context.fillRect(particle.x, particle.y, particle.size, particle.size);
          });
          context.globalAlpha = 1;

          if (revealProgress >= 1) {
            restoreAndRemove();
            return;
          }
        } else {
          particles.forEach((particle) => {
            context.fillStyle = particle.color;
            context.fillRect(particle.x, particle.y, particle.size, particle.size);
          });
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const onLoad = () => {
      loadReady = true;
    };
    const onPointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };
    const onPointerLeave = () => {
      pointerX = -10000;
      pointerY = -10000;
    };

    const startedAt = performance.now();
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    if (!loadReady) window.addEventListener('load', onLoad, { once: true });
    fallbackTimer = window.setTimeout(() => {
      loadReady = true;
    }, LOAD_FALLBACK_DURATION);
    animationFrame = window.requestAnimationFrame(draw);

    document.fonts.load(`800 100px ${LOADER_FONT}`).then(
      () => {
        if (!disposed && !completed) buildTargets();
      },
      (error) => {
        console.error('Gagal memuat font loader; menggunakan font fallback.', error);
        if (!disposed && !completed) buildTargets();
      }
    );

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallbackTimer);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('load', onLoad);
      if (!completed) {
        body.style.overflow = previousOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="cinematic-loader" ref={overlayRef} role="status" aria-live="polite">
      <canvas className="cinematic-loader__canvas" ref={canvasRef} aria-hidden="true" />
      <p className="cinematic-loader__reduced-name" aria-hidden="true">{LOADER_NAME}</p>
      <div className="cinematic-loader__footer">
        <p className="cinematic-loader__percent" ref={percentRef} aria-hidden="true">00%</p>
        <div className="cinematic-loader__status">
          <span className="cinematic-loader__status-label" ref={statusRef} aria-hidden="true">
            Menyiapkan halaman
          </span>
          <span className="cinematic-loader__sr-only" ref={accessibleStatusRef}>
            Menyiapkan halaman
          </span>
          <span className="cinematic-loader__caption">PORTFOLIO / MUHAMMAD AFIF ABIYYU</span>
        </div>
      </div>
      <div className="cinematic-loader__track" aria-hidden="true">
        <span className="cinematic-loader__progress" />
      </div>
    </div>
  );
}

export default Loader;
