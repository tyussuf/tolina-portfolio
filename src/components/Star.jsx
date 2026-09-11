export default function Star({ size = 16, color = 'var(--terracotta)', className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block leading-none ${className}`}
      style={{ fontSize: size, color }}
    >
      &#10022;
    </span>
  )
}
