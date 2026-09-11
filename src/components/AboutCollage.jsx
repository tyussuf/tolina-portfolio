export default function AboutCollage({ aspect, items, className = '' }) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: aspect }}>
      {items.map((item, index) => {
        const style = {
          left: item.left,
          top: item.top,
          width: item.width,
          height: item.height,
          transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined,
          zIndex: index + 1,
        }

        if (!item.src) {
          return (
            <div
              key={item.alt || index}
              aria-hidden="true"
              className={`absolute ${item.className || ''}`}
              style={style}
            />
          )
        }

        return (
          <img
            key={item.alt || index}
            src={item.src}
            alt={item.alt}
            className={`absolute ${item.className || ''}`}
            style={{ ...style, objectFit: item.objectFit || 'cover' }}
          />
        )
      })}
    </div>
  )
}
