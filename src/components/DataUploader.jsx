import { useState } from "react";

export default function DataUploader({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleFile(file) {
    setFile(file);
    onFileSelect?.(file);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleInputChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) handleFile(selectedFile);
  }

  return (
    <div className="container my-2" style={{ maxWidth: "250px" }}>
      <div className="card shadow-sm border-0 bg-dark text-light">
        <div className="card-body p-3 text-center">
          <h5 className="mb-2 fw-bold" style={{ fontSize: "0.95rem" }}>
            Input File
          </h5>

          <div
            className={`p-2 rounded-3 border border-2 text-center position-relative ${
              isDragging
                ? "border-primary bg-secondary bg-opacity-25"
                : "border-secondary border-dashed"
            }`}
            style={{
              borderStyle: "dashed",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              type="file"
              className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
              style={{ cursor: "pointer" }}
              onChange={handleInputChange}
            />

            <div className="py-2">
              <i className="bi bi-cloud-arrow-up fs-3 text-secondary mb-1 d-block"></i>
              <p className="mb-0 small fw-semibold" style={{ fontSize: "0.8rem" }}>
                Drag & drop data
              </p>
              <p className="text-muted mb-2" style={{ fontSize: "0.7rem" }}>
                Text input file
              </p>
              <span className="btn btn-sm btn-outline-light px-2 py-0" style={{ fontSize: "0.7rem" }}>
                Select
              </span>
            </div>
          </div>

          {file && (
            <div className="mt-2 p-2 bg-secondary bg-opacity-10 rounded text-start">
              <p className="text-muted mb-0" style={{ fontSize: "0.65rem" }}>
                File
              </p>
              <strong className="text-white d-block text-truncate" style={{ fontSize: "0.75rem" }}>
                {file.name}
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
