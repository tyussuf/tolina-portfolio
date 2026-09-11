import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Overview from './sections/Overview.jsx'
import SplitSection from './sections/SplitSection.jsx'
import Research from './sections/Research.jsx'
import Landscape from './sections/Landscape.jsx'
import SideDivider from './sections/SideDivider.jsx'
import Gallery from './sections/Gallery.jsx'
import TextSection from './sections/TextSection.jsx'
import Reflection from './sections/Reflection.jsx'
import OutcomeSummary from './sections/OutcomeSummary.jsx'
import ConstraintsList from './sections/ConstraintsList.jsx'
import KeyDecisions from './sections/KeyDecisions.jsx'
import DesignShowcase from './sections/DesignShowcase.jsx'
import StatesRow from './sections/StatesRow.jsx'
import NextProjectCTA from './sections/NextProjectCTA.jsx'

const SECTION_COMPONENTS = {
  overview: Overview,
  split: SplitSection,
  research: Research,
  landscape: Landscape,
  divider: SideDivider,
  gallery: Gallery,
  text: TextSection,
  reflection: Reflection,
  'outcome-summary': OutcomeSummary,
  constraints: ConstraintsList,
  'key-decisions': KeyDecisions,
  'design-showcase': DesignShowcase,
  states: StatesRow,
  'next-project': NextProjectCTA,
}

// Mirrors StackSection in RecordDetail.jsx — the same pin-near-top,
// overlap-as-you-scroll behavior, reused here so the full case-study page
// feels like the same object as the /work crate quick-view. Tracks page
// scroll directly (no `container`) since CaseStudy renders in the normal
// document flow, unlike RecordDetail's own scrollable panel.
function StackedSection({ id, index, tint, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <div ref={ref} id={id} className="cs-stack-spacer">
      <motion.div
        className="cs-stack-card"
        style={{
          top: 24 + index * 20,
          zIndex: index + 1,
          scale,
          opacity,
          ...(tint ? { '--slab-tint': tint } : undefined),
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function SectionRenderer({ project, section, number, index = 0, stacked = false }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (stacked || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [stacked])

  const Component = SECTION_COMPONENTS[section.type]
  if (!Component) return null

  const isDivider = section.type === 'divider'
  const body = <Component project={project} section={section} number={number} />

  if (stacked && !isDivider) {
    return (
      <StackedSection id={section.id} index={index} tint={section.tint}>
        {body}
      </StackedSection>
    )
  }

  return (
    <div
      ref={ref}
      id={section.id}
      className={`cs-reveal${isDivider ? ' cs-reveal--divider' : ''}`}
      data-visible={visible || undefined}
      style={section.tint ? { '--slab-tint': section.tint } : undefined}
    >
      {body}
    </div>
  )
}
