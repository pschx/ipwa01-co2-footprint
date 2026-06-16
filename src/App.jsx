function App() {
  return (
    <main className="page-shell">
      <section className="bg-white border-bottom">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <p className="text-uppercase text-primary fw-semibold small mb-2">
                IPWA01-01 Fallstudie
              </p>
              <h1 className="display-5 fw-semibold mb-3">CO2-Footprint Webanwendung</h1>
              <p className="lead text-secondary mb-0">
                Technisches Grundsetup fuer eine responsive React-Anwendung mit Vite und
                Bootstrap.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="status-panel p-4">
                <h2 className="h5 mb-3">Projektstatus</h2>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>React</span>
                    <span className="badge text-bg-success">bereit</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Vite</span>
                    <span className="badge text-bg-success">bereit</span>
                  </li>
                  <li className="d-flex justify-content-between py-2">
                    <span>Bootstrap</span>
                    <span className="badge text-bg-success">bereit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
