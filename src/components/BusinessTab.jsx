import SectionLabel from './SectionLabel'
import makayoLogo from '../assets/makayo-logo.png'
import '../styles/Business.css'
import '../styles/Developer.css'

const services = [
  {
    title: 'Full Stack Development',
    desc: 'End-to-end web application development using React, Node.js, and cloud-backed databases. From UI to API to deployment.',
  },
  {
    title: 'AI Integration',
    desc: 'Integrate large language models, RAG pipelines, and AI-powered features into existing or new software products.',
  },
  {
    title: 'Database Architecture',
    desc: 'Design and implement relational databases with PostgreSQL and Supabase — including schema design, migrations, and data integrity.',
  },
  {
    title: 'Technical Consulting',
    desc: 'Advisory services for small businesses and organizations looking to modernize their technology stack or launch new digital products.',
  },
]

const BusinessTab = () => (
  <div>
    <div className="biz-hero">
      <img src={makayoLogo} alt="Makayo Bridge Services LLC" className="biz-logo" />
      <div className="biz-hero-text">
        <h2 className="biz-name">Makayo Bridge Services LLC</h2>
        <p className="biz-tagline">
          Bridging the gap between technology and real-world impact.
          Independent software development and consulting based in Seattle, WA.
        </p>
        <a href="mailto:markyosinao@yahoo.com" className="biz-cta">
          Work With Me
        </a>
      </div>
    </div>

    <SectionLabel>Services</SectionLabel>
    <div className="services-grid">
      {services.map(({ title, desc }) => (
        <div key={title} className="service-card">
          <div className="service-title">{title}</div>
          <p className="service-desc">{desc}</p>
        </div>
      ))}
    </div>

    <SectionLabel>Certifications</SectionLabel>
    <div className="biz-certs">
      {[
        {
          name: 'AWS Academy Graduate',
          sub: 'Generative AI Foundations',
          status: 'earned',
          href: 'https://www.credly.com/badges/a0f2cac4-c26c-4504-acfc-8b883c300152/linked_in',
        },
        {
          name: 'AWS Academy',
          sub: 'Cloud Foundations',
          status: 'in progress',
          href: 'https://awsacademy.instructure.com/courses/167333',
        },
      ].map(({ name, sub, status, href }) => (
        <a key={sub} href={href} target="_blank" rel="noreferrer" className="cert-card">
          <div className="cert-top">
            <div className="cert-name">{name}</div>
            <span className={`cert-status ${status === 'in progress' ? 'in-progress' : 'earned'}`}>
              {status}
            </span>
          </div>
          <div className="cert-sub">{sub}</div>
          <div className="cert-issuer">Amazon Web Services</div>
        </a>
      ))}
    </div>

    <SectionLabel>Contact</SectionLabel>
    <div className="biz-contact">
      <div className="biz-contact-info">
        <div className="biz-contact-item">
          <span className="biz-contact-label">Email</span>
          <span className="biz-contact-value">markyosinao@yahoo.com</span>
        </div>
        <div className="biz-contact-item">
          <span className="biz-contact-label">Location</span>
          <span className="biz-contact-value">Seattle, WA</span>
        </div>
        <div className="biz-contact-item">
          <span className="biz-contact-label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/mark-yosinao-4914a3200"
            target="_blank"
            rel="noreferrer"
            className="biz-contact-link"
          >
            Makayo Bridge Services
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default BusinessTab;