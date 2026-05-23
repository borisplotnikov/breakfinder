import { useState } from "react";

export default function Uploader() {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  return (
    <div className="uploader">
      <input type="file" onChange={handleFileChange} />

      {file && (
        <div className="file-info">
          <p>Selected file:</p>
          <p>
            <strong>{file.name}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
