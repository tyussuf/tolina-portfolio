import Vinyl from './Vinyl.jsx'
import Star from './Star.jsx'

const CARDS = [
  {
    number: '01',
    title: 'Empathy',
    body: 'I start with the people. Understanding their needs, frustrations, and goals is the first step to meaningful design.',
    bg: 'var(--cream)',
    vinylVariant: 'black',
    labelColor: 'var(--honey-quartz)',
  },
  {
    number: '02',
    title: 'UX research',
    body: 'I ask better questions before jumping to solutions. Research helps me uncover insights that drive real impact.',
    bg: 'var(--star-pink)',
    vinylVariant: 'violet',
    labelColor: 'var(--chart-teal)',
  },
  {
    number: '03',
    title: 'Accessibility',
    body: 'Good design should be usable by everyone. I strive to design inclusive experiences that remove barriers.',
    bg: 'var(--cream)',
    vinylVariant: 'teal',
    labelColor: 'var(--terracotta)',
  },
  {
    number: '04',
    title: 'Systems thinking',
    body: 'I look at the bigger picture. I consider how every interaction fits into the broader system to create cohesive experiences.',
    bg: 'var(--star-pink)',
    vinylVariant: 'black',
    labelColor: 'var(--chart-cobalt)',
  },
]

export default function PhilosophyGrid() {
  return (
    <div className="mt-8">
      <span className="block h-px mb-12 bg-[var(--ink)]/25" />

      <div className="flex items-center justify-center mb-12">
        <h3 className="m-0 [font-family:var(--font-display)] font-bold italic text-[clamp(34px,4.8vw,52px)] text-[var(--ink)] text-center">
          My design philosophy
        </h3>
      </div>

      <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4 gap-x-8 gap-y-16">
        {CARDS.map((card) => (
          <div key={card.number} className="relative">
            <div
              aria-hidden="true"
              className="hidden min-[600px]:block absolute top-1/2 -right-8 -translate-y-1/2 z-0 pointer-events-none"
            >
              <Vinyl size={140} colorVariant={card.vinylVariant} labelColor={card.labelColor} />
            </div>

            <div
              className="relative z-10 rounded-[12px] p-6 flex flex-col h-full"
              style={{ background: card.bg, boxShadow: '0 10px 24px rgba(37, 26, 53, 0.2)' }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 mb-4 rounded-full border border-[var(--ink)]/35 [font-family:var(--font-body)] text-[11px] text-[var(--ink)]">
                {card.number}
              </span>

              <h4 className="m-0 mb-2 [font-family:var(--font-display)] font-bold uppercase text-[17px] tracking-[0.02em] text-[var(--ink)]">
                {card.title}
              </h4>

              <div className="flex items-center gap-2 mb-4">
                <span className="flex-1 h-px bg-[var(--ink)]/25" />
                <Star size={11} />
                <span className="flex-1 h-px bg-[var(--ink)]/25" />
              </div>

              <p className="m-0 [font-family:var(--font-body)] text-[14px] leading-[1.55] text-[var(--ink)]">
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
