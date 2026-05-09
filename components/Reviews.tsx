const reviews = [
  {
    text: 'Nermin hat unseren Wohnbereich komplett verwandelt. Die Materialauswahl ist zeitlos und das Raumgefühl genau das, was wir uns vorgestellt haben — warm, ruhig und trotzdem lebendig.',
    name: 'Julia M.',
    project: 'Wohnzimmer · E-Design',
  },
  {
    text: 'Sehr professionelle und persönliche Beratung. Sie hat sofort verstanden, welchen Stil wir suchen — und das Ergebnis noch besser umgesetzt als wir es uns vorgestellt hatten.',
    name: 'Thomas & Sarah K.',
    project: 'Schlafzimmer · Design Call',
  },
  {
    text: 'Der gesamte Prozess war unkompliziert, schnell und das Ergebnis überzeugend. Ein Zuhause, das endlich so wirkt, wie ich es immer wollte. Absolut empfehlenswert.',
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
