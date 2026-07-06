import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function Uploader({ label, fileName, fileContent, onUpload }) {
  const processFile = (file) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      onUpload(e.target.result, file.name);
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

  const hasFile = fileContent.length > 0;

  return (
    <div
      {...getRootProps()}
      className={`card border-2 h-100 ${
        isDragActive
          ? "border-primary bg-primary-subtle"
          : hasFile
            ? "border-success"
            : "border-secondary-subtle"
      }`}
      style={{ cursor: "pointer" }}
    >
      <input {...getInputProps()} />

      <div className="card-header text-center">
        <strong>{label}</strong>
      </div>

      <div className="card-body p-2">
        {!hasFile ? (
          <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
            <i className="bi bi-cloud-arrow-up fs-1 text-primary mb-2"></i>

            <button type="button" className="btn btn-primary" tabIndex={-1}>
              Select File
            </button>

            <small className="text-muted mt-3">No file uploaded yet</small>
          </div>
        ) : (
          <>
            <div className="small text-success mb-2 text-center">
              {fileName}
            </div>

            <pre
              className="bg-light border rounded p-2 font-monospace small mb-0"
              style={{
                height: "220px",
                overflow: "auto",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {fileContent}
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

export default function Uploaders({
  dataContent,
  schemaContent,
  dataFileName,
  schemaFileName,
  onDataUpload,
  onSchemaUpload,
}) {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-6">
          <Uploader
            label="Data File"
            fileName={dataFileName}
            fileContent={dataContent}
            onUpload={onDataUpload}
          />
        </div>

        <div className="col-6">
          <Uploader
            label="Schema File"
            fileName={schemaFileName}
            fileContent={schemaContent}
            onUpload={onSchemaUpload}
          />
        </div>
      </div>
    </div>
  );
}
