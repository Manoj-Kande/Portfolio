'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Database,
  Download,
  Layers3,
  Mail,
  Menu,
  Search,
  ShieldCheck,
  Gauge,
  X,
} from 'lucide-react'

type Chapter = {
  n: string
  title: string
  text: string
  impact: string
  label: string
  detail: string
}

const chapters: Chapter[] = [
  {
    n: '01',
    title: 'Enterprise search',
    text: 'Expanded search to previously unsupported structured XML and JSON sources with Elasticsearch-based indexing.',
    impact: '22–30%',
    label: 'SEARCH TIME',
    detail: 'Java · Elasticsearch · REST · XML · JSON',
  },
  {
    n: '02',
    title: 'Search state',
    text: 'Built persistent bookmarking and state restoration for queries, wildcard filters, and navigation across page transitions.',
    impact: '40%',
    label: 'CONTEXT RECOVERY',
    detail: 'Java · State management · Search UX',
  },
  {
    n: '03',
    title: 'Search intelligence',
    text: 'Implemented typo-tolerant "Did You Mean" suggestions inside the results interface.',
    impact: 'RESILIENT',
    label: 'DISCOVERY',
    detail: 'Elasticsearch · Java · Relevance',
  },
  {
    n: '04',
    title: 'Performance',
    text: 'Optimized REST APIs, high-volume document processing, caching, and native-interface memory management.',
    impact: '10% / 12%',
    label: 'THROUGHPUT / LATENCY',
    detail: 'REST · Caching · Performance',
  },
  {
    n: '05',
    title: 'Security & quality',
    text: 'Resolved security vulnerabilities and raised automated coverage across Java and JavaScript.',
    impact: '15+ / 90%+',
    label: 'FIXES / COVERAGE',
    detail: 'Security · Java · JavaScript · Testing',
  },
]

const skills: [string, string][] = [
  ['LANGUAGES', 'Java · Python · JavaScript · TypeScript · SQL'],
  ['BACKEND', 'Spring Boot · Spring Security · Spring MVC · JPA · Hibernate · FastAPI · Node.js · REST APIs · Microservices'],
  ['DATA', 'MySQL · PostgreSQL · MongoDB · DynamoDB'],
  ['CLOUD & DEVOPS', 'AWS (Lambda · SQS · S3 · CloudWatch) · Docker · Jenkins · CI/CD · Git'],
  ['CORE CS', 'Data Structures & Algorithms · OOP · System Design · Distributed Systems'],
  ['FRONTEND', 'React.js · Next.js · Tailwind CSS'],
]

function SystemMap() {
  return (
    <div className="system-map" aria-label="Live request flow from API to search results">
      <div className="map-toolbar">
        <span>SYS / REQUEST-FLOW</span>
        <span className="live"><i /> LIVE</span>
      </div>
      <div className="map-canvas">
        <div className="map-caption">TRAFFIC OBSERVER <b>001</b></div>
        <div className="map-node source">
          <span>01</span><strong>REQUEST</strong><small>GET /search</small>
        </div>
        <div className="map-path"><i /></div>
        <div className="map-node">
          <span>02</span><strong>SEARCH API</strong><small>200 OK · 24ms</small>
        </div>
        <div className="map-split"><div /><div /></div>
        <div className="map-branches">
          <div className="map-node"><span>03A</span><strong>REDIS</strong><small>CACHE HIT</small></div>
          <div className="map-node active"><span>03B</span><strong>ELASTICSEARCH</strong><small>INDEX MATCH</small></div>
        </div>
        <div className="map-path short"><i /></div>
        <div className="map-node result">
          <span>04</span><strong>RESULTS</strong><small>12 DOCUMENTS</small>
        </div>
      </div>
      <div className="map-footer">
        <span>LATENCY <b>24ms</b></span>
        <span>THROUGHPUT <b>4.2k/s</b></span>
        <span>REGION <b>AP-SOUTH</b></span>
      </div>
    </div>
  )
}

function Architecture({ analytics = false }: { analytics?: boolean }) {
  const nodes = analytics ? ['CLICK EVENT', 'KAFKA', 'ANALYTICS'] : ['CLIENT', 'API', 'REDIS', 'POSTGRESQL', 'REDIRECT']
  return (
    <div className="architecture" aria-label={`${analytics ? 'Analytics' : 'Redirect'} architecture`}>
      {nodes.map((node, i) => (
        <span className="arch-wrap" key={node}>
          <span className="arch-node"><i />{node}</span>
          {i < nodes.length - 1 && <b>→</b>}
        </span>
      ))}
    </div>
  )
}

/**
 * Project toggle button — pill shape, matches the skills-toggle aesthetic.
 * Used to expand/collapse the full project content.
 */
function ProjectToggle({
  expanded,
  onClick,
  collapseLabel = 'Show less',
  expandLabel = 'Show full project',
}: {
  expanded: boolean
  onClick: () => void
  collapseLabel?: string
  expandLabel?: string
}) {
  return (
    <button
      type="button"
      className="project-toggle"
      onClick={onClick}
      aria-expanded={expanded}
    >
      {expanded ? (
        <>{collapseLabel} <ChevronUp size={14} /></>
      ) : (
        <>{expandLabel} <ChevronDown size={14} /></>
      )}
    </button>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)
  const [skillsExpanded, setSkillsExpanded] = useState(false)
  const [foodDeliveryExpanded, setFoodDeliveryExpanded] = useState(false)
  const [parseVaultExpanded, setParseVaultExpanded] = useState(false)
  const close = () => setMenuOpen(false)
  const active = chapters[activeChapter]

  const navItems = ['about', 'experience', 'projects', 'skills', 'contact']

  return (
    <main id="top">
      <a href="#about" className="skip-link">Skip to content</a>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary">
          <a href="#top" className="wordmark" onClick={close}>
            <span>MK</span><b>.</b><small>MANOJ KANDE</small>
          </a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} onClick={close}><span className="nav-slash">/</span>{item}</a>
            ))}
            <a className="resume" href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Download resume PDF">
              <Download size={14} /> RESUME
            </a>
          </div>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" /> AVAILABLE FOR SOFTWARE ENGINEERING ROLES <b>/</b> HYDERABAD · REMOTE
          </div>
          <h1>Software engineer<br /><em>building systems</em><br />that scale.</h1>
          <p className="hero-lede">
            I&apos;m Manoj Kande — a backend engineer working with Java, Spring Boot, Elasticsearch, and distributed systems in production, with a focus on reliability, security, and measurable performance.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">View experience <ArrowUpRight size={15} /></a>
            <a className="button secondary" href="#projects">Explore projects <ArrowUpRight size={15} /></a>
            <a className="button secondary resume-cta" href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Download resume PDF">
              <Download size={14} /> Download résumé
            </a>
          </div>
          <div className="hero-meta">
            <a href="mailto:manojkande010@gmail.com" aria-label="Email Manoj Kande at manojkande010@gmail.com">manojkande010@gmail.com ↗</a>
            <a href="https://github.com/Manoj-Kande" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a href="https://www.linkedin.com/in/manojkande/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <a href="https://leetcode.com/u/manojkande" target="_blank" rel="noreferrer">LEETCODE ↗</a>
          </div>
        </div>
        <SystemMap />
      </section>

      <section className="impact container" aria-label="Engineering impact">
        <div className="impact-heading">
          <span>ENGINEERING IMPACT</span>
          <small>MEASURED, NOT CLAIMED</small>
        </div>
        <div className="metrics">
          {([
            ['22–30%', 'SEARCH TIME'],
            ['40%', 'CONTEXT RECOVERY'],
            ['15+', 'SECURITY FIXES'],
            ['90%+', 'TEST COVERAGE'],
          ] as [string, string][]).map(([value, label]) => (
            <div className="metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section container intro">
        <div className="section-label">01 / ABOUT</div>
        <div className="section-block">
          <div className="intro-content">
            <h2>Systems-minded engineering,<br /><span>measured by impact.</span></h2>
            <div>
              <p>Computer Science graduate with hands-on enterprise engineering experience at Siemens-EDA. I work close to the hard parts — where data, reliability, and thoughtful abstractions meet.</p>
              <div className="interest-grid">
                <span>BACKEND</span>
                <span>SEARCH</span>
                <span>DISTRIBUTED SYSTEMS</span>
                <span>SECURITY</span>
                <span>PERFORMANCE</span>
                <span>SYSTEM DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section container experience">
        <div className="section-label">02 / EXPERIENCE</div>
        <div className="section-block experience-block">
          <div className="section-heading">
            <div>
              <p className="overline">SIEMENS-EDA / SOFTWARE ENGINEERING INTERN</p>
              <h2>Engineering in production.</h2>
            </div>
            <div className="role-meta">
              <span>HYDERABAD, INDIA</span>
              <span>JUL 2025 — JUN 2026</span>
            </div>
          </div>
          <div className="experience-grid">
            <div className="chapter-list">
              {chapters.map((chapter, i) => (
                <button
                  className={i === activeChapter ? 'chapter active' : 'chapter'}
                  key={chapter.n}
                  onMouseEnter={() => setActiveChapter(i)}
                  onFocus={() => setActiveChapter(i)}
                  onClick={() => setActiveChapter(i)}
                  aria-pressed={i === activeChapter}
                  aria-label={`Chapter ${chapter.n}: ${chapter.title}`}
                >
                  <span>{chapter.n}</span>
                  <strong>{chapter.title}</strong>
                  <ArrowUpRight size={14} />
                </button>
              ))}
            </div>
            <div className="experience-visual" aria-live="polite">
              <div className="visual-header">
                <span>CHAPTER {active.n}</span>
                <span>SIEMENS-EDA</span>
              </div>
              <div className="visual-flow">
                <div className="flow-line" aria-hidden="true" />
                <div className="flow-box">
                  <span>IMPACT</span>
                  <strong>{active.impact}</strong>
                  <small>{active.label}</small>
                </div>
                <div className="flow-copy">
                  <h3>{active.title}</h3>
                  <p>{active.text}</p>
                  <small>{active.detail}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section container projects">
        <div className="section-label">03 / SELECTED PROJECTS</div>

        {/* LinkForge — shown fully by default */}
        <article className="section-block project project-feature">
          <div className="project-copy">
            <div className="project-kicker">PROJECT 01 <span>OPEN SOURCE / SYSTEM DESIGN</span></div>
            <h2>LinkForge</h2>
            <h3>Scalable URL shortener<br />with asynchronous analytics.</h3>
            <p>A Spring Boot service designed around low-latency redirects and decoupled analytics processing. Built with the operational details that make a system dependable — multi-tenant with RBAC, JWT + TOTP 2FA, custom domains, rate limiting, audit logging, and webhook integrations.</p>
            <div className="tag-list">
              <span>Spring Boot</span><span>Redis</span><span>Kafka</span><span>PostgreSQL</span><span>JWT · TOTP</span>
            </div>
            <a className="text-link" href="https://github.com/Manoj-Kande/LinkForge" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>
          </div>
          <div className="project-diagram">
            <div className="diagram-label"><Database size={14} /> REQUEST PATH</div>
            <Architecture />
            <div className="diagram-divider" />
            <div className="diagram-label"><Layers3 size={14} /> ANALYTICS PATH</div>
            <Architecture analytics />
            <div className="diagram-note">Analytics stays decoupled from the redirect path.</div>
          </div>
        </article>

        {/* Food Delivery — collapsed preview by default, expand button reveals full layout */}
        <article className="section-block project project-collapsible">
          <div className="project-preview">
            <div className="project-copy">
              <div className="project-kicker">PROJECT 02 <span>MICROSERVICES</span></div>
              <h2>Food Delivery Platform</h2>
              <h3>Swiggy-inspired backend<br />with Stripe payments.</h3>
              <p>A platform with RESTful microservices for authentication, ordering, delivery tracking, and Stripe payments. Backend order-state validation keeps workflows consistent across checkout, payment, and delivery.</p>
              <div className="tag-list">
                <span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>MongoDB</span><span>Docker</span>
              </div>
              <div className="project-links">
                <a className="text-link" href="https://github.com/Manoj-Kande/food_del_before_s3" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
                <a className="text-link" href="https://food-del-before-s3.vercel.app" target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>
              </div>
            </div>
            {foodDeliveryExpanded && (
              <div className="service-flow">
                <div className="service-chain">
                  <span>USER</span><b>↓</b><span>AUTH</span><b>↓</b><span className="accent">ORDER</span><b>↓</b><span>PAYMENT</span><b>↓</b><span>DELIVERY</span>
                </div>
                <div className="service-stats">
                  <strong>500+</strong><span>CONCURRENT USERS</span>
                  <strong>30%</strong><span>FASTER QUERIES</span>
                  <strong>40%</strong><span>FASTER PAGE LOADS</span>
                </div>
              </div>
            )}
          </div>
          <div className="project-toggle-row">
            <ProjectToggle
              expanded={foodDeliveryExpanded}
              onClick={() => setFoodDeliveryExpanded((v) => !v)}
              expandLabel="Show architecture diagram"
              collapseLabel="Hide diagram"
            />
          </div>
        </article>
      </section>

      <section className="section container project-insert">
        <div className="section-label">PROJECT 03 / DATA PLATFORM</div>
        <article className="section-block parsevault-card parsevault-collapsible">
          <div className="project-preview">
            <div className="parsevault-header">
              <div>
                <div className="project-kicker">PROJECT 03 <span>DATA PLATFORM / HEXAGONAL ARCHITECTURE</span></div>
                <h2>ParseVault</h2>
                <p className="parsevault-lede">A production-minded data extraction and search platform built around TalentLedger&apos;s strict hexagonal architecture. The core workflow stays independent from infrastructure, so parsers, storage, search, authentication, and billing adapters can evolve without rewriting the domain.</p>
              </div>
              <a className="button secondary parsevault-github" href="https://github.com/Manoj-Kande/TalentLedger" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>
            </div>
            {parseVaultExpanded && (
              <div className="parsevault-grid">
                <div className="parsevault-details">
                  <div className="parsevault-points">
                    <div>
                      <strong>01</strong>
                      <h3>Stream at scale</h3>
                      <p>Bounded async workers process millions of records in parallel without loading whole files into memory.</p>
                    </div>
                    <div>
                      <strong>02</strong>
                      <h3>Normalize once</h3>
                      <p>CSV, JSON, Excel, XML, and PDF inputs become searchable, normalized records in PostgreSQL.</p>
                    </div>
                    <div>
                      <strong>03</strong>
                      <h3>Keep adapters replaceable</h3>
                      <p>Local or S3-compatible object storage, Redis, search, auth, quotas, and audit logs stay behind ports.</p>
                    </div>
                  </div>
                  <div className="tag-list">
                    <span>Java 21</span><span>Spring Boot</span><span>PostgreSQL</span><span>Redis</span><span>S3 / R2</span>
                  </div>
                </div>
                <div className="parsevault-architecture">
                  <div className="architecture-title">
                    <span>ARCHITECTURE</span>
                    <small>PORTS &amp; ADAPTERS</small>
                  </div>
                  <div className="parsevault-layers">
                    <div className="parsevault-layer outer"><span>ADAPTERS</span><b>File · Storage · Search · Auth</b></div>
                    <i>↓</i>
                    <div className="parsevault-layer middle"><span>APPLICATION</span><b>Ingest · Validate · Normalize · Query</b></div>
                    <i>↓</i>
                    <div className="parsevault-layer core"><span>DOMAIN CORE</span><b>Records · Imports · Policies</b></div>
                  </div>
                  <div className="parsevault-flow-label">
                    <span>INGEST</span><b>→</b><span>PARALLEL WORKERS</span><b>→</b><span>POSTGRESQL</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="project-toggle-row">
            <ProjectToggle
              expanded={parseVaultExpanded}
              onClick={() => setParseVaultExpanded((v) => !v)}
              expandLabel="Show hexagonal architecture"
              collapseLabel="Hide architecture"
            />
          </div>
        </article>
      </section>

      <section id="skills" className="section container skills-section">
        <div className="section-label">04 / THE STACK</div>
        <div className="section-block skills-block">
          <div className="skills-collapsed">
            <div className="skills-tagline">
              <h2>Backend systems,<br /><span>built to scale.</span></h2>
              <p>Java · Spring Boot · Elasticsearch · Redis · Kafka · PostgreSQL · AWS — full stack below.</p>
            </div>
            <button
              type="button"
              className="skills-toggle"
              onClick={() => setSkillsExpanded((v) => !v)}
              aria-expanded={skillsExpanded}
              aria-controls="skills-grid"
            >
              {skillsExpanded ? (
                <>Show less <ChevronUp size={14} /></>
              ) : (
                <>View full stack <ChevronDown size={14} /></>
              )}
            </button>
          </div>

          {skillsExpanded && (
            <div className="skills-expanded" id="skills-grid">
              <div className="stack-focus" aria-label="Primary technologies">
                <span>JAVA</span>
                <span>SPRING</span>
                <span>ELASTICSEARCH</span>
                <span>REDIS</span>
                <span>KAFKA</span>
                <span>POSTGRESQL</span>
                <span>AWS</span>
              </div>
              <div className="skills-grid">
                {skills.map(([title, items]) => (
                  <div className="skill-row" key={title}>
                    <span>{title}</span>
                    <p>{items}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section container philosophy">
        <div className="section-label">05 / ENGINEERING PRINCIPLES</div>
        <div className="section-block">
          <div className="principles">
            {([
              ['01', 'RELIABILITY', 'Design systems that behave predictably under failure.', ShieldCheck],
              ['02', 'PERFORMANCE', 'Measure bottlenecks and optimize where the data says it matters.', Gauge],
              ['03', 'SECURITY', 'Treat security and correctness as engineering requirements.', Search],
              ['04', 'SCALABILITY', 'Think about how systems behave as traffic, data, and complexity grow.', Layers3],
            ] as [string, string, string, typeof ShieldCheck][]).map(([n, title, text, Icon]) => (
              <div className="principle" key={title}>
                <span>{n}</span>
                <Icon size={17} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container credentials">
        <div>
          <div className="section-label">06 / EDUCATION</div>
          <h2>KL University</h2>
          <p>Bachelor of Technology in Computer Science and Engineering</p>
          <strong>9.54 / 10 <span>CGPA · JUN 2022 — JUL 2026</span></strong>
        </div>
        <div>
          <div className="section-label">07 / ACHIEVEMENTS</div>
          <ul>
            <li><b>3rd place</b> — Nationwide HackerRank coding competition, 500+ participants.</li>
            <li><b>Hackathon Runner-Up</b> — 2nd place for a full-stack, AI-integrated application.</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contact container">
        <div className="section-label">08 / CONTACT</div>
        <div className="contact-inner">
          <h2>Let&apos;s build something<br /><em>worth shipping.</em></h2>
          <p>I&apos;m interested in software engineering opportunities where I can work on challenging backend, distributed systems, and product engineering problems.</p>
          <div className="contact-links">
            <a
              className="button primary"
              href="mailto:manojkande010@gmail.com?subject=Software%20engineering%20opportunity"
              aria-label="Email Manoj Kande at manojkande010@gmail.com"
              title="manojkande010@gmail.com"
            >
              <Mail size={15} /> EMAIL: manojkande010@gmail.com
            </a>
            <a className="button secondary" href="https://www.linkedin.com/in/manojkande/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <a className="button secondary" href="https://github.com/Manoj-Kande" target="_blank" rel="noreferrer">GITHUB ↗</a>
            <a className="button secondary" href="https://leetcode.com/u/manojkande" target="_blank" rel="noreferrer">LEETCODE ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Copyright 2026 Manoj Kande</span>
      </footer>
    </main>
  )
}
