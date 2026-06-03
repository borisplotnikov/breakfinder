import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MainLayout({ sidebar, children }) {
  return (
    /* 1. Root Layout container: spans full height/width of the locked viewport */
    <div className="d-flex flex-column h-100 w-100">
      <Header />
      {/* 2. Middle Body: Columns on desktop, stacks on mobile. Fills remaining
      vertical space. */}
      <div
        className="d-flex flex-column flex-md-row flex-grow-1 min-hidden-viewport-space"
        style={{ minHeight: 0 }}
      >
        {/* Sidebar Container slot */}
        <div className="col-12 col-md-3 bg-light border-bottom border-md-end overflow-auto h-md-100">
          {sidebar}
        </div>

        {/* Workspace Container slot */}
        <div className="col-12 col-md-9 d-flex flex-column h-md-100 overflow-hidden">
          <main className="container-fluid py-3 flex-grow-1 d-flex flex-column gap-3 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
