import { useEffect, useRef } from 'react';
import { fine, reduce, isCalm } from '../lib/env.js';
import { setFx, fx } from '../lib/fx.js';
import { say } from '../lib/say.js';

const COLS = ['#b48cf0', '#8fb4ff', '#f2a8d2', '#f3c86a', '#9be3e0'];
/* the palette follows the section the pointer is in */
const PALETTES = { home: ['#b48cf0', '#8fb4ff', '#f2a8d2', '#f3c86a'], footer: ['#b48cf0', '#9fc0ff', '#d9c3ff'] };
const SHAPES = ['star4', 'star4', 'plus', 'heart', 'ring'];
const TRAIL_MAX = 40;
const pick = (a) => a[(Math.random() * a.length) | 0];
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

/** Builds the particle engine on a canvas: pooled particles, one rAF loop that sleeps when nothing is alive. */
function createEngine(c) {
  const ctx = c.getContext('2d');
  const dpr = Math.min(devicePixelRatio || 1, 2);
  let parts = [], running = false, trail = 0, raf = 0;

  function size() { c.width = innerWidth * dpr; c.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  size();
  addEventListener('resize', size);

  function add(p) {
    if (p.trail) { if (trail >= TRAIL_MAX) return; trail++; }
    if (parts.length > 260) { const old = parts.shift(); if (old.trail) trail--; }
    parts.push(p);
    if (!running) { running = true; raf = requestAnimationFrame(tick); }
  }
  function star(x, y, r, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.beginPath();
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, rr = i % 2 ? r * 0.38 : r; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    ctx.closePath(); ctx.fill(); ctx.restore();
  }
  function shape(p, r) {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.beginPath();
    if (p.kind === 'star4') {
      /* four-point twinkle star with concave sides */
      ctx.moveTo(0, -r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.quadraticCurveTo(0, 0, 0, r);
      ctx.quadraticCurveTo(0, 0, -r, 0); ctx.quadraticCurveTo(0, 0, 0, -r); ctx.fill();
    } else if (p.kind === 'plus') {
      const w = r * 0.34; ctx.fillRect(-w / 2, -r, w, r * 2); ctx.fillRect(-r, -w / 2, r * 2, w);
    } else if (p.kind === 'heart') {
      const s = r * 0.9; ctx.moveTo(0, s * 0.9);
      ctx.bezierCurveTo(-s * 1.4, 0, -s * 0.7, -s * 1.1, 0, -s * 0.35);
      ctx.bezierCurveTo(s * 0.7, -s * 1.1, s * 1.4, 0, 0, s * 0.9); ctx.fill();
    } else if (p.kind === 'ring') {
      ctx.lineWidth = Math.max(1.2, r * 0.28); ctx.strokeStyle = p.c; ctx.arc(0, 0, r * 0.7, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.restore();
  }
  function tick() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.life -= p.decay;
      if (p.life <= 0 || p.y > innerHeight + 40) { if (p.trail) trail--; parts.splice(i, 1); continue; }
      p.vy += p.g; p.vx *= 0.985; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      if (p.wob) p.x += Math.sin((p.t = (p.t || 0) + 0.12)) * p.wob;
      ctx.globalAlpha = Math.min(1, p.life); ctx.fillStyle = p.c;
      if (p.kind === 'rect') { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillRect(-p.r, -p.r * 0.45, p.r * 2, p.r * 0.9); ctx.restore(); }
      else if (p.kind === 'star') star(p.x, p.y, p.r * Math.min(1, p.life + 0.2), p.rot);
      else {
        /* twinkle: scale pulses while it fades; soft glow only on trail particles (few at once) */
        const tw = 1 + Math.sin(p.life * 14) * 0.18, r = p.r * tw * Math.min(1, p.life + 0.25);
        if (p.glow) { ctx.shadowColor = p.c; ctx.shadowBlur = 8; }
        shape(p, r);
        if (p.glow) ctx.shadowBlur = 0;
      }
    }
    ctx.globalAlpha = 1;
    if (parts.length && !document.hidden) raf = requestAnimationFrame(tick);
    else { running = false; trail = 0; parts.length = 0; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }

  return {
    sparkle(x, y, zone) {
      add({ x, y, vx: (Math.random() - 0.5) * 0.9, vy: -0.35 - Math.random() * 0.6, g: -0.004, r: 3 + Math.random() * 3.5, rot: Math.random() * 0.6 - 0.3, vr: (Math.random() - 0.5) * 0.04,
        life: 1, decay: 0.022 + Math.random() * 0.01, c: pick(PALETTES[zone] || COLS), kind: pick(SHAPES), glow: true, wob: 0.25, trail: true });
    },
    burst(x, y, n) {
      for (let i = 0; i < (n || 60); i++) {
        const a = Math.random() * Math.PI * 2, s = 3 + Math.random() * 6;
        add({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 3, g: 0.18, r: 3 + Math.random() * 3, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, life: 1.6, decay: 0.012, c: COLS[i % COLS.length], kind: i % 3 ? 'rect' : pick(SHAPES) });
      }
    },
    rain() {
      for (let i = 0; i < 90; i++) add({ x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * 0.8, vx: (Math.random() - 0.5) * 0.6, vy: 1.5 + Math.random() * 2, g: 0.03, r: 4 + Math.random() * 5, rot: 0, vr: 0.05, life: 3, decay: 0.006, c: COLS[i % COLS.length], kind: i % 4 ? 'star4' : pick(SHAPES), wob: 0.4 });
    },
    destroy() { cancelAnimationFrame(raf); removeEventListener('resize', size); ctx.clearRect(0, 0, innerWidth, innerHeight); },
  };
}

/** Full-screen, pointer-events-none canvas for cursor sparkles, bursts and the secret star rain. */
export function FxCanvas() {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas.current) return; /* reduced motion: no canvas, every fx call stays a no-op */
    const engine = createEngine(canvas.current);
    setFx(engine);
    const off = [];
    const on = (target, type, fn, opts) => { target.addEventListener(type, fn, opts); off.push(() => target.removeEventListener(type, fn, opts)); };

    if (fine) {
      /* spawn only while the pointer is really moving, scaled by speed: slow = one every ~120 ms,
         fast swipe = a short trail, still pointer = nothing */
      let lastT = 0, lastSpawn = 0, lx = 0, ly = 0;
      on(window, 'pointermove', (e) => {
        const now = performance.now(), dt = Math.max(1, now - lastT), speed = Math.hypot(e.clientX - lx, e.clientY - ly) / dt;
        lastT = now; lx = e.clientX; ly = e.clientY;
        if (isCalm() || speed < 0.25) return;
        /* only where people look around (hero, footer), never while reading or filling forms */
        const zoneEl = e.target.closest && e.target.closest('.home, .site-footer'); if (!zoneEl) return;
        if (e.target.closest('input, textarea, select, .robot-stage, .rover-diagram')) return;
        const gap = speed > 1.4 ? 30 : speed > 0.7 ? 60 : 120;
        if (now - lastSpawn < gap) return; lastSpawn = now;
        const zone = zoneEl.classList.contains('home') ? 'home' : 'footer';
        fx.sparkle(e.clientX, e.clientY, zone);
        if (speed > 1.4) fx.sparkle(e.clientX - (Math.random() * 10 - 5), e.clientY - (Math.random() * 10 - 5), zone);
      }, { passive: true });
    }

    /* the secret code: up up down down left right left right B A */
    let k = 0;
    on(window, 'keydown', (e) => {
      k = (e.key === KONAMI[k] || e.key.toLowerCase() === KONAMI[k]) ? k + 1 : (e.key === KONAMI[0] ? 1 : 0);
      if (k === KONAMI.length) { k = 0; fx.rain(); say('You found the secret!'); }
    });

    return () => { off.forEach((f) => f()); setFx(null); engine.destroy(); };
  }, []);

  if (reduce) return null;
  return <canvas className="v2-fx" aria-hidden="true" ref={canvas} />;
}
