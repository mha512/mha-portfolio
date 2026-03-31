import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const roles = ['Software Engineer', 'SAP ABAP Developer', 'Android Developer', 'Full Stack Developer', 'eBay VA Expert']

const stats = [
  { val: 'B.Sc.', sub: 'Software Engineering' },
  { val: '3.16', sub: 'CGPA — 2026 Graduate' },
  { val: '4+', sub: 'Years eBay Experience' },
  { val: '6+', sub: 'Projects Delivered' },
]

const featured = [
  { id: '01', title: 'SkillForge', sub: 'Online E-Learning Platform', tech: 'Next.js · Django · PostgreSQL', tag: 'Web App' },
  { id: '02', title: 'WhatsApp Clone', sub: 'Real-time Messaging App', tech: 'Java · Kotlin · Firebase', tag: 'Android' },
  { id: '03', title: 'Food Ordering App', sub: 'Restaurant Discovery & Order', tech: 'Kotlin · Firebase · Google Maps', tag: 'Android' },
]

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = roles[roleIdx]
    let i = typing ? 0 : role.length
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1))
        i++
        if (i >= role.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1800) }
      } else {
        setDisplayed(role.slice(0, i - 1))
        i--
        if (i <= 0) { clearInterval(interval); setRoleIdx(p => (p + 1) % roles.length); setTyping(true) }
      }
    }, typing ? 60 : 35)
    return () => clearInterval(interval)
  }, [roleIdx, typing])

  return (
    <div className="page-in">
      {/* ====== HERO ====== */}
      <section className="hero grid-bg scanline-wrap">
        <div className="hero__bg">
          <div className="hero__orb" />
          <svg className="hero__lines" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="300" x2="800" y2="300" stroke="rgba(0,230,118,0.04)" strokeWidth="1"/>
            <line x1="400" y1="0" x2="400" y2="600" stroke="rgba(0,230,118,0.04)" strokeWidth="1"/>
            <circle cx="400" cy="300" r="200" fill="none" stroke="rgba(0,230,118,0.03)" strokeWidth="1"/>
            <circle cx="400" cy="300" r="350" fill="none" stroke="rgba(0,230,118,0.02)" strokeWidth="1"/>
          </svg>
        </div>

        <div className="container hero__content">
          <div className="hero__badge afu d1">
            <span className="hero__dot" />
            <span className="mono" style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--green)' }}>
              Open to Opportunities
            </span>
          </div>

          <div className="hero__greeting afu d1 mono" style={{ fontSize: '13px', color: 'var(--gray)', letterSpacing: '0.15em', marginBottom: '12px' }}>
            &gt; Hello, World! I am
          </div>

          <h1 className="hero__name afu d2">
            Muhammad<br /><span className="green glow">Hashaam</span><br />Ahmad
          </h1>

          <div className="hero__role afu d3">
            <span className="hero__role-label mono">{'<role>'}</span>
            <span className="hero__role-text tcursor">{displayed}</span>
            <span className="hero__role-label mono">{'</role>'}</span>
          </div>

          <p className="hero__desc afu d4">
            B.Sc. Software Engineering graduate (CGPA 3.16) from Lahore.
            Passionate about <span className="green">SAP ABAP</span> development,
            <span className="green"> Android</span> apps, full-stack web, and
            <span className="green"> e-commerce</span> automation.
          </p>

          <div className="hero__actions afu d5">
            <Link to="/projects" className="btn">View Projects →</Link>
            <Link to="/contact" className="btn-ghost">Get In Touch</Link>
            <a href="/HashaamCV.pdf" className="btn-ghost" download>Download CV</a>
          </div>

          <div className="hero__scroll afu d6">
            <div className="hero__scroll-line" />
            <span className="mono" style={{ fontSize: '10px', color: 'var(--gray)', letterSpacing: '0.3em' }}>SCROLL</span>
          </div>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {stats.map((s, i) => (
            <div key={i} className="hero__stat">
              <span className="hero__stat-val">{s.val}</span>
              <span className="hero__stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ====== ABOUT SNIPPET ====== */}
      <section className="section bg2">
        <div className="container about-snip">
          <div className="about-snip__left">
            <div className="tag">About Me</div>
            <h2 className="heading">Software Engineer<br /><em>from Lahore</em></h2>
            <div className="gdiv" />
            <p className="about-snip__p">
              Fresh graduate from Lahore with a B.Sc. in Software Engineering (CGPA 3.16),
              I combine strong technical foundations with 4+ years of real-world e-commerce
              experience as an eBay Virtual Assistant.
            </p>
            <p className="about-snip__p">
              My career goal is to become a proficient <span className="green">SAP ABAP Developer</span> —
              building enterprise-grade reports and custom solutions using SAP Crystal Reports
              and ABAP programming.
            </p>
            <div className="about-snip__chips">
              {['SAP ABAP', 'Android Dev', 'Next.js', 'Django', 'eBay VA', 'Firebase'].map(c => (
                <span key={c} className="tbadge">{c}</span>
              ))}
            </div>
            <Link to="/about" className="btn-ghost" style={{ marginTop: '32px', display: 'inline-flex' }}>Read Full Story →</Link>
          </div>

          <div className="about-snip__right">
            <div className="about-card">
              <div className="about-card__hex">
                <svg viewBox="0 0 160 180" width="160">
                  <polygon points="80,8 152,44 152,136 80,172 8,136 8,44"
                    fill="var(--card)" stroke="var(--green)" strokeWidth="1" opacity="0.8"/>
                  <polygon points="80,22 138,54 138,126 80,158 22,126 22,54"
                    fill="none" stroke="rgba(0,230,118,0.2)" strokeWidth="0.5"/>
                  <text x="80" y="82" textAnchor="middle" fontFamily="'Syne',sans-serif"
                    fontSize="24" fontWeight="800" fill="#00e676">MHA</text>
                  <text x="80" y="104" textAnchor="middle" fontFamily="'JetBrains Mono',monospace"
                    fontSize="9" fill="rgba(0,230,118,0.6)" letterSpacing="2">SOFTWARE ENG.</text>
                </svg>
              </div>
              <div className="about-card__info">
                {[
                  ['Degree', 'B.Sc. Software Engineering'],
                  ['Batch', '2022–2026'],
                  ['CGPA', '3.16 / 4.0'],
                  ['City', 'Lahore, Pakistan'],
                  ['Goal', 'SAP ABAP Developer'],
                ].map(([k, v]) => (
                  <div key={k} className="about-card__row">
                    <span className="about-card__key">{k}</span>
                    <span className="about-card__val">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURED WORK ====== */}
      <section className="section">
        <div className="container">
          <div className="feat__header">
            <div>
              <div className="tag">Selected Work</div>
              <h2 className="heading" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>Featured Projects</h2>
            </div>
            <Link to="/projects" className="btn-ghost">All Projects →</Link>
          </div>

          <div className="feat__list">
            {featured.map(p => (
              <div key={p.id} className="feat__item">
                <span className="feat__num mono">{p.id}</span>
                <div className="feat__body">
                  <div className="feat__tag tbadge" style={{ marginBottom: '8px' }}>{p.tag}</div>
                  <h3 className="feat__title">{p.title}</h3>
                  <p className="feat__sub">{p.sub}</p>
                  <p className="feat__tech mono">{p.tech}</p>
                </div>
                <Link to="/projects" className="feat__arrow">→</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta-band bg3">
        <div className="container cta-band__inner">
          <div>
            <div className="tag">Ready to Connect?</div>
            <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,52px)', marginBottom: 0 }}>
              Looking for <em>SAP / Dev</em><br />opportunities in Lahore
            </h2>
          </div>
          <div className="cta-band__btns">
            <Link to="/contact" className="btn">Start Conversation →</Link>
            <Link to="/services" className="btn-ghost">My Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
