import { useState } from 'react';
import EmissionsTable from './components/EmissionsTable.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import LocalNavigation from './components/LocalNavigation.jsx';

function App() {
  const [navigationPosition, setNavigationPosition] = useState('left');
  const isNavigationRight = navigationPosition === 'right';

  return (
    <div className="page-shell">
      <Header />

      <main>
        <div className="container-xxl py-4 py-lg-5">
          <div className={`row g-4 g-xl-5 ${isNavigationRight ? 'flex-md-row-reverse' : ''}`}>
            <aside className="col-md-3 col-xl-2">
              <LocalNavigation
                navigationPosition={navigationPosition}
                onNavigationPositionChange={setNavigationPosition}
              />
            </aside>

            <div className="col-md-9 col-xl-10">
              <section className="hero-section content-panel" id="uebersicht">
                <div className="row align-items-center g-4">
                  <div className="col-xl-7">
                    <p className="section-kicker mb-2">IPWA01-01 Fallstudie</p>
                    <h1 className="display-5 fw-semibold mb-3">
                      CO2-Transparenz für verantwortungsvolle Entscheidungen
                    </h1>
                    <p className="lead text-secondary mb-4">
                      Die Webanwendung bereitet fiktive Emissionsdaten verständlich auf und
                      unterstützt Vergleiche durch eine übersichtliche Tabellenansicht mit
                      Filterung und Sortierung.
                    </p>
                    <a className="btn btn-success btn-lg" href="#emissionsdaten">
                      Emissionsdaten ansehen
                    </a>
                  </div>
                  <div className="col-xl-5">
                    <div className="info-panel">
                      <h2 className="h5 mb-3">Ziel der Anwendung</h2>
                      <p className="mb-0">
                        Als Non-Profit-Angebot soll die Seite CO2-Daten nachvollziehbar,
                        zugänglich und responsive darstellen. Filterung und Sortierung helfen
                        dabei, die fiktiven Werte gezielt zu vergleichen.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="content-section content-panel" id="emissionsdaten">
                <div className="emissions-section-intro mb-4">
                  <p className="section-kicker mb-2">Datenbasis</p>
                  <h2 className="h3 fw-semibold">Fiktive Emissionsdaten</h2>
                  <p className="text-secondary mb-0">
                    Die Tabelle bildet den ersten fachlichen Kern der Anwendung. Einfache
                    Filter- und Sortiermöglichkeiten erleichtern den Vergleich der fiktiven
                    Emissionswerte.
                  </p>
                </div>
                <EmissionsTable />
              </section>

              <section className="content-section content-panel bg-white" id="methodik">
                <div className="row g-4">
                  <div className="col-xl-4">
                    <p className="section-kicker mb-2">Methodik</p>
                    <h2 className="h3 fw-semibold">Nachvollziehbare Einordnung</h2>
                  </div>
                  <div className="col-xl-8">
                    <p className="text-secondary mb-0">
                      Die dargestellten Werte sind Beispieldaten für die Fallstudie. Eine spätere
                      Ausbaustufe kann Berechnungsgrundlagen, Datenquellen und Vergleichskriterien
                      detaillierter abbilden.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-panel" id="hinweise">
                <div className="row g-4">
                  <div className="col-xl-4">
                    <p className="section-kicker mb-2">Hinweise</p>
                    <h2 className="h3 fw-semibold">Einordnung der Inhalte</h2>
                  </div>
                  <div className="col-xl-8">
                    <p className="text-secondary mb-0">
                      Alle Inhalte dienen ausschließlich der Umsetzung der Studienaufgabe. Die
                      Emissionswerte sind frei erfunden und stellen keine realen Unternehmensdaten
                      dar.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
