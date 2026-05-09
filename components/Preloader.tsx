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

    // Waits for hero image to be decoded AND painted (two rAFs after decode)
    const heroReady = new Promise<void>((resolve) => {
      const painted = () => requestAnimationFrame(() => requestAnimationFrame(() => resolve()));

      const tryDecode = (img: HTMLImageElement) => {
        if (img.complete && img.naturalWidth > 0) {
          img.decode().then(painted).catch(painted);
          return true;
        }
        return false;
      };

      const attach = (img: HTMLImageElement) => {
        if (tryDecode(img)) return;
        img.addEventListener('load',  () => img.decode().then(painted).catch(painted), { once: true });
        img.addEventListener('error', painted, { once: true });
      };

      const img = document.querySelector<HTMLImageElement>('.hero-img img');
      if (img) { attach(img); return; }

      // Image element not yet in DOM — observe until it appears
      const poll = setInterval(() => {
        const el = document.querySelector<HTMLImageElement>('.hero-img img');
        if (el) { clearInterval(poll); observe.disconnect(); attach(el); }
      }, 80);

      const observe = new MutationObserver(() => {
        const el = document.querySelector<HTMLImageElement>('.hero-img img');
        if (el) { clearInterval(poll); observe.disconnect(); attach(el); }
      });
      observe.observe(document.body, { childList: true, subtree: true });

      // window.load as final safety fallback
      window.addEventListener('load', () => { clearInterval(poll); observe.disconnect(); painted(); }, { once: true });
    });

    Promise.all([document.fonts.ready, heroReady]).then(finish);

    // Hard cap: 7 seconds
    const safety = setTimeout(finish, 7000);
    return () => clearTimeout(safety);
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
