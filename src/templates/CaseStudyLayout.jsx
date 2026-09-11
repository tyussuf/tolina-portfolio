import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Figure from '../components/caseStudy/v2/Figure.jsx'
import SectionKind from '../components/caseStudy/v2/SectionKind.jsx'
import { getCaseStudyTheme } from '../data/caseStudyThemes.js'
import { afaanArcade } from '../content/v2/afaan-arcade.js'
import { odyssey } from '../content/v2/odyssey.js'
import { blueprint } from '../content/v2/blueprint.js'

// Used to resolve `readMore` slugs to real titles/links, regardless of
// which of the three pages has actually been migrated to this layout yet.
const ALL_PROJECTS = { 'afaan-arcade': afaanArcade, odyssey, blueprint }

// Provides shape (hero, meta row, section stream, read-more footer) and
// theming (per-project background/ink/accent, same theme source as the
// original CaseStudy.jsx) for the v2, kind-based content files. Section
// content itself is dispatched by SectionKind — this component only owns
// the page-level frame around it. Sections render as a plain vertical
// stack — the sticky-stacking-card scroll effect this used to have was
// removed per request.
export default function CaseStudyLayout({ project }) {
  const theme = getCaseStudyTheme(project.slug)

  useEffect(() => {
    if (!theme) return undefined
    const root = document.documentElement
    root.style.setProperty('--page-bg', theme.page)
    root.style.setProperty('--page-ink', theme.onPageText)
    return () => {
      root.style.removeProperty('--page-bg')
      root.style.removeProperty('--page-ink')
    }
  }, [theme])

  const rootStyle = theme
    ? {
        '--vinyl-dark': theme.vinyl?.dark,
        '--vinyl-light': theme.vinyl?.light,
        '--terracotta': theme.accent,
        '--ink': theme.ink,
        '--ink-muted': `color-mix(in srgb, ${theme.ink} 68%, transparent)`,
        '--line': `color-mix(in srgb, ${theme.ink} 16%, transparent)`,
      }
    : undefined

  return (
    <article className="case-study" style={rootStyle}>
      <header className="csl-hero">
        <div className="csl-hero__row">
          <div className="csl-hero__text">
            <h1 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700, color: 'var(--ink)' }}>
              {project.title}
            </h1>
            <p className="mt-2 text-lg" style={{ fontFamily: 'var(--font-body)', color: 'var(--ink)' }}>
              {project.subtitle}
            </p>
          </div>

          {project.heroImage && (
            <div className="csl-hero__mockup">
              {project.heroImageFramed === false ? (
                // Some hero images are already a complete device mockup
                // (real notch, status bar, home indicator baked in) — wrap
                // those in nothing, or the CSS frame just doubles up on
                // hardware that's already drawn into the art.
                <img
                  src={project.heroImage}
                  alt=""
                  className="csl-hero__mockup-img"
                  style={{ aspectRatio: project.heroImageRatio }}
                />
              ) : (
                // Aspect ratio is per-project (heroImageRatio) rather than a
                // single fixed value — each case study's bare screen art has
                // its own native shape, and forcing one ratio would crop it
                // via object-fit.
                <div className="csl-phone" style={{ aspectRatio: project.heroImageRatio || '393 / 852' }}>
                  <span className="csl-phone__island" aria-hidden="true" />
                  <Figure image={project.heroImage} />
                </div>
              )}
            </div>
          )}
        </div>

        {project.meta && project.meta.length > 0 && (
          <dl className="csl-meta">
            {project.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <div className="mt-12 flex flex-col gap-6">
        {project.sections.map((section, index) => (
          <SectionKind key={index} section={section} />
        ))}
      </div>

      {project.readMore && project.readMore.length > 0 && (
        <footer className="csl-readmore-footer mt-12 text-center">
          <p className="text-base uppercase tracking-[0.14em]" style={{ fontFamily: 'var(--font-body)', color: 'var(--ink-muted)' }}>
            Read more of my case studies
          </p>
          <nav className="csl-readmore">
            {project.readMore.map((slug) => (
              <Link key={slug} to={`/case-study/${slug}`}>
                {ALL_PROJECTS[slug]?.title ?? slug}
              </Link>
            ))}
          </nav>
        </footer>
      )}
    </article>
  )
}
