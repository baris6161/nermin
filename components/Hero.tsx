'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
    const onParallax = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const speed = parseFloat(el.dataset.parallax || '0.15');
        const center = r.top + r.height / 2 - vh / 2;
        el.style.setProperty('--py', `${(-center * speed).toFixed(1)}px`);
      });
    };
    window.addEventListener('scroll', onParallax, { passive: true });
    window.addEventListener('resize', onParallax);
    onParallax();
    return () => {
      window.removeEventListener('scroll', onParallax);
      window.removeEventListener('resize', onParallax);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div
        className="hero-img"
        data-parallax="0.05"
        style={{ transform: 'translateY(var(--py,0)) scale(1.08)' }}
      >
        <Image
          src="/images/wohnzimmer.jpg"
          alt="Minimalistisch gestaltetes Wohnzimmer mit weißen Boiserie-Paneelen, cremefarbener Einrichtung und elegantem Kronleuchter"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
      </div>
      <div className="hero-inner">
        <div className="hero-top">
          <div className="eyebrow">Interior Design Studio · Dortmund</div>
        </div>

        <h1 className="hero-headline" data-reveal-words>
          <span>Räume,</span>
          <br />
          <span>die </span>
          <span>
            <em>ruhig</em>
          </span>
          <br />
          <span>
            bleiben<span className="amp">.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-lede">
            Minimalistisches Interior Design für Menschen, die Klarheit und Qualität dem Lärm
            vorziehen. Reduziert. Warm. Im Alltag bewohnbar.
          </p>
          <div className="hero-cta-wrap">
            <a className="cta cta--cream" href="#buchen">
              <span className="cta-inner">
                Design Call buchen<span className="arrow"></span>
              </span>
            </a>
            <div className="hero-scroll">
              <span>scroll</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
