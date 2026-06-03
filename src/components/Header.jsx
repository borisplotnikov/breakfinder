export default function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="corrupted-file.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2" // Added me-2 for a touch of spacing
          />
          Bootstrap
        </a>
      </div>
    </nav>
  );
}
