import Panel from '../../Panel.jsx'

export default function TextSection({ section, number }) {
  return (
    <Panel glass className="cs-section cs-text-section">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>
      <p className="cs-text-section__body">{section.body}</p>
    </Panel>
  )
}
