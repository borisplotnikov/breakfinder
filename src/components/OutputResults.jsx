export default function OutputResults({ results }) {
  // Dummy results, replace with a output data.
  results = [
    "[MATCH] Target schema found at line 14: 'user_id'",
    "[MATCH] Target schema founc at lne 45: 'user_id'",
    "[MATCH] Target schema found at line 82: 'user_id'",
  ];

  return (
    <div className="">
      <h5 className="text-center d-block">Results</h5>
      <pre className="border rounded">
        <code>
          {results.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </code>
      </pre>
    </div>
  );
}
