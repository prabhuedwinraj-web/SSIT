import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function CybersecurityOverview() {
  return (
    <PageTemplate
      seo="Enterprise Cybersecurity Solutions UAE | SechPoint SSIT"
      breadcrumb="Cybersecurity"
      eyebrow="Cybersecurity"
      h1="Cyber defence built around the way your business operates."
      lede="Protect what matters. Connect your controls. Improve your ability to respond."
      primary={{ label: 'Explore Cybersecurity Capabilities', to: '/cybersecurity/endpoint-device-security' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/services/security-assessments' }}
      opening="Cybersecurity is most effective when controls work together around critical business services. SechPoint SSIT helps organisations design and integrate protection across endpoints, communication, networks, identities, data, applications and security operations."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Defence across the full environment', body: 'Our cybersecurity capabilities span prevention, visibility, detection, response and recovery, supported by advisory and implementation services.' },
        { title: 'Technology with operational context', body: 'We consider how platforms will be governed, monitored, integrated and used by security and IT teams — not only how they are deployed.' },
        { title: 'Security that can evolve', body: 'Architectures are designed to support changing threats, new digital services and future growth without creating unnecessary complexity.' },
      ]}
      deliver={[
        'Endpoint & device security',
        'Email & communication security',
        'Network & infrastructure security',
        'Data & identity security',
        'Threat intelligence, hunting & response',
        'Security analytics and visibility',
        'AI security and governance',
      ]}
      outcomes={[
        'Reduced control gaps',
        'Greater visibility across the digital estate',
        'Improved detection and response consistency',
        'Stronger alignment with business and compliance requirements',
      ]}
      next={{ label: 'Explore Cybersecurity Capabilities', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Security Assessments', 'Managed Security', 'Incident Readiness']}
    />
  )
}
