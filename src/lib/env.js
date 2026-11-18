/* user-preference flags, read once like the original page did */
export const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
export const isCalm = () => document.documentElement.hasAttribute('data-calm');
export const cx = (...parts) => parts.filter(Boolean).join(' ') || undefined;
