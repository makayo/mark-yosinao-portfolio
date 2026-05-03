const Tabs = ({ active, onChange }) => (
  <div id="work" style={s.wrap}>
    <div style={s.tabs}>
      {["developer", "business", "artist"].map((tab) => (
        <button
          key={tab}
          style={{ ...s.btn, ...(active === tab ? s.active : {}) }}
          onClick={() => onChange(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  </div>
);

const s = {
  wrap: { marginBottom: 48 },
  tabs: {
    display: "flex",
    gap: 4,
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    padding: 5,
    width: "fit-content",
  },
  btn: {
    background: "transparent",
    border: "none",
    color: "var(--muted)",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "9px 22px",
    borderRadius: 10,
    cursor: "pointer",
    letterSpacing: 0.3,
    transition: "all 0.2s",
  },
  active: { background: "var(--amber)", color: "#080b14" },
};

export default Tabs;
