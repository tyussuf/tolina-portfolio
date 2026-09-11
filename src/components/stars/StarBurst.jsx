import { HOT_PINK, RED_ORANGE, MARIGOLD, PALE_TEAL } from './palette.js'

// 16-point radial sunburst: 8 long points alternating with 8 short points,
// rendered as 16 separately-colored wedges so the palette cycles around the
// disc like a pinwheel. Fixed (not random) jitter on each point's angle and
// length keeps the shape stable across re-renders while still reading as
// hand-cut rather than machine-perfect.

const POINT_COUNT = 16
const CENTER = 50
const LONG_RADIUS = 45
const SHORT_RADIUS = 28
const VALLEY_RADIUS = 14

const ANGLE_JITTER = [1.2, -0.8, 0.6, -1.4, 0.9, -0.5, 1.6, -1.1, 0.4, -1.3, 1.0, -0.7, 1.3, -0.9, 0.7, -1.2]
const TIP_JITTER = [0.03, -0.04, 0.05, -0.02, 0.04, -0.05, 0.02, -0.03, 0.05, -0.03, 0.03, -0.04, 0.04, -0.02, 0.03, -0.05]
const VALLEY_JITTER = [-0.02, 0.03, -0.03, 0.02, -0.04, 0.03, -0.02, 0.04, -0.03, 0.02, -0.03, 0.04, -0.02, 0.03, -0.04, 0.02]

function polar(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180
  return [CENTER + radius * Math.cos(rad), CENTER + radius * Math.sin(rad)]
}

const STEP = 360 / POINT_COUNT

const tips = Array.from({ length: POINT_COUNT }, (_, i) => {
  const angle = STEP * i - 90 + ANGLE_JITTER[i]
  const base = i % 2 === 0 ? LONG_RADIUS : SHORT_RADIUS
  return polar(angle, base * (1 + TIP_JITTER[i]))
})

const valleys = Array.from({ length: POINT_COUNT }, (_, i) => {
  const angle = STEP * i - 90 + STEP / 2
  return polar(angle, VALLEY_RADIUS * (1 + VALLEY_JITTER[i]))
})

export default function StarBurst({
  size = 200,
  colors = [HOT_PINK, RED_ORANGE, MARIGOLD, PALE_TEAL],
  rotation = 0,
  className,
  style,
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      {tips.map((tip, i) => {
        const before = valleys[(i - 1 + POINT_COUNT) % POINT_COUNT]
        const after = valleys[i]
        const color = colors[i % colors.length]
        return (
          <path
            key={i}
            d={`M ${CENTER} ${CENTER} L ${before[0]} ${before[1]} L ${tip[0]} ${tip[1]} L ${after[0]} ${after[1]} Z`}
            fill={color}
          />
        )
      })}
    </svg>
  )
}
