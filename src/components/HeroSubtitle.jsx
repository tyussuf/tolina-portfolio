import { useEffect, useState } from 'react'

function PeopleIcon() {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <circle cx="24" cy="20" r="9" fill="var(--star-pink)" />
      <path d="M8 50c0-9.4 7.2-16 16-16s16 6.6 16 16" fill="var(--star-pink)" />
      <circle cx="44" cy="25" r="7" fill="var(--honey-quartz)" />
      <path d="M30 50c1-7.5 6.6-13 14-13s13 5.5 14 13" fill="var(--honey-quartz)" />
    </svg>
  )
}

function TechIcon() {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <rect x="7" y="13" width="50" height="32" rx="4" fill="var(--chart-cobalt)" />
      <rect x="12" y="18" width="40" height="22" rx="2" fill="var(--overlay-ink)" />
      <rect x="21" y="49" width="22" height="4" rx="2" fill="var(--chart-cobalt)" />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fontFamily="monospace"
        fill="var(--chart-cobalt)"
      >
        {'</>'}
      </text>
    </svg>
  )
}

function AccessIcon() {
  return (
    <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
      <circle cx="30" cy="13" r="6" fill="var(--terracotta)" />
      <circle cx="32" cy="41" r="17" fill="none" stroke="var(--terracotta)" strokeWidth="5" />
      <circle cx="32" cy="41" r="3.5" fill="var(--terracotta)" />
      <path
        d="M30 22v13h11M30 29h-8"
        fill="none"
        stroke="var(--terracotta)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const WORDS = {
  people: { Icon: PeopleIcon, label: 'People', accent: 'var(--star-pink)' },
  tech: { Icon: TechIcon, label: 'Tech', accent: 'var(--chart-cobalt)' },
  access: { Icon: AccessIcon, label: 'Access', accent: 'var(--terracotta)' },
}

function HoverWord({ id, children }) {
  const [open, setOpen] = useState(false)
  const { Icon, label, accent } = WORDS[id]

  // Click-opened state (touch devices, where hover never fires) needs a way
  // to dismiss without tapping the word again — closing on any outside tap
  // or Escape matches how the rest of the site's popovers/menus behave.
  useEffect(() => {
    if (!open) return undefined
    function handleDocClick(event) {
      if (!event.target.closest?.(`[data-hero-word="${id}"]`)) setOpen(false)
    }
    function handleKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', handleDocClick)
    window.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('click', handleDocClick)
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, id])

  return (
    <span
      className="hero-word"
      data-hero-word={id}
      style={{ '--hero-word-accent': accent }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="hero-word__trigger"
        aria-expanded={open}
        aria-label={`${children} — show ${label} illustration`}
        onClick={(event) => {
          event.stopPropagation()
          setOpen((value) => !value)
        }}
      >
        {children}
      </button>

      <span className={`hero-word__pop${open ? ' hero-word__pop--open' : ''}`} aria-hidden="true">
        <Icon />
      </span>
    </span>
  )
}

export default function HeroSubtitle() {
  return (
    <p className="hero__subtitle">
      A UX/UI Designer who thinks in systems: how <HoverWord id="people">people</HoverWord>,{' '}
      <HoverWord id="tech">tech</HoverWord>, and <HoverWord id="access">access</HoverWord> intersect.
    </p>
  )
}
