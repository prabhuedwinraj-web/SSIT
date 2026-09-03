import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function About() {
  return (
    <PageTemplate
      seo="About SechPoint SSIT | Cybersecurity & System Integration"
      breadcrumb="Company / About"
      eyebrow="About SechPoint SSIT"
      h1="Cybersecurity and integration, engineered around your business."
      lede="We help organisations translate security priorities into architectures, implementations and operating models that work in the real world."
      primary={{ label: 'Talk to SechPoint SSIT', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="SechPoint System Integration Technologies (SSIT) is part of the wider SechPoint ecosystem. The business brings together cybersecurity, digital infrastructure, systems integration and advisory expertise to support organisations through design, implementation and ongoing improvement."
      pillarsLabel="Mission, vision & role"
      pillars={[
        { title: 'Our mission', body: 'To help organisations build secure, resilient and intelligent digital environments through practical advice, well-integrated technology and accountable delivery.' },
        { title: 'Our vision', body: 'To become a trusted regional partner for secure transformation — recognised for technical depth, clarity of execution and long-term customer value.' },
        { title: 'Our role within SechPoint', body: 'SSIT complements SechPoint’s broader strengths in proprietary DPI technology, cybersecurity distribution and ICT solutions. This group perspective enables access to a wider ecosystem while maintaining a clear system-integration focus.' },
      ]}
      deliver={[
        'Cybersecurity consulting and assessments',
        'Solution architecture and integration',
        'Managed security and operational support',
        'Secure infrastructure and resilience',
        'Industry-specific solution frameworks',
      ]}
      outcomes={[
        'One partner across strategy, technology and operations',
        'Clear accountability through the delivery lifecycle',
        'Architecture designed for interoperability and scale',
        'Local engagement supported by a wider technology ecosystem',
      ]}
      next={{ label: 'Talk to SechPoint SSIT', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Delivery Model', 'Partners', 'Contact']}
    />
  )
}
