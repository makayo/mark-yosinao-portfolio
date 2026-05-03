const Nav = ({ darkMode, onToggle }) => (
  <nav style={s.nav}>
    <div style={s.logo}>
      MY<span style={{ color: "var(--amber)" }}>.</span>
    </div>
    <div style={s.right}>
      <ul style={s.links}>
        <li>
          <a href="#work" style={s.link}>
            Work
          </a>
        </li>
        <li>
          <a href="#contact" style={s.link}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://github.com/makayo"
            target="_blank"
            rel="noreferrer"
            style={s.link}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mark-yosinao-4914a3200"
            target="_blank"
            rel="noreferrer"
            style={s.link}
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <button onClick={onToggle} style={s.toggle}>
        {darkMode ? "☀ Light" : "☾ Dark"}
      </button>
    </div>
  </nav>
);

const s = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "28px 0 0",
    marginBottom: 80,
  },
  logo: {
    fontFamily: "Syne, sans-serif",
    fontWeight: 800,
    fontSize: 18,
    color: "var(--text)",
    letterSpacing: -0.5,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 24,
  },
  links: {
    display: "flex",
    gap: 28,
    listStyle: "none",
    alignItems: "center",
  },
  link: {
    color: "var(--muted)",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  toggle: {
    background: "var(--amber)",
    border: "none",
    borderRadius: 8,
    color: "#080b14",
    fontSize: 12,
    fontWeight: 700,
    padding: "7px 16px",
    cursor: "pointer",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontFamily: "DM Sans, sans-serif",
    whiteSpace: "nowrap",
  },
};

export default Nav;
