import Panel from '../../Panel.jsx'
import CaseStudyImage from '../CaseStudyImage.jsx'

export default function StatesRow({ section, number }) {
  return (
    <Panel glass className="cs-section cs-states">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>
      {section.body && <p className="cs-states__body">{section.body}</p>}

      <div className="cs-image-row cs-image-row--four-across cs-image-row--small">
        {section.images.map((image) => (
          <CaseStudyImage
            key={image.src}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            variant="device-frame"
          />
        ))}
      </div>
    </Panel>
  )
}
