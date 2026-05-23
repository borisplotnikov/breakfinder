import DataUploader from "../components/DataUploader";
import SchemaUploader from "../components/SchemaUploader";
import TextOutput from "../components/TextOutput";

export default function Home() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-4 overflow-hidden bg-light">
      
      {/* Top Section: Side-by-Side Uploaders */}
      <div className="row flex-grow-1 g-4 mb-4 align-items-stretch">
        <div className="col-md-6 d-flex">
          <div className="card w-100 shadow-sm p-3">
            <DataUploader />
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="card w-100 shadow-sm p-3">
            <SchemaUploader />
          </div>
        </div>
      </div>

      {/* Bottom Section: Aligned Output Box */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm p-3 text-dark bg-white" style={{ minHeight: "30vh" }}>
            <TextOutput />
          </div>
        </div>
      </div>

    </div>
  );
}