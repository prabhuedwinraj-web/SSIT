import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Privacy() {
  return (
    <PageTemplate
      seo="Privacy Policy | SechPoint SSIT"
      breadcrumb="Legal / Privacy"
      eyebrow="Privacy"
      h1="Your privacy matters."
      lede="Understand what information is collected, why it is used and how to exercise your rights."
      primary={{ label: 'Contact the Privacy Team', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="This policy requires legal review before publication. It will accurately describe the legal entity, controller and contact details, categories of data, purposes, legal bases where applicable, recipients, transfers, retention, security, cookies and data-subject rights."
      pillarsLabel="What this policy covers"
      pillars={[
        { title: 'Website enquiries', body: 'The information collected, its purpose, routing, retention and whether marketing consent is captured separately.' },
        { title: 'Analytics and cookies', body: 'The actual tools and categories used. The policy will match the consent-management implementation.' },
        { title: 'International processing', body: 'Cross-border processing is described only after confirming hosting, CRM, marketing and support systems.' },
      ]}
      deliver={[
        'Controller identity and contact',
        'Data categories and purposes',
        'Lawful basis / consent language',
        'Sharing and international transfers',
        'Retention and security',
        'Rights and complaint process',
      ]}
      outcomes={[
        'Transparent data handling',
        'Alignment between policy and implementation',
        'Clear contact route for privacy requests',
      ]}
      next={{ label: 'Contact the Privacy Team', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cookie Policy', 'Contact']}
    />
  )
}
