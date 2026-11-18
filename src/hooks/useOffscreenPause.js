import { useEffect, useRef, useState } from 'react';

/** True while the element is off screen, so looping decorative animations can pause. */
export function useOffscreenPause() {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => setPaused(!e.isIntersecting)));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, paused];
}
