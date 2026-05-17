'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.field input, .field textarea, .field select').forEach((input) => {
      const sync = () => input.parentElement?.classList.toggle('has-value', !!(input as HTMLInputElement).value);
      input.addEventListener('input', sync);
      input.addEventListener('change', sync);
      sync();
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push('/danke');
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || 'Ein Fehler ist aufgetreten.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Netzwerkfehler. Bitte versuche es erneut.');
      setStatus('error');
    }
  }

  return (
    <section className="contact" id="kontakt">
      <div className="wrap">
        <div className="contact-grid">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'var(--terracotta-soft)' }}>
              07 — Kontakt
            </span>
            <h2 className="contact-h" data-reveal-words style={{ marginTop: '24px' }}>
              <span>Alles </span>
              <span>aus</span>
              <br />
              <span>
                <em>einer</em>{' '}
              </span>
              <span>Hand.</span>
            </h2>
            <p className="contact-lede">
              Du möchtest deinen Raum stilvoller, harmonischer und funktionaler gestalten? Schreib
              mir, in der Regel antworte ich innerhalb von 48 Stunden.
            </p>

            <div className="contact-direct">
              <a className="contact-tile" href="tel:+491622017106">
                <span className="contact-tile-icn" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                  </svg>
                </span>
                <span className="contact-tile-body">
                  <span className="contact-tile-label">Telefon</span>
                  <span className="contact-tile-val">+49 162 2017106</span>
                </span>
                <span className="contact-tile-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-tile"
                href="https://instagram.com/nermiin.interiors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-tile-icn" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="contact-tile-body">
                  <span className="contact-tile-label">Instagram</span>
                  <span className="contact-tile-val">@nermiin.interiors</span>
                </span>
                <span className="contact-tile-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <form className="form-card reveal" onSubmit={handleSubmit}>
            <div className="form-card-head">
              <span className="form-card-eyebrow">Anfrage</span>
              <span className="form-card-meta">Antwort in ~48 h</span>
            </div>
            <div className="form">
                <div className="form-row">
                  <div className="field">
                    <input id="f-name" name="name" type="text" placeholder=" " required />
                    <label htmlFor="f-name">Name</label>
                  </div>
                  <div className="field">
                    <input id="f-email" name="email" type="email" placeholder=" " required />
                    <label htmlFor="f-email">E-Mail</label>
                  </div>
                </div>
                <div className="field">
                  <select id="f-svc" name="service" required>
                    <option value=""></option>
                    <option>Design Call · 90 €</option>
                    <option>E-Design · ab 690 € / Raum</option>
                    <option>Curated Shopping · ab 290 € / Raum</option>
                    <option>Noch unsicher</option>
                  </select>
                  <label htmlFor="f-svc">Leistung</label>
                </div>
                <div className="field">
                  <input id="f-room" name="room" type="text" placeholder=" " />
                  <label htmlFor="f-room">Raum / Projekt</label>
                </div>
                <div className="field">
                  <textarea id="f-msg" name="message" rows={3} placeholder=" "></textarea>
                  <label htmlFor="f-msg">Nachricht</label>
                </div>
                {status === 'error' && <p className="form-error">{errorMsg}</p>}
                <div className="form-foot">
                  <p className="form-fine">
                    Mit dem Absenden stimmst du zu, dass deine Angaben zur Bearbeitung der Anfrage
                    verwendet werden.
                  </p>
                  <button className="cta" type="submit" disabled={status === 'sending'}>
                    <span className="cta-inner">
                      {status === 'sending' ? 'Wird gesendet…' : 'Anfrage senden'}
                      <span className="arrow"></span>
                    </span>
                  </button>
                </div>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}
