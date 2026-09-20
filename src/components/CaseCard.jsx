import { useId } from 'react'
import { Link } from 'react-router-dom'

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// One vinyl case study: the whole card is a single anchor. The record sits
// behind the sleeve and slides out on hover/focus (see .case-card in App.css).
// Below 900px the record layer is dropped and the square cover fills the card.
export default function CaseCard({ project }) {
  const { id, title, category, year, description, outcome, accent, cover } = project
  const uid = useId()
  const titleId = `${uid}-title`
  const detailIds = `${uid}-chip ${uid}-desc ${uid}-outcome`

  // The link is named by the project title alone; the chip, description and
  // outcome are exposed as its description rather than read as one long name.
  return (
    <Link
      to={`/case-study/${id}`}
      className="case-card"
      style={{ '--accent': accent }}
      aria-labelledby={titleId}
      aria-describedby={detailIds}
    >
      <div className="case-card__cover">
        <div className="case-card__record" aria-hidden="true">
          <span className="case-card__label" />
        </div>
        <div className="case-card__sleeve">
          <img src={cover} alt={`${title} case study`} width="282" height="282" loading="lazy" decoding="async" draggable={false} />
        </div>
      </div>

      <div className="case-card__body">
        <span className="case-card__chip" id={`${uid}-chip`}>
          {category} · {year}
        </span>
        <h3 className="case-card__title" id={titleId}>
          {title}
        </h3>
        <p className="case-card__desc" id={`${uid}-desc`}>
          {description}
        </p>
        <p className="case-card__outcome" id={`${uid}-outcome`}>
          {outcome}
        </p>
        <span className="case-card__cta">
          Play the case <ArrowRight />
        </span>
      </div>
    </Link>
  )
}
