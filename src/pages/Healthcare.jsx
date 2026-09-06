import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Healthcare() {
  return (
    <PageTemplate
      seo="Healthcare Cybersecurity & Infrastructure UAE | SechPoint SSIT"
      heroImage="/assets/healthcare-hero.jpg"
      breadcrumb="Industry Solutions / Healthcare"
      eyebrow="Healthcare"
      h1="Protect care delivery, patient data and connected operations."
      lede="Strengthen security and resilience across users, clinical systems, infrastructure and digital services."
      primary={{ label: 'Discuss Healthcare Security', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Healthcare environments combine sensitive information, critical availability requirements and a broad range of connected systems. SechPoint SSIT helps organisations protect access, data, endpoints, networks and infrastructure while supporting continuity of care."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Security that respects clinical operations', body: 'Controls are designed around workflows, availability needs and the practical realities of clinical and administrative teams.' },
        { title: 'Resilience for critical services', body: 'Monitoring, segmentation, incident readiness, backup and recovery reduce the risk of disruption across important systems.' },
      ]}
      deliver={[
        'Security posture assessment',
        'Identity and privileged access',
        'Endpoint, email and network security',
        'Data protection and access monitoring',
        'Secure infrastructure and segmentation',
        'Incident response and recovery readiness',
      ]}
      outcomes={[
        'Improved protection of patient information',
        'Reduced attack paths across connected environments',
        'Greater resilience of critical services',
        'Clearer operational security visibility',
      ]}
      next={{ label: 'Discuss Healthcare Security', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Services', 'Contact']}
    />
  )
}
