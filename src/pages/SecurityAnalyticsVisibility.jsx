import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function SecurityAnalyticsVisibility() {
  return (
    <PageTemplate
      seo="SIEM, XDR & Security Analytics | SechPoint SSIT"
      heroImage="/assets/security-analytics-hero.jpg"
      breadcrumb="Cybersecurity / Security Analytics & Visibility"
      eyebrow="Security Analytics & Visibility"
      h1="Turn security data into decisions your team can act on."
      lede="Unify signals, add context and make detection and investigation more effective."
      primary={{ label: 'Improve Security Visibility', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Security teams need more than a high volume of alerts. They need trusted data, relevant detection logic and workflows that help them understand what matters. SechPoint SSIT helps integrate security telemetry and analytics across the enterprise."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Connected visibility', body: 'SIEM and XDR can bring together endpoint, identity, network, cloud, email and application signals to build a broader view of risk.' },
        { title: 'Contextual detection', body: 'Correlation, behaviour analytics and threat intelligence help improve alert relevance and surface suspicious patterns.' },
        { title: 'Operational workflows', body: 'Dashboards, triage processes, case management and automation should support the team’s actual operating model.' },
      ]}
      deliver={[
        'SIEM architecture and use-case development',
        'XDR integration and optimisation',
        'UEBA and behavioural analytics',
        'Log-source onboarding and data-quality review',
        'Detection engineering and alert tuning',
        'Dashboards, reporting and workflow integration',
      ]}
      outcomes={[
        'Greater visibility across control domains',
        'Higher-quality detection and investigation',
        'Reduced alert noise through tuning and context',
        'Better measurement of security operations',
      ]}
      next={{ label: 'Improve Security Visibility', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Managed Security', 'Threat Intelligence', 'Endpoint Security']}
    />
  )
}
