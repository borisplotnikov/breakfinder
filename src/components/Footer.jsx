export default function Footer() {
  return (
    <footer className="bg-dark text-center py-4 mt-auto">
      <div className="container">
        {/* Row 1: App Branding & Year */}
        <div className="row mb-2">
          <div className="col">
            <h5 className="fw-bold text-white mb-0">
              BreakFinder{" "}
              <span className="fw-light text-white-50">&copy; 2026</span>
            </h5>
          </div>
        </div>

        {/* Row 2: Creator Credits */}
        <div className="row">
          <div className="col">
            <p className="text-secondary small mb-0">
              Created by <span className="text-light">Shawn Haney,</span>{" "}
              <span className="text-light">Anup Manandhar,</span>{" "}
              <span className="text-light">Boris Plotnikov.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
