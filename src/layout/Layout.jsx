import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}