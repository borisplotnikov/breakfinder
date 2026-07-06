import { useState, useEffect } from "react";

import { parseReverseSchemaText } from "../services/reverseSchemaService";

import demoData from "../assets/demo/demoData.txt?raw";
import demoSchema from "../assets/demo/demoSchema.json?raw";

export default function useReverseSchema() {
  const [dataContent, setDataContent] = useState("");
  const [schemaContent, setSchemaContent] = useState("");

  const [dataFileName, setDataFileName] = useState("");
  const [schemaFileName, setSchemaFileName] = useState("");

  const [matchResults, setMatchResults] = useState([]);

  const [isDemoActive, setIsDemoActive] = useState(false);
  const [canReset, setCanReset] = useState(false);

  const runMatch = (schema, data) => {
    const results = parseReverseSchemaText(schema, data);
    setMatchResults(results);
  };

  const handleDemo = () => {
    try {
      setDataContent(demoData);
      setSchemaContent(demoSchema);

      setDataFileName("demoData.txt");
      setSchemaFileName("demoSchema.json");

      runMatch(demoSchema, demoData);
      setIsDemoActive(true);
      setCanReset(true);
    } catch (err) {
      console.error(err);
      setMatchResults([]);
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
      setMatchResults([]);
      alert("Unable to parse files.");
    }
  };

  const handleDataUpload = (content, fileName = "") => {
    setDataContent(content);
    setDataFileName(fileName);
    setMatchResults([]);
    setCanReset(true);
  };

  const handleSchemaUpload = (content, fileName = "") => {
    setSchemaContent(content);
    setSchemaFileName(fileName);
    setMatchResults([]);
    setCanReset(true);
  };

  const handleReset = () => {
    setDataContent("");
    setSchemaContent("");

    setDataFileName("");
    setSchemaFileName("");

    setMatchResults([]);
    setIsDemoActive(false);
    setCanReset(false);
  };

  // Safe auto-run only when both files are present
  useEffect(() => {
    if (!dataContent || !schemaContent) return;

    try {
      runMatch(schemaContent, dataContent);
    } catch (err) {
      console.error("Auto match failed:", err);
      setMatchResults([]);
    }
  }, [dataContent, schemaContent]);

  return {
    dataContent,
    schemaContent,

    dataFileName,
    schemaFileName,

    matchResults,

    isDemoActive,
    canReset,

    handleDemo,
    handleMatch,
    handleReset,

    handleDataUpload,
    handleSchemaUpload,
  };
}
