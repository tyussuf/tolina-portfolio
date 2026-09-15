import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import IntroSpin from '../components/IntroSpin.jsx'
import { records } from '../data/records.js'

const SKILLS = [
  'UX Research',
  'Agile',
  'Product Strategy',
  'User Interface Design',
  'Front-End Development',
  'Figma',
  'Miro',
  'Adobe Creative Cloud',
  'A/B Testing',
]

export default function HomePage() {
  const [featured, secondary, tertiary] = records
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <IntroSpin />

      <header className="hero" id="about">
        <div className="hero__card">
          <p className="hero__eyebrow">Studying IAD &amp; IS @ KSU</p>
          <h1 className="hero__title">Hi, I&rsquo;m Tolina Yussuf!</h1>
          <p className="hero__subtitle">
            A UX/UI Designer who thinks in systems: how people, tech, and access intersect.
          </p>

          <ul className="skills">
            {SKILLS.map((skill, index) => (
              <li
                key={skill}
                className="skills__pill"
                style={{ '--tilt': `${index % 2 === 0 ? -1 : 1}deg` }}
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="teaser__intro">
            <p className="teaser__eyebrow">These are my case studies</p>
            <h2 className="teaser__heading">Drop the needle.</h2>
          </div>
        </div>
      </header>

      <section className="teaser">
        <div className="teaser__stack">
          <Link
            to={`/work/${tertiary.id}`}
            className="teaser__cover teaser__cover--side"
            aria-label={`View ${tertiary.title} case study`}
          >
            <img src={tertiary.cover} alt={`${tertiary.title} cover art`} draggable={false} />
          </Link>
          <Link
            to={`/work/${featured.id}`}
            className="teaser__cover teaser__cover--front"
            aria-label={`View ${featured.title} case study`}
          >
            <img src={featured.cover} alt={`${featured.title} cover art`} draggable={false} />
          </Link>
          <Link
            to={`/work/${secondary.id}`}
            className="teaser__cover teaser__cover--side"
            aria-label={`View ${secondary.title} case study`}
          >
            <img src={secondary.cover} alt={`${secondary.title} cover art`} draggable={false} />
          </Link>
        </div>
        <p className="teaser__lede">A few records deep in the crate.</p>
        <Link to="/work" className="teaser__cta">
          Browse the Collection <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  )
}
