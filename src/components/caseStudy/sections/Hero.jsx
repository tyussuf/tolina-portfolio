import star from '../../../assets/about/icons/star.png'
import Mockup from '../Mockup.jsx'

export default function Hero({ project, section, tint }) {
  return (
    <header className="cs-hero" style={tint ? { '--slab-tint': tint } : undefined}>
      <img src={star} alt="" aria-hidden="true" className="cs-hero__star" />
      <div className="cs-hero__content">
        <p className="cs-hero__eyebrow">
          {project.year} &middot; {project.role}
        </p>
        <h1 className="cs-hero__title">{project.title}</h1>
        <p className="cs-hero__descriptor">{section.descriptor}</p>
      </div>

      {section.mockup && (
        <div className="cs-hero__mockup">
          <Mockup variant={section.mockup.variant} arrangement="single" items={[section.mockup]} />
        </div>
      )}
    </header>
  )
}
