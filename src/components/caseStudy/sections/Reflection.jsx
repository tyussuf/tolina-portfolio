import Panel from '../../Panel.jsx'

// Framed as liner notes — the handwritten-feeling closing note printed on
// the inside of an album sleeve.
export default function Reflection({ section, number }) {
  return (
    <Panel glass className="cs-section cs-reflection">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>
      <p className="cs-reflection__label">Liner Notes</p>
      <p className="cs-reflection__body">{section.body}</p>
    </Panel>
  )
}
