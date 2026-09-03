import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function EmailCommunicationSecurity() {
  return (
    <PageTemplate
      seo="Email Security & Phishing Protection | SechPoint SSIT"
      breadcrumb="Cybersecurity / Email & Communication Security"
      eyebrow="Email & Communication Security"
      h1="Stop communication threats before they become business incidents."
      lede="Strengthen protection against phishing, impersonation, malware and business email compromise."
      primary={{ label: 'Review Your Email Security', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Email and collaboration platforms carry sensitive information and trusted business conversations, making them a high-value target. SechPoint SSIT helps organisations combine preventive controls, contextual analysis and operational response across communication channels."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Protection before delivery', body: 'Modern email security can inspect messages, links, attachments, sender behaviour and context to identify suspicious content before it reaches users.' },
        { title: 'Defence against impersonation and BEC', body: 'Authentication controls and behavioural analysis help reduce spoofing, lookalike-domain abuse and business email compromise.' },
        { title: 'Response after delivery', body: 'Integrated investigation and remediation workflows help security teams search, quarantine and respond when a message or account is found to be malicious.' },
      ]}
      deliver={[
        'Email security assessment and architecture',
        'Anti-phishing and BEC protection',
        'Domain authentication and anti-spoofing controls',
        'Attachment, URL and malware inspection',
        'Post-delivery investigation and remediation',
        'Security awareness integration and reporting',
      ]}
      outcomes={[
        'Reduced exposure to phishing and impersonation',
        'Faster investigation of suspicious messages',
        'Improved control across email and collaboration services',
        'Stronger visibility for security operations',
      ]}
      next={{ label: 'Review Your Email Security', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Security Awareness', 'Threat Intelligence', 'Managed Security']}
    />
  )
}
