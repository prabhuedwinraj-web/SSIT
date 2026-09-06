import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function IncidentReadiness() {
  return (
    <PageTemplate
      seo="Cyber Incident Readiness & Response UAE | SechPoint SSIT"
      heroImage="/assets/incident-readiness-hero.jpg"
      breadcrumb="Services / Incident Readiness & Response"
      eyebrow="Incident Readiness & Response"
      h1="Prepare before an incident tests the business."
      lede="Build the plans, roles, evidence sources and decision paths needed for coordinated response."
      primary={{ label: 'Assess Incident Readiness', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Effective response depends on preparation. SechPoint SSIT helps organisations define how teams will detect, assess, contain, communicate and recover from cybersecurity incidents."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Readiness across people, process and technology', body: 'We review roles, escalation, playbooks, logging, evidence, communications and recovery dependencies.' },
        { title: 'Practise before pressure', body: 'Tabletop exercises help stakeholders test decisions, identify gaps and improve coordination.' },
      ]}
      deliver={[
        'Incident response plan and governance',
        'Playbook development',
        'Tabletop exercises',
        'Logging and evidence-readiness review',
        'Technical investigation support',
        'Post-incident review and improvement',
      ]}
      outcomes={[
        'Faster, more coordinated response',
        'Clear decision and escalation paths',
        'Improved evidence availability',
        'Reduced operational confusion during incidents',
      ]}
      next={{ label: 'Assess Incident Readiness', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
