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
    tag: "AI / NLP",
    tagClass: "tag-ai",
    title: "Chamorro Language AI Initiative",
    desc: "Community-driven project to build open Chamorro language datasets, scraping pipelines, and training resources for future translation and language models.",
    stack: ["Python", "NLP", "Data Pipelines", "Open Source"],
    href: "https://github.com/makayo/Chamorro-Language-AI-Initiative",
    featured: true,
    highlights: [
      "Indigenous Pacific language preservation",
      "Open dataset pipeline architecture",
      "Scraping and preprocessing workflows",
      "Foundation for future translation models",
      "Community-driven and publicly available",
    ],
  },
  {
    tag: "React + Vite",
    tagClass: "tag-react",
    title: "CRUD Query App",
    desc: "Full CRUD operations against the JSONPlaceholder API using TanStack Query. Implements GET, POST, PUT, PATCH, and DELETE with optimistic UI updates and dynamic filtering.",
    stack: ["React", "Vite", "TanStack Query v5"],
    href: "https://github.com/makayo/csc142-spring-2026",
    featured: false,
    highlights: [],
  },
  {
    tag: "AI / ML",
    tagClass: "tag-ai",
    title: "LLM Fine-Tuning with LoRA",
    desc: "Sentiment classification using LoRA to fine-tune T5-small on the IMDb dataset. Includes evaluation with accuracy, precision, recall, macro F1, and confusion matrix analysis.",
    stack: ["Python", "Jupyter Notebook", "HuggingFace", "LoRA", "T5"],
    href: "https://github.com/makayo/AI-ML-Assignment-7-LLM-FineTuning-LoRA",
    featured: false,
    highlights: [],
  },
  {
    tag: "AI / ML",
    tagClass: "tag-ai",
    title: "Simple RAG Pipeline",
    desc: "Retrieval-Augmented Generation demo using Python to embed, retrieve, and generate context-aware answers from a document corpus.",
    stack: ["Python", "Jupyter Notebook", "RAG", "Embeddings"],
    href: "https://github.com/makayo/AI-ML-Assignment-5-Simple-RAG",
    featured: false,
    highlights: [],
  },
  {
    tag: "Node.js",
    tagClass: "tag-node",
    title: "Express Node.js Server",
    desc: "Basic Express server with simple routing, conditional routing, regex routes, dynamic parameters, query string handling, and a 404 handler.",
    stack: ["Node.js", "Express", "JavaScript"],
    href: "https://github.com/makayo/Build-a-Basic-Express-NodeJS-Serve",
    featured: false,
    highlights: [],
  },
  {
    tag: "UX / Figma",
    tagClass: "tag-fullstack",
    title: "Beacon Safety Companion",
    desc: "Figma prototype for a safety companion mobile app designed to connect users to the nearest safety resources in real time.",
    stack: ["Figma", "UX Design", "Prototyping"],
    href: "https://github.com/makayo/Beacon-safety-companion-app-Figma-prototype",
    featured: false,
    highlights: [],
  },
  {
    tag: "React + Vite",
    tagClass: "tag-react",
    title: "Dog Explorer App",
    desc: "React app that fetches and displays dog breed data from the Dog API using TanStack Query with full loading, error, and success state handling.",
    stack: ["React", "TanStack Query v5", "Dog API"],
    href: "https://github.com/makayo/csc142-spring-2026",
    featured: false,
    highlights: [],
  },
  {
    tag: "Supabase + SQL",
    tagClass: "tag-fullstack",
    title: "StreamFlix DB",
    desc: "PostgreSQL database with Foreign Key constraints and ON DELETE RESTRICT to prevent orphaned ratings — demonstrating referential integrity in a data warehouse context.",
    stack: ["Supabase", "PostgreSQL", "SQL"],
    href: "https://github.com/makayo/csc142-spring-2026",
    featured: false,
    highlights: [],
  },
];

const categories = [
  "All",
  "React + Vite",
  "AI / NLP",
  "AI / ML",
  "Node.js",
  "Supabase + SQL",
  "UX / Figma",
];

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
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-pill">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Code
                </a>
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
