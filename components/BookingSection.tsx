'use client';

import Script from 'next/script';

export default function BookingSection() {
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
            data-url="https://calendly.com/nermin-interiors/design-call?hide_gdpr_banner=1&primary_color=c46a4f"
            style={{ minWidth: '320px', height: '700px' }}
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
