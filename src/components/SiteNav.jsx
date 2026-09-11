import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cdStarLogo from '../assets/logo/cd-star.jpg'
import { LINKS } from '../data/links.js'

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  // Below the mobile breakpoint the link list moves into a dropdown panel
  // toggled by the hamburger button — closing it on route change (via the
  // links themselves) and on Escape keeps it from getting stuck open.
  useEffect(() => {
    if (!open) return undefined
    function handleKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <nav className="site-nav">
      <Link to="/" className="site-nav__logo" onClick={() => setOpen(false)}>
        <img src={cdStarLogo} alt="" className="site-nav__logo-badge" aria-hidden="true" />
        Tolina Yussuf
      </Link>

      <ul className={`site-nav__links${open ? ' site-nav__links--open' : ''}`} id="site-nav-links">
        <li>
          <Link to="/work" onClick={() => setOpen(false)}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            LinkedIn
          </a>
        </li>
        <li>
          <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Resume
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="site-nav__toggle"
        aria-expanded={open}
        aria-controls="site-nav-links"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <a
        href={LINKS.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="site-nav__cta"
        aria-label="Schedule a coffee chat with me on Calendly"
      >
        Let&rsquo;s chat ↗
      </a>
    </nav>
  )
}
