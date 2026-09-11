export default function SideDivider({ section }) {
  return (
    <div className="cs-divider">
      <span className="cs-divider__disc" aria-hidden="true" />
      <span className="cs-divider__line" aria-hidden="true" />
      <span className="cs-divider__label">{section.label || 'Side B'}</span>
      <span className="cs-divider__line" aria-hidden="true" />
    </div>
  )
}
