import Home from "./pages/Home";
import BeamsBackground from "./components/BeamsBackground";
import StaggeredMenu from "./components/StaggeredMenu";

export default function App() {

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Upload Data", ariaLabel: "Upload telemetry", link: "/upload" },
    { label: "Viewer", ariaLabel: "View telemetry", link: "/viewer" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <BeamsBackground rotation={45} />
      </div>

      {/* Menu (top-right toggle) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <StaggeredMenu
          className="pointer-events-auto"
          position="right"
          items={menuItems}
          socialItems={[]}
          displaySocials={false}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          accentColor="#ffffff"
        />
      </div>

      {/* Home Page Content */}
      <Home />
    </div>
  );
}
