import { reduce } from './env.js';

const active = new WeakMap();

/** Web Animations helper: cancels the previous animation on the element, does nothing under reduced motion. */
export function play(element, frames, duration = 220, easing = 'cubic-bezier(.215,.61,.355,1)') {
  if (!element || !element.animate) return;
  active.get(element)?.cancel();
  if (reduce) return;
  const animation = element.animate(frames, { duration, easing });
  active.set(element, animation);
  return animation;
}
