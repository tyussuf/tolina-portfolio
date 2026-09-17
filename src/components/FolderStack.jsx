import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AboutIntro from './AboutIntro.jsx'
import AboutDesigner from './AboutDesigner.jsx'
import AboutOffTheClock from './AboutOffTheClock.jsx'
import AboutPlaying from './AboutPlaying.jsx'
import FolderClips from './FolderClips.jsx'

// Below this the fanned/staggered tab stack (each of the 3 back tabs
// peeking out above the one in front) gets too cramped to read as the
// "physical folders" metaphor it's going for — four tabs' worth of peeking
// edges plus the front card ate a lot of vertical space before any real
// content showed. A flat, always-fully-visible tab row reads better than
// forcing the desktop metaphor into a phone-sized space.
const MOBILE_QUERY = '(max-width: 640px)'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  )
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const handle = (event) => setIsMobile(event.matches)
    mql.addEventListener('change', handle)
    return () => mql.removeEventListener('change', handle)
  }, [])
  return isMobile
}

// Front-to-back order on load. Tab horizontal slot is fixed per folder
// (index = slot), independent of which folder is currently active/front.
// Colors are existing site tokens only, ordered for descending value so
// adjacent layers stay visually separated; each is paired with whichever
// existing text token (--ink or --paper) clears 4.5:1 against it.
const TABS = [
  { id: 'intro', label: 'Intro', bg: 'var(--muted-yellow)', fg: 'var(--ink)', Content: AboutIntro },
  { id: 'designer', label: 'About the designer', bg: 'var(--star-gold)', fg: 'var(--ink)', Content: AboutDesigner },
  { id: 'off-the-clock', label: 'Off the clock', bg: 'var(--star-plum)', fg: '#fff', Content: AboutOffTheClock },
  { id: 'currently-playing', label: 'Currently playing', bg: 'var(--chart-cobalt)', fg: '#fff', Content: AboutPlaying },
]

// Tab shape: small 6px top corners so it reads as cut paper, not a rounded
// button, flowing into a wide 18px shoulder at the base — plain border-radius
// (not a fixed-canvas clip-path) so it scales cleanly at the narrower width
// .folder__tab gets under 640px (see the media query in App.css), instead of
// stretching/clipping a shape authored for one fixed pixel box.
const TAB_RADIUS = '6px 6px 18px 18px'
// Must match the default --tab-h in .folder__tab (App.css) — this only
// drives the vertical fan between stacked tabs, not the tab's own size.
const TAB_HEIGHT = 48
const LAYER_OFFSET = TAB_HEIGHT + 8 // must clear the tab plus a visible sliver of body edge (8pt grid: was +6)
const BACK_TAB_SPACE = LAYER_OFFSET * 3 // room for the 3 back tabs' offset above the front folder

export default function FolderStack() {
  const [activeId, setActiveId] = useState('intro')
  const [bodyHeight, setBodyHeight] = useState(0)
  const activeBodyRef = useRef(null)
  const stackRef = useRef(null)
  const mountedRef = useRef(false)
  const isMobile = useIsMobile()
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Switching tabs swaps in content of a completely different length —
  // without this, staying scrolled deep into a tall tab (e.g. "About the
  // designer") lands you in blank space below a shorter one (e.g. "Intro"),
  // since the page's total height just shrank out from under your scroll
  // position.
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      return
    }
    stackRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [activeId, reduceMotion])

  const others = TABS.filter((tab) => tab.id !== activeId)
  const active = TABS.find((tab) => tab.id === activeId)
  const stackOrder = [active, ...others]
  const positionOf = (id) => stackOrder.findIndex((tab) => tab.id === id)

  // .folder is position:absolute (so every layer animates via transform
  // only), which means the container never naturally grows to fit the
  // active folder's real content. Measure it and size the container
  // explicitly, so whatever sits below (the footer) lands in the right
  // place instead of overlapping the visible folder.
  useLayoutEffect(() => {
    const el = activeBodyRef.current
    if (!el) return undefined
    const observer = new ResizeObserver((entries) => setBodyHeight(entries[0].contentRect.height))
    observer.observe(el)
    return () => observer.disconnect()
  }, [activeId])

  // A phone-width screen doesn't have room for 3 tabs' worth of peeking
  // edges above the active card — swap the staggered/fanned stack for a
  // flat, always-fully-visible row of tab buttons above a single body.
  if (isMobile) {
    return (
      <div ref={stackRef} className="folder-stack folder-stack--mobile">
        <div className="folder-tabs-mobile" role="tablist" aria-label="About sections">
          {TABS.map((tab) => {
            const isActive = tab.id === activeId
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`folder-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`folder-panel-${tab.id}`}
                className="folder-tab-mobile"
                style={{ background: tab.bg, color: tab.fg }}
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="folder folder--mobile" style={{ background: active.bg, color: active.fg }}>
          <div
            className="folder__body"
            id={`folder-panel-${activeId}`}
            role="tabpanel"
            aria-labelledby={`folder-tab-${activeId}`}
          >
            <active.Content onSelectTab={setActiveId} />
          </div>
        </div>

        <FolderClips />
      </div>
    )
  }

  return (
    <div
      ref={stackRef}
      className="folder-stack"
      role="tablist"
      aria-label="About sections"
      style={{ height: BACK_TAB_SPACE + bodyHeight }}
    >
      {TABS.map((tab, slotIndex) => {
        const position = positionOf(tab.id)
        const isActive = tab.id === activeId
        return (
          <motion.div
            key={tab.id}
            className="folder"
            style={{ background: tab.bg, color: tab.fg, top: BACK_TAB_SPACE }}
            animate={{ y: -(position * LAYER_OFFSET), zIndex: TABS.length - position }}
            transition={{ y: { duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }, zIndex: { duration: 0 } }}
          >
            <button
              type="button"
              role="tab"
              id={`folder-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`folder-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className="folder__tab"
              style={{
                left: `calc(${slotIndex * 25}% + 12.5% - var(--tab-w) / 2)`,
                borderRadius: TAB_RADIUS,
                background: tab.bg,
                color: tab.fg,
              }}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>

            <div
              className="folder__body"
              id={`folder-panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`folder-tab-${tab.id}`}
              ref={isActive ? activeBodyRef : undefined}
            >
              {isActive && <tab.Content onSelectTab={setActiveId} />}
            </div>
          </motion.div>
        )
      })}

      <FolderClips />
    </div>
  )
}
