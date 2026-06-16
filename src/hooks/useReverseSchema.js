import { useState } from "react";

import { parseReverseSchemaText } from "../services/reverseSchema";

import demoData from "../assets/demo/demoData.txt?raw";
import demoSchema from "../assets/demo/demoSchema.json?raw";

export default function useReverseSchema() {
  const [dataContent, setDataContent] = useState("");
  const [schemaContent, setSchemaContent] = useState("");
  const [matchResults, setMatchResults] = useState([]);

  const runMatch = (schema, data) => {
    const results = parseReverseSchemaText(schema, data);
    setMatchResults(results);
  };

  const handleDemo = () => {
    try {
      setDataContent(demoData);
      setSchemaContent(demoSchema);

      runMatch(demoSchema, demoData);
    } catch (err) {
      console.error(err);
      alert("Unable to run demo.");
    }
  };

  const handleMatch = () => {
    if (!dataContent || !schemaContent) {
      alert("Please upload both files first!");
      return;
    }

    try {
      runMatch(schemaContent, dataContent);
    } catch (err) {
      console.error(err);
      alert("Unable to parse files.");
    }
  };

  const handleDataUpload = (content) => {
    setDataContent(content);
    setMatchResults([]);
  };

  const handleSchemaUpload = (content) => {
    setSchemaContent(content);
    setMatchResults([]);
  };

  return {
    dataContent,
    schemaContent,
    matchResults,

    handleDemo,
    handleMatch,

    handleDataUpload,
    handleSchemaUpload,
  };
}
