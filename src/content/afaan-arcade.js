// Real content, ported from src/data/records.js and the restructure spec.
// Any [TODO: ...] string is content that was never supplied — it renders
// visibly on the page rather than being invented or left as a silent gap.

export default {
  id: 'afaan-arcade',
  title: 'Afaan Arcade',
  descriptor: 'Rooted in Language, Revived in Play',

  year: '2025',
  role: 'Lead UX Designer & Founder',
  tools: ['Figma', 'FigJam', 'Google Forms', 'Adobe Photoshop'],
  timeframe: 'June 2025 to present',
  vinylColor: { dark: '#C24E15', light: '#E67A34' },

  sections: [
    {
      id: 'hero',
      type: 'hero',
      descriptor: 'Rooted in Language, Revived in Play',
      mockup: {
        variant: 'phone',
        src: '/images/afaan-arcade/hero-device.png',
        alt: 'Afaan Arcade splash screen with pixel-art tree logo',
      },
    },
    {
      id: 'overview',
      type: 'overview',
      label: 'Overview',
      navHidden: true,
      summary:
        'Afaan Arcade is a gamified mobile learning platform created to help second-generation and diasporic Oromo youth strengthen their skills in Afaan Oromo and Qubee. As the fourth-largest ethnic group in Africa, the Oromo people carry a rich cultural and linguistic heritage — yet Afaan Oromo was historically suppressed and banned in schools, media, and publications, creating gaps in literacy and comprehension. This project addresses that gap by combining language preservation with modern design and gamification, offering an accessible, culturally rooted learning experience often overlooked by mainstream apps.',
    },
    {
      id: 'outcome-summary',
      type: 'outcome-summary',
      label: 'Outcome Summary',
      navHidden: true,
      items: [
        {
          label: 'Problem',
          body: 'Afaan Oromo is spoken by the fourth-largest ethnic group in Africa but is absent from every mainstream language learning platform.',
        },
        {
          label: 'Built',
          body: 'A gamified mobile learning concept for Afaan Oromo and Qubee, organized around cultural topics rather than grammar drills.',
        },
        {
          label: 'Evidence',
          body: '17 survey respondents and 5 interviews of 30 to 45 minutes, including one with a nonprofit focused on Oromo youth advancement.',
        },
        {
          label: 'Owned',
          body: 'Solo. Research, IA, wireframes, visual design, and brand.',
        },
      ],
    },
    {
      id: 'suppression-culture',
      type: 'split',
      label: 'From Suppression to Struggle',
      problem: {
        heading: 'From Suppression to Struggle: The Need for Access',
        body: 'Afaan Oromo has faced decades of suppression that banned the use of the language in schools, media, and publications until the early 1990s. This led to generations of Oromos being discouraged or outright prevented from reading, writing, or publicly speaking their native language.\n\nToday, while Afaan Oromo is widely spoken, many diasporic and second-generation Oromos struggle with literacy and comprehension due to lack of access to learning tools. Despite its wide use, Afaan Oromo is underrepresented in mainstream learning platforms.',
      },
      solution: {
        heading: 'Preserving Culture Through Playful, Inclusive Design',
        body: "Afaan Arcade seeks to empower second-generation and diasporic Oromos to learn and practice Afaan Oromo and Qubee, the writing system for Afaan Oromo. By taking into consideration diverse learning needs, cultural preservation, and community dialogue, this app offers the opportunity to strengthen users' ties to their heritage.",
      },
    },
    {
      id: 'goal',
      type: 'text',
      label: 'Project Goal',
      body: 'Create an accessible, engaging learning platform for Oromo youth across the diaspora to preserve our language and cultural identity. By providing accessible, gamified learning in Afaan Oromo, it allows Oromo youth to reclaim a language that was historically suppressed.',
    },
    {
      id: 'constraints',
      type: 'constraints',
      label: 'Constraints',
      items: [
        'Solo designer and founder, no engineering resource',
        'No existing digital Afaan Oromo content library to build lessons from',
        'No budget for professional voice recording',
        'Limited pool of Afaan Oromo speakers reachable for research',
        'Concept and prototype only, not built',
      ],
    },
    {
      id: 'research',
      type: 'research',
      label: 'Research',
      body: "I created and distributed a Google Form survey to 17 respondents to understand language-learning habits, motivations, and challenges among Oromo youth in the diaspora. I paired that with five 30–45 minute interviews, including one with a nonprofit focused on Oromo youth advancement.\n\nAcross interviews, language came up again and again as tied to pride, identity, and staying connected to family and community. The biggest pain points were a lack of structured tools, feeling intimidated learning alone, and mainstream apps simply not supporting Afaan Oromo — while gamification, audio pronunciation, progress tracking, and culturally relevant examples were the most requested features.",
      quote: {
        text: "I've always wanted a fun and affirming way to practice Afaan Oromo, but there aren't really any apps out there for us.",
        attribution: '2nd Generation Oromo Interviewee',
      },
      insights: [
        { stat: '100% of respondents wanted an auditory element built in.', chart: null },
        {
          stat: '10 of 17 respondents wanted games and interactive exercises',
          chart: {
            title: 'Preferred learning format, 17 respondents',
            data: [
              { label: 'Games & exercises', value: 58.8, color: 'hot-pink' },
              { label: 'Structured lessons', value: 41.2, color: 'marigold' },
            ],
          },
        },
        {
          stat: '10 of 17 respondents would dedicate 5 to 10 minutes daily',
          chart: {
            title: 'Daily time commitment, 17 respondents',
            data: [
              { label: '5–10 minutes daily', value: 58.8, color: 'cobalt' },
              { label: 'Other', value: 41.2, color: 'teal' },
            ],
          },
        },
      ],
      affinityImage: {
        src: '/images/afaan-arcade/affinity-map.png',
        alt: '',
        caption: 'Interview notes clustered into themes',
      },
      competitive: {
        body: "I audited Duolingo, Quizlet Learn, and Babbel against gamification, language offerings, accessibility, cultural relevance, and community interaction. Duolingo and Babbel don't offer Afaan Oromo at all, and Quizlet only supports it through user-created sets — a gap that's more central to what Afaan Arcade exists to close than any single feature.",
        image: {
          src: '/images/afaan-arcade/competitive-matrix.png',
          alt: '',
          caption: 'Platform features and Afaan Oromo availability across Duolingo, Quizlet Learn, and Babbel',
        },
      },
    },
    {
      id: 'key-decisions',
      type: 'key-decisions',
      label: 'Key Design Decisions',
      cards: [
        {
          number: '01',
          title: 'Audio on every lesson item',
          why: "100% of survey respondents said they wanted an auditory element built into the app, and audio pronunciation was one of interviewees' most requested features.",
          insteadOf: 'Relying on text and phonetic spelling alone.',
          tradeOff:
            "Every lesson item now depends on a native speaker recording — a real constraint, since there's no budget for professional voice recording and the pool of reachable Afaan Oromo speakers is limited.",
          image: {
            src: '/images/afaan-arcade/decision-01-audio.png',
            alt: '',
            caption: 'Audio playback on a lesson item',
          },
        },
        {
          number: '02',
          title: 'Gamified units over a structured curriculum',
          why: "58.8% of survey respondents chose games and interactive exercises over structured lessons, and gamification was one of interviewees' most requested features.",
          insteadOf: 'A textbook-style sequence organized by grammar.',
          tradeOff:
            'Harder to guarantee systematic grammar coverage. Learners may build vocabulary faster than they build sentence structure.',
          image: {
            src: '/images/afaan-arcade/decision-02-gamification.png',
            alt: '',
            caption: 'Progress tracking and unit completion',
          },
        },
        {
          number: '03',
          title: 'Short sessions built around cultural topics',
          why: "58.8% of respondents said they'd commit 5–10 minutes a day, and interviewees tied learning directly to cultural identity and pride, not just vocabulary. Units are organized by cultural topic — Unit One, Irreecha, moves from its origins into traditional clothing and chants and prayers — broken into short items with a visible progress bar to fit that daily rhythm.",
          insteadOf: 'Longer lesson blocks organized by difficulty alone.',
          tradeOff: 'Cultural context gets split across many small pieces, so a tradition can lose its narrative shape.',
          image: {
            src: '/images/afaan-arcade/decision-03-cultural-units.png',
            alt: '',
            caption: 'Units organized by cultural topic',
          },
        },
      ],
    },
    {
      id: 'design',
      type: 'design-showcase',
      label: 'The Design',
      images: [
        {
          src: '/images/afaan-arcade/design-signup.png',
          alt: 'Sign-up screen reading "Akkam! Sign up and start learning Afaan Oromo!"',
          caption: 'Onboarding, kept short to lower the barrier for returning learners',
        },
        {
          src: '/images/afaan-arcade/design-username.png',
          alt: '',
          caption: 'Account creation with guidance on the spot',
        },
        {
          src: '/images/afaan-arcade/design-unit-list.png',
          alt: 'Unit One: Irreecha lesson path with progress bar',
          caption: 'Irreecha unit broken into ten short items with visible progress',
        },
        {
          src: '/images/afaan-arcade/design-exercise.png',
          alt: 'A "Finish the sentence" fill-in-the-blank exercise screen',
          caption: 'A gamified fill-in-the-blank exercise, paired with audio and video',
        },
      ],
      figmaUrl: null,
    },
    {
      id: 'wireframes',
      type: 'gallery',
      label: 'Low/Mid-Fidelity Wireframes',
      body: 'The sketches outline the core navigation structure and key screens — onboarding, dashboard, search, learning modules, leaderboard, and profile — before moving into Figma. The design emphasizes immediate clarity on the opening and sign-in screens, a consistent pixel-art visual theme that reinforces the arcade concept, personalization through learning-style preferences and daily study goals, gamification through leaderboards, progress tracking, and achievements, and accessibility and customization options throughout settings and profile pages.',
      image: {
        src: '/images/afaan-arcade/wireframes-sketch.png',
        alt: 'Hand-drawn low-fidelity wireframes for Afaan Arcade navigation and key screens',
        caption:
          'Hand sketches covering onboarding, dashboard, search, learning modules, leaderboard, and profile',
      },
    },
    {
      id: 'states',
      type: 'states',
      label: 'Edge Cases & States',
      body: 'Not designed yet — placeholders below for empty, error, offline, and accessibility states.',
      images: [
        {
          src: '/images/afaan-arcade/state-empty.png',
          alt: '',
          caption: 'Empty state',
        },
        {
          src: '/images/afaan-arcade/state-error.png',
          alt: '',
          caption: 'Error state',
        },
        {
          src: '/images/afaan-arcade/state-offline.png',
          alt: '',
          caption: 'Offline state',
        },
        {
          src: '/images/afaan-arcade/state-accessibility.png',
          alt: '',
          caption: 'Accessibility state',
        },
      ],
    },
    {
      id: 'validation',
      type: 'text',
      label: 'Validation',
      body: 'This project has not yet been usability tested. The next step is five moderated sessions with second-generation Oromo speakers, testing whether a first-time user can complete one lesson unit unassisted and whether the Qubee input is legible to someone who has only ever heard the language spoken.',
    },
    {
      id: 'reflection',
      type: 'reflection',
      label: 'Reflection / What’s Next',
      body: "This experience has been incredibly fulfilling for me as a first-generation Oromo-American. Through the design and research process, I not only developed my skills as a UX/UI designer but also strengthened my own connection to Afaan Oromo and Qubee. Engaging with other members of the Oromo diaspora online has been inspiring — their support affirmed the importance of creating accessible tools for language preservation. This project showed me firsthand how design can be more than aesthetics; it can serve as a vehicle for cultural survival and identity, and I'm committed to making Afaan Arcade not just a concept but a reality and a success story for my community.\n\nWhat's next: an integrated auditory component so users can hear correct pronunciation and preserve oral tradition, community challenges connecting diasporic Oromos through friendly competition, story-based learning modules built from folktales and cultural references, and partnerships with nonprofits, schools, and community organizations to reach more learners.",
    },
    {
      id: 'next-project',
      type: 'next-project',
      label: 'Next Project',
      navHidden: true,
      nextProject: { id: 'odyssey', title: 'Odyssey' },
    },
  ],
}
