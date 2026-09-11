import Panel from '../../Panel.jsx'
import Mockup from '../Mockup.jsx'

export default function Landscape({ section, number }) {
  return (
    <Panel glass className="cs-section cs-landscape">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>

      <p className="cs-landscape__body">{section.body}</p>

      {section.mockups && section.mockups.length > 0 && (
        <Mockup variant="bare" arrangement="single" items={section.mockups} />
      )}
    </Panel>
  )
}
