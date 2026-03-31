import { useState } from 'react'
import './Projects.css'

const cats = ['All', 'Web App', 'Android', 'SAP Reports', 'E-Commerce']

const projects = [
  {
    id: '01', cat: 'Web App',
    title: 'SkillForge',
    sub: 'Online E-Learning Platform',
    desc: 'A full-featured e-learning platform with course management, video streaming, student dashboards, instructor panels, and payment integration.',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'REST API', 'Tailwind'],
    status: 'Completed', year: '2025',
    highlight: true,
  },
  {
    id: '02', cat: 'Android',
    title: 'WhatsApp Clone',
    sub: 'Real-time Chat Application',
    desc: 'A fully functional WhatsApp-like messaging app with real-time chat, group messaging, media sharing, user authentication, and online/offline status.',
    tech: ['Java', 'Kotlin', 'Firebase', 'Realtime DB', 'FCM'],
    status: 'Completed', year: '2024',
  },
  {
    id: '03', cat: 'Android',
    title: 'Food Ordering App',
    sub: 'Restaurant Discovery & Ordering',
    desc: 'Android food delivery app with restaurant listing, menu browsing, cart management, order tracking, and Firebase-powered backend.',
    tech: ['Kotlin', 'Firebase', 'Google Maps API', 'Material UI'],
    status: 'Completed', year: '2024',
  },
  {
    id: '04', cat: 'SAP Reports',
    title: 'Sales Summary Report',
    sub: 'SAP Crystal Reports — Intermediate',
    desc: 'Professional sales analysis report built with SAP Crystal Reports featuring drill-down capabilities, dynamic parameters, and formatted output.',
    tech: ['SAP Crystal Reports', 'SQL', 'SAP GUI'],
    status: 'Completed', year: '2025',
    sap: true,
  },
  {
    id: '05', cat: 'SAP Reports',
    title: 'Inventory Status Report',
    sub: 'SAP Crystal Reports — Intermediate',
    desc: 'Inventory management report with stock level monitoring, reorder alerts, supplier summaries, and cross-tab analysis views.',
    tech: ['SAP Crystal Reports', 'SAP ABAP Basics', 'SQL'],
    status: 'Completed', year: '2025',
    sap: true,
  },
  {
    id: '06', cat: 'E-Commerce',
    title: 'eBay Store Optimization',
    sub: 'Virtual Assistant & Store Management',
    desc: '4+ years managing eBay stores: product listings, SEO optimization, order fulfillment, customer service, competitor analysis, and revenue growth strategies.',
    tech: ['eBay Seller Hub', 'Canva', 'Excel', 'Dropshipping Tools'],
    status: 'Ongoing', year: '2020–Present',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <div className="page-in">
      <section className="phero bg2">
        <div className="container">
          <div className="tag afu">Portfolio</div>
          <h1 className="heading afu d1">My Projects &<br /><em>Work</em></h1>
          <p className="phero__sub afu d2 mono">// Real projects built during university and freelance work</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sk-tabs" style={{ marginBottom: '48px' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`sk-tab mono ${active === c ? 'active' : ''}`}>{c}</button>
            ))}
          </div>

          <div className="proj-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className={`proj-card card ${p.highlight ? 'proj-card--hl' : ''} ${p.sap ? 'proj-card--sap' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}>
                <div className="proj-card__header">
                  <div className="proj-card__num mono">{p.id}</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {p.highlight && <span className="proj-badge" style={{ background: 'rgba(0,230,118,0.1)', color: 'var(--green)', borderColor: 'var(--green-border)' }}>Featured</span>}
                    {p.sap && <span className="proj-badge" style={{ background: 'rgba(0,150,200,0.1)', color: '#00bcd4', borderColor: 'rgba(0,188,212,0.3)' }}>SAP</span>}
                    <span className={`proj-badge ${p.status === 'Ongoing' ? 'ongoing' : ''}`}>{p.status}</span>
                  </div>
                </div>
                <div className="proj-card__body">
                  <span className="proj-card__cat">{p.cat}</span>
                  <h3 className="proj-card__title">{p.title}</h3>
                  <p className="proj-card__sub">{p.sub}</p>
                  <p className="proj-card__desc">{p.desc}</p>
                  <div className="proj-card__tech">
                    {p.tech.map(t => <span key={t} className="tbadge">{t}</span>)}
                  </div>
                </div>
                <div className="proj-card__footer">
                  <span className="mono" style={{ fontSize: '10px', color: 'var(--gray)' }}>{p.year}</span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="#" className="btn-ghost" style={{ padding: '8px 16px', fontSize: '10px' }}>GitHub →</a>
                    {p.status !== 'SAP' && <a href="#" className="btn" style={{ padding: '8px 16px', fontSize: '10px' }}>Demo →</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
