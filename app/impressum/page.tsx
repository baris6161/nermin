import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nermin-interiors.de';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE_URL}/impressum` },
};

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="wrap">
          <div className="legal-inner">
            <div className="eyebrow legal-eyebrow">Rechtliches</div>
            <h1 className="legal-h">Impressum</h1>

            <div className="legal-body">
              <section className="legal-section">
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                  Nermin El Rifaey<br />
                  Nermin Interiors<br />
                  Echeloh 25<br />
                  44149 Dortmund
                </p>
              </section>

              <section className="legal-section">
                <h2>Kontakt</h2>
                <p>
                  E-Mail: <a href="mailto:nermin.interiors@gmail.com">nermin.interiors@gmail.com</a>
                </p>
              </section>

              <section className="legal-section">
                <h2>Umsatzsteuer-Identifikationsnummer</h2>
                <p>
                  Gemäß § 27a Umsatzsteuergesetz: wird auf Anfrage mitgeteilt.
                </p>
              </section>

              <section className="legal-section">
                <h2>Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr
                  </a>.
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section className="legal-section">
                <h2>Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                  als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
              </section>

              <section className="legal-section">
                <h2>Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
