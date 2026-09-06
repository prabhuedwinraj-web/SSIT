import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function DigitalInfrastructureOverview() {
  return (
    <PageTemplate
      seo="Secure Digital Infrastructure UAE | SechPoint SSIT"
      heroImage="/assets/digital-infrastructure-hero.jpg"
      breadcrumb="Digital Infrastructure"
      eyebrow="Digital Infrastructure"
      h1="Infrastructure designed for resilience, security and scale."
      lede="Modernise compute, storage, networking and recovery without treating security as an afterthought."
      primary={{ label: 'Discuss Infrastructure Modernisation', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="SechPoint SSIT connects infrastructure design with security architecture and operational requirements. Our focus is to simplify the environment, improve resilience and create a platform that can support evolving workloads."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Integrated by design', body: 'Compute, storage, network, security, management and recovery are considered as one architecture.' },
        { title: 'Operationally ready', body: 'Monitoring, lifecycle management, documentation and support requirements are included in the delivery model.' },
      ]}
      deliver={[
        'Hyperconverged infrastructure',
        'Private and hybrid cloud',
        'Server virtualisation',
        'Data centre architecture',
        'Backup and disaster recovery',
        'Infrastructure monitoring and support',
      ]}
      outcomes={[
        'Simpler operations',
        'Improved availability and recovery',
        'Consistent security controls',
        'Scalable capacity for future workloads',
      ]}
      next={{ label: 'Discuss Infrastructure Modernisation', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['HCI & Private Cloud', 'Backup & Disaster Recovery', 'Security Architecture']}
    />
  )
}
