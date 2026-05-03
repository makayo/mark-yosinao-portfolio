import SectionLabel from "./SectionLabel";

const Contact = () => (
  <div id="contact">
    <SectionLabel>Contact</SectionLabel>
    <div style={s.card}>
      <div>
        <h3 style={s.heading}>Let's work together</h3>
        <p style={s.sub}>
          Open to internships, collaborations, and new opportunities.
        </p>
      </div>
      <div style={s.links}>
        {[
          { label: "GitHub", href: "https://github.com/makayo" },
          {
            label: "LinkedIn (Makayo Bridge)",
            href: "https://www.linkedin.com/in/mark-yosinao-4914a3200",
          },
          {
            label: "LinkedIn (Personal)",
            href: "https://www.linkedin.com/in/mark-yosinao-64191638b/",
          },
          { label: "Email", href: "mailto:markyosinao@yahoo.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={s.link}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const s = {
  card: {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 16,
    padding: 32,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
  },
  heading: {
    fontFamily: "Syne, sans-serif",
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  sub: { fontSize: 13, color: "var(--muted)" },
  links: { display: "flex", gap: 10, flexWrap: "wrap" },
  link: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "10px 16px",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--dim)",
    textDecoration: "none",
  },
};

export default Contact;
