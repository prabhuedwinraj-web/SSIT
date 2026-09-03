import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function ThreatIntelligenceResponse() {
  return (
    <PageTemplate
      seo="Threat Intelligence & Threat Hunting | SechPoint SSIT"
      breadcrumb="Cybersecurity / Threat Intelligence, Hunting & Response"
      eyebrow="Threat Intelligence, Hunting & Response"
      h1="Move from threat information to informed action."
      lede="Prioritise relevant threats, hunt for early indicators and coordinate response."
      primary={{ label: 'Strengthen Threat Operations', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Threat intelligence creates value only when it is relevant to the organisation and connected to security operations. SechPoint SSIT helps teams collect, contextualise and operationalise intelligence across investigation, hunting and response workflows."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Intelligence that reflects your risk', body: 'External feeds, internal telemetry, brand exposure and business context can be combined to identify the threats most relevant to the organisation.' },
        { title: 'Proactive threat hunting', body: 'Hypothesis-led hunts examine endpoints, identity, network, email and cloud data for behaviours that may not have triggered an alert.' },
        { title: 'Orchestrated response', body: 'Integration with SIEM, SOAR and case-management workflows can improve consistency and reduce manual effort during investigation.' },
      ]}
      deliver={[
        'Threat intelligence requirements and integration',
        'Threat feed aggregation and enrichment',
        'Dark web and brand exposure monitoring',
        'Threat-hunting use cases and playbooks',
        'Incident investigation support',
        'SOAR workflow and response automation',
      ]}
      outcomes={[
        'More relevant threat prioritisation',
        'Earlier identification of suspicious activity',
        'Improved investigation consistency',
        'Reduced manual hand-offs across response workflows',
      ]}
      next={{ label: 'Strengthen Threat Operations', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Security Analytics', 'Managed Security', 'Incident Readiness']}
    />
  )
}
