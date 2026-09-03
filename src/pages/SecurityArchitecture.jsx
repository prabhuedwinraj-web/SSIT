import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function SecurityArchitecture() {
  return (
    <PageTemplate
      seo="Cybersecurity Architecture Services | SechPoint SSIT"
      breadcrumb="Services / Security Architecture"
      eyebrow="Security Architecture"
      h1="Design security as an integrated system."
      lede="Create architectures that connect identity, data, applications, networks, cloud and operations."
      primary={{ label: 'Discuss a Security Architecture', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Security architecture turns policy and risk requirements into practical design. SechPoint SSIT develops target-state architectures, integration patterns and control models aligned with the customer’s environment."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Architecture around business services', body: 'We map dependencies, trust boundaries, data flows and operational needs before selecting control patterns.' },
        { title: 'Designed for interoperability', body: 'Controls are planned as part of an ecosystem, with clear integrations, telemetry and operating responsibilities.' },
      ]}
      deliver={[
        'Current-state architecture review',
        'Target-state security architecture',
        'Zero Trust and segmentation design',
        'Identity, data and cloud control architecture',
        'Integration and logging design',
        'Architecture standards and roadmap',
      ]}
      outcomes={[
        'Fewer control gaps',
        'Reduced integration risk',
        'Clearer design decisions',
        'Scalable foundations for transformation',
      ]}
      next={{ label: 'Discuss a Security Architecture', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
