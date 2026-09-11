import { Link } from 'react-router-dom'
import { LINKS } from '../../../data/links.js'

export default function NextProjectCTA({ section }) {
  return (
    <div className="cs-next">
      <Link to={`/work/${section.nextProject.id}`} className="cs-next__project">
        <span className="cs-next__eyebrow">Next case study</span>
        <span className="cs-next__title">{section.nextProject.title} &rarr;</span>
      </Link>
      <a href={LINKS.email} className="cs-next__contact">
        Get in touch
      </a>
    </div>
  )
}
