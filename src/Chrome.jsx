import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { st, LOGO } from './lib.js'
import { GROUPS } from './nav.js'
import { Link } from './router.jsx'

export function Header() {
  const [menu, setMenu] = useState(null)
  const [compactOpen, setCompactOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setW(window.innerWidth)
    onScroll(); onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  const wide = w >= 1150
  const open = wide ? menu : null
  const g = open == null ? null : GROUPS[open]
  const active = scrolled || open != null || compactOpen
  const headerBg = active ? 'rgba(5,5,6,.82)' : 'transparent'
  const headerBlur = active ? 'blur(18px)' : 'none'
  const headerBorder = active ? 'rgba(255,255,255,.06)' : 'transparent'

  return (
    <header
      onMouseLeave={() => setMenu(null)}
      style={{ position: 'sticky', top: 0, zIndex: 70, background: headerBg, backdropFilter: headerBlur, WebkitBackdropFilter: headerBlur, borderBottom: '1px solid ' + headerBorder, transition: 'background .3s ease, border-color .3s ease' }}
    >
      <div style={st("max-width:1440px;margin:0 auto;padding:0 clamp(20px,2.6vw,40px);height:76px;display:flex;align-items:center;gap:clamp(16px,2.2vw,36px);min-width:0")}>
        <Link to="/" style={st("flex:none;display:flex;align-items:center")}>
          <img src={LOGO} alt="SechPoint SSIT" width="139" height="34" style={st("height:clamp(26px,2.6vw,34px);width:auto;display:block")} />
        </Link>

        {wide && (
          <nav style={st("display:flex;align-items:center;gap:2px;flex:1 1 auto;min-width:0")}>
            {GROUPS.map((grp, i) => (
              <button key={grp.label} type="button" className="hv-navbtn" onMouseEnter={() => setMenu(i)} onFocus={() => setMenu(i)} onClick={() => { window.history.pushState({}, '', grp.to); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo(0, 0) }}
                style={st(`border:0;background:${open === i ? 'rgba(255,255,255,.08)' : 'transparent'};color:${open === i ? '#f2f5fa' : 'rgba(242,245,250,.66)'};padding:10px clamp(11px,1.1vw,16px);border-radius:10px;font:500 clamp(13px,1vw,15px) 'Funnel Display',sans-serif;letter-spacing:-.015em;cursor:pointer;white-space:nowrap;flex:none;transition:background .2s ease,color .2s ease`)}>
                {grp.label}
              </button>
            ))}
          </nav>
        )}

        {!wide && (
          <div style={st("flex:1;display:flex;justify-content:flex-end")}>
            <button type="button" onClick={() => setCompactOpen((v) => !v)} style={st(`border:1px solid rgba(255,255,255,.12);background:${compactOpen ? 'rgba(255,255,255,.08)' : 'transparent'};color:#f2f5fa;padding:10px 16px;border-radius:10px;font:500 14px 'Funnel Display',sans-serif;letter-spacing:-.015em;cursor:pointer;display:flex;align-items:center;gap:10px`)}>
              <span style={st("display:flex;flex-direction:column;gap:3px")}>
                <span style={st("width:14px;height:1.5px;background:#f2f5fa;display:block")}></span>
                <span style={st("width:14px;height:1.5px;background:#f2f5fa;display:block")}></span>
              </span>
              Menu
            </button>
          </div>
        )}

        <div style={st("flex:none;display:flex;align-items:center;gap:clamp(10px,1.4vw,20px)")}>
          {wide && <Link to="/insights" className="hv-insights" style={st("font-size:clamp(13px,1.05vw,14.5px);color:rgba(242,245,250,.66);white-space:nowrap")}>Insights</Link>}
          <Link to="/contact" className="hv-cta m-hide-xs" style={st("background:#f2f5fa;color:#050506;padding:11px 20px;border-radius:10px;font-size:clamp(13px,1.1vw,14.5px);font-weight:600;letter-spacing:-.01em;white-space:nowrap;transition:background .2s ease,color .2s ease")}>Speak to a Security Expert</Link>
        </div>
      </div>

      {!wide && compactOpen && (
        <div style={st("position:absolute;top:100%;left:0;right:0;padding:0 clamp(20px,2.6vw,40px) 18px")}>
          <div style={st("background:#101114;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:22px 24px;max-height:70vh;overflow:auto")}>
            {GROUPS.map((grp) => (
              <div key={grp.label} style={st("padding:14px 0;border-bottom:1px solid rgba(255,255,255,.07)")}>
                <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>{grp.label}</div>
                <div style={st("margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:2px 18px")}>
                  {grp.items.map((item) => (
                    <Link key={item.label} to={item.to} onClick={() => setCompactOpen(false)} className="hv-menuItem" style={st("display:flex;align-items:center;gap:11px;padding:8px 10px;margin-left:-10px;border-radius:8px;font-size:15px;color:rgba(242,245,250,.82)")}>
                      <FontAwesomeIcon icon={item.icon} style={{ width: '15px', fontSize: '14px', color: '#00baeb', flex: 'none' }} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {open != null && (
        <div style={st("position:absolute;top:100%;left:0;right:0;padding:0 clamp(20px,2.6vw,40px) 18px")}>
          <div style={st("max-width:1440px;margin:0 auto;background:#101114;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:34px 36px 26px;box-shadow:0 40px 80px -40px rgba(0,0,0,.9)")}>
            <div style={st("display:grid;grid-template-columns:1.5fr 1.5fr 1fr;gap:44px")}>
              <div>
                <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>{g.label}</div>
                <div style={st("margin-top:22px;display:grid;grid-template-columns:1fr 1fr;gap:6px 24px")}>
                  {g.items.map((item) => (
                    <Link key={item.label} to={item.to} className="hv-menuItem" style={st("display:flex;align-items:center;gap:12px;padding:10px 12px;margin-left:-12px;border-radius:9px;font-size:15.5px;font-weight:500;letter-spacing:-.015em;color:rgba(242,245,250,.86);transition:background .18s ease,color .18s ease")}>
                      <FontAwesomeIcon icon={item.icon} style={{ width: '16px', fontSize: '15px', color: '#00baeb', flex: 'none' }} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div style={st("border-left:1px solid rgba(255,255,255,.08);padding-left:44px")}>
                <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>In this area</div>
                <p style={st("margin:20px 0 0;font-size:16.5px;line-height:1.55;color:rgba(242,245,250,.68);max-width:340px;text-wrap:pretty")}>{g.blurb}</p>
                <Link to={g.to} className="hv-viewCap" style={st("margin-top:22px;display:inline-flex;align-items:center;gap:8px;font:500 12.5px 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#00baeb")}>VIEW CAPABILITIES →</Link>
              </div>
              <Link to="/industry-solutions/uae-e-invoicing-security" style={st("border-radius:14px;padding:26px 24px;background:linear-gradient(150deg,#007ddc 0%,#0b4fa8 100%);display:flex;flex-direction:column;justify-content:space-between;min-height:210px;color:#fff")}>
                <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.16em;color:rgba(255,255,255,.8)")}>UAE E-INVOICING</div>
                <div style={st("font-size:26px;line-height:1.15;letter-spacing:-.03em;font-weight:600;color:#fff")}>Compliance enablement, end to end</div>
                <div style={st("font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#fff")}>EXPLORE →</div>
              </Link>
            </div>
            <Link to="/delivery-model" className="hv-deliveryModel" style={st("margin-top:26px;display:flex;align-items:center;gap:16px;padding:20px 22px;border-radius:13px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.07);transition:background .2s ease")}>
              <span style={st("font-size:17px;font-weight:600;letter-spacing:-.02em;color:#f2f5fa")}>Delivery model</span>
              <span style={st("font-size:15.5px;color:rgba(242,245,250,.55)")}>Advisory, architecture, implementation, managed services and lifecycle support</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer style={st("border-top:1px solid rgba(255,255,255,.07);background:#08090b")}>
      <div className="footer-top" style={st("max-width:1440px;margin:0 auto;padding:76px clamp(20px,2.6vw,40px) 44px;display:grid;grid-template-columns:1.25fr 2.75fr;gap:64px")}>
        <div>
          <Link to="/"><img src={LOGO} alt="SechPoint SSIT" width="164" height="40" style={st("height:40px;width:auto;display:block")} /></Link>
          <p style={st("margin:22px 0 0;font-size:14.5px;line-height:1.6;color:rgba(242,245,250,.5);max-width:360px;text-wrap:pretty")}>SechPoint SSIT helps organisations assess cyber risk, design resilient architectures, integrate security and infrastructure technologies, and improve operational readiness. Part of the SechPoint group.</p>
        </div>
        <div className="footer-cols" style={st("display:grid;grid-template-columns:repeat(5,1fr);gap:28px")}>
          {GROUPS.map((grp) => (
            <div key={grp.label} style={st("display:flex;flex-direction:column;gap:12px")}>
              <div style={st("font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:rgba(242,245,250,.38)")}>{grp.label}</div>
              {grp.items.map((item) => (
                <Link key={item.label} to={item.to} className="hv-link" style={st("font-size:13.5px;color:rgba(242,245,250,.62)")}>{item.label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={st("max-width:1440px;margin:0 auto;padding:0 clamp(20px,2.6vw,40px) 52px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-size:13px;color:rgba(242,245,250,.4)")}>
        <div style={st("display:flex;gap:22px;flex-wrap:wrap")}>
          <Link to="/privacy" className="hv-link" style={st("color:rgba(242,245,250,.4)")}>Privacy Policy</Link>
          <Link to="/privacy" className="hv-link" style={st("color:rgba(242,245,250,.4)")}>Cookie Policy</Link>
          <Link to="/support" className="hv-link" style={st("color:rgba(242,245,250,.4)")}>Support</Link>
        </div>
        <div style={st("font-family:'IBM Plex Mono',monospace;font-size:12px")}>[Legal entity name — pending SechPoint confirmation]</div>
      </div>
    </footer>
  )
}
