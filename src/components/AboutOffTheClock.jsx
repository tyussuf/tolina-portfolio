import arsenalBall from '../assets/about/icons/arsenal-ball.png'
import headphones from '../assets/about/icons/headphones.png'
import musicNotes from '../assets/about/icons/music-notes.png'
import ethiopianRecord from '../assets/about/off-the-clock/ethiopian-record.jpg'
import kelelaAlbumVinyl from '../assets/about/off-the-clock/kelela-album-vinyl.png'
import scadAtlDior from '../assets/about/off-the-clock/scad-atl-dior.jpg'
import atlantaTea from '../assets/about/off-the-clock/atlanta-tea.jpg'
import arsenalStadium from '../assets/about/off-the-clock/arsenal-stadium.jpg'
import arsenalChampions from '../assets/about/off-the-clock/arsenal-champions.jpg'
import ghcConference from '../assets/about/off-the-clock/ghc-conference.png'
import ebonyExhibit from '../assets/about/off-the-clock/ebony-exhibit.jpg'
import AboutCollage from './AboutCollage.jsx'
import Star from './Star.jsx'

// Percent offsets pulled from the Figma Off the Clock frame (node 23:78),
// same bounding-box-to-percentage conversion used elsewhere.
const DECOR_ITEMS = [
  {
    src: musicNotes,
    alt: '',
    left: '0%',
    top: '39.3%',
    width: '43.9%',
    height: '58.1%',
    objectFit: 'contain',
  },
  {
    src: arsenalBall,
    alt: '',
    left: '9.9%',
    top: '10.4%',
    width: '36.8%',
    height: '48%',
    rotate: 8.69,
    objectFit: 'contain',
  },
  {
    src: headphones,
    alt: '',
    left: '24.5%',
    top: '0%',
    width: '75.5%',
    height: '100%',
    rotate: 44.61,
    objectFit: 'contain',
  },
]

// Every photo shares this height only — width resolves from each image's own
// intrinsic aspect ratio, so nothing gets cropped or squeezed into a shape it
// wasn't shot in. FRAME_BORDER is the one place to dial the hairline white
// frame's thickness for every framed photo in this section at once.
const PHOTO_MAX_H = 190
const FRAME_BORDER = 5

const OFF_THE_CLOCK = [
  {
    num: '01',
    title: 'Music',
    body: "bossa nova, ethiopian jazz, & whatever's currently in rotation",
    photos: [
      { src: ethiopianRecord, alt: 'Ethiopian record album cover', rotate: 0 },
      {
        src: kelelaAlbumVinyl,
        alt: 'Kelela album cover with a pink vinyl record peeking out from behind the sleeve',
        rotate: 3,
        frame: false,
      },
    ],
    pill: 'Soundtrack to everything',
  },
  {
    num: '02',
    title: 'Atlanta',
    body: 'finding new places, events, exhibits, & things happening around the city',
    photos: [
      { src: scadAtlDior, alt: 'SCAD ATL Dior exhibit', rotate: -3 },
      { src: atlantaTea, alt: 'Tea and a plant', rotate: 2 },
    ],
    pill: 'ATL, GA',
  },
  {
    num: '03',
    title: 'Fútbol',
    body: 'arsenal fan, matchday enthusiast, & occasionally designing around the game',
    photos: [
      { src: arsenalStadium, alt: 'The Emirates Stadium crowd unfurling a giant Arsenal crest before kickoff', rotate: -2 },
      { src: arsenalChampions, alt: 'Arsenal Champions magazine cover featuring Thierry Henry', rotate: 3 },
    ],
    pill: 'Arsenal FC',
  },
  {
    num: '04',
    title: 'Creator',
    body: 'photography, content creation, & collecting inspiration everywhere i go',
    photos: [
      { src: ghcConference, alt: 'Tolina at the Grace Hopper Celebration', rotate: 2 },
      { src: ebonyExhibit, alt: 'Ebony magazine covers on display in a museum exhibit', rotate: -1 },
    ],
    pill: 'Photography + Content',
  },
]

function Underline() {
  return <span aria-hidden="true" className="block w-[70px] h-[2px] my-2 rounded-full bg-[var(--honey-quartz)]" />
}

export default function AboutOffTheClock() {
  return (
    <div>
      <div className="relative">
        <div className="max-w-[60%]">
          <h2 className="m-0 [font-family:var(--font-display)] font-bold italic text-[clamp(32px,4.6vw,48px)] leading-none text-[currentColor]">
            Off the Clock
          </h2>

          <Underline />

          <p className="m-0 [font-family:var(--font-body)] text-[13px] tracking-[0.14em] uppercase text-[currentColor] opacity-75">
            A few things I care about when I&rsquo;m not designing.
          </p>
        </div>

        {/* Anchored top-right and bled past the folder's own edge at desktop
            widths, instead of floating in the middle of the empty header —
            the folder has no overflow clipping and .page has overflow-x:
            hidden globally, so this can't introduce horizontal scroll.
            Below lg: it drops back into normal flow under the text. */}
        <div className="mt-6 lg:mt-0 lg:absolute lg:top-0 lg:right-[-40px] xl:right-[-64px] w-[clamp(150px,22vw,240px)] text-[currentColor]">
          <AboutCollage aspect="494.1 / 373.6" items={DECOR_ITEMS} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 mt-12">
        {OFF_THE_CLOCK.map((item) => (
          <div key={item.num} className="h-full flex flex-col">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="[font-family:var(--font-display)] font-bold italic text-[clamp(28px,3.6vw,36px)] leading-none text-[currentColor]">
                {item.num}
              </span>
              <span className="text-[currentColor] opacity-45 text-[17px]">/</span>
              <h3 className="m-0 [font-family:var(--font-body)] font-bold text-[17px] tracking-[0.08em] uppercase text-[currentColor]">
                {item.title}
              </h3>
              <Star size={11} color="currentColor" className="opacity-70 ml-1" />
            </div>

            <span className="block h-px w-full mb-4 bg-[currentColor] opacity-25" />

            {item.photos && (
              <div className="relative flex flex-wrap items-center gap-2 mb-4">
                {item.photos.map((photo) => {
                  // The Kelela cover is a transparent PNG meant to float
                  // directly on the section's own background, not sit on an
                  // opaque photo card — framing it would paint a visible
                  // paper-colored box behind its cutout silhouette. Every
                  // other photo here is a real opaque photo, so it keeps the
                  // one shared frame treatment.
                  const framed = photo.frame !== false
                  return (
                    <div
                      key={photo.alt}
                      className={
                        framed
                          ? 'relative z-10 shrink-0 rounded-[3px] bg-[var(--paper)] shadow-[0_10px_18px_rgba(0,0,0,0.35)]'
                          : 'relative z-10 shrink-0'
                      }
                      style={{ padding: framed ? FRAME_BORDER : 0, transform: `rotate(${photo.rotate}deg)` }}
                    >
                      {/* height-only constraint: width resolves from the image's
                          own ratio. maxWidth+objectFit is a pure safety net for
                          an unusually wide source — it never engages for a normal
                          photo, since there's no width constraint to fight. */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="block rounded-[1px]"
                        style={{
                          height: PHOTO_MAX_H,
                          width: 'auto',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          filter: framed ? undefined : 'drop-shadow(0 10px 18px rgba(0,0,0,0.35))',
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            )}

            <p className="m-0 [font-family:var(--font-body)] text-[16px] leading-[1.55] text-[currentColor] opacity-85">
              {item.body}
            </p>

            {item.pill && (
              <span className="inline-block self-start mt-auto px-2 py-1 rounded-full border border-[currentColor]/40 [font-family:var(--font-body)] text-[11px] tracking-[0.1em] uppercase text-[currentColor]">
                {item.pill}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
