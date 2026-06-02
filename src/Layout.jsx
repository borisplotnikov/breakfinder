import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MainLayout({ sidebar, children }) {
  return (
    <div className="d-flex flex-column vh-100 w-100 overflow-hidden-md">
      <Header />

      <div className="d-flex flex-column flex-md-row flex-grow-1 overflow-auto h-md-100">
        {/* Sidebar Container slot */}
        <div className="col-12 col-md-3 bg-light border-bottom border-md-end overflow-auto h-auto h-md-100">
          {sidebar}
        </div>

        {/* Workspace Container slot */}
        <div className="col-12 col-md-9 d-flex flex-column h-md-100 overflow-auto">
          <main className="container-fluid py-3 flex-grow-1 d-flex flex-column gap-3">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
