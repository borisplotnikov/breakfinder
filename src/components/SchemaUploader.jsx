import { useState } from "react";

export default function SchemaUploader({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleFile(file) {
    setFile(file);
    onFileSelect?.(file);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleInputChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) handleFile(selectedFile);
  }

  return (
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm border-0 bg-dark text-light">
        <div className="card-body p-4 text-center">
          <h4 className="mb-3 fw-bold">Schema JSON</h4>
          
          {/* Drop Zone */}
          <div
            className={`p-4 rounded-3 border border-2 text-center position-relative ${
              isDragging 
                ? "border-primary bg-secondary bg-opacity-25" 
                : "border-secondary border-dashed"
            }`}
            style={{ borderStyle: "dashed", cursor: "pointer", transition: "all 0.2s ease" }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {/* Hidden actual file input made to cover the drop zone area */}
            <input
              type="file"
              accept=".json,application/json"
              className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
              style={{ cursor: "pointer" }}
              onChange={handleInputChange}
            />
            
            <div className="py-3">
              <i className="bi bi-cloud-arrow-up fs-1 text-secondary mb-2 d-block"></i>
              <p className="mb-1 fw-semibold">Drag & drop a file here</p>
              <p className="text-muted small mb-3">JSON schema description</p>
              <span className="btn btn-sm btn-outline-light px-3">Select File</span>
            </div>
          </div>

          {file && (
            <div className="mt-4 p-3 bg-secondary bg-opacity-10 rounded text-start">
              <div className="text-truncate me-2">
                <p className="small text-muted mb-0">Selected File</p>
                <strong className="text-white small text-truncate d-block">{file.name}</strong>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
