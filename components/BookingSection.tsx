'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function BookingSection() {
  const initialized = useRef(false);

  useEffect(() => {
    type CalFn = ((...args: unknown[]) => void) & { ns: Record<string, (...args: unknown[]) => void> };

  const init = () => {
      const Cal = (window as { Cal?: CalFn }).Cal;
      if (!Cal || initialized.current) return;
      initialized.current = true;

      Cal('init', '30min', { origin: 'https://cal.eu' });
      Cal.ns['30min']('inline', {
        elementOrSelector: '#cal-booking-widget',
        calLink: 'nermin-el-rifaey/30min',
        config: { layout: 'month_view' },
      });
      Cal.ns['30min']('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#c46a4f' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    };

    if ((window as { Cal?: unknown }).Cal) init();

    window.addEventListener('cal:loaded', init, { once: true });
    return () => window.removeEventListener('cal:loaded', init);
  }, []);

  return (
    <section className="booking" id="buchen">
      <div className="wrap">
        <div className="booking-grid">
          <div className="booking-left reveal">
            <div className="eyebrow booking-eyebrow">
              <span className="bar"></span>
              <span>Design Call buchen</span>
            </div>
            <h2 className="booking-h" data-reveal-words>
              <span>Dein erster </span>
              <span>Schritt</span>
              <br />
              <span>zu </span>
              <span>
                <em>deinem</em>{' '}
              </span>
              <span>Raum.</span>
            </h2>
            <p className="booking-lede">
              Buche direkt deinen Termin. 90 Minuten, online, ganz ohne Verpflichtung.
              Wir besprechen deinen Raum, deine Wünsche und den nächsten Schritt.
            </p>
          </div>

          <div className="booking-widget reveal">
            <div
              id="cal-booking-widget"
              style={{ width: '100%', height: '660px' }}
            />
          </div>
        </div>
      </div>

      <Script
        src="https://cal.eu/embed/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          type CalFn = ((...args: unknown[]) => void) & { ns: Record<string, (...args: unknown[]) => void> };
          const Cal = (window as { Cal?: CalFn }).Cal;
          if (!Cal || initialized.current) return;
          initialized.current = true;

          Cal('init', '30min', { origin: 'https://cal.eu' });
          Cal.ns['30min']('inline', {
            elementOrSelector: '#cal-booking-widget',
            calLink: 'nermin-el-rifaey/30min',
            config: { layout: 'month_view' },
          });
          Cal.ns['30min']('ui', {
            theme: 'dark',
            styles: { branding: { brandColor: '#c46a4f' } },
            hideEventTypeDetails: false,
            layout: 'month_view',
          });
        }}
      />
    </section>
  );
}
