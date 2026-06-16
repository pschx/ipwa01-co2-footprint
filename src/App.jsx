import EmissionsTable from './components/EmissionsTable.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import LocalNavigation from './components/LocalNavigation.jsx';

function App() {
  return (
    <div className="page-shell">
      <Header />
      <LocalNavigation />

      <main>
        <section className="hero-section" id="uebersicht">
          <div className="container py-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <p className="section-kicker mb-2">IPWA01-01 Fallstudie</p>
                <h1 className="display-5 fw-semibold mb-3">
                  CO2-Transparenz für verantwortungsvolle Entscheidungen
                </h1>
                <p className="lead text-secondary mb-4">
                  Die Webanwendung bereitet fiktive Emissionsdaten verständlich auf und
                  schafft eine Grundlage für Vergleiche, Einordnung und spätere Filterung.
                </p>
                <a className="btn btn-success btn-lg" href="#emissionsdaten">
                  Emissionsdaten ansehen
                </a>
              </div>
              <div className="col-lg-5">
                <div className="info-panel">
                  <h2 className="h5 mb-3">Ziel der Anwendung</h2>
                  <p className="mb-0">
                    Als Non-Profit-Angebot soll die Seite CO2-Daten nachvollziehbar,
                    zugänglich und responsive darstellen. Die fachlichen Funktionen werden
                    schrittweise ergänzt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="emissionsdaten">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <p className="section-kicker mb-2">Datenbasis</p>
                <h2 className="h3 fw-semibold">Fiktive Emissionsdaten</h2>
                <p className="text-secondary mb-0">
                  Die Tabelle bildet den ersten fachlichen Kern der Anwendung. Sortierung,
                  Filterung und weitere Interaktionen folgen in späteren Umsetzungsschritten.
                </p>
              </div>
              <div className="col-lg-8">
                <EmissionsTable />
              </div>
            </div>
          </div>
        </section>

        <section className="content-section bg-white" id="methodik">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <p className="section-kicker mb-2">Methodik</p>
                <h2 className="h3 fw-semibold">Nachvollziehbare Einordnung</h2>
              </div>
              <div className="col-lg-8">
                <p className="text-secondary mb-0">
                  Die dargestellten Werte sind Beispieldaten für die Fallstudie. Eine spätere
                  Ausbaustufe kann Berechnungsgrundlagen, Datenquellen und Vergleichskriterien
                  detaillierter abbilden.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="hinweise">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4">
                <p className="section-kicker mb-2">Hinweise</p>
                <h2 className="h3 fw-semibold">Einordnung der Inhalte</h2>
              </div>
              <div className="col-lg-8">
                <p className="text-secondary mb-0">
                  Alle Inhalte dienen ausschließlich der Umsetzung der Studienaufgabe. Die
                  Emissionswerte sind frei erfunden und stellen keine realen Unternehmensdaten
                  dar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
