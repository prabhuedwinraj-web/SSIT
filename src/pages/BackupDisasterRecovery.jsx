import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function BackupDisasterRecovery() {
  return (
    <PageTemplate
      seo="Backup & Disaster Recovery Solutions UAE | SechPoint SSIT"
      heroImage="/assets/backup-disaster-recovery-hero.jpg"
      breadcrumb="Digital Infrastructure / Backup & Disaster Recovery"
      eyebrow="Backup & Disaster Recovery"
      h1="Recovery is a business capability — not only a backup job."
      lede="Protect data, validate recovery and align resilience with the services the business depends on."
      primary={{ label: 'Assess Recovery Readiness', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/digital-infrastructure' }}
      opening="Backups provide value only when recovery is timely, complete and understood. SechPoint SSIT helps organisations design data protection and disaster recovery around business impact, recovery objectives and operational dependencies."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Requirements before technology', body: 'Critical systems, dependencies, recovery time objectives and recovery point objectives guide the design.' },
        { title: 'Recovery that is tested', body: 'Testing and evidence help identify gaps across data, infrastructure, identity, applications and operating procedures.' },
        { title: 'Secure and resilient copies', body: 'Architecture can include immutability, access separation, encryption and monitoring appropriate to the risk.' },
      ]}
      deliver={[
        'Backup and recovery assessment',
        'Architecture and implementation',
        'Replication and disaster recovery design',
        'RTO/RPO alignment',
        'Recovery runbooks and testing',
        'Monitoring and lifecycle review',
      ]}
      outcomes={[
        'Greater confidence in recoverability',
        'Reduced recovery uncertainty',
        'Improved resilience against cyber and operational disruption',
        'Clearer business ownership of recovery objectives',
      ]}
      next={{ label: 'Assess Recovery Readiness', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Incident Readiness', 'HCI & Private Cloud', 'Security Architecture']}
    />
  )
}
