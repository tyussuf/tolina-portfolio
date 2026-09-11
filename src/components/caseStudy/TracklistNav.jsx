import { useEffect, useState } from 'react'

// Best-effort "representative image" for a section, checked in the shape
// each section type actually uses. Sections with no image of their own
// (text, constraints, split, reflection, ...) render the pill without a
// thumbnail rather than inventing one.
function getThumb(section) {
  return (
    section.image?.src ??
    section.images?.[0]?.src ??
    section.affinityImage?.src ??
    section.competitive?.image?.src ??
    section.cards?.[0]?.image?.src ??
    null
  )
}

// Excludes 'hero' (it's the album cover, not a track), 'divider' (Side A/B
// is a moment, not a track), and any section flagged navHidden (shown on
// the page, just not listed here) from the nav. Numbers come pre-computed
// on each section (from CaseStudy.jsx) so a section's nav row always shows
// the same number as its on-page kicker, even though this list is a subset.
export default function TracklistNav({ sections }) {
  const trackable = sections.filter(
    (section) => section.type !== 'hero' && section.type !== 'divider' && !section.navHidden,
  )

  const [activeId, setActiveId] = useState(trackable[0]?.id ?? null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const targets = trackable.map((section) => document.getElementById(section.id)).filter(Boolean)
    if (targets.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
    // Re-observe only when the section list itself changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections])

  function goTo(id) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  const activeSection = trackable.find((section) => section.id === activeId)

  return (
    <nav className="tracklist-nav" aria-label="Case study sections" data-open={mobileOpen || undefined}>
      <div className="cs-rail-vinyl" aria-hidden="true" />

      <button
        type="button"
        className="tracklist-nav__toggle"
        onClick={() => setMobileOpen((open) => !open)}
        aria-expanded={mobileOpen}
      >
        <span className="tracklist-nav__toggle-label">{activeSection ? activeSection.label : 'Sections'}</span>
        <span aria-hidden="true" className="tracklist-nav__chevron">
          {mobileOpen ? '▲' : '▼'}
        </span>
      </button>

      <ol className="tracklist-nav__list">
        {trackable.map((section) => {
          const isActive = section.id === activeId
          const thumb = getThumb(section)
          return (
            <li key={section.id}>
              <button
                type="button"
                className="tracklist-nav__item"
                data-active={isActive || undefined}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => goTo(section.id)}
              >
                {thumb ? (
                  <img src={thumb} alt="" aria-hidden="true" className="tracklist-nav__thumb" />
                ) : (
                  <span className="tracklist-nav__thumb tracklist-nav__thumb--placeholder" aria-hidden="true" />
                )}
                <span className="tracklist-nav__label">{section.label}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
