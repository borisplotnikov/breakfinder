export default function MatchButton({ data, schema, onMatchClick }) {
  // Disable the button if either file is missing
  const isDisabled = !data || !schema;

  return (
    <div className="match-button-container">
      <button
        type="button"
        onClick={onMatchClick}
        disabled={isDisabled}
        title={
          isDisabled
            ? "Please upload both data and schema files first"
            : "Find structural matches"
        }
      >
        Run Structural Matching
      </button>
    </div>
  );
}
