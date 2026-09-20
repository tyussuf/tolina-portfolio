import blueprintCover from '../assets/covers/card/blueprint.webp'
import afaanArcadeCover from '../assets/covers/card/afaan-arcade.webp'
import odysseyCover from '../assets/covers/card/odyssey.webp'

// Home page case study cards. Separate from records.js on purpose: that file
// feeds the /work crate quick-view, this one only feeds <CaseCard>. Covers are
// pre-cropped 564px squares (2x the 282px sleeve) so the browser never
// downloads the 700KB originals for a 282px slot.
//
// All of the card copy is lifted from her own writing, not written for her:
//   category    first tag from records.js
//   description the project subtitle on her case study page
//   outcome     a sentence from that case study (Odyssey's drops its leading "This")
// `accent` is sampled from each cover's dominant color and paints the record's
// center label.
export const CASE_CARDS = [
  {
    id: 'blueprint',
    title: 'BluePrint',
    category: 'UX Design',
    year: '2026',
    description: 'Learn Fashion. Shape Personal Style.',
    outcome: 'The mood board flow became a standout feature.',
    accent: '#34528c',
    cover: blueprintCover,
  },
  {
    id: 'afaan-arcade',
    title: 'Afaan Arcade',
    category: 'UX/UI Design',
    year: '2025',
    description: 'Language Preservation through Play',
    outcome: '100% of users wanted an auditory element in Afaan Arcade',
    accent: '#ba4434',
    cover: afaanArcadeCover,
  },
  {
    id: 'odyssey',
    title: 'Odyssey',
    category: 'UX/UI Design',
    year: '2025',
    description: 'Your Mobile Travel App Companion',
    outcome: 'Improved the overall navigation and usability of the app.',
    accent: '#5eabcc',
    cover: odysseyCover,
  },
]
