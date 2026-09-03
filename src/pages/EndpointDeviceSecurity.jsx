import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function EndpointDeviceSecurity() {
  return (
    <PageTemplate
      seo="Endpoint & Device Security Solutions | SechPoint SSIT"
      breadcrumb="Cybersecurity / Endpoint & Device Security"
      eyebrow="Endpoint & Device Security"
      h1="Protect every endpoint without losing operational control."
      lede="Bring prevention, detection, response and device management into a coordinated endpoint strategy."
      primary={{ label: 'Assess Your Endpoint Security', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="Endpoints remain a common path into enterprise environments. SechPoint SSIT helps organisations strengthen protection across user devices, servers and other managed assets while improving visibility for security and IT operations."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Protection informed by behaviour', body: 'Endpoint controls can combine malware prevention, behavioural analytics and detection capabilities to identify suspicious activity that traditional signatures may miss.' },
        { title: 'Coordinated investigation and response', body: 'EDR and XDR integrations help teams correlate endpoint activity with identity, network, email and cloud signals for faster investigation.' },
        { title: 'Operational device visibility', body: 'Where appropriate, device management and remote monitoring improve asset visibility, policy enforcement and lifecycle control.' },
      ]}
      deliver={[
        'Endpoint protection platform assessment and deployment',
        'EDR/XDR architecture and integration',
        'Device visibility and policy management',
        'Automated containment and response workflows',
        'Endpoint hardening and configuration review',
        'Operational dashboards and reporting',
      ]}
      outcomes={[
        'Improved visibility across managed endpoints',
        'Faster investigation and containment',
        'More consistent endpoint policy enforcement',
        'Reduced operational fragmentation',
      ]}
      faqs={[
        ['What is the difference between EDR and XDR?', 'EDR focuses on endpoint telemetry and response. XDR correlates signals across multiple control domains to support broader detection and investigation.'],
        ['Can SSIT integrate with our current SOC tools?', 'Integration requirements are assessed during discovery and may include SIEM, SOAR, identity, network and ticketing systems.'],
      ]}
      next={{ label: 'Assess Your Endpoint Security', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Security Analytics', 'Managed Security', 'Incident Readiness']}
    />
  )
}
