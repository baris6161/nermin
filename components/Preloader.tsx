'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const MIN_MS = 1400;
    const start = Date.now();

    const finish = () => {
      const wait = Math.max(0, MIN_MS - (Date.now() - start));
      setTimeout(() => setDone(true), wait);
    };

    // Small tick so Next.js has painted the DOM
    const init = setTimeout(() => {
      Promise.all([
        // 1. Fonts ready → marquee text renders correctly
        document.fonts.ready,
        // 2. Hero image loaded → no visible image pop-in
        new Promise<void>((resolve) => {
          const img = document.querySelector<HTMLImageElement>('.hero-img img');
          if (!img) { resolve(); return; }
          if (img.complete && img.naturalWidth > 0) { resolve(); return; }
          img.addEventListener('load',  () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        }),
      ]).then(finish);
    }, 60);

    // Hard safety cap: 7 seconds max
    const safety = setTimeout(() => setDone(true), 7000);

    return () => {
      clearTimeout(init);
      clearTimeout(safety);
    };
  }, []);

  return (
    <div className={`preloader${done ? ' preloader--done' : ''}`}>
      <div className="preloader-logo">
        <span className="dot" />
        nermin<span className="preloader-sub">interiors</span>
      </div>
      <div className="preloader-track">
        <div className="preloader-bar" />
      </div>
    </div>
  );
}
