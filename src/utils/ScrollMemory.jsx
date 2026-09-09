import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SESSION_PREFIX = 'scroll:';

export default function ScrollMemory({ children }) {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  function saveScrollForPath(path) {
    try {
      sessionStorage.setItem(SESSION_PREFIX + path, String(window.scrollY || 0));
    } catch (e) {
      // ignore storage errors
    }
  }

  function getSavedScrollForPath(path) {
    try {
      const v = sessionStorage.getItem(SESSION_PREFIX + path);
      return v ? parseFloat(v) : undefined;
    } catch {
      return undefined;
    }
  }

  useEffect(() => {
    const prev = prevPathRef.current;
    const curr = location.pathname;

    // Save scroll for the previous path whenever pathname changes
    if (prev) saveScrollForPath(prev);

    // Restore scroll for the current path (run on next frame so content has rendered)
    requestAnimationFrame(() => {
      // If there's a hash anchor, prefer scrolling to that element
      if (location.hash) {
        const id = location.hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: 'auto' });
          prevPathRef.current = curr;
          return;
        }
      }

      const saved = getSavedScrollForPath(curr);
      const target = typeof saved === 'number' ? saved : 0;
      window.scrollTo({ top: target, behavior: 'auto' });
    });

    prevPathRef.current = curr;
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}
