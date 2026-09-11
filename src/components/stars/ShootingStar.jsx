import { HOT_PINK, COBALT_BLUE } from './palette.js'

// Asymmetric 6-point star: five normal-ish points plus one stretched into a
// long tapering tail (the two valleys flanking it are pulled in narrow so it
// tapers instead of fanning out). Drawn twice with a small offset between
// layers, like a slightly mis-registered two-color screen print.

const CENTER = 70
const TAIL_ANGLE = 200
const STEP = 60

const TIP_RADII = [60, 24, 27, 22, 26, 23]
const VALLEY_RADII = [5, 13, 11, 14, 10, 5]
const TIP_ANGLE_JITTER = [0, 2.5, -1.5, 2, -2, 1.5]

function polar(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180
  return [CENTER + radius * Math.cos(rad), CENTER + radius * Math.sin(rad)]
}

const tips = TIP_RADII.map((r, i) => polar(TAIL_ANGLE + STEP * i + TIP_ANGLE_JITTER[i], r))
const valleys = VALLEY_RADII.map((r, i) => polar(TAIL_ANGLE + STEP * i + STEP / 2, r))

const points = []
for (let i = 0; i < 6; i++) {
  points.push(tips[i], valleys[i])
}
const SHOOTING_STAR_PATH = `M ${points.map((p) => p.join(' ')).join(' L ')} Z`

export default function ShootingStar({
  size = 200,
  primaryColor = HOT_PINK,
  secondaryColor = COBALT_BLUE,
  rotation = 0,
  className,
  style,
}) {
  return (
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      className={className}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      <path d={SHOOTING_STAR_PATH} fill={secondaryColor} transform="translate(5, 4)" />
      <path d={SHOOTING_STAR_PATH} fill={primaryColor} transform="translate(-2, -1)" />
    </svg>
  )
}
