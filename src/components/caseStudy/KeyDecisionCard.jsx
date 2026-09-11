import CaseStudyImage from './CaseStudyImage.jsx'

// Reusable — every Key Design Decision card shares this exact shape:
// a number, a title, three labeled lines (Why / Instead of / Trade-off),
// and one device-frame image.
export default function KeyDecisionCard({ card }) {
  return (
    <article className="cs-decision-card">
      <p className="cs-decision-card__number">Card {card.number}</p>
      <h3 className="cs-decision-card__title">{card.title}</h3>
      <dl className="cs-decision-card__lines">
        <div>
          <dt>Why</dt>
          <dd>{card.why}</dd>
        </div>
        <div>
          <dt>Instead of</dt>
          <dd>{card.insteadOf}</dd>
        </div>
        <div>
          <dt>Trade-off</dt>
          <dd>{card.tradeOff}</dd>
        </div>
      </dl>
      <CaseStudyImage
        src={card.image.src}
        alt={card.image.alt}
        caption={card.image.caption}
        variant="device-frame"
      />
    </article>
  )
}
