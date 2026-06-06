export default function DataUploader({ onSchemaUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // Use FileReader to extract the text content from the file
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileText = e.target.result;

      // Send the raw text content back up to App.jsx state
      onSchemaUpload(fileText);
    };

    reader.readAsText(file);
  };

  return (
    <div className="mb-3 data-uploader">
      <label htmlFor="data-file-input" className="form-label">
        Upload Schema File:
      </label>
      <input
        id="data-file-input"
        type="file"
        accept=".json,.xml,.csv,.txt" // Restrict to text/data files
        onChange={handleFileChange}
      />
    </div>
  );
}
