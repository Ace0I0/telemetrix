import { createContext, useContext, useState } from "react";

const TelemetryContext = createContext(null);

// Provider component
export function TelemetryProvider({ children }) {
  const [data, setData] = useState(null);         // Parsed CSV rows
  const [fileName, setFileName] = useState(null); // CSV filename

  const value = {
    data,
    setData,
    fileName,
    setFileName,
  };

  return (
    <TelemetryContext.Provider value={value}>
      {children}
    </TelemetryContext.Provider>
  );
}

// Hook for usage
export function useTelemetry() {
  const context = useContext(TelemetryContext);
  if (!context) {
    throw new Error("useTelemetry must be used inside <TelemetryProvider>");
  }
  return context;
}
