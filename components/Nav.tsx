'use client';

import { useEffect, useRef } from 'react';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const mnavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const burger = burgerRef.current;
    const mnav = mnavRef.current;
    if (!nav || !burger || !mnav) return;

    const heroEl = document.querySelector('.hero') as HTMLElement | null;
    const contactEl = document.querySelector('.contact') as HTMLElement | null;

    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
      const navBottom = nav.getBoundingClientRect().bottom;
      const overDark =
        (heroEl && heroEl.getBoundingClientRect().bottom > navBottom + 4) ||
        (contactEl &&
          contactEl.getBoundingClientRect().top < navBottom - 4 &&
          contactEl.getBoundingClientRect().bottom > navBottom);
      nav.classList.toggle('is-over-dark', !!overDark);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    const toggleMnav = (force?: boolean) => {
      const open = force ?? !mnav.classList.contains('is-open');
      mnav.classList.toggle('is-open', open);
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    burger.addEventListener('click', () => toggleMnav());
    mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggleMnav(false)));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <header className="nav" ref={navRef}>
        <a className="logo" href="#top">
          Nermin<span className="logo-sub">interiors</span>
        </a>
        <nav className="nav-links">
          <a href="#studio">Studio</a>
          <a href="#arbeiten">Arbeiten</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#fragen">Fragen</a>
          <a href="#buchen" className="nav-cta">Design Call</a>
        </nav>
        <button
          className="nav-burger"
          type="button"
          aria-label="Menü öffnen"
          aria-expanded="false"
          ref={burgerRef}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className="mnav" aria-hidden="true" ref={mnavRef}>
        <div className="mnav-inner">
          <a href="#studio">Studio</a>
          <a href="#arbeiten">Arbeiten</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#fragen">Fragen</a>
          <a href="#buchen" className="mnav-cta">
            Design Call buchen<span className="arrow"></span>
          </a>
          <div className="mnav-meta">
            <a href="mailto:nermin.interiors@gmail.com">nermin.interiors@gmail.com</a>
            <a href="tel:+491622017106">+49 162 2017106</a>
          </div>
        </div>
      </div>
    </>
  );
}
