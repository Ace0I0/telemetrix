import { useState } from "react";
import FileUpload from "../components/FileUpload";
import { useTelemetry } from "../context/TelemetryContext";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [error, setError] = useState(null);
  const { setData, setFileName } = useTelemetry();
  const navigate = useNavigate();

  function handleFile(file) {
    if (!file.name.endsWith(".csv")) {
      setError("Please upload a CSV file.");
      return;
    }

    setError(null);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split("\n").map((r) => r.split(","));
      setData(rows);

      navigate("/viewer");    // redirect to viewer
    };

    reader.readAsText(file);
  }

  return (
    <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-white text-5xl font-bold mb-4">
        Upload Telemetry CSV
      </h1>

      <p className="text-gray-300 mb-8 text-center max-w-xl">
        Drag & drop your CSV file, or click to upload.
      </p>

      <FileUpload onFileSelected={handleFile} />

      {error && (
        <p className="text-red-400 mt-6">{error}</p>
      )}
    </div>
  );
}
