import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import IntroSpin from '../components/IntroSpin.jsx'
import HeroPolaroid from '../components/HeroPolaroid.jsx'
import CaseCard from '../components/CaseCard.jsx'
import Vinyl from '../components/Vinyl.jsx'
import { useInView } from '../hooks/useInView.js'
import { CASE_CARDS } from '../data/caseCards.js'

const HERO_STAGGER_MS = 60
const CARD_STAGGER_MS = 80

// Fades up on viewport entry, staggered by grid position.
function RevealCard({ project, index }) {
  const [ref, inView] = useInView()
  return (
    <li
      ref={ref}
      className={`case-item reveal${inView ? ' is-visible' : ''}`}
      style={{ '--reveal-delay': `${index * CARD_STAGGER_MS}ms` }}
    >
      <CaseCard project={project} />
    </li>
  )
}

export default function HomePage() {
  const { hash } = useLocation()
  // The hero entrance waits for the one-time intro spin (IntroSpin calls
  // onDone straight away if it's skipped), then flips on after the hidden
  // starting state has been laid out, so the transition actually runs.
  const heroRef = useRef(null)
  const [introDone, setIntroDone] = useState(false)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  useEffect(() => {
    if (!introDone) return
    // Reading layout flushes the hidden starting styles first, so flipping the
    // class below always animates (no dependence on frame timing).
    heroRef.current?.getBoundingClientRect()
    setHeroReady(true)
  }, [introDone])

  // className is merged, not spread, so it can sit next to an element's own class.
  const heroItem = (order, base = '') => ({
    className: `${base ? `${base} ` : ''}reveal${heroReady ? ' is-visible' : ''}`,
    style: { '--reveal-delay': `${order * HERO_STAGGER_MS}ms` },
  })

  return (
    <main className="home">
      <IntroSpin onDone={() => setIntroDone(true)} />

      <div className="page-card">
        <section className="hero" id="about" aria-labelledby="hero-title" ref={heroRef}>
          <div className="hero__text">
            <p {...heroItem(0, 'eyebrow')}>
              Studying IAD &amp; IS @ KSU
            </p>
            <h1 id="hero-title" {...heroItem(1, 'hero__title')}>
              Hi, I&rsquo;m Tolina Yussuf!
            </h1>
            <p {...heroItem(2, 'hero__lede')}>
              UX/UI designer. I do the research, then I build the thing, and I&rsquo;m usually the one asking{' '}
              <span className="hero__mark">who this leaves out</span>.
            </p>
            <p {...heroItem(3, 'hero__status')}>
              Graduating May 2027, and looking for{' '}
              <span className="hero__roles">Spring 2027 UX/UI Internships and New Grad Product Design roles</span>.
            </p>
          </div>

          {/* Wrapper carries the fade-up so the polaroid keeps its own tilt transform.
              The record sits behind the polaroid with its right edge sticking out. */}
          <div className="hero__photo">
            <div {...heroItem(4, 'hero__stage')}>
              <div className="hero__record" aria-hidden="true">
                <Vinyl size={292} colorVariant="violet" style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1' }} />
              </div>
              <HeroPolaroid />
            </div>
          </div>
        </section>

        <section className="cases" id="work" aria-labelledby="cases-title">
          <p className="eyebrow">These are my case studies</p>
          <h2 className="cases__title" id="cases-title">
            Drop the needle.
          </h2>
          <p className="cases__lede">A few records deep in the crate.</p>

          <ul className="cases__grid">
            {CASE_CARDS.map((project, index) => (
              <RevealCard key={project.id} project={project} index={index} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
