export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid mx-3 ">
        <div className="d-flex">
          <img
            src="search.png"
            alt="search icon"
            className="flex-shrink-0 me-4 object-fit-contain"
            style={{ maxHeight: "80px", height: "auto" }}
          />
          <a
            className="navbar-brand m-0 py-0 h1 text-center"
            href="#"
            style={{ lineHeight: 1 }}
          >
            <div className="d-flex flex-column pt-2 fs-1">
              Reverse-Schema Matcher
              <small className="navbar-text m-0 pt-1 fs-5">
                Built at UHackathon 2026.
              </small>
            </div>
          </a>
        </div>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav gap-lg-4 w-100 justify-content-lg-end">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/borisplotnikov/breakfinder"
                target="_blank"
                rel="noopener noreferrer"
              >
                On GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://devpost.com/software/reverse-schema-for-text-documents"
                target="_blank"
                rel="noopener noreferrer"
              >
                On Devpost
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://uhackathon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UHackathon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
