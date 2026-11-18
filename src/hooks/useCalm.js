import { useCallback, useState } from 'react';

/** Calm mode: one switch, remembered. index.html applies it before first paint so nothing flashes. */
export function useCalm() {
  const [calm, setCalm] = useState(() => document.documentElement.hasAttribute('data-calm'));
  const toggle = useCallback(() => {
    const on = !document.documentElement.hasAttribute('data-calm');
    document.documentElement.toggleAttribute('data-calm', on);
    try { localStorage.setItem('v2-calm', on ? '1' : '0'); } catch { /* storage may be blocked */ }
    setCalm(on);
  }, []);
  return [calm, toggle];
}
