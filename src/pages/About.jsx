import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faEye } from '@fortawesome/free-solid-svg-icons'
import { st } from '../lib.js'
import { Header, Footer } from '../Chrome.jsx'
import { Link } from '../router.jsx'
import CtaHighlight from '../CtaHighlight.jsx'

const eyebrow = st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")

// The four SechPoint businesses — context for "Our role within SechPoint".
const ECOSYSTEM = [
  { name: 'SechPoint DPI', tag: 'Digital public infrastructure' },
  { name: 'SechPoint Distribution', tag: 'Cybersecurity distribution' },
  { name: 'SechPoint SSIT', tag: 'Security & systems integration', current: true },
  { name: 'SechPoint ICT', tag: 'Enterprise technology & infrastructure' },
]

const DELIVER = [
  'Cybersecurity consulting and assessments',
  'Solution architecture and integration',
  'Managed security and operational support',
  'Secure infrastructure and resilience',
  'Industry-specific solution frameworks',
]

const OUTCOMES = [
  'One partner across strategy, technology and operations',
  'Clear accountability through the delivery lifecycle',
  'Architecture designed for interoperability and scale',
  'Local engagement supported by a wider technology ecosystem',
]

export default function About() {
  useEffect(() => { document.title = 'About SechPoint SSIT | Cybersecurity & System Integration' }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#050506' }}>
      <Header />

      {/* HERO */}
      <section style={st("position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.07)")}>
        <img src="/assets/cyber-advisory-hero.jpg" alt="" aria-hidden="true" style={st("position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:.5;pointer-events:none")} />
        <div style={st("position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,5,6,.55) 0%,rgba(5,5,6,.72) 55%,rgba(5,5,6,.94) 100%);pointer-events:none")}></div>
        <div style={st("position:absolute;inset:0;background:radial-gradient(70% 60% at 50% 0%,rgba(0,125,220,.18) 0%,rgba(5,5,6,0) 70%);pointer-events:none")}></div>
        <div style={st("position:relative;max-width:1080px;margin:0 auto;padding:clamp(120px,15vw,168px) clamp(20px,2.6vw,40px) clamp(56px,7vw,86px);text-align:center")}>
          <div style={{ ...eyebrow, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block;animation:ssitPulse 2.4s ease-in-out infinite")}></span>
            About SechPoint SSIT
          </div>
          <h1 style={st("margin:26px auto 0;font-size:clamp(36px,5.2vw,64px);line-height:1.02;letter-spacing:-.045em;font-weight:600;color:#f2f5fa;max-width:18ch;text-wrap:balance")}>Cybersecurity and integration, engineered around your business.</h1>
          <p style={st("margin:26px auto 0;max-width:680px;font-size:19.5px;line-height:1.6;color:rgba(242,245,250,.66);text-wrap:pretty")}>We help organisations translate security priorities into architectures, implementations and operating models that work in the real world.</p>
          <div style={st("margin-top:38px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center")}>
            <Link to="/contact" className="hv-heroPrimary" style={st("background:#f2f5fa;color:#050506;padding:15px 26px;border-radius:11px;font-size:16px;font-weight:600;letter-spacing:-.01em;transition:transform .22s ease,background .22s ease,color .22s ease")}>Talk to SechPoint SSIT</Link>
            <Link to="/cybersecurity" className="hv-heroSecondary" style={st("background:#141518;border:1px solid rgba(255,255,255,.1);color:#f2f5fa;padding:15px 26px;border-radius:11px;font-size:16px;font-weight:500;letter-spacing:-.01em;transition:background .22s ease,border-color .22s ease")}>Explore Related Capabilities</Link>
          </div>
        </div>
      </section>

      {/* OPENING STATEMENT */}
      <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1000px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
          <p style={st("margin:0;font-size:clamp(21px,2.3vw,30px);line-height:1.42;letter-spacing:-.025em;color:rgba(242,245,250,.9);text-wrap:pretty")}>SechPoint System Integration Technologies (SSIT) is part of the wider SechPoint ecosystem. The business brings together cybersecurity, digital infrastructure, systems integration and advisory expertise to support organisations through design, implementation and ongoing improvement.</p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
          <div style={eyebrow}>Mission &amp; vision</div>
          <div className="tmpl-grid" style={st("margin-top:36px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:18px")}>
            {[
              { icon: faBullseye, title: 'Our mission', body: 'To help organisations build secure, resilient and intelligent digital environments through practical advice, well-integrated technology and accountable delivery.' },
              { icon: faEye, title: 'Our vision', body: 'To become a trusted regional partner for secure transformation — recognised for technical depth, clarity of execution and long-term customer value.' },
            ].map((c) => (
              <div key={c.title} style={st("position:relative;overflow:hidden;background:#0b0c0f;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:32px 30px;display:flex;flex-direction:column;gap:16px")}>
                <span style={st("position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#007ddc,#01f1f8)")}></span>
                <span style={st("width:46px;height:46px;border-radius:12px;background:rgba(0,186,235,.1);border:1px solid rgba(0,186,235,.25);display:flex;align-items:center;justify-content:center")}>
                  <FontAwesomeIcon icon={c.icon} style={{ fontSize: '19px', color: '#00baeb' }} />
                </span>
                <span style={st("font-size:22px;line-height:1.2;letter-spacing:-.028em;font-weight:600;color:#f2f5fa")}>{c.title}</span>
                <span style={st("font-size:16px;line-height:1.6;color:rgba(242,245,250,.64);text-wrap:pretty")}>{c.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR ROLE WITHIN SECHPOINT */}
      <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
          <div style={st("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:clamp(28px,4vw,56px);align-items:start")}>
            <div>
              <div style={eyebrow}>Our role within SechPoint</div>
              <p style={st("margin:22px 0 0;font-size:clamp(19px,1.9vw,23px);line-height:1.5;letter-spacing:-.02em;color:rgba(242,245,250,.86);max-width:36ch;text-wrap:pretty")}>SSIT complements SechPoint’s broader strengths in proprietary DPI technology, cybersecurity distribution and ICT solutions.</p>
              <p style={st("margin:18px 0 0;font-size:16px;line-height:1.6;color:rgba(242,245,250,.6);max-width:40ch;text-wrap:pretty")}>This group perspective enables access to a wider ecosystem while maintaining a clear system-integration focus.</p>
            </div>
            <div style={st("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:14px")}>
              {ECOSYSTEM.map((b) => (
                <div key={b.name} style={st(`position:relative;border-radius:16px;padding:22px 22px;display:flex;flex-direction:column;gap:8px;border:1px solid ${b.current ? 'rgba(0,186,235,.5)' : 'rgba(255,255,255,.09)'};background:${b.current ? 'linear-gradient(155deg,rgba(0,125,220,.16),rgba(1,241,248,.04))' : '#0b0c0f'}`)}>
                  <span aria-hidden="true" style={st(`width:8px;height:8px;border-radius:50%;background:${b.current ? '#01f1f8' : 'rgba(0,186,235,.7)'}`)}></span>
                  <span style={st("font-size:17px;font-weight:600;letter-spacing:-.02em;color:#f2f5fa")}>{b.name}</span>
                  <span style={st("font-size:13.5px;line-height:1.5;color:rgba(242,245,250,.55)")}>{b.tag}</span>
                  {b.current && <span style={st("margin-top:2px;font:500 10.5px 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#01f1f8")}>You are here</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1440px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
          <div style={st("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:clamp(32px,4vw,64px);align-items:center")}>
            <div style={st("position:relative;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.1);aspect-ratio:4 / 3")}>
              <img src="/assets/deliver-visual.jpg" alt="SechPoint SSIT specialists at work" style={st("position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;display:block")} />
            </div>
            <div>
              <div style={eyebrow}>What we deliver</div>
              <ul style={st("margin:28px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:2px")}>
                {DELIVER.map((d) => (
                  <li key={d} style={st("display:flex;gap:14px;align-items:baseline;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:17px;color:rgba(242,245,250,.88)")}>
                    <span aria-hidden="true" style={st("color:#00baeb;font-size:12px")}>◆</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS OUTCOMES */}
      <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1080px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
          <div style={eyebrow}>Business outcomes</div>
          <div style={st("margin-top:28px;display:flex;flex-direction:column")}>
            {OUTCOMES.map((o, i) => (
              <div key={o} style={st("display:flex;gap:clamp(16px,2.4vw,32px);align-items:baseline;border-top:1px solid rgba(255,255,255,.09);padding:22px 6px")}>
                <span style={st(`font:500 clamp(20px,1.8vw,26px) 'IBM Plex Mono',monospace;letter-spacing:-.04em;color:${i === OUTCOMES.length - 1 ? '#00baeb' : 'rgba(0,125,220,' + (0.5 + i * 0.12) + ')'};line-height:1;flex:none`)}>{'0' + (i + 1)}</span>
                <span style={st("font-size:clamp(18px,1.9vw,24px);line-height:1.3;letter-spacing:-.02em;font-weight:500;color:#f2f5fa;text-wrap:pretty")}>{o}</span>
              </div>
            ))}
            <div style={st("border-top:1px solid rgba(255,255,255,.09)")}></div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <CtaHighlight label="Talk to SechPoint SSIT" blurb="Speak with SechPoint SSIT to discuss your environment, priorities and next steps." related={['Delivery Model', 'Partners', 'Contact']} />

      <Footer />
    </div>
  )
}
