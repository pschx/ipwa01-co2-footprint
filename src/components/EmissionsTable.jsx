import { emissions } from '../data/emissions.js';

function EmissionsTable() {
  return (
    <div className="table-responsive emissions-table-wrapper">
      <table className="table table-hover align-middle mb-0">
        <caption className="px-3 pb-3 text-secondary">
          Fiktive CO2-Emissionsdaten ausgewählter Organisationen und Sektoren.
        </caption>
        <thead>
          <tr>
            <th scope="col">Organisation</th>
            <th scope="col">Sektor</th>
            <th scope="col">Land</th>
            <th scope="col" className="text-end">
              Emissionen
            </th>
            <th scope="col">Bezugsjahr</th>
            <th scope="col">Trend</th>
          </tr>
        </thead>
        <tbody>
          {emissions.map((entry) => (
            <tr key={entry.id}>
              <td className="fw-semibold">{entry.organisation}</td>
              <td>{entry.sector}</td>
              <td>{entry.country}</td>
              <td className="text-end">{entry.emissionsTons.toLocaleString('de-DE')} t</td>
              <td>{entry.year}</td>
              <td>
                <span className={`trend-badge trend-${entry.trendType}`}>{entry.trend}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmissionsTable;
