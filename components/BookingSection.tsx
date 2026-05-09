'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function BookingSection() {
  useEffect(() => {
    const widget = document.querySelector('.calendly-inline-widget');
    if (!widget) return;
    const observer = new MutationObserver(() => {
      const iframe = widget.querySelector('iframe') as HTMLIFrameElement | null;
      if (iframe) {
        iframe.setAttribute('scrolling', 'no');
        observer.disconnect();
      }
    });
    observer.observe(widget, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="booking" id="buchen">
      <div className="wrap">
        <div className="booking-head reveal">
          <div className="eyebrow booking-eyebrow">
            <span className="bar"></span>
            <span>Design Call buchen</span>
          </div>
          <h2 className="booking-h" data-reveal-words>
            <span>Dein </span>
            <span>erster </span>
            <span>Schritt</span>
            <br />
            <span>zu </span>
            <span>
              <em>deinem</em>{' '}
            </span>
            <span>Raum.</span>
          </h2>
          <p className="booking-lede reveal">
            Buche direkt deinen Termin. 90 Minuten, online, ganz ohne Verpflichtung.
            Wir besprechen deinen Raum, deine Wünsche und den nächsten Schritt.
          </p>
        </div>

        <div className="booking-widget reveal">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/rifaey-nermin/30min?hide_gdpr_banner=1&background_color=1a1714&text_color=f3ede4&primary_color=c46a4f"
            style={{ minWidth: '320px', height: '660px' }}
          />
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
