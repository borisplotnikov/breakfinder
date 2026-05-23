import DataUploader from "../components/DataUploader";
import SchemaUploader from "../components/SchemaUploader";
import TextOutput from "../components/TextOutput";

export default function Home() {
  return (
    <div className="page">
      <DataUploader />
      <SchemaUploader />
      <TextOutput />
    </div>
  );
}

