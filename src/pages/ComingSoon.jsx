import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function ComingSoon({ title }) {
  return (
    <PageTemplate
      seo={title + ' | SechPoint SSIT'}
      eyebrow="SechPoint SSIT"
      h1={title}
      lede="This page is being prepared. The approved content is being built into the site — please check back shortly or speak with our team in the meantime."
      primary={{ label: 'Speak to a Security Expert', to: '/contact' }}
      secondary={{ label: 'Back to homepage', to: '/' }}
    />
  )
}
