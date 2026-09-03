import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function ComplianceEnablement() {
  return (
    <PageTemplate
      seo="Cybersecurity Compliance Enablement UAE | SechPoint SSIT"
      breadcrumb="Services / Compliance Enablement"
      eyebrow="Compliance Enablement"
      h1="Turn compliance requirements into sustainable controls."
      lede="Translate regulatory and policy obligations into practical security processes, evidence and improvement actions."
      primary={{ label: 'Discuss Compliance Priorities', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Compliance should reinforce security rather than become a one-time documentation exercise. SechPoint SSIT helps map obligations to controls, owners, technology and evidence."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Control mapping and gap analysis', body: 'Requirements are mapped to current controls and evidence to identify gaps, overlaps and remediation priorities.' },
        { title: 'Operational sustainability', body: 'We help define processes, ownership and reporting so controls can be maintained beyond the assessment period.' },
      ]}
      deliver={[
        'Regulatory and standards gap assessment',
        'Control mapping and evidence review',
        'Policy and procedure support',
        'Security awareness programme alignment',
        'Compliance reporting and dashboards',
        'Remediation planning and tracking',
      ]}
      outcomes={[
        'Clearer control ownership',
        'Improved evidence readiness',
        'Reduced duplication across frameworks',
        'Better integration of compliance and operations',
      ]}
      next={{ label: 'Discuss Compliance Priorities', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
