import React from 'react'
import { st } from './lib.js'
import { Link } from './router.jsx'
import { routeForLabel } from './nav.js'
import PixelArc from './PixelArc.jsx'

// Redesigned closing CTA: the copy and action sit on a contained panel over the
// animated Pixel Arc, with a radial scrim keeping the text readable. The whole
// panel is one reusable block so every page shares the same treatment.
export default function CtaHighlight({ label, blurb, related = [] }) {
  const heading = label || 'Speak to a Security Expert'
  const text = blurb || 'Speak with SechPoint SSIT to discuss your environment, priorities and next steps.'
  return (
    <section style={st("padding:clamp(40px,6vw,80px) clamp(20px,2.6vw,40px);border-bottom:1px solid rgba(255,255,255,.07)")}>
      <div style={st("max-width:1180px;margin:0 auto")}>
        <div style={st("position:relative;overflow:hidden;border:1px solid rgba(0,186,235,.28);border-radius:24px;background:#050608")}>
          {/* animated background */}
          <PixelArc style={{ position: 'absolute', inset: 0 }} />
          {/* readability scrim */}
          <div style={st("position:absolute;inset:0;pointer-events:none;background:radial-gradient(125% 92% at 50% 34%, rgba(5,6,8,.92) 0%, rgba(5,6,8,.6) 46%, rgba(5,6,8,.12) 80%)")}></div>
          {/* content (non-interactive layer so the pointer glow tracks behind it; buttons/links opt back in) */}
          <div style={{ position: 'relative', pointerEvents: 'none', textAlign: 'center', padding: 'clamp(64px,9vw,116px) clamp(20px,4vw,40px)' }}>
            <h2 style={st("margin:0 auto;font-size:clamp(32px,4.6vw,58px);line-height:1.02;letter-spacing:-.045em;font-weight:600;color:#f2f5fa;max-width:18ch;text-wrap:balance")}>{heading}</h2>
            <p style={st("margin:22px auto 0;max-width:560px;font-size:18.5px;line-height:1.55;color:rgba(242,245,250,.72);text-wrap:pretty")}>{text}</p>
            <div style={st("margin-top:34px;display:flex;justify-content:center")}>
              <Link to="/contact" className="hv-heroPrimary" style={{ ...st("background:#f2f5fa;color:#050506;padding:16px 30px;border-radius:11px;font-size:16.5px;font-weight:600;transition:transform .22s ease,background .22s ease,color .22s ease"), pointerEvents: 'auto' }}>{heading}</Link>
            </div>
            {related.length > 0 && (
              <div style={st("margin-top:44px;padding-top:24px;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:center;gap:26px;flex-wrap:wrap")}>
                {related.map((l) => (
                  <Link key={l} to={routeForLabel(l)} className="hv-link" style={{ ...st("font-size:14.5px;color:rgba(242,245,250,.7)"), pointerEvents: 'auto' }}>{l}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
