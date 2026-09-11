import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import bufferingGif from '../assets/gifs/buffering.gif'
import navyVelvet from '../assets/backgrounds/navy-velvet.jpg'

// How much extra scroll (beyond the shrink-to-corner range) the background
// dim (3c) takes to reach full strength. Sections vary wildly in height
// (a one-line "Overview" vs. a six-image gallery), so this is a deliberate
// approximation — roughly "one panel's worth of additional scrolling" —
// rather than measured per-card, which would need every card's real height.
const DIM_SCROLL_RANGE_VH_FRACTION = 1.1

function useViewportSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  useEffect(() => {
    function handle() {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])
  return size
}

// One section of the case study. Used to render as a sticky-stacking card
// (each pinning near the panel's top edge while the next scrolled up to
// overlap it) — removed per request in favor of a plain vertical list.
function RecordSection({ section, onOpenImage }) {
  return (
    <div className="detail-panel__section">
      <h3>{section.heading}</h3>
      <p>{section.body}</p>
      {section.images && (
        <div className="detail-panel__gallery">
          {section.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="detail-panel__gallery-img"
              loading="lazy"
              onClick={() => onOpenImage(image)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function RecordDetail({
  record,
  originRect,
  stage,
  onFrontSettled,
  onCloseSettled,
  onClose,
}) {
  const { width: vw, height: vh } = useViewportSize()
  const panelRef = useRef(null)

  const frontRect = useMemo(() => {
    const size = Math.min(vw * 0.6, vh * 0.56, 440)
    return {
      width: size,
      height: size,
      left: vw / 2 - size / 2,
      top: vh / 2 - size / 2,
      rotate: 0,
    }
  }, [vw, vh])

  // Above the panel's own mobile breakpoint (matches the
  // `@media (max-width: 720px)` switch to a bottom sheet in App.css), the
  // reading panel is anchored to the right of the viewport instead of
  // centered across the whole width — centering it independently of the
  // cover+vinyl reveal is what let the two overlap (the panel, opaque and
  // on top, simply hid the reveal on ordinary desktop widths, since both
  // were anchored to viewport center). The reveal's own size is capped to
  // whatever's left over once the panel has claimed its space, rather than
  // reusing frontRect's independently-computed size.
  const isDesktopPanel = vw > 720
  const panelWidth = isDesktopPanel ? Math.min(820, vw * 0.66) : null
  const panelRight = isDesktopPanel ? Math.max(24, vw * 0.04) : null
  const panelLeft = isDesktopPanel ? vw - panelRight - panelWidth : null

  const openRect = useMemo(() => {
    if (!isDesktopPanel) {
      return {
        width: frontRect.width,
        height: frontRect.height,
        left: Math.max(frontRect.left - frontRect.width * 0.32, vw * 0.04),
        top: frontRect.top + frontRect.height * 0.03,
        rotate: -9,
      }
    }
    const margin = 48
    // Capped well below frontRect.width now — the record is a supporting
    // element next to the panel, not competing with it for width.
    const recordMaxW = vw >= 1200 ? 340 : 300
    const size = Math.max(Math.min(recordMaxW, panelLeft - margin * 2), 200)
    return {
      width: size,
      height: size,
      left: Math.max(margin, (panelLeft - size) / 2),
      top: vh / 2 - size / 2 + size * 0.03,
      rotate: -9,
    }
  }, [frontRect, vw, vh, isDesktopPanel, panelLeft])

  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    setLightbox(null)
  }, [record])

  // Drives the background dim directly from the panel's own scroll position
  // — not a separate timed animation — so it scrubs with scroll and
  // reverses smoothly for free when scrolling back up.
  const panelScrollY = useMotionValue(0)

  // Background dim (3c): ramps in over ~60% of one viewport height of
  // scroll, then continues over roughly one more panel-height, then holds.
  // Hue is untouched — it's a flat --ink overlay, only its opacity (i.e.
  // the resulting value/saturation once blended with what's beneath it)
  // changes — capped at 0.32 so the background never reads as black.
  const dimStartRange = vh * 0.6
  const dimRange = vh * DIM_SCROLL_RANGE_VH_FRACTION
  const dimOpacity = useTransform(
    panelScrollY,
    [dimStartRange, dimStartRange + dimRange],
    [0, 0.32],
    { clamp: true },
  )

  useEffect(() => {
    panelScrollY.set(0)
  }, [record, panelScrollY])

  const hasOrigin = Boolean(originRect)
  const baseRect = originRect ?? frontRect

  const target =
    stage === 'open' ? openRect : stage === 'closing' ? { ...baseRect, rotate: 0 } : frontRect

  useEffect(() => {
    function handleKey(event) {
      if (event.key !== 'Escape') return
      if (lightbox) setLightbox(null)
      else onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, lightbox])

  if (!record) return null

  return (
    <div className="detail-overlay">
      <motion.div
        className="detail-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === 'closing' ? 0 : 1 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />

      <motion.div className="detail-dim" aria-hidden="true" style={{ opacity: dimOpacity }} />

      <AnimatePresence>
        {stage === 'open' && (
          <motion.div
            className="detail-disc"
            style={{
              width: openRect.width * 0.92,
              height: openRect.height * 0.92,
              left: openRect.left + openRect.width * 0.5,
              top: openRect.top + openRect.height * 0.04,
              '--vinyl-dark': record.vinylColor?.dark ?? '#050505',
              '--vinyl-light': record.vinylColor?.light ?? '#1c1c1c',
            }}
            initial={{ opacity: 0, x: -60, rotate: -25 }}
            animate={{ opacity: 1, x: 0, rotate: 8 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ type: 'spring', duration: 1.8, bounce: 0.22, delay: 0.04 }}
          >
            <span className="detail-disc__label">
              {record.title}
              <em>{record.year}</em>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="detail-cover"
        style={{ transformPerspective: 1400, transformOrigin: 'left center' }}
        initial={{
          left: baseRect.left,
          top: baseRect.top,
          width: baseRect.width,
          height: baseRect.height,
          rotate: 0,
          rotateY: 0,
          opacity: hasOrigin ? 1 : 0,
          scale: hasOrigin ? 1 : 0.88,
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        }}
        animate={{
          left: target.left,
          top: target.top,
          width: target.width,
          height: target.height,
          rotate: target.rotate,
          rotateY: stage === 'open' ? -32 : 0,
          opacity: stage === 'closing' && !hasOrigin ? 0 : 1,
          scale: 1,
          boxShadow:
            stage === 'open'
              ? '-28px 22px 55px rgba(0,0,0,0.55)'
              : '0 30px 60px rgba(0,0,0,0.5)',
        }}
        transition={
          // Slower specifically for the front -> open move (the one that
          // plays alongside the vinyl sliding out), so there's time to
          // actually see it happen. The click-to-center settle and the
          // closing animation keep their original, snappier pace.
          stage === 'open'
            ? { type: 'spring', duration: 1.8, bounce: 0.18 }
            : { type: 'spring', stiffness: 140, damping: 20, mass: 0.9 }
        }
        onAnimationComplete={() => {
          if (stage === 'front') onFrontSettled()
          if (stage === 'closing') onCloseSettled()
        }}
      >
        <img
          src={record.cover}
          alt={`${record.title} cover art`}
          className="detail-cover__img"
          draggable={false}
        />
      </motion.div>

      <AnimatePresence>
        {stage === 'loading' && (
          <motion.div
            className="detail-buffering"
            style={{
              left: frontRect.left + frontRect.width / 2,
              top: frontRect.top + frontRect.height + 18,
            }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <img src={bufferingGif} alt="" className="detail-buffering__gif" />
            <span>dropping the needle&hellip;</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === 'open' && (
          <motion.div
            className="detail-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            // Waits out the disc/cover's own 1.8s open transition (see the
            // detail-disc and detail-cover transitions above) instead of
            // starting almost immediately, so the text panel only pops in
            // once the vinyl reveal has actually finished playing.
            transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 1.85 }}
            style={{
              '--panel-bg': `url(${record.panelBackground || navyVelvet})`,
              ...(record.panelCardBg && { '--panel-card-bg': record.panelCardBg }),
              ...(record.panelCardBlur && { '--panel-card-blur': record.panelCardBlur }),
              ...(record.panelOverlay && { '--panel-overlay': record.panelOverlay }),
              ...(isDesktopPanel && {
                left: panelLeft,
                right: 'auto',
                width: panelWidth,
                margin: 0,
              }),
            }}
            ref={panelRef}
            onScroll={(event) => panelScrollY.set(event.currentTarget.scrollTop)}
          >
            <button
              type="button"
              className="detail-panel__close"
              onClick={onClose}
              aria-label="Close case study"
            >
              ✕
            </button>
            <p className="detail-panel__eyebrow">
              {record.year} · {record.role}
            </p>
            <h2 className="detail-panel__title">{record.title}</h2>
            <p className="detail-panel__subtitle">{record.subtitle}</p>
            <ul className="detail-panel__tags">
              {record.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="detail-panel__summary">{record.summary}</p>
            {record.quote && (
              <blockquote className="detail-panel__quote">
                <p>&ldquo;{record.quote.text}&rdquo;</p>
                <cite>&mdash; {record.quote.attribution}</cite>
              </blockquote>
            )}
            <Link to={`/case-study/${record.id}`} className="detail-panel__cta">
              Read the full case study →
            </Link>
            <div className="detail-panel__sections" style={{ maxWidth: '100%' }}>
              {record.sections.map((section) => (
                <RecordSection key={section.heading} section={section} onOpenImage={setLightbox} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox__img"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
            />
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
