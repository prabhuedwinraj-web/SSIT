import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function SecurityAssessments() {
  return (
    <PageTemplate
      seo="Cybersecurity Assessment & Gap Analysis UAE | SechPoint SSIT"
      breadcrumb="Services / Security Assessments"
      eyebrow="Security Assessments"
      h1="Understand your exposure. Prioritise what matters."
      lede="Establish a clear, evidence-based view of risk across technology, process and control."
      primary={{ label: 'Request a Security Assessment', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Our assessments help organisations identify gaps, validate assumptions and define a focused improvement plan. Scope can cover the enterprise or a specific domain such as identity, endpoint, network, data, cloud or security operations."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Evidence-led review', body: 'We combine documentation, stakeholder input, configuration evidence and technical analysis appropriate to the agreed scope.' },
        { title: 'Prioritised findings', body: 'Findings are grouped by risk, business impact, effort and dependency to support realistic remediation.' },
      ]}
      deliver={[
        'Cybersecurity posture assessment',
        'Control and maturity assessment',
        'Architecture and configuration review',
        'Identity, data, endpoint or network assessment',
        'Cloud security review',
        'Remediation roadmap and executive report',
      ]}
      outcomes={[
        'Clear view of current posture',
        'Risk-based remediation priorities',
        'Improved audit and governance readiness',
        'A measurable baseline for improvement',
      ]}
      next={{ label: 'Request a Security Assessment', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Contact']}
    />
  )
}
