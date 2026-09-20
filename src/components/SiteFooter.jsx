import { LINKS } from '../data/links.js'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <a className="site-footer__contact" href={LINKS.email}>
          Atlanta, GA · tolina.yussuf@gmail.com
        </a>
        <p className="site-footer__credit">Designed and built by Tolina Yussuf</p>
      </div>
    </footer>
  )
}
