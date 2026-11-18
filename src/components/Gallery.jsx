import { useLayoutEffect, useRef, useState } from 'react';
import { Icon } from './Icon.jsx';
import { fine, reduce } from '../lib/env.js';
import { play } from '../lib/motion.js';
import { openOffer } from '../lib/offer.js';

const PHOTOS = [
  { src: '/img/gallery-1.webp', alt: 'Tables and chairs set out for tuition in the hall', w: 574, h: 1020, crop: '40%' },
  { src: '/img/gallery-2.webp', alt: 'Learners working around tables with worksheets and laptops', w: 765, h: 1020, crop: '51%' },
  { src: '/img/gallery-3.webp', alt: 'A person writing science notes on a classroom whiteboard', w: 765, h: 1020, crop: '47%' },
  { src: '/img/gallery-4.webp', alt: 'Two laptops displaying the NEXA360 logo on a classroom table', w: 575, h: 1020, crop: '61%' },
];

/** Classroom photo carousel with the "first session free" seal pinned on it. */
export function Gallery() {
  const [index, setIndex] = useState(0);
  const root = useRef(null);
  const seal = useRef(null);
  const imgs = useRef([]);
  const change = useRef(null); /* { previous, step } recorded by the click, consumed after render */
  const outgoing = useRef(null);

  function step(by) {
    change.current = { previous: index, step: by };
    setIndex((i) => (i + by + PHOTOS.length) % PHOTOS.length);
  }

  /* page-turn: the old photo slides out as a clone while the new one slides in */
  useLayoutEffect(() => {
    const c = change.current; if (!c) return;
    change.current = null;
    outgoing.current?.remove();
    if (reduce) return;
    const previous = imgs.current[c.previous], next = imgs.current[index];
    if (!previous || !next) return;
    const print = previous.cloneNode();
    print.hidden = false; print.alt = ''; print.setAttribute('aria-hidden', 'true');
    print.style.cssText = 'z-index:2;pointer-events:none';
    previous.parentNode.append(print);
    outgoing.current = print;
    const a = play(print, [{ transform: 'none' }, { transform: `translateX(${c.step * -12}%) scale(.98)`, opacity: 0 }], 280);
    if (a) a.onfinish = () => print.remove();
    play(next, [{ transform: `translateX(${c.step * 8}%) scale(1.04)` }, { transform: 'none' }], 290);
    play(root.current.querySelector(`[data-step="${c.step}"] .icon`), [{ translate: '0' }, { translate: c.step * 4 + 'px', offset: 0.45 }, { translate: '0' }]);
  }, [index]);

  function onKeyDown(e) {
    const by = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
    if (by) { e.preventDefault(); step(by); }
  }

  /* tilt toward the pointer; the seal leans the same way */
  function onPointerMove(e) {
    if (!fine || reduce) return;
    const el = root.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${(x * 5).toFixed(2)}deg) rotateX(${(-y * 5).toFixed(2)}deg)`;
    const s = seal.current.getBoundingClientRect(), dx = e.clientX - (s.left + s.width / 2);
    seal.current.style.rotate = Math.max(-14, Math.min(14, dx / 18)).toFixed(1) + 'deg';
  }
  function onPointerLeave() {
    if (!fine || reduce) return;
    root.current.style.transform = '';
    seal.current.style.rotate = '';
  }

  function onSeal(e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openOffer(e.currentTarget);
  }

  return (
    <section className={fine && !reduce ? 'gallery v2-tilt' : 'gallery'} id="classroom-gallery" ref={root} aria-label="Barking Riverside classroom gallery"
      onKeyDown={onKeyDown} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="photo-frame">
        <a href="#free-session" className="seal-button" ref={seal} aria-label="See the free first tuition session offer" onClick={onSeal}>
          <svg className="session-seal" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
            <circle cx="60" cy="60" r="59.5" fill="#e3d0f9" stroke="#bea1e2" />
            <circle cx="60" cy="60" r="34.5" fill="#f1e5fe" stroke="#c8a9e9" />
            <path d="M29 60h5m-2.5-2.5v5M86 60h5m-2.5-2.5v5" fill="none" stroke="#8c60bc" strokeLinecap="round" />
            <path id="session-seal-ring" d="M60 13a47 47 0 1 1 0 94a47 47 0 1 1 0-94" fill="none" />
            <text><textPath href="#session-seal-ring" textLength="286" lengthAdjust="spacing">FIRST SESSION FREE • CLASSROOM &amp; ONLINE GCSE •</textPath></text>
            <use href="#session-gift" transform="translate(45 45) scale(1.25)" fill="none" stroke="#43226a" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </a>
        {PHOTOS.map((p, i) => (
          <img key={p.src} ref={(el) => (imgs.current[i] = el)} src={p.src} alt={p.alt} width={p.w} height={p.h} style={{ '--crop': p.crop }}
            hidden={i !== index} {...(i === 0 ? { fetchpriority: 'high' } : { loading: 'lazy' })} />
        ))}
      </div>
      <div className="gallery-bar">
        <span className="gallery-title">Barking Riverside classroom</span>
        <span className="v2-dots" aria-hidden="true">{PHOTOS.map((p, i) => <i key={p.src} className={i === index ? 'on' : undefined} />)}</span>
        <div className="gallery-controls">
          <button className="icon-button" type="button" data-step="-1" aria-label="Previous classroom photo" onClick={() => step(-1)}><Icon id="arrow-left" /></button>
          <span className="photo-count" id="photo-count" role="status" aria-atomic="true">{index + 1} of {PHOTOS.length}</span>
          <button className="icon-button" type="button" data-step="1" aria-label="Next classroom photo" onClick={() => step(1)}><Icon id="arrow-right" /></button>
        </div>
      </div>
    </section>
  );
}
