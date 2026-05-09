export default function About() {
  return (
    <section className="about" id="studio">
      <div className="wrap">
        <div className="about-grid">
          <figure className="about-portrait reveal">
            <img src="/images/portrait.jpg" alt="Nermin El Rifaey" />
            <figcaption className="about-portrait-tag">Nermin El Rifaey · Gründerin</figcaption>
          </figure>

          <div className="about-text reveal">
            <div className="about-eyebrow eyebrow">
              <span className="bar"></span>
              <span>02 — Über mich</span>
            </div>
            <h2 className="about-h" data-reveal-words>
              <span>Klarer </span>
              <span>Blick.</span>
              <br />
              <span>
                <em>Ruhige</em>{' '}
              </span>
              <span>Räume.</span>
            </h2>
            <div className="about-body">
              <p>
                Ich bin Nermin El Rifaey, Gründerin von Nermin Interiors. Mit klarem Blick für
                Gestaltung entwickle ich minimalistische Räume, die Ruhe und Struktur ausstrahlen —
                Interiors, die im Alltag funktionieren und gleichzeitig zeitlos wirken.
              </p>
              <p>
                Mein Anspruch: warme Materialien, ausgewogene Farben und reduzierte Formen.
                Persönlich begleitet, mit Blick fürs Detail. Kein Showroom-Look — ein Zuhause, das
                atmet.
              </p>
            </div>
            <div className="about-sig">— Nermin El&nbsp;Rifaey</div>
            <div className="about-meta">
              <div>
                <span className="label">Studio</span>
                <strong>2024</strong>
                <span className="sub">gegründet</span>
              </div>
              <div>
                <span className="label">Tätig</span>
                <strong>Remote · DE</strong>
                <span className="sub">weltweit verfügbar</span>
              </div>
              <div>
                <span className="label">Räume</span>
                <strong>Privat &amp; Gewerbe</strong>
                <span className="sub">Wohnen · Office · Hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
