import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://manojkande.dev'
const title = 'Manoj Kande — Software Engineer | Java · Backend · Distributed Systems'
const description =
  'Software Engineer specializing in Java, Spring Boot, Elasticsearch, distributed systems, application security, and performance engineering. Measured impact: 22–30% faster search, 40% faster context recovery, 15+ security fixes, 90%+ test coverage.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Manoj Kande',
    'Software Engineer',
    'Backend Engineer',
    'Java',
    'Spring Boot',
    'Elasticsearch',
    'Distributed Systems',
    'Backend Developer',
    'Hyderabad',
  ],
  authors: [{ name: 'Manoj Kande', url: siteUrl }],
  creator: 'Manoj Kande',
  applicationName: 'Manoj Kande Portfolio',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Manoj Kande — Software Engineer',
    description:
      'Backend-focused engineer working with Java, Spring Boot, Elasticsearch, and distributed systems in production.',
    url: siteUrl,
    siteName: 'Manoj Kande',
    type: 'profile',
    locale: 'en_US',
    firstName: 'Manoj',
    lastName: 'Kande',
    username: 'manojkande',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manoj Kande — Software Engineer',
    description:
      'Backend-focused engineer working with Java, Spring Boot, Elasticsearch, and distributed systems in production.',
    creator: '@manojkande',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070807',
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD structured data — Google Person schema. Helps recruiters searching
// "Manoj Kande" see a knowledge-panel summary (role, skills, links, location).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Manoj Kande',
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: 'Software Engineer',
  email: 'mailto:manojkande010@gmail.com',
  description:
    'Backend-focused software engineer working with Java, Spring Boot, Elasticsearch, and distributed systems in production.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'KL University',
  },
  knowsAbout: [
    'Java',
    'Spring Boot',
    'Elasticsearch',
    'Distributed Systems',
    'Backend Engineering',
    'Microservices',
    'Redis',
    'Kafka',
    'PostgreSQL',
    'AWS',
  ],
  sameAs: [
    'https://github.com/Manoj-Kande',
    'https://www.linkedin.com/in/manojkande/',
    'https://leetcode.com/u/manojkande',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
