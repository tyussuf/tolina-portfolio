// Device frames are drawn entirely in CSS — no photographic device images.
// variant: 'phone' | 'tablet' | 'desktop' | 'bare'
// arrangement: 'single' | 'side-by-side' | 'staggered-trio' | 'full-bleed'
export default function Mockup({ variant = 'phone', arrangement = 'single', items }) {
  return (
    <div className={`cs-mockup cs-mockup--${arrangement}`}>
      {items.map((item, index) => (
        <figure key={item.alt || index} className={`cs-device cs-device--${variant}`}>
          <div className="cs-device__frame">
            {variant === 'phone' && <span className="cs-device__notch" aria-hidden="true" />}
            {item.src ? (
              <img src={item.src} alt={item.alt || ''} className="cs-device__screen" />
            ) : (
              <div className="cs-device__screen cs-device__screen--empty" aria-hidden="true" />
            )}
          </div>
          {item.caption && <figcaption className="cs-device__caption">{item.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}
