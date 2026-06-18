import useReverseSchema from "../hooks/useReverseSchema";

function ActionButton({
  label,
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`btn btn-${variant} w-75`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default function Buttons() {
  const {
    dataContent,
    schemaContent,

    handleDemo,
    handleMatch,
  } = useReverseSchema();

  const canFindPattern = dataContent && schemaContent;

  return (
    <div className="card-body">
      <div className="row">
        <div className="col-6 text-center">
          <ActionButton
            label="See Demo"
            variant="secondary"
            onClick={handleDemo}
          />
        </div>
        <div className="col-6 text-center">
          <ActionButton
            label="Find Pattern"
            variant="primary"
            onClick={handleMatch}
            disabled={!canFindPattern}
          />
        </div>
      </div>
    </div>
  );
}
