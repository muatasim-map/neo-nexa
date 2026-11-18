import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon.jsx';
import { Reveal } from './Reveal.jsx';
import { Doodles } from './Doodles.jsx';
import { SectionHeading } from './Heading.jsx';
import { reduce, cx } from '../lib/env.js';
import { play } from '../lib/motion.js';
import { useInView } from '../hooks/useInView.js';
import { useOffscreenPause } from '../hooks/useOffscreenPause.js';
import { REVIEWS } from '../data/reviews.js';

const DOODLES = [['star', 3, 12, 22], ['star', 95, 78, 16], ['spark', 90, 10, 18]];
const COLORS = ['#9b6fd6', '#e0a24f'];
const EASE = 'cubic-bezier(.23,1,.32,1)';

function Stars() {
  const [ref, seen] = useInView();
  return (
    <span className={cx('stars', seen && 'in')} ref={ref} aria-hidden="true">
      {'★★★★★'.split('').map((s, i) => <span className="v2-star" key={i} style={{ '--i': i }}>{s}</span>)}
    </span>
  );
}

/** One review at a time; the card turns like a page when you press next. */
function Featured() {
  const [index, setIndex] = useState(0);
  const figure = useRef(null);
  const button = useRef(null);
  const turned = useRef(false);
  const r = REVIEWS[index];

  useEffect(() => {
    if (!turned.current) return;
    turned.current = false;
    const fig = figure.current;
    play(fig, [{ transform: 'perspective(720px) rotateY(-9deg) translateX(6px)', opacity: 0.4 }, { transform: 'none', opacity: 1 }], 270);
    if (reduce) return;
    fig.querySelector('blockquote')?.animate([{ opacity: 0, transform: 'translateX(18px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 320, easing: EASE });
    fig.querySelector('figcaption')?.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 300, delay: 80, easing: EASE, fill: 'backwards' });
    const b = button.current; b.classList.remove('spin'); void b.offsetWidth; b.classList.add('spin');
  }, [index]);

  return (
    <Reveal as="div" delay={70} className="featured-review-wrap">
      <figure className="featured-review" id="featured-review" ref={figure}>
        <blockquote key={index}>{r.text}</blockquote>
        <figcaption key={'c' + index}>
          <span className="v2-avatar" aria-hidden="true">{r.name.trim().charAt(0).toUpperCase()}</span>
          <strong>{r.name}</strong> · {r.excerpt && 'Excerpt · '}
          {r.url
            ? <a href={r.url} rel="noopener noreferrer" target="_blank" aria-label={'Google review by ' + r.name}>Google review</a>
            : 'Google review'}
        </figcaption>
      </figure>
      <button type="button" className="review-next" ref={button} aria-label="Next review" aria-controls="featured-review"
        onClick={() => { turned.current = true; setIndex((i) => (i + 1) % REVIEWS.length); }}>
        <Icon id="arrow-right" />
      </button>
      <span className="review-position" role="status" aria-live="polite">{index + 1} / {REVIEWS.length}</span>
    </Reveal>
  );
}

export function Reviews() {
  const [ref, paused] = useOffscreenPause();
  return (
    <section className={cx('reviews band', paused && 'v2-paused')} id="reviews" ref={ref} aria-labelledby="reviews-title">
      <Doodles list={DOODLES} colors={COLORS} />
      <div className="wrap reviews-layout">
        <div className="reviews-heading">
          <SectionHeading id="reviews-title" eyebrow="Reviews">What students and parents say</SectionHeading>
          <Reveal as="p" delay={0}><Stars /><br /><strong>5 out of 5</strong> on Google Reviews</Reveal>
        </div>
        <div className="reviews-content"><Featured /></div>
      </div>
    </section>
  );
}
