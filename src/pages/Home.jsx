import DataUploader from "../components/DataUploader";
import SchemaUploader from "../components/SchemaUploader";

export default function Home() {
  return (
    <div className="page">
      <h1>BreakFinder</h1>
      <DataUploader />
      <SchemaUploader />
    </div>
  );
}
