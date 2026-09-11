const CHART_COLORS = {
  'hot-pink': 'var(--star-pink)',
  marigold: 'var(--star-gold)',
  teal: 'var(--chart-teal)',
  cobalt: 'var(--chart-cobalt)',
}

const RADIUS = 40
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

// The SVG is decorative (aria-hidden) — the legend below it is the real,
// screen-reader-reachable data, since a pie chart's shape carries no
// meaning to assistive tech on its own.
export default function DonutChart({ title, data }) {
  const total = data.reduce((sum, slice) => sum + slice.value, 0)
  let cumulative = 0

  return (
    <figure className="cs-chart">
      <svg viewBox="0 0 100 100" className="cs-chart__svg" aria-hidden="true">
        <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="var(--cream)" strokeWidth="16" />
        {data.map((slice) => {
          const fraction = total > 0 ? slice.value / total : 0
          const dash = fraction * CIRCUMFERENCE
          const offset = cumulative * CIRCUMFERENCE
          cumulative += fraction
          return (
            <circle
              key={slice.label}
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              stroke={CHART_COLORS[slice.color] || slice.color}
              strokeWidth="16"
              strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
              strokeDashoffset={-offset}
              transform="rotate(-90 50 50)"
            />
          )
        })}
      </svg>

      <figcaption className="cs-chart__caption">
        {title && <p className="cs-chart__title">{title}</p>}
        <ul className="cs-chart__legend">
          {data.map((slice) => (
            <li key={slice.label}>
              <span
                className="cs-chart__swatch"
                aria-hidden="true"
                style={{ background: CHART_COLORS[slice.color] || slice.color }}
              />
              {slice.label} — {slice.value}%
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  )
}
