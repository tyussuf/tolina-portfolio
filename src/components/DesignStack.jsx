import StackIcon from './StackIcon.jsx'

// Every label below is worded as it appears in her resume's Skills section
// (Design / Languages / Tools). "Product Strategy" and "User Interface Design"
// are from the skills pills that used to sit on the home page card; the
// resume backs both (the GWC x Accenture certification and her UI coursework).
const STACK = [
  {
    label: 'Design',
    items: [
      { name: 'User Experience Design', icons: ['ux'] },
      { name: 'User Research', icons: ['research'] },
      { name: 'Lean UX', icons: ['lean'] },
      { name: 'Agile Methodology', icons: ['agile'] },
      { name: 'A/B Testing & Iteration', icons: ['abtest'] },
      { name: 'Data-Informed Decision Making', icons: ['data'] },
      { name: 'Product Strategy', icons: ['strategy'] },
      { name: 'User Interface Design', icons: ['ui'] },
      { name: 'Prompt-Engineering', icons: ['prompt'] },
      { name: 'Web Development', icons: ['web'] },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Figma', icons: ['figma'] },
      { name: 'Miro', icons: ['miro'] },
      { name: 'Adobe Creative Suite', icons: ['adobe'] },
      { name: 'Adobe XD', icons: ['xd'] },
      { name: 'Git/GitHub', icons: ['git', 'github'] },
      { name: 'React', icons: ['react'] },
      { name: 'Microsoft 365', icons: ['microsoft'] },
      { name: 'Google Search Console', icons: ['searchConsole'] },
    ],
  },
  {
    label: 'Languages',
    items: [
      { name: 'Python', icons: ['python'] },
      { name: 'JavaScript/TypeScript', icons: ['javascript', 'typescript'] },
      { name: 'HTML/CSS', icons: ['html5', 'css'] },
    ],
  },
]

export default function DesignStack() {
  let tilt = 0
  return (
    <section className="stack" aria-labelledby="design-stack-title">
      <h3
        id="design-stack-title"
        className="m-0 [font-family:var(--font-display)] font-bold italic text-[clamp(34px,4.8vw,52px)] text-[var(--ink)]"
      >
        Design stack
      </h3>

      {STACK.map((group) => (
        <div key={group.label} className="stack__group">
          <h4 className="stack__label">{group.label}</h4>
          <ul className="stack__list">
            {group.items.map((item) => {
              // Alternating slight tilts, like stickers stuck on by hand.
              tilt += 1
              const rotation = [-1.5, 1, -0.5, 1.5, -1][tilt % 5]
              return (
                <li key={item.name} className="stack__pill" style={{ '--tilt': `${rotation}deg` }}>
                  <span className="stack__icons">
                    {item.icons.map((icon) => (
                      <StackIcon key={icon} name={icon} />
                    ))}
                  </span>
                  {item.name}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </section>
  )
}
