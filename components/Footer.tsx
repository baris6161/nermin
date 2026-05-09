export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-mark">
          <span className="dot"></span>nermin&nbsp;<em>interiors</em>
        </div>
        <div className="footer-meta">
          <a href="https://instagram.com/nermin.interiors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
            </svg>
            Instagram
          </a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutzerklaerung">Datenschutz</a>
          <span>© {new Date().getFullYear()} Nermin El&nbsp;Rifaey</span>
        </div>
      </div>
    </footer>
  );
}
