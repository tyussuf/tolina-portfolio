const STAR_PATH =
  'M12 1.5 14.9 8.7 22.5 9.3 16.7 14.3 18.5 21.7 12 17.7 5.5 21.7 7.3 14.3 1.5 9.3 9.1 8.7Z'

const stars = [
  { top: '6%', left: '9%', size: 18, rotate: -12, opacity: 0.5, color: 'var(--star-gold)' },
  { top: '14%', left: '82%', size: 12, rotate: 20, opacity: 0.4, color: 'var(--star-pink)' },
  { top: '24%', left: '4%', size: 10, rotate: 8, opacity: 0.35, color: 'var(--star-plum)' },
  { top: '32%', left: '91%', size: 20, rotate: -18, opacity: 0.45, color: 'var(--star-gold)' },
  { top: '44%', left: '14%', size: 14, rotate: 30, opacity: 0.4, color: 'var(--star-pink)' },
  { top: '52%', left: '88%', size: 10, rotate: -6, opacity: 0.35, color: 'var(--star-plum)' },
  { top: '63%', left: '6%', size: 16, rotate: 12, opacity: 0.4, color: 'var(--star-gold)' },
  { top: '71%', left: '80%', size: 12, rotate: -22, opacity: 0.4, color: 'var(--star-pink)' },
  { top: '82%', left: '18%', size: 20, rotate: 16, opacity: 0.45, color: 'var(--star-gold)' },
  { top: '89%', left: '92%', size: 12, rotate: -10, opacity: 0.35, color: 'var(--star-plum)' },
  { top: '96%', left: '10%', size: 14, rotate: 24, opacity: 0.4, color: 'var(--star-pink)' },
  { top: '18%', left: '48%', size: 9, rotate: 4, opacity: 0.3, color: 'var(--star-plum)' },
]

export default function BackgroundDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      {stars.map((star, index) => (
        <svg
          key={index}
          className="bg-decor__star"
          viewBox="0 0 24 24"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            transform: `rotate(${star.rotate}deg)`,
          }}
        >
          <path d={STAR_PATH} fill={star.color} />
        </svg>
      ))}
    </div>
  )
}
