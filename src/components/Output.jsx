export default function Output({ matchResults = [] }) {
  return (
    <div className="card-body">
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0 text-center">
            Results
            <span className="badge text-bg-success ms-2">
              {matchResults.length} matches
            </span>
          </h5>
        </div>

        <div
          className="card-body p-0"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {matchResults.length === 0 ? (
            <div className="text-center text-muted py-4">No matches found.</div>
          ) : (
            <ul className="list-group list-group-flush">
              {matchResults.map((result, index) => (
                <li key={index} className="list-group-item">
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>

                    <div className="flex-grow-1">
                      {Object.entries(result).map(([field, value]) => (
                        <div key={field}>
                          <strong>{field}:</strong> {String(value)}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
