function ActionButton({
  label,
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`btn btn-${variant} w-75 py-1 fs-4`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default function Buttons({ onDemo, onReset, isDemoActive, canReset }) {
  return (
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <ActionButton
            label="Demo"
            variant="secondary"
            onClick={onDemo}
            disabled={isDemoActive}
          />
        </div>

        <div className="col-6 text-center">
          <ActionButton
            label="Reset"
            variant="primary"
            onClick={onReset}
            disabled={!canReset}
          />
        </div>
      </div>
    </div>
  );
}
