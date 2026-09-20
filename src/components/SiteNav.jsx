import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoMark from '../assets/logo/cd-star-96.webp'
import { LINKS } from '../data/links.js'

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
      <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Visible text is "Let's chat"; the label adds where it goes.
const CHAT_LABEL = 'Let’s chat: schedule a meeting with me'

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // "Work" is the home page's own content (the case study cards) as well as
  // /work and every case study, so it stays filled across all of those;
  // only /about flips the filled pill to "About".
  const aboutActive = pathname.startsWith('/about')
  const workActive = !aboutActive

  useEffect(() => {
    if (!open) return undefined
    function handleKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Link to="/" className="site-header__brand" onClick={close}>
          <span className="site-header__logo">
            <img src={logoMark} alt="" width="32" height="32" aria-hidden="true" />
          </span>
          <span className="site-header__name">Tolina Yussuf</span>
        </Link>

        <nav className={`site-header__menu${open ? ' site-header__menu--open' : ''}`} id="site-menu" aria-label="Primary">
          <ul className="site-header__pages">
            <li>
              <Link
                to="/work"
                className={`pill${workActive ? ' pill--filled' : ' pill--outline'}`}
                aria-current={workActive ? 'page' : undefined}
                onClick={close}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`pill${aboutActive ? ' pill--filled' : ' pill--outline'}`}
                aria-current={aboutActive ? 'page' : undefined}
                onClick={close}
              >
                About
              </Link>
            </li>
          </ul>

          <span className="site-header__divider" aria-hidden="true" />

          <ul className="site-header__external">
            <li>
              <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" onClick={close}>
                Résumé <ArrowUpRight />
              </a>
            </li>
            <li>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" onClick={close}>
                LinkedIn <ArrowUpRight />
              </a>
            </li>
          </ul>

          {/* Same link as the desktop pill on the right; this copy lives
              inside the hamburger panel so it's reachable below 900px. */}
          <a
            href={LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill--cta site-header__cta-mobile"
            aria-label={CHAT_LABEL}
            onClick={close}
          >
            Let&rsquo;s chat
          </a>
        </nav>

        <a
          href={LINKS.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill--cta site-header__cta"
          aria-label={CHAT_LABEL}
        >
          Let&rsquo;s chat
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
