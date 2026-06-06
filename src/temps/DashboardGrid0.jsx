export default function DashboardGrid({ uploaders, actions, output }) {
  return (
    <div className="d-flex flex-column h-100">
      {/* Row 1: Uploaders */}
      {/* ADDED: border, border-secondary, rounded, and p-2 for visual padding */}
      <div className="row flex-shrink-0 border border-secondary rounded">
        {uploaders.map((child, idx) => (
          <div key={idx} className="col-6">
            {child}
          </div>
        ))}
      </div>

      {/* Row 2: Actions/Buttons */}
      {/* ADDED: border, border-secondary, rounded, and p-2 */}
      <div className="row flex-shrink-0 border border-secondary rounded">
        {actions.map((child, idx) => (
          <div key={idx} className="col-6">
            {child}
          </div>
        ))}
      </div>

      {/* Row 3: Output Screen */}
      {/* ADDED: border, border-secondary, rounded, and p-2 */}
      <div
        className="row flex-grow-1 border border-secondary rounded"
        style={{ minHeight: 0 }}
      >
        <div className="col-12 h-100">{output}</div>
      </div>
    </div>
  );
}
