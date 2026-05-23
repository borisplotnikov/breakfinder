import { useEffect, useState } from "react";
import DataUploader from "../components/DataUploader";
import SchemaUploader from "../components/SchemaUploader";
import TextOutput from "../components/TextOutput";
import { parseReverseSchemaFiles } from "../reverseSchema";

export default function Home() {
  const [schemaFile, setSchemaFile] = useState(null);
  const [dataFile, setDataFile] = useState(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!schemaFile || !dataFile) {
      return;
    }

    let isCurrent = true;

    async function parseFiles() {
      try {
        const rows = await parseReverseSchemaFiles(schemaFile, dataFile);

        if (isCurrent) {
          setOutput(JSON.stringify(rows, null, 2));
        }
      } catch (error) {
        if (isCurrent) {
          setOutput(
            JSON.stringify(
              {
                error: error instanceof Error ? error.message : String(error),
              },
              null,
              2,
            ),
          );
        }
      }
    }

    parseFiles();

    return () => {
      isCurrent = false;
    };
  }, [schemaFile, dataFile]);

  return (
    <div className="container-fluid vh-100 d-flex flex-column px-5 py-4 overflow-hidden bg-light">
      
      {/* Top Section: Side-by-Side Uploaders (Takes up the remaining ~30% space) */}
      <div className="row flex-grow-1 gx-4 gy-0 mb-3 align-items-center justify-content-center">
        <div className="col-md-5 d-flex justify-content-end"> 
          <div className="card w-100 shadow-sm p-3" style={{ maxWidth: "250px" }}>
            <DataUploader onFileSelect={setDataFile} />
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-start">
          <div className="card w-100 shadow-sm p-3" style={{ maxWidth: "250px" }}>
            <SchemaUploader onFileSelect={setSchemaFile} />
          </div>
        </div>
      </div>

      {/* Bottom Section: Aligned Output Box (Set to 70% of the viewport height) */}
      <div className="row justify-content-center" style={{ height: "70vh" }}>
        <div className="col-12 h-100">
          <TextOutput content={output} />
        </div>
      </div>

    </div>
  );
}
