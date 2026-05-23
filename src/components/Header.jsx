export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm border-bottom border-secondary border-opacity-25 py-3">
      <div className="container">
        
        {/* Brand Link (Logo + Title) */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          
          {/* Logo Placeholder */}
          <div 
            className="d-flex align-items-center justify-content-center bg-primary text-white rounded-3 shadow-sm"
            style={{ width: "40px", height: "40px" }}
          >
            {/* Replace this icon with your actual <img> tag when ready */}
            <i className="bi bi-lightning-charge-fill fs-5"></i>
          </div>

          {/* Application Title */}
          <span className="fw-bold tracking-tight text-white mb-0 h4 ms-1">
            BreakFinder
          </span>
        </a>

        {/* Right side placeholder - clean layout balance */}
        <div className="d-flex align-items-center">
          <span className="badge bg-secondary bg-opacity-25 text-secondary border border-secondary border-opacity-50 font-monospace small px-2 py-1">
            v1.0.0
          </span>
        </div>

      </div>
    </nav>
  );
}