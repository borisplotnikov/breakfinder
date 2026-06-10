export default function OutputResults({ results }) {
  // Dummy results, replace with actual output data.
  results = [
    "[MATCH] Target schema found at line 14: 'user_id'",
    "[MATCH] Target schema found at line 45: 'user_id'",
    "[MATCH] Target schema found at line 82: 'user_id'",
  ];

  return (
    <div className="card h-100">
      <div className="card-header">
        <h5 className="mb-0 text-center">
          Results
          <span className="badge text-bg-success ms-2">
            {results.length} matches
          </span>
        </h5>
      </div>

      <div
        className="card-body p-0"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        <ul className="list-group list-group-flush">
          {results.map((result, index) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center"
            >
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
