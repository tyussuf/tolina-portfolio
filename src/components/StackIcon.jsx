import { BRAND_ICONS } from '../data/brandIcons.js'

// Small line icons (24x24, stroke) for the design skills that have no logo.
const LINE_ICONS = {
  ux: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  research: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </>
  ),
  lean: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  agile: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>
  ),
  abtest: (
    <>
      <rect x="3" y="4" width="8" height="16" rx="1.5" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" />
      <path d="M5.5 15l1.5-5 1.5 5M5.9 13.6h2.2" />
    </>
  ),
  data: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  ui: <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z" />,
  prompt: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </>
  ),
  web: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
}

// Marks that aren't in the simple-icons set (or are multi-color) are drawn here.
const MARKS = {
  // Figma's five-color mark.
  figma: (
    <svg viewBox="0 0 38 57" aria-hidden="true" focusable="false">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff" />
    </svg>
  ),
  // Adobe's red "A" (an approximation: Adobe's marks aren't in the open icon sets).
  adobe: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" fill="#fa0f00" />
    </svg>
  ),
  // Adobe XD's "Xd" tile.
  xd: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="4" fill="#470137" />
      <text x="12" y="16.4" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="11.5" fill="#ff61f6">
        Xd
      </text>
    </svg>
  ),
  // The four-square Microsoft mark.
  microsoft: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M1 1h10.2v10.2H1z" fill="#f25022" />
      <path d="M12.8 1H23v10.2H12.8z" fill="#7fba00" />
      <path d="M1 12.8h10.2V23H1z" fill="#00a4ef" />
      <path d="M12.8 12.8H23V23H12.8z" fill="#ffb900" />
    </svg>
  ),
}

// Logos whose letters are cut out of the shape need a solid square behind them,
// or the pill's own background shows through the letters.
const BACKING = { javascript: '#323330', typescript: '#ffffff' }

export default function StackIcon({ name }) {
  if (MARKS[name]) return <span className="stack__icon">{MARKS[name]}</span>

  if (BRAND_ICONS[name]) {
    const { hex, path } = BRAND_ICONS[name]
    return (
      <span className="stack__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          {BACKING[name] && <rect width="24" height="24" rx="2" fill={BACKING[name]} />}
          <path d={path} fill={`#${hex}`} />
        </svg>
      </span>
    )
  }

  if (LINE_ICONS[name]) {
    return (
      <span className="stack__icon stack__icon--line">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          {LINE_ICONS[name]}
        </svg>
      </span>
    )
  }

  return null
}
