'use client';

import { useEffect } from 'react';

const faqs = [
  {
    num: 'F 01',
    q: 'Wie läuft die Zusammenarbeit ab?',
    a: 'Wir starten mit einem Gespräch, in dem wir deine Räume, deinen Stil und deine Wünsche kennenlernen. Daraus entsteht ein Konzept — Moodboard, Farbpalette, Materialien — das wir gemeinsam verfeinern. Anschließend begleiten wir dich bis zur Umsetzung mit Shoppinglisten, optionalen 3D-Visualisierungen und kontinuierlicher Rückkopplung.',
  },
  {
    num: 'F 02',
    q: 'Bietet ihr auch Beratung für einzelne Räume an?',
    a: 'Ja, egal ob kompletter Wohnraum oder nur ein einzelnes Zimmer. Wir gestalten flexibel nach Bedarf, vom Schlafzimmer über die Ankleide bis zum Arbeitsbereich, und kombinieren bei Bedarf einzelne Leistungen wie Moodboard oder 3D-Visualisierung.',
  },
  {
    num: 'F 03',
    q: 'Arbeitet ihr auch digital?',
    a: 'Wir bieten unsere Leistungen vor Ort und komplett digital an, auch international. Der gesamte Prozess von der Beratung bis zur Shoppingliste lässt sich remote begleiten, sodass dein Standort kein Hindernis ist.',
  },
  {
    num: 'F 04',
    q: 'Was kostet ein vollständiges Konzept?',
    a: 'Das E-Design-Paket startet bei 690 € pro Raum und beinhaltet Moodboard, Farbkonzept, Möbel- und Materialauswahl sowie eine kuratierte Shoppingliste. Optional kommt eine 3D-Visualisierung ab 290 € hinzu. Im unverbindlichen Design Call (90 €) klären wir, welcher Umfang zu deinem Projekt passt.',
  },
];

export default function FAQ() {
  useEffect(() => {
    const items = document.querySelectorAll('.acc-item');
    items.forEach((item) => {
      const q = item.querySelector('.acc-q');
      q?.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        items.forEach((i) => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  }, []);

  return (
    <section className="faq" id="fragen">
      <div className="wrap">
        <div className="faq-grid">
          <aside className="faq-side reveal">
            <span className="eyebrow">06 — Häufige Fragen</span>
            <h2 className="faq-h" data-reveal-words>
              <span>
                <em>Klare</em>
              </span>
              <br />
              <span>Antworten.</span>
            </h2>
            <p className="helper">
              Was du wissen möchtest, bevor wir starten — und was die meisten Kunden im ersten
              Gespräch fragen.
            </p>
          </aside>

          <div className="acc reveal">
            {faqs.map((faq) => (
              <div className="acc-item" key={faq.num}>
                <button className="acc-q">
                  <span className="acc-num">{faq.num}</span>
                  <span>{faq.q}</span>
                  <span className="acc-icon" aria-hidden="true"></span>
                </button>
                <div className="acc-a">
                  <div>
                    <div className="acc-a-inner">{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
