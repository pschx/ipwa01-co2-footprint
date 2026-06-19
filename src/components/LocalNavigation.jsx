const navigationItems = [
  { href: '#uebersicht', label: 'Übersicht' },
  { href: '#emissionsdaten', label: 'Emissionsdaten' },
  { href: '#methodik', label: 'Methodik' },
  { href: '#hinweise', label: 'Hinweise' },
];

function LocalNavigation({ navigationPosition, onNavigationPositionChange }) {
  return (
    <nav className="local-navigation" aria-label="Lokale Navigation">
      <div className="local-navigation-desktop d-none d-md-block">
        <h2 className="h6 local-navigation-title">Auf dieser Seite</h2>

        <ul className="local-navigation-list">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a className="local-navigation-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navigation-position-control" aria-label="Position der lokalen Navigation">
          <p className="form-label mb-2">Position</p>
          <div
            className="btn-group btn-group-sm w-100"
            role="group"
            aria-label="Position des lokalen Menüs"
          >
            <button
              className={`btn ${navigationPosition === 'left' ? 'btn-success' : 'btn-outline-success'}`}
              type="button"
              onClick={() => onNavigationPositionChange('left')}
            >
              Menü links
            </button>
            <button
              className={`btn ${navigationPosition === 'right' ? 'btn-success' : 'btn-outline-success'}`}
              type="button"
              onClick={() => onNavigationPositionChange('right')}
            >
              Menü rechts
            </button>
          </div>
        </div>
      </div>

      <details className="local-navigation-mobile d-md-none">
        <summary className="local-navigation-summary">Auf dieser Seite</summary>
        <ul className="local-navigation-list mt-2">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a className="local-navigation-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}

export default LocalNavigation;
