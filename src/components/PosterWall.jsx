import itoCover from '../assets/posters/imperial-tiger-orchestra.jpg'
import janetCover from '../assets/posters/janet-jackson.jpg'
import stevieCover from '../assets/posters/stevie-wonder.jpg'
import fairuzCover from '../assets/posters/fairuz.jpg'
import smithsCover from '../assets/posters/smiths-hatful-of-hollow.png'
import sadeCover from '../assets/posters/sade-love-deluxe.png'

// All posters share one size (1x original) for consistency, sitting as
// three mirrored left/right pairs (top, middle, bottom) so the layout
// balances evenly. Framed posters (plain cover art, no visible vinyl) get
// the existing white-bordered card treatment; unframed ones are already
// photographed as sleeve + disc peeking out, so a rigid rectangular frame
// would fight the cutout instead of reading as a record.
const SIZE = 130

const posters = [
  { src: itoCover, alt: 'Imperial Tiger Orchestra — Mercato', top: '6%', left: '3%', rotate: -8, z: 1, framed: true },
  { src: stevieCover, alt: 'Stevie Wonder — Songs In The Key Of Life', top: '6%', left: '86%', rotate: 6, z: 1, framed: true },

  // Both unframed cutouts sit on a canvas with a lot of transparent padding
  // around the actual sleeve + disc artwork (Smiths' artwork is ~58% of its
  // canvas area, Sade's ~55%), so matching canvas width to the framed
  // posters' 130px left the visible artwork looking noticeably smaller.
  // widthScale is tuned per image so the visible artwork's area matches a
  // 130x130 framed poster's, not the canvas itself.
  { src: smithsCover, alt: 'The Smiths — Hatful of Hollow', top: '40%', left: '3%', rotate: 7, z: 1, framed: false, widthScale: 1.31 },
  { src: sadeCover, alt: 'Sade — Love Deluxe', top: '40%', left: '86%', rotate: 5, z: 1, framed: false, widthScale: 1.35 },

  { src: janetCover, alt: 'Janet Jackson — The Velvet Rope', top: '76%', left: '2%', rotate: 5, z: 1, framed: true },
  { src: fairuzCover, alt: 'Fairuz — Modern Favorites', top: '76%', left: '85%', rotate: -6, z: 1, framed: true },
]

export default function PosterWall() {
  return (
    <div className="poster-wall" aria-hidden="true">
      {posters.map((poster) => {
        const width = Math.round(SIZE * (poster.widthScale ?? 1))
        return (
          <img
            key={poster.alt}
            src={poster.src}
            alt=""
            className={`poster-wall__poster${poster.framed ? ' poster-wall__poster--framed' : ''}`}
            style={{
              top: poster.top,
              left: poster.left,
              width: `clamp(${Math.round(width * 0.52)}px, ${(width / 1280) * 100}vw, ${width}px)`,
              transform: `rotate(${poster.rotate}deg)`,
              zIndex: poster.z,
            }}
            draggable={false}
          />
        )
      })}
    </div>
  )
}
