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
            className="card-img-top pt-3"
            alt="Shaun"
            style={{
              height: "100px",
              width: "100px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Shawn Haney</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Job</h6>
          <p className="card-text">Tools</p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
            GitHub
          </a>
          <a href="#" className="card-link">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
