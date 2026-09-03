import React from 'react'
import { createRoot } from 'react-dom/client'
import './liquid-grid.js'
import './wave-arcs.js'
import './index.css'
import { useRoute } from './router.jsx'
import App from './App.jsx'
import About from './pages/About.jsx'
import DeliveryModel from './pages/DeliveryModel.jsx'
import CybersecurityOverview from './pages/CybersecurityOverview.jsx'
import EndpointDeviceSecurity from './pages/EndpointDeviceSecurity.jsx'
import EmailCommunicationSecurity from './pages/EmailCommunicationSecurity.jsx'
import NetworkInfrastructureSecurity from './pages/NetworkInfrastructureSecurity.jsx'
import DataIdentitySecurity from './pages/DataIdentitySecurity.jsx'
import ThreatIntelligenceResponse from './pages/ThreatIntelligenceResponse.jsx'
import SecurityAnalyticsVisibility from './pages/SecurityAnalyticsVisibility.jsx'
import AISecurity from './pages/AISecurity.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

// Built pages by route. Everything else falls back to a graceful "in progress" page.
const PAGES = {
  '/': App,
  '/about': About,
  '/delivery-model': DeliveryModel,
  '/cybersecurity': CybersecurityOverview,
  '/cybersecurity/endpoint-device-security': EndpointDeviceSecurity,
  '/cybersecurity/email-communication-security': EmailCommunicationSecurity,
  '/cybersecurity/network-infrastructure-security': NetworkInfrastructureSecurity,
  '/cybersecurity/data-identity-security': DataIdentitySecurity,
  '/cybersecurity/threat-intelligence-response': ThreatIntelligenceResponse,
  '/cybersecurity/security-analytics-visibility': SecurityAnalyticsVisibility,
  '/cybersecurity/ai-security': AISecurity,
}

function titleFromPath(p) {
  const seg = p.split('/').filter(Boolean).pop() || 'Page'
  return seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function Root() {
  const path = useRoute()
  const Page = PAGES[path]
  if (Page) return <Page />
  return <ComingSoon title={titleFromPath(path)} />
}

createRoot(document.getElementById('root')).render(<Root />)
