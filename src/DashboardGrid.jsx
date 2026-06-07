import DataUploader from "./components/DataUploader";
import SchemaUploader from "./components/SchemaUploader";
import DemoButton from "./components/DemoButton";
import MatchButton from "./components/MatchButton";
import OutputResults from "./components/OutputResults";

export default function DashboardGrid() {
  return (
    <section className="col-12 col-md-8 d-flex flex-column gap-3">
      <div className="d-flex gap-3">
        <DataUploader />
        <SchemaUploader />
      </div>

      <div className="d-flex gap-3">
        <DemoButton />
        <MatchButton />
      </div>

      <OutputResults />
    </section>
  );
}
