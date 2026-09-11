import Panel from '../../Panel.jsx'
import KeyDecisionCard from '../KeyDecisionCard.jsx'

export default function KeyDecisions({ section, number }) {
  return (
    <Panel glass className="cs-section cs-key-decisions">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>
      <div className="cs-key-decisions__grid">
        {section.cards.map((card) => (
          <KeyDecisionCard key={card.number} card={card} />
        ))}
      </div>
    </Panel>
  )
}
