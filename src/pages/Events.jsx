import React from 'react'
import PageTemplate from '../PageTemplate.jsx'

export default function Events() {
  return (
    <PageTemplate
      seo="Cybersecurity Events & Webinars | SechPoint SSIT"
      breadcrumb="Company / Events"
      eyebrow="Events"
      h1="Connect with SechPoint SSIT experts."
      lede="Join practical sessions on cyber risk, secure architecture, AI security, infrastructure and operational resilience."
      primary={{ label: 'View Upcoming Events', to: '/contact' }}
      secondary={{ label: 'Explore Related Capabilities', to: '/insights' }}
      opening="Each event page includes title, date, time zone, location, target audience, agenda, speakers, registration, privacy notice and post-event resources. Upcoming and on-demand sessions will appear here."
      pillarsLabel="How it works"
      pillars={[
        { title: 'Before the event', body: 'A focused landing page with search-friendly context, clear audience, outcomes and registration.' },
        { title: 'After the event', body: 'The page is updated with presentations, recordings, related insight and a consultation next step rather than deleted.' },
      ]}
      deliver={[
        'In-person executive roundtables',
        'Technical workshops',
        'Customer and partner webinars',
        'Conference participation',
        'On-demand recordings',
        'Post-event resources',
      ]}
      outcomes={[
        'Stronger engagement with priority audiences',
        'Reusable event content',
        'Improved campaign attribution',
        'Clear route to follow-up conversations',
      ]}
      next={{ label: 'View Upcoming Events', blurb: 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.' }}
      related={['Insights', 'Contact']}
    />
  )
}
