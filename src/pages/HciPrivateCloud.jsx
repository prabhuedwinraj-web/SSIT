import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function HciPrivateCloud() {
  return (
    <PageTemplate
      seo="HCI, Private Cloud & Virtualisation UAE | SechPoint SSIT"
      breadcrumb="Digital Infrastructure / HCI, Private Cloud & Virtualisation"
      eyebrow="HCI, Private Cloud & Virtualisation"
      h1="Simplify infrastructure without compromising control."
      lede="Unify compute, storage, networking, management and security in a scalable platform."
      primary={{ label: 'Plan Your HCI or Private Cloud', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/digital-infrastructure' }}
      opening="Hyperconverged and private-cloud architectures can reduce infrastructure complexity while improving agility and resilience. SechPoint SSIT helps design, implement and secure these environments around workload, availability and operational requirements."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Architecture for the workload', body: 'Sizing and design consider applications, performance, availability, data protection, growth and operational constraints.' },
        { title: 'Security from platform to application', body: 'Segmentation, access control, encryption, monitoring and secure administration are built into the architecture.' },
        { title: 'Resilience and lifecycle', body: 'High availability, migration, snapshots, backup and recovery are aligned with business continuity objectives.' },
      ]}
      deliver={[
        'HCI architecture and sizing',
        'Private and hybrid cloud design',
        'Server virtualisation',
        'Micro-segmentation and platform security',
        'High availability and live migration',
        'Monitoring, automation and lifecycle support',
      ]}
      outcomes={[
        'Reduced infrastructure complexity',
        'Faster provisioning and change',
        'Improved resilience and recovery',
        'Consistent management across workloads',
      ]}
      next={{ label: 'Plan Your HCI or Private Cloud', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Backup & Disaster Recovery', 'Network Security', 'Implementation & Integration']}
    />
  )
}
