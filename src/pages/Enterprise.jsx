import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Enterprise() {
  return (
    <PageTemplate
      seo="Enterprise Cybersecurity & System Integration UAE | SechPoint SSIT"
      breadcrumb="Industry Solutions / Enterprise"
      eyebrow="Enterprise"
      h1="Secure growth across users, applications, data and infrastructure."
      lede="Create an integrated security foundation that can evolve with the business."
      primary={{ label: 'Discuss Enterprise Security', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Enterprises are adopting cloud, SaaS, AI and new digital workflows while maintaining legacy environments. SechPoint SSIT helps reduce fragmentation and establish a practical security and infrastructure roadmap."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Priorities aligned to business change', body: 'The security plan considers transformation initiatives, critical services, risk appetite and existing investments.' },
        { title: 'Integration across the estate', body: 'Identity, endpoint, email, network, data, cloud and operations are connected through architecture and shared workflows.' },
      ]}
      deliver={[
        'Cybersecurity roadmap and assessment',
        'Identity, endpoint, email and network security',
        'Data, cloud and application protection',
        'Security analytics and managed services',
        'Infrastructure modernisation',
        'Incident readiness and recovery',
      ]}
      outcomes={[
        'Reduced control fragmentation',
        'Better use of existing investments',
        'Improved security visibility and governance',
        'Scalable foundations for growth',
      ]}
      next={{ label: 'Discuss Enterprise Security', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Services', 'Contact']}
    />
  )
}
