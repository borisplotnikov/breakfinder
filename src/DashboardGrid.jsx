import { useState } from "react";

import FileUploader from "./components/FileUploader";
import ActionButton from "./components/ActionButton";
// import DemoButton from "./components/DemoButton";
// import MatchButton from "./components/MatchButton";
import OutputResults from "./components/OutputResults";

export default function DashboardGrid() {
  const [dataContent, setDataContent] = useState(null);
  const [schemaContent, setSchemaContent] = useState(null);
  const [matchResults, setMatchResults] = useState([]);

  const handleDemo = () => {};
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
        <ActionButton
          label="See Demo"
          variant="secondary"
          onClick={handleDemo}
        />
        <ActionButton
          label="Match Schema"
          variant="primary"
          onClick={handleMatch}
          disabled={!dataContent || !schemaContent}
          title={
            !dataContent || !schemaContent
              ? "Please upload both data and schema files first"
              : "Find structural matches"
          }
        />
        {/* <DemoButton setData={setDataContent} setSchema={setSchemaContent} />
        <MatchButton
          data={dataContent}
          schema={schemaContent}
          onMatchClick={handleMatch}
        /> */}
      </div>

      <OutputResults results={matchResults} />
    </section>
  );
}
