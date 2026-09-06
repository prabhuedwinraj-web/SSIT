import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function DataIdentitySecurity() {
  return (
    <PageTemplate
      seo="Data & Identity Security Solutions | SechPoint SSIT"
      heroImage="/assets/data-identity-hero.jpg"
      breadcrumb="Cybersecurity / Data & Identity Security"
      eyebrow="Data & Identity Security"
      h1="Protect sensitive data by controlling who can access it and why."
      lede="Bring identity, privilege, data context and policy together to reduce exposure."
      primary={{ label: 'Assess Identity and Data Risk', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Data security depends on identity. SechPoint SSIT helps organisations understand sensitive information, govern access, protect privileged activity and detect abnormal behaviour across users, service accounts and other identities."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Identity as the control plane', body: 'Identity governance, authentication and privileged access controls help ensure that access is appropriate, verified and accountable.' },
        { title: 'Data-aware protection', body: 'Classification, DLP and contextual policy can reduce accidental exposure and deliberate misuse across endpoints, email, cloud and applications.' },
        { title: 'Behaviour and risk', body: 'User and entity behaviour analytics can highlight abnormal access patterns that warrant investigation or stronger controls.' },
      ]}
      deliver={[
        'Identity and access assessment',
        'Identity governance and access reviews',
        'Privileged access management',
        'Adaptive authentication and access policy',
        'Data discovery, classification and DLP',
        'UEBA and abnormal-access detection',
      ]}
      outcomes={[
        'Reduced excessive and unmanaged access',
        'Greater accountability for privileged activity',
        'Improved protection of sensitive information',
        'Better alignment between identity and data policy',
      ]}
      next={{ label: 'Assess Identity and Data Risk', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Security Analytics', 'Compliance Enablement', 'Cyber Advisory']}
    />
  )
}
