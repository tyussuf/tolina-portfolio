import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BackgroundDecor from './BackgroundDecor.jsx'
import PosterWall from './PosterWall.jsx'
import SiteNav from './SiteNav.jsx'
import SiteFooter from './SiteFooter.jsx'
import MusicCursor from './MusicCursor.jsx'
import shimmerBg from '../assets/backgrounds/shimmer.jpg'

export default function SiteLayout() {
  const { pathname } = useLocation()

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
      <MusicCursor />
      <PosterWall />
      <BackgroundDecor />

      <SiteNav />

      <div className="page__content">
        <Outlet />
      </div>

      <SiteFooter />
    </div>
  )
}
