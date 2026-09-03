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
import CyberAdvisory from './pages/CyberAdvisory.jsx'
import SecurityAssessments from './pages/SecurityAssessments.jsx'
import SecurityArchitecture from './pages/SecurityArchitecture.jsx'
import ImplementationIntegration from './pages/ImplementationIntegration.jsx'
import ManagedSecurity from './pages/ManagedSecurity.jsx'
import IncidentReadiness from './pages/IncidentReadiness.jsx'
import ComplianceEnablement from './pages/ComplianceEnablement.jsx'
import SupportServices from './pages/SupportServices.jsx'
import DigitalInfrastructureOverview from './pages/DigitalInfrastructureOverview.jsx'
import HciPrivateCloud from './pages/HciPrivateCloud.jsx'
import BackupDisasterRecovery from './pages/BackupDisasterRecovery.jsx'
import UaeEInvoicingSecurity from './pages/UaeEInvoicingSecurity.jsx'
import Government from './pages/Government.jsx'
import FinancialServices from './pages/FinancialServices.jsx'
import Healthcare from './pages/Healthcare.jsx'
import EnergyUtilities from './pages/EnergyUtilities.jsx'
import Enterprise from './pages/Enterprise.jsx'
import Partners from './pages/Partners.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Insights from './pages/Insights.jsx'
import Events from './pages/Events.jsx'
import Contact from './pages/Contact.jsx'
import Support from './pages/Support.jsx'
import Privacy from './pages/Privacy.jsx'
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
  '/services/cyber-advisory': CyberAdvisory,
  '/services/security-assessments': SecurityAssessments,
  '/services/security-architecture': SecurityArchitecture,
  '/services/implementation-integration': ImplementationIntegration,
  '/services/managed-security': ManagedSecurity,
  '/services/incident-readiness': IncidentReadiness,
  '/services/compliance-enablement': ComplianceEnablement,
  '/services/support-services': SupportServices,
  '/digital-infrastructure': DigitalInfrastructureOverview,
  '/digital-infrastructure/hci-private-cloud': HciPrivateCloud,
  '/digital-infrastructure/backup-disaster-recovery': BackupDisasterRecovery,
  '/industry-solutions/uae-e-invoicing-security': UaeEInvoicingSecurity,
  '/industry-solutions/government': Government,
  '/industry-solutions/financial-services': FinancialServices,
  '/industry-solutions/healthcare': Healthcare,
  '/industry-solutions/energy-utilities': EnergyUtilities,
  '/industry-solutions/enterprise': Enterprise,
  '/partners': Partners,
  '/case-studies': CaseStudies,
  '/insights': Insights,
  '/events': Events,
  '/contact': Contact,
  '/support': Support,
  '/privacy': Privacy,
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
