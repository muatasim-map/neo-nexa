import { useEffect, useRef } from 'react';
import { Icon, Draw } from './Icon.jsx';
import { Gallery } from './Gallery.jsx';
import { Doodles } from './Doodles.jsx';
import { Reveal } from './Reveal.jsx';
import { fine, reduce, isCalm, cx } from '../lib/env.js';
import { fx } from '../lib/fx.js';
import { play } from '../lib/motion.js';
import { useOffscreenPause } from '../hooks/useOffscreenPause.js';
import heroScene from '../art/hero-scene.svg?raw';

const HERO_DOODLES = [['star', 4, 10, 22], ['squiggle', 44, 6, 34], ['plus', 52, 70, 18], ['ring', 3, 62, 20], ['spark', 93, 8, 22], ['gift', 40, 84, 26], ['star', 96, 58, 16], ['rover', 30, 44, 28]];
const HERO_COLORS = ['#9b6fd6', '#234fc9', '#e08ab9', '#c69a3d'];

/** Mouse-follow glow on the section background. */
function useSpotlight(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !fine || reduce) return;
    let px = 0, py = 0, raf = 0;
    const move = (e) => {
      px = e.clientX; py = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect(); if (py < r.top || py > r.bottom) return;
        el.style.setProperty('--mx', (px - r.left) + 'px'); el.style.setProperty('--my', (py - r.top) + 'px');
      });
    };
    addEventListener('pointermove', move, { passive: true });
    return () => { removeEventListener('pointermove', move); cancelAnimationFrame(raf); };
  }, [ref]);
}
export { useSpotlight };

/** A programme link whose icon scribbles a little doodle when you explore it. */
function ChoiceLink({ href, base, doodle, title, small, delay }) {
  const mark = useRef(null);
  const timer = useRef(0);
  const draw = () => {
    const m = mark.current; if (!m) return;
    clearTimeout(timer.current);
    m.classList.remove('choice-play'); void m.offsetWidth; m.classList.add('choice-play');
    timer.current = setTimeout(() => m.classList.remove('choice-play'), 540);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <Reveal as="a" delay={delay} href={href}
      onPointerEnter={() => { if (fine) draw(); }}
      onFocus={(e) => { if (e.currentTarget.matches(':focus-visible')) draw(); }}
      onClick={draw}>
      <span className="choice-icon" ref={mark}>
        <Icon id={base} className="icon choice-base" />
        <span className="choice-doodle"><Draw>{doodle}</Draw></span>
      </span>
      <span><strong>{title}</strong><small>{small}</small></span>
      <Icon id="arrow-out" />
    </Reveal>
  );
}

const DOODLE_CLASSROOM = (
  <>
    <path className="icon-wash" d="m18 2.5 3.5 3.5-8.6 8.6-4.6 1.1 1.1-4.6z" />
    <path d="m15.8 4.6 3.6 3.6" />
    <path className="ink" d="m3 16.8 3.2 3.2 5.5-5.5" />
  </>
);
const DOODLE_ONLINE = (
  <>
    <rect className="icon-wash" x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path className="ink" d="M5.8 11.8h5m-5 3.4h7.2" />
    <path d="M14 8v6l1.8-1.1 1.3 2.2 1.5-.9-1.3-2.2 2.1-.4z" />
  </>
);

function ProgrammeIndex() {
  return (
    <nav className="wrap programme-index" aria-label="Explore programmes">
      <ChoiceLink href="#offline" base="classroom-book" doodle={DOODLE_CLASSROOM} title="Classroom tuition" small="Barking Riverside" delay={0} />
      <ChoiceLink href="#online" base="screen" doodle={DOODLE_ONLINE} title="Online GCSE tuition" small="One-to-one or group" delay={60} />
      <Reveal as="a" delay={120} href="#robotics">
        <span className="robotics-icon"><Icon id="rover-icon" /></span>
        <span><strong>Robotics workshop</strong><small>For Grade 8 beginners</small></span>
        <Icon id="arrow-out" />
      </Reveal>
    </nav>
  );
}

export function Hero() {
  const [homeRef, paused] = useOffscreenPause();
  const hero = useRef(null);
  const cta = useRef(null);
  const arrow = useRef(null);
  const scene = useRef(null);
  useSpotlight(homeRef);

  /* the hand-drawn arrow sits beside the button and follows it as the layout changes */
  useEffect(() => {
    const place = () => {
      if (!hero.current || !cta.current || !arrow.current) return;
      const hr = hero.current.getBoundingClientRect(), cr = cta.current.getBoundingClientRect();
      arrow.current.style.left = (cr.right - hr.left + 14) + 'px';
      arrow.current.style.top = (cr.top - hr.top - 22) + 'px';
    };
    place();
    addEventListener('resize', place); addEventListener('load', place);
    const ro = 'ResizeObserver' in window ? new ResizeObserver(place) : null;
    ro?.observe(hero.current);
    const t = setTimeout(place, 900); /* after the hero entrance has settled */
    return () => { removeEventListener('resize', place); removeEventListener('load', place); ro?.disconnect(); clearTimeout(t); };
  }, []);

  /* pause the little desk scene when it is off screen */
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !scene.current) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => scene.current.classList.toggle('v2-paused', !e.isIntersecting)));
    io.observe(scene.current);
    return () => io.disconnect();
  }, []);

  /* the hero button leans toward the pointer and throws a few sparkles the first time you hover it */
  const magnetic = fine && !reduce;
  const onCtaMove = (e) => {
    if (!magnetic) return;
    const b = e.currentTarget, r = b.getBoundingClientRect();
    b.style.translate = ((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1) + 'px ' + ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + 'px';
  };
  const sparkled = useRef(false);
  const onCtaEnter = (e) => {
    if (!fine || sparkled.current || isCalm()) return;
    sparkled.current = true;
    const r = e.currentTarget.getBoundingClientRect();
    fx.sparkle(r.left + 4, r.top + 4); fx.sparkle(r.right - 4, r.bottom - 4);
  };
  const onCtaClick = (e) => {
    if (!fine || isCalm()) return;
    const r = e.currentTarget.getBoundingClientRect();
    fx.burst(r.left + r.width / 2, r.top + r.height / 2, 24);
  };

  return (
    <section className={cx('home', paused && 'v2-paused')} id="home" ref={homeRef} aria-labelledby="home-title">
      <Doodles list={HERO_DOODLES} colors={HERO_COLORS} />
      <div className="wrap hero" ref={hero}>
        <div className="hero-copy">
          <h1 id="home-title">Tuition with <em className="v2-ink">individual attention</em></h1>
          <p className="hero-lead">Classroom tuition in Barking Riverside, online GCSE support and a first step into robotics.</p>
          <div className="first-session">
            <div className="offer-mark" aria-hidden="true">
              <svg className="icon" viewBox="0 0 24 24"><path id="session-gift" d="M3 8h18v5H3zM5 13v8h14v-8M12 8v13m0-13H8.5A2.5 2.5 0 1 1 11 5.5L12 8Zm0 0h3.5A2.5 2.5 0 1 0 13 5.5L12 8Z" /></svg>
            </div>
            <div><strong>First tuition session free</strong><br /><span>With registration for classroom or online GCSE tuition.</span></div>
          </div>
          <p className="v2-student-line">Your first session is free, so you can see how it feels.</p>
          <a className="button" href="#tuition" ref={cta} style={magnetic ? { transition: 'transform 160ms cubic-bezier(.23,1,.32,1), translate 300ms cubic-bezier(.34,1.56,.64,1), background-color 200ms ease, box-shadow 200ms ease' } : undefined}
            onPointerMove={onCtaMove} onPointerLeave={(e) => { e.currentTarget.style.translate = ''; }} onPointerEnter={onCtaEnter} onClick={onCtaClick}>
            Compare tuition options <Icon id="arrow-right" />
          </a>
        </div>
        <Gallery />
        <svg className="v2-hero-arrow" ref={arrow} viewBox="0 0 120 64" aria-hidden="true"><path d="M4 50c18 8 40 6 58-6s30-30 50-34" /><path d="M100 4l13 6-9 11" /></svg>
        <div className="v2-scene-wrap" ref={scene} aria-hidden="true" dangerouslySetInnerHTML={{ __html: heroScene }} />
      </div>
      <ProgrammeIndex />
    </section>
  );
}
