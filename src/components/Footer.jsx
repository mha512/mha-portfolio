import { Link } from 'react-router-dom'
import MHALogo from './MHALogo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <MHALogo size={48} />
              <div>
                <div className="footer__fname">Muhammad Hashaam Ahmad</div>
                <div className="footer__ftitle">Software Engineer & SAP Developer</div>
              </div>
            </div>
            <p className="footer__bio">
              B.Sc. Software Engineering graduate passionate about SAP ABAP development,
              Android apps, and full-stack web solutions.
            </p>
            <div className="footer__socials">
              {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
                <a key={s} href="#" className="footer__social hug">{s}</a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            {[['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/projects', 'Projects'], ['/services', 'Services'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} className="footer__link hug">{l}</Link>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Expertise</h4>
            {['SAP ABAP', 'SAP Crystal Reports', 'Android Development', 'Full Stack Web', 'E-Commerce (eBay/Etsy)', 'UI/UX Design'].map(s => (
              <span key={s} className="footer__link">{s}</span>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <a href="mailto:hashaamahmad6@gmail.com" className="footer__link hug">hashaamahmad6@gmail.com</a>
            <span className="footer__link">Lahore, Pakistan</span>
            <div className="footer__avail">
              <span className="footer__dot" />
              Available for Work
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__line" />
          <div className="footer__copy">
            <span className="mono" style={{ fontSize: '11px', color: 'var(--gray)', letterSpacing: '0.1em' }}>
              © {new Date().getFullYear()} Muhammad Hashaam Ahmad — All rights reserved
            </span>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--gray)' }}>
              Built with React + Vite
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
