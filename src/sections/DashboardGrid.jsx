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
    <section className="col-12 col-md-8 d-flex flex-column gap-3">
      <h3 className="mt-5 text-center">
        Find a string or text pattern in your text document.
      </h3>
      <p className="px-4 mb-0 text-center">
        To see a quick demo just click "See Demo" button. To find a pattern
        upload any .txt, .xml, .csv, or .json file, upload your schema file and
        click "Find Pattern" button.
      </p>
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
