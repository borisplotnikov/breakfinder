import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function Uploader({ label, onUpload }) {
  const [fileName, setFileName] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const processFile = (file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      onUpload(e.target.result);

      setFileName(file.name);
      setUploaded(true);
    };

    reader.readAsText(file);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setUploaded(false);
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
    <div
      {...getRootProps()}
      className={`card border-2 ${
        isDragActive
          ? "border-primary bg-primary-subtle"
          : uploaded
            ? "border-success bg-success-subtle"
            : "border-secondary-subtle"
      }`}
    >
      <input {...getInputProps()} />

      <div className="card-body text-center">
        <i
          className={`bi fs-1 d-block ${
            uploaded
              ? "bi-check-circle-fill text-success"
              : "bi-cloud-arrow-up text-primary"
          }`}
        />

        <div className="btn btn-primary">{label}</div>

        {/* 🔥 Always-rendered status line (prevents layout shift) */}
        <div className="mt-2 small text-muted">
          {uploaded && fileName
            ? `Uploaded: ${fileName}`
            : "No files uploaded yet"}
        </div>
      </div>
    </div>
  );
}

export default function Uploaders({ onDataUpload, onSchemaUpload }) {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-6">
          <Uploader label="Upload Data" onUpload={onDataUpload} />
        </div>
        <div className="col-6">
          <Uploader label="Upload Schema" onUpload={onSchemaUpload} />
        </div>
      </div>
    </div>
  );
}
