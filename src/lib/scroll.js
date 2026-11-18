/* one passive scroll listener, rAF-throttled, shared by everything that follows scrolling */
const subs = new Set();
let queued = false;
let bound = false;

function run() {
  queued = false;
  subs.forEach((fn) => fn(window.scrollY));
}
function onScroll() {
  if (!queued) { queued = true; requestAnimationFrame(run); }
}

export function subscribeScroll(fn) {
  subs.add(fn);
  if (!bound) { addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); bound = true; }
  fn(window.scrollY);
  return () => {
    subs.delete(fn);
    if (!subs.size && bound) { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); bound = false; }
  };
}
