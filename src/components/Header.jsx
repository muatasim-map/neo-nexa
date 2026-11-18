import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon.jsx';
import { fx } from '../lib/fx.js';
import { say } from '../lib/say.js';

export const NAV = [
  ['home', 'Home'],
  ['tuition', 'Tuition programmes'],
  ['robotics', 'Robotics'],
  ['about', 'About us'],
  ['contact', 'Contact'],
];

export function Header({ current }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    /* Escape closes the menu instantly: keyboard actions never animate */
    const onKey = (e) => {
      if (e.key !== 'Escape' || !nav.current?.classList.contains('is-open')) return;
      nav.current.style.transition = 'none';
      requestAnimationFrame(() => requestAnimationFrame(() => { if (nav.current) nav.current.style.transition = ''; }));
      setOpen(false);
      toggle.current?.focus();
    };
    const onLink = (e) => { if (e.target.closest?.('a[href^="#"]') && !e.defaultPrevented) setOpen(false); };
    const narrow = matchMedia('(max-width: 47rem)');
    const onWidth = () => setOpen(false);
    addEventListener('keydown', onKey, true);
    document.addEventListener('click', onLink);
    narrow.addEventListener('change', onWidth);
    return () => { removeEventListener('keydown', onKey, true); document.removeEventListener('click', onLink); narrow.removeEventListener('change', onWidth); };
  }, []);

  function onBrand(e) {
    const r = e.currentTarget.getBoundingClientRect();
    fx.burst(r.left + r.width / 2, r.top + r.height / 2, 70);
    say('Wheee!');
  }

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="brand" href="#home" aria-label="NEXA360 home" onClick={onBrand}>
          <img src="/img/logo.png" alt="NEXA360" width="208" height="85" />
        </a>
        <button className="menu-toggle" type="button" id="menu-toggle" ref={toggle} aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          Menu <Icon id="menu-lines" />
        </button>
        <nav id="main-nav" ref={nav} className={open ? 'is-open' : undefined} aria-label="Main navigation">
          {NAV.map(([id, label]) => (
            <a key={id} href={'#' + id} aria-current={current === id ? 'location' : undefined}>{label}</a>
          ))}
        </nav>
        <a className="button header-action" href="#tuition">Find tuition <Icon id="arrow-right" /></a>
      </div>
    </header>
  );
}
