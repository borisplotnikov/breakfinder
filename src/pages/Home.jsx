import DataUploader from "../components/DataUploader";
import SchemaUploader from "../components/SchemaUploader";
import TextOutput from "../components/TextOutput";

export default function Home() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column px-5 py-4 overflow-hidden bg-light">
      
      {/* Top Section: Side-by-Side Uploaders (Takes up the remaining ~30% space) */}
      <div className="row flex-grow-1 gx-4 gy-0 mb-3 align-items-center justify-content-center">
        <div className="col-md-5 d-flex justify-content-end"> 
          <div className="card w-100 shadow-sm p-3" style={{ maxWidth: "250px" }}>
            <DataUploader />
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-start">
          <div className="card w-100 shadow-sm p-3" style={{ maxWidth: "250px" }}>
            <SchemaUploader />
          </div>
        </div>
      </div>

      {/* Bottom Section: Aligned Output Box (Set to 70% of the viewport height) */}
      <div className="row justify-content-center" style={{ height: "70vh" }}>
        <div className="col-12 h-100">
          <TextOutput />
        </div>
      </div>

    </div>
  );
}