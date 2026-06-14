import { useState } from "react";

import Layout from "./Layout";
import "./index.css";
import "./App.css";

function App() {
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
    <Layout
      dataContent={dataContent}
      setDataContent={setDataContent}
      schemaContent={schemaContent}
      setSchemaContent={setSchemaContent}
      matchResults={matchResults}
      setMatchResults={setMatchResults}
      handleMatch={handleMatch}
    />
  );
}

export default App;
