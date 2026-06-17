import Heading from "../components/Heading";
import FileUploader from "../components/FileUploader";
import ActionButton from "../components/ActionButton";
import OutputResults from "../components/OutputResults";

import useReverseSchema from "../hooks/useReverseSchema";

export default function DashboardGrid() {
  const {
    dataContent,
    schemaContent,
    matchResults,

    handleDemo,
    handleMatch,

    handleDataUpload,
    handleSchemaUpload,
  } = useReverseSchema();

  return (
    <section className="col-12 col-md-8 d-flex flex-column gap-3 app-section">
      <Heading />
      {/* Uploaders row */}
      <div className="d-flex gap-3">
        <FileUploader label="Upload Data File" onUpload={handleDataUpload} />
        <FileUploader
          label="Upload Schema File"
          onUpload={handleSchemaUpload}
        />
      </div>

      {/* Buttons row */}
      <div className="d-flex gap-3">
        <ActionButton
          label="See Demo"
          variant="secondary"
          onClick={handleDemo}
        />
        <ActionButton
          label="Find Pattern"
          variant="primary"
          onClick={handleMatch}
          disabled={!dataContent || !schemaContent}
        />
      </div>

      {/* Results row */}
      <OutputResults results={matchResults} />
    </section>
  );
}
