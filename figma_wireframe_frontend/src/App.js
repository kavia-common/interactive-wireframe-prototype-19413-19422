import React, { useState, useEffect } from "react";
import "./App.css";

// PUBLIC_INTERFACE
function Sidebar({ onNavigate, activeScreen }) {
  // Sidebar menu items shared between screens "86" and "92"
  const navItems = [
    { label: "Dashboard", icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f36e53a-c54e-40de-b151-93b6ebb1d7a5", target: "dashboard" },
    { label: "Devices", icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/012ba87b-f576-4faa-ae88-12ebf81edcb1", target: "devices" },
    { label: "Analytics", icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee0ee0ba-b8bd-4136-9a37-aa99c13a2ebd", target: "analytics" },
    { label: "Firmware and Apps", icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3b2ad27-8828-4aef-b7b7-4b7829be835f", target: "firmware" },
    { label: "Users", icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c66e1fe9-1cff-40a4-8817-9fec9db7c88a", target: "users" },
    { label: "More", icon: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b64c2e8-2bd7-4fb0-adc2-0dd24431821a", 
      badge: 4, 
      chevron: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54a7d4f2-efba-49be-bae7-c54b6cabb6f0",
      target: "more"
    },
    // Last item as section: Config Server, no icon
    { label: "Config Server", target: "config", section: true }
  ];
  return (
    <nav
      style={{
        width: 220,
        background: "var(--color-white)",
        borderRight: "1px solid var(--color-dde1e6)",
        flexShrink: 0
      }}>
      <div style={{ padding: 16 }}>
        {/* Logo */}
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          <div
            className="flex-row align-center gap-s"
            style={{ justifyContent: "center" }}>
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/563db0db-a273-4361-8b20-6ac9b03dee60"
              alt="Company Logo"
              style={{ width: 24, height: 24 }}
            />
            <span className="typo-62">Company</span>
          </div>
        </div>
        <hr className="line" />
        {/* Sidebar Nav */}
        <div className="flex-col gap-s" style={{ marginTop: 32 }}>
          {navItems.map((item, idx) =>
            item.section ? (
              <div
                key={item.label}
                className="flex-row align-center gap-s"
                style={{
                  padding: "12px 8px",
                  marginTop: 32,
                  cursor: "pointer",
                  fontWeight: activeScreen === "main" ? 700 : 500
                }}
                onClick={() => onNavigate("main")}
                tabIndex={0}
                role="button"
                aria-label="Show Profile Table"
              >
                <span className="typo-63">{item.label}</span>
              </div>
            ) : (
              <div
                key={item.label}
                className="flex-row align-center gap-s"
                style={{
                  padding: "12px 8px",
                  fontWeight: 500,
                  background: "#fff"
                }}
                tabIndex={-1}
                role="presentation"
              >
                <img src={item.icon} alt="" style={{ width: 24, height: 24 }} />
                <span className="typo-63">{item.label}</span>
                {item.badge && (
                  <span style={{
                    background: "var(--color-697077)",
                    color: "var(--color-ffffff)",
                    fontSize: 12,
                    borderRadius: 12,
                    padding: "2px 8px",
                    marginLeft: 8
                  }}>{item.badge}</span>
                )}
                {item.chevron && (
                  <img
                    src={item.chevron}
                    alt=""
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 4
                    }}
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

// PUBLIC_INTERFACE
function TopBar({ onNavigateToCover }) {
  return (
    <div
      style={{
        height: 80,
        width: "100%",
        background: "var(--color-white)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        justifyContent: "flex-end"
      }}>
      {/* User avatar and info, clicking avatar returns to Cover */}
      <div className="flex-row align-center gap-m">
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bad260a8-6989-4393-936c-32ba3af2afcf"
          style={{
            width: 32,
            height: 32,
            borderRadius: "100%",
            cursor: "pointer"
          }}
          alt="avatar"
          onClick={onNavigateToCover}
          tabIndex={0}
          title="Back to Cover"
        />
        <span className="typo-66">John.doe</span>
        <span className="typo-67">Super user</span>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function CoverScreen({ onEnter }) {
  // From screen_Cover.html structure
  return (
    <div className="container flex-col align-center"
      style={{
        minHeight: "100vh",
        justifyContent: "center",
        background: "var(--color-001d6c)",
        cursor: "pointer"
      }}
      onClick={onEnter}
      tabIndex={0}
      role="button"
      aria-label="Continue to App"
    >
      <div style={{ width: "100%", maxWidth: 1760, marginTop: 80, marginBottom: 40 }}>
        <div className="flex-col" style={{ gap: 16 }}>
          <span className="typo-60"
            style={{
              display: "block",
              fontSize: 160,
              lineHeight: "192px",
              color: "var(--color-ffffff)"
            }}>iCX</span>
          <hr className="line" style={{
            background: "var(--color-ffffff)",
            height: 4,
            width: "100%"
          }} />
        </div>
      </div>
      <div style={{ marginTop: 60 }}>
        <span className="typo-61" style={{
          color: "var(--color-ffffff)",
          fontSize: 160,
          lineHeight: "192px"
        }}>Config Server</span>
      </div>
      <span
        className="typo-63"
        style={{
          marginTop: 64,
          fontSize: 20,
          color: "#c1c7cd",
          letterSpacing: 1
        }}
      >Click anywhere to enter</span>
    </div>
  );
}

// PUBLIC_INTERFACE
function MainScreen({ onShowRules }) {
  // Profile Table ("86" screen)
  return (
    <div className="flex-row" style={{ height: "100vh" }}>
      <Sidebar onNavigate={() => {}} activeScreen="main" />
      <main
        style={{
          flex: 1,
          background: "var(--color-f2f4f8)",
          minHeight: "100vh"
        }}>
        <TopBar onNavigateToCover={() => window.location.reload()} />
        <section className="container" style={{ paddingTop: 40 }}>
          <div className="flex-row gap-l" style={{ alignItems: "center" }}>
            <span className="typo-74">Add Profile to add rules</span>
            {/* Button to go to Rules (92) screen */}
            <button className="btn" onClick={onShowRules} aria-label="Show Rules Table">
              Add Rule
            </button>
          </div>
          <div style={{ marginTop: 48 }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Profile Name</th>
                  <th>Repository URL</th>
                  <th>Description</th>
                  <th>Created Date</th>
                  <th>Modified Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="typo-73">Profile Name</span></td>
                  <td><span className="typo-73">Enter repository URL</span></td>
                  <td><span className="typo-73">Description</span></td>
                  <td><span className="typo-73">Created Date</span></td>
                  <td><span className="typo-73">Modified Date</span></td>
                  <td>
                    <span className="typo-73">Actions</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: "right", marginTop: 16 }}>
              {/* Back to Cover */}
              <button className="btn btn-secondary" onClick={() => window.location.reload()} aria-label="Back to Cover">Back to Cover</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
function RulesScreen({ onBack }) {
  // Rules Table ("92" screen)
  return (
    <div className="flex-row" style={{ height: "100vh" }}>
      <Sidebar onNavigate={() => {}} activeScreen="rules" />
      <main
        style={{
          flex: 1,
          background: "var(--color-f2f4f8)",
          minHeight: "100vh"
        }}>
        <TopBar onNavigateToCover={() => window.location.reload()} />
        <section className="container" style={{ paddingTop: 40 }}>
          <div className="flex-row gap-l" style={{ alignItems: "center" }}>
            <span className="typo-74">Add Profile to add rules</span>
            <button className="btn" aria-label="Do nothing (prototype)">
              Add Rule
            </button>
          </div>
          <div style={{ marginTop: 48 }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Rule Name</th>
                  <th>Priority</th>
                  <th>Description</th>
                  <th>Created Date</th>
                  <th>Modified Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="typo-73">TEstProfile</span></td>
                  <td><span className="typo-73">High</span></td>
                  <td><span className="typo-73">TEstProfile</span></td>
                  <td><span className="typo-73">17 Feb 2025, 11:00:00</span></td>
                  <td><span className="typo-73">17 Feb 2025, 11:00:00</span></td>
                  <td>
                    <span className="typo-73" style={{ color: "var(--color-0f62fe)", cursor: "pointer" }}>
                      Edit
                    </span>{" "}
                    <span className="typo-73" style={{ color: "var(--color-da1e28)", marginLeft: 8, cursor: "pointer" }}>
                      Delete
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ textAlign: "right", marginTop: 16 }}>
              {/* Back to Profiles */}
              <button className="btn btn-secondary" onClick={onBack} aria-label="Back to Profile Table">Back to Profiles</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  // "cover", "main", "rules"
  const [screen, setScreen] = useState("cover");

  // Keyboard accessibility for Enter on Cover
  useEffect(() => {
    function handleKey(e) {
      if (screen === "cover" && (e.key === "Enter" || e.key === " ")) {
        setScreen("main");
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [screen]);

  // PUBLIC_INTERFACE
  const handleEnter = () => setScreen("main");
  const handleShowRules = () => setScreen("rules");
  const handleBack = () => setScreen("main");

  switch (screen) {
    case "cover":
      return <CoverScreen onEnter={handleEnter} />;
    case "main":
      return <MainScreen onShowRules={handleShowRules} />;
    case "rules":
      return <RulesScreen onBack={handleBack} />;
    default:
      return null;
  }
}

export default App;
