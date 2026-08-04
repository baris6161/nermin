import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nermin-interiors.de';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE_URL}/datenschutzerklaerung` },
};

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="wrap">
          <div className="legal-inner">
            <div className="eyebrow legal-eyebrow">Rechtliches</div>
            <h1 className="legal-h">Datenschutzerklärung</h1>

            <div className="legal-body">
              <section className="legal-section">
                <h2>1. Verantwortlicher</h2>
                <p>
                  Nermin El Rifaey<br />
                  Nermin Interiors<br />
                  44149 Dortmund<br />
                  E-Mail: <a href="mailto:nermin.interiors@gmail.com">nermin.interiors@gmail.com</a>
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Hosting</h2>
                <p>
                  Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco,
                  CA 94104, USA gehostet. Vercel verarbeitet beim Aufruf dieser Website automatisch
                  Server-Log-Daten (IP-Adresse, Browser-Typ, aufgerufene Seiten, Zeitstempel).
                  Grundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
                  Betrieb der Website). Vercel ist durch einen Auftragsverarbeitungsvertrag gebunden
                  und nimmt am EU-US Data Privacy Framework teil.
                </p>
              </section>

              <section className="legal-section">
                <h2>3. Kontaktformular</h2>
                <p>
                  Wenn du das Kontaktformular auf dieser Website nutzt, erheben wir die Angaben,
                  die du im Formular einträgst: Name, E-Mail-Adresse, gewünschte Leistung sowie
                  optional Raum/Projekt und eine Nachricht. Diese Daten werden ausschließlich zur
                  Bearbeitung deiner Anfrage per E-Mail an uns weitergeleitet und nicht gespeichert.
                </p>
                <p>
                  Die Übertragung erfolgt über den E-Mail-Dienst Gmail (Google LLC, USA), der durch
                  einen Auftragsverarbeitungsvertrag gebunden ist. Rechtsgrundlage ist Art. 6 Abs. 1
                  lit. b DSGVO (Vertragsanbahnung) sowie deine Einwilligung durch das Absenden des
                  Formulars (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </section>

              <section className="legal-section">
                <h2>4. Terminbuchung via Cal.eu</h2>
                <p>
                  Auf dieser Website ist ein Buchungs-Widget des Anbieters Cal.com, Inc.,
                  2261 Market Street #5257, San Francisco, CA 94114, USA (Dienst: cal.eu)
                  eingebunden. Wenn du einen Termin buchst, verarbeitet Cal.eu deine Angaben
                  (Name, E-Mail, Terminwunsch) direkt auf deren Plattform. Cal.com ist durch
                  einen Auftragsverarbeitungsvertrag gebunden und nimmt am EU-US Data Privacy
                  Framework teil. Die Datenverarbeitung erfolgt auf Servern in der EU (cal.eu).
                </p>
                <p>
                  Datenschutzerklärung von Cal.com:{' '}
                  <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">
                    cal.com/privacy
                  </a>
                </p>
              </section>

              <section className="legal-section">
                <h2>5. Externe Links</h2>
                <p>
                  Diese Website enthält einen Link zum Instagram-Profil (@nermin.interiors).
                  Beim Anklicken verlässt du unsere Website. Für die Inhalte und Datenschutzpraktiken
                  von Instagram (Meta Platforms, Inc.) sind wir nicht verantwortlich.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Cookies und Tracking</h2>
                <p>
                  Diese Website setzt keine eigenen Tracking-Cookies. Vercel Analytics erfasst
                  anonymisierte Nutzungsdaten ohne personenbezogene Rückschlüsse und ohne Cookies.
                  Das Cal.eu-Widget kann technisch notwendige Cookies setzen.
                </p>
              </section>

              <section className="legal-section">
                <h2>7. Deine Rechte</h2>
                <p>Du hast das Recht auf:</p>
                <ul>
                  <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
                  <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                  <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                </ul>
                <p>
                  Zur Ausübung deiner Rechte wende dich an:{' '}
                  <a href="mailto:nermin.interiors@gmail.com">nermin.interiors@gmail.com</a>
                </p>
              </section>

              <section className="legal-section">
                <h2>8. Beschwerderecht</h2>
                <p>
                  Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                  Zuständig für Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz
                  und Informationsfreiheit NRW:{' '}
                  <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
                    www.ldi.nrw.de
                  </a>
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
