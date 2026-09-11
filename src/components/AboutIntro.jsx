import { useRef } from 'react'
import mainPortrait from '../assets/about/main-portrait.jpg'
import nightPortrait from '../assets/about/night-portrait.jpg'
import stickers from '../assets/about/icons/sticker-cluster.png'
import atlPatch from '../assets/about/icons/atl-patch.png'
import vinylRecord from '../assets/about/icons/vinyl-record.png'
import star from '../assets/about/icons/star.png'
import AboutCollage from './AboutCollage.jsx'
import Polaroid from './Polaroid.jsx'

import arenaPhoto from '../assets/about/collage/arena.jpg'
import colorstackPhoto from '../assets/about/collage/colorstack.jpg'
import capitolPhoto from '../assets/about/collage/capitol.jpg'
import friendsPhoto from '../assets/about/collage/friends.jpg'
import culturalPhoto from '../assets/about/collage/cultural.jpg'
import hennaPhoto from '../assets/about/collage/henna.jpg'

// Percent offsets pulled from the Figma Intro frame (node 23:3), converted
// from the frame's absolute pixel positions into percentages of the
// collage's own bounding box so the whole stack scales as one unit.
const COLLAGE_ITEMS = [
  {
    src: vinylRecord,
    alt: '',
    left: '56.3%',
    top: '29.3%',
    width: '43.7%',
    height: '54.1%',
    rotate: -15.44,
    objectFit: 'contain',
  },
  {
    src: nightPortrait,
    alt: 'Tolina at night in downtown Atlanta',
    left: '34.5%',
    top: '27.8%',
    width: '41%',
    height: '57.9%',
    className: 'border-[3px] border-[#f3ebd0] shadow-[0_16px_30px_rgba(37,26,53,0.28)]',
  },
  {
    src: mainPortrait,
    alt: 'Tolina in a leopard-print headscarf',
    left: '0%',
    top: '10.1%',
    width: '41%',
    height: '57.9%',
    className: 'border-[5px] border-[#f3ebd0] shadow-[0_16px_30px_rgba(37,26,53,0.25)]',
  },
  {
    src: atlPatch,
    alt: '',
    left: '31.6%',
    top: '0%',
    width: '39.5%',
    height: '41.7%',
    rotate: -17.83,
    objectFit: 'contain',
  },
  {
    src: stickers,
    alt: '',
    left: '2.8%',
    top: '60.2%',
    width: '42.1%',
    height: '39.8%',
    rotate: 19.05,
    objectFit: 'contain',
  },
]

const POLAROID_PHOTOS = [
  {
    src: arenaPhoto,
    alt: 'Tolina seated courtside at State Farm Arena',
    caption: 'attending creatives of color in atl',
    rotation: -3,
  },
  {
    src: colorstackPhoto,
    alt: 'Tolina with the ColorStack group at a summit',
    caption: "colorstack's stacked up summit '25",
    rotation: 4,
  },
  {
    src: capitolPhoto,
    alt: 'Tolina at the U.S. Capitol',
    caption: "Youth Activist Institute '24",
    rotation: -2,
  },
  {
    src: friendsPhoto,
    alt: 'Tolina with friends on the street',
    caption: "SF '25",
    rotation: 5,
  },
  {
    src: culturalPhoto,
    alt: 'Tolina in traditional dress in a school hallway',
    caption: 'Cultural Night',
    rotation: -4,
  },
  {
    src: hennaPhoto,
    alt: 'Tolina outdoors showing off henna',
    caption: "Eid '26",
    rotation: 3,
  },
]

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M14 6l-6 6 6 6' : 'M10 6l6 6-6 6'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AboutIntro({ onSelectTab }) {
  const rowRef = useRef(null)
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const scrollByCard = (direction) => {
    rowRef.current?.scrollBy({ left: direction * 280, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-8 md:gap-12">
        <div className="relative">
          <img src={star} alt="" aria-hidden="true" className="absolute -top-2 -left-8 w-6" />

          <h1 className="m-0 mb-4 [font-family:var(--font-display)] font-bold italic text-[clamp(38px,6.4vw,68px)] leading-[1.05] text-[var(--ink)]">
            Tolina Yussuf
          </h1>

          <div className="[&_p]:m-0 [&_p]:mb-4 [&_p]:[font-family:var(--font-body)] [&_p]:text-[clamp(16px,1.8vw,19px)] [&_p]:leading-[1.55] [&_p]:text-[var(--ink)]">
            <p>hi! nice to meet you.</p>
            <p>
              i&rsquo;m tolina, a ux/ui designer studying{' '}
              <a
                href="#the-designer"
                onClick={(event) => {
                  event.preventDefault()
                  onSelectTab?.('designer')
                }}
                className="underline text-[var(--ink)] [text-decoration-color:var(--terracotta)] underline-offset-[3px] hover:text-[var(--terracotta)]"
              >
                Interactive Design &amp; Information Systems @ KSU and VP of the UX/UI Club
              </a>
              .
            </p>
            <p>
              i&rsquo;m passionate about creating thoughtful, accessible digital experiences that
              make complex things feel a little simpler.
            </p>
            <p>
              currently looking for{' '}
              <strong className="font-bold">spring 2027 internships + new grad opportunities</strong>{' '}
              in ux/ui &amp; product design.
            </p>
          </div>
        </div>

        <div>
          <AboutCollage aspect="568 / 537" items={COLLAGE_ITEMS} />
        </div>
      </div>

      <div className="relative mt-12">
        <button
          type="button"
          aria-label="Scroll photos left"
          className="polaroid-nav polaroid-nav--left"
          onClick={() => scrollByCard(-1)}
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="polaroid-row" ref={rowRef}>
          {POLAROID_PHOTOS.map((photo) => (
            <Polaroid
              key={photo.caption}
              image={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              rotation={photo.rotation}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll photos right"
          className="polaroid-nav polaroid-nav--right"
          onClick={() => scrollByCard(1)}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  )
}
