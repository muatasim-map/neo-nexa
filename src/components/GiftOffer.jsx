import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './Icon.jsx';
import { reduce } from '../lib/env.js';
import { play } from '../lib/motion.js';
import { setOfferOpener } from '../lib/offer.js';
import { loadRobotScene } from './Robotics.jsx';

const SEEN_KEY = 'nexa-free-session-shown';
const clamp01 = (n) => Math.max(0, Math.min(1, n));

/**
 * The gift-box reveal for the free first session. It opens by itself the first time the
 * Tuition section scrolls into view, and any time from the hero seal.
 * The 3D box comes from the bundled scene script (window.createNexaGift); without it the SVG box shows.
 */
export function GiftOffer() {
  const [open, setOpen] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const aside = useRef(null);
  const art = useRef(null);
  const copy = useRef(null);
  const closeBtn = useRef(null);
  const live = useRef({ seen: false, frame: 0, render: null, cannon: null, returnFocus: null, observer: null, open: false });

  /* has it been shown this session? */
  useEffect(() => {
    try { live.current.seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch { /* storage may be blocked */ }
  }, []);

  const renderLid = useCallback((progress) => {
    const s = live.current;
    s.render?.(progress);
    if (art.current.hasAttribute('data-rendered')) return;
    art.current.style.setProperty('--offer-lid-y', -21 * progress + '%');
    art.current.style.setProperty('--offer-lid-angle', 13 * progress + 'deg');
  }, []);

  const settle = useCallback(() => {
    cancelAnimationFrame(live.current.frame);
    renderLid(0);
    setRevealing(false);
  }, [renderLid]);

  const burst = useCallback(async () => {
    const s = live.current;
    if (!s.cannon) {
      try {
        const confettiModule = await import('canvas-confetti');
        const confetti = confettiModule.default || confettiModule;
        if (!art.current) return;
        const canvas = document.createElement('canvas');
        canvas.className = 'offer-confetti';
        art.current.append(canvas);
        s.cannon = confetti.create(canvas, { resize: true, disableForReducedMotion: true });
      } catch (err) {
        console.warn('Confetti unavailable', err);
        return;
      }
    }
    s.cannon?.({ particleCount: 44, spread: 90, startVelocity: 24, gravity: 0.85, ticks: 95, scalar: 0.8, origin: { x: 0.5, y: 0.56 },
      colors: ['#965cca', '#c19be8', '#dfcaff', '#e6b14e', '#ffe0a0'] });
  }, []);

  const show = useCallback((fromBadge) => {
    loadRobotScene();
    const s = live.current;
    if (s.open) { if (fromBadge) closeBtn.current?.focus({ preventScroll: true }); return; }
    const celebrate = !s.seen && !reduce;
    s.returnFocus = fromBadge || null;
    s.seen = true; s.open = true;
    try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* storage may be blocked */ }
    s.observer?.disconnect();
    setOpen(true);
    /* wait for the panel to become visible before measuring or rendering the 3D box */
    requestAnimationFrame(() => {
      if (fromBadge) closeBtn.current?.focus({ preventScroll: true });
      try { s.render ??= window.createNexaGift?.(art.current); } catch { /* the SVG box stays */ }
      if (!celebrate) { settle(); return; }
      setRevealing(true);
      play(aside.current, [{ opacity: 0, transform: 'translateY(18px) scale(.97)' }, { opacity: 1, transform: 'none' }], 290);
      const startedAt = performance.now();
      let burst_ = false, copyShown = false;
      const tick = (now) => {
        const elapsed = now - startedAt;
        const lift = clamp01((elapsed - 160) / 520);
        const close = clamp01((elapsed - 1150) / 360);
        const progress = close ? Math.pow(1 - close, 2) : lift;
        renderLid(progress);
        if (progress > 0.28 && !burst_) { burst_ = true; burst(); }
        if (elapsed >= 680 && !copyShown) {
          copyShown = true;
          setRevealing(false);
          play(copy.current, [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], 220);
        }
        if (close < 1) s.frame = requestAnimationFrame(tick);
      };
      s.frame = requestAnimationFrame(tick);
    });
  }, [burst, renderLid, settle]);

  const close = useCallback(() => {
    const s = live.current;
    if (!s.open) return;
    cancelAnimationFrame(s.frame);
    setRevealing(false);
    s.cannon?.reset();
    s.open = false;
    setOpen(false);
    s.returnFocus?.focus({ preventScroll: true });
    s.returnFocus = null;
  }, []);

  /* triggers: the hero seal, scrolling to Tuition, the #free-session address, Escape */
  useEffect(() => {
    const s = live.current;
    setOfferOpener((el) => show(el));
    const onKey = (e) => { if (e.key === 'Escape' && s.open) close(); };
    addEventListener('keydown', onKey);
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const onMotion = () => {
      if (!motion.matches || !s.open) return;
      aside.current.getAnimations().forEach((a) => a.cancel());
      s.cannon?.reset();
      settle();
    };
    motion.addEventListener('change', onMotion);

    let startTimer = 0;
    const trigger = document.querySelector('.offer-trigger');
    let alreadySeen = false;
    try { alreadySeen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch { /* storage may be blocked */ }
    if (!alreadySeen && trigger && 'IntersectionObserver' in window) {
      s.observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) show(); }, { rootMargin: '0px 0px -20% 0px' });
      s.observer.observe(trigger);
    }
    if (location.hash === '#free-session') startTimer = setTimeout(() => show(), 0);

    return () => {
      setOfferOpener(null);
      removeEventListener('keydown', onKey);
      motion.removeEventListener('change', onMotion);
      s.observer?.disconnect();
      clearTimeout(startTimer);
      cancelAnimationFrame(s.frame);
    };
  }, [show, close, settle]);

  return (
    <>
      <div className="v2-backdrop" aria-hidden="true" onClick={close} />
      <aside id="free-session" ref={aside} className={revealing ? 'offer-reveal is-revealing' : 'offer-reveal'} aria-labelledby="free-session-title" hidden={!open}>
        <button type="button" className="offer-reveal-close" ref={closeBtn} aria-label="Close free session offer" onClick={close}><Icon id="close-icon" /></button>
        <div className="offer-reveal-art" ref={art} aria-hidden="true">
          <svg viewBox="0 0 320 235" focusable="false">
            <defs>
              <radialGradient id="offer-shadow"><stop stopColor="#5b3876" stopOpacity=".35" /><stop offset="1" stopColor="#5b3876" stopOpacity="0" /></radialGradient>
              <linearGradient id="offer-front" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop stopColor="#9b5fce" /><stop offset="1" stopColor="#7340ac" /></linearGradient>
              <linearGradient id="offer-gold" x2="1" y2=".35" gradientUnits="objectBoundingBox"><stop stopColor="#d3a354" /><stop offset=".47" stopColor="#ffe1a0" /><stop offset="1" stopColor="#c28c43" /></linearGradient>
            </defs>
            <ellipse cx="158" cy="211" rx="111" ry="20" fill="url(#offer-shadow)" />
            <path d="m77 109 75-29 91 26-75 34z" fill="#48256c" stroke="#ab77d6" strokeWidth="4" strokeLinejoin="round" />
            <path d="m77 109 91 31v67l-86-28q-5-2-5-9z" fill="url(#offer-front)" />
            <path d="m168 140 75-34v64q0 7-6 10l-69 27z" fill="#603593" />
            <path d="m111 121 18 6v67l-18-6zM197 127l17-8v69l-17 7z" fill="url(#offer-gold)" />
            <path d="m86 121 16 5m76 22 54-25" stroke="#d8a9fa" strokeWidth="2" opacity=".65" strokeLinecap="round" />
          </svg>
          <svg className="offer-reveal-lid" viewBox="0 0 320 235" focusable="false">
            <defs><linearGradient id="offer-lid-top" x2=".6" y2="1" gradientUnits="objectBoundingBox"><stop stopColor="#cea1ee" /><stop offset="1" stopColor="#9358c9" /></linearGradient></defs>
            <path d="m68 99 84-33 99 29-83 38z" fill="url(#offer-lid-top)" stroke="#c592e9" strokeLinejoin="round" strokeWidth="2" />
            <path d="m68 99 100 34v23L72 123q-4-2-4-6z" fill="#a16ad0" />
            <path d="m168 133 83-38v18q0 5-5 7l-78 36z" fill="#7647ae" />
            <path d="m105 112 18 6 87-35-18-5zM104 85l18-7 96 32-17 8zM105 112v23l18 6v-23zm96 6v23l17-8v-23z" fill="url(#offer-gold)" />
            <path d="M159 97c-15-28-46-31-49-18-3 12 20 20 49 18Zm0 0c19-30 48-38 52-24 4 14-22 21-52 24Z" fill="none" stroke="url(#offer-gold)" strokeWidth="8" strokeLinecap="round" />
            <path d="M157 96c-6 9-15 14-28 18m32-17c8 9 19 12 31 15" stroke="url(#offer-gold)" strokeWidth="6" fill="none" strokeLinecap="round" />
            <ellipse cx="160" cy="96" rx="9" ry="5.5" fill="#f9d791" />
          </svg>
        </div>
        <div className="offer-reveal-copy" ref={copy}>
          <h3 id="free-session-title">Your first tuition session is on us</h3>
          <p>Register for a free first session in Barking Riverside or online.</p>
          <details>
            <summary>Claim your free session</summary>
            <nav className="offer-reveal-links" aria-label="Free first session options">
              <a href="#offline-registration" onClick={close}>Classroom tuition <Icon id="arrow-right" /></a>
              <a href="#online-registration" onClick={close}>Online GCSE tuition <Icon id="arrow-right" /></a>
            </nav>
          </details>
        </div>
      </aside>
    </>
  );
}
