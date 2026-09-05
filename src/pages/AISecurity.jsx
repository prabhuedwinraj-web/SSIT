import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function AISecurity() {
  return (
    <PageTemplate
      seo="AI Security & LLM Governance | SechPoint SSIT"
      breadcrumb="Cybersecurity / AI Security"
      eyebrow="AI Security"
      h1="Enable AI innovation with security and governance built in."
      lede="Protect AI models, data, infrastructure and usage without slowing responsible adoption."
      primary={{ label: 'Request an AI Security Assessment', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/cybersecurity' }}
      opening="AI introduces new value and new risk. SechPoint SSIT helps organisations establish governance and technical controls around AI applications, large language models, data pipelines and supporting infrastructure."
      pillarsLabel="Our approach"
      pillars={[
        { title: 'Governance before scale', body: 'Define approved use, ownership, risk classification, data-handling requirements and oversight before AI adoption expands.' },
        { title: 'Protect models, prompts and data', body: 'Controls may address prompt injection, sensitive-data leakage, excessive access, model integrity and insecure integrations.' },
        { title: 'Secure AI infrastructure', body: 'Identity, encryption, segmentation, workload security, logging and monitoring remain essential across training and inference environments.' },
        { title: 'Use AI responsibly in security', body: 'AI-assisted correlation, anomaly detection and orchestration can support analysts, but decisions should remain transparent, governed and validated.' },
      ]}
      deliver={[
        'AI risk and governance assessment',
        'LLM and generative AI security review',
        'Secure AI architecture and access control',
        'Model, prompt and data protection controls',
        'Adversarial testing and abuse-case assessment',
        'AI activity monitoring and incident readiness',
      ]}
      outcomes={[
        'Clear accountability for AI risk',
        'Reduced exposure of sensitive data and models',
        'Secure integration of AI into enterprise workflows',
        'Greater confidence in responsible adoption',
      ]}
      next={{ label: 'Request an AI Security Assessment', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Cyber Advisory', 'Data & Identity Security', 'Cloud & Infrastructure']}
      ctaVariant="pixel"
    />
  )
}
