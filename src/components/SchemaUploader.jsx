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
    // Max-width shrunk to 250px to match the Data component
    <div className="container my-2" style={{ maxWidth: "250px" }}>
      {/* Tweak: Changed card background styling to differentiate it */}
      <div className="card shadow-sm border-0 bg-dark text-light">
        <div className="card-body p-3 text-center">
          {/* Header changed to "Upload Your Schema" and scaled down */}
          <h5 className="mb-2 fw-bold text-info" style={{ fontSize: "0.95rem" }}>Upload Your Schema</h5>
          
          {/* Shrunk Drop Zone with Info/Cyan accent colors */}
          <div
            className={`p-2 rounded-3 border border-2 text-center position-relative ${
              isDragging 
                ? "border-info bg-info bg-opacity-10" 
                : "border-secondary border-dashed"
            }`}
            style={{ borderStyle: "dashed", cursor: "pointer", transition: "all 0.2s ease" }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              type="file"
              accept=".json,application/json"
              className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
              style={{ cursor: "pointer" }}
              onChange={handleInputChange}
            />
            
            {/* Tweak: Swapped cloud icon for a schema/code specific icon */}
            <div className="py-2">
              <i className="bi bi-file-earmark-code fs-3 text-info mb-1 d-block"></i>
              <p className="mb-0 small fw-semibold" style={{ fontSize: "0.8rem" }}>Drag & drop schema</p>
              <p className="text-muted mb-2" style={{ fontSize: "0.7rem" }}>or browse</p>
              <span className="btn btn-sm btn-outline-info px-2 py-0" style={{ fontSize: "0.7rem" }}>Select</span>
            </div>
          </div>

          {file && (
            <div className="mt-2 p-2 bg-secondary bg-opacity-10 rounded text-start">
              <p className="text-muted mb-0" style={{ fontSize: "0.65rem" }}>File</p>
              <strong className="text-white d-block text-truncate" style={{ fontSize: "0.75rem" }}>{file.name}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
