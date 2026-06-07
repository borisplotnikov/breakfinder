export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid mx-3">
        <div className="d-flex">
          <img
            src="corrupted-file.png"
            alt="Corrupted file"
            className="flex-shrink-0 me-2 object-fit-contain"
            style={{ maxHeight: "60px", height: "auto" }}
          />

          <div className="d-flex flex-column">
            <a
              className="navbar-brand m-0 h1 text-center"
              href="#"
              style={{ lineHeight: 1 }}
            >
              <h3 className="m-0">Reverse-Schema for Parsing</h3>
              <small className="navbar-text m-0">
                Built at Uhackathon 2026.
              </small>
            </a>
          </div>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex w-100 justify-content-center justify-content-lg-end flex-row">
            <li className="nav-item">
              <a class="nav-link" href="#">
                Repo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Devpost
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Uhackathon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
