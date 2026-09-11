import Panel from '../../Panel.jsx'
import PullQuote from '../PullQuote.jsx'
import Figure from './Figure.jsx'

const headingStyle = { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, color: 'var(--terracotta)' }
const bodyStyle = { fontFamily: 'var(--font-body)', color: 'var(--ink)' }

function Prose({ body }) {
  if (!body || body.length === 0) return null
  return (
    <div className="space-y-4">
      {body.map((paragraph, index) => (
        <p key={index} style={bodyStyle} className="text-base leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

// `items` here is the normalized shape { text, lead? } used by `bullets`
// sections and by plain string lists (twoColumn/splitFigure `list`, and
// competitor `points`) once mapped to the same shape.
function BulletList({ items }) {
  return (
    // pl-6 (not pl-5): the 8pt grid's spacing scale only defines 0/1/2/4/6/8/12/16/24/32,
    // so pl-5 silently produced no indent at all.
    <ul className="space-y-2 list-disc pl-6" style={bodyStyle}>
      {items.map((item, index) => (
        <li key={index}>
          {item.lead && <strong style={{ color: 'var(--terracotta)' }}>{item.lead} </strong>}
          {item.text}
        </li>
      ))}
    </ul>
  )
}

function asItems(list) {
  return list.map((text) => ({ text }))
}

// Dispatches a v2 content section to its rendering by `section.kind`.
// Every kind from afaan-arcade.js/odyssey.js/blueprint.js is handled here,
// even though only Afaan Arcade is wired up to a live page yet — so the
// renderer is already proven against the full kind vocabulary.
export default function SectionKind({ section }) {
  switch (section.kind) {
    case 'intro':
      return (
        <Panel glass className="csl-section">
          {section.image ? (
            // Reuses the hero's own row/column classes rather than
            // duplicating them — same 55/45 split, same mobile stack. No
            // CSS phone frame here (unlike the hero) — just the plain image.
            <div className="csl-hero__row">
              <div className="csl-hero__text">
                <h2 className="text-3xl md:text-4xl mb-4" style={headingStyle}>
                  {section.heading}
                </h2>
                <Prose body={section.body} />
              </div>
              <div className="csl-hero__mockup">
                {/* Figure (not a bare <img>) so a still-TODO image field
                    keeps showing the labeled placeholder instead of a
                    broken image with the TODO text as its literal src. */}
                <Figure image={section.image} />
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl mb-4" style={headingStyle}>
                {section.heading}
              </h2>
              <Prose body={section.body} />
            </>
          )}
        </Panel>
      )

    case 'statement':
      return (
        <Panel glass className="csl-section">
          {section.heading && (
            <h3 className="text-2xl mb-2" style={headingStyle}>
              {section.heading}
            </h3>
          )}
          <Prose body={section.body} />
        </Panel>
      )

    case 'sectionTitle':
      return (
        <div className="csl-divider">
          <span
            style={headingStyle}
            className="csl-divider__pill text-2xl md:text-3xl uppercase tracking-[0.2em]"
          >
            {section.text}
          </span>
        </div>
      )

    case 'quote':
      return <PullQuote text={section.text} attribution={section.attribution} />

    case 'figure':
      return (
        <Panel glass className="csl-section">
          {section.heading && (
            <p className="text-sm italic mb-2" style={bodyStyle}>
              {section.heading}
            </p>
          )}
          <Figure image={section.image} images={section.images} caption={section.caption} />
        </Panel>
      )

    case 'twoColumn':
      return (
        <Panel glass className="csl-section">
          <div className="grid md:grid-cols-2 gap-8">
            {section.columns.map((column, index) => (
              <div key={index}>
                {column.heading && (
                  <h3 className="text-xl mb-2" style={headingStyle}>
                    {column.heading}
                  </h3>
                )}
                <Prose body={column.body} />
                {column.list && (
                  <div className="mt-2">
                    <BulletList items={asItems(column.list)} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Panel>
      )

    case 'splitFigure':
      return (
        <Panel glass className="csl-section">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              {section.heading && (
                <h3 className="text-xl mb-2" style={headingStyle}>
                  {section.heading}
                </h3>
              )}
              <Prose body={section.body} />
              {section.list && (
                <div className="mt-2">
                  <BulletList items={asItems(section.list)} />
                </div>
              )}
              {section.bodyAfter && (
                <div className="mt-4">
                  <Prose body={section.bodyAfter} />
                </div>
              )}
            </div>
            <Figure image={section.image} caption={section.caption} />
          </div>
        </Panel>
      )

    case 'twoFigures':
      return (
        <Panel glass className="csl-section">
          <div className="grid md:grid-cols-2 gap-6">
            {section.figures.map((figure, index) => (
              <Figure key={index} image={figure.image} caption={figure.caption} />
            ))}
          </div>
        </Panel>
      )

    case 'bullets':
      return (
        <Panel glass className="csl-section">
          {section.heading && (
            <h3 className="text-xl mb-2" style={headingStyle}>
              {section.heading}
            </h3>
          )}
          <Prose body={section.body} />
          {/* mt-4, not mt-3 — same off-grid-number issue as pl-5 above, silently zero */}
          <div className="mt-4">
            <BulletList items={section.items} />
          </div>
          {section.bodyAfter && (
            <div className="mt-4">
              <Prose body={section.bodyAfter} />
            </div>
          )}
        </Panel>
      )

    case 'stats':
      return (
        <Panel glass className="csl-section">
          {section.heading && (
            <h3 className="text-xl mb-2" style={headingStyle}>
              {section.heading}
            </h3>
          )}
          <Prose body={section.body} />
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {section.items.map((item, index) => (
              <div key={index} className="csl-stat">
                <Figure image={item.image} />
                <p className="text-xs uppercase tracking-wide mt-2" style={{ color: 'var(--terracotta)' }}>
                  {item.label}
                </p>
                <p className="text-sm mt-1" style={bodyStyle}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      )

    case 'processDiagram':
      return (
        <Panel glass className="csl-section">
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${section.columns.length}, minmax(0, 1fr))` }}
          >
            {section.columns.map((column, index) => (
              <ol key={index} className="space-y-2 text-sm" style={bodyStyle}>
                {column.map((step, stepIndex) => (
                  <li key={stepIndex} className="csl-process-step">
                    {step}
                  </li>
                ))}
              </ol>
            ))}
          </div>
          {section.caption && (
            <p className="text-center text-sm italic mt-4" style={bodyStyle}>
              {section.caption}
            </p>
          )}
        </Panel>
      )

    case 'competitiveFigure':
      return (
        <Panel glass className="csl-section">
          <Figure image={section.image} className="mb-6" />
          <div className="grid sm:grid-cols-2 gap-6">
            {section.competitors.map((competitor, index) => (
              <div key={index}>
                <h4 className="text-lg mb-2" style={headingStyle}>
                  {competitor.name}
                </h4>
                <BulletList items={asItems(competitor.points)} />
              </div>
            ))}
          </div>
        </Panel>
      )

    default:
      return null
  }
}
