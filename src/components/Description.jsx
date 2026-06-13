import CardGrid from "../Cardgrid";

export default function Description() {
  return (
    <section className="col-12 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center mb-4">
            Reverse-Schema for Text Documents
          </h5>
          <h6 className="card-subtitle text-body-secondary">
            What we've bult:
          </h6>
          <p className="card-text px-3 mb-4" style={{ textAlign: "justify" }}>
            This tool allows you to easily analyze and find structural patterns
            within your datasets. Simply upload your data file (JSON, CSV, or
            XML) along with a target schema file to get started. Once loaded,
            the application will scan your data and return a precise list of
            locations and line numbers where the specified schema structure is
            found.
          </p>
          <h6 className="card-subtitle text-body-secondary">How did we do:</h6>
          <p className="card-text px-3">6th place out of 12</p>
          <div className="card-body">
            <CardGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
