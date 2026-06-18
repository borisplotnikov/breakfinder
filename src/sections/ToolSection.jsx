import Buttons from "../components/Buttons";
import Uploaders from "../components/Uploaders";
import Output from "../components/Output";

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
            <li className="list-group-item">
              <SubHeading />
              <Uploaders />
            </li>
            <li className="list-group-item py-5">
              <Buttons />
            </li>
            <li className="list-group-item">
              <Output />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
