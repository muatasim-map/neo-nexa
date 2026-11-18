import { useEffect, useRef, useState } from 'react';
import { Icon, Draw } from './Icon.jsx';
import { Doodles } from './Doodles.jsx';
import { Reveal } from './Reveal.jsx';
import { SectionHeading } from './Heading.jsx';
import { useSpotlight } from './Hero.jsx';
import { reduce, cx } from '../lib/env.js';
import { play } from '../lib/motion.js';
import { fine } from '../lib/env.js';
import robotSceneUrl from '../assets/robot-scene.js?url';
import { useOffscreenPause } from '../hooks/useOffscreenPause.js';

const DOODLES = [['spark', 3, 6, 20], ['plus', 96, 20, 16], ['star', 48, 4, 14], ['ring', 92, 92, 22], ['rover', 2, 90, 26]];
const COLORS = ['#9bc8ff', '#d9b6ff', '#7fe0e6'];
const BROCHURE = 'https://drive.google.com/file/d/1Ceiy8pwHRhllsjTzq_g78pBZl5zk5KTi/view?usp=sharing';

/* ------------------------------------------------------------------ */
/* the 3D robot scene                                                  */
/* ------------------------------------------------------------------ */

/**
 * The robot is a prebuilt three.js scene in /robot-scene.js. It looks for #robot-journey and
 * #robot-canvas once when it runs, so it is loaded after those exist. It also defines
 * window.createNexaGift, used by the free-session gift.
 */
function loadRobotScene() {
  if (window.__nexaRobotScene) return;
  window.__nexaRobotScene = true;
  const add = () => {
    const script = document.createElement('script');
    script.src = robotSceneUrl;
    script.async = true;
    document.body.appendChild(script);
  };
  /* the 600 KB scene is not needed for first paint: fetch it once the page is idle */
  const idle = () => ('requestIdleCallback' in window ? requestIdleCallback(add, { timeout: 3000 }) : setTimeout(add, 1500));
  if (document.readyState === 'complete') idle(); else addEventListener('load', idle, { once: true });
}

const STEPS = [
  { id: 'v2w-circuit', label: 'Circuits', cap: 'Hands-on builds, no previous experience needed.' },
  { id: 'v2w-code', label: 'Arduino programming', cap: 'Write the code that tells the robot what to do.' },
  { id: 'v2w-sensor', label: 'Sensors', cap: 'Teach it to sense what’s around it.' },
];
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smoother = (x, a, b) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * t * (t * (t * 6 - 15) + 10); };

/**
 * The bundled scene works out how far through the robot panel you are but never shares it, so the
 * same formula is repeated here. It drives the glow, the progress line and which topic is lit.
 */
function RobotStage() {
  const journey = useRef(null);
  const canvas = useRef(null);
  const stage = useRef(null);
  const bar = useRef(null);
  const cap = useRef(null);
  const sweep = useRef(null);
  const [step, setStep] = useState(reduce ? 2 : 0);
  const shown = useRef(-1);

  useEffect(() => { loadRobotScene(); }, []);

  useEffect(() => {
    const j = journey.current, c = canvas.current;
    let queued = false, onScreen = true;

    function progress() {
      if (reduce) return 1;
      const r = j.getBoundingClientRect(), inset = Math.min(80, innerHeight * 0.1);
      const range = Math.max(1, j.offsetHeight - c.clientHeight - inset);
      return smoother(clamp((inset - r.top) / range, 0, 1), 0.08, 0.92);
    }
    function update() {
      queued = false;
      const p = progress();
      stage.current.style.setProperty('--p', p.toFixed(3));
      bar.current.style.setProperty('--p', p.toFixed(3));
      const k = reduce ? 2 : p < 0.34 ? 0 : p < 0.67 ? 1 : 2;
      setStep(k);
    }
    const schedule = () => { if (!queued && onScreen && !document.hidden) { queued = true; requestAnimationFrame(update); } };

    update();
    if (reduce) return;
    const io = 'IntersectionObserver' in window
      ? new IntersectionObserver((es) => { onScreen = es[0].isIntersecting; if (onScreen) schedule(); }, { rootMargin: '10% 0px' })
      : null;
    io?.observe(j);
    addEventListener('scroll', schedule, { passive: true });
    addEventListener('resize', schedule);
    return () => { io?.disconnect(); removeEventListener('scroll', schedule); removeEventListener('resize', schedule); };
  }, []);

  /* caption text swaps with a short fade; the scan line sweeps once per step */
  useEffect(() => {
    const first = shown.current === -1;
    shown.current = step;
    cap.current.textContent = STEPS[step].cap;
    if (first || reduce) return;
    play(cap.current, [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], 160, 'cubic-bezier(.23,1,.32,1)');
    sweep.current.classList.remove('run'); void sweep.current.offsetWidth; sweep.current.classList.add('run');
  }, [step]);

  return (
    <div id="robot-journey" ref={journey} className="robot-journey" aria-label="Illustration of a robot sorting an object">
      <div className="robot-stage" ref={stage}>
        <img className="robot-fallback" src="/img/robot-fallback.png" alt="Illustration of a robot from the workshop brochure" />
        <canvas id="robot-canvas" ref={canvas} aria-hidden="true" />
        <div className="v2-sweep" ref={sweep} aria-hidden="true" />
        <div className="v2-rail">
          <p className="v2-cap" aria-live="off" ref={cap} />
          <ol className="v2-steps" aria-label="What you’ll learn">
            {STEPS.map((s, i) => (
              <li key={s.id} className={cx(i === step && 'on', i < step && 'done', reduce && 'done')}>
                <svg aria-hidden="true"><use href={'#' + s.id} /></svg><span className="lbl">{s.label}</span>
              </li>
            ))}
          </ol>
          <div className="v2-bar" ref={bar} aria-hidden="true"><i /></div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* facts that count up                                                 */
/* ------------------------------------------------------------------ */

const FACTS = [['Grade ', 8, ' beginners'], ['', 6, ' weeks'], ['', 18, ' classes']];

function Facts() {
  const [seen, setSeen] = useState(false);
  const nums = useRef([]);

  useEffect(() => {
    if (!seen || reduce) return;
    const frames = [];
    nums.current.forEach((el, k) => {
      const to = FACTS[k][1], t0 = performance.now() + k * 120, dur = 900;
      const step = (now) => {
        const p = Math.min(1, Math.max(0, (now - t0) / dur)), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * e);
        if (p < 1) frames[k] = requestAnimationFrame(step);
      };
      frames[k] = requestAnimationFrame(step);
    });
    return () => frames.forEach(cancelAnimationFrame);
  }, [seen]);

  return (
    <Reveal as="ul" delay={0} className="workshop-facts" aria-label="Workshop at a glance" onSeen={() => setSeen(true)}>
      {FACTS.map(([pre, n, post], k) => (
        <li key={n} aria-label={`${pre}${n}${post}`}>
          <span aria-hidden="true">{pre}<span className="v2-num" data-to={n} ref={(el) => (nums.current[k] = el)}>{reduce ? n : 0}</span>{post}</span>
        </li>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* workshop strip and projects                                         */
/* ------------------------------------------------------------------ */

const WORKSHOP = [
  ['v2w-beginner', 'Grade 8 beginners', 'No previous robotics experience is required.'],
  ['v2w-calendar', '6 weeks, 18 classes', 'A short, structured course.'],
  ['v2w-online', 'Mainly online', 'Classes are primarily online.'],
  ['v2w-classroom', 'Offline on request', 'Offline sessions are available on demand.'],
];

const PROJECTS = [
  ['01', 'A Bluetooth-controlled robot', 'Use Arduino, a motor driver and DC motors to build a robot that responds to Bluetooth commands.'],
  ['02', 'An obstacle-avoiding robot', 'Add an ultrasonic sensor so the robot can detect obstacles and change direction on its own.'],
];

function Brochure() {
  const fold = useRef(null);
  const run = () => play(fold.current, [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(-78deg)', offset: 0.45 }, { transform: 'rotateY(0deg)' }], 280);
  return (
    <a className="text-link" href={BROCHURE} target="_blank" rel="noopener noreferrer"
      onPointerEnter={() => { if (fine) run(); }}
      onFocus={(e) => { if (e.currentTarget.matches(':focus-visible')) run(); }}>
      View workshop brochure{' '}
      <span className="brochure-page">
        <Draw>
          <path className="icon-wash" d="M6 3.5h8l4.5 4.5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
          <path d="M14 3.5V8h4.5" />
          <path className="sheet-fold" ref={fold} d="M8.5 11.5h6.5m-6.5 3h6.5m-6.5 3h4" />
        </Draw>
      </span>
    </a>
  );
}

export function Robotics() {
  const [ref, paused] = useOffscreenPause();
  useSpotlight(ref);
  return (
    <section className={cx('robotics band', paused && 'v2-paused')} id="robotics" ref={ref} aria-labelledby="robotics-title">
      <Doodles list={DOODLES} colors={COLORS} />
      <div className="wrap">
        <div className="robotics-grid">
          <div className="robotics-copy">
            <SectionHeading id="robotics-title" eyebrow="Robotics workshop">Build your first robot</SectionHeading>
            <Facts />
            <Reveal as="p" delay={60}>Get started with circuits, Arduino programming and sensors through hands-on builds. No previous robotics experience is required.</Reveal>
            <Reveal as="p" delay={120}>Classes are primarily online. Offline sessions are available on demand.</Reveal>
            <Reveal as="div" delay={180} className="robotics-actions">
              <a className="button button-light" href="#robotics-enquiry">Enquire about robotics <Icon id="arrow-right" /></a>
              <Brochure />
            </Reveal>
          </div>
          <RobotStage />
        </div>
        <ul className="v2-workshop" aria-label="How the workshop runs">
          {WORKSHOP.map(([id, title, text], k) => (
            <Reveal as="li" key={id} delay={k * 70}>
              <svg aria-hidden="true"><use href={'#' + id} /></svg><strong>{title}</strong><span>{text}</span>
            </Reveal>
          ))}
        </ul>
        <div className="projects" aria-labelledby="projects-title">
          <Reveal as="h3" delay={0} id="projects-title">What students build</Reveal>
          {PROJECTS.map(([n, title, text], k) => (
            <Reveal as="div" key={n} delay={(k + 1) * 60} className="project">
              <span aria-hidden="true">{n}</span>
              <div><h4>{title}</h4><p>{text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
