import blueprintCover from '../assets/covers/blueprint.webp'
import odysseyCover from '../assets/covers/odyssey.webp'
import afaanArcadeCover from '../assets/covers/afaan-arcade.webp'
import afaanWireframes from '../assets/case-studies/afaan-arcade/wireframes.jpg'
import afaanScreenSplash from '../assets/case-studies/afaan-arcade/screen-splash.png'
import afaanScreenSignup from '../assets/case-studies/afaan-arcade/screen-signup.png'
import afaanScreenFirstLesson from '../assets/case-studies/afaan-arcade/screen-first-lesson.png'
import afaanScreenExercise from '../assets/case-studies/afaan-arcade/screen-exercise.png'
import afaanScreenLessonPath from '../assets/case-studies/afaan-arcade/screen-lesson-path.png'
import afaanScreenProfile from '../assets/case-studies/afaan-arcade/screen-profile.png'
import redScratched from '../assets/backgrounds/red-scratched.jpg'
import blueRetro from '../assets/backgrounds/blue-retro.jpg'

export const records = [
  {
    id: 'blueprint',
    title: 'BluePrint',
    subtitle: 'Learn Fashion. Shape Personal Style.',
    coverAlt:
      'Denim blueprint-grid album cover with an exploded mannequin diagram and a model in a white wrap top, styled like a fashion technical sketch.',
    year: '2026',
    role: 'Lead UX Designer',
    cover: blueprintCover,
    vinylColor: { dark: '#1B3A6B', light: '#2E5A96' },
    tags: ['UX Design', 'UX Research', 'Project Management'],
    summary:
      'Blueprint is a fashion education platform designed to help users build confidence in their personal style through guided lessons, interactive mood boards, and a curated discovery space, bridging the gap between inspiration and education.',
    sections: [
      {
        heading: 'The Challenge',
        body: "Users often struggle to articulate their personal style, especially when they're just starting out. Existing platforms lean toward inspiration or shopping, but few offer education, guided exploration, and creative expression in one place.",
      },
      {
        heading: 'Solution',
        body: "Blueprint is organized into three flows that support different stages of the style-building journey: Discovery, for exploring aesthetics and trends; Learn, structured lessons in foundational fashion concepts; and Mood Boarding (the platform's core interactive feature), for applying what users have learned through filters, layouts, and aesthetic tools.",
      },
      {
        heading: 'Competitive Landscape',
        body: "We audited Pinterest and Udemy. Pinterest offers inspiration but no educational structure or tools for reflection; Udemy's courses lean technical, costly, and inconsistent in quality. Blueprint sits in the gap between the two: guided, accessible, and hands-on.",
        images: [{ src: '/images/blueprint/competitive-audit.webp', alt: 'Competitive audit of Pinterest and Udemy' }],
      },
      {
        heading: 'Design Process',
        body: 'As team lead, I established the grid system, layout patterns, and early design-system foundations, then co-designed the moodboard creation flow itself. On the UI side, I integrated aesthetic filters into the moodboard flow, refined dropdown interactions for clarity, and kept spacing and alignment consistent with the grid system throughout.',
        images: [
          { src: '/images/blueprint/wireframes-whiteboard.webp', alt: 'Whiteboard sketch of the Blueprint user flow' },
          { src: '/images/blueprint/moodboard-screens.webp', alt: 'Mood board filtering screens' },
        ],
      },
      {
        heading: 'Reflection',
        body: 'Blueprint grew into a platform that blends education, creativity, and discovery, with the moodboard flow becoming its standout feature. Leading this project taught me how to support teammates with different levels of design expertise, stay aligned on a shared vision, and build a prototype grounded in a consistent design system.',
      },
    ],
  },
  {
    id: 'afaan-arcade',
    title: 'Afaan Arcade',
    subtitle: 'Language Preservation through Play',
    coverAlt:
      'Red album cover with the Oromo flag, a black-and-white photo of a woman teaching a classroom, and Qubee lettering reading "afaan arkeedii."',
    year: '2025',
    role: 'Lead UX Designer & Founder',
    cover: afaanArcadeCover,
    panelBackground: redScratched,
    vinylColor: { dark: '#C24E15', light: '#E67A34' },
    tags: ['UX/UI Design', 'Product'],
    summary:
      'Afaan Arcade is a gamified mobile learning platform built to help second-generation and diasporic Oromo youth strengthen their skills in Afaan Oromo and Qubee, reclaiming a language that was historically suppressed in schools, media, and publications.',
    quote: {
      text: "I've always wanted a fun and affirming way to practice Afaan Oromo, but there aren't really any apps out there for us.",
      attribution: '2nd Generation Oromo Interviewee',
    },
    sections: [
      {
        heading: 'The Problem',
        body: "Afaan Oromo faced decades of suppression that banned its use in schools, media, and publications until the early 1990s, leaving generations of Oromos discouraged from reading, writing, or speaking their native language. Today, while it's still widely spoken, many diasporic and second-generation Oromos struggle with literacy and comprehension, and the language remains underrepresented on mainstream learning platforms.",
      },
      {
        heading: 'Goal',
        body: 'Create an accessible, engaging learning platform for Oromo youth across the diaspora to preserve our language and cultural identity, combining gamified learning with cultural preservation so users can reclaim a language that was historically suppressed.',
      },
      {
        heading: 'Research',
        body: "I ran a 17-respondent survey and five 30–45 minute interviews, including one with a nonprofit focused on Oromo youth advancement. Every respondent wanted an auditory element built in; 58.8% wanted games and interactive exercises over structured lessons, and 58.8% said they'd commit 5–10 minutes a day. Interviewees tied language directly to cultural identity and pride, and named a lack of structured tools, intimidation around learning alone, and mainstream apps' lack of Afaan Oromo support as their biggest pain points. Gamification, audio pronunciation, progress tracking, and culturally relevant examples came up again and again as desired features.",
        images: [{ src: '/images/afaan-arcade/affinity-map.webp', alt: 'FigJam affinity board clustering interview notes into shared pain points' }],
      },
      {
        heading: 'Competitive Landscape',
        body: "I audited Duolingo, Quizlet Learn, and Babbel against gamification, accessibility, community interaction, and, critically, Afaan Oromo support. Duolingo and Babbel don't offer Afaan Oromo at all, and Quizlet only supports it through user-created sets. That gap, more than any single feature, is what Afaan Arcade exists to close.",
        images: [{ src: '/images/afaan-arcade/competitive-matrix.webp', alt: 'Competitive audit of Duolingo, Quizlet Learn, and Babbel' }],
      },
      {
        heading: 'Design Process',
        body: 'I sketched low/mid-fidelity wireframes mapping the core navigation (onboarding, dashboard, search, learning modules, leaderboard, and profile) before moving into Figma. The design leans on immediate clarity on the opening and sign-in screens, a consistent pixel-art visual theme that reinforces the arcade concept, personalization through learning-style preferences and daily study goals, gamification through leaderboards and progress tracking, and accessibility options throughout settings.',
        images: [{ src: afaanWireframes, alt: 'Hand-drawn low-fidelity wireframes for Afaan Arcade navigation and key screens' }],
      },
      {
        heading: 'Final Screens',
        body: 'A look at the shipped flow: from sign-up through a first lesson, an interactive exercise, the unit path, and progress tracking on the profile screen.',
        images: [
          { src: afaanScreenSplash, alt: 'Afaan Arcade splash screen with pixel-art tree logo' },
          { src: afaanScreenSignup, alt: 'Sign-up screen reading "Akkam! Sign up and start learning Afaan Oromo!"' },
          { src: afaanScreenFirstLesson, alt: 'Onboarding illustration welcoming the user to their first lesson' },
          { src: afaanScreenExercise, alt: 'A "Finish the sentence" fill-in-the-blank exercise screen' },
          { src: afaanScreenLessonPath, alt: 'Unit One: Irreecha lesson path with progress bar' },
          { src: afaanScreenProfile, alt: 'Profile screen showing language knowledge progress and study streak' },
        ],
      },
      {
        heading: 'Reflection',
        body: "This project has been personally fulfilling as a first-generation Oromo-American; it sharpened my UX/UI skills while deepening my own connection to Afaan Oromo and Qubee. Design here became more than aesthetics; it's a vehicle for cultural survival. Next up: an integrated auditory/pronunciation component, community challenges connecting diasporic Oromos, story-based learning modules built from folktales and cultural references, and partnerships with nonprofits and schools to reach more learners.",
      },
    ],
  },
  {
    id: 'odyssey',
    title: 'Odyssey',
    subtitle: 'Your Mobile Travel App Companion',
    coverAlt:
      'Sky-blue record sleeve with a jet trailing a contrail over a Hokusai-style wave and palm trees.',
    year: '2025',
    role: 'Team Lead',
    cover: odysseyCover,
    panelBackground: blueRetro,
    // The retro pattern is busier than the other two textures, so its
    // section cards need more separation to stay legible over it, and the
    // header (title/tags/summary, which sits directly on the pattern with
    // no card behind it) needs a stronger dark overlay for the same reason.
    panelOverlay: 'rgba(0, 0, 0, 0.62)',
    panelCardBg: 'rgba(244, 236, 255, 0.32)',
    panelCardBlur: 'blur(10px)',
    vinylColor: { dark: '#5C1220', light: '#7D1F30' },
    tags: ['UX/UI Design', 'Product', 'Project Management'],
    summary:
      'Odyssey is a mobile travel companion app designed to streamline itinerary management, airport navigation, and personalized recommendations into one seamless experience. As team lead, I guided our group through the Goal-Directed Design process from research through a refined prototype.',
    sections: [
      {
        heading: 'The Problem',
        body: 'The idea came to me while traveling to D.C., my first time traveling solo, and it came with a lot of questions. Existing travel apps left users juggling multiple platforms for itinerary organization, booking management, airport navigation, and personalized recommendations.',
      },
      {
        heading: 'Goal',
        body: 'With Odyssey, we set out to bridge that gap by combining itinerary and booking management, airport navigation, and personalized recommendations into one intuitive, user-friendly platform.',
      },
      {
        heading: 'Research',
        body: 'A literature review surfaced app fatigue, information overload, and mistrust in travel platforms as recurring pain points, then we ran five user interviews across a range of travel styles. Customization, an all-in-one experience, budget-conscious options, and honest reviews came up again and again; we organized these findings through affinity mapping into shared behaviors and goals.',
        images: [{ src: '/images/odyssey/affinity-map.webp', alt: 'Affinity map clustering interview notes into shared themes' }],
      },
      {
        heading: 'Competitive Landscape',
        body: "We analyzed Kayak, Expedia, and Trip Advisor to identify strengths, weaknesses, and conventions worth carrying into Odyssey's own framework, aiming for something that felt familiar yet distinctly optimized for modern travelers.",
        images: [{ src: '/images/odyssey/competitive-audit.webp', alt: 'Competitive audit of Kayak, Expedia, and Trip Advisor' }],
      },
      {
        heading: 'Design Process',
        body: 'Following Goal-Directed Design, we built a primary persona, Femi Adeyemi, then wireframed a key path scenario (onboarding, exploration, booking) alongside validation scenarios for alternate flows, all in FigJam. Usability testing surfaced navigation confusion and unclear review tags, which we addressed by reworking the interactive flow and redesigning the tags for clarity.',
        images: [
          { src: '/images/odyssey/persona-femi.webp', alt: 'Femi Adeyemi, primary persona' },
          { src: '/images/odyssey/wireframes-flow.webp', alt: 'Full wireframe flow from FigJam' },
        ],
      },
      {
        heading: 'Reflection',
        body: "Leading Odyssey taught me as much about collaboration as design. When duplicated work in Figma started causing inconsistencies, I set up daily check-ins to keep the team aligned. I learned that leadership isn't just delegating; it's listening, deciding when needed, and making sure everyone feels included.",
      },
    ],
  },
]
