export default function CardShawn() {
  return (
    <div className="col-4 d-flex justify-content-center">
      <div className="card h-100 text-center">
        <div
          className="d-flex justify-content-center"
          style={{ height: "100px" }}
        >
          <img
            src="shaun.jpeg"
            className="rounded-circle mt-2"
            alt="Shaun"
            style={{
              height: "100px",
              width: "100px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="card-header mt-3">
          <h5 className="card-title">Shawn Haney</h5>
          <h6 className="card-subtitle text-body-secondary">UX/UI</h6>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ReactJS</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">JavaScript</li>
          </ul>
        </div>
        <div className="card-footer">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                className="card-link"
                href="https://github.com/shaunhaney/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="list-group-item">
              <a
                className="card-link"
                href="https://linkedin.com/in/shaunhaney"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
