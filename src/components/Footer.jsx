import { useEffect, useRef } from 'react';
import { Icon } from './Icon.jsx';
import { NAV } from './Header.jsx';
import { reduce, cx } from '../lib/env.js';
import { play } from '../lib/motion.js';
import { useCalm } from '../hooks/useCalm.js';
import { useOffscreenPause } from '../hooks/useOffscreenPause.js';

export function Footer() {
  const [ref, paused] = useOffscreenPause();
  const [calm, toggleCalm] = useCalm();
  const cameo = useRef(null);
  const link = useRef(null);
  const arrow = useRef(null);

  /* the little rover peeks out the first time the footer comes into view */
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      cameo.current.dataset.peek = '';
      io.disconnect();
    });
    io.observe(link.current);
    return () => io.disconnect();
  }, []);

  function backToTop(e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || reduce) return;
    e.preventDefault();
    play(cameo.current, [{ transform: 'none' }, { transform: 'translateY(-5px) rotate(-10deg)', offset: 0.5 }, { transform: 'none' }], 140);
    play(arrow.current, [{ translate: '0' }, { translate: '3px -4px', offset: 0.5 }, { translate: '0' }], 140);
    setTimeout(() => {
      if (location.hash !== '#home') location.hash = 'home';
      else document.querySelector('#home').scrollIntoView({ block: 'start' });
    }, 130);
  }

  return (
    <footer className={cx('site-footer', paused && 'v2-paused')} ref={ref}>
      <div className="wrap footer-row">
        <a className="brand" href="#home" aria-label="NEXA360 home"><img src="/img/logo.png" alt="NEXA360" width="208" height="85" loading="lazy" /></a>
        <nav className="v2-foot-links" aria-label="Footer">
          {NAV.map(([id, label]) => <a key={id} href={'#' + id}>{label}</a>)}
        </nav>
        <p>Barking Riverside, London</p>
        <a className="text-link" href="#home" ref={link} onClick={backToTop}>
          <span className="footer-rover" ref={cameo}><Icon id="rover-icon" /></span>
          Back to top <svg className="icon" aria-hidden="true" ref={arrow}><use href="#arrow-up" /></svg>
        </a>
        <button type="button" className="v2-calm" aria-pressed={calm} title="Turns off sparkles, floating doodles and decorative motion" onClick={toggleCalm}>
          {calm ? 'Calm mode: on' : 'Calm mode: off'}
        </button>
        <p className="v2-foot-note">Made with <span className="heart" aria-label="love">♥</span> in Barking Riverside · © {new Date().getFullYear()} NEXA360</p>
      </div>
    </footer>
  );
}
