import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    num: '01', icon: '⚡',
    title: 'SAP Development',
    sub: 'ABAP & Crystal Reports',
    desc: 'Custom SAP ABAP programs, function modules, reports, and SAP Crystal Reports development. Focused on business process automation and reporting solutions.',
    list: ['SAP Crystal Reports (Intermediate)', 'SAP ABAP Basics', 'Custom Report Design', 'Data Extraction & Analysis'],
    badge: 'Career Focus',
    badgeColor: 'var(--green)',
  },
  {
    num: '02', icon: '📱',
    title: 'Android Development',
    sub: 'Java & Kotlin Apps',
    desc: 'Native Android applications using Java and Kotlin with Firebase backend. From simple utility apps to full-featured social and e-commerce platforms.',
    list: ['Java & Kotlin', 'Firebase Integration', 'Material Design UI', 'Play Store Publishing'],
    badge: 'Available',
    badgeColor: 'var(--green)',
  },
  {
    num: '03', icon: '🌐',
    title: 'Full Stack Web Dev',
    sub: 'Django + Next.js',
    desc: 'End-to-end web applications from database design to responsive frontend. Specializing in Django REST APIs paired with modern React/Next.js frontends.',
    list: ['Next.js / React', 'Django REST Framework', 'PostgreSQL / Firebase', 'Deployment & Hosting'],
    badge: 'Available',
    badgeColor: 'var(--green)',
  },
  {
    num: '04', icon: '🛒',
    title: 'eBay VA Services',
    sub: '4+ Years Experience',
    desc: 'Professional eBay Virtual Assistant with 4+ years of hands-on experience. End-to-end store management, listing optimization, and revenue growth.',
    list: ['Product Listing & SEO', 'Order Management', 'Customer Service', 'Competitor Analysis'],
    badge: '4+ Years',
    badgeColor: '#ffb400',
  },
  {
    num: '05', icon: '🎨',
    title: 'Thumbnail & AI Design',
    sub: 'Visual Content Creation',
    desc: 'Eye-catching thumbnail design and AI-generated visual content for YouTube, social media, and e-commerce product listings using modern AI tools.',
    list: ['YouTube Thumbnails', 'AI Visual Generation', 'Social Media Graphics', 'Product Images'],
    badge: 'Available',
    badgeColor: 'var(--green)',
  },
  {
    num: '06', icon: '📣',
    title: 'Social Media Marketing',
    sub: 'SMM & Growth Strategy',
    desc: 'Strategic social media management and marketing for businesses. Content planning, scheduling, engagement, and analytics-driven growth strategies.',
    list: ['Content Strategy', 'Post Scheduling', 'Audience Engagement', 'Analytics & Reports'],
    badge: 'Available',
    badgeColor: 'var(--green)',
  },
]

const process = [
  { n: '01', t: 'Discovery', d: 'We discuss your requirements, goals, and expected outcomes in detail.' },
  { n: '02', t: 'Planning', d: 'Detailed project plan, milestones, and deliverables defined clearly.' },
  { n: '03', t: 'Execution', d: 'Development with regular updates and progress sharing at every stage.' },
  { n: '04', t: 'Delivery', d: 'Final testing, deployment, documentation, and post-launch support.' },
]

export default function Services() {
  return (
    <div className="page-in">
      <section className="phero bg2">
        <div className="container">
          <div className="tag afu">What I Offer</div>
          <h1 className="heading afu d1">Services &<br /><em>Solutions</em></h1>
          <p className="phero__sub afu d2 mono">// Professional services across SAP, Android, Web & E-Commerce</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container">
          <div className="srv-grid">
            {services.map((s, i) => (
              <div key={s.num} className="srv-card card"
                style={{ animationDelay: `${i * 0.08}s`, animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}>
                <div className="srv-card__top">
                  <span className="srv-icon">{s.icon}</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span className="srv-num mono">{s.num}</span>
                    <span className="srv-badge" style={{ color: s.badgeColor, borderColor: s.badgeColor + '44', background: s.badgeColor + '11' }}>{s.badge}</span>
                  </div>
                </div>
                <h3 className="srv-title">{s.title}</h3>
                <p className="srv-sub mono">{s.sub}</p>
                <p className="srv-desc">{s.desc}</p>
                <ul className="srv-list">
                  {s.list.map(l => (
                    <li key={l}><span className="green">›</span> {l}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn" style={{ fontSize: '10px', padding: '10px 20px', alignSelf: 'flex-start', marginTop: '20px' }}>Get Quote →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg2">
        <div className="container">
          <div className="tag">Workflow</div>
          <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,52px)' }}>How I Work</h2>
          <div className="proc-grid">
            {process.map((p, i) => (
              <div key={p.n} className="proc-card">
                <div className="proc-n mono">{p.n}</div>
                <div className="proc-line" />
                <h3 className="proc-t">{p.t}</h3>
                <p className="proc-d">{p.d}</p>
                {i < process.length - 1 && <div className="proc-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container srv-cta">
          <div className="tag">Let's Build</div>
          <h2 className="heading" style={{ fontSize: 'clamp(28px,4vw,52px)' }}>
            Ready to start your<br /><em>next project?</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--white2)', marginBottom: '36px', maxWidth: '480px' }}>
            Whether it's SAP development, an Android app, a web platform, or eBay store management — let's talk.
          </p>
          <Link to="/contact" className="btn">Contact Me →</Link>
        </div>
      </section>
    </div>
  )
}
