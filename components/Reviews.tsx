const reviews = [
  {
    text: 'Endlich fühlt sich der Raum stimmig an. Nermin hat sofort verstanden, was uns wichtig ist, und genau das umgesetzt. Kein Schnickschnack, einfach ein schönes Zuhause.',
    name: 'Julia M.',
    project: 'Wohnzimmer · E-Design',
  },
  {
    text: 'Wir hatten viele Ideen, aber keinen Plan. Nach dem Design Call war alles klar. Das Schlafzimmer ist jetzt genau so geworden, wie wir es uns gewünscht haben.',
    name: 'Thomas & Sarah K.',
    project: 'Schlafzimmer · Design Call',
  },
  {
    text: 'Super unkomplizierte Zusammenarbeit. Nermin hat meinen Geschmack auf Anhieb getroffen. Den Raum erkenne ich kaum wieder.',
    name: 'Marie L.',
    project: 'Homeoffice · E-Design',
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="stimmen">
      <div className="wrap-wide">
        <div className="reviews-head">
          <div className="eyebrow reveal">
            <span className="bar"></span>
            <span>05 — Kundenstimmen</span>
          </div>
          <h2 className="reviews-h reveal" data-reveal-words>
            <span>Was </span>
            <span>Kunden </span>
            <span>sagen.</span>
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card reveal">
              <div className="review-stars" aria-label="5 von 5 Sternen">
                {'★★★★★'}
              </div>
              <blockquote className="review-quote">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="review-author">
                <span className="review-name">{r.name}</span>
                <span className="review-project">{r.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
