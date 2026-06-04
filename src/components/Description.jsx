export default function Description() {
  return (
    <div className="card descrition-content" style={{ width: "18rem" }}>
      <div className="card-header">Reverse-Schema for Parcing</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          This tool allows you to easily analyze and find structural patterns
          within your datasets. Simply upload your data file (JSON, CSV, or XML)
          along with a target schema file to get started.
        </li>
        <li className="list-group-item">
          Once loaded, the application will scan your data and return a precise
          list of locations and line numbers where the specified schema
          structure is found.
        </li>
      </ul>
    </div>
  );
}
