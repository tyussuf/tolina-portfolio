import itoCover from '../assets/posters/imperial-tiger-orchestra.jpg'
import janetCover from '../assets/posters/janet-jackson.jpg'
import stevieCover from '../assets/posters/stevie-wonder.jpg'
import fairuzCover from '../assets/posters/fairuz.jpg'
import smithsCover from '../assets/posters/smiths-hatful-of-hollow.webp'
import sadeCover from '../assets/posters/sade-love-deluxe.webp'

// All posters share one size (1x original) for consistency, sitting as
// three mirrored left/right pairs (top, middle, bottom) so the layout
// balances evenly. Framed posters (plain cover art, no visible vinyl) get
// the existing white-bordered card treatment; unframed ones are already
// photographed as sleeve + disc peeking out, so a rigid rectangular frame
// would fight the cutout instead of reading as a record.
const SIZE = 130

// The three rows are laid out by a CSS grid (see .poster-wall__grid) that
// spreads them evenly between the header and the bottom of the screen, so the
// gaps between rows are always equal. The grid starts at 214px so the top row
// always clears the sticky header and the "CASE STUDIES" / "ABOUT ME" marquee
// band under it (which ends at ~198px).
//
// Order matters: the grid fills left to right, row by row, so each left poster
// is followed by its right-hand partner. `left` is the poster's offset from
// the viewport's left edge as a percentage.

const posters = [
  { src: itoCover, alt: 'Imperial Tiger Orchestra — Mercato', left: 3, rotate: -8, z: 1, framed: true },
  { src: stevieCover, alt: 'Stevie Wonder — Songs In The Key Of Life', left: 86, rotate: 6, z: 1, framed: true },

  // Both unframed cutouts sit on a canvas with a lot of transparent padding
  // around the actual sleeve + disc artwork (Smiths' artwork is ~58% of its
  // canvas area, Sade's ~55%), so matching canvas width to the framed
  // posters' 130px left the visible artwork looking noticeably smaller.
  // widthScale is tuned per image so the visible artwork's area matches a
  // 130x130 framed poster's, not the canvas itself.
  //
  // trimTop / trimBottom are that transparent padding as a fraction of the
  // poster's width (measured from each image's alpha channel). They become
  // negative margins so the grid spaces the visible artwork, not the canvas.
  { src: smithsCover, alt: 'The Smiths — Hatful of Hollow', left: 3, rotate: 7, z: 1, framed: false, widthScale: 1.31, trimTop: 0.181, trimBottom: 0.174 },
  { src: sadeCover, alt: 'Sade — Love Deluxe', left: 86, rotate: 5, z: 1, framed: false, widthScale: 1.35, trimTop: 0.059, trimBottom: 0.098 },

  { src: janetCover, alt: 'Janet Jackson — The Velvet Rope', left: 2, rotate: 5, z: 1, framed: true },
  { src: fairuzCover, alt: 'Fairuz — Modern Favorites', left: 85, rotate: -6, z: 1, framed: true },
]

export default function PosterWall() {
  return (
    <div className="poster-wall" aria-hidden="true">
      <div className="poster-wall__grid">
        {posters.map((poster) => {
          const width = Math.round(SIZE * (poster.widthScale ?? 1))
          // Each poster sits in one half-width grid column, so its viewport
          // offset is re-expressed relative to that half.
          const offsetInColumn = poster.left >= 50 ? (poster.left - 50) * 2 : poster.left * 2
          return (
            <img
              key={poster.alt}
              src={poster.src}
              alt=""
              className={`poster-wall__poster${poster.framed ? ' poster-wall__poster--framed' : ''}`}
              style={{
                '--poster-w': `clamp(${Math.round(width * 0.52)}px, ${(width / 1280) * 100}vw, ${width}px)`,
                width: 'var(--poster-w)',
                marginLeft: `${offsetInColumn}%`,
                marginTop: poster.trimTop ? `calc(var(--poster-w) * -${poster.trimTop})` : undefined,
                marginBottom: poster.trimBottom ? `calc(var(--poster-w) * -${poster.trimBottom})` : undefined,
                transform: `rotate(${poster.rotate}deg)`,
                zIndex: poster.z,
              }}
              draggable={false}
            />
          )
        })}
      </div>
    </div>
  )
}
