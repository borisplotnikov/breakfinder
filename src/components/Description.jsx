export default function Description() {
  return (
    <div className="description-content">
      <h2>Structural Schema Matcher</h2>
      <p>
        This tool allows you to easily analyze and find structural patterns
        within your datasets. Simply upload your data file (JSON, CSV, or XML)
        along with a target schema file to get started.
      </p>
      <p>
        Once loaded, the application will scan your data and return a precise
        list of locations and line numbers where the specified schema structure
        is found.
      </p>
    </div>
  );
}
