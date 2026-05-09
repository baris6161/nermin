'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const MIN_MS = 1400;
    const start = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN_MS - (Date.now() - start));
      setTimeout(() => setDone(true), wait);
    };

    // Polls for hero image until loaded, then resolves
    const heroReady = new Promise<void>((resolve) => {
      const check = () => {
        const img = document.querySelector<HTMLImageElement>('.hero-img img');
        if (img && img.complete && img.naturalWidth > 0) {
          resolve();
          return true;
        }
        return false;
      };

      // Already loaded?
      if (check()) return;

      // Poll every 120ms (reliable across all mobile browsers)
      const poll = setInterval(() => {
        if (check()) clearInterval(poll);
      }, 120);

      // Also listen on the element directly once it appears
      const observe = new MutationObserver(() => {
        const img = document.querySelector<HTMLImageElement>('.hero-img img');
        if (img) {
          observe.disconnect();
          if (img.complete && img.naturalWidth > 0) { clearInterval(poll); resolve(); return; }
          img.addEventListener('load',  () => { clearInterval(poll); resolve(); }, { once: true });
          img.addEventListener('error', () => { clearInterval(poll); resolve(); }, { once: true });
        }
      });
      observe.observe(document.body, { childList: true, subtree: true });

      // window.load as final fallback
      window.addEventListener('load', () => { clearInterval(poll); observe.disconnect(); resolve(); }, { once: true });
    });

    Promise.all([document.fonts.ready, heroReady]).then(finish);

    // Hard cap: 7 seconds
    const safety = setTimeout(finish, 7000);
    return () => clearTimeout(safety);
  }, []);

  return (
    <div className={`preloader${done ? ' preloader--done' : ''}`}>
      <div className="preloader-logo">
        Nermin<span className="preloader-sub">interiors</span>
      </div>
      <div className="preloader-track">
        <div className="preloader-bar" />
      </div>
    </div>
  );
}
