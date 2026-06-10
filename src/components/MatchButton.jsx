export default function MatchButton({ data, schema, onMatchClick }) {
  // Disable the button if either file is missing
  const isDisabled = !data || !schema;

  return (
    <div className="w-100 py-4 text-center">
      <button
        className="btn btn-primary w-50"
        type="button"
        onClick={onMatchClick}
        disabled={isDisabled}
        title={
          isDisabled
            ? "Please upload both data and schema files first"
            : "Find structural matches"
        }
      >
        Match Schema
      </button>
    </div>
  );
}
