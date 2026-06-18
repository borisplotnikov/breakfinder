function WhatItIs() {
  return (
    <div className="p-3">
      <h5 className="card-subtitle text-body-secondary">What it is:</h5>
      <p className="card-text px-3 mb-2" style={{ textAlign: "justify" }}>
        Imagine you are handed a 500-page bank statement or a massive medical
        report, and you need to find every single account number, phone number,
        or specific medical code hidden inside it. Doing this manually would
        take days and cause a massive headache.
      </p>
      <p className="card-text px-3 mb-4" style={{ textAlign: "justify" }}>
        Our app does that tedious work for you in seconds. It is a smart tool
        designed to instantly find specific patterns of information hidden
        inside massive, confusing files.
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
            <strong>Upload Your Data File:</strong> This is the large, messy
            document you want to search through (like a giant spreadsheet, a
            banking log, or a health record).
          </p>
        </li>
        <li>
          <p>
            <strong>Upload Your "Cheat Sheet" (The Schema):</strong> Instead of
            typing in every single thing you’re looking for, you upload a small
            instruction file (a "schema"). Think of this as a digital cheat
            sheet or a blueprint that tells the app exactly what a phone number,
            account digit, or text pattern looks like.
          </p>
        </li>
        <li>
          <p>
            <strong>Press the Button:</strong> Click "Find Pattern" and the app
            instantly scans the entire document.
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
        You get a clean, organized list of every single match found.
      </p>
      <p className="card-text px-3 mb-4" style={{ textAlign: "justify" }}>
        Whether you are dealing with cryptic financial codes or overwhelming
        medical data, the app translates the chaos into a simple list of exactly
        what you need to see. No coding, no manual searching, and no missed
        details.
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
