function ActionButton({
  label,
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`btn btn-${variant} w-75 py-3 fs-4`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default function Buttons({
  onDemo,
  onMatch,
  dataContent,
  schemaContent,
}) {
  const canFindPattern = dataContent && schemaContent;

  return (
    <div className="card-body">
      <div className="row">
        <div className="col-6 text-center">
          <ActionButton label="See Demo" variant="secondary" onClick={onDemo} />
        </div>

        <div className="col-6 text-center">
          <ActionButton
            label="Find Pattern"
            variant="primary"
            onClick={onMatch}
            disabled={!canFindPattern}
          />
        </div>
      </div>
    </div>
  );
}
