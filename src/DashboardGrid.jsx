import { useState } from "react";

// import DataUploader from "./components/DataUploader";
// import SchemaUploader from "./components/SchemaUploader";
import FileUploader from "./components/FileUploader";
import DemoButton from "./components/DemoButton";
import MatchButton from "./components/MatchButton";
import OutputResults from "./components/OutputResults";

export default function DashboardGrid() {
  const [dataContent, setDataContent] = useState(null);
  const [schemaContent, setSchemaContent] = useState(null);
  const [matchResults, setMatchResults] = useState([]);

  const handleMatch = () => {
    if (!dataContent || !schemaContent) {
      alert("Please upload both files first!");
      return;
    }
  };

  return (
    <section className="col-12 col-md-8 d-flex flex-column gap-3">
      <div className="d-flex gap-3">
        <FileUploader label="Upload Data File" onUpload={setDataContent} />
        <FileUploader
          label="Upload Schema File"
          onSchemaUpload={setSchemaContent}
        />
      </div>

      <div className="d-flex gap-3">
        <DemoButton setData={setDataContent} setSchema={setSchemaContent} />
        <MatchButton
          data={dataContent}
          schema={schemaContent}
          onMatchClick={handleMatch}
        />
      </div>

      <OutputResults results={matchResults} />
    </section>
  );
}
