import { useEffect, useRef, useState } from 'react'
import vinyl from '../assets/stars-intro/vinyl.png'
import rainbowSplash from '../assets/stars-intro/rainbow-splash-star.png'
import redTwinStar from '../assets/stars-intro/red-twin-star.png'
import yellowCrayonStar from '../assets/stars-intro/yellow-crayon-star.png'
import redBlueCometStar from '../assets/stars-intro/red-blue-comet-star.png'

const SESSION_KEY = 'introSpinPlayed'

export default function IntroSpin() {
  const [phase, setPhase] = useState(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY)
    return reduceMotion || alreadyPlayed ? 'done' : 'spinning'
  })
  const stageRef = useRef(null)

  useEffect(() => {
    if (phase === 'spinning') {
      sessionStorage.setItem(SESSION_KEY, '1')
    }
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
        onAnimationEnd={() => setPhase('dissolving')}
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
