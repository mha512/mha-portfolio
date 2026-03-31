import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MHALogo from './MHALogo'
import './Navbar.css'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [loc])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__logo">
          <MHALogo size={40} />
          <div className="nav__logo-text">
            <span className="nav__name">Muhammad Hashaam</span>
            <span className="nav__title">Software Engineer</span>
          </div>
        </Link>

        <ul className="nav__links">
          {links.map((l, i) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`nav__link hug ${loc.pathname === l.path ? 'nav__link--active' : ''}`}
              >
                <span className="nav__link-num">0{i + 1}.</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn nav__cta">Hire Me</Link>

        <button className={`nav__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile */}
      <div className={`nav__mobile ${open ? 'open' : ''}`}>
        <div className="nav__mobile-inner">
          {links.map((l, i) => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav__mlink ${loc.pathname === l.path ? 'active' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <span className="nav__mlink-num">0{i+1}</span>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn" style={{ marginTop: '32px', alignSelf: 'flex-start' }}>Hire Me</Link>
        </div>
      </div>
    </nav>
  )
}
