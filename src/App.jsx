import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import DeveloperTab from "./components/DeveloperTab";
import BusinessTab from "./components/BusinessTab";
import ArtistTab from "./components/ArtistTab";
import Contact from "./components/Contact";
import FadeIn from "./components/FadeIn";

export default function App() {
  const [activeTab, setActiveTab] = useState("developer");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={darkMode ? "theme-dark" : "theme-light"}
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 24px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Nav darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Tabs active={activeTab} onChange={setActiveTab} />
        </FadeIn>
        <FadeIn delay={0.15}>
          {activeTab === "developer" && <DeveloperTab />}
          {activeTab === "business" && <BusinessTab />}
          {activeTab === "artist" && <ArtistTab />}
        </FadeIn>
        <FadeIn delay={0.2}>
          <Contact />
        </FadeIn>
        <FadeIn delay={0.25}>
          <footer
            style={{
              textAlign: "center",
              padding: "40px 0 0",
              fontSize: 12,
              color: "var(--muted)",
              borderTop: "1px solid var(--border)",
              marginTop: 60,
            }}
          >
            © 2026 Mark Yosinao. Built with React + Vite.
          </footer>
        </FadeIn>
      </div>
    </div>
  );
}
