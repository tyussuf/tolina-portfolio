import Panel from '../../Panel.jsx'
import CaseStudyImage from '../CaseStudyImage.jsx'

export default function DesignShowcase({ section, number }) {
  return (
    <Panel glass className="cs-section cs-design-showcase">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>
      {section.body && <p className="cs-design-showcase__body">{section.body}</p>}

      <div className="cs-image-row cs-image-row--three-across">
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

      <div className="cs-figma-embed">
        {section.figmaUrl ? (
          <iframe
            src={section.figmaUrl}
            title="Figma prototype"
            className="cs-figma-embed__frame"
            loading="lazy"
          />
        ) : (
          <div className="cs-figma-embed__placeholder">Figma prototype embed</div>
        )}
      </div>
    </Panel>
  )
}
