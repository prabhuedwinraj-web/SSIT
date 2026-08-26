import React, { useEffect, useState, useRef } from 'react'

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
            <div style={st("flex:1;display:flex;justify-content:flex-start")}>
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
            <a href="#contact" className="hv-cta" style={st("background:#f2f5fa;color:#050506;padding:11px 20px;border-radius:10px;font-size:clamp(13px,1.1vw,14.5px);font-weight:600;letter-spacing:-.01em;white-space:nowrap;transition:background .2s ease,color .2s ease")}>Speak to a Security Expert</a>
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
                      <a key={item} href="#" className="hv-menuItem" style={st("padding:8px 10px;margin-left:-10px;border-radius:8px;font-size:15px;color:rgba(242,245,250,.82)")}>{item}</a>
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
                      <a key={item} href="#" className="hv-menuItem" style={st("padding:10px 12px;margin-left:-12px;border-radius:9px;font-size:15.5px;font-weight:500;letter-spacing:-.015em;color:rgba(242,245,250,.86);transition:background .18s ease,color .18s ease")}>{item}</a>
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
        <div style={st("position:relative;z-index:2;flex:1;max-width:1080px;margin:0 auto;padding:150px 40px 110px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center")}>
          <div data-reveal style={st("display:flex;align-items:center;gap:10px;font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.55)")}>
            <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block;animation:ssitPulse 2.4s ease-in-out infinite")}></span>
            Cybersecurity &amp; System Integration · UAE
          </div>
          <h1 data-reveal style={st("margin:34px 0 0;font-size:clamp(44px,6.6vw,96px);line-height:.98;letter-spacing:-.045em;font-weight:600;color:#f2f5fa;text-wrap:balance")}>Secure transformation.<br /><span style={{ color: '#007ddc' }}>Integrated</span> with precision.</h1>
          <p data-reveal style={st("margin:34px 0 0;max-width:720px;font-size:19.5px;line-height:1.6;color:rgba(242,245,250,.62);text-wrap:pretty")}>SechPoint SSIT brings cybersecurity, infrastructure and integration together — helping organisations reduce risk, strengthen resilience and move from strategy to secure operations.</p>
          <div data-reveal style={st("margin-top:42px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center")}>
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
      <section style={st("max-width:1440px;margin:0 auto;padding:20px clamp(20px,2.6vw,40px) 110px")}>
        <div data-reveal style={st("display:flex;justify-content:space-between;align-items:baseline;gap:24px;flex-wrap:wrap")}>
          <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>01 — Our approach</div>
          <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.14em;color:rgba(242,245,250,.28)")}>{pillarCounter}</div>
        </div>
        <div data-reveal style={st("margin-top:32px;display:grid;grid-template-columns:minmax(280px,.9fr) minmax(0,2.1fr);gap:20px;align-items:stretch")}>
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
                  <div style={st("margin-top:-9px;display:grid;grid-template-columns:repeat(5,1fr)")}>
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
      <section id="deliver" style={st("border-top:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:110px clamp(20px,2.6vw,40px)")}>
          <div data-reveal>
            <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>02 — What we deliver</div>
            <h2 style={st("margin:22px 0 0;font-size:clamp(34px,4.2vw,56px);line-height:1.02;letter-spacing:-.04em;font-weight:600;max-width:760px;text-wrap:balance")}>Capability across security, infrastructure and integration</h2>
          </div>
          <div style={st("margin-top:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:20px")}>
            {CAPS.map((name, i) => (
              <a key={i} href="#" data-reveal className="hv-capCard" style={st("background:#0d0e11;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:32px 30px 28px;display:flex;flex-direction:column;gap:18px;min-height:250px;transition:background .28s ease,border-color .28s ease")}>
                <span style={st("display:flex;gap:5px;align-items:flex-end;height:26px")}>
                  <span style={st(`width:7px;height:${BARS[i][0]};background:#007ddc;display:block;border-radius:2px`)}></span>
                  <span style={st(`width:7px;height:${BARS[i][1]};background:#00baeb;display:block;border-radius:2px`)}></span>
                  <span style={st(`width:7px;height:${BARS[i][2]};background:rgba(242,245,250,.2);display:block;border-radius:2px`)}></span>
                </span>
                <span style={st("font-size:22px;line-height:1.2;letter-spacing:-.028em;font-weight:600;flex:1")}>{name}</span>
                <span style={st("font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#00baeb")}>EXPLORE →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 — BUSINESS OUTCOMES ============ */}
      <section style={st("border-top:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:110px clamp(20px,2.6vw,40px)")}>
          <div data-reveal style={st("display:flex;justify-content:space-between;align-items:baseline;gap:24px;flex-wrap:wrap")}>
            <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>03 — Business outcomes</div>
            <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.14em;color:rgba(242,245,250,.28)")}>ASSESSMENT → CONTINUOUS IMPROVEMENT</div>
          </div>
          <div style={st("margin-top:40px;display:flex;flex-direction:column")}>
            {OUTS.map((text, i) => (
              <div key={i} data-reveal className="hv-outcomeRow" style={st("position:relative;border-top:1px solid rgba(255,255,255,.09);padding:clamp(22px,2.4vw,34px) clamp(14px,1.6vw,26px);display:grid;grid-template-columns:58px minmax(0,1fr) clamp(90px,16vw,260px);gap:clamp(16px,2.4vw,44px);align-items:center")}>
                <span style={st(`font:500 clamp(22px,2vw,30px) 'IBM Plex Mono',monospace;letter-spacing:-.04em;color:${i === OUTS.length - 1 ? accent : 'rgba(0,125,220,' + (0.45 + i * 0.12) + ')'};line-height:1`)}>{'0' + (i + 1)}</span>
                <span style={st("display:flex;align-items:center;gap:clamp(14px,2vw,30px);min-width:0")}>
                  <span style={st(`width:${i * 26}px;flex:none;height:1px;background:linear-gradient(90deg,rgba(0,125,220,.15),rgba(0,186,235,.6));display:block`)}></span>
                  <span style={st("font-size:clamp(19px,1.9vw,27px);line-height:1.22;letter-spacing:-.03em;font-weight:500;color:#f2f5fa;text-wrap:pretty")}>{text}</span>
                </span>
                <span style={st("display:flex;gap:5px;justify-content:flex-end;align-items:center")}>
                  {[0, 1, 2, 3, 4].map((k) => (
                    <span key={k} style={st(`width:100%;max-width:34px;height:6px;border-radius:3px;background:${k <= i ? (k === i ? accent : 'rgba(0,125,220,.55)') : 'rgba(255,255,255,.08)'};display:block`)}></span>
                  ))}
                </span>
              </div>
            ))}
            <div style={st("border-top:1px solid rgba(255,255,255,.09)")}></div>
          </div>
        </div>
      </section>

      {/* ============ 04 — PROOF ============ */}
      <section style={st("border-top:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:86px clamp(20px,2.6vw,40px)")}>
          <div data-reveal style={st("display:flex;align-items:baseline;gap:14px;flex-wrap:wrap")}>
            <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>04 — Proof</div>
            <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#d59a4e;border:1px dashed rgba(213,154,78,.45);border-radius:6px;padding:4px 9px")}>PLACEHOLDERS · NOT FOR PUBLICATION</div>
          </div>
          <div style={st("margin-top:34px;display:grid;grid-template-columns:repeat(5,1fr);gap:18px")}>
            {(showProof === false ? [] : [
              { token: '[Verified number]', label: 'certified specialists' },
              { token: '[Verified number]', label: 'completed projects' },
              { token: '[Verified number]', label: 'countries supported' },
              { token: '[Approved]', label: 'certifications and partner tiers' },
              { token: '[Approved]', label: 'customer satisfaction or service metric' },
            ]).map((p, i) => (
              <div key={i} data-reveal style={st("border:1px dashed rgba(255,255,255,.18);border-radius:14px;padding:26px 22px;background:repeating-linear-gradient(135deg,rgba(255,255,255,.028) 0 6px,transparent 6px 12px)")}>
                <div style={st("font:500 15px 'IBM Plex Mono',monospace;color:rgba(242,245,250,.9);letter-spacing:-.01em")}>{p.token}</div>
                <div style={st("margin-top:12px;font-size:14.5px;line-height:1.4;color:rgba(242,245,250,.5)")}>{p.label}</div>
              </div>
            ))}
          </div>
          <p data-reveal style={st("margin:26px 0 0;font-size:13.5px;color:rgba(242,245,250,.38)")}>Partner logos may appear here only with current authorisation and geographic validation.</p>
        </div>
      </section>

      {/* ============ 05 — FAQ ============ */}
      <section id="faq" style={st("border-top:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1080px;margin:0 auto;padding:110px 40px")}>
          <div data-reveal style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>05 — Frequently asked questions</div>
          <div style={st("margin-top:34px;border-top:1px solid rgba(255,255,255,.1)")}>
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
      <section id="contact" style={st("border-top:1px solid rgba(255,255,255,.07);position:relative;overflow:hidden")}>
        <div style={st("position:absolute;inset:0;background:radial-gradient(80% 70% at 50% 100%,rgba(0,125,220,.28) 0%,rgba(5,5,6,0) 72%);pointer-events:none")}></div>
        <div style={st("position:relative;max-width:1080px;margin:0 auto;padding:120px 40px 104px;text-align:center")}>
          <h2 data-reveal style={st("margin:0;font-size:clamp(38px,5.4vw,76px);line-height:1;letter-spacing:-.045em;font-weight:600")}>Speak to a Security Expert</h2>
          <p data-reveal style={st("margin:26px auto 0;max-width:640px;font-size:19.5px;line-height:1.55;color:rgba(242,245,250,.6)")}>Speak with SechPoint SSIT to discuss your environment, priorities and next steps.</p>
          <div data-reveal style={st("margin-top:40px;display:flex;justify-content:center")}>
            <a href="#contact" className="hv-heroPrimary" style={st("background:#f2f5fa;color:#050506;padding:17px 32px;border-radius:11px;font-size:16.5px;font-weight:600;transition:transform .22s ease,background .22s ease,color .22s ease")}>Speak to a Security Expert</a>
          </div>
          <div data-reveal style={st("margin-top:60px;padding-top:28px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:center;gap:30px;flex-wrap:wrap")}>
            {CLOSING_LINKS.map((l) => (
              <a key={l} href="#" className="hv-link" style={st("font-size:14.5px;color:rgba(242,245,250,.55)")}>{l}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={st("border-top:1px solid rgba(255,255,255,.07);background:#08090b")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:76px clamp(20px,2.6vw,40px) 44px;display:grid;grid-template-columns:1.25fr 2.75fr;gap:64px")}>
          <div>
            <img src={LOGO} alt="SechPoint SSIT" width="164" height="40" style={st("height:40px;width:auto;display:block")} />
            <p style={st("margin:22px 0 0;font-size:14.5px;line-height:1.6;color:rgba(242,245,250,.5);max-width:360px;text-wrap:pretty")}>SechPoint SSIT helps organisations assess cyber risk, design resilient architectures, integrate security and infrastructure technologies, and improve operational readiness. Part of the SechPoint group.</p>
          </div>
          <div style={st("display:grid;grid-template-columns:repeat(5,1fr);gap:28px")}>
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
