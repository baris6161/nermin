'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

const CAL_EMBED_JS = 'https://app.cal.eu/embed/embed.js';
const CAL_ORIGIN = 'https://app.cal.eu';
const CAL_LINK = 'nermin-el-rifaey/30min';

export default function BookingSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min', embedJsUrl: CAL_EMBED_JS });
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          dark: { 'cal-brand': '#c46a4f' },
          light: { 'cal-brand': '#c46a4f' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
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
            <Cal
              namespace="30min"
              calLink={CAL_LINK}
              calOrigin={CAL_ORIGIN}
              embedJsUrl={CAL_EMBED_JS}
              config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark' }}
              style={{ width: '100%', height: '660px', overflow: 'scroll' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
