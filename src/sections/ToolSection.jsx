import Buttons from "../components/Buttons";
import Uploaders from "../components/Uploaders";
import Output from "../components/Output";
import useReverseSchema from "../hooks/useReverseSchema";

function SubHeading() {
  return (
    <p
      className="card-text text-body-secondary text-center px-2"
      style={{ textAlign: "justify" }}
    >
      To see a quick demo just click "See Demo" button. To find a pattern upload
      any .txt, .xml, .csv, or .json file, upload your schema file and click
      "Find Pattern" button.
    </p>
  );
}

export default function ToolSection() {
  const {
    dataContent,
    schemaContent,
    dataFileName,
    schemaFileName,

    matchResults,

    handleDemo,
    handleMatch,
    handleDataUpload,
    handleSchemaUpload,
  } = useReverseSchema();

  return (
    <section className="col-12 col-md-6 d-flex">
      <div className="card flex-fill">
        <div className="card-header">
          <h3 className="card-title text-center">
            Find a string or text pattern in your text document
          </h3>
        </div>

        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item pb-3">
              <SubHeading />

              <Uploaders
                dataContent={dataContent}
                schemaContent={schemaContent}
                dataFileName={dataFileName}
                schemaFileName={schemaFileName}
                onDataUpload={handleDataUpload}
                onSchemaUpload={handleSchemaUpload}
              />
            </li>

            <li className="list-group-item py-3">
              <Buttons onDemo={handleDemo} />
            </li>

            <li className="list-group-item pt-3">
              <Output matchResults={matchResults} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
