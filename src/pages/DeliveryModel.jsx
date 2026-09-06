import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function DeliveryModel() {
  return (
    <PageTemplate
      seo="Cybersecurity Delivery Model | SechPoint SSIT"
      heroImage="/assets/delivery-model-hero.jpg"
      breadcrumb="Company / Delivery Model"
      eyebrow="Delivery Model"
      h1="From discovery to measurable improvement."
      lede="A disciplined delivery model turns technology investment into operational capability."
      primary={{ label: 'Discuss Your Requirements', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Our delivery model is designed to keep decisions connected from the first discovery workshop through architecture, implementation, transition and continuous improvement."
      pillarsLabel="How we deliver"
      pillars={[
        { title: 'Assess', body: 'We establish business context, scope, critical assets, regulatory considerations, current controls and priority risks.' },
        { title: 'Architect', body: 'We translate requirements into a target architecture, integration design, roadmap and acceptance criteria.' },
        { title: 'Integrate', body: 'We configure, connect and test technologies with attention to data flows, identity, operations and change management.' },
        { title: 'Operate', body: 'We support monitoring, governance, service management and knowledge transfer based on the agreed operating model.' },
        { title: 'Improve', body: 'We review control effectiveness, emerging risks, performance and future requirements to guide the next phase.' },
      ]}
      deliver={[
        'Discovery and stakeholder workshops',
        'Current-state and gap assessment',
        'Target architecture and implementation roadmap',
        'Integration, testing and transition',
        'Documentation, training and knowledge transfer',
        'Service review and optimisation',
      ]}
      outcomes={[
        'Reduced delivery ambiguity',
        'Better alignment between security and business requirements',
        'Clear ownership, milestones and acceptance criteria',
        'Sustainable operations after project handover',
      ]}
      next={{ label: 'Discuss Your Requirements', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cyber Advisory', 'Implementation & Integration', 'Managed Security']}
    />
  )
}
