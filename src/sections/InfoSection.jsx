import ProductText from "../components/ProductText";
import CardGrid from "../components/CardGrid";

export default function InfoSection() {
  return (
    <section className="col-12 col-md-4 d-flex flex-column info-section">
      <div
        className="card h-100 d-flex flex-column"
        style={{ maxHeight: "calc(100vh - 160px)" }}
      >
        <ProductText />
        <div classname="flex-grow-1 overflow-y-auto" style={{ minHeight: "0" }}>
          <CardGrid />
        </div>
      </div>
    </section>
  );
}
