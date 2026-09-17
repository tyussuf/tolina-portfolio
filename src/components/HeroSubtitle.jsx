import { useEffect, useState } from 'react'
import peoplePhoto from '../assets/hero/people-owls.jpg'
import techPhoto from '../assets/hero/tech-ghc.jpg'
import accessPhoto from '../assets/hero/access-capitol.jpg'

const WORDS = {
  people: {
    src: peoplePhoto,
    alt: 'Four video-call panels of Tolina and Owls for Figma teammates making the Figma owl hand sign',
    label: 'People',
    accent: 'var(--star-pink)',
  },
  tech: {
    src: techPhoto,
    alt: 'Tolina with her AnitaB.org Grace Hopper Conference group in front of the conference signage',
    label: 'Tech',
    accent: 'var(--chart-cobalt)',
  },
  access: {
    src: accessPhoto,
    alt: 'Tolina outside the U.S. Capitol building',
    label: 'Access',
    accent: 'var(--terracotta)',
  },
}

function HoverWord({ id, children }) {
  const [open, setOpen] = useState(false)
  const { src, alt, label, accent } = WORDS[id]

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
        aria-label={`${children} — show ${label} photo`}
        onClick={(event) => {
          event.stopPropagation()
          setOpen((value) => !value)
        }}
      >
        {children}
      </button>

      <span className={`hero-word__pop${open ? ' hero-word__pop--open' : ''}`}>
        <img src={src} alt={alt} className="hero-word__photo" />
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
