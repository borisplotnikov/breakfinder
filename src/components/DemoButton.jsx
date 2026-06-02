export default function DemoButton({ setData, setSchema }) {
  const handleLoadDemo = () => {
    // 1. Mock data file string (e.g., a raw JSON string)
    const mockDataString = JSON.stringify(
      {
        user: "John Doe",
        role: "Admin",
        metadata: { active: true },
      },
      null,
      2,
    );

    // 2. Mock schema file string rules
    const mockSchemaString = JSON.stringify(
      {
        required: ["user", "role"],
        properties: {
          user: { type: "string" },
          role: { type: "string" },
        },
      },
      null,
      2,
    );

    // 3. Push the mock strings straight into App.jsx state
    setData(mockDataString);
    setSchema(mockSchemaString);

    alert("Demo files loaded successfully!");
  };

  return (
    <div className="demo-button-container">
      <button type="button" onClick={handleLoadDemo}>
        Load Demo Data
      </button>
    </div>
  );
}
