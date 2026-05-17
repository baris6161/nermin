import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Anfrage gesendet',
  robots: { index: false, follow: false },
};

export default function Danke() {
  return (
    <>
      <Nav />
      <main className="danke-page">
        <div className="wrap">
          <div className="danke-inner">
            <div className="danke-mark">N</div>
            <h1 className="danke-h">Danke für deine Anfrage.</h1>
            <p className="danke-lede">
              Ich melde mich in der Regel innerhalb von 48 Stunden bei dir.
              <br />
              Bis dahin — schau gerne auf Instagram vorbei.
            </p>
            <div className="danke-actions">
              <a className="cta" href="/">
                <span className="cta-inner">
                  Zurück zur Startseite<span className="arrow"></span>
                </span>
              </a>
              <a
                className="danke-insta"
                href="https://instagram.com/nermiin.interiors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nermiin.interiors
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
