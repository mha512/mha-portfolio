import { useState } from 'react'
import './Contact.css'

const info = [
  { label: 'Email', value: 'hashaam.ahmad@email.com', href: 'mailto:hashaam.ahmad@email.com' },
  { label: 'Location', value: 'Lahore, Punjab, Pakistan', href: null },
  { label: 'Phone', value: '+92 XXX XXXXXXX', href: 'tel:+92XXXXXXXXX' },
  { label: 'Availability', value: '✓ Immediately Available', href: null, green: true },
  { label: 'Looking For', value: 'SAP / Android / Web Dev Roles', href: null, green: true },
]

const socials = [
  { name: 'GitHub', handle: '@muhammadHashaam', url: 'https://github.com/mha512' },
  { name: 'LinkedIn', handle: 'Muhammad Hashaam Ahmad', url: 'https://www.linkedin.com/in/muhammad-hashaam-ahmad-148398315/' },
  { name: 'Twitter', handle: '@MHashaamAhmad', url: 'https://x.com/hashaam37?s=21' },
]

const services = ['SAP ABAP / Crystal Reports', 'Android App Development', 'Full Stack Web (Django + Next.js)', 'eBay / Etsy VA Services', 'Thumbnail & AI Design', 'SMM Services', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    setStatus('sent')
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <div className="page-in">
      <section className="phero bg2">
        <div className="container">
          <div className="tag afu">Get In Touch</div>
          <h1 className="heading afu d1">Let's Work<br /><em>Together</em></h1>
          <p className="phero__sub afu d2 mono">// Open to SAP, Android, Web & Freelance opportunities</p>
        </div>
      </section>

      <section className="section">
        <div className="container ct-grid">

          {/* LEFT INFO */}
          <div className="ct-info">
            <div className="ct-info__header">
              <div className="tag">Contact Info</div>
              <h2 className="ct-info__title">Muhammad<br />Hashaam Ahmad</h2>
              <p className="ct-info__desc">
                Fresh Software Engineering graduate from Lahore, open to full-time, part-time, and freelance opportunities.
                Especially interested in <span className="green">SAP ABAP</span> roles and Android development positions.
              </p>
            </div>

            <div className="ct-info__items">
              {info.map(i => (
                <div key={i.label} className="ct-info__row">
                  <span className="ct-info__label mono">{i.label}</span>
                  {i.href
                    ? <a href={i.href} className={`ct-info__val hug ${i.green ? 'green' : ''}`}>{i.value}</a>
                    : <span className={`ct-info__val ${i.green ? 'green' : ''}`}>{i.value}</span>
                  }
                </div>
              ))}
            </div>

            <div className="ct-info__socials">
              <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--green)', marginBottom: '16px', textTransform: 'uppercase' }}>// Social Profiles</div>
              {socials.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="ct-social">
                  <div>
                    <div className="ct-social__name">{s.name}</div>
                    <div className="ct-social__handle mono">{s.handle}</div>
                  </div>
                  <span style={{ color: 'var(--green)' }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="ct-form-wrap">
            {status === 'sent' ? (
              <div className="ct-success">
                <div className="ct-success__icon">
                  <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                    <polygon points="24,2 44,13 44,35 24,46 4,35 4,13" fill="none" stroke="#00e676" strokeWidth="1.5"/>
                    <polyline points="16,24 21,30 32,18" stroke="#00e676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="ct-success__title">Message Sent!</h3>
                <p className="ct-success__sub">Shukria! I'll respond within 24 hours. Looking forward to connecting with you.</p>
                <button onClick={() => setStatus(null)} className="btn" style={{ marginTop: '24px' }}>Send Another →</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form" noValidate>
                <div className="ct-form__title mono" style={{ fontSize: '11px', color: 'var(--green)', letterSpacing: '0.2em', marginBottom: '32px' }}>
                  &gt; SEND MESSAGE
                </div>

                <div className="ct-row">
                  <div className="ct-group">
                    <label className="ct-label">Full Name *</label>
                    <input name="name" type="text" className={`ct-input ${errors.name ? 'error' : ''}`}
                      placeholder="Your full name" value={form.name} onChange={handleChange} />
                    {errors.name && <span className="ct-error">{errors.name}</span>}
                  </div>
                  <div className="ct-group">
                    <label className="ct-label">Email Address *</label>
                    <input name="email" type="email" className={`ct-input ${errors.email ? 'error' : ''}`}
                      placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="ct-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="ct-group">
                  <label className="ct-label">Service Needed</label>
                  <select name="service" className="ct-input ct-select" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="ct-group">
                  <label className="ct-label">Message *</label>
                  <textarea name="message" className={`ct-input ct-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell me about your project, role, or what you need help with..."
                    rows={6} value={form.message} onChange={handleChange} />
                  {errors.message && <span className="ct-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn ct-submit" disabled={status === 'sending'}>
                  {status === 'sending'
                    ? <span className="mono" style={{ fontSize: '12px' }}>Sending<span className="tcursor"></span></span>
                    : 'Send Message →'
                  }
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  )
}
