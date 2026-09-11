// Deep per-project page background + light slab tints for the themed case
// study detail pages. Each entry: page (deep background), tints (3 slab
// fills, cycled in order down the page), ink (body text color on tints),
// accent (kicker/heading/rule color), onPageText (color for anything
// sitting directly on the deep page background, e.g. the tracklist nav).
export const CASE_STUDY_THEMES = {
  'afaan-arcade': {
    page: '#4A1210',
    tints: ['#FBE7C4', '#DFF2CE', '#F7DDD1'],
    ink: '#1D1109',
    // Darkened from #2E6BE6 (was 3.8:1 on the cream heading panels — fails
    // WCAG AA) to hit 5.2:1 against that same background, same hue/sat.
    accent: '#1954CD',
    onPageText: '#F5DCC9',
    vinyl: { dark: '#C24E15', light: '#E67A34' },
  },
  odyssey: {
    page: '#101B33',
    tints: ['#DDE8F7', '#F2E6D2', '#E4E9F0'],
    ink: '#0E1626',
    // Darkened from #E4772F (was 2.4:1 on the cream heading panels — fails
    // WCAG AA) to hit 4.8:1 against that same background, same hue/sat.
    accent: '#9E4B15',
    onPageText: '#C9D6EC',
    vinyl: { dark: '#5C1220', light: '#7D1F30' },
  },
  blueprint: {
    page: '#123A5E',
    tints: ['#E7EEF2', '#DCE9EC', '#F1EDE2'],
    ink: '#0C1F30',
    // Darkened from #F2C14E (was 1.3:1 on the cream heading panels — nearly
    // invisible) to hit 4.8:1 against that same background, same hue/sat.
    accent: '#805D09',
    onPageText: '#C4DAE6',
    vinyl: { dark: '#1B3A6B', light: '#2E5A96' },
  },
}

// Staged rollout — a slug only renders the new rounded-slab system once
// it's been reviewed and added here. Everything else keeps rendering the
// existing panel-on-paper look untouched.
const THEMED_CASE_STUDY_SLUGS = ['afaan-arcade', 'odyssey', 'blueprint']

export function getCaseStudyTheme(slug) {
  return THEMED_CASE_STUDY_SLUGS.includes(slug) ? CASE_STUDY_THEMES[slug] : null
}
