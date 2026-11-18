import { Fragment } from 'react';
import { reduce, cx } from '../lib/env.js';
import { useInView } from '../hooks/useInView.js';

/** Small hand-drawn-underline label above a section heading. */
export function Eyebrow({ children }) {
  const [ref, seen] = useInView();
  return (
    <span ref={ref} className={cx('v2-eyebrow', seen && 'in')} aria-hidden="true">
      {children}
      <svg viewBox="0 0 100 8" preserveAspectRatio="none"><path d="M1 5c8-5 14 4 22 0s14-4 22 0 14 4 22 0 14-4 22 0 9 2 10 1" /></svg>
    </span>
  );
}

/** Section heading whose words rise one after another. */
export function SectionHeading({ id, eyebrow, children }) {
  const [ref, seen] = useInView({ threshold: 0.08 });
  const text = String(children);
  const words = text.trim().split(/\s+/);
  return (
    <>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {reduce ? (
        <h2 id={id}>{text}</h2>
      ) : (
        <h2 id={id} ref={ref} aria-label={text} data-word-host="" className={cx(seen && 'in')}>
          {words.map((w, i) => (
            <Fragment key={i}>
              <span className="v2-word" aria-hidden="true"><span style={{ '--wd': Math.round(i * 55 + i * i * 4) + 'ms' }}>{w}</span></span>
              {i < words.length - 1 && ' '}
            </Fragment>
          ))}
        </h2>
      )}
    </>
  );
}
