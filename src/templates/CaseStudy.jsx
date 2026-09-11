import { useEffect, useState } from 'react'
import Hero from '../components/caseStudy/sections/Hero.jsx'
import TracklistNav from '../components/caseStudy/TracklistNav.jsx'
import SectionRenderer from '../components/caseStudy/SectionRenderer.jsx'
import { getCaseStudyTheme } from '../data/caseStudyThemes.js'

// Mirrors the /work quick-view's sticky-stacking cards (RecordDetail.jsx) —
// same breakpoint and reduced-motion check, so both experiences drop to a
// plain list together instead of drifting out of sync.
const STACK_BREAKPOINT = 768

function computeStacked() {
  if (typeof window === 'undefined') return false
  return (
    window.innerWidth >= STACK_BREAKPOINT &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function useStacked() {
  const [stacked, setStacked] = useState(computeStacked)

  useEffect(() => {
    function handle() {
      setStacked(computeStacked())
    }
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])

  return stacked
}

export default function CaseStudy({ project }) {
  const theme = getCaseStudyTheme(project.id)
  const stacked = useStacked()

  // Crossfades the document background to this project's deep page color.
  // Lives on documentElement (not a wrapper div) so overscroll crossfades
  // too, and resets to the site default on unmount/route change.
  useEffect(() => {
    if (!theme) return undefined
    const root = document.documentElement
    root.style.setProperty('--page-bg', theme.page)
    root.style.setProperty('--page-ink', theme.onPageText)
    return () => {
      root.style.removeProperty('--page-bg')
      root.style.removeProperty('--page-ink')
    }
  }, [theme])

  const heroSection = project.sections.find((section) => section.type === 'hero')
  const rest = project.sections.filter((section) => section.type !== 'hero')

  // Track numbers are derived from position among non-hero, non-divider
  // sections — never stored in content data — so omitting a section never
  // leaves a numbering gap between the tracklist nav and the page itself.
  // The same numbers are handed to TracklistNav (via numberedSections below)
  // so a section's on-page kicker and its nav entry always agree, even
  // though the nav only *lists* a subset (navHidden sections keep their
  // real number, they just don't get a row in the sticky nav).
  //
  // Slab tints cycle the same way: the hero takes the first tint, then
  // every non-divider section after it advances to the next tint in order,
  // wrapping around the theme's 3-tint palette.
  const trackable = rest.filter((section) => section.type !== 'divider')
  let tintCursor = 1
  const numberedSections = project.sections.map((section) => {
    const index = trackable.findIndex((track) => track.id === section.id)
    const number = index >= 0 ? String(index + 1).padStart(2, '0') : null

    if (!theme || section.type === 'hero' || section.type === 'divider') {
      return { ...section, number }
    }

    const tint = theme.tints[tintCursor % theme.tints.length]
    tintCursor += 1
    return { ...section, number, tint }
  })

  const rootStyle = {
    '--vinyl-dark': project.vinylColor?.dark,
    '--vinyl-light': project.vinylColor?.light,
    ...(theme && {
      '--terracotta': theme.accent,
      '--ink': theme.ink,
      '--ink-muted': `color-mix(in srgb, ${theme.ink} 68%, transparent)`,
      '--line': `color-mix(in srgb, ${theme.ink} 16%, transparent)`,
      '--cream': `color-mix(in srgb, ${theme.ink} 14%, transparent)`,
      '--cs-on-page': theme.onPageText,
      '--cs-page': theme.page,
      '--cs-tint-0': theme.tints[0],
    }),
  }

  return (
    <article className={`case-study${theme ? ' case-study--themed' : ''}`} style={rootStyle}>
      {heroSection && <Hero project={project} section={heroSection} tint={theme?.tints[0]} />}

      <div className="case-study__body">
        <TracklistNav sections={numberedSections} />

        <div className={`case-study__sections${stacked ? ' case-study__sections--stacked' : ''}`}>
          {numberedSections
            .filter((section) => section.type !== 'hero')
            .map((section, index) => (
              <SectionRenderer
                key={section.id}
                project={project}
                section={section}
                number={section.number}
                index={index}
                stacked={stacked}
              />
            ))}
        </div>
      </div>
    </article>
  )
}
