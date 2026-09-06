import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function EnergyUtilities() {
  return (
    <PageTemplate
      seo="Energy & Utilities Cybersecurity UAE | SechPoint SSIT"
      heroImage="/assets/energy-utilities-hero.jpg"
      breadcrumb="Industry Solutions / Energy & Utilities"
      eyebrow="Energy & Utilities"
      h1="Build cyber resilience around critical operations."
      lede="Protect enterprise and operational dependencies while improving visibility, segmentation and response."
      primary={{ label: 'Discuss Critical-Infrastructure Security', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Energy and utility organisations depend on highly available systems, distributed infrastructure and complex third-party ecosystems. SechPoint SSIT helps assess risk and integrate controls around critical services and operational dependencies."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Visibility and segmentation', body: 'Architecture identifies trust zones, dependencies and pathways that could expose critical operations.' },
        { title: 'Response and continuity', body: 'Incident readiness, secure administration, monitoring and recovery planning support coordinated action when disruption occurs.' },
      ]}
      deliver={[
        'Cyber risk and architecture assessment',
        'Network segmentation and access control',
        'Endpoint, identity and privileged security',
        'Security monitoring and threat intelligence',
        'Secure infrastructure and remote access',
        'Incident readiness and disaster recovery',
      ]}
      outcomes={[
        'Reduced exposure of critical services',
        'Improved control of privileged and remote access',
        'Greater situational awareness',
        'Better prepared response and recovery',
      ]}
      next={{ label: 'Discuss Critical-Infrastructure Security', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Services', 'Contact']}
    />
  )
}
