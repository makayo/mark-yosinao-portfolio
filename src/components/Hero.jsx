import "../styles/Hero.css";

const Hero = () => (
  <section className="hero">
    <div className="hero-mesh" />
    <div className="hero-content">
      <div className="hero-eyebrow">
        <span className="pulse-dot" />
        Available for opportunities
      </div>
      <h1 className="hero-title">
        Mark
        <br />
        <span className="hero-outline">Yosinao</span>
      </h1>
      <p className="hero-sub">
        Full stack developer with a focus on React, applied AI, and data-driven
        applications. I build clean, functional software that solves real
        problems — from web interfaces to machine learning pipelines.
      </p>
      <div className="hero-actions">
        <a href="#work" className="btn-primary">
          View My Work
        </a>
        <a href="#contact" className="btn-ghost">
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          download="Mark_Yosinao_Resume.pdf"
          className="btn-ghost"
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
