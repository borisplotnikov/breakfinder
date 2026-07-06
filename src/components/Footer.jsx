export default function Footer() {
  return (
    <footer className="navbar bg-body-tertiary text-center">
      <div className="container-fluid">
        <span className="navbar-text d-block w-100 fs-5 pb-0">
          <img
            src="search.png"
            alt=""
            aria-hidden="true"
            className="me-2"
            style={{ height: "1.5em", width: "auto" }}
          />
          Reverse-Schema Matcher &copy; 2026
        </span>
        <span className="navbar-text d-block w-100 pb-0">
          Built by Shaun Haney, Anup Manandhar, and Boris Plotnikov.
        </span>
        <div className="d-flex justify-content-between align-items-center w-100 gap-3 py-0">
          <a
            href="https://www.flaticon.com/free-icons/error"
            title="error icons"
            className="navbar-text py-0"
            style={{ fontSize: "0.75rem" }}
          >
            Error icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.magnific.com/free-vector/user-circles-set_145856997.htm"
            className="navbar-text py-0"
            style={{ fontSize: "0.75rem" }}
          >
            Image by juicy_fish on Magnific
          </a>
        </div>
      </div>
    </footer>
  );
}
