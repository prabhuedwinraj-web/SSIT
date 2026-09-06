import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function UaeEInvoicingSecurity() {
  return (
    <PageTemplate
      seo="UAE e-Invoicing Cybersecurity & Integration | SechPoint SSIT"
      heroImage="/assets/uae-e-invoicing-hero.jpg"
      breadcrumb="Industry Solutions / UAE e-Invoicing Security"
      eyebrow="UAE e-Invoicing Security"
      h1="Secure the complete e-Invoicing value chain."
      lede="Protect ERP connections, integration services, APIs, ASP platforms, portals, infrastructure and data."
      primary={{ label: 'Discuss e-Invoicing Security', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="The UAE e-Invoicing ecosystem introduces connected workflows across enterprises, accredited service providers and government exchange mechanisms. SechPoint SSIT helps organisations assess and protect the architecture supporting these transactions without claiming to provide tax or legal certification."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Protect connected interfaces', body: 'API security, application protection and identity controls help secure data exchange between ERP systems, middleware, portals and ASP platforms.' },
        { title: 'Protect sensitive transaction data', body: 'Encryption, key management, data access control, logging and monitoring support confidentiality and accountability.' },
        { title: 'Build operational resilience', body: 'Infrastructure security, monitoring, incident readiness, backup and disaster recovery help maintain availability and response capability.' },
      ]}
      deliver={[
        'Architecture and threat assessment',
        'API and application security',
        'Identity and privileged access',
        'Data protection and encryption',
        'Cloud and infrastructure security',
        'Monitoring, incident readiness and recovery',
      ]}
      outcomes={[
        'Reduced exposure across integrations',
        'Stronger control of transaction data and access',
        'Improved visibility across the platform',
        'Resilient operations for critical e-Invoicing services',
      ]}
      next={{ label: 'Discuss e-Invoicing Security', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cybersecurity', 'Services', 'Contact']}
    />
  )
}
