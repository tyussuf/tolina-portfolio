import { useEffect, useRef, useState } from 'react'
import vinyl from '../assets/stars-intro/vinyl.webp'
import rainbowSplash from '../assets/stars-intro/rainbow-splash-star.webp'
import redTwinStar from '../assets/stars-intro/red-twin-star.webp'
import yellowCrayonStar from '../assets/stars-intro/yellow-crayon-star.webp'
import redBlueCometStar from '../assets/stars-intro/red-blue-comet-star.webp'

// Module-level, so it resets on every page load (refresh replays the intro)
// but clicking back to Home within the site doesn't.
let playedThisLoad = false
// Keep in sync with .intro-spin__stage's animation and .intro-spin's transition.
const SPIN_MS = 1100
const DISSOLVE_MS = 450

export default function IntroSpin({ onDone }) {
  const [phase, setPhase] = useState(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    return reduceMotion || playedThisLoad ? 'done' : 'spinning'
  })
  const stageRef = useRef(null)

  useEffect(() => {
    if (phase === 'spinning') {
      playedThisLoad = true
    }
  }, [phase])

  // Timers back up the animationend/transitionend events below. Browsers skip
  // those events when the tab isn't being painted (switching tabs mid-intro),
  // which used to leave the overlay stuck and the hero hidden for good.
  useEffect(() => {
    if (phase === 'spinning') {
      const id = setTimeout(() => setPhase('dissolving'), SPIN_MS + 150)
      return () => clearTimeout(id)
    }
    if (phase === 'dissolving') {
      const id = setTimeout(() => setPhase('done'), DISSOLVE_MS + 150)
      return () => clearTimeout(id)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'done') onDone?.()
    // onDone is a fresh closure each render; the phase change is the only trigger.
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      className={`intro-spin${phase === 'dissolving' ? ' intro-spin--dissolving' : ''}`}
      aria-hidden="true"
      onTransitionEnd={(event) => {
        if (event.propertyName === 'opacity' && phase === 'dissolving') {
          setPhase('done')
        }
      }}
    >
      <div
        className="intro-spin__stage"
        ref={stageRef}
        onAnimationEnd={() => setPhase((p) => (p === 'spinning' ? 'dissolving' : p))}
      >
        <img className="intro-spin__vinyl" src={vinyl} alt="" draggable={false} />
        <img
          className="intro-spin__star intro-spin__star--splash"
          src={rainbowSplash}
          alt=""
          draggable={false}
        />
        <img
          className="intro-spin__star intro-spin__star--twin"
          src={redTwinStar}
          alt=""
          draggable={false}
        />
        <img
          className="intro-spin__star intro-spin__star--yellow"
          src={yellowCrayonStar}
          alt=""
          draggable={false}
        />
        <img
          className="intro-spin__star intro-spin__star--comet"
          src={redBlueCometStar}
          alt=""
          draggable={false}
        />
      </div>
    </div>
  )
}
