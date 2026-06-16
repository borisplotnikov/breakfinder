import CardGrid from "./CardGrid";

export default function Description() {
  return (
    <section className="col-12 col-md-4">
      <div className="card">
        <div className="card-body">
          {/* <h5 className="card-title text-center mb-4">
            Reverse-Schema for Text Documents
          </h5>
          <h6 className="card-subtitle text-body-secondary">
            What we've bult:
          </h6> */}
          <h3 className="card-title text-center mb-4">The Product.</h3>
          <h6 className="card-subtitle text-body-secondary">What it is:</h6>
          <p className="card-text px-3 mb-4" style={{ textAlign: "justify" }}>
            Imagine you are handed a 500-page bank statement or a massive
            medical report, and you need to find every single account number,
            phone number, or specific medical code hidden inside it. Doing this
            manually would take days and cause a massive headache.
          </p>
          <p className="card-text px-3 mb-4" style={{ textAlign: "justify" }}>
            Our app does that tedious work for you in seconds. It is a smart
            tool designed to instantly find specific patterns of information
            hidden inside massive, confusing files.
          </p>
          <h6 className="card-subtitle text-body-secondary">
            How It Works (In 3 Simple Steps):
          </h6>
          <ol>
            <li>
              <p>
                Upload Your Data File: This is the large, messy document you
                want to search through (like a giant spreadsheet, a banking log,
                or a health record).
              </p>
            </li>
            <li>
              <p>
                Upload Your "Cheat Sheet" (The Schema): Instead of typing in
                every single thing you’re looking for, you upload a small
                instruction file (a "schema"). Think of this as a digital cheat
                sheet or a blueprint that tells the app exactly what a phone
                number, account digit, or text pattern looks like.
              </p>
            </li>
            <li>
              <p>
                Press the Button: Click "Match," and the app instantly scans the
                entire document.
              </p>
            </li>
          </ol>
          <h6 className="card-subtitle text-body-secondary">The Result</h6>
          <p className="card-text px-3 mb-4" style={{ textAlign: "justify" }}>
            You get a clean, organized list of every single match found.
          </p>
          <p className="card-text px-3 mb-4" style={{ textAlign: "justify" }}>
            Whether you are dealing with cryptic financial codes or overwhelming
            medical data, the app translates the chaos into a simple list of
            exactly what you need to see. No coding, no manual searching, and no
            missed details.
          </p>

          {/* <h6 className="card-subtitle text-body-secondary">How did we do:</h6>
          <p className="card-text px-3">6th place out of 12.</p> */}
          <div className="card-body">
            <h3 className="card-title text-center mb-4">The Team.</h3>
            <CardGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
