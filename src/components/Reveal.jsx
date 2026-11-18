import { useEffect } from 'react';
import { reduce, cx } from '../lib/env.js';
import { useInView } from '../hooks/useInView.js';

/** Wrapper that fades its element up when it scrolls into view. `delay` staggers siblings. */
export function Reveal({ as: Tag = 'div', delay = 0, className, style, children, onSeen, ...rest }) {
  const [ref, seen] = useInView({ threshold: 0.08, safety: true });
  useEffect(() => { if (seen) onSeen?.(); }, [seen]); // eslint-disable-line react-hooks/exhaustive-deps
  const motion = reduce ? {} : { 'data-reveal': '', style: { '--rd': Math.min(delay, 400) + 'ms', ...style } };
  return (
    <Tag ref={ref} className={cx(className, seen && !reduce && 'in')} {...(reduce ? { style } : {})} {...rest} {...motion}>
      {children}
    </Tag>
  );
}
