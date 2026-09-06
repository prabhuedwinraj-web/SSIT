import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function FinancialServices() {
  return (
    <PageTemplate
      seo="Financial Services Cybersecurity UAE | SechPoint SSIT"
      heroImage="/assets/financial-services-hero.jpg"
      breadcrumb="Industry Solutions / Financial Services"
      eyebrow="Financial Services"
      h1="Protect trust across identities, transactions, applications and data."
      lede="Strengthen defence around high-value financial services and connected digital channels."
      primary={{ label: 'Discuss Financial-Sector Security', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Financial institutions must protect sensitive data and transactions while maintaining availability, customer trust and regulatory discipline. SechPoint SSIT helps integrate security across identity, applications, APIs, infrastructure and operations."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Identity and transaction trust', body: 'Strong access governance, privileged controls and adaptive authentication reduce exposure to account and administrative compromise.' },
        { title: 'Visibility across complex environments', body: 'Analytics and integrated telemetry support investigation across digital channels, endpoints, networks, cloud and data.' },
      ]}
      deliver={[
        'Identity and privileged access security',
        'Application and API security',
        'Data security and encryption',
        'Threat intelligence and security analytics',
        'Cloud and infrastructure security',
        'Incident readiness and recovery',
      ]}
      outcomes={[
        'Reduced identity and data exposure',
        'Improved visibility of suspicious activity',
        'Stronger operational resilience',
        'Security aligned with customer and regulatory expectations',
      ]}
      next={{ label: 'Discuss Financial-Sector Security', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Services', 'Contact']}
    />
  )
}
