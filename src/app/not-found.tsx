import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main id="top" className="not-found">
      <div className="container">
        <div className="section-label">404 / NOT FOUND</div>
        <h1>This page<br /><em>doesn&apos;t exist.</em></h1>
        <p>You hit a URL that isn&apos;t part of the portfolio. The resume, projects, and contact info all live on the home page.</p>
        <div className="hero-actions">
          <Link className="button primary" href="/">Back to home <ArrowUpRight size={15} /></Link>
          <Link className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">Download résumé <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </main>
  )
}
