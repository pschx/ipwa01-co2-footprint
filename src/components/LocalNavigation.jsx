const navigationItems = [
  { href: '#uebersicht', label: 'Übersicht' },
  { href: '#emissionsdaten', label: 'Emissionsdaten' },
  { href: '#methodik', label: 'Methodik' },
  { href: '#hinweise', label: 'Hinweise' },
];

function LocalNavigation() {
  return (
    <nav className="local-navigation" aria-label="Lokale Navigation">
      <div className="container">
        <div className="d-flex flex-wrap gap-2 py-3">
          {navigationItems.map((item) => (
            <a className="local-navigation-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default LocalNavigation;
