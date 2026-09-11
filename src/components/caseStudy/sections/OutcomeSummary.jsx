import Panel from '../../Panel.jsx'

export default function OutcomeSummary({ section, number }) {
  return (
    <Panel glass className="cs-section cs-outcome">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>
      <dl className="cs-outcome__list">
        {section.items.map((item) => (
          <div key={item.label} className="cs-outcome__item">
            <dt>{item.label}</dt>
            <dd>{item.body}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  )
}
