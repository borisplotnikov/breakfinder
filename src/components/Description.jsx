import CardGrid from "../Cardgrid";

export default function Description() {
  return (
    <section className="col-12 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Reverse-Schema for Parsing</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            What we've bult:
          </h6>
          <p className="card-text mb-1">
            This tool allows you to easily analyze and find structural patterns
            within your datasets. Simply upload your data file (JSON, CSV, or
            XML) along with a target schema file to get started.
          </p>
          <p className="card-text">
            Once loaded, the application will scan your data and return a
            precise list of locations and line numbers where the specified
            schema structure is found.
          </p>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            How did we do:
          </h6>
          <p className="card-text">6th place out of 12</p>
          <CardGrid />
        </div>
      </div>
    </section>
  );
}
