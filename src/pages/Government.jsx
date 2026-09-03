import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Government() {
  return (
    <PageTemplate
      seo="Government Cybersecurity & System Integration UAE | SechPoint SSIT"
      breadcrumb="Industry Solutions / Government"
      eyebrow="Government"
      h1="Secure digital public services with resilience and trust."
      lede="Connect policy, architecture, identity, data protection and operations around critical government services."
      primary={{ label: 'Discuss Government Security Priorities', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Government entities operate high-value services and sensitive data across complex environments. SechPoint SSIT helps translate security, operational and regulatory requirements into integrated controls and practical delivery."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Security around citizen and business services', body: 'Architecture focuses on the identities, applications, APIs, data and infrastructure that support public outcomes.' },
        { title: 'Governance and operational assurance', body: 'Clear ownership, monitoring, evidence and incident readiness support accountable service delivery.' },
      ]}
      deliver={[
        'Cybersecurity strategy and assessments',
        'Identity, data and privileged access',
        'Application, API and infrastructure security',
        'Security analytics and incident readiness',
        'Secure cloud and data centre integration',
        'Resilience and disaster recovery',
      ]}
      outcomes={[
        'Improved protection of critical services',
        'Greater control of sensitive information',
        'Clearer risk and compliance evidence',
        'More coordinated response and recovery',
      ]}
      next={{ label: 'Discuss Government Security Priorities', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Services', 'Contact']}
    />
  )
}
