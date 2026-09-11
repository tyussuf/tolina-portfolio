// Real content, transcribed from the source case-study page
// (uxfol.io/p/tolina-yussuf/7a39d648). Any [TODO: ...] string is content
// that was never supplied — it renders visibly on the page rather than
// being invented. Like Odyssey, this was a team project with the author as
// lead — "we/our" language in the source is kept as-is.

export default {
  id: 'blueprint',
  title: 'BluePrint',
  descriptor: 'Learn Fashion. Shape Personal Style.',

  year: '2026',
  role: 'Lead UX Designer',
  tools: ['[TODO: tools not supplied]'],
  timeframe: 'March to April 2026 (7 weeks)',
  vinylColor: { dark: '#1B3A6B', light: '#2E5A96' },

  sections: [
    {
      id: 'hero',
      type: 'hero',
      descriptor: 'Learn Fashion. Shape Personal Style.',
      mockup: {
        variant: 'phone',
        src: '/images/blueprint/hero-device.png',
        alt: '',
      },
    },
    {
      id: 'overview',
      type: 'overview',
      label: 'Overview',
      navHidden: true,
      summary:
        'Blueprint is a fashion education platform designed to help users build confidence in their personal style through guided lessons, interactive mood boards, and a curated discovery space. The concept grew from a simple question: where can people, whether fashion-curious or industry professionals, learn the basics, experiment, and express their style in one place? Our goal was to create a space that feels approachable, playful, and empowering for users at any stage of their fashion journey.',
    },
    {
      id: 'at-a-glance',
      type: 'outcome-summary',
      label: 'At a Glance',
      navHidden: true,
      items: [
        {
          label: 'Role',
          body: 'Lead UX Designer, guiding the project from early ideation through wireframing and interaction design.',
        },
        {
          label: 'Team',
          body: '4 UX designers and 1 graphic designer.',
        },
        {
          label: 'Timeline',
          body: 'March to April 2026, a 7-week project.',
        },
        {
          label: 'Contributions',
          body: "Established the grid system, layout patterns, and early design-system foundations; facilitated team critiques; co-designed the mood board creation flow, the platform's core interactive feature.",
        },
      ],
    },
    {
      id: 'challenge-solution',
      type: 'split',
      label: 'From Inspiration Gap to Guided Expression',
      problem: {
        heading: 'The Challenge',
        body: "Users often struggle to articulate their personal style, especially when they're just starting out. Existing platforms focus on inspiration or shopping, but few offer education, guided exploration, and creative expression in one place. We set out to design a platform that helps users learn foundational style concepts, build confidence through structured exploration, create and share mood boards that reflect their evolving taste, and discover new aesthetics without feeling overwhelmed.",
      },
      solution: {
        heading: 'Solution',
        body: "Blueprint solves the gap between inspiration and education by offering guided lessons, curated discovery, and an intuitive mood board tool that helps users build confidence in their personal style. The platform is organized into three flows that support different stages of the style-building journey: Discovery, a space for exploring aesthetics, trends, and visual inspiration; Learn, structured lessons that teach foundational fashion concepts in an accessible way; and Mood Boarding, an interactive creation space where users apply what they've learned through filters, layouts, and aesthetic tools.",
      },
    },
    {
      id: 'ui-design',
      type: 'constraints',
      label: 'Aesthetics & UI Design',
      items: [
        'Collaborated with a team member to integrate aesthetic filters into the mood board flow, connecting onboarding selections to in-app creation tools.',
        'Ensured the filter UI reflected the same visual language as onboarding.',
        'Refined dropdown interactions, focusing on clarity, spacing, and predictable behavior.',
        'Adjusted padding, alignment, and spacing across components to maintain consistency with the grid system in the Figma file.',
        'Helped shape a UI that feels clean, expressive, and easy to navigate — especially for users new to fashion terminology.',
      ],
    },
    {
      id: 'wireframes',
      type: 'gallery',
      label: 'Mid-Fidelity Wireframes',
      image: {
        src: '/images/blueprint/wireframes-midfi.png',
        alt: '',
        caption: 'Mid-fidelity wireframes for Blueprint',
      },
    },
    {
      id: 'reflection',
      type: 'reflection',
      label: "What I've Learned",
      body: "Blueprint grew into a platform that blends education, creativity, and discovery — the mood board flow became a standout feature, offering users a guided yet expressive way to explore their style. Leading this project was also a learning experience for me: I learned how to support teammates with different levels of design expertise, keep us aligned on a shared vision, and build a prototype grounded in a consistent design system. Seeing our ideas come together in a cohesive, functional experience was incredibly satisfying, and affirmed my growth as both a designer and a team lead.",
    },
    {
      id: 'next-project',
      type: 'next-project',
      label: 'Next Project',
      navHidden: true,
      nextProject: { id: 'afaan-arcade', title: 'Afaan Arcade' },
    },
  ],
}
