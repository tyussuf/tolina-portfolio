import { useState } from 'react'

export default function Polaroid({ image, alt, caption, rotation = 0, className = '' }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`polaroid ${className}`}
      style={{ '--tilt': `${rotation}deg` }}
      aria-pressed={flipped}
      aria-label={`Photo of ${alt}, press to read caption`}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Always in the DOM so a screen reader can reach it without flipping. */}
      <span className="polaroid__sr-caption">{caption}</span>

      <span className="polaroid__flip" aria-hidden="true">
        <span className="polaroid__face polaroid__face--front">
          <img src={image} alt="" className="polaroid__photo" />
          <span className="polaroid__fold" />
        </span>
        <span className="polaroid__face polaroid__face--back">
          <span className="polaroid__caption">{caption}</span>
        </span>
      </span>
    </button>
  )
}
