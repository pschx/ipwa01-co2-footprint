import { useMemo, useState } from 'react';
import { emissions } from '../data/emissions.js';

const sortOptions = [
  { value: 'organisation', label: 'Unternehmen' },
  { value: 'country', label: 'Land' },
  { value: 'emissionsTons', label: 'Emissionswert' },
];

const directionOptions = [
  { value: 'asc', label: 'Aufsteigend' },
  { value: 'desc', label: 'Absteigend' },
];

function EmissionsTable() {
  const [organisationFilter, setOrganisationFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [sortField, setSortField] = useState('organisation');
  const [sortDirection, setSortDirection] = useState('asc');

  const visibleEmissions = useMemo(() => {
    const organisationQuery = organisationFilter.trim().toLocaleLowerCase('de-DE');
    const countryQuery = countryFilter.trim().toLocaleLowerCase('de-DE');

    return [...emissions]
      .filter((entry) => {
        const organisation = entry.organisation.toLocaleLowerCase('de-DE');
        const country = entry.country.toLocaleLowerCase('de-DE');

        return organisation.includes(organisationQuery) && country.includes(countryQuery);
      })
      .sort((firstEntry, secondEntry) => {
        const firstValue = firstEntry[sortField];
        const secondValue = secondEntry[sortField];
        const directionFactor = sortDirection === 'asc' ? 1 : -1;

        if (typeof firstValue === 'number' && typeof secondValue === 'number') {
          return (firstValue - secondValue) * directionFactor;
        }

        return (
          String(firstValue).localeCompare(String(secondValue), 'de-DE', {
            sensitivity: 'base',
          }) * directionFactor
        );
      });
  }, [countryFilter, organisationFilter, sortDirection, sortField]);

  const hasActiveFilters =
    organisationFilter.trim().length > 0 || countryFilter.trim().length > 0;

  function resetFilters() {
    setOrganisationFilter('');
    setCountryFilter('');
    setSortField('organisation');
    setSortDirection('asc');
  }

  return (
    <div className="emissions-table-wrapper">
      <div className="table-controls border-bottom p-3 p-md-4">
        <div className="row g-3 align-items-end">
          <div className="col-md-6 col-lg-4">
            <label className="form-label" htmlFor="organisationFilter">
              Unternehmen
            </label>
            <input
              className="form-control"
              id="organisationFilter"
              type="search"
              value={organisationFilter}
              onChange={(event) => setOrganisationFilter(event.target.value)}
              placeholder="z. B. Stadtwerke"
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <label className="form-label" htmlFor="countryFilter">
              Land
            </label>
            <input
              className="form-control"
              id="countryFilter"
              type="search"
              value={countryFilter}
              onChange={(event) => setCountryFilter(event.target.value)}
              placeholder="z. B. Deutschland"
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <label className="form-label" htmlFor="sortField">
              Sortieren nach
            </label>
            <select
              className="form-select"
              id="sortField"
              value={sortField}
              onChange={(event) => setSortField(event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 col-lg-4">
            <p className="form-label mb-2" id="sortDirectionLabel">
              Richtung
            </p>
            <div className="btn-group w-100" role="group" aria-labelledby="sortDirectionLabel">
              {directionOptions.map((option) => (
                <button
                  className={`btn ${sortDirection === option.value ? 'btn-success' : 'btn-outline-success'}`}
                  key={option.value}
                  type="button"
                  onClick={() => setSortDirection(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-6 col-lg-auto ms-lg-auto">
            <button
              className="btn btn-outline-secondary w-100"
              type="button"
              onClick={resetFilters}
              disabled={!hasActiveFilters && sortField === 'organisation' && sortDirection === 'asc'}
            >
              Zurücksetzen
            </button>
          </div>
        </div>

        <p className="table-result-count mb-0 mt-3">
          {visibleEmissions.length} von {emissions.length} Datensätzen werden angezeigt.
        </p>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 emissions-table">
          <caption className="px-3 pb-3 text-secondary">
            Fiktive CO2-Emissionsdaten ausgewählter Unternehmen, Organisationen und Sektoren.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="text-nowrap">
                Unternehmen
              </th>
              <th scope="col" className="text-nowrap">
                Sektor
              </th>
              <th scope="col" className="text-nowrap">
                Land
              </th>
              <th scope="col" className="text-end text-nowrap">
                Emissionen
              </th>
              <th scope="col" className="text-nowrap">
                Bezugsjahr
              </th>
              <th scope="col" className="text-nowrap">
                Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleEmissions.map((entry) => (
              <tr key={entry.id}>
                <td className="fw-semibold text-nowrap">{entry.organisation}</td>
                <td className="text-nowrap">{entry.sector}</td>
                <td className="text-nowrap">{entry.country}</td>
                <td className="text-end text-nowrap">
                  {entry.emissionsTons.toLocaleString('de-DE')} t
                </td>
                <td className="text-nowrap">{entry.year}</td>
                <td>
                  <span className={`trend-badge trend-${entry.trendType}`}>{entry.trend}</span>
                </td>
              </tr>
            ))}
            {visibleEmissions.length === 0 && (
              <tr>
                <td className="text-center text-secondary py-4" colSpan="6">
                  Keine Datensätze für die aktuelle Auswahl gefunden.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmissionsTable;
