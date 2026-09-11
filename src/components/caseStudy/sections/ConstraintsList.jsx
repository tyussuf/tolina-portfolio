import Panel from '../../Panel.jsx'

export default function ConstraintsList({ section, number }) {
  return (
    <Panel glass className="cs-section cs-constraints">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>
      <ul className="cs-constraints__list">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Panel>
  )
}
