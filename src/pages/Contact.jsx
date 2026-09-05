import React, { useEffect, useRef, useState } from 'react'
import { st } from '../lib.js'
import { Header, Footer } from '../Chrome.jsx'
import { Link } from '../router.jsx'

const FIELDS = [
  { name: 'firstName', id: 'c-first', label: 'First name', msg: 'Please enter your first name.' },
  { name: 'lastName', id: 'c-last', label: 'Last name', msg: 'Please enter your last name.' },
  { name: 'email', id: 'c-email', label: 'Business email', msg: 'Please enter your business email address.' },
  { name: 'organisation', id: 'c-org', label: 'Organisation', msg: 'Please enter your organisation.' },
  { name: 'country', id: 'c-country', label: 'Country', msg: 'Please select your country.' },
  { name: 'enquiry', id: 'c-enquiry', label: 'Enquiry type', msg: 'Please select an enquiry type.' },
  { name: 'requirement', id: 'c-req', label: 'Requirement', msg: 'Please tell us about your requirement.' },
  { name: 'consent', id: 'c-consent', label: 'Consent', msg: 'Please confirm you agree to be contacted about your enquiry.' },
]

const ENQUIRY_TYPES = ['Cybersecurity consultation', 'Security assessment', 'Infrastructure project', 'Managed security', 'Support', 'Partner enquiry', 'General enquiry']
const CAPABILITIES = ['Endpoint & Device', 'Email & Communication', 'Network & Infrastructure', 'Data & Identity', 'Threat Intelligence', 'Security Analytics', 'AI Security', 'Cyber Advisory', 'Security Assessments', 'Architecture', 'Implementation & Integration', 'Managed Security', 'Incident Readiness', 'Compliance Enablement', 'HCI & Private Cloud', 'Backup & Disaster Recovery']
const COUNTRIES = ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Egypt', 'Jordan', 'Morocco', 'Nigeria', 'Kenya', 'Ghana', 'South Africa', 'Tanzania', 'Ethiopia', 'India', 'Pakistan', 'Bangladesh', 'Singapore', 'Malaysia', 'Indonesia', 'United Kingdom', 'United States', 'Other']

const input = st('background:#0d0e11;border:1px solid rgba(255,255,255,.14);border-radius:10px;color:#f2f5fa;font-size:15.5px;padding:13px 14px;min-height:48px')
const label = st('font-size:14px;font-weight:600;color:rgba(242,245,250,.86)')
const errStyle = st('margin:0;color:#f2a0a0;font-size:13.5px')
const accent = '#00baeb'

function validate(name, value, checked) {
  const f = FIELDS.find((x) => x.name === name)
  if (!f) return null
  if (name === 'consent') return checked ? null : f.msg
  const v = (value || '').trim()
  if (!v) return f.msg
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Please enter a valid email address, e.g. name@company.com.'
  return null
}

export default function Contact() {
  useEffect(() => { document.title = 'Contact SechPoint SSIT | Cybersecurity & Integration UAE' }, [])
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [summary, setSummary] = useState([])
  const successRef = useRef(null)
  const submitting = status === 'submitting'

  const blurField = (e) => setErrors((s) => ({ ...s, [e.target.name]: validate(e.target.name, e.target.value, e.target.checked) }))
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    if (form.elements.website_url && form.elements.website_url.value) return // honeypot
    const errs = {}, sum = []
    FIELDS.forEach((f) => {
      const el = form.elements[f.name]
      const err = el ? validate(f.name, el.value, el.checked) : null
      if (err) { errs[f.name] = err; sum.push(f.label) }
    })
    if (sum.length) { setErrors(errs); setSummary(sum); return }
    if (!navigator.onLine) { setStatus('offline'); return }
    setStatus('submitting'); setErrors({}); setSummary([])
    setTimeout(() => { setStatus('success'); requestAnimationFrame(() => successRef.current && successRef.current.focus()) }, 1400)
  }

  const inv = (n) => (errors[n] ? 'true' : 'false')
  const Err = ({ n }) => (errors[n] ? <p style={errStyle}>⚠ {errors[n]}</p> : null)
  const field = (extra) => ({ ...input, ...extra })

  return (
    <div style={{ minHeight: '100vh', background: '#050506' }}>
      <Header />

      {/* HERO */}
      <section style={st("position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("position:absolute;inset:0;background:radial-gradient(70% 60% at 50% 0%,rgba(0,125,220,.16) 0%,rgba(5,5,6,0) 70%);pointer-events:none")}></div>
        <div style={st("position:relative;max-width:1080px;margin:0 auto;padding:clamp(120px,15vw,168px) clamp(20px,2.6vw,40px) clamp(48px,6vw,72px);text-align:center")}>
          <div style={st(`display:flex;align-items:center;justify-content:center;gap:10px;font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:${accent}`)}>
            <span style={st("width:6px;height:6px;border-radius:50%;background:#00baeb;display:block;animation:ssitPulse 2.4s ease-in-out infinite")}></span>
            Contact
          </div>
          <h1 style={st("margin:24px auto 0;font-size:clamp(34px,4.8vw,58px);line-height:1.03;letter-spacing:-.045em;font-weight:600;color:#f2f5fa;max-width:20ch;text-wrap:balance")}>Let’s discuss what secure transformation looks like for your organisation.</h1>
          <p style={st("margin:24px auto 0;max-width:660px;font-size:19px;line-height:1.6;color:rgba(242,245,250,.62);text-wrap:pretty")}>Tell us your priorities and we will connect you with the appropriate SechPoint SSIT specialist.</p>
        </div>
      </section>

      {/* FORM + ASIDE */}
      <section id="form" style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1180px;margin:0 auto;padding:clamp(56px,7vw,90px) clamp(20px,2.6vw,40px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr));gap:clamp(40px,5vw,72px);align-items:start")}>
          <div>
            <h2 style={st("margin:0;font-size:clamp(24px,2.8vw,34px);letter-spacing:-.03em;font-weight:600;color:#f2f5fa")}>How can we help?</h2>
            <p style={st("margin:16px 0 0;color:rgba(242,245,250,.62);font-size:16.5px;line-height:1.6;text-wrap:pretty")}>Share the business challenge, required capability, country and preferred next step. For sensitive support incidents, use your approved secure support channel rather than this form.</p>

            {status === 'success' && (
              <div role="status" tabIndex="-1" ref={successRef} style={st("margin-top:30px;border:1px solid rgba(0,186,235,.5);background:rgba(0,186,235,.08);border-radius:14px;padding:28px")}>
                <p style={st(`margin:0;font-weight:600;font-size:18px;color:${accent}`)}>✓ Enquiry received</p>
                <p style={st("margin:12px 0 0;color:rgba(242,245,250,.85);font-size:16px;line-height:1.6")}>Thank you for contacting SechPoint SSIT. Your enquiry has been received and will be routed to the appropriate team based on the information provided. If your request relates to an urgent security incident or an existing support agreement, please use your approved customer support channel.</p>
                <button onClick={() => setStatus('idle')} style={st("margin-top:18px;background:none;border:1px solid rgba(255,255,255,.2);color:#f2f5fa;font-size:14px;padding:10px 16px;border-radius:9px;cursor:pointer;font-family:inherit")}>Send another enquiry</button>
              </div>
            )}
            {status === 'offline' && (
              <div role="alert" style={st("margin-top:24px;border:1px solid rgba(255,180,80,.5);background:rgba(255,180,80,.07);border-radius:12px;padding:16px 20px;color:#f0c987;font-size:15px")}>⚠ You appear to be offline. Your entries are preserved — reconnect and submit again.</div>
            )}
            {summary.length > 0 && (
              <div role="alert" style={st("margin-top:24px;border:1px solid rgba(255,110,110,.5);background:rgba(255,110,110,.06);border-radius:12px;padding:16px 20px;color:#f2a0a0;font-size:14.5px")}>⚠ Please complete: {summary.join(', ')}.</div>
            )}

            {status !== 'success' && (
              <form onSubmit={onSubmit} noValidate style={st("margin-top:30px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px")}>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-first" style={label}>First name <span style={{ color: accent }}>*</span></label>
                  <input id="c-first" name="firstName" autoComplete="given-name" onBlur={blurField} aria-invalid={inv('firstName')} style={input} />
                  <Err n="firstName" />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-last" style={label}>Last name <span style={{ color: accent }}>*</span></label>
                  <input id="c-last" name="lastName" autoComplete="family-name" onBlur={blurField} aria-invalid={inv('lastName')} style={input} />
                  <Err n="lastName" />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-email" style={label}>Business email <span style={{ color: accent }}>*</span></label>
                  <input id="c-email" name="email" type="email" autoComplete="email" onBlur={blurField} aria-invalid={inv('email')} style={input} />
                  <Err n="email" />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-tel" style={label}>Telephone <span style={st("color:rgba(242,245,250,.42);font-weight:400")}>(optional)</span></label>
                  <input id="c-tel" name="telephone" type="tel" autoComplete="tel" style={input} />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-org" style={label}>Organisation <span style={{ color: accent }}>*</span></label>
                  <input id="c-org" name="organisation" autoComplete="organization" onBlur={blurField} aria-invalid={inv('organisation')} style={input} />
                  <Err n="organisation" />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-desig" style={label}>Designation <span style={st("color:rgba(242,245,250,.42);font-weight:400")}>(optional)</span></label>
                  <input id="c-desig" name="designation" autoComplete="organization-title" style={input} />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-country" style={label}>Country <span style={{ color: accent }}>*</span></label>
                  <input id="c-country" name="country" list="ssit-countries" onBlur={blurField} aria-invalid={inv('country')} style={input} />
                  <datalist id="ssit-countries">{COUNTRIES.map((c) => <option key={c} value={c}></option>)}</datalist>
                  <Err n="country" />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-enquiry" style={label}>Enquiry type <span style={{ color: accent }}>*</span></label>
                  <select id="c-enquiry" name="enquiry" defaultValue="" onBlur={blurField} aria-invalid={inv('enquiry')} style={input}>
                    <option value="">Select enquiry type…</option>
                    {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <Err n="enquiry" />
                </div>
                <div style={st("display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-cap" style={label}>Capability of interest <span style={st("color:rgba(242,245,250,.42);font-weight:400")}>(optional)</span></label>
                  <select id="c-cap" name="capability" defaultValue="" style={input}>
                    <option value="">Select a capability…</option>
                    {CAPABILITIES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div style={st("grid-column:1 / -1;display:flex;flex-direction:column;gap:7px")}>
                  <label htmlFor="c-req" style={label}>Requirement <span style={{ color: accent }}>*</span></label>
                  <textarea id="c-req" name="requirement" rows={5} onBlur={blurField} aria-invalid={inv('requirement')} style={field({ minHeight: '130px', resize: 'vertical' })}></textarea>
                  <Err n="requirement" />
                </div>
                <input type="text" name="website_url" tabIndex="-1" autoComplete="off" aria-hidden="true" style={st("position:absolute;left:-9999px;height:0;width:0;border:0;padding:0")} />
                <div style={st("grid-column:1 / -1;display:flex;flex-direction:column;gap:7px")}>
                  <label style={st("display:flex;gap:12px;align-items:flex-start;cursor:pointer;color:rgba(242,245,250,.72);font-size:14.5px;line-height:1.55")}>
                    <input id="c-consent" name="consent" type="checkbox" onBlur={blurField} aria-invalid={inv('consent')} style={st("width:19px;height:19px;margin:2px 0 0;accent-color:#00baeb;flex:none")} />
                    <span>I agree that SechPoint SSIT may contact me regarding this enquiry. <span style={{ color: accent }}>*</span></span>
                  </label>
                  <Err n="consent" />
                </div>
                <div style={st("grid-column:1 / -1;display:flex;flex-wrap:wrap;align-items:center;gap:16px")}>
                  <button type="submit" disabled={submitting} className="hv-heroPrimary" style={st(`background:#f2f5fa;color:#050506;font-weight:600;font-size:16px;padding:15px 30px;border-radius:11px;border:none;cursor:pointer;font-family:inherit;min-height:50px;display:inline-flex;align-items:center;gap:10px;opacity:${submitting ? 0.7 : 1};transition:background .22s ease,color .22s ease`)}>
                    {submitting && <span aria-hidden="true" style={st("width:15px;height:15px;border:2px solid rgba(0,0,0,.35);border-top-color:#050506;border-radius:50%;display:inline-block;animation:spSpin .7s linear infinite")}></span>}
                    {submitting ? 'Submitting…' : 'Submit Your Enquiry'}
                  </button>
                  <p style={st("margin:0;color:rgba(242,245,250,.42);font-size:13px")}><span style={{ color: accent }}>*</span> Required field</p>
                </div>
              </form>
            )}
          </div>

          {/* ASIDE */}
          <aside>
            <div style={st("border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(255,255,255,.02);padding:22px 24px")}>
              <div style={st("font-size:15px;font-weight:600;color:#f2f5fa")}>SechPoint SSIT</div>
              <dl style={st("margin:14px 0 0;display:grid;grid-template-columns:auto 1fr;gap:8px 18px;font-size:14.5px")}>
                <dt style={st("color:rgba(242,245,250,.42)")}>Location</dt><dd style={st("margin:0;color:rgba(242,245,250,.86)")}>United Arab Emirates</dd>
                <dt style={st("color:rgba(242,245,250,.42)")}>Enquiries</dt><dd style={st("margin:0;color:rgba(242,245,250,.42);font-family:'IBM Plex Mono',monospace;font-size:13px")}>[ Approved enquiry email required ]</dd>
                <dt style={st("color:rgba(242,245,250,.42)")}>Support</dt><dd style={st("margin:0")}><Link to="/support" style={{ color: accent }}>Customer support</Link></dd>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section style={st("border-bottom:1px solid rgba(255,255,255,.07)")}>
        <div style={st("max-width:1080px;margin:0 auto;padding:clamp(56px,7vw,90px) clamp(20px,2.6vw,40px)")}>
          <div style={st("font:500 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,245,250,.42)")}>Frequently asked questions</div>
          <div style={st("margin-top:28px;border-top:1px solid rgba(255,255,255,.1)")}>
            {[['What information should I include?', 'Share the business objective, current challenge, relevant environment, expected timeline and preferred next step. Avoid placing sensitive credentials or incident evidence in the form.'], ['Where does my enquiry go?', 'The form routes by enquiry type, capability and region to the approved SSIT owner.']].map(([q, a]) => (
              <div key={q} style={st("border-bottom:1px solid rgba(255,255,255,.1);padding:24px 0")}>
                <h3 style={st("margin:0;font-size:19px;line-height:1.3;letter-spacing:-.02em;font-weight:600;color:#f2f5fa")}>{q}</h3>
                <p style={st("margin:12px 0 0;max-width:760px;font-size:16px;line-height:1.6;color:rgba(242,245,250,.6)")}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
