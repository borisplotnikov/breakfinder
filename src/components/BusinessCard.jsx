export default function BusinessCard({
  src,
  name,
  contribution,
  stack,
  github,
  linkedIn,
}) {
  return (
    <div className="col-4 d-flex">
      <div className="card h-100 w-100 text-center">
        <div
          className="d-flex justify-content-center"
          style={{ height: "100px" }}
        >
          <img
            src={src}
            className="rounded-circle mt-2"
            alt={name}
            style={{
              height: "100px",
              width: "100px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="card-header mt-3">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle text-body-secondary mt-3">
            {contribution}
          </h6>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {stack.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                className="card-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="list-group-item">
              <a
                className="card-link"
                href={linkedIn}
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
