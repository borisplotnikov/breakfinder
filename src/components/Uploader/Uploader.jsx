import { useState } from "react";
import "./Uploader.css";

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
    <div className="uploader">
      <div
        className={`drop-zone ${isDragging ? "dragging" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>Drag & drop a file here</p>
        <p>or</p>

        <input type="file" onChange={handleInputChange} />

        {file && (
          <div className="file-info">
            <p>
              <strong>{file.name}</strong>
            </p>

            <button onClick={simulateUpload} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        )}

        {isUploading && (
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p>{progress}%</p>
          </div>
        )}

        {!isUploading && progress === 100 && (
          <p className="success">Upload complete ✔</p>
        )}
      </div>
    </div>
  );
}
