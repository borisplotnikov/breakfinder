export default function DashboardGrid({ uploaders, actions, output }) {
  return (
    <>
      {/* Row 1: Uploaders */}
      <div className="row g-3">
        {uploaders.map((child, idx) => (
          <div key={idx} className="col-6">
            {child}
          </div>
        ))}
      </div>

      {/* Row 2: Actions/Buttons */}
      <div className="row g-3">
        {actions.map((child, idx) => (
          <div key={idx} className="col-6">
            {child}
          </div>
        ))}
      </div>

      {/* Row 3: Output Screen */}
      <div className="row flex-grow-1">
        <div className="col-12">{output}</div>
      </div>
    </>
  );
}
