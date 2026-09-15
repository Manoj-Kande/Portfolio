import { ArrowUpRight } from 'lucide-react'

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectStat = {
  value: string
  label: string
}

export type ProjectCardProps = {
  /** Zero-padded index, e.g. "01", "02" */
  index: string
  /** Short category label, e.g. "OPEN SOURCE / SYSTEM DESIGN" */
  kicker: string
  /** Project name, e.g. "LinkForge" */
  name: string
  /** One-line outcome / subtitle */
  outcome: string
  /** 1–2 sentence description */
  description: string
  /** Real technologies only, max 5, ordered by relevance */
  tags: string[]
  /** Up to 2 links */
  links: ProjectLink[]
  /** Optional outcome metrics (resume-backed) */
  stats?: ProjectStat[]
}

/**
 * Single flexible project card pattern:
 * kicker → name → outcome → description → (optional stats) → tags → links
 *
 * Every project renders through this component so recruiters can scan
 * projects side by side without layout noise getting in the way.
 */
export function ProjectCard({
  index,
  kicker,
  name,
  outcome,
  description,
  tags,
  links,
  stats,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <header className="project-card-header">
        <span className="project-kicker">
          PROJECT {index} <span>{kicker}</span>
        </span>
      </header>

      <h3 className="project-card-name">{name}</h3>
      <p className="project-card-outcome">{outcome}</p>
      <p className="project-card-desc">{description}</p>

      {stats && stats.length > 0 && (
        <div className="project-card-stats" role="list" aria-label={`${name} outcomes`}>
          {stats.map((s) => (
            <div className="project-card-stat" role="listitem" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="tag-list" aria-label={`${name} technologies`}>
        {tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="project-card-links">
        {links.map((l) => (
          <a
            key={l.href}
            className="text-link"
            href={l.href}
            target="_blank"
            rel="noreferrer"
          >
            {l.label} <ArrowUpRight size={15} />
          </a>
        ))}
      </div>
    </article>
  )
}
