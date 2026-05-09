'use client';

import { useEffect } from 'react';

export default function Manifesto() {
  useEffect(() => {
    const sec = document.querySelector('.manifesto') as HTMLElement | null;
    const q = sec?.querySelector('.manifesto-q') as HTMLElement | null;
    if (!sec || !q) return;
    const words = q.querySelectorAll<HTMLElement>(':scope > span, :scope > em');
    if (!words.length) return;
    const N = words.length;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh * 0.78;
      const endY = vh * 0.18;
      const range = startY - endY;
      let p = (startY - r.top) / range;
      p = Math.max(0, Math.min(1, p));
      const win = 0.32;
      words.forEach((w, i) => {
        const t = i / Math.max(1, N - 1);
        const scaled = p * (1 + win) - t;
        let local = scaled / win;
        local = Math.max(0, Math.min(1, local));
        w.style.opacity = local.toFixed(3);
        w.style.transform = `translateY(${((1 - local) * 0.45).toFixed(3)}em)`;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="manifesto">
      <div
        className="manifesto-leaves"
        data-parallax="0.08"
        style={{ transform: 'translateY(var(--py,0))' }}
      />
      <div className="wrap">
        <div className="manifesto-grid">
          <div className="manifesto-tag reveal">
            <span className="eyebrow">Philosophie</span>
            <span className="num">N°&nbsp;03</span>
          </div>
          <blockquote className="manifesto-q reveal" data-reveal-words>
            <span>Minimalistisches </span>
            <span>Interior </span>
            <span>Design </span>
            <span>bedeutet </span>
            <span>klare, </span>
            <span>durchdachte </span>
            <span>Räume </span>
            <span>
              <em>für Menschen,</em>{' '}
            </span>
            <span>die </span>
            <span>Wert </span>
            <span>auf </span>
            <span>
              <em>Ruhe</em>{' '}
            </span>
            <span>und </span>
            <span>Qualität </span>
            <span>legen. </span>
            <span>Ein </span>
            <span>Zuhause, </span>
            <span>das </span>
            <span>im </span>
            <span>Alltag </span>
            <span>funktioniert </span>
            <span>und </span>
            <span>zeitlos </span>
            <span>wirkt.</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
