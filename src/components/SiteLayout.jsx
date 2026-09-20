import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BackgroundDecor from './BackgroundDecor.jsx'
import PosterWall from './PosterWall.jsx'
import SiteNav from './SiteNav.jsx'
import SiteFooter from './SiteFooter.jsx'
import MusicCursor from './MusicCursor.jsx'
import shimmerBg from '../assets/backgrounds/shimmer.jpg'

const SITE = 'Tolina Yussuf'
const CASE_STUDY_TITLES = { 'afaan-arcade': 'Afaan Arcade', odyssey: 'Odyssey', blueprint: 'BluePrint' }

// One <title> per page (the site is a single-page app, so without this every
// route shows the home page's title in the tab, in history and in search).
function titleFor(pathname) {
  if (pathname === '/work') return `Work | ${SITE}`
  if (pathname === '/about') return `About | ${SITE}`
  const caseStudy = pathname.match(/^\/(?:case-study|work)\/([^/]+)/)
  if (caseStudy && CASE_STUDY_TITLES[caseStudy[1]]) {
    return `${CASE_STUDY_TITLES[caseStudy[1]]} case study | ${SITE}`
  }
  return `${SITE} | Portfolio`
}

export default function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titleFor(pathname)
  }, [pathname])

  // `.page`'s `overflow: hidden auto` never actually kicks in — its
  // `min-height: 100dvh` just sets a floor, so it grows with its content
  // and the window/document ends up as the real scroll container. Since
  // SiteLayout never unmounts between routes (only the Outlet content
  // does), without this a new page opens wherever the previous page's
  // scroll was left instead of at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="page" style={{ '--bg-image': `url(${shimmerBg})` }}>
      <div className="page__backdrop" aria-hidden="true" />
      <MusicCursor />
      <PosterWall />
      <BackgroundDecor />

      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('main')?.focus()
        }}
      >
        Skip to content
      </a>

      <SiteNav />

      {/* The one <main> landmark for every page; tabIndex -1 so the skip link can move focus here. */}
      <main id="main" className="page__content" tabIndex={-1}>
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}
