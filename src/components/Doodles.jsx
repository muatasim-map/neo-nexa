import { useEffect, useRef } from 'react';
import { reduce } from '../lib/env.js';
import { subscribeScroll } from '../lib/scroll.js';

const SHAPES = {
  star: '<path d="M12 2l2.6 6.9L22 9.3l-5.6 4.6L18.2 21 12 17l-6.2 4 1.8-7.1L2 9.3l7.4-.4z" fill="currentColor" opacity=".55"/>',
  plus: '<path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/>',
  squiggle: '<path d="M2 14c3-6 5 6 8 0s5 6 8 0 4 4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>',
  ring: '<circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="2" fill="none"/>',
  spark: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  rover: '<use href="#rover-icon" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  gift: '<use href="#session-gift" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
};
const SPEEDS = [0.12, 0.28];

/**
 * Floating doodles that drift at two different speeds as you scroll. Drop it in as the first child
 * of a section; it parallaxes against that section.
 * list: [shape, left %, top %, size px]
 */
export function Doodles({ list, colors }) {
  const wrap = useRef(null);

  useEffect(() => {
    if (reduce) return;
    const host = wrap.current?.parentElement;
    if (!host) return;
    const isMobile = window.innerWidth <= 752;
    if (isMobile) return;

    const layers = [...wrap.current.querySelectorAll('.layer')];
    let inView = true;

    const io = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    }, { rootMargin: '50px 0px' }) : null;

    io?.observe(host);

    const unsubscribe = subscribeScroll(() => {
      if (!inView) return;
      const r = host.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const top = r.top;
      layers.forEach((layer, i) => { layer.style.transform = `translate3d(0,${(top * -SPEEDS[i]).toFixed(1)}px,0)`; });
    });

    return () => {
      io?.disconnect();
      unsubscribe();
    };
  }, []);

  return (
    <div className="v2-doodles" aria-hidden="true" ref={wrap}>
      {SPEEDS.map((speed, li) => (
        <div className="layer" data-speed={speed} key={speed}>
          {list.map((d, i) => i % 2 !== li ? null : (
            <svg key={i} viewBox="0 0 24 24"
              style={{
                left: d[1] + '%', top: d[2] + '%', '--s': d[3] + 'px', '--c': colors[i % colors.length],
                '--d': 7 + (i * 1.7) % 6 + 's', '--dl': '-' + i * 1.3 + 's',
                '--fx': (i % 3) * 8 - 8 + 'px', '--fy': -10 - (i % 4) * 5 + 'px',
              }}
              dangerouslySetInnerHTML={{ __html: SHAPES[d[0]] }} />
          ))}
        </div>
      ))}
    </div>
  );
}
