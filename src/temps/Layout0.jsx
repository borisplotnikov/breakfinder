import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ sidebar, children }) {
  return (
    /* 1. Root Layout container: Forced to absolute viewport dimensions to prevent hanging */
    <div
      className="d-flex flex-column w-100 col-12 col-md-9 overflow-hidden"
      style={{
        height: "100vh" /* Fallback */,
        minHeight: "100dvh" /* Modern mobile viewport lock */,
        maxHeight: "100dvh",
      }}
    >
      <Header />

      {/* 2. Middle Body: Columns on desktop, stacks on mobile. Fills remaining vertical space. */}
      <div
        className="d-flex flex-column flex-md-row flex-grow-1"
        style={{
          minHeight: 0,
          overflow: "hidden",
        }} /* Prevents layout blowout */
      >
        {/* Sidebar Container slot */}
        <div
          className="col-12 col-md-3 bg-light border-bottom border-md-end overflow-auto"
          style={{ maxHeight: "100%" }} /* Desktop boundary constraint */
        >
          {sidebar}
        </div>

        {/* Workspace Container slot */}
        <div className="col-12 col-md-9 d-flex flex-column overflow-hidden">
          <main className="container-fluid p-0 flex-grow-1 d-flex flex-column overflow-auto">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
