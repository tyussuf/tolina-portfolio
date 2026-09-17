import PhilosophyGrid from './PhilosophyGrid.jsx'
import designerPortrait from '../assets/about/designer-headshot.jpg'

// PORTRAIT_MAX_W is the one place to dial the displayed photo size — the
// only explicit dimension (height resolves from the source file's own 2:3
// ratio, never set alongside it).
const PORTRAIT_MAX_W = 260
const PORTRAIT_RADIUS = 14

export default function AboutDesigner() {
  return (
    <div>
      <div className="flex flex-col min-[900px]:flex-row gap-12 min-[900px]:gap-12 items-start">
        <div className="w-full min-[900px]:w-[55%]">
          <h2 className="m-0 mb-2 [font-family:var(--font-display)] font-bold italic text-[clamp(44px,6.5vw,76px)] leading-[1.02] text-[var(--ink)]">
            The Designer
          </h2>

          <span className="block w-[60px] h-[2px] mb-6 bg-[var(--terracotta)]" />

          <p className="m-0 mb-4 [font-family:var(--font-body)] font-bold text-[clamp(18px,2vw,20px)] leading-[1.5] text-[var(--ink)]">
            I&rsquo;m a UX/UI designer who loves turning ideas, conversations, and messy problems
            into experiences that feel intuitive and intentional.
          </p>

          <div className="[&_p]:m-0 [&_p]:mb-4 [&_p]:[font-family:var(--font-body)] [&_p]:text-[clamp(15px,1.6vw,17px)] [&_p]:leading-[1.55] [&_p]:text-[var(--ink)]">
            <p>
              At Kennesaw State University, I study Interactive Design and Information Systems,
              where I&rsquo;ve developed a love for the intersection of design, technology, and
              people. My approach is rooted in empathy, curiosity, and accessibility. I&rsquo;m
              especially interested in designing products that don&rsquo;t just look good, but
              make people feel considered.
            </p>
            <p>
              Whether I&rsquo;m designing in Figma, testing a prototype, or figuring out why
              something just doesn&rsquo;t feel right, I&rsquo;m always looking for ways to make
              the experience better.
            </p>
          </div>
        </div>

        <div className="w-full min-[900px]:w-[40%] flex justify-center min-[900px]:justify-end">
          <img
            src={designerPortrait}
            alt="Tolina Yussuf, portrait"
            className="block w-full h-auto shadow-[0_18px_34px_rgba(37,26,53,0.28)]"
            style={{ maxWidth: PORTRAIT_MAX_W, borderRadius: PORTRAIT_RADIUS }}
          />
        </div>
      </div>

      <PhilosophyGrid />
    </div>
  )
}
