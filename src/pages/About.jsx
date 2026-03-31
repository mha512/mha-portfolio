import './About.css'

const education = [
  { year: '2022–2026', degree: 'B.Sc. Software Engineering', school: 'University of Lahore (or your university)', grade: 'CGPA: 3.16', icon: '🎓' },
  { year: '2019–2021', degree: 'F.Sc. Pre-Engineering', school: 'Concordia College, Lahore', grade: 'Intermediate', icon: '📚' },
  { year: '2017–2019', degree: 'Matriculation (Science)', school: 'Hajvery Lyceum Group of Schools, Lahore', grade: 'Secondary School', icon: '🏫' },
]

const experience = [
  {
    period: '2020–Present', role: 'eBay Virtual Assistant', company: 'Freelance / Remote', type: 'E-Commerce',
    points: [
      '4+ years of professional eBay VA experience',
      'Product listing optimization, SEO titles & descriptions',
      'Order management, customer service & dispute resolution',
      'Competitor research & pricing strategy',
      'Inventory management and dropshipping coordination',
    ]
  },
  {
    period: '2024', role: 'Etsy & Shopify VA', company: 'Freelance', type: 'E-Commerce',
    points: [
      '6 months of Etsy & Shopify e-commerce management',
      'Store setup, product photography optimization',
      'Social media marketing for product promotion',
      'Sales funnel optimization and conversion tracking',
    ]
  },
]

const personal = [
  ['Full Name', 'Muhammad Hashaam Ahmad'],
  ['Location', 'Lahore, Punjab, Pakistan'],
  ['Degree', 'B.Sc. Software Engineering'],
  ['CGPA', '3.16 / 4.0'],
  ['Graduation', '2026'],
  ['Career Goal', 'SAP ABAP Developer'],
  ['Languages', 'Urdu, English'],
  ['Availability', 'Immediately Available'],
]

export default function About() {
  return (
    <div className="page-in">
      {/* PAGE HERO */}
      <section className="phero bg2">
        <div className="container">
          <div className="tag afu">About Me</div>
          <h1 className="heading afu d1">
            Muhammad<br /><em>Hashaam Ahmad</em>
          </h1>
          <p className="phero__sub afu d2 mono">
            // Software Engineer · SAP Aspirant · eBay Expert · Lahore, Pakistan
          </p>
        </div>
      </section>

      {/* BIO */}
      <section className="section">
        <div className="container bio__grid">
          <div className="bio__card">
            <div className="bio__avatar">
              <svg viewBox="0 0 200 200" width="100%">
                <polygon points="100,10 182,55 182,145 100,190 18,145 18,55"
                  fill="var(--card)" stroke="var(--green)" strokeWidth="1"/>
                <polygon points="100,28 164,66 164,134 100,172 36,134 36,66"
                  fill="none" stroke="rgba(0,230,118,0.2)" strokeWidth="0.5"/>
                <text x="100" y="95" textAnchor="middle" fontFamily="'Syne',sans-serif"
                  fontSize="40" fontWeight="800" fill="#00e676">MHA</text>
                <text x="100" y="118" textAnchor="middle" fontFamily="'JetBrains Mono',monospace"
                  fontSize="8" fill="rgba(0,230,118,0.5)" letterSpacing="3">SOFTWARE ENGINEER</text>
                <text x="100" y="134" textAnchor="middle" fontFamily="'JetBrains Mono',monospace"
                  fontSize="7" fill="rgba(0,230,118,0.3)" letterSpacing="2">LAHORE · 2026</text>
              </svg>
            </div>
            <div className="bio__info">
              {personal.map(([k, v]) => (
                <div key={k} className="bio__row">
                  <span className="bio__key">{k}</span>
                  <span className="bio__val" style={k === 'Availability' ? { color: 'var(--green)' } : {}}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bio__text">
            <div className="tag">My Story</div>
            <h2 className="heading" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
              Engineer with a<br /><em>Vision for SAP</em>
            </h2>
            <div className="gdiv" />
            <p className="bio__p">
              I'm Muhammad Hashaam Ahmad — a fresh Software Engineering graduate from Lahore
              with a strong academic foundation (CGPA 3.16) and practical industry experience
              that sets me apart from most fresh graduates.
            </p>
            <p className="bio__p">
              My primary career goal is to establish myself as a professional <span className="green">SAP ABAP Developer</span>,
              contributing to enterprise software solutions through custom ABAP programs,
              SAP Crystal Reports, and business process optimization.
            </p>
            <p className="bio__p">
              Beyond SAP, I've built Android applications using Java & Kotlin with Firebase,
              developed full-stack web platforms with Next.js & Django, and accumulated 4+ years
              of real e-commerce experience as an eBay Virtual Assistant.
            </p>
            <div className="bio__vals">
              {['Problem Solver', 'Detail Oriented', 'Fast Learner', 'Team Player', 'Goal Focused'].map(v => (
                <div key={v} className="bio__val-tag">
                  <span style={{ color: 'var(--green)', marginRight: '8px' }}>▶</span>{v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section bg2">
        <div className="container">
          <div className="tag">Academic Background</div>
          <h2 className="heading" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>Education</h2>
          <div className="edu__grid">
            {education.map((e, i) => (
              <div key={i} className="edu__card card">
                <div className="edu__top">
                  <span className="edu__year mono">{e.year}</span>
                  <span className="edu__icon">{e.icon}</span>
                </div>
                <h3 className="edu__degree">{e.degree}</h3>
                <p className="edu__school">{e.school}</p>
                <span className="tbadge" style={{ marginTop: '16px' }}>{e.grade}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="container">
          <div className="tag">Work History</div>
          <h2 className="heading" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>Experience</h2>
          <div className="exp__list">
            {experience.map((e, i) => (
              <div key={i} className="exp__item card" style={{ padding: '36px', marginBottom: '20px' }}>
                <div className="exp__header">
                  <div>
                    <div className="exp__role">{e.role}</div>
                    <div className="exp__company">{e.company}</div>
                  </div>
                  <div className="exp__right">
                    <span className="tbadge">{e.type}</span>
                    <span className="mono" style={{ fontSize: '11px', color: 'var(--green)', marginTop: '8px', display: 'block' }}>{e.period}</span>
                  </div>
                </div>
                <ul className="exp__points">
                  {e.points.map((p, j) => (
                    <li key={j}><span className="green">›</span> {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
