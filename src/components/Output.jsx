export default function Output({ results }) {
  return (
    <div className="output-window">
      <h3>Matching Results</h3>

      <div className="output-display">
        {results.length === 0 ? (
          <p className="no-results">
            No matches computed yet. Upload files and click "Run Structural
            Matching".
          </p>
        ) : (
          <ul className="results-list">
            {results.map((item, index) => (
              <li key={index} className="result-item">
                <strong>Line {item.line}:</strong> {item.match}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
