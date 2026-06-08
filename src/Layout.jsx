import Header from "./components/Header";
import Footer from "./components/Footer";
import Description from "./components/Description";
import DashboardGrid from "./DashboardGrid";

export default function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main className="container-fluid flex-grow-1">
        <div className="row g-3 mb-3">
          <Description />
          <DashboardGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
