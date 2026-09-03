import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function SupportServices() {
  return (
    <PageTemplate
      seo="Cybersecurity Support Services | SechPoint SSIT"
      breadcrumb="Services / Support Services"
      eyebrow="Support Services"
      h1="Protect the value of your technology investment."
      lede="Maintain, troubleshoot and improve security platforms through structured support."
      primary={{ label: 'Discuss Support Coverage', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Security platforms require regular attention across configuration, integration, upgrades, incidents and performance. SechPoint SSIT provides support based on an agreed scope, service window and escalation model."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Structured service management', body: 'Requests, incidents, changes and problems are managed through defined processes and ownership.' },
        { title: 'Knowledge and continuity', body: 'Documentation and service reviews reduce dependency on individual knowledge and help maintain operational consistency.' },
      ]}
      deliver={[
        'Technical support and troubleshooting',
        'Platform health review',
        'Configuration and integration support',
        'Upgrade and lifecycle planning',
        'Vendor coordination',
        'Service reporting and review',
      ]}
      outcomes={[
        'Improved platform availability',
        'Faster resolution and escalation',
        'Reduced configuration drift',
        'Better lifecycle planning',
      ]}
      next={{ label: 'Discuss Support Coverage', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
