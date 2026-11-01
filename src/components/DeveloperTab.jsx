import { useState } from "react";
import SectionLabel from "./SectionLabel";
import "../styles/Developer.css";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "TanStack Query",
      "Vite",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "Python"],
  },
  {
    label: "Database",
    skills: ["Supabase", "PostgreSQL", "MongoDB", "SQL"],
  },
  {
    label: "AI / ML",
    skills: [
      "LLM Fine-Tuning",
      "Prompt Engineering",
      "RAG",
      "TensorFlow",
      "HuggingFace",
      "Jupyter Notebook",
    ],
  },
  {
    label: "General",
    skills: ["Git & GitHub", "Figma", "REST APIs", "HTML5", "CSS3", "Java"],
  },
];

const featuredSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "Vite",
  "Node.js",
  "Express",
  "Python",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "LLM Fine-Tuning",
  "Prompt Engineering",
  "RAG",
  "TensorFlow",
  "HuggingFace",
  "Jupyter Notebook",
];

const projects = [
  {
    tag: "Mobile",
    tagClass: "tag-react",
    title: "HIVE",
    status: "In development",
    desc: "A map-first social app for personal electric vehicle riders (e-scooters, EUCs, e-boards, e-bikes). Riders find nearby people, meetups, and groups on a live map instead of a feed.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Real-time"],
    href: null,
    live: null,
    featured: true,
    highlights: [
      "Authentication with session persistence and password recovery",
      "Live \"riding now\" map with real-time presence",
      "Groups with real-time chat and shared photo galleries",
      "Events with RSVP and map directions; ride history and stats",
      "Next: points of interest, hazard reporting, payments",
    ],
  },
  {
    // TODO: confirm North Seattle College is OK with this being shown publicly.
    tag: "Node.js",
    tagClass: "tag-node",
    title: "NSC Classroom Translation Tool",
    status: "Built & tested · Awaiting classroom pilot",
    desc: "Live multilingual captions and headphone audio for ESL students at North Seattle College. The instructor speaks English; each student follows along in one of nine languages and downloads a translated study guide at the end of class.",
    stack: ["Node.js", "Express", "WebSockets", "Google Cloud Translation", "Web Speech API"],
    href: null,
    live: null,
    featured: true,
    highlights: [
      "Real-time pipeline: speech recognition → translation → live captions and audio",
      "Privacy by design: no login, no audio recording, nothing stored after class",
      "Glossary protection keeps technical terms from being mistranslated",
      "Right-to-left support for Arabic and Farsi",
      "Tested end to end with real speech, translation, and audio",
    ],
  },
  {
    // TODO: confirm North Seattle College is OK with this being shown publicly.
    tag: "Web",
    tagClass: "tag-fullstack",
    title: "OCE Multilingual Greeter Kiosk",
    status: "Built · Translations in native-speaker review",
    desc: "A self-service lobby kiosk for North Seattle College's Opportunity Center that helps visitors find services, directions, and staff help in ten languages, running fully offline from a USB drive.",
    stack: ["JavaScript", "HTML/CSS", "Web Speech API", "Accessibility", "Offline-first"],
    href: null,
    live: null,
    featured: true,
    highlights: [
      "Works with no internet, server, or cloud services",
      "Pre-approved translations instead of live machine translation, for accuracy",
      "Text-to-speech with replay and speed control",
      "Right-to-left Arabic and Farsi without breaking the control layout",
      "Anonymous local usage stats with a staff dashboard and CSV export",
    ],
  },
  {
    tag: "Web",
    tagClass: "tag-fullstack",
    title: "Ghost Architecture Visualizer",
    status: "Completed",
    desc: "An interactive dashboard mapping the architecture of Ghost, the open-source publishing platform, with a documented audit of an AI-generated architecture breakdown checked against Ghost's source code.",
    stack: ["JavaScript", "HTML/CSS", "Software Architecture", "Accessibility", "AI Evaluation"],
    href: "https://github.com/makayo/ghost-arch-visualizer",
    live: "https://makayo.github.io/ghost-arch-visualizer/",
    featured: true,
    highlights: [
      "Clickable map of 24 components across five architecture layers",
      "Step-by-step walkthroughs of five real request flows",
      "AI audit: 7 claims verified, 6 corrected, 1 partly verified, each with evidence",
      "Accessible and secure by default: skip link, focus styles, no innerHTML",
    ],
  },
  {
    // TODO: repo is private. Make it public (check for keys first) or add a live demo link.
    tag: "AI / ML",
    tagClass: "tag-ai",
    title: "Guam AI Chatbot",
    status: "Prototype",
    desc: "A cultural preservation app for learning and translating the Chamoru language, with experimental English ↔ Chamoru translation powered by a local LLM, a learning mode with word of the day and badges, and community feedback for corrections.",
    stack: ["React", "Node.js", "Express", "Ollama", "LLM"],
    href: null,
    live: null,
    featured: false,
    highlights: [],
  },
  {
    tag: "AI / ML",
    tagClass: "tag-ai",
    title: "Secure Internal Chatbot",
    status: "Prototype · Team of 4",
    desc: "A proof-of-concept chatbot that runs on in-house infrastructure so sensitive data never leaves the organization, designed around compliance needs such as FERPA and HIPAA. Locally hosted LLM with a Next.js frontend and FastAPI backend. My role: built the admin API endpoints (stats, users, settings) and the admin dashboard for LLM settings and API key management, and redesigned the landing, login, and register pages.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "Hugging Face"],
    href: "https://github.com/makayo/Secure-Internal-Chatbot-Design",
    live: null,
    featured: false,
    highlights: [],
  },
  {
    tag: "AI / ML",
    tagClass: "tag-ai",
    title: "NSC Vetting Loop Checker",
    status: "Prototype",
    desc: "An AI-assisted quality-review dashboard for a three-stage approval process. Submissions are checked against written design specs by an LLM, and failed items get an auto-generated, rule-specific revision note.",
    stack: ["JavaScript", "HTML/CSS", "Anthropic API", "Prompt Engineering"],
    href: "https://github.com/makayo/nsc-vetting-loop-checker",
    live: null,
    featured: false,
    highlights: [],
  },
  {
    tag: "React",
    tagClass: "tag-react",
    title: "MarketCorp",
    status: "In progress",
    desc: "An e-commerce storefront foundation: product catalog and detail pages built in React with Tailwind CSS, backed by a Supabase PostgreSQL database, with a Postman collection for API testing.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    href: "https://github.com/makayo/marketcorp",
    live: null,
    featured: false,
    highlights: [],
  },
  {
    tag: "Python",
    tagClass: "tag-node",
    title: "Nearest Safety Resource Finder",
    status: "Completed",
    desc: "A Flask web app that finds the closest emergency resource to the user by combining IP-based geolocation with OpenStreetMap emergency data, reporting distance and direction. Includes a test script for edge cases.",
    stack: ["Python", "Flask", "REST APIs", "OpenStreetMap"],
    href: "https://github.com/makayo/nearest-safety-phone-finder",
    live: null,
    featured: false,
    highlights: [],
  },
  {
    // TODO: repo is private. Make it public or host it on GitHub Pages, then add href/live.
    tag: "Web",
    tagClass: "tag-fullstack",
    title: "MoonShooter Printing",
    status: "Completed · Client project",
    desc: "A multi-page marketing website built for a colleague's print business: product gallery, services, contact, and a design-upload form for customer project intake. Responsive layout with custom CSS, no framework.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    href: null,
    live: null,
    featured: false,
    highlights: [],
  },
];

const categories = ["All", "AI / ML", "Node.js", "React", "Mobile", "Python", "Web"];

const orgs = [
  {
    name: "North Seattle College",
    role: "Application Development Student",
    href: "https://northseattle.edu",
  },
  {
    name: "Makayo Bridge Services LLC",
    role: "Founder & Developer",
    href: "https://github.com/makayo",
  },
];

const certs = [
  {
    name: "AWS Academy Graduate",
    sub: "Generative AI Foundations",
    issuer: "Amazon Web Services",
    status: "earned",
    href: "https://www.credly.com/badges/a0f2cac4-c26c-4504-acfc-8b883c300152/linked_in",
  },
  {
    name: "AWS Academy",
    sub: "Cloud Foundations",
    issuer: "Amazon Web Services",
    status: "in progress",
    href: "https://awsacademy.instructure.com/courses/167333",
  },
];

const DeveloperTab = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <div>
      <div className="section-block">
        <SectionLabel>About</SectionLabel>
        <div className="about-card">
          <p className="about-text">
            Full stack developer based in Seattle, WA with hands-on experience
            building across the entire stack — React interfaces, REST APIs,
            Node.js servers, Python pipelines, and cloud-backed databases. I
            build practical, production-ready software with a strong focus on
            clean architecture, data integrity, and applied AI. My work spans
            web applications, machine learning pipelines, LLM fine-tuning, and
            language preservation technology.
          </p>
          <div className="about-stats">
            {[
              ["Full Stack", "Developer"],
              ["AI / ML", "Pipelines & LLMs"],
              ["Seattle", "Washington"],
            ].map(([val, label]) => (
              <div key={label} className="stat-item">
                <span className="stat-value">{val}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-block">
        <SectionLabel>Organizations</SectionLabel>
        <div className="orgs-grid">
          {orgs.map(({ name, role, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="org-card"
            >
              <div className="org-name">{name}</div>
              <div className="org-role">{role}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="section-block">
        <SectionLabel>Certifications</SectionLabel>
        <div className="certs-grid">
          {certs.map(({ name, sub, issuer, status, href }) => (
            <a
              key={sub}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <div className="cert-top">
                <div className="cert-name">{name}</div>
                <span
                  className={`cert-status ${status === "in progress" ? "in-progress" : "earned"}`}
                >
                  {status}
                </span>
              </div>
              <div className="cert-sub">{sub}</div>
              <div className="cert-issuer">{issuer}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="section-block">
        <SectionLabel>Skills</SectionLabel>
        <div className="skill-groups">
          {skillGroups.map(({ label, skills }) => (
            <div key={label} className="skill-group">
              <div className="skill-group-label">{label}</div>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-tag ${featuredSkills.includes(skill) ? "featured" : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block">
        <SectionLabel>Projects</SectionLabel>
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((p) => (
            <div
              key={p.title}
              className={`project-card ${p.featured ? "featured" : ""}`}
            >
              <div className="project-card-inner">
                <span className={`project-tag ${p.tagClass}`}>{p.tag}</span>
                <div className="project-title">{p.title}</div>
                {p.status && (
                  <div style={{ fontSize: "0.75rem", opacity: 0.75, margin: "0.25rem 0 0.5rem" }}>
                    {p.status}
                  </div>
                )}
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-pill">
                      {s}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Live Site
                    </a>
                  )}
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Code
                    </a>
                  )}
                  {!p.live && !p.href && (
                    <span className="project-link" style={{ opacity: 0.6, cursor: "default" }}>
                      Private repository · details on request
                    </span>
                  )}
                </div>
              </div>
              {p.featured && p.highlights.length > 0 && (
                <div className="highlights-box">
                  <div className="highlights-label">Highlights</div>
                  {p.highlights.map((h) => (
                    <div key={h} className="highlight-item">
                      — {h}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="view-all">
          <a
            href="https://github.com/makayo?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="view-all-link"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTab;
