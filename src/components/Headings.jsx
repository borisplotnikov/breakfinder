export function Heading() {
  return (
    <h3 className="card-title text-center mb-4">
      Find a string or text pattern in your text document.
    </h3>
  );
}

export function SubHeading() {
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
