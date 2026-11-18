import { useEffect, useRef, useState } from 'react';
import { reduce } from '../lib/env.js';

/**
 * Tells you once an element has entered the viewport (or has already been scrolled past).
 * Under reduced motion it reports true straight away so nothing stays hidden.
 */
export function useInView({ margin = '0px 0px -8% 0px', threshold = 0, safety = false } = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(reduce || !('IntersectionObserver' in window));

  useEffect(() => {
    const el = ref.current;
    if (seen || !el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting || e.boundingClientRect.bottom < 0) { setSeen(true); io.disconnect(); }
      });
    }, { rootMargin: margin, threshold });
    io.observe(el);
    /* safety net: never leave content hidden */
    const timer = safety ? setTimeout(() => {
      if (el.getBoundingClientRect().top < innerHeight) setSeen(true);
    }, 2500) : 0;
    return () => { io.disconnect(); clearTimeout(timer); };
  }, [seen, margin, threshold, safety]);

  return [ref, seen];
}
