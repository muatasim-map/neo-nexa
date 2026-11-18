import { useEffect, useRef, useState } from 'react';
import { reduce } from '../lib/env.js';
import { say } from '../lib/say.js';
import { subscribeScroll } from '../lib/scroll.js';

/** Short logo splash, once per session, skippable, desktop only. */
function Intro() {
  const [phase, setPhase] = useState(() => {
    if (reduce || innerWidth < 760) return 'gone';
    try { return sessionStorage.getItem('v2-intro') === '1' ? 'gone' : 'in'; } catch { return 'in'; }
  });

  useEffect(() => {
    try { sessionStorage.setItem('v2-intro', '1'); } catch { /* storage may be blocked */ }
  }, []);
  useEffect(() => {
    if (phase !== 'in') return;
    const t = setTimeout(() => setPhase('out'), 550);
    return () => clearTimeout(t);
  }, [phase]);
  useEffect(() => {
    if (phase !== 'out') return;
    const t = setTimeout(() => setPhase('gone'), 360);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'gone') return null;
  return (
    <div className={phase === 'out' ? 'v2-intro out' : 'v2-intro'} aria-hidden="true" onClick={() => setPhase('out')}>
      <img src="/img/logo.png" alt="" width="208" height="85" />
    </div>
  );
}

const LINES = { tuition: 'Pick your subject!', robotics: 'Ooh, robots! My cousins', about: 'Nice to meet you', reviews: 'Real students say hi', contact: 'Stuck on a topic? We’ve got you.' };
const MOODS = ['home', 'tuition', 'robotics', 'about', 'reviews', 'contact'];

/**
 * Everything that follows the page as a whole: the reading-progress bar, the "scrolled" state of the
 * header, the section mood colour and Nexo's one-liners, plus the invalid-field nudge.
 */
export function PageChrome() {
  const bar = useRef(null);

  useEffect(() => {
    let max = document.documentElement.scrollHeight - innerHeight;
    let isScrolled = false;

    const onResize = () => {
      max = document.documentElement.scrollHeight - innerHeight;
    };
    window.addEventListener('resize', onResize, { passive: true });

    const unsubscribe = subscribeScroll((y) => {
      if (bar.current) bar.current.style.transform = `scaleX(${(max > 0 ? y / max : 0).toFixed(4)})`;
      const shouldBeScrolled = y > 12;
      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled;
        document.documentElement.classList.toggle('v2-scrolled', shouldBeScrolled);
      }
    });

    return () => {
      window.removeEventListener('resize', onResize);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const said = {};
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        document.body.setAttribute('data-mood', id);
        if (LINES[id] && !said[id]) { said[id] = 1; say(LINES[id]); }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    MOODS.forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
    return () => io.disconnect();
  }, []);

  /* Nexo "thinking" line when a required field is missing (throttled) */
  useEffect(() => {
    let last = 0;
    const onInvalid = () => {
      const now = Date.now(); if (now - last < 4000) return; last = now;
      say('Hmm, one box needs you');
    };
    document.addEventListener('invalid', onInvalid, true);
    return () => document.removeEventListener('invalid', onInvalid, true);
  }, []);

  return (
    <>
      <Intro />
      <div className="v2-progress" aria-hidden="true" ref={bar} />
    </>
  );
}
