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
    <div className="page">
      <h1>Reverse-Schema For Parsing</h1>
      <DataUploader onFileSelect={setDataFile} />
      <SchemaUploader onFileSelect={setSchemaFile} />
      <TextOutput content={output} />
    </div>
  );
}

