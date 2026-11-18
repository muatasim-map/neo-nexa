import { useEffect, useState } from 'react';

const PANELS = ['offline-registration', 'online-registration', 'robotics-enquiry'];
/* which main-menu item a hash belongs to */
const MENU_OF = { home: 'home', 'classroom-gallery': 'home', tuition: 'tuition', offline: 'tuition', online: 'tuition', robotics: 'robotics', about: 'about', contact: 'contact' };

/**
 * The page keeps its address-bar anchors. This reads the hash, tells the page which enquiry panel
 * (if any) is open and which menu item is current, and moves focus and scroll after the panel renders.
 */
export function useHashRoute() {
  const [hash, setHash] = useState(() => location.hash.slice(1));
  const [nudge, setNudge] = useState(0); /* re-run focus when the same link is clicked again */
  const [focusOnRoute, setFocusOnRoute] = useState(false);

  useEffect(() => {
    const onHash = () => { setHash(location.hash.slice(1)); setFocusOnRoute(true); setNudge((n) => n + 1); };
    const onClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link || event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.hash === location.hash) { setFocusOnRoute(true); setNudge((n) => n + 1); }
    };
    addEventListener('hashchange', onHash);
    document.addEventListener('click', onClick);
    return () => { removeEventListener('hashchange', onHash); document.removeEventListener('click', onClick); };
  }, []);

  const panel = PANELS.includes(hash) ? hash : null;
  const menuId = panel ? 'contact' : MENU_OF[hash || 'home'];

  /* after the panels have rendered: focus the heading and scroll to the destination */
  useEffect(() => {
    const destination = document.getElementById(hash || 'home');
    if (!(panel || (focusOnRoute && destination && hash))) return;
    const target = (panel && destination?.querySelector('h2')) || destination;
    if (!target) return;
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
    destination.scrollIntoView({ block: 'start' });
  }, [hash, panel, nudge, focusOnRoute]);

  return { hash, panel, menuId };
}
