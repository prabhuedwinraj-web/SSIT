import React, { useEffect } from 'react'
import { st } from './lib.js'
import { Header, Footer } from './Chrome.jsx'
import { Link } from './router.jsx'
import { routeForLabel } from './nav.js'
import CtaHighlight from './CtaHighlight.jsx'

const eyebrow = st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")

export default function PageTemplate({ seo, breadcrumb, eyebrow: eb, h1, lede, primary, secondary, opening, pillarsLabel, pillars = [], deliver = [], outcomes = [], faqs = [], next, related = [], ctaVariant = 'pixel', heroImage }) {
  useEffect(() => { if (seo) document.title = seo }, [seo])

  return (
    <div style={{ minHeight: '100vh', background: '#050506' }}>
      <Header />

      {/* HERO */}
      <section style={st("position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.07)")}>
        {heroImage && (
          <>
            <img src={heroImage} alt="" aria-hidden="true" style={st("position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:.55;pointer-events:none")} />
            <div style={st("position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,5,6,.55) 0%,rgba(5,5,6,.7) 55%,rgba(5,5,6,.92) 100%);pointer-events:none")}></div>
          </>
        )}
        <div style={st("position:absolute;inset:0;background:radial-gradient(70% 60% at 50% 0%,rgba(0,125,220,.16) 0%,rgba(5,5,6,0) 70%);pointer-events:none")}></div>
        <div style={st("position:relative;max-width:1080px;margin:0 auto;padding:clamp(120px,15vw,168px) clamp(20px,2.6vw,40px) clamp(56px,7vw,86px);text-align:center")}>
          <div style={{ ...eyebrow, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block;animation:ssitPulse 2.4s ease-in-out infinite")}></span>
            {eb}
          </div>
          <h1 style={st("margin:26px auto 0;font-size:clamp(36px,5.2vw,64px);line-height:1.02;letter-spacing:-.045em;font-weight:600;color:#f2f5fa;max-width:18ch;text-wrap:balance")}>{h1}</h1>
          {lede && <p style={st("margin:26px auto 0;max-width:680px;font-size:19.5px;line-height:1.6;color:rgba(242,245,250,.62);text-wrap:pretty")}>{lede}</p>}
          {(primary || secondary) && (
            <div style={st("margin-top:38px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center")}>
              {primary && <Link to={primary.to} className="hv-heroPrimary" style={st("background:#f2f5fa;color:#050506;padding:15px 26px;border-radius:11px;font-size:16px;font-weight:600;letter-spacing:-.01em;transition:transform .22s ease,background .22s ease,color .22s ease")}>{primary.label}</Link>}
              {secondary && <Link to={secondary.to} className="hv-heroSecondary" style={st("background:#141518;border:1px solid rgba(255,255,255,.1);color:#f2f5fa;padding:15px 26px;border-radius:11px;font-size:16px;font-weight:500;letter-spacing:-.01em;transition:background .22s ease,border-color .22s ease")}>{secondary.label}</Link>}
            </div>
          )}
        </div>
      </section>

      {/* OPENING */}
      {opening && (
        <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
          <div style={st("max-width:1000px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
            <p style={st("margin:0;font-size:clamp(21px,2.3vw,30px);line-height:1.42;letter-spacing:-.025em;color:rgba(242,245,250,.9);text-wrap:pretty")}>{opening}</p>
          </div>
        </section>
      )}

      {/* PILLARS / FRAMEWORK */}
      {pillars.length > 0 && (
        <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
          <div style={st("max-width:1440px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
            {pillarsLabel && <div style={eyebrow}>{pillarsLabel}</div>}
            <div className="tmpl-grid" style={st("margin-top:36px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px")}>
              {pillars.map((p, i) => (
                <div key={i} style={st("position:relative;overflow:hidden;background:#0b0c0f;border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:28px 26px;display:flex;flex-direction:column;gap:12px")}>
                  <span style={st("position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#007ddc,#01f1f8)")}></span>
                  <span style={st("font:500 30px 'IBM Plex Mono',monospace;letter-spacing:-.04em;color:#00baeb;line-height:1")}>{'0' + (i + 1)}</span>
                  <span style={st("font-size:20px;line-height:1.2;letter-spacing:-.028em;font-weight:600;color:#f2f5fa")}>{p.title}</span>
                  <span style={st("font-size:15.5px;line-height:1.6;color:rgba(242,245,250,.6);text-wrap:pretty")}>{p.body}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT WE DELIVER */}
      {deliver.length > 0 && (
        <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
          <div style={st("max-width:1440px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
            <div style={eyebrow}>What we deliver</div>
            <ul className="tmpl-grid" style={st("margin:34px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:1px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden")}>
              {deliver.map((d) => (
                <li key={d} className="hv-cap" style={st("background:#0b0c0f;padding:22px 24px;font-size:16px;color:rgba(242,245,250,.86);display:flex;gap:12px;align-items:baseline;transition:background .2s ease")}>
                  <span aria-hidden="true" style={st("color:#00baeb;font-size:11px")}>◆</span>{d}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* BUSINESS OUTCOMES */}
      {outcomes.length > 0 && (
        <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
          <div style={st("max-width:1080px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
            <div style={eyebrow}>Business outcomes</div>
            <div style={st("margin-top:28px;display:flex;flex-direction:column")}>
              {outcomes.map((o, i) => (
                <div key={o} style={st("display:flex;gap:clamp(16px,2.4vw,32px);align-items:baseline;border-top:1px solid rgba(255,255,255,.09);padding:22px 6px")}>
                  <span style={st(`font:500 clamp(20px,1.8vw,26px) 'IBM Plex Mono',monospace;letter-spacing:-.04em;color:${i === outcomes.length - 1 ? '#00baeb' : 'rgba(0,125,220,' + (0.5 + i * 0.1) + ')'};line-height:1;flex:none`)}>{'0' + (i + 1)}</span>
                  <span style={st("font-size:clamp(18px,1.9vw,24px);line-height:1.3;letter-spacing:-.02em;font-weight:500;color:#f2f5fa;text-wrap:pretty")}>{o}</span>
                </div>
              ))}
              <div style={st("border-top:1px solid rgba(255,255,255,.09)")}></div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
          <div style={st("max-width:1080px;margin:0 auto;padding:clamp(56px,7vw,96px) clamp(20px,2.6vw,40px)")}>
            <div style={eyebrow}>Frequently asked questions</div>
            <div style={st("margin-top:30px;border-top:1px solid rgba(255,255,255,.1)")}>
              {faqs.map(([q, a]) => (
                <div key={q} style={st("border-bottom:1px solid rgba(255,255,255,.1);padding:26px 0")}>
                  <h3 style={st("margin:0;font-size:20px;line-height:1.3;letter-spacing:-.02em;font-weight:600;color:#f2f5fa")}>{q}</h3>
                  <p style={st("margin:12px 0 0;max-width:760px;font-size:16.5px;line-height:1.6;color:rgba(242,245,250,.6);text-wrap:pretty")}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CLOSING CTA */}
      {ctaVariant === 'pixel' ? (
        <CtaHighlight label={next ? next.label : undefined} blurb={next && next.blurb ? next.blurb : undefined} related={related} />
      ) : (
      <section style={st("position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("position:absolute;inset:0;background:radial-gradient(80% 70% at 50% 100%,rgba(0,125,220,.22) 0%,rgba(5,5,6,0) 72%);pointer-events:none")}></div>
        <div style={st("position:relative;max-width:1080px;margin:0 auto;padding:clamp(72px,9vw,110px) clamp(20px,2.6vw,40px);text-align:center")}>
          <h2 style={st("margin:0;font-size:clamp(32px,4.6vw,58px);line-height:1.02;letter-spacing:-.045em;font-weight:600;text-wrap:balance")}>{next ? next.label : 'Speak to a Security Expert'}</h2>
          <p style={st("margin:22px auto 0;max-width:560px;font-size:18.5px;line-height:1.55;color:rgba(242,245,250,.6)")}>{next && next.blurb ? next.blurb : 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.'}</p>
          <div style={st("margin-top:34px;display:flex;justify-content:center")}>
            <Link to="/contact" className="hv-heroPrimary" style={st("background:#f2f5fa;color:#050506;padding:16px 30px;border-radius:11px;font-size:16.5px;font-weight:600;transition:transform .22s ease,background .22s ease,color .22s ease")}>{next ? next.label : 'Speak to a Security Expert'}</Link>
          </div>
          {related.length > 0 && (
            <div style={st("margin-top:52px;padding-top:26px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:center;gap:26px;flex-wrap:wrap")}>
              {related.map((l) => (
                <Link key={l} to={routeForLabel(l)} className="hv-link" style={st("font-size:14.5px;color:rgba(242,245,250,.6)")}>{l}</Link>
              ))}
            </div>
          )}
        </div>
      </section>
      )}

      <Footer />
    </div>
  )
}
