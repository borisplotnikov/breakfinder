import { useState } from "react";

export default function Uploader() {
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
    <div className="container my-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow-sm border-0 bg-dark text-light">
        <div className="card-body p-4 text-center">
          <h4 className="mb-3 fw-bold">Upload Your Files</h4>
          
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
              className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
              style={{ cursor: "pointer" }}
              onChange={handleInputChange}
            />
            
            <div className="py-3">
              <i className="bi bi-cloud-arrow-up fs-1 text-secondary mb-2 d-block"></i>
              <p className="mb-1 fw-semibold">Drag & drop a file here</p>
              <p className="text-muted small mb-3">or click to browse</p>
              <span className="btn btn-sm btn-outline-light px-3">Select File</span>
            </div>
          </div>

          {/* File Info & Upload Action Button */}
          {file && (
            <div className="mt-4 p-3 bg-secondary bg-opacity-10 rounded text-start d-flex align-items-center justify-content-between">
              <div className="text-truncate me-2">
                <p className="small text-muted mb-0">Selected File</p>
                <strong className="text-white small text-truncate d-block">{file.name}</strong>
              </div>

              <button
                className="btn btn-primary btn-sm flex-shrink-0"
                onClick={simulateUpload}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Uploading...
                  </>
                ) : (
                  "Upload"
                )}
              </button>
            </div>
          )}

          {/* Progress Bar Container */}
          {isUploading && (
            <div className="mt-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="text-muted small">Uploading...</span>
                <span className="text-primary small fw-bold">{progress}%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
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

          {/* Success Message */}
          {!isUploading && progress === 100 && (
            <div className="mt-4 alert alert-success py-2 px-3 mb-0 small text-start d-flex align-items-center" role="alert">
              <i className="bi bi-check-circle-fill me-2"></i>
              <div>Upload complete successfully!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}