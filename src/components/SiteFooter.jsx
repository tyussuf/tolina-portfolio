import { Link, useLocation } from 'react-router-dom'
import { records } from '../data/records.js'
import { LINKS } from '../data/links.js'

const CASE_STUDY_ORDER = ['afaan-arcade', 'odyssey', 'blueprint']

export default function SiteFooter() {
  const { pathname } = useLocation()
  const caseStudyLinks = CASE_STUDY_ORDER.map((id) => records.find((record) => record.id === id))

  function current(path) {
    return pathname === path ? 'page' : undefined
  }

  return (
    <footer className="site-footer">
      <nav className="site-footer__nav" aria-label="Footer">
        <div className="site-footer__grid">
          <div className="site-footer__col">
            <h3 className="site-footer__heading">Pages</h3>
            <ul className="site-footer__list">
              <li>
                <Link to="/" aria-current={current('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" aria-current={current('/work')}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" aria-current={current('/about')}>
                  About Me
                </Link>
              </li>
              <li>
                <a href={LINKS.resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h3 className="site-footer__heading">Case Studies</h3>
            <ul className="site-footer__list">
              {caseStudyLinks.map((record) => (
                <li key={record.id}>
                  <Link to={`/work/${record.id}`} aria-current={current(`/work/${record.id}`)}>
                    {record.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h3 className="site-footer__heading">Connect</h3>
            <ul className="site-footer__list">
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={LINKS.email}>Email</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="site-footer__bottom">
        <p className="site-footer__copyright">&copy; {new Date().getFullYear()} Tolina Yussuf</p>

        <ul className="site-footer__social">
          <li>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
