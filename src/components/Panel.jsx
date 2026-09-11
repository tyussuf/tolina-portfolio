// rounded-lg (not the more generous rounded-3xl this was reaching for) —
// index.css resets --radius-* to only none/sm/md/lg/full for the 8pt grid,
// so rounded-3xl silently resolved to no radius at all. lg (28px) is the
// closest surviving step.
export default function Panel({ children, className = '', glass = false, ...rest }) {
  return (
    <div
      className={[
        'relative rounded-lg border p-6 md:p-12',
        glass
          ? 'bg-[rgba(239,227,210,0.94)] backdrop-blur backdrop-saturate-150'
          : 'bg-[rgb(239,227,210)]',
        'border-[rgba(196,163,120,0.35)]',
        'shadow-2xl shadow-black/10',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}
