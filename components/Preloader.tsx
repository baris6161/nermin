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

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    const safety = setTimeout(() => setDone(true), 5000);
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
