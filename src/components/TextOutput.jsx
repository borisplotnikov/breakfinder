export default function TextOutput({ content }) {
  // Example fallback text if no content is provided
  const defaultText = content || 
`[INFO] System initialized successfully.
[INFO] Connecting to BreakFinder core engines...
[SUCCESS] Connected to cluster-us-east-01.
[WARN] Latency spike detected: 142ms. Re-routing traffic...
[INFO] Data stream synchronized.
[INFO] Ready for file analysis. Please upload a dataset above.
[INFO] Idle...
[INFO] Waiting for user input...`;

  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        
        {/* CHANGED: Swapped col-md-10 to col-md-6 to occupy exactly 50% width on medium screens and up */}
        <div className="col-12 col-md-6">
          
          <div className="card shadow-sm border-0 bg-dark text-light">
            {/* Console Header / Tab Bar */}
            <div className="card-header bg-black bg-opacity-25 border-bottom border-secondary d-flex align-items-center justify-content-between py-2 px-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-secondary p-1 rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
                <span className="small text-secondary fw-semibold font-monospace text-uppercase tracking-wider">
                  Console Output
                </span>
              </div>
              <button 
                className="btn btn-sm btn-link text-secondary p-0 text-decoration-none small hover-light"
                onClick={() => navigator.clipboard.writeText(defaultText)}
                title="Copy to clipboard"
              >
                <i className="bi bi-clipboard me-1"></i> Copy
              </button>
            </div>

            {/* Text Output Window */}
            <div className="card-body p-0">
              <pre 
                className="font-monospace m-0 p-3 bg-black bg-opacity-50 text-success overflow-auto"
                style={{ 
                  height: "280px",       /* Height calibrated for approx 12 lines of text */
                  fontSize: "0.875rem",   /* Standard readable console text sizing */
                  lineHeight: "1.6",
                  whiteSpace: "pre-wrap", /* Wraps long lines nicely instead of breaking layout */
                  wordBreak: "break-all"
                }}
              >
                {defaultText}
              </pre>
            </div>

            {/* Optional Footer/Status line */}
            <div className="card-footer bg-transparent border-top border-secondary border-opacity-25 py-2 px-3 d-flex justify-content-between align-items-center">
              <span className="small text-muted font-monospace">Lines: {defaultText.split('\n').length}</span>
              <span className="small text-success-500 font-monospace d-flex align-items-center gap-1">
                <span className="spinner-grow spinner-grow-sm text-success" role="status" style={{ width: '0.5rem', height: '0.5rem' }}></span>
                Live Sync
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}