'use client';

import { useEffect } from 'react';

export default function Interactions() {
  useEffect(() => {
    // Custom cursor
    if (!matchMedia('(hover: none)').matches) {
      const dot = document.createElement('div');
      dot.className = 'cursor';
      const ring = document.createElement('div');
      ring.className = 'cursor-ring';
      document.body.append(dot, ring);
      let x = window.innerWidth / 2, y = window.innerHeight / 2, rx = x, ry = y;
      const onMouseMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
      window.addEventListener('mousemove', onMouseMove);
      let rafId: number;
      const tick = () => {
        rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%,-50%)`;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
        rafId = requestAnimationFrame(tick);
      };
      tick();
      const interactive = 'a, button, .work, .svc, .acc-q, input, textarea, select';
      document.addEventListener('mouseover', (e) => {
        if ((e.target as Element).closest(interactive)) {
          dot.classList.add('is-hover'); ring.classList.add('is-hover');
        }
      });
      document.addEventListener('mouseout', (e) => {
        if ((e.target as Element).closest(interactive)) {
          dot.classList.remove('is-hover'); ring.classList.remove('is-hover');
        }
      });
      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('mousemove', onMouseMove);
        dot.remove(); ring.remove();
      };
    }
  }, []);

  useEffect(() => {
    // Assign word-reveal indices
    document.querySelectorAll('[data-reveal-words]').forEach((el) => {
      el.querySelectorAll(':scope > span, :scope > em').forEach((k, i) => {
        (k as HTMLElement).style.setProperty('--i', String(i));
      });
    });

    // IntersectionObserver for fade-up + word reveals + work curtains
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-stagger, .work, [data-reveal-words]').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Magnetic CTA
    const ctaEls = document.querySelectorAll<HTMLElement>('.cta');
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    ctaEls.forEach((btn) => {
      const inner = (btn.querySelector('.cta-inner') || btn) as HTMLElement;
      const strength = 18;
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        btn.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        inner.style.transform = `translate(${dx * strength * 0.4}px, ${dy * strength * 0.4}px)`;
      };
      const leave = () => {
        btn.style.transform = '';
        inner.style.transform = '';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      handlers.push({ el: btn, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  useEffect(() => {
    // Floating label sync for selects
    document.querySelectorAll<HTMLElement>('.field input, .field textarea, .field select').forEach((input) => {
      const sync = () => input.parentElement?.classList.toggle('has-value', !!(input as HTMLInputElement).value);
      input.addEventListener('input', sync);
      input.addEventListener('change', sync);
      sync();
    });
  }, []);

  return null;
}
