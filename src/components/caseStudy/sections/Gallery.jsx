import Panel from '../../Panel.jsx'
import CaseStudyImage from '../CaseStudyImage.jsx'

export default function Gallery({ section, number }) {
  return (
    <Panel glass className="cs-section cs-gallery">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>

      {section.body && <p className="cs-gallery__body">{section.body}</p>}

      {section.image && (
        <CaseStudyImage
          src={section.image.src}
          alt={section.image.alt}
          caption={section.image.caption}
          variant="full-width"
        />
      )}

      {section.images && section.images.length > 0 && (
        <div className="cs-image-row cs-image-row--three-across">
          {section.images.map((image) => (
            <CaseStudyImage key={image.src} src={image.src} alt={image.alt} caption={image.caption} variant="half" />
          ))}
        </div>
      )}
    </Panel>
  )
}
