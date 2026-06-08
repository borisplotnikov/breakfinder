import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function DataUploader({ onDataUpload }) {
  const processFile = (file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      onDataUpload(e.target.result);
    };

    reader.readAsText(file);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      processFile(file);
    },
    [onDataUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/json": [".json"],
      "application/xml": [".xml"],
      "text/xml": [".xml"],
      "text/csv": [".csv"],
      "text/plain": [".txt"],
    },
  });

  return (
    <div className="w-100">
      <div
        {...getRootProps()}
        className={`card border-2 ${
          isDragActive
            ? "border-primary bg-primary-subtle"
            : "border-secondary-subtle"
        }`}
        style={{
          borderStyle: "dashed",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />

        <div className="card-body text-center py-5">
          <i className="bi bi-cloud-arrow-up fs-1 text-primary mb-3 d-block"></i>

          <h5 className="mb-2">
            {isDragActive
              ? "Drop your data file here"
              : "Drag & drop a data file"}
          </h5>

          <p className="text-body-secondary mb-3">or click to browse</p>

          <div className="btn btn-primary">Choose File</div>

          <small className="d-block text-body-secondary mt-3">
            Supported formats: JSON, XML, CSV, TXT
          </small>
        </div>
      </div>
    </div>
  );
}
