import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function ImplementationIntegration() {
  return (
    <PageTemplate
      seo="Cybersecurity Implementation & Integration UAE | SechPoint SSIT"
      breadcrumb="Services / Implementation & Integration"
      eyebrow="Implementation & Integration"
      h1="Make security technologies work together."
      lede="Deploy, integrate and transition controls into operations with clear accountability."
      primary={{ label: 'Plan Your Implementation', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Technology creates value when it is configured correctly, connected to surrounding systems and adopted by the teams responsible for operating it. SechPoint SSIT manages implementation with attention to architecture, testing and transition."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Controlled delivery', body: 'Projects follow agreed design, scope, dependencies, milestones, acceptance criteria and change control.' },
        { title: 'Operational handover', body: 'Documentation, training and knowledge transfer support a sustainable transition to internal or managed operations.' },
      ]}
      deliver={[
        'Detailed design and implementation planning',
        'Platform deployment and configuration',
        'API, SIEM, SOAR, IAM and ticketing integrations',
        'Testing and acceptance support',
        'Migration and cutover planning',
        'Documentation and knowledge transfer',
      ]}
      outcomes={[
        'Reduced deployment risk',
        'Faster time to operational value',
        'Better integration across security tools',
        'Clear ownership after handover',
      ]}
      next={{ label: 'Plan Your Implementation', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
