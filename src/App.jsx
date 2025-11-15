import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UploadPage from "./pages/UploadPage";
import HealthMonitor from "./pages/HealthMonitor";
import DetailedMonitor from "./pages/DetailedMonitor";
import HelpPage from "./pages/HelpPage";
import SettingsPage from "./pages/SettingsPage";

import { TelemetryProvider } from "./context/TelemetryContext";

import StaggeredMenu from "./components/StaggeredMenu";

function App() {

  const menuItems = [
    { label: "Upload CSV", link: "/" },
    { label: "Health Monitor", link: "/health" },
    { label: "Detailed Monitor", link: "/detailed" },
    { label: "Help & About", link: "/help" },
    { label: "Settings", link: "/settings" },
  ];

  return (
    <TelemetryProvider>
      <Router>

        {/* Staggered GSAP Menu */}
        <StaggeredMenu
          items={menuItems}
          displaySocials={false}
          position="right"
          accentColor="#C71E1D"
          colors={["#111111", "#222222", "#C71E1D"]}
          logoUrl="/src/assets/react.svg"   // Replace with real logo
          menuButtonColor="#FFFFFF"
          openMenuButtonColor="#C71E1D"
        />

        {/* Page content below menu */}
        <div className="min-h-screen bg-background text-textPrimary flex flex-col mt-28">
          <main className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<UploadPage />} />
              <Route path="/health" element={<HealthMonitor />} />
              <Route path="/detailed" element={<DetailedMonitor />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>

          <footer className="text-center text-xs text-gray-500 py-4 border-t border-neutral">
            © 2025 Telemetrix — Vehicle Telemetry Dashboard
          </footer>
        </div>

      </Router>
    </TelemetryProvider>
  );
}

export default App;
