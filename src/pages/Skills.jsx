import { useState } from 'react'
import './Skills.css'

const cats = ['All', 'SAP', 'Android', 'Web', 'E-Commerce', 'Design']

const skills = [
  // SAP
  { name: 'SAP ABAP', level: 55, cat: 'SAP', note: 'Basic–Intermediate', goal: true },
  { name: 'SAP Crystal Reports', level: 60, cat: 'SAP', note: 'Intermediate Reports', goal: true },
  // Android
  { name: 'Java', level: 80, cat: 'Android', note: '4 years' },
  { name: 'Kotlin', level: 75, cat: 'Android', note: '2 years' },
  { name: 'Firebase', level: 78, cat: 'Android', note: 'Auth, DB, Storage' },
  { name: 'Android Studio', level: 80, cat: 'Android', note: 'Primary IDE' },
  // Web
  { name: 'HTML & CSS', level: 90, cat: 'Web', note: '4 years' },
  { name: 'Python', level: 78, cat: 'Web', note: 'Django + Scripts' },
  { name: 'Django', level: 72, cat: 'Web', note: 'Full Stack' },
  { name: 'Next.js', level: 68, cat: 'Web', note: 'React Framework' },
  { name: 'JavaScript', level: 74, cat: 'Web', note: 'ES6+' },
  // E-Commerce
  { name: 'eBay VA', level: 95, cat: 'E-Commerce', note: '4+ Years' },
  { name: 'Etsy', level: 75, cat: 'E-Commerce', note: '6 Months' },
  { name: 'Shopify', level: 70, cat: 'E-Commerce', note: '6 Months' },
  { name: 'SMM', level: 72, cat: 'E-Commerce', note: 'Social Media Mgmt' },
  // Design
  { name: 'Thumbnail Design', level: 80, cat: 'Design', note: 'Canva / PS' },
  { name: 'AI Visuals', level: 75, cat: 'Design', note: 'Midjourney / DALL-E' },
]

const tools = ['VS Code', 'Android Studio', 'SAP GUI', 'Git & GitHub', 'Firebase Console',
  'Canva', 'Figma (Basic)', 'Postman', 'eBay Seller Hub', 'Shopify Admin',
  'Etsy Studio', 'Google Play Console', 'Notion', 'Jira']

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active)

  return (
    <div className="page-in">
      <section className="phero bg2">
        <div className="container">
          <div className="tag afu">Technical Arsenal</div>
          <h1 className="heading afu d1">Skills &<br /><em>Technologies</em></h1>
          <p className="phero__sub afu d2 mono">// Real skills. Real projects. Real experience.</p>
        </div>
      </section>

      {/* SAP GOAL BANNER */}
      <div className="sap-banner">
        <div className="container sap-banner__inner">
          <div className="sap-banner__icon">⚡</div>
          <div>
            <div className="sap-banner__title">Career Focus: SAP ABAP Developer</div>
            <div className="sap-banner__sub mono">Actively building expertise in SAP ABAP & SAP Crystal Reports — open to SAP trainee / junior roles</div>
          </div>
          <span className="tbadge" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>Goal 2026</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="sk-tabs">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`sk-tab mono ${active === c ? 'active' : ''}`}>{c}</button>
            ))}
          </div>

          <div className="sk-grid">
            {filtered.map((s, i) => (
              <div key={s.name} className={`sk-card card ${s.goal ? 'sk-card--goal' : ''}`} style={{ animationDelay: `${i*0.05}s` }}>
                <div className="sk-card__top">
                  <div>
                    <div className="sk-card__name">{s.name}</div>
                    <div className="sk-card__note mono">{s.note}</div>
                  </div>
                  <div className="sk-card__pct">{s.level}%</div>
                </div>
                {s.goal && <span className="sk-goal-tag">Career Goal</span>}
                <div className="pbar-wrap" style={{ marginTop: '14px' }}>
                  <div className="pbar" style={{ '--w': `${s.level}%`, animationDelay: `${i*0.08}s` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section bg2">
        <div className="container">
          <div className="tag">Tools & Platforms</div>
          <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>My Toolbox</h2>
          <div className="tools-wrap">
            {tools.map(t => <span key={t} className="tbadge">{t}</span>)}
          </div>
        </div>
      </section>
    </div>
  )
}
