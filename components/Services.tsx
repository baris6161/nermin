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
            Individuelle Interior-Konzepte, Moodboards und 3D-Visualisierungen — flexibel online
            begleitet, mit Fokus auf reduzierte Räume und ruhige Gesamtwirkung.
          </p>
        </div>

        <div className="svc-grid">
          <article className="svc reveal">
            <div className="svc-num">N°&nbsp;01</div>
            <h3 className="svc-title">Design&nbsp;Call</h3>
            <div className="svc-tag">90 Minuten · Online</div>
            <p className="svc-desc">
              Frische Ideen, professionelle Tipps und direkte Antworten — gemeinsam besprechen wir,
              wie dein Raum stilvoller, harmonischer und funktionaler wird.
            </p>
            <ul className="svc-list">
              <li>90 Minuten Online-Beratung</li>
              <li>Tipps zu Möbeln, Farben, Dekoration</li>
              <li>Raumoptimierung &amp; Stylingideen</li>
              <li>Direkte Antworten auf deine Fragen</li>
            </ul>
            <div className="svc-foot">
              <div className="svc-price">
                <small>Preis</small>90&nbsp;€
              </div>
              <div className="svc-optional">90 Min · Online</div>
            </div>
            <a className="svc-cta" href="#kontakt">
              <span>Design&nbsp;Call buchen</span>
              <span className="arrow"></span>
            </a>
          </article>

          <article className="svc is-feature reveal">
            <div className="svc-num">N°&nbsp;02 · meistgewählt</div>
            <h3 className="svc-title serif-i">E&#8209;Design</h3>
            <div className="svc-tag">Komplettes Konzept · Online</div>
            <p className="svc-desc">
              Das vollständige Interior-Konzept — flexibel und online begleitet. Ideal, wenn du ein
              durchdachtes Raumkonzept möchtest und die Umsetzung selbst übernimmst.
            </p>
            <ul className="svc-list">
              <li>Online-Beratung</li>
              <li>Moodboard &amp; Farbkonzept</li>
              <li>Möbel- &amp; Materialauswahl</li>
              <li>Stilistische Raumplanung</li>
              <li>Persönliche Shoppingliste</li>
            </ul>
            <div className="svc-foot">
              <div className="svc-price">
                <small>ab</small>690&nbsp;€<small className="per">/ Raum</small>
              </div>
              <div className="svc-optional">
                +&nbsp;3D-Visualisierung
                <br />
                optional ab 290&nbsp;€
              </div>
            </div>
            <a className="svc-cta is-light" href="#kontakt">
              <span>E-Design anfragen</span>
              <span className="arrow"></span>
            </a>
          </article>

          <article className="svc reveal">
            <div className="svc-num">N°&nbsp;03</div>
            <h3 className="svc-title">Curated&nbsp;Shopping</h3>
            <div className="svc-tag">Möbel · Materialien · Deko</div>
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
            <div className="svc-foot">
              <div className="svc-price">
                <small>ab</small>290&nbsp;€<small className="per">/ Raum</small>
              </div>
              <div className="svc-optional">
                +&nbsp;Moodboard ab 149&nbsp;€
                <br />
                +&nbsp;3D ab 290&nbsp;€
              </div>
            </div>
            <a className="svc-cta" href="#kontakt">
              <span>Shopping anfragen</span>
              <span className="arrow"></span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
