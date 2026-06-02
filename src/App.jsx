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
    <div className="main-container">
      <Header />

      <div className="description-container">
        <Description />
      </div>

      <div className="uploaders-container">
        <DataUploader onDataUpload={setDataContent} />
        <SchemaUploader onSchemaUpload={setSchemaContent} />
      </div>

      <div className="buttons-container">
        <DemoButton setData={setDataContent} setSchema={setSchemaContent} />
        <MatchButton
          data={dataContent}
          schema={schemaContent}
          onMatchClick={handleMatch}
        />
      </div>

      <div className="output-container">
        <Output results={matchResults} />
      </div>

      <Footer />
    </div>
  );
}
