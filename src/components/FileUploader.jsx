import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUploader({ label, onUpload }) {
  const processFile = (file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      onUpload(e.target.result);
    };

    reader.readAsText(file);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      processFile(acceptedFiles[0]);
    },
    [onUpload],
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
      >
        <input {...getInputProps()} />

        <div className="card-body text-center py-0 pb-4">
          <i className="bi bi-cloud-arrow-up fs-1 text-primary d-block"></i>

          <div className="btn btn-primary">{label}</div>
        </div>
      </div>
    </div>
  );
}
