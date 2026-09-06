import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function ManagedSecurity() {
  return (
    <PageTemplate
      seo="Managed Security Services UAE | SechPoint SSIT"
      heroImage="/assets/managed-security-hero.jpg"
      breadcrumb="Services / Managed Security"
      eyebrow="Managed Security"
      h1="Extend your security operations with focused expertise."
      lede="Support monitoring, investigation and continuous improvement through an agreed managed-service model."
      primary={{ label: 'Discuss Managed Security Requirements', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="SechPoint SSIT can support customers that need additional operational capacity, specialist expertise or lifecycle management. Service scope, coverage hours, SLAs and responsibilities must be defined for each engagement."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Built around the customer operating model', body: 'The service integrates with customer processes, escalation paths, tools and governance rather than operating as an isolated function.' },
        { title: 'Continuous improvement', body: 'Use-case tuning, reporting, service reviews and improvement actions help the service evolve with the environment.' },
      ]}
      deliver={[
        'Monitoring and triage support',
        'Detection use-case management',
        'Threat intelligence and investigation support',
        'Security platform administration',
        'Reporting and service review',
        'Continuous tuning and improvement',
      ]}
      outcomes={[
        'Greater operational consistency',
        'Access to specialist capability',
        'Improved visibility and reporting',
        'Reduced burden on internal teams',
      ]}
      next={{ label: 'Discuss Managed Security Requirements', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
