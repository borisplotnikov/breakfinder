import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Description from "./components/Description";
import DataUploader from "./components/DataUploader";
import SchemaUploader from "./components/SchemaUploader";
import Output from "./components/Output";
import DemoButton from "./components/DemoButton";
import MatchButton from "./components/MatchButton";

export default function App() {
  const [dataContent, setDataContent] = useState(null);
  const [schemaContent, setSchemaContent] = useState(null);

  const [matchResults, setMatchResults] = useState([]);

  const handleMatch = () => {
    if (!dataContent || !schemaContent) {
      alert("Please upload both files first!");
      return;
    }

    // Dummy data just to test the connection
    const mockResults = [
      { line: 12, match: "Schema pattern found in object 'user'" },
      { line: 45, match: "Schema pattern found in object 'metadata'" },
    ];

    setMatchResults(mockResults);
  };

  return (
    /* Top-level wrapper: stacks columns on vertical/mobile screens, places columns side-by-side on horizontal/desktop screens */
    <div className="d-flex flex-column flex-md-row vh-100 w-100">
      {/* Description Window: Spans full width on mobile, maps to left column (3/12 width) on desktop */}
      <div className="col-12 col-md-3 bg-light border-bottom border-md-end overflow-auto h-auto h-md-100">
        <Description />
      </div>

      {/* Workspace Area: Spans remaining width (9/12) on desktop, groups header, controls, output, and footer together */}
      <div className="col-12 col-md-9 d-flex flex-column h-md-100 overflow-auto">
        <Header />

        {/* Dynamic content grid body */}
        <main className="container-fluid py-3 flex-grow-1 d-flex flex-column gap-3">
          {/* Row 1: File uploaders side-by-side */}
          <div className="row g-3">
            <div className="col-6">
              <DataUploader onDataUpload={setDataContent} />
            </div>
            <div className="col-6">
              <SchemaUploader onSchemaUpload={setSchemaContent} />
            </div>
          </div>

          {/* Row 2: Control buttons side-by-side */}
          <div className="row g-3">
            <div className="col-6">
              <DemoButton
                setData={setDataContent}
                setSchema={setSchemaContent}
              />
            </div>
            <div className="col-6">
              <MatchButton
                data={dataContent}
                schema={schemaContent}
                onMatchClick={handleMatch}
              />
            </div>
          </div>

          {/* Row 3: Full-width text output screen */}
          <div className="row flex-grow-1">
            <div className="col-12">
              <Output results={matchResults} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
