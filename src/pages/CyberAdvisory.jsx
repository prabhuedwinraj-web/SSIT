import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function CyberAdvisory() {
  return (
    <PageTemplate
      seo="Cybersecurity Advisory Services UAE | SechPoint SSIT"
      breadcrumb="Services / Cyber Advisory"
      eyebrow="Cyber Advisory"
      h1="Turn cyber risk into a practical business roadmap."
      lede="Align security investment, architecture and governance with business priorities."
      primary={{ label: 'Schedule an Advisory Session', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="SechPoint SSIT provides structured advisory support for organisations that need clarity on risk, priorities and the path forward. We connect business context with technical reality to produce decisions that can be implemented."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Strategy grounded in context', body: 'We consider critical services, risk appetite, regulatory obligations, current maturity and planned transformation.' },
        { title: 'Advice that leads to action', body: 'Recommendations are translated into sequenced initiatives, architecture decisions, ownership and measurable outcomes.' },
      ]}
      deliver={[
        'Cybersecurity strategy and roadmap',
        'Security operating-model review',
        'Control and architecture advisory',
        'Technology evaluation and selection support',
        'Board and executive risk communication',
        'Programme governance support',
      ]}
      outcomes={[
        'Prioritised security investment',
        'Clearer executive decision-making',
        'Reduced duplication and technology sprawl',
        'Roadmaps linked to business outcomes',
      ]}
      next={{ label: 'Schedule an Advisory Session', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
