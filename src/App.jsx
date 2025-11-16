import Home from "./pages/Home";
import BeamsBackground from "./components/BeamsBackground";
import StaggeredMenu from "./components/StaggeredMenu";
import logo from "./assets/Logo_Test.png";

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
          logoUrl={logo}
          position="right"
          items={menuItems}
          socialItems={[
            { label: 'GitHub', link: 'https://github.com/Ace0I0/telemetrix' },
            { label: 'MoTeC', link: 'https://www.motec.com.au/downloads' }
          ]}
          displaySocials={true}
          displayItemNumbering={true}

          menuButtonColor="#fff"
          openMenuButtonColor="#100f0f"
          accentColor="#1e3a8a"
          colors={["#000000", "#1a1a1a"]}
        />
      </div>

      {/* Home Page Content */}
      <Home />
    </div>
  );
}
