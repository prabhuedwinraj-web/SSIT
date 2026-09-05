import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function NetworkInfrastructureSecurity() {
  return (
    <PageTemplate
      seo="Network & Infrastructure Security | SechPoint SSIT"
      heroImage="/assets/network-infrastructure-hero.jpg"
      breadcrumb="Cybersecurity / Network & Infrastructure Security"
      eyebrow="Network & Infrastructure Security"
      h1="Make the network an active layer of cyber defence."
      lede="Gain visibility, enforce trust boundaries and detect suspicious movement across enterprise infrastructure."
      primary={{ label: 'Discuss Your Network Security Architecture', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="The network connects users, workloads, applications and data. SechPoint SSIT helps organisations secure this connective layer through architecture, segmentation, access control, monitoring and integrated threat detection."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Visibility before control', body: 'Effective network security begins with understanding assets, traffic flows, dependencies and exposed services.' },
        { title: 'Segmentation and Zero Trust principles', body: 'Policies should limit unnecessary access and reduce the impact of compromised credentials, devices or workloads.' },
        { title: 'Detection across traffic and behaviour', body: 'Firewall, intrusion detection and network analytics can reveal anomalies, suspicious lateral movement and command-and-control activity.' },
      ]}
      deliver={[
        'Network security assessment and design',
        'Firewall and secure gateway integration',
        'IDS/IPS and network detection',
        'Network access control and segmentation',
        'Secure remote access and Zero Trust patterns',
        'Traffic analytics and security monitoring',
      ]}
      outcomes={[
        'Reduced attack paths and lateral movement',
        'Clearer visibility of network activity',
        'More consistent policy enforcement',
        'Improved detection across hybrid infrastructure',
      ]}
      next={{ label: 'Discuss Your Network Security Architecture', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Security Analytics', 'Digital Infrastructure', 'Cyber Advisory']}
    />
  )
}
