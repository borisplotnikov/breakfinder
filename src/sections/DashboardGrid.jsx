// import FileUploader from "../components/FileUploader";
import Buttons from "../components/Buttons";
import Uploaders from "../components/Uploaders";
import OutputResults from "../components/OutputResults";

import useReverseSchema from "../hooks/useReverseSchema";

export default function DashboardGrid() {
  const { matchResults } = useReverseSchema();

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
      <Uploaders />
      <Buttons />
      <OutputResults results={matchResults} />
    </section>
  );
}
