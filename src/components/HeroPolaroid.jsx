import polaroidPhoto from '../assets/hero/tolina-polaroid.webp'

export default function HeroPolaroid() {
  return (
    <figure className="hero-polaroid">
      <img
        className="hero-polaroid__photo"
        src={polaroidPhoto}
        alt="Tolina Yussuf, seated, in a red hijab and black blazer"
        width="292"
        height="292"
        decoding="async"
        draggable={false}
      />
      {/* Styled like the liner notes on the back of a record sleeve. The line is
          from her own About page copy. */}
      <figcaption className="hero-polaroid__caption">
        <span className="hero-polaroid__label">Artist&rsquo;s insight</span>
        <span className="hero-polaroid__note">&ldquo;Make complex things feel a little simpler.&rdquo;</span>
      </figcaption>
    </figure>
  )
}
