import Panel from '../../Panel.jsx'

export default function Overview({ project, section, number }) {
  return (
    <Panel glass className="cs-section cs-overview">
      <div className="cs-overview__summary">
        <p className="cs-kicker">
          {number} &middot; {section.label}
        </p>
        <p className="cs-overview__text">{section.summary}</p>
      </div>

      <dl className="cs-meta">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{project.tools?.join(', ')}</dd>
        </div>
        <div>
          <dt>Timeframe</dt>
          <dd>{project.timeframe}</dd>
        </div>
      </dl>
    </Panel>
  )
}
