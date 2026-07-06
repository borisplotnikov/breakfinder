function WhatItIs() {
  return (
    <div className="p-3">
      <h5 className="card-subtitle text-body-secondary">What it is:</h5>
      <p className="card-text px-3 mb-2" style={{ textAlign: "justify" }}>
        This is a prototype of a web application that uses schema-defined
        patterns to search uploaded data and return matching records.
      </p>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="p-3">
      <h5 className="card-subtitle text-body-secondary">How It Works:</h5>
      <ol className="mb-4">
        <li>
          <p>
            <strong>Upload Your Data:</strong> a document you want to search
            through, like a banking log or a health record.
          </p>
        </li>
        <li>
          <p>
            <strong>Upload Your Schema:</strong> a small instruction file that
            tells the app what you are looking for. The app starts scanning
            automatically once both files are uploaded.
          </p>
        </li>
      </ol>
    </div>
  );
}

function TheResult() {
  return (
    <div className="p-3">
      <h5 className="card-subtitle text-body-secondary">The Result:</h5>
      <p className="card-text px-3 mb-2" style={{ textAlign: "justify" }}>
        Get a clean, organized list of every match found.
      </p>
    </div>
  );
}

export default function DescriptionSection() {
  return (
    <section className="col-12 col-md-3 d-flex">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-center">Description</h3>
        </div>
        <WhatItIs />
        <HowItWorks />
        <TheResult />
      </div>
    </section>
  );
}
