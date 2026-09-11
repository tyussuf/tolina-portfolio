// BluePrint case study content
// Pulled from the existing UXfolio case study. Text is verbatim.
// Anything marked TODO did not survive the print and needs your input.

export const blueprint = {
  slug: "blueprint",
  title: "BluePrint",
  subtitle: "Learn Fashion. Shape Personal Style.",
  // Already a full iPhone mockup graphic (real notch, status bar, home
  // indicator baked in) — no CSS phone frame needed, unlike Afaan Arcade's
  // bare screen art.
  heroImage: "/images/blueprint/hero-onboarding.png",
  heroImageFramed: false,
  heroImageRatio: "447 / 559",

  meta: [
    { label: "Role", value: "Lead UX Designer" },
    { label: "Industry", value: "Fashion Education" },
    { label: "Timeline", value: "Mar - Apr 2026 (7 weeks)" },
  ],

  sections: [
    {
      kind: "intro",
      heading: "Introduction",
      body: [
        "Blueprint is a fashion education platform designed to help users build confidence in their personal style through guided lessons, interactive mood boards, and a curated discovery space.",
        "The concept grew from a simple question: Where can people, whether fashion-curious or industry professionals, learn the basics, experiment, and express their style in one place?",
        "Our goal was to create a space that feels approachable, playful, and empowering for users at any stage of their fashion journey.",
      ],
      image: "/images/blueprint/intro-learn-fashion.png",
    },

    {
      kind: "bullets",
      heading: "My Role",
      body: [
        "As team lead, I guided the project from early ideation through wireframing and interaction design. My contributions included:",
      ],
      items: [
        { text: "Establishing the grid system, layout patterns, and early design system foundations" },
        { text: "Facilitating team critiques and aligning our design decisions with user needs" },
        { text: "Co-designing the moodboard creation flow, which became the core interactive feature of the platform" },
      ],
      bodyAfter: [
        "This project was a mix of leadership, collaboration, and hands-on design work.",
      ],
    },

    {
      kind: "bullets",
      heading: "The Challenge",
      body: [
        "Users often struggle to articulate their personal style, especially when they're just starting out. Existing platforms focus on inspiration or shopping, but few offer education, guided exploration, and creative expression in one place.",
        "We set out to design a platform that helps users:",
      ],
      items: [
        { text: "Learn foundational style concepts" },
        { text: "Build confidence through structured exploration" },
        { text: "Create and share moodboards that reflect their evolving taste" },
        { text: "Discover new aesthetics without feeling overwhelmed" },
      ],
    },

    {
      kind: "competitiveFigure",
      // TODO: this section had no heading of its own in the original.
      // The content below is the annotation text from the competitive audit image.
      image: "/images/blueprint/competitive-audit.png",
      competitors: [
        {
          name: "Pinterest",
          points: [
            "Not beginner-friendly, new users don't have the structure needed to develop personal style",
            "No educational component",
            "No tools for reflection or analysis",
          ],
        },
        {
          name: "Udemy",
          points: [
            "Courses lean more towards the technical side",
            "Costly courses with a higher barrier to entry",
            "Lack of personalization",
            "Inconsistent course quality",
          ],
        },
      ],
    },

    {
      kind: "bullets",
      heading: "Solution",
      body: [
        "Blueprint solves the gap between inspiration and education by offering guided lessons, curated discovery, and an intuitive mood board tool that helps users build confidence in their personal style.",
        "The platform is organized into three main flows that support different stages of the style-building journey:",
      ],
      items: [
        {
          lead: "Discovery:",
          text: "a space for exploring aesthetics, trends, and visual inspiration.",
        },
        {
          lead: "Learn:",
          text: "structured lessons that teach foundational fashion concepts in an accessible way.",
        },
        {
          lead: "Mood boarding:",
          text: "an interactive creation space where users apply what they've learned through filters, layouts, and aesthetic tools.",
        },
      ],
      bodyAfter: [
        "These flows work together to bridge the gap between inspiration and education, giving users both the knowledge and the tools to express their style.",
      ],
    },

    { kind: "sectionTitle", text: "Aesthetics" },

    {
      kind: "splitFigure",
      heading: "UI Design",
      list: [
        "Collaborated with team member to integrate aesthetic filters into the mood board flow, connecting onboarding selections to in-app creation tools.",
        "Ensured the filter UI reflected the same visual language as onboarding.",
        "Refined dropdown interactions, focusing on clarity, spacing, and predictable behavior.",
        "Adjusted padding, alignment, and spacing across components to maintain consistency with the grid system in the Figma file.",
        "Helped shape a UI that feels clean, expressive, and easy to navigate, especially for users new to fashion terminology.",
      ],
      image: "/images/blueprint/aesthetics-mood-boards.png",
    },

    {
      kind: "figure",
      image: "/images/blueprint/wireframes-whiteboard.png",
      caption: "Our Mid-Fidelity Wireframes",
    },

    {
      kind: "figure",
      image: "/images/blueprint/moodboard-screens.png",
      caption: "Mood board filtering by category — Formal Wears, Beach Wear, and Vintage",
    },

    {
      kind: "statement",
      heading: "What I've Learned",
      body: [
        "BluePrint grew into a platform that blends education, creativity, and discovery. The mood board flow became a standout feature, offering users a guided yet expressive way to explore their style. Leading this project was also a learning experience for me, I learned how to support teammates with different levels of design expertise, keep us aligned on a shared vision, and build a prototype grounded in a consistent design system. Seeing our ideas come together in a cohesive, functional experience was incredibly satisfying and affirmed my growth as both a designer and a team lead.",
      ],
    },
  ],

  readMore: ["afaan-arcade", "odyssey"],
};

export default blueprint;
