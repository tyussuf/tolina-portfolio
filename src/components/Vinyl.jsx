import { useId } from 'react'
import StarBurst from './stars/StarBurst.jsx'
import StarCluster from './stars/StarCluster.jsx'
import ShootingStar from './stars/ShootingStar.jsx'

// A physical-feeling record: base disc -> star artwork printed into the
// surface -> groove rings crossing back over the artwork -> label -> spindle.
// The sheen is a separate, non-rotating overlay (a light reflection stays
// roughly put on screen while the disc spins underneath it, same as a real
// record catching light) — see .vinyl__sheen in App.css.

const VARIANTS = {
  black: { base: '#1c1712', edge: '#2b241c', groove: '#efe3d1' },
  violet: { base: '#37163f', edge: '#6b2f78', groove: '#f3d9ff' },
  teal: { base: '#0e2f30', edge: '#1f5352', groove: '#dff5f0' },
}

const DISC_R = 48
const LABEL_R = 17
const RING_TEXT_R = LABEL_R - 3
const GROOVE_OUTER_R = 46
const GROOVE_INNER_R = LABEL_R + 3
const GROOVE_COUNT = 46

// Deterministic (not Math.random) so the groove texture never reshuffles on re-render.
const GROOVE_OPACITY = Array.from({ length: GROOVE_COUNT }, (_, i) => 0.14 + 0.1 * Math.abs(Math.sin(i * 12.9898)))

function grooveRadii() {
  const radii = []
  for (let i = 0; i < GROOVE_COUNT; i++) {
    const t = i / (GROOVE_COUNT - 1)
    // sqrt spacing: consecutive rings sit closer together as they approach the label
    radii.push(GROOVE_OUTER_R - (GROOVE_OUTER_R - GROOVE_INNER_R) * Math.sqrt(t))
  }
  return radii
}

const GROOVES = grooveRadii()
const RING_TEXT = 'tolina like fairuz • '.repeat(3)
const RING_PATH_D = `M 50 50 m -${RING_TEXT_R} 0 a ${RING_TEXT_R} ${RING_TEXT_R} 0 1 1 ${RING_TEXT_R * 2} 0 a ${RING_TEXT_R} ${RING_TEXT_R} 0 1 1 -${RING_TEXT_R * 2} 0`

export default function Vinyl({
  size = 320,
  colorVariant = 'black',
  labelColor = 'var(--paper)',
  rotation = 0,
  className,
  style,
}) {
  const uid = useId()
  const colors = VARIANTS[colorVariant] ?? VARIANTS.black

  return (
    <div
      className={`vinyl${className ? ` ${className}` : ''}`}
      style={{ width: size, height: size, ...style }}
    >
      <div className="vinyl__spin" style={{ transform: `rotate(${rotation}deg)` }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <clipPath id={`${uid}-disc`}>
              <circle cx="50" cy="50" r={DISC_R} />
            </clipPath>
            <path id={`${uid}-ring`} d={RING_PATH_D} />
          </defs>

          <circle cx="50" cy="50" r={DISC_R} fill={colors.base} />
          <circle cx="50" cy="50" r={DISC_R} fill="none" stroke={colors.edge} strokeWidth="0.6" opacity="0.8" />

          <g clipPath={`url(#${uid}-disc)`} style={{ mixBlendMode: 'screen', opacity: 0.62 }}>
            <g transform="translate(7.33 7.33) scale(0.853)">
              <StarBurst size={100} rotation={-6} />
            </g>
            <g transform="translate(9 11) scale(0.42)">
              <StarCluster size={100} rotation={10} />
            </g>
            <g transform="translate(49 49) scale(0.3)">
              <ShootingStar size={140} rotation={70} />
            </g>
          </g>

          {GROOVES.map((r, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={colors.groove}
              strokeWidth="0.18"
              opacity={GROOVE_OPACITY[i]}
            />
          ))}

          <circle cx="50" cy="50" r={LABEL_R} fill={labelColor} />
          <circle cx="50" cy="50" r={LABEL_R} fill="none" stroke="rgba(37,26,53,0.18)" strokeWidth="0.4" />

          <text className="vinyl__ring-text">
            <textPath href={`#${uid}-ring`} startOffset="0%">
              {RING_TEXT}
            </textPath>
          </text>

          <text x="50" y="51.5" textAnchor="middle" className="vinyl__wordmark">
            Tolina Yussuf
          </text>

          <circle cx="50" cy="50" r="1.6" fill="#120a20" />
        </svg>
      </div>

      <div className="vinyl__sheen" aria-hidden="true" />
    </div>
  )
}
