import vinylRecord from '../assets/about/icons/vinyl-record.png'
import soundwave from '../assets/about/currently-playing/soundwave.png'
import barcode from '../assets/about/currently-playing/barcode.png'

const TRACKS = [
  'UX/UI Design',
  'Weekend Projects',
  'Premier League Highlights',
  'Run To The Sun - N.E.R.D',
  'Banana Bread Matcha',
]

export default function AboutPlaying() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="m-0 mb-6 [font-family:var(--font-display)] font-bold italic text-[clamp(32px,5.4vw,50px)] leading-[1.08] text-[currentColor]">
          Currently
          <br />
          Playing
        </h2>

        <ol className="m-0 p-0 list-none flex flex-col gap-2">
          {TRACKS.map((track, index) => (
            <li
              key={track}
              className="flex items-baseline gap-2 [font-family:var(--font-body)] text-[clamp(17px,2vw,21px)] text-[currentColor]"
            >
              <span aria-hidden="true" className="text-[var(--terracotta)] text-[14px]">
                ▷
              </span>
              <span className="font-bold min-w-[22px]">{String(index + 1).padStart(2, '0')}</span>
              {track}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col items-center md:items-end h-full">
        <div className="relative w-full max-w-[280px] aspect-square">
          <img
            src={vinylRecord}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-contain drop-shadow-[0_20px_30px_rgba(37,26,53,0.3)]"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[30%] aspect-square rounded-full bg-[var(--cream)] [font-family:var(--font-display)] font-bold italic text-[clamp(20px,2.6vw,28px)] text-[var(--ink)]">
            TY
          </span>
        </div>

        <img src={soundwave} alt="" aria-hidden="true" className="w-full max-w-[280px] mt-2 opacity-40" />

        <div className="w-full max-w-[280px] mt-8 md:mt-auto">
          <p className="m-0 [font-family:var(--font-body)] text-[12px] text-[var(--ink-muted)]">TY-0027</p>
          {/* gap-2, not gap-3 — 3 isn't one of the 8pt grid's defined spacing steps, so it silently produced no gap */}
          <div className="flex items-center gap-2">
            <img
              src={barcode}
              alt=""
              aria-hidden="true"
              className="flex-1 min-w-0 h-[34px] object-contain object-left [filter:brightness(0)_invert(1)]"
            />
            <p className="m-0 shrink-0 [font-family:var(--font-body)] font-bold text-[12px] text-[currentColor]">
              33 1/2 RPM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
