export default function DashboardGrid({ uploaders, actions, output }) {
  return (
    /* We wrap the grid in a full-height flex column with a gap to replace manual margins */
    <div className="d-flex flex-column h-100 gap-3">
      {/* Row 1: Uploaders */}
      <div className="row g-3 flex-shrink-0">
        {uploaders.map((child, idx) => (
          <div key={idx} className="col-6">
            {child}
          </div>
        ))}
      </div>
      {/* Row 2: Actions/Buttons */}
      <div className="row g-3 flex-shrink-0">
        {actions.map((child, idx) => (
          <div key={idx} className="col-6">
            {child}
          </div>
        ))}
      </div>
      {/* Row 3: Output Screen */}
      {/* flex-grow-1 forces this row to fill the rest of the workspace,
      min-height handles the inner flex layout */}
      <div className="row flex-grow-1" style={{ minHeight: 0 }}>
        <div className="col-12 h-100">{output}</div>
      </div>
    </div>
  );
}
