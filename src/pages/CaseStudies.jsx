import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function CaseStudies() {
  return (
    <PageTemplate
      seo="Cybersecurity & Integration Case Studies | SechPoint SSIT"
      breadcrumb="Company / Case Studies"
      eyebrow="Case Studies"
      h1="Proof through delivery."
      lede="Explore customer challenges, solution architectures and measurable outcomes."
      primary={{ label: 'Explore Our Work', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/insights' }}
      opening="Case studies show how SechPoint turns requirements into operational results. Each story is approved by the customer and business owner, or published as an anonymised case with sufficient technical and outcome detail. Published stories will appear here following approval."
      pillarsLabel="Editorial standard"
      pillars={[
        { title: 'Standard case-study structure', body: 'Context; challenge; why the existing approach was insufficient; solution; implementation; outcome; technology and services; next step.' },
        { title: 'Evidence standard', body: 'Measured results are used only where approved. We avoid unverified percentages, unnamed awards or vague claims of success.' },
      ]}
      deliver={[
        'Filter by industry',
        'Filter by capability',
        'Named or approved anonymised stories',
        'Architecture summary',
        'Measured outcome section',
        'Related services and next step',
      ]}
      outcomes={[
        'Greater buyer confidence',
        'Evidence of delivery capability',
        'Stronger organic-search authority',
        'Reusable sales and campaign content',
      ]}
      next={{ label: 'Explore Our Work', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Insights', 'Contact']}
    />
  )
}
