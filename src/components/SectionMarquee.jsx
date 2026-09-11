const PHRASE = 'CASE STUDIES • '

export default function SectionMarquee({ phrase = PHRASE, variant = 'light' }) {
  const row = phrase.repeat(10)
  const className = variant === 'dark' ? 'marquee marquee--dark' : 'marquee'

  return (
    <div className={className}>
      <div className="marquee__track">
        <span className="marquee__row">{row}</span>
        <span className="marquee__row" aria-hidden="true">
          {row}
        </span>
      </div>
    </div>
  )
}
