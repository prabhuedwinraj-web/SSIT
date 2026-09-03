import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Partners() {
  return (
    <PageTemplate
      seo="Cybersecurity & Infrastructure Partners | SechPoint SSIT"
      breadcrumb="Company / Technology Partners"
      eyebrow="Technology Partners"
      h1="Technology selected for fit — not for fashion."
      lede="We combine vendor expertise with architecture and integration discipline to build solutions around customer requirements."
      primary={{ label: 'Explore the Partner Ecosystem', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/services/implementation-integration' }}
      opening="Our partner ecosystem supports capabilities across cybersecurity, infrastructure, cloud, data, identity and operations. Partner status, geography and logos must be verified before publication."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Vendor-agnostic by approach', body: 'We begin with customer requirements and existing investments before identifying the most appropriate technology path.' },
        { title: 'Value beyond resale', body: 'SSIT supports discovery, design, proof of concept, implementation, integration, knowledge transfer and lifecycle services.' },
      ]}
      deliver={[
        'Approved technology directory',
        'Capability and use-case filtering',
        'Solution architecture and evaluation',
        'Proof-of-concept support',
        'Implementation and integration',
        'Vendor coordination and escalation',
      ]}
      outcomes={[
        'Better technology fit',
        'Clearer solution accountability',
        'Integrated delivery across platforms',
        'Access to specialist knowledge',
      ]}
      next={{ label: 'Explore the Partner Ecosystem', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Implementation & Integration', 'Contact']}
    />
  )
}
