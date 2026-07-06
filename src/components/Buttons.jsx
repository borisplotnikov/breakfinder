function ActionButton({
  label,
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`btn btn-${variant} w-25 py-1 fs-4`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default function Buttons({ onDemo }) {
  return (
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <ActionButton label="See Demo" variant="secondary" onClick={onDemo} />
        </div>
      </div>
    </div>
  );
}
