import Panel from '../../Panel.jsx'

export default function SplitSection({ section, number }) {
  return (
    <Panel glass className="cs-section cs-split">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>

      <div className="cs-split__columns">
        <div className="cs-split__col">
          <h3>{section.problem.heading}</h3>
          <p>{section.problem.body}</p>
        </div>
        <div className="cs-split__rule" aria-hidden="true" />
        <div className="cs-split__col">
          <h3>{section.solution.heading}</h3>
          <p>{section.solution.body}</p>
        </div>
      </div>
    </Panel>
  )
}
