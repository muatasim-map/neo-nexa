import { useEffect, useRef } from 'react';
import { reduce } from '../lib/env.js';
import { setSayHandler, say } from '../lib/say.js';
import { subscribeScroll } from '../lib/scroll.js';

/** Nexo: the little rover that rides the scroll track, says hello and takes you back to the top. */
export function Mascot() {
  const button = useRef(null);
  const bubble = useRef(null);
  const wheels = useRef([]);

  /* speech bubble */
  useEffect(() => {
    let timer;
    setSayHandler((text) => {
      const m = button.current; if (!m) return;
      bubble.current.textContent = text;
      m.setAttribute('data-say', '');
      m.classList.remove('wave'); void m.offsetWidth; m.classList.add('wave');
      clearTimeout(timer);
      timer = setTimeout(() => m.removeAttribute('data-say'), 1800);
    });
    return () => { clearTimeout(timer); setSayHandler(null); };
  }, []);

  /* follows the scroll position, faces the direction of travel, spins its wheels */
  useEffect(() => {
    const m = button.current;
    let last = scrollY, rot = 0;
    const narrow = matchMedia('(max-width: 47rem)');
    return subscribeScroll((y) => {
      if (Math.abs(y - last) > 4) m.classList.toggle('flip', y < last);
      if (narrow.matches) { last = y; return; }
      const max = document.documentElement.scrollHeight - innerHeight;
      const travel = innerHeight - 5 * 16 - 1.5 * 16 - 46;
      m.style.setProperty('--ty', ((max > 0 ? y / max : 0) * travel).toFixed(1) + 'px');
      rot += (y - last) * 1.2;
      wheels.current.forEach((w) => { if (w) w.style.transform = `rotate(${rot.toFixed(0)}deg)`; });
      last = y;
    });
  }, []);

  /* a friendly greeting on the first scroll */
  useEffect(() => {
    let timer;
    const greet = () => {
      removeEventListener('scroll', greet);
      const h = new Date().getHours();
      timer = setTimeout(() => say(h < 12 ? 'Good morning!' : h < 18 ? 'Good afternoon!' : 'Good evening!'), 300);
    };
    addEventListener('scroll', greet, { passive: true });
    return () => { removeEventListener('scroll', greet); clearTimeout(timer); };
  }, []);

  function onClick() {
    scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    say('Beep boop! Up we go');
    const m = button.current;
    if (reduce || !m.animate || m.classList.contains('lapping') || innerWidth < 760) return;
    /* victory lap round the edge of the screen */
    const r = m.getBoundingClientRect(), pad = 16;
    const L = pad - r.left, T = pad + 60 - r.top, B = innerHeight - pad - r.bottom;
    m.classList.add('lapping');
    const a = m.animate([
      { transform: 'none' },
      { transform: `translate(0,${B}px) rotate(90deg)`, offset: 0.2 },
      { transform: `translate(${L}px,${B}px) rotate(180deg)`, offset: 0.45 },
      { transform: `translate(${L}px,${T}px) rotate(270deg)`, offset: 0.7 },
      { transform: `translate(0,${T}px) rotate(360deg)`, offset: 0.9 },
      { transform: 'none' },
    ], { duration: 1600, easing: 'cubic-bezier(.65,0,.35,1)' });
    a.onfinish = a.oncancel = () => m.classList.remove('lapping');
  }

  return (
    <>
      <button type="button" className="v2-mascot" ref={button} aria-label="Nexo, back to top" title="Nexo, back to top" onClick={onClick}>
        <svg className="icon" aria-hidden="true"><use href="#rover-icon" /></svg>
        <span className="bubble" aria-hidden="true" ref={bubble} />
        <span className="wheels" aria-hidden="true"><i ref={(el) => (wheels.current[0] = el)} /><i ref={(el) => (wheels.current[1] = el)} /></span>
      </button>
      <div className="v2-track" aria-hidden="true" />
    </>
  );
}
