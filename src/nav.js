import {
  faLaptop, faEnvelope, faNetworkWired, faFingerprint, faShieldVirus, faChartLine, faRobot,
  faComments, faClipboardCheck, faSitemap, faGears, faUserShield, faTriangleExclamation, faFileContract, faHeadset,
  faCloud, faLayerGroup, faServer, faDatabase,
  faFileInvoiceDollar, faLandmark, faBuildingColumns, faHeartPulse, faBolt, faBuilding,
  faCircleInfo, faDiagramProject, faHandshake, faLightbulb, faCalendarDays, faPhone,
} from '@fortawesome/free-solid-svg-icons'

// Primary navigation. Each group has an overview route (to) and items with routes + icons.
export const GROUPS = [
  {
    label: 'Cybersecurity', to: '/cybersecurity',
    blurb: 'Controls across users, devices, data and networks.',
    items: [
      { label: 'Endpoint & Device', to: '/cybersecurity/endpoint-device-security', icon: faLaptop },
      { label: 'Email & Communication', to: '/cybersecurity/email-communication-security', icon: faEnvelope },
      { label: 'Network & Infrastructure', to: '/cybersecurity/network-infrastructure-security', icon: faNetworkWired },
      { label: 'Data & Identity', to: '/cybersecurity/data-identity-security', icon: faFingerprint },
      { label: 'Threat Intelligence', to: '/cybersecurity/threat-intelligence-response', icon: faShieldVirus },
      { label: 'Security Analytics', to: '/cybersecurity/security-analytics-visibility', icon: faChartLine },
      { label: 'AI Security', to: '/cybersecurity/ai-security', icon: faRobot },
    ],
  },
  {
    label: 'Services', to: '/services/cyber-advisory',
    blurb: 'From advisory and assessment through to managed operations.',
    items: [
      { label: 'Cyber Advisory', to: '/services/cyber-advisory', icon: faComments },
      { label: 'Security Assessments', to: '/services/security-assessments', icon: faClipboardCheck },
      { label: 'Architecture', to: '/services/security-architecture', icon: faSitemap },
      { label: 'Implementation & Integration', to: '/services/implementation-integration', icon: faGears },
      { label: 'Managed Security', to: '/services/managed-security', icon: faUserShield },
      { label: 'Incident Readiness', to: '/services/incident-readiness', icon: faTriangleExclamation },
      { label: 'Compliance Enablement', to: '/services/compliance-enablement', icon: faFileContract },
      { label: 'Support', to: '/services/support-services', icon: faHeadset },
    ],
  },
  {
    label: 'Digital Infrastructure', to: '/digital-infrastructure',
    blurb: 'Resilient platforms for workloads and recovery.',
    items: [
      { label: 'HCI & Private Cloud', to: '/digital-infrastructure/hci-private-cloud', icon: faCloud },
      { label: 'Virtualisation', to: '/digital-infrastructure/hci-private-cloud', icon: faLayerGroup },
      { label: 'Data Centre', to: '/digital-infrastructure', icon: faServer },
      { label: 'Backup & Disaster Recovery', to: '/digital-infrastructure/backup-disaster-recovery', icon: faDatabase },
    ],
  },
  {
    label: 'Industry Solutions', to: '/industry-solutions/uae-e-invoicing-security',
    blurb: 'Sector programmes and regulatory requirements.',
    items: [
      { label: 'UAE e-Invoicing', to: '/industry-solutions/uae-e-invoicing-security', icon: faFileInvoiceDollar },
      { label: 'Government', to: '/industry-solutions/government', icon: faLandmark },
      { label: 'Financial Services', to: '/industry-solutions/financial-services', icon: faBuildingColumns },
      { label: 'Healthcare', to: '/industry-solutions/healthcare', icon: faHeartPulse },
      { label: 'Energy', to: '/industry-solutions/energy-utilities', icon: faBolt },
      { label: 'Enterprise', to: '/industry-solutions/enterprise', icon: faBuilding },
    ],
  },
  {
    label: 'Company', to: '/about',
    blurb: 'How we work, who we work with, and how to reach us.',
    items: [
      { label: 'About', to: '/about', icon: faCircleInfo },
      { label: 'Delivery Model', to: '/delivery-model', icon: faDiagramProject },
      { label: 'Partners', to: '/partners', icon: faHandshake },
      { label: 'Insights', to: '/insights', icon: faLightbulb },
      { label: 'Events', to: '/events', icon: faCalendarDays },
      { label: 'Contact', to: '/contact', icon: faPhone },
    ],
  },
]

// Flat label -> route map (built from GROUPS, plus extras used in copy / related links).
export const ROUTE_FOR = (() => {
  const m = {}
  GROUPS.forEach((g) => {
    m[g.label] = g.to
    g.items.forEach((it) => { m[it.label] = it.to })
  })
  Object.assign(m, {
    'Cybersecurity': '/cybersecurity',
    'Digital Infrastructure': '/digital-infrastructure',
    'Case Studies': '/case-studies',
    'Support': '/support',
    'Privacy': '/privacy',
    'Contact': '/contact',
    // Related-link aliases used in body copy
    'Endpoint Security': '/cybersecurity/endpoint-device-security',
    'Data & Identity Security': '/cybersecurity/data-identity-security',
    'Cloud & Infrastructure': '/digital-infrastructure',
    'Security Awareness': '/cybersecurity/email-communication-security',
    'Network Security': '/cybersecurity/network-infrastructure-security',
    'Services': '/services/cyber-advisory',
  })
  return m
})()

export const routeForLabel = (label) => ROUTE_FOR[label] || '/contact'
