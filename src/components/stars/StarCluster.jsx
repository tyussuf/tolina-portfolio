import { useId } from 'react'
import { SOFT_BABY_PINK, YELLOW, CYAN, GREEN, MAGENTA, FLAT_BLACK } from './palette.js'

// Three overlapping stars (6, 7, and 8 points, different scales/rotations).
// Overlaps are NOT alpha-blended — each pairwise intersection is clipped and
// re-filled with a flat contrasting color, like overlapping cut paper.

function polar(cx, cy, angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180
  return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)]
}

function starPath(points, cx, cy, outerR, innerR, rotationDeg, jitter) {
  const step = 180 / points
  const verts = []
  for (let i = 0; i < points * 2; i++) {
    const angle = step * i - 90 + rotationDeg
    const isTip = i % 2 === 0
    const base = isTip ? outerR : innerR
    const r = base * (1 + (jitter[i % jitter.length] || 0))
    verts.push(polar(cx, cy, angle, r).join(' '))
  }
  return `M ${verts.join(' L ')} Z`
}

const JITTER_A = [0.02, -0.03, 0.01, -0.02, 0.03, -0.01]
const JITTER_B = [-0.02, 0.03, -0.01, 0.02, -0.03, 0.01, 0.02]
const JITTER_C = [0.03, -0.02, 0.02, -0.03, 0.01, -0.01, 0.03, -0.02]

export default function StarCluster({
  size = 200,
  colors,
  rotation = 0,
  className,
  style,
}) {
  const uid = useId()

  const palette = {
    a: colors?.a ?? SOFT_BABY_PINK,
    b: colors?.b ?? YELLOW,
    c: colors?.c ?? CYAN,
    ab: colors?.ab ?? GREEN,
    bc: colors?.bc ?? MAGENTA,
    ac: colors?.ac ?? FLAT_BLACK,
  }

  const pathA = starPath(6, 40, 40, 28, 12, -8, JITTER_A)
  const pathB = starPath(7, 63, 47, 25, 11, 14, JITTER_B)
  const pathC = starPath(8, 47, 65, 22, 10, 30, JITTER_C)

  const clipA = `${uid}-a`
  const clipB = `${uid}-b`

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      <defs>
        <clipPath id={clipA}>
          <path d={pathA} />
        </clipPath>
        <clipPath id={clipB}>
          <path d={pathB} />
        </clipPath>
      </defs>

      <path d={pathA} fill={palette.a} />
      <path d={pathB} fill={palette.b} />
      <path d={pathC} fill={palette.c} />

      <g clipPath={`url(#${clipA})`}>
        <path d={pathB} fill={palette.ab} />
      </g>
      <g clipPath={`url(#${clipB})`}>
        <path d={pathC} fill={palette.bc} />
      </g>
      <g clipPath={`url(#${clipA})`}>
        <path d={pathC} fill={palette.ac} />
      </g>
    </svg>
  )
}
