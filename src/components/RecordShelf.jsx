export default function RecordShelf({ records, onSelect }) {
  const tilts = [-3, 2, -2]
  return (
    <div className="shelf" id="work">
      {records.map((record, index) => (
        <div
          key={record.id}
          className="shelf__item"
          style={{ '--tilt': `${tilts[index % tilts.length]}deg` }}
        >
          <button
            type="button"
            className="shelf__cover"
            onClick={(event) => onSelect(record, event.currentTarget.getBoundingClientRect())}
            aria-label={`View ${record.title} case study`}
          >
            <img src={record.cover} alt={record.coverAlt} draggable={false} />
          </button>

          <p className="shelf__caption-title">{record.title}</p>
          <p className="shelf__caption-subtitle">{record.subtitle}</p>
          <ul className="shelf__caption-tags">
            {record.tags.map((tag) => (
              <li key={tag} className="shelf__tag-pill">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
