'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ComingSoonClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.style.background = '#1a1714';
    document.body.style.background = '#1a1714';
    return () => {
      document.documentElement.style.background = '';
      document.body.style.background = '';
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password }),
      });
      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        setError('Zugangsdaten ungültig.');
        setLoading(false);
      }
    } catch {
      setError('Verbindungsfehler. Bitte erneut versuchen.');
      setLoading(false);
    }
  }

  return (
    <div className="cs">
      <div className="grain" />

      <header className="cs-header">
        <div className="cs-logo">
          Nermin<span className="cs-logo-sub">interiors</span>
        </div>
        <button className="cs-admin-btn" onClick={() => setModalOpen(true)}>
          Admin
        </button>
      </header>

      <div className="cs-body">
        <div className="cs-left">
          <div className="cs-tag eyebrow">Interior Design Studio</div>
          <h1 className="cs-h">
            Bald<br />
            <em>für dich da.</em>
          </h1>
          <p className="cs-lede">
            Minimalistisches Interior Design für Menschen,
            die Klarheit und Qualität schätzen.
          </p>
          <a
            className="cs-insta"
            href="https://instagram.com/nermiin.interiors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
            </svg>
            @nermiin.interiors
          </a>
        </div>

        <div className="cs-images">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cs-img-main" src="/images/arbeitsbereich.jpg" alt="" />
        </div>
      </div>

      <footer className="cs-footer">
        <p className="cs-copy">&copy; {new Date().getFullYear()} Nermin El Rifaey</p>
      </footer>

      {modalOpen && (
        <div className="cs-overlay" onClick={() => setModalOpen(false)}>
          <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cs-modal-close" onClick={() => setModalOpen(false)} aria-label="Schließen">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            </button>
            <div className="eyebrow cs-modal-eyebrow">Preview</div>
            <h2 className="cs-modal-h">Zugang</h2>
            <form className="cs-modal-form" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Name"
                autoComplete="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Passwort"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="cs-error">{error}</p>}
              <button className="cs-btn" type="submit" disabled={loading}>
                {loading ? '...' : 'Einloggen'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
