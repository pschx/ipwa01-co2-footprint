function Header() {
  return (
    <header className="site-header border-bottom">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#uebersicht">
            <span className="brand-mark" aria-hidden="true">
              C
            </span>
            <span className="fw-semibold">Climate Transparency</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#globalNavigation"
            aria-controls="globalNavigation"
            aria-expanded="false"
            aria-label="Navigation umschalten"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="globalNavigation">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#uebersicht">
                  Start
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#emissionsdaten">
                  Daten
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#methodik">
                  Methodik
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hinweise">
                  Hinweise
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
