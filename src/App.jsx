import React, { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboardCheck, faDiagramProject, faShieldHalved, faMagnifyingGlassChart, faServer, faRobot,
  faLaptop, faEnvelope, faNetworkWired, faFingerprint, faShieldVirus, faChartLine,
  faComments, faSitemap, faGears, faUserShield, faTriangleExclamation, faFileContract, faHeadset,
  faCloud, faLayerGroup, faDatabase,
  faFileInvoiceDollar, faLandmark, faBuildingColumns, faHeartPulse, faBolt, faBuilding,
  faCircleInfo, faHandshake, faLightbulb, faCalendarDays, faPhone,
} from '@fortawesome/free-solid-svg-icons'

// Icons for the capability cards (aligned with CAPS order)
const CAP_ICONS = [faClipboardCheck, faDiagramProject, faShieldHalved, faMagnifyingGlassChart, faServer, faRobot]

// Icons for nav-drawer items, keyed by label
const NAV_ICONS = {
  // Cybersecurity
  'Endpoint & Device': faLaptop,
  'Email & Communication': faEnvelope,
  'Network & Infrastructure': faNetworkWired,
  'Data & Identity': faFingerprint,
  'Threat Intelligence': faShieldVirus,
  'Security Analytics': faChartLine,
  'AI Security': faRobot,
  // Services
  'Cyber Advisory': faComments,
  'Security Assessments': faClipboardCheck,
  'Architecture': faSitemap,
  'Implementation & Integration': faGears,
  'Managed Security': faUserShield,
  'Incident Readiness': faTriangleExclamation,
  'Compliance Enablement': faFileContract,
  'Support': faHeadset,
  // Digital Infrastructure
  'HCI & Private Cloud': faCloud,
  'Virtualisation': faLayerGroup,
  'Data Centre': faServer,
  'Backup & Disaster Recovery': faDatabase,
  // Industry Solutions
  'UAE e-Invoicing': faFileInvoiceDollar,
  'Government': faLandmark,
  'Financial Services': faBuildingColumns,
  'Healthcare': faHeartPulse,
  'Energy': faBolt,
  'Enterprise': faBuilding,
  // Company
  'About': faCircleInfo,
  'Delivery Model': faDiagramProject,
  'Partners': faHandshake,
  'Insights': faLightbulb,
  'Events': faCalendarDays,
  'Contact': faPhone,
}

/* Parse an inline CSS string into a React style object (camelCased keys).
   Lets us port the design's inline styles almost verbatim. */
function st(cssText) {
  const out = {}
  String(cssText).split(';').forEach((decl) => {
    const i = decl.indexOf(':')
    if (i === -1) return
    const prop = decl.slice(0, i).trim()
    const val = decl.slice(i + 1).trim()
    if (!prop) return
    const key = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    out[key] = val
  })
  return out
}

const LOGO = 'assets/sechpoint-logo.svg'

const GROUPS = [
  { label: 'Cybersecurity', blurb: 'Controls across users, devices, data and networks.', items: ['Endpoint & Device', 'Email & Communication', 'Network & Infrastructure', 'Data & Identity', 'Threat Intelligence', 'Security Analytics', 'AI Security'] },
  { label: 'Services', blurb: 'From advisory and assessment through to managed operations.', items: ['Cyber Advisory', 'Security Assessments', 'Architecture', 'Implementation & Integration', 'Managed Security', 'Incident Readiness', 'Compliance Enablement', 'Support'] },
  { label: 'Digital Infrastructure', blurb: 'Resilient platforms for workloads and recovery.', items: ['HCI & Private Cloud', 'Virtualisation', 'Data Centre', 'Backup & Disaster Recovery'] },
  { label: 'Industry Solutions', blurb: 'Sector programmes and regulatory requirements.', items: ['UAE e-Invoicing', 'Government', 'Financial Services', 'Healthcare', 'Energy', 'Enterprise'] },
  { label: 'Company', blurb: 'How we work, who we work with, and how to reach us.', items: ['About', 'Delivery Model', 'Partners', 'Insights', 'Events', 'Contact'] },
]

const STEPS = [
  { name: 'Identify', note: 'Asset visibility' },
  { name: 'Protect', note: 'Access control' },
  { name: 'Detect', note: 'Analytics' },
  { name: 'Respond', note: 'Incident readiness' },
  { name: 'Recover', note: 'Recovery planning' },
]

const CAPS = [
  'Cyber advisory and security assessments',
  'Security architecture, implementation and integration',
  'Endpoint, email, network, data and identity security',
  'Threat intelligence, analytics and managed security',
  'HCI, private cloud, virtualisation and disaster recovery',
  'AI security governance and protection',
]

const OUTS = [
  'Clearer understanding of exposure and priorities',
  'Integrated controls across users, data, applications and infrastructure',
  'Faster, more consistent security operations',
  'Scalable architecture aligned to business growth',
  'A defined path from assessment through continuous improvement',
]

const FAQ_DATA = [
  ['Does SechPoint SSIT work with existing security investments?', 'Yes. Engagements can begin with the current environment, identify gaps and integrate or optimise existing platforms before recommending additional controls.'],
  ['Can SSIT support both cybersecurity and infrastructure projects?', 'Yes. The SSIT proposition connects security architecture with infrastructure, cloud, virtualisation and operational requirements.'],
  ['How does an engagement begin?', 'Most engagements begin with a discovery session to understand scope, business priorities, current architecture, risk and desired outcomes.'],
]

const PILLAR_DATA = [
  { title: 'From fragmented tools to coordinated resilience', body: 'We align people, process and technology around the assets and business services that matter most. Our approach connects security controls, infrastructure and operational workflows so customers can make informed decisions and respond with greater confidence.' },
  { title: 'A practical framework for cyber defence', body: 'We support the security lifecycle across Identify, Protect, Detect, Respond and Recover — from asset visibility and access control to analytics, incident readiness and recovery planning.' },
  { title: 'Built around your environment', body: 'Our vendor-agnostic approach starts with business priorities, existing investments and risk. We then design an architecture and delivery roadmap suited to the organisation rather than forcing a predetermined technology stack.' },
]

const BARS = [['26px', '16px', '10px'], ['10px', '26px', '16px'], ['16px', '10px', '26px'], ['26px', '10px', '16px'], ['10px', '16px', '26px'], ['16px', '26px', '10px']]

const SCATTER = [[4, 6, '-12deg'], [52, 22, '8deg'], [98, 2, '18deg'], [18, 46, '22deg'], [70, 58, '-16deg'], [124, 38, '6deg'], [2, 84, '10deg'], [58, 88, '-8deg'], [112, 76, '14deg']]

const CLOSING_LINKS = ['Cybersecurity', 'Services', 'Digital Infrastructure', 'Industry Solutions', 'Contact']

/* ---- Proof section data (all illustrative / placeholder) ---- */
const PROOF_STATS = [
  { k: 'S–01', to: 40, suffix: '+', label: 'certified specialists' },
  { k: 'S–02', to: 250, suffix: '+', label: 'completed projects' },
  { k: 'S–03', to: 12, suffix: '', label: 'countries supported' },
]

const CERTS = ['ISO/IEC 27001', 'SOC 2 Type II', 'CREST', 'PCI DSS', 'Microsoft Solutions Partner', 'Fortinet Advanced', 'Palo Alto NextWave', 'Cisco Premier']

const PARTNERS = [
  { name: 'Aegis', mark: 'shield' },
  { name: 'Nimbus', mark: 'cloud' },
  { name: 'Vaultline', mark: 'vault' },
  { name: 'Corewave', mark: 'wave' },
  { name: 'Sentinel', mark: 'eye' },
  { name: 'Halcyon', mark: 'orbit' },
  { name: 'Meridian', mark: 'diamond' },
  { name: 'Ironclad', mark: 'hex' },
]

function PartnerMark({ type }) {
  const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinejoin: 'round', strokeLinecap: 'round' }
  switch (type) {
    case 'shield': return (<svg {...common}><path d="M12 2.5l7 3v6c0 4.4-3 7.4-7 8.9-4-1.5-7-4.5-7-8.9v-6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>)
    case 'cloud': return (<svg {...common}><path d="M7 17.5h9.2a3.6 3.6 0 000-7.2 5.2 5.2 0 00-10-1.3A3.4 3.4 0 007 17.5z" /></svg>)
    case 'vault': return (<svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2" /></svg>)
    case 'wave': return (<svg {...common}><path d="M2.5 9c3-3 6.5 3 9.5 0s6.5-3 9.5 0" /><path d="M2.5 15c3-3 6.5 3 9.5 0s6.5-3 9.5 0" /></svg>)
    case 'eye': return (<svg {...common}><path d="M2 12s3.6-6.2 10-6.2S22 12 22 12s-3.6 6.2-10 6.2S2 12 2 12z" /><circle cx="12" cy="12" r="2.6" /></svg>)
    case 'orbit': return (<svg {...common}><circle cx="12" cy="12" r="3.4" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(-28 12 12)" /></svg>)
    case 'diamond': return (<svg {...common}><path d="M12 2.5l9.5 9.5L12 21.5 2.5 12z" /><path d="M7 12l5-5 5 5-5 5z" /></svg>)
    case 'hex': return (<svg {...common}><path d="M12 2.5l8.3 4.8v9.4L12 21.5l-8.3-4.8V7.3z" /></svg>)
    default: return null
  }
}

/* Count-up that runs once when scrolled into view. */
function CountUp({ to, suffix = '', duration = 1500 }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) { setN(to); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const t0 = performance.now()
          const step = (t) => {
            const p = Math.min(1, (t - t0) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(to * eased))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])
  return <span ref={ref}>{n}{suffix}</span>
}

export default function App({ accent = '#00baeb', lifecycleAutoplay = true, showProof = true }) {
  const [menu, setMenu] = useState(null)
  const [step, setStep] = useState(0)
  const [faq, setFaq] = useState(0)
  const [pillar, setPillar] = useState(1)
  const [scrolled, setScrolled] = useState(false)
  const [compactOpen, setCompactOpen] = useState(false)
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440)

  // Scroll reveal + scrolled state + width tracking (ported from DC componentDidMount)
  useEffect(() => {
    const prep = () => {
      let n = 0
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.dataset.revealed) return
        if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
          el.style.transitionDelay = Math.min(n++, 4) * 60 + 'ms'
          el.classList.add('pre')
        } else {
          el.dataset.revealed = '1'
          el.classList.remove('pre')
        }
      })
    }
    const tick = () =>
      document.querySelectorAll('[data-reveal].pre').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.dataset.revealed = '1'
          el.classList.remove('pre')
        }
      })
    prep()
    const onScroll = () =>
      requestAnimationFrame(() => {
        tick()
        setScrolled(window.scrollY > 40)
      })
    const onResize = () => {
      onScroll()
      setW(window.innerWidth)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    setW(window.innerWidth)
    let t = setInterval(() => { prep(); tick() }, 500)
    const to = setTimeout(() => { clearInterval(t); t = setInterval(tick, 400) }, 5000)
    return () => {
      clearInterval(t)
      clearTimeout(to)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Lifecycle autoplay (Identify → Recover)
  useEffect(() => {
    if (lifecycleAutoplay === false) return
    const i = setInterval(() => setStep((s) => (s + 1) % 5), 2400)
    return () => clearInterval(i)
  }, [lifecycleAutoplay])

  const wide = w >= 1150
  const open = wide ? menu : null
  const g = open == null ? null : GROUPS[open]

  const headerActive = scrolled || open != null || compactOpen
  const headerBg = headerActive ? 'rgba(5,5,6,.82)' : 'transparent'
  const headerBlur = headerActive ? 'blur(18px)' : 'none'
  const headerBorder = headerActive ? 'rgba(255,255,255,.06)' : 'transparent'

  const cycleProgress = ((step + 1) / 5) * 100 + '%'
  const pillarCounter = '0' + (pillar + 1) + ' / 03'

  return (
    <div style={{ minHeight: '100vh', background: '#050506' }}>
      {/* ============ HEADER ============ */}
      <header
        onMouseLeave={() => setMenu(null)}
        style={{
          position: 'sticky', top: 0, zIndex: 70,
          background: headerBg, backdropFilter: headerBlur, WebkitBackdropFilter: headerBlur,
          borderBottom: '1px solid ' + headerBorder,
          transition: 'background .3s ease, border-color .3s ease',
        }}
      >
        <div style={st("max-width:1440px;margin:0 auto;padding:0 clamp(20px,2.6vw,40px);height:76px;display:flex;align-items:center;gap:clamp(16px,2.2vw,36px);min-width:0")}>
          <a href="#top" style={st("flex:none;display:flex;align-items:center")}>
            <img src={LOGO} alt="SechPoint SSIT" width="139" height="34" style={st("height:clamp(26px,2.6vw,34px);width:auto;display:block")} />
          </a>

          {wide && (
            <nav style={st("display:flex;align-items:center;gap:2px;flex:1 1 auto;min-width:0")}>
              {GROUPS.map((grp, i) => (
                <button
                  key={grp.label}
                  type="button"
                  className="hv-navbtn"
                  onMouseEnter={() => setMenu(i)}
                  onFocus={() => setMenu(i)}
                  style={st(`border:0;background:${open === i ? 'rgba(255,255,255,.08)' : 'transparent'};color:${open === i ? '#f2f5fa' : 'rgba(242,245,250,.66)'};padding:10px clamp(11px,1.1vw,16px);border-radius:10px;font:500 clamp(13px,1vw,15px) 'Funnel Display',sans-serif;letter-spacing:-.015em;cursor:pointer;white-space:nowrap;flex:none;transition:background .2s ease,color .2s ease`)}
                >
                  {grp.label}
                </button>
              ))}
            </nav>
          )}

          {!wide && (
            <div style={st("flex:1;display:flex;justify-content:flex-end")}>
              <button
                type="button"
                onClick={() => setCompactOpen((v) => !v)}
                style={st(`border:1px solid rgba(255,255,255,.12);background:${compactOpen ? 'rgba(255,255,255,.08)' : 'transparent'};color:#f2f5fa;padding:10px 16px;border-radius:10px;font:500 14px 'Funnel Display',sans-serif;letter-spacing:-.015em;cursor:pointer;display:flex;align-items:center;gap:10px`)}
              >
                <span style={st("display:flex;flex-direction:column;gap:3px")}>
                  <span style={st("width:14px;height:1.5px;background:#f2f5fa;display:block")}></span>
                  <span style={st("width:14px;height:1.5px;background:#f2f5fa;display:block")}></span>
                </span>
                Menu
              </button>
            </div>
          )}

          <div style={st("flex:none;display:flex;align-items:center;gap:clamp(10px,1.4vw,20px)")}>
            {wide && (
              <a href="#faq" className="hv-insights" style={st("font-size:clamp(13px,1.05vw,14.5px);color:rgba(242,245,250,.66);white-space:nowrap")}>Insights</a>
            )}
            <a href="#contact" className="hv-cta m-hide-xs" style={st("background:#f2f5fa;color:#050506;padding:11px 20px;border-radius:10px;font-size:clamp(13px,1.1vw,14.5px);font-weight:600;letter-spacing:-.01em;white-space:nowrap;transition:background .2s ease,color .2s ease")}>Speak to a Security Expert</a>
          </div>
        </div>

        {/* Compact (mobile) menu panel */}
        {!wide && compactOpen && (
          <div style={st("position:absolute;top:100%;left:0;right:0;padding:0 clamp(20px,2.6vw,40px) 18px")}>
            <div style={st("background:#101114;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:22px 24px;max-height:70vh;overflow:auto")}>
              {GROUPS.map((grp) => (
                <div key={grp.label} style={st("padding:14px 0;border-bottom:1px solid rgba(255,255,255,.07)")}>
                  <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>{grp.label}</div>
                  <div style={st("margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:2px 18px")}>
                    {grp.items.map((item) => (
                      <a key={item} href="#" className="hv-menuItem" style={st("display:flex;align-items:center;gap:11px;padding:8px 10px;margin-left:-10px;border-radius:8px;font-size:15px;color:rgba(242,245,250,.82)")}>
                        <FontAwesomeIcon icon={NAV_ICONS[item]} style={{ width: '15px', fontSize: '14px', color: '#00baeb', flex: 'none' }} />
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Desktop mega-menu panel */}
        {open != null && (
          <div style={st("position:absolute;top:100%;left:0;right:0;padding:0 clamp(20px,2.6vw,40px) 18px")}>
            <div style={st("max-width:1440px;margin:0 auto;background:#101114;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:34px 36px 26px;box-shadow:0 40px 80px -40px rgba(0,0,0,.9)")}>
              <div style={st("display:grid;grid-template-columns:1.5fr 1.5fr 1fr;gap:44px")}>
                <div>
                  <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>{g.label}</div>
                  <div style={st("margin-top:22px;display:grid;grid-template-columns:1fr 1fr;gap:6px 24px")}>
                    {g.items.map((item) => (
                      <a key={item} href="#" className="hv-menuItem" style={st("display:flex;align-items:center;gap:12px;padding:10px 12px;margin-left:-12px;border-radius:9px;font-size:15.5px;font-weight:500;letter-spacing:-.015em;color:rgba(242,245,250,.86);transition:background .18s ease,color .18s ease")}>
                        <FontAwesomeIcon icon={NAV_ICONS[item]} style={{ width: '16px', fontSize: '15px', color: '#00baeb', flex: 'none' }} />
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
                <div style={st("border-left:1px solid rgba(255,255,255,.08);padding-left:44px")}>
                  <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>In this area</div>
                  <p style={st("margin:20px 0 0;font-size:16.5px;line-height:1.55;color:rgba(242,245,250,.68);max-width:340px;text-wrap:pretty")}>{g.blurb}</p>
                  <a href="#deliver" className="hv-viewCap" style={st("margin-top:22px;display:inline-flex;align-items:center;gap:8px;font:500 12.5px 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#00baeb")}>VIEW CAPABILITIES →</a>
                </div>
                <div style={st("border-radius:14px;padding:26px 24px;background:linear-gradient(150deg,#007ddc 0%,#0b4fa8 100%);display:flex;flex-direction:column;justify-content:space-between;min-height:210px")}>
                  <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.16em;color:rgba(255,255,255,.8)")}>UAE E-INVOICING</div>
                  <div style={st("font-size:26px;line-height:1.15;letter-spacing:-.03em;font-weight:600;color:#fff")}>Compliance enablement, end to end</div>
                  <div style={st("font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#fff")}>EXPLORE →</div>
                </div>
              </div>
              <a href="#deliver" className="hv-deliveryModel" style={st("margin-top:26px;display:flex;align-items:center;gap:16px;padding:20px 22px;border-radius:13px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.07);transition:background .2s ease")}>
                <span style={st("font-size:17px;font-weight:600;letter-spacing:-.02em")}>Delivery model</span>
                <span style={st("font-size:15.5px;color:rgba(242,245,250,.55)")}>Advisory, architecture, implementation, managed services and lifecycle support</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============ HERO ============ */}
      <section id="top" style={st("position:relative;overflow:hidden;min-height:100vh;margin-top:-76px;display:flex;background:#050506")}>
        <liquid-grid
          mode="dots"
          background="#050506"
          line-color="rgba(0,125,220,0.30)"
          glow-color="#00BAEB"
          cell-size="14"
          line-width="1"
          radius="70"
          intensity="55"
          collide="false"
          click-ripple="true"
          style={st("position:absolute;inset:0;width:100%;height:100%;z-index:0")}
        ></liquid-grid>
        <div style={st("position:absolute;inset:0;z-index:1;background:radial-gradient(80% 62% at 50% 52%,rgba(5,5,6,.86) 0%,rgba(5,5,6,.55) 46%,rgba(5,5,6,.1) 78%);pointer-events:none")}></div>
        <div style={st("position:absolute;inset:0;z-index:1;background:radial-gradient(90% 60% at 50% 100%,rgba(0,125,220,.16) 0%,rgba(5,5,6,0) 70%);pointer-events:none")}></div>
        <div className="hero-pad" style={st("position:relative;z-index:2;flex:1;max-width:1080px;margin:0 auto;padding:150px 40px 110px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center")}>
          <div data-reveal style={st("display:flex;align-items:center;gap:10px;font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.55)")}>
            <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block;animation:ssitPulse 2.4s ease-in-out infinite")}></span>
            Cybersecurity &amp; System Integration · UAE
          </div>
          <h1 data-reveal style={st("margin:34px 0 0;font-size:clamp(44px,6.6vw,96px);line-height:.98;letter-spacing:-.045em;font-weight:600;color:#f2f5fa;text-wrap:balance")}>Secure transformation.<br /><span style={{ color: '#007ddc' }}>Integrated</span> with precision.</h1>
          <p data-reveal style={st("margin:34px 0 0;max-width:720px;font-size:19.5px;line-height:1.6;color:rgba(242,245,250,.62);text-wrap:pretty")}>SechPoint SSIT brings cybersecurity, infrastructure and integration together — helping organisations reduce risk, strengthen resilience and move from strategy to secure operations.</p>
          <div data-reveal className="hero-actions" style={st("margin-top:42px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center")}>
            <a href="#contact" className="hv-heroPrimary" style={st("background:#f2f5fa;color:#050506;padding:16px 28px;border-radius:11px;font-size:16px;font-weight:600;letter-spacing:-.01em;transition:transform .22s ease,background .22s ease,color .22s ease")}>Speak to a Security Expert</a>
            <a href="#deliver" className="hv-heroSecondary" style={st("background:#141518;border:1px solid rgba(255,255,255,.1);color:#f2f5fa;padding:16px 28px;border-radius:11px;font-size:16px;font-weight:500;letter-spacing:-.01em;transition:background .22s ease,border-color .22s ease")}>Explore Related Capabilities</a>
          </div>
        </div>
      </section>

      {/* ============ OPENING STATEMENT ============ */}
      <section style={st("border-top:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1000px;margin:0 auto;padding:110px 40px;text-align:center")}>
          <p data-reveal style={st("margin:0;font-size:clamp(23px,2.5vw,34px);line-height:1.4;letter-spacing:-.028em;color:rgba(242,245,250,.9);text-wrap:pretty")}>
            Modern enterprises rarely struggle because they lack technology. They struggle because controls are fragmented, visibility is incomplete and platforms do not work together as one operating model. <span style={{ color: '#007ddc' }}>SechPoint SSIT helps close that gap</span> through advisory, architecture, implementation, managed services and lifecycle support.
          </p>
        </div>
      </section>

      {/* ============ 01 — VALUE PILLARS ============ */}
      <section id="approach" style={st("max-width:1440px;margin:0 auto;padding:20px clamp(20px,2.6vw,40px) 110px")}>
        <div data-reveal style={st("display:flex;justify-content:flex-end;align-items:baseline;gap:24px;flex-wrap:wrap")}>
          <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.14em;color:rgba(242,245,250,.28)")}>{pillarCounter}</div>
        </div>
        <div data-reveal className="pillars-grid" style={st("margin-top:32px;display:grid;grid-template-columns:minmax(280px,.9fr) minmax(0,2.1fr);gap:20px;align-items:stretch")}>
          <div style={st("display:flex;flex-direction:column;gap:12px")}>
            {PILLAR_DATA.map((p, i) => {
              const on = pillar === i
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPillar(i)}
                  onMouseEnter={() => setPillar(i)}
                  style={st(`flex:1;text-align:left;cursor:pointer;position:relative;overflow:hidden;border:1px solid ${on ? 'rgba(0,186,235,.34)' : 'rgba(255,255,255,.08)'};background:${on ? '#0f1115' : 'transparent'};border-radius:16px;padding:26px 26px 24px;font-family:'Funnel Display',sans-serif;transition:background .35s ease,border-color .35s ease;display:flex;flex-direction:column;gap:12px;min-height:120px`)}
                >
                  <span style={st(`position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#007ddc,#01f1f8);transform:scaleY(${on ? 1 : 0});transform-origin:top;transition:transform .45s cubic-bezier(.2,.7,.2,1)`)}></span>
                  <span style={st("display:flex;align-items:baseline;gap:12px")}>
                    <span style={st(`font:500 34px 'IBM Plex Mono',monospace;letter-spacing:-.04em;color:${on ? accent : 'rgba(242,245,250,.24)'};transition:color .35s ease;line-height:1`)}>{'0' + (i + 1)}</span>
                    <span style={st("font:500 10.5px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,245,250,.34)")}>Pillar</span>
                  </span>
                  <span style={st(`font-size:19.5px;line-height:1.22;letter-spacing:-.028em;font-weight:600;color:${on ? '#f2f5fa' : 'rgba(242,245,250,.5)'};transition:color .35s ease`)}>{p.title}</span>
                </button>
              )
            })}
          </div>

          <div style={st("background:#0b0c0f;border:1px solid rgba(255,255,255,.09);border-radius:20px;padding:clamp(30px,3vw,52px);position:relative;overflow:hidden;display:flex;flex-direction:column;min-height:460px")}>
            <div style={st("position:absolute;inset:0;background:radial-gradient(70% 70% at 100% 0%,rgba(0,125,220,.16) 0%,rgba(11,12,15,0) 68%);pointer-events:none")}></div>
            <div style={st("position:relative;display:flex;flex-direction:column;gap:22px;flex:1")}>
              <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.18em;color:#00baeb")}>{'PILLAR ' + (pillar + 1)}</div>
              <h3 style={st("margin:0;font-size:clamp(30px,3.4vw,46px);line-height:1.04;letter-spacing:-.04em;font-weight:600;max-width:760px;text-wrap:balance")}>{PILLAR_DATA[pillar].title}</h3>
              <p style={st("margin:0;font-size:17.5px;line-height:1.6;color:rgba(242,245,250,.6);max-width:680px;text-wrap:pretty")}>{PILLAR_DATA[pillar].body}</p>

              {pillar === 0 && (
                <div style={st("margin-top:auto;padding-top:34px;display:flex;align-items:center;gap:clamp(20px,3vw,48px);flex-wrap:wrap")}>
                  <div style={st("display:flex;flex-direction:column;gap:10px")}>
                    <div style={st("font:500 10.5px 'IBM Plex Mono',monospace;letter-spacing:.16em;color:rgba(242,245,250,.34)")}>FRAGMENTED</div>
                    <div style={st("position:relative;width:150px;height:104px")}>
                      {SCATTER.map(([x, y, r], k) => (
                        <span key={k} style={st(`position:absolute;left:${x}px;top:${y}px;width:14px;height:14px;border-radius:3px;background:rgba(242,245,250,.14);transform:rotate(${r});display:block`)}></span>
                      ))}
                    </div>
                  </div>
                  <div style={st("flex:1;min-width:80px;height:1px;background:linear-gradient(90deg,rgba(242,245,250,.1),#007ddc)")}></div>
                  <div style={st("display:flex;flex-direction:column;gap:10px")}>
                    <div style={st("font:500 10.5px 'IBM Plex Mono',monospace;letter-spacing:.16em;color:#00baeb")}>COORDINATED</div>
                    <div style={st("display:grid;grid-template-columns:repeat(3,14px);gap:8px")}>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <span key={i} style={st(`width:14px;height:14px;border-radius:3px;background:${i % 2 === 0 ? accent : 'rgba(0,125,220,.55)'};display:block`)}></span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {pillar === 1 && (
                <div style={st("margin-top:auto;padding-top:40px")}>
                  <div style={st("position:relative;height:2px;background:rgba(255,255,255,.09);border-radius:2px")}>
                    <div style={st(`position:absolute;left:0;top:0;bottom:0;width:${cycleProgress};background:linear-gradient(90deg,#007ddc,#01f1f8);border-radius:2px;transition:width .6s cubic-bezier(.2,.7,.2,1)`)}></div>
                  </div>
                  <div className="lifecycle-grid" style={st("margin-top:-9px;display:grid;grid-template-columns:repeat(5,1fr)")}>
                    {STEPS.map((s, i) => {
                      const dot = i <= step ? accent : 'rgba(242,245,250,.2)'
                      const glow = i === step ? '0 0 0 5px rgba(0,186,235,.16)' : 'none'
                      const color = i === step ? accent : i < step ? 'rgba(242,245,250,.72)' : 'rgba(242,245,250,.42)'
                      return (
                        <div key={i} style={st("display:flex;flex-direction:column;align-items:flex-start;gap:14px")}>
                          <span style={st(`width:16px;height:16px;border-radius:50%;background:#0b0c0f;border:2px solid ${dot};box-shadow:${glow};display:block;transition:border-color .5s ease,box-shadow .5s ease`)}></span>
                          <span style={st(`font:500 13px 'IBM Plex Mono',monospace;letter-spacing:.04em;color:${color};transition:color .5s ease`)}>{s.name.toUpperCase()}</span>
                          <span style={st("font-size:13px;line-height:1.35;color:rgba(242,245,250,.4);max-width:110px")}>{s.note}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {pillar === 2 && (
                <div style={st("margin-top:auto;padding-top:34px;display:flex;gap:14px;flex-wrap:wrap")}>
                  {[
                    { n: '01', name: 'Business priorities' },
                    { n: '02', name: 'Existing investments' },
                    { n: '03', name: 'Risk' },
                  ].map((l, i) => (
                    <div key={i} style={st(`flex:1;min-width:150px;border:1px solid ${i === 0 ? 'rgba(0,186,235,.3)' : 'rgba(255,255,255,.08)'};border-radius:14px;padding:20px 18px;background:${i === 0 ? 'rgba(0,125,220,.07)' : 'transparent'};display:flex;flex-direction:column;gap:10px`)}>
                      <span style={st(`font:500 10.5px 'IBM Plex Mono',monospace;letter-spacing:.16em;color:${i === 0 ? accent : 'rgba(242,245,250,.35)'}`)}>{l.n}</span>
                      <span style={st("font-size:16px;line-height:1.25;letter-spacing:-.02em;font-weight:500;color:rgba(242,245,250,.9)")}>{l.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 — WHAT WE DELIVER ============ */}
      <section id="deliver" style={st("border-top:1px solid rgba(9,17,34,.1);background:#eef1f6")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:110px clamp(20px,2.6vw,40px)")}>
          <div data-reveal>
            <h2 style={st("margin:0;font-size:clamp(34px,4.2vw,56px);line-height:1.02;letter-spacing:-.04em;font-weight:600;max-width:760px;text-wrap:balance;color:#0b0e14")}>Capability across security, infrastructure and integration</h2>
          </div>
          <div className="deliver-grid" style={st("margin-top:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:20px")}>
            {CAPS.map((name, i) => (
              <a key={i} href="#" data-reveal className="hv-capCardLight" style={st("background:#ffffff;border:1px solid rgba(9,17,34,.1);border-radius:18px;padding:32px 30px 28px;display:flex;flex-direction:column;gap:18px;min-height:250px;box-shadow:0 12px 30px -22px rgba(9,17,34,.4);transition:background .28s ease,border-color .28s ease,box-shadow .28s ease")}>
                <span style={st("display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:13px;background:linear-gradient(150deg,rgba(0,125,220,.14),rgba(0,186,235,.1));color:#007ddc")}>
                  <FontAwesomeIcon icon={CAP_ICONS[i]} style={{ fontSize: '20px' }} />
                </span>
                <span style={st("font-size:22px;line-height:1.2;letter-spacing:-.028em;font-weight:600;flex:1;color:#0b0e14")}>{name}</span>
                <span style={st("font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#0072cc")}>EXPLORE →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DELIVERY VISUAL ============ */}
      <section id="delivervisual" style={st("background:#eef1f6")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:0 clamp(20px,2.6vw,40px) 96px")}>
          <div data-reveal style={st("position:relative;border-radius:22px;overflow:hidden;border:1px solid rgba(9,17,34,.14);box-shadow:0 30px 70px -40px rgba(9,17,34,.5)")}>
            <img src="assets/deliver-visual.jpg" alt="A security engineer reviewing code late at night, with source files projected around the workspace" loading="lazy" style={st("width:100%;height:clamp(320px,44vw,560px);object-fit:cover;object-position:center 30%;display:block")} />
            <div style={st("position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,5,6,.15) 0%,rgba(5,5,6,.1) 40%,rgba(5,5,6,.82) 100%);pointer-events:none")}></div>
            <div style={st("position:absolute;inset:0;background:radial-gradient(70% 90% at 12% 100%,rgba(0,125,220,.28) 0%,rgba(5,5,6,0) 62%);pointer-events:none")}></div>
            <div style={st("position:absolute;left:0;right:0;bottom:0;padding:clamp(26px,4vw,54px);display:flex;flex-direction:column;gap:14px")}>
              <div style={st("display:flex;align-items:center;gap:10px;font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:#00baeb")}>
                <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block")}></span>
                Engineering &amp; delivery
              </div>
              <div style={st("font-size:clamp(26px,3.2vw,44px);line-height:1.06;letter-spacing:-.035em;font-weight:600;color:#f2f5fa;max-width:720px;text-wrap:balance")}>Security engineered into every layer of delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 — BUSINESS OUTCOMES ============ */}
      <section id="outcomes" style={st("border-top:1px solid rgba(9,17,34,.1);background:#eef1f6")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:110px clamp(20px,2.6vw,40px)")}>
          <div data-reveal style={st("display:flex;justify-content:flex-end;align-items:baseline;gap:24px;flex-wrap:wrap")}>
            <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.14em;color:rgba(11,14,20,.35)")}>ASSESSMENT → CONTINUOUS IMPROVEMENT</div>
          </div>
          <div style={st("margin-top:40px;display:flex;flex-direction:column")}>
            {OUTS.map((text, i) => (
              <div key={i} data-reveal className="hv-outcomeRowLight outcome-row" style={st("position:relative;border-top:1px solid rgba(9,17,34,.12);padding:clamp(22px,2.4vw,34px) clamp(14px,1.6vw,26px);display:grid;grid-template-columns:58px minmax(0,1fr) clamp(90px,16vw,260px);gap:clamp(16px,2.4vw,44px);align-items:center")}>
                <span style={st(`font:500 clamp(22px,2vw,30px) 'IBM Plex Mono',monospace;letter-spacing:-.04em;color:${i === OUTS.length - 1 ? '#007ddc' : 'rgba(0,125,220,' + (0.5 + i * 0.1) + ')'};line-height:1`)}>{'0' + (i + 1)}</span>
                <span style={st("display:flex;align-items:center;gap:clamp(14px,2vw,30px);min-width:0")}>
                  <span style={st(`width:${i * 26}px;flex:none;height:1px;background:linear-gradient(90deg,rgba(0,125,220,.25),rgba(0,186,235,.75));display:block`)}></span>
                  <span style={st("font-size:clamp(19px,1.9vw,27px);line-height:1.22;letter-spacing:-.03em;font-weight:500;color:#0b0e14;text-wrap:pretty")}>{text}</span>
                </span>
                <span className="outcome-cells" style={st("display:flex;gap:5px;justify-content:flex-end;align-items:center")}>
                  {[0, 1, 2, 3, 4].map((k) => (
                    <span key={k} style={st(`width:100%;max-width:34px;height:6px;border-radius:3px;background:${k <= i ? (k === i ? '#00baeb' : 'rgba(0,125,220,.55)') : 'rgba(9,17,34,.12)'};display:block`)}></span>
                  ))}
                </span>
              </div>
            ))}
            <div style={st("border-top:1px solid rgba(9,17,34,.12)")}></div>
          </div>
        </div>
      </section>

      {/* ============ 04 — PROOF ============ */}
      <section id="proof" style={st("border-top:1px solid rgba(255,255,255,.07);position:relative;overflow:hidden")}>
        <div style={st("position:absolute;inset:0;background:radial-gradient(60% 55% at 50% 0%,rgba(0,125,220,.12) 0%,rgba(5,5,6,0) 70%);pointer-events:none")}></div>
        <div style={st("position:relative;max-width:1440px;margin:0 auto;padding:96px clamp(20px,2.6vw,40px)")}>
          <div data-reveal style={st("max-width:760px;margin:0 0 48px")}>
            <h2 style={st("margin:0;font-size:clamp(34px,4.2vw,56px);line-height:1.02;letter-spacing:-.04em;font-weight:600;text-wrap:balance")}>Proven expertise, trusted partnerships</h2>
            <p style={st("margin:20px 0 0;font-size:18.5px;line-height:1.55;color:rgba(242,245,250,.6);text-wrap:pretty")}>Certified specialists, established alliances and a delivery track record across regulated industries.</p>
          </div>
          {showProof !== false && (
            <>
              {/* Animated stat counters */}
              <div style={st("display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px")}>
                {PROOF_STATS.map((s, i) => (
                  <div key={i} data-reveal style={st("position:relative;overflow:hidden;background:linear-gradient(180deg,#0d0f13,#0a0b0e);border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:28px 28px 24px;display:flex;flex-direction:column;gap:16px;min-height:206px")}>
                    <div style={st("position:absolute;inset:0;background:radial-gradient(80% 80% at 100% 0%,rgba(0,186,235,.12) 0%,rgba(11,12,15,0) 62%);pointer-events:none")}></div>
                    <div style={st("position:relative;font:600 clamp(52px,5.4vw,74px)/1 'Funnel Display',sans-serif;letter-spacing:-.04em;background:linear-gradient(125deg,#f2f5fa 0%,#00baeb 120%);-webkit-background-clip:text;background-clip:text;color:transparent")}>
                      <CountUp to={s.to} suffix={s.suffix} />
                    </div>
                    <div style={st("position:relative;display:flex;flex-direction:column;gap:14px;margin-top:auto")}>
                      <span style={st("height:2px;border-radius:2px;background:linear-gradient(90deg,#007ddc,#01f1f8)")}></span>
                      <span style={st("font-size:15.5px;letter-spacing:-.01em;color:rgba(242,245,250,.72)")}>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Credentials + satisfaction */}
              <div className="proof-cred-grid" style={st("margin-top:18px;display:grid;grid-template-columns:minmax(0,1.75fr) minmax(240px,1fr);gap:18px;align-items:stretch")}>
                <div data-reveal style={st("background:#0b0c0f;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:28px 28px 26px;display:flex;flex-direction:column;gap:18px")}>
                  <div style={st("display:flex;align-items:center;flex-wrap:wrap;gap:10px")}>
                    <span style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:#00baeb")}>Certifications &amp; partner tiers</span>
                  </div>
                  <div style={st("display:flex;flex-wrap:wrap;gap:10px")}>
                    {CERTS.map((c) => (
                      <span key={c} style={st("display:inline-flex;align-items:center;gap:9px;font-size:13.5px;letter-spacing:-.005em;color:rgba(242,245,250,.82);padding:10px 14px;border:1px solid rgba(255,255,255,.1);border-radius:999px;background:rgba(255,255,255,.02)")}>
                        <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block")}></span>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-reveal style={st("position:relative;overflow:hidden;border:1px solid rgba(0,186,235,.28);border-radius:18px;padding:28px 26px;background:linear-gradient(155deg,rgba(0,125,220,.16) 0%,rgba(11,12,15,.2) 60%);display:flex;flex-direction:column;justify-content:space-between;gap:18px")}>
                  <div style={st("display:flex;align-items:center")}>
                    <span style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:rgba(242,245,250,.7)")}>Avg. CSAT</span>
                  </div>
                  <div style={st("font:600 clamp(44px,4.6vw,62px)/1 'Funnel Display',sans-serif;letter-spacing:-.04em;color:#f2f5fa")}><CountUp to={98} suffix="%" /></div>
                  <div style={st("position:relative;height:8px;border-radius:4px;background:rgba(255,255,255,.1);overflow:hidden")}>
                    <span style={st("position:absolute;left:0;top:0;bottom:0;width:98%;border-radius:4px;background:linear-gradient(90deg,#007ddc,#01f1f8);display:block")}></span>
                  </div>
                  <span style={st("font-size:13.5px;line-height:1.4;color:rgba(242,245,250,.6)")}>Customer satisfaction across engagements (sample).</span>
                </div>
              </div>

              {/* Partner / alliance marquee (dummy) */}
              <div data-reveal style={st("margin-top:40px")}>
                <div style={st("display:flex;align-items:center;gap:12px;flex-wrap:wrap")}>
                  <span style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>Partner &amp; alliance ecosystem</span>
                </div>
                <div className="ssit-marquee" style={st("margin-top:22px;border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07);padding:26px 0")}>
                  <div className="ssit-marquee-track">
                    {[...PARTNERS, ...PARTNERS].map((p, i) => (
                      <div key={i} className="ssit-logo" style={st("display:flex;align-items:center;gap:12px;padding:0 clamp(24px,3vw,44px);color:rgba(242,245,250,.6);white-space:nowrap")}>
                        <PartnerMark type={p.mark} />
                        <span style={st("font-size:19px;font-weight:600;letter-spacing:-.025em")}>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          <p data-reveal style={st("margin:26px 0 0;font-size:13.5px;color:rgba(242,245,250,.38)")}>Partner and alliance marks are shown for illustration and refreshed as our ecosystem grows.</p>
        </div>
      </section>

      {/* ============ 05 — FAQ ============ */}
      <section id="faq" style={st("border-top:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1080px;margin:0 auto;padding:110px 40px")}>
          <div style={st("border-top:1px solid rgba(255,255,255,.1)")}>
            {FAQ_DATA.map(([q, a], i) => {
              const on = faq === i
              return (
                <div key={i} style={st("border-bottom:1px solid rgba(255,255,255,.1)")}>
                  <button type="button" onClick={() => setFaq((cur) => (cur === i ? -1 : i))} style={st("width:100%;text-align:left;border:0;background:none;padding:28px 0;display:flex;gap:24px;align-items:flex-start;cursor:pointer;font-family:'Funnel Display',sans-serif")}>
                    <span style={st(`flex:1;font-size:22px;line-height:1.3;letter-spacing:-.028em;font-weight:500;color:${on ? accent : '#f2f5fa'};transition:color .25s ease`)}>{q}</span>
                    <span style={st(`flex:none;width:28px;height:28px;border-radius:50%;border:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;font-size:17px;color:rgba(242,245,250,.7);transform:rotate(${on ? '45deg' : '0deg'});transition:transform .3s cubic-bezier(.2,.7,.2,1)`)}>+</span>
                  </button>
                  <div style={st(`overflow:hidden;max-height:${on ? '280px' : '0px'};opacity:${on ? 1 : 0};transition:max-height .4s cubic-bezier(.2,.7,.2,1),opacity .3s ease`)}>
                    <p style={st("margin:0 0 30px;max-width:760px;font-size:17.5px;line-height:1.6;color:rgba(242,245,250,.6);text-wrap:pretty")}>{a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CLOSING CTA ============ */}
      <section id="contact" style={st("position:relative;overflow:hidden;border-top:1px solid rgba(255,255,255,.07);background:#050506")}>
        <wave-arcs
          background-color="#050506"
          line-color="rgba(0,140,210,0.85)"
          line-width="1.4"
          line-count="70"
          speed="5"
          glow="14"
          interactive="true"
          style={st("position:absolute;inset:0;width:100%;height:100%;z-index:0")}
        ></wave-arcs>
        <div style={st("position:absolute;inset:0;z-index:1;background:radial-gradient(72% 62% at 50% 42%,rgba(5,5,6,.5) 0%,rgba(5,5,6,.18) 52%,rgba(5,5,6,.9) 100%);pointer-events:none")}></div>

        <div style={st("position:relative;z-index:2;max-width:1180px;margin:0 auto;padding:clamp(92px,11vw,150px) clamp(20px,2.6vw,40px)")}>
          <div data-reveal style={st("position:relative;overflow:hidden;max-width:860px;margin:0 auto;border-radius:26px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg,rgba(18,20,26,.74) 0%,rgba(9,10,13,.8) 100%);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 50px 130px -50px rgba(0,0,0,.85);padding:clamp(42px,5.5vw,78px) clamp(26px,4vw,64px);text-align:center")}>
            <span style={st("position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,186,235,.75),transparent)")}></span>
            <span style={st("position:absolute;top:-40%;right:-10%;width:60%;height:120%;background:radial-gradient(50% 50% at 50% 50%,rgba(0,125,220,.16) 0%,rgba(5,5,6,0) 70%);pointer-events:none")}></span>

            <div style={st("position:relative;display:flex;flex-direction:column;align-items:center")}>
              <div style={st("display:inline-flex;align-items:center;gap:9px;padding:8px 15px;border-radius:999px;border:1px solid rgba(0,186,235,.32);background:rgba(0,186,235,.08);font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:#00baeb")}>
                <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block;animation:ssitPulse 2.4s ease-in-out infinite")}></span>
                Start the conversation
              </div>
              <h2 style={st("margin:26px 0 0;font-size:clamp(34px,4.8vw,64px);line-height:1.02;letter-spacing:-.045em;font-weight:600;text-wrap:balance")}>Speak to a Security Expert</h2>
              <p style={st("margin:22px auto 0;max-width:560px;font-size:18.5px;line-height:1.55;color:rgba(242,245,250,.62);text-wrap:pretty")}>Speak with SechPoint SSIT to discuss your environment, priorities and next steps.</p>
              <div className="contact-actions" style={st("margin-top:38px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center")}>
                <a href="#contact" className="hv-heroPrimary" style={st("background:#f2f5fa;color:#050506;padding:17px 32px;border-radius:11px;font-size:16.5px;font-weight:600;letter-spacing:-.01em;transition:transform .22s ease,background .22s ease,color .22s ease")}>Speak to a Security Expert</a>
                <a href="#deliver" className="hv-heroSecondary" style={st("background:rgba(20,21,24,.6);border:1px solid rgba(255,255,255,.14);color:#f2f5fa;padding:17px 30px;border-radius:11px;font-size:16.5px;font-weight:500;letter-spacing:-.01em;transition:background .22s ease,border-color .22s ease")}>Explore Capabilities</a>
              </div>
            </div>
          </div>

          <div data-reveal style={st("margin-top:clamp(40px,5vw,60px);display:flex;justify-content:center;gap:30px;flex-wrap:wrap")}>
            {CLOSING_LINKS.map((l) => (
              <a key={l} href="#" className="hv-link" style={st("font-size:14.5px;color:rgba(242,245,250,.6)")}>{l}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={st("border-top:1px solid rgba(255,255,255,.07);background:#08090b")}>
        <div className="footer-top" style={st("max-width:1440px;margin:0 auto;padding:76px clamp(20px,2.6vw,40px) 44px;display:grid;grid-template-columns:1.25fr 2.75fr;gap:64px")}>
          <div>
            <img src={LOGO} alt="SechPoint SSIT" width="164" height="40" style={st("height:40px;width:auto;display:block")} />
            <p style={st("margin:22px 0 0;font-size:14.5px;line-height:1.6;color:rgba(242,245,250,.5);max-width:360px;text-wrap:pretty")}>SechPoint SSIT helps organisations assess cyber risk, design resilient architectures, integrate security and infrastructure technologies, and improve operational readiness. Part of the SechPoint group.</p>
          </div>
          <div className="footer-cols" style={st("display:grid;grid-template-columns:repeat(5,1fr);gap:28px")}>
            {GROUPS.map((grp) => (
              <div key={grp.label} style={st("display:flex;flex-direction:column;gap:12px")}>
                <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:rgba(242,245,250,.38)")}>{grp.label}</div>
                {grp.items.map((item) => (
                  <a key={item} href="#" className="hv-link" style={st("font-size:13.5px;color:rgba(242,245,250,.62)")}>{item}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={st("max-width:1440px;margin:0 auto;padding:0 clamp(20px,2.6vw,40px) 52px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-size:13px;color:rgba(242,245,250,.4)")}>
          <div style={st("display:flex;gap:22px;flex-wrap:wrap")}>
            <a href="#" className="hv-link" style={st("color:rgba(242,245,250,.4)")}>Privacy Policy</a>
            <a href="#" className="hv-link" style={st("color:rgba(242,245,250,.4)")}>Cookie Policy</a>
            <a href="#" className="hv-link" style={st("color:rgba(242,245,250,.4)")}>Support</a>
          </div>
          <div style={st("font-family:'IBM Plex Mono',monospace;font-size:12px")}>[Legal entity name — pending SechPoint confirmation]</div>
        </div>
      </footer>
    </div>
  )
}
