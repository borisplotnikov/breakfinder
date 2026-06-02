import { useState } from "react";

import Layout from "./Layout";
import DashboardGrid from "./DashboardGrid";
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
    <Layout sidebar={<Description />}>
      <DashboardGrid
        uploaders={[
          <DataUploader onDataUpload={setDataContent} />,
          <SchemaUploader onSchemaUpload={setSchemaContent} />,
        ]}
        actions={[
          <DemoButton setData={setDataContent} setSchema={setSchemaContent} />,
          <MatchButton
            data={dataContent}
            schema={schemaContent}
            onMatchClick={handleMatch}
          />,
        ]}
        output={<Output results={matchResults} />}
      />
    </Layout>
  );
}
