import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Support() {
  return (
    <PageTemplate
      seo="SechPoint SSIT Support | Customer Assistance"
      breadcrumb="Support"
      eyebrow="Support"
      h1="Get the right support through the right channel."
      lede="Existing customers can access the support route defined for their service or project."
      primary={{ label: 'Access Customer Support', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/services/support-services' }}
      opening="Support access, coverage hours, severity definitions and escalation contacts vary by contract. This page provides a secure sign-in or approved intake route without exposing internal email lists or operational details."
      pillarsLabel="Before you reach out"
      pillars={[
        { title: 'Before submitting', body: 'Have the customer name, service or platform, impact, start time and relevant non-sensitive details available.' },
        { title: 'Critical incidents', body: 'Follow the contracted emergency process. Do not rely on a general website form for urgent or sensitive incident handling.' },
      ]}
      deliver={[
        'Customer support portal or approved ticketing route',
        'Service scope and entitlement guidance',
        'Severity and escalation overview',
        'Secure file-transfer instructions',
        'Maintenance and status communications',
        'General support contact for routing',
      ]}
      outcomes={[
        'Consistent support intake',
        'Reduced routing delays',
        'Protection of sensitive information',
        'Clearer customer expectations',
      ]}
      next={{ label: 'Access Customer Support', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Contact', 'Support Services']}
    />
  )
}
