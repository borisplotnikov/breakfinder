import Header from "../components/Header";
import Footer from "../components/Footer";
import DescriptionSection from "../sections/DescriptionSection";
import TeamSection from "../sections/TeamSection";
import AppSection from "../sections/AppSection";

export default function Layout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main className="container-fluid flex-grow-1 d-flex flex-column mt-3">
        <div className="row flex-grow-1 d-flex g-3 mb-3">
          <DescriptionSection />
          <AppSection />
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
