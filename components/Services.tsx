export default function Services() {
  return (
    <section className="services" id="leistungen">
      <div className="wrap-wide">
        <div className="services-head">
          <h2 className="services-h reveal" data-reveal-words>
            <span>Drei </span>
            <span>Wege </span>
            <span>zu</span>
            <br />
            <span>
              <em>einem</em>{' '}
            </span>
            <span>klaren </span>
            <span>Raum.</span>
          </h2>
          <p className="services-lede reveal">
            Individuelle Interior-Konzepte, Moodboards und 3D-Visualisierungen. Flexibel online
            begleitet, mit Fokus auf reduzierte Räume und ruhige Gesamtwirkung.
          </p>
        </div>

        <div className="svc-grid">
          <article className="svc reveal">
            <div className="svc-num">N°&nbsp;01</div>
            <h3 className="svc-title">Design&nbsp;Call</h3>
            <div className="svc-tag">90 Minuten · Online · Kostenpflichtig</div>
            <p className="svc-desc">
              Frische Ideen, professionelle Tipps und direkte Antworten. Gemeinsam besprechen wir,
              wie dein Raum stilvoller, harmonischer und funktionaler wird.
            </p>
            <ul className="svc-list">
              <li>90 Minuten Online-Beratung</li>
              <li>Tipps zu Möbeln, Farben, Dekoration</li>
              <li>Raumoptimierung &amp; Stylingideen</li>
              <li>Direkte Antworten auf deine Fragen</li>
            </ul>
            <a className="svc-cta" href="#kontakt">
              <span>Design&nbsp;Call anfragen</span>
              <span className="arrow"></span>
            </a>
          </article>

          <article className="svc is-feature reveal">
            <div className="svc-num">N°&nbsp;02 · meistgewählt</div>
            <h3 className="svc-title serif-i">E&#8209;Design</h3>
            <div className="svc-tag">Komplettes Konzept · Online · Kostenpflichtig</div>
            <p className="svc-desc">
              Das vollständige Interior-Konzept, flexibel und online begleitet. Ideal, wenn du ein
              durchdachtes Raumkonzept möchtest und die Umsetzung selbst übernimmst.
            </p>
            <ul className="svc-list">
              <li>Online-Beratung</li>
              <li>Moodboard &amp; Farbkonzept</li>
              <li>Möbel- &amp; Materialauswahl</li>
              <li>Stilistische Raumplanung</li>
              <li>Persönliche Shoppingliste</li>
            </ul>
            <div className="svc-addons">
              <span className="svc-addon-label">Buchbar dazu</span>
              <span className="svc-addon">3D-Visualisierung</span>
            </div>
            <a className="svc-cta is-light" href="#kontakt">
              <span>E-Design anfragen</span>
              <span className="arrow"></span>
            </a>
          </article>

          <article className="svc reveal">
            <div className="svc-num">N°&nbsp;03</div>
            <h3 className="svc-title">Curated&nbsp;Shopping</h3>
            <div className="svc-tag">Möbel · Materialien · Deko · Kostenpflichtig</div>
            <p className="svc-desc">
              Für alle, die ihren Stil bereits kennen und Unterstützung bei der passenden Auswahl
              möchten. Eine individuell abgestimmte Shoppingliste mit stilistisch passenden
              Empfehlungen.
            </p>
            <ul className="svc-list">
              <li>Möbel- &amp; Dekorationsauswahl</li>
              <li>Materialien &amp; Textilien</li>
              <li>Kuratierte Shoppingliste</li>
              <li>Abgestimmt auf deinen Stil</li>
            </ul>
            <div className="svc-addons">
              <span className="svc-addon-label">Buchbar dazu</span>
              <span className="svc-addon">Moodboard</span>
              <span className="svc-addon">3D-Visualisierung</span>
            </div>
            <a className="svc-cta" href="#kontakt">
              <span>Shopping anfragen</span>
              <span className="arrow"></span>
            </a>
          </article>
        </div>

        <div className="svc-bridge reveal">
          <p className="svc-bridge-text">
            Noch unsicher, welches Paket passt? <em>Oder erstmal ein kostenloses
            Erstgespräch</em>, um gemeinsam herauszufinden, was das Passende ist.
          </p>
          <a className="cta cta--ghost" href="#buchen">
            <span className="cta-inner">
              Kostenloses Erstgespräch buchen<span className="arrow"></span>
            </span>
          </a>
        </div>
      </div>

      {/* Custom / Individual Offer */}
      <div className="svc-custom">
        <div className="wrap-wide">
          <div className="svc-custom-inner">
            <div className="svc-custom-left">
              <div className="eyebrow svc-custom-eyebrow">Individuell</div>
              <h3 className="svc-custom-h" data-reveal-words>
                <span>Eigene </span>
                <span>Vorstellungen?</span>
                <br />
                <span>
                  <em>Lass </em>
                </span>
                <span>
                  <em>uns </em>
                </span>
                <span>
                  <em>sprechen.</em>
                </span>
              </h3>
            </div>
            <div className="svc-custom-right">
              <p className="svc-custom-desc">
                Jedes Projekt ist einzigartig. Wenn du besondere Anforderungen hast, mehrere Räume
                gestalten möchtest oder dir nicht sicher bist, welches Paket passt, melde dich
                einfach. Gemeinsam finden wir den richtigen Weg.
              </p>
              <a className="cta cta--outline-light" href="#kontakt">
                <span className="cta-inner">
                  Kontakt aufnehmen<span className="arrow"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
