import { useState } from "react";
import "./Uploader.css";

export default function Uploader() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleFile(file) {
    setFile(file);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
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
            <p>Selected file:</p>
            <strong>{file.name}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
