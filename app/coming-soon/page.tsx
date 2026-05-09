'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

export default function ComingSoon() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
          <span className="cs-dot" />
          nermin<span className="cs-logo-sub">interiors</span>
        </div>
      </header>

      <main className="cs-main">
        <div className="cs-tag eyebrow">Interior Design Studio</div>

        <h1 className="cs-h">
          Bald<br />
          <em>für dich da.</em>
        </h1>

        <p className="cs-lede">
          Minimalistisches Interior Design für Menschen,<br />
          die Klarheit und Qualität schätzen.
        </p>

        <a
          className="cs-insta"
          href="https://instagram.com/nermiin.interiors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
          </svg>
          @nermiin.interiors
        </a>
      </main>

      <footer className="cs-footer">
        <form className="cs-form" onSubmit={handleLogin}>
          <div className="cs-fields">
            <div className="cs-field">
              <input
                type="text"
                placeholder="Name"
                autoComplete="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="cs-field">
              <input
                type="password"
                placeholder="Passwort"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="cs-btn" type="submit" disabled={loading}>
              {loading ? '…' : 'Einloggen'}
            </button>
          </div>
          {error && <p className="cs-error">{error}</p>}
        </form>
        <p className="cs-copy">© {new Date().getFullYear()} Nermin El Rifaey</p>
      </footer>
    </div>
  );
}
