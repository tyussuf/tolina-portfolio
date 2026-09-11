export default function PullQuote({ text, attribution }) {
  return (
    <blockquote className="cs-pullquote">
      <span className="cs-pullquote__mark" aria-hidden="true">
        &ldquo;
      </span>
      <p>{text}</p>
      {attribution && <cite>{attribution}</cite>}
    </blockquote>
  )
}
