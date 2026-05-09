import Image from 'next/image';

const works = [
  {
    num: '01 / 04', cls: 'work-1',
    img: '/images/wohnzimmer.jpg', alt: 'Wohnzimmer',
    title: 'Wohnzimmer', mood: 'Zeitlos · Entspannt', yr: 'N° 01 · 2025',
    sizes: '(max-width: 980px) 100vw, 58vw',
    unoptimized: false,
  },
  {
    num: '02 / 04', cls: 'work-2',
    img: '/images/ankleide.jpg', alt: 'Ankleide',
    title: 'Ankleide', mood: 'Ruhig · Warm', yr: 'N° 02 · 2025',
    sizes: '(max-width: 980px) 100vw, 35vw',
    unoptimized: true,
  },
  {
    num: '03 / 04', cls: 'work-3',
    img: '/images/arbeitsbereich.jpg', alt: 'Arbeitsbereich',
    title: 'Arbeitsbereich', mood: 'Klar · Fokussiert', yr: 'N° 03 · 2026',
    sizes: '(max-width: 980px) 100vw, 35vw',
    unoptimized: true,
  },
  {
    num: '04 / 04', cls: 'work-4',
    img: '/images/badezimmer.jpg', alt: 'Badezimmer',
    title: 'Badezimmer', mood: 'Spa · Atmosphärisch', yr: 'N° 04 · 2026',
    sizes: '(max-width: 980px) 100vw, 44vw',
    unoptimized: false,
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="arbeiten">
      <div className="wrap-wide">
        <div className="portfolio-head">
          <div className="eyebrow reveal">04 — Ausgewählte Arbeiten</div>
          <h2 className="portfolio-h reveal" data-reveal-words>
            <span>Vier&nbsp;Räume,</span> <br />
            <span>vier&nbsp;Stimmungen.</span>
          </h2>
          <div className="portfolio-meta reveal">
            2024 — 2026
            <br />
            Privat · Atelier · Hospitality
          </div>
        </div>

        <div className="portfolio-grid">
          {works.map((w) => (
            <article key={w.cls} className={`work ${w.cls}`}>
              <div className="work-img-wrap">
                <span className="work-num">{w.num}</span>
                <Image
                  src={w.img}
                  alt={w.alt}
                  fill
                  quality={90}
                  sizes={w.sizes}
                  unoptimized={w.unoptimized}
                  style={{ objectFit: 'cover' }}
                />
                <div className="work-overlay">
                  <span className="work-name">{w.title}</span>
                </div>
              </div>
              <div className="work-info">
                <span className="work-title">{w.title}</span>
                <span className="work-mood">{w.mood}</span>
                <span className="work-yr">{w.yr}</span>
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
}
