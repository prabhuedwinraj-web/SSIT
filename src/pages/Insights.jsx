import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Insights() {
  return (
    <PageTemplate
      seo="Cybersecurity Insights & Guidance | SechPoint SSIT"
      breadcrumb="Company / Insights"
      eyebrow="Insights"
      h1="Practical insight for secure transformation."
      lede="Perspectives, technical guidance and regional analysis from SechPoint SSIT specialists."
      primary={{ label: 'Read the Latest Insights', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/case-studies' }}
      opening="The Insights hub answers real buyer and practitioner questions. Content demonstrates expertise, cites reliable sources and connects naturally to relevant services. Articles will appear here as they are published."
      pillarsLabel="Editorial standard"
      pillars={[
        { title: 'Content categories', body: 'Executive Perspectives; Technical Guides; Threat Briefs; Solution Briefs; Case Studies; Videos; Events.' },
        { title: 'Every article is accountable', body: 'Each has a named expert, target audience, review date, sources, internal links and a relevant next step.' },
      ]}
      deliver={[
        'Business and security strategy',
        'Identity, data and application security',
        'Network, endpoint and email security',
        'AI security and governance',
        'Cloud, HCI and resilience',
        'Incident readiness and operations',
      ]}
      outcomes={[
        'Stronger topical authority',
        'Useful education for buyers',
        'More qualified organic journeys',
        'Content that supports campaigns and sales',
      ]}
      next={{ label: 'Read the Latest Insights', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Case Studies', 'Events', 'Contact']}
    />
  )
}
