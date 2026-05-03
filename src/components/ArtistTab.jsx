import SectionLabel from "./SectionLabel";
import "../styles/Artist.css";

const ArtistTab = () => (
  <div>
    <SectionLabel>Artist Statement</SectionLabel>
    <div className="about-card">
      <p className="about-text">
        Placeholder — add your artist statement here. Talk about your medium,
        your inspiration, your process, and what drives your creative work.
      </p>
      <div className="about-stats">
        {[
          ["—", "Medium"],
          ["—", "Style"],
          ["—", "Years Active"],
        ].map(([val, label]) => (
          <div key={label} className="stat-item">
            <span className="stat-value" style={{ color: "var(--purple)" }}>
              {val}
            </span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>

    <SectionLabel>Gallery</SectionLabel>
    <div className="art-grid">
      {["🖼️", "🎨", "✏️", "🖼️", "🎨", "✏️"].map((icon, i) => (
        <div key={i} className="art-cell">
          <span className="art-icon">{icon}</span>
          <span>Coming Soon</span>
        </div>
      ))}
    </div>

    <SectionLabel>Creative Work</SectionLabel>
    <div className="creative-grid">
      {[
        ["🎵", "Music / Audio"],
        ["🎭", "Performance / Other"],
        ["📸", "Photography"],
      ].map(([icon, label]) => (
        <div key={label} className="project-placeholder">
          <span className="ph-icon">{icon}</span>
          <p>{label} — coming soon</p>
        </div>
      ))}
    </div>
  </div>
);

export default ArtistTab;
