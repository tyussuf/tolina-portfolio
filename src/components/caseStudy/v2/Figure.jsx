// Every `image` field in the v2 content files is either a real path or a
// "TODO: ..." description of what's supposed to go there (the print this
// content was transcribed from didn't carry the actual images). Rather
// than guess or invent art, a TODO renders as a visible, labeled
// placeholder showing exactly what's expected — so it's obvious at a
// glance where real assets still need to be dropped in.
function isTodo(image) {
  return typeof image === 'string' && /^TODO:?/i.test(image.trim())
}

export default function Figure({ image, images, caption, alt, className = '' }) {
  // `images` (a plain array of real srcs) is for the handful of TODO slots
  // that turned out to describe more than one screen at once (e.g. "three
  // onboarding screens") — once real assets exist for all of them, they
  // render side by side instead of forcing a single-image slot to pick one.
  if (images && images.length > 0) {
    return (
      <figure className={`csl-figure csl-figure--row ${className}`.trim()}>
        <div className="csl-figure__row">
          {images.map((src) => (
            <img key={src} src={src} alt="" className="csl-figure__img" />
          ))}
        </div>
        {caption && <figcaption className="csl-figure__caption">{caption}</figcaption>}
      </figure>
    )
  }

  if (!image) return null

  const todo = isTodo(image)

  return (
    <figure className={`csl-figure ${className}`.trim()}>
      {todo ? (
        <div className="csl-figure__todo">
          <span className="csl-figure__todo-tag">Image needed</span>
          <p className="csl-figure__todo-text">{image.replace(/^TODO:?\s*/i, '')}</p>
        </div>
      ) : (
        <img src={image} alt={alt ?? caption ?? ''} className="csl-figure__img" />
      )}
      {caption && !todo && <figcaption className="csl-figure__caption">{caption}</figcaption>}
    </figure>
  )
}
