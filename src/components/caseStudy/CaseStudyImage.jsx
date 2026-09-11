import { useState } from 'react'

// Every image here is supplied later as a file dropped into
// /public/images/afaan-arcade/ — none are generated, sourced, or stubbed
// with stock/AI art. Until the real file exists, the <img> 404s and this
// swaps to a bordered placeholder showing the expected filename + caption,
// at the same aspect ratio, so the layout never shifts once the real file
// lands.
const ASPECT_BY_VARIANT = {
  'full-width': '16 / 9',
  half: '4 / 3',
  'three-across': '9 / 16',
  'four-across': '9 / 16',
  'device-frame': '9 / 19.5',
}

export default function CaseStudyImage({ src, alt, caption, variant = 'full-width' }) {
  const [failed, setFailed] = useState(false)

  if (!alt) {
    // eslint-disable-next-line no-console
    console.warn(`CaseStudyImage: missing required alt text for "${src}"`)
  }

  const filename = src ? src.split('/').pop() : 'no filename set'
  const showPlaceholder = !src || failed
  const aspectRatio = ASPECT_BY_VARIANT[variant] || ASPECT_BY_VARIANT['full-width']

  return (
    <figure className={`cs-image cs-image--${variant}`}>
      {showPlaceholder ? (
        <div className="cs-image__placeholder" style={{ aspectRatio }}>
          <p className="cs-image__placeholder-filename">{filename}</p>
          {caption && <p className="cs-image__placeholder-caption">{caption}</p>}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="cs-image__img"
          style={{ aspectRatio }}
          onError={() => setFailed(true)}
        />
      )}
      {caption && !showPlaceholder && <figcaption className="cs-image__caption">{caption}</figcaption>}
    </figure>
  )
}
