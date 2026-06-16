import Header from "../components/Header";
import Footer from "../components/Footer";
import Description from "../sections/Description";
import DashboardGrid from "../sections/DashboardGrid";

export default function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main className="container-fluid flex-grow-1 mt-3">
        <div className="row g-3 mb-3">
          <Description />
          <DashboardGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
