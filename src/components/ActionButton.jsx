export default function ActionButton({
  label,
  variant = "primary",
  onClick,
  disabled = false,
  title,
}) {
  return (
    <div className="w-100 py-4 text-center">
      <button
        className={`btn btn-${variant} w-50`}
        type="button"
        onClick={onClick}
        disabled={disabled}
        title={title}
      >
        {label}
      </button>
    </div>
  );
}
