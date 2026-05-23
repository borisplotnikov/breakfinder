import { useState } from "react";

export default function DataUploader() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  function handleFile(file) {
    setFile(file);
    setProgress(0);
  }

  function simulateUpload() {
    if (!file) return;

    setIsUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
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
    // Max-width shrunk to 250px to match the Schema component
    <div className="container my-2" style={{ maxWidth: "250px" }}>
      <div className="card shadow-sm border-0 bg-dark text-light">
        <div className="card-body p-3 text-center">
          {/* FIXED: Added style inline to exactly mirror the font-size of SchemaUploader */}
          <h5 className="mb-2 fw-bold" style={{ fontSize: "0.95rem" }}>Upload Your Data</h5>
          
          {/* Shrunk Drop Zone Padding */}
          <div
            className={`p-2 rounded-3 border border-2 text-center position-relative ${
              isDragging 
                ? "border-primary bg-secondary bg-opacity-25" 
                : "border-secondary border-dashed"
            }`}
            style={{ borderStyle: "dashed", cursor: "pointer", transition: "all 0.2s ease" }}
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
            
            {/* Shrunk typography and icons inside dropzone */}
            <div className="py-2">
              <i className="bi bi-cloud-arrow-up fs-3 text-secondary mb-1 d-block"></i>
              <p className="mb-0 small fw-semibold" style={{ fontSize: "0.8rem" }}>Drag & drop file</p>
              <p className="text-muted mb-2" style={{ fontSize: "0.7rem" }}>or browse</p>
              <span className="btn btn-sm btn-outline-light px-2 py-0" style={{ fontSize: "0.7rem" }}>Select</span>
            </div>
          </div>

          {/* Shrunk File Info UI */}
          {file && (
            <div className="mt-2 p-2 bg-secondary bg-opacity-10 rounded text-start d-flex align-items-center justify-content-between">
              <div className="text-truncate me-1" style={{ maxWidth: "110px" }}>
                <p className="text-muted mb-0" style={{ fontSize: "0.65rem" }}>File</p>
                <strong className="text-white d-block text-truncate" style={{ fontSize: "0.75rem" }}>{file.name}</strong>
              </div>

              <button
                className="btn btn-primary btn-sm flex-shrink-0 py-0 px-2"
                style={{ fontSize: "0.7rem" }}
                onClick={simulateUpload}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1" style={{ width: "10px", height: "10px" }} role="status" aria-hidden="true"></span>
                    ...
                  </>
                ) : (
                  "Upload"
                )}
              </button>
            </div>
          )}

          {/* Shrunk Progress Bar Layout */}
          {isUploading && (
            <div className="mt-2">
              <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: "0.65rem" }}>
                <span className="text-muted">Uploading...</span>
                <span className="text-primary fw-bold">{progress}%</span>
              </div>
              <div className="progress" style={{ height: "5px" }}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          )}

          {/* Shrunk Success Banner */}
          {!isUploading && progress === 100 && (
            <div className="mt-2 alert alert-success py-1 px-2 mb-0 text-start d-flex align-items-center" style={{ fontSize: "0.7rem" }} role="alert">
              <i className="bi bi-check-circle-fill me-1"></i>
              <div>Success!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}