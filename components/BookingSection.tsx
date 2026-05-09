'use client';

import Cal from '@calcom/embed-react';

export default function BookingSection() {
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
            <Cal
              calLink="nermin-el-rifaey/30min"
              calOrigin="https://cal.eu"
              embedJsUrl="https://cal.eu/embed/embed.js"
              config={{
                theme: 'dark',
                brandColor: 'c46a4f',
                background: '1a1714',
              }}
              style={{ width: '100%', height: '660px', overflow: 'scroll' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
