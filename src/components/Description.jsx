export default function Description() {
  return (
    /* ADDED: 'border border-secondary' to make the card outer boundary visible */
    <div className="card descrition-content border border-secondary h-100">
      <div className="card-header">Reverse-Schema for Parsing</div>
      {/* FIXED: 'clasName' corrected to 'className' */}
      <div className="card-body">
        <p className="card-text">
          This tool allows you to easily analyze and find structural patterns
          within your datasets. Simply upload your data file (JSON, CSV, or XML)
          along with a target schema file to get started.
        </p>
        {/* FIXED: 'cardText' corrected to 'card-text' */}
        <p className="card-text">
          Once loaded, the application will scan your data and return a precise
          list of locations and line numbers where the specified schema
          structure is found.
        </p>
      </div>
    </div>
  );
}
