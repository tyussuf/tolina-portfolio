// Afaan Arcade case study content
// Pulled from the existing UXfolio case study. Text is verbatim.
// Anything marked TODO did not survive the print and needs your input.
// Real screens: some are older assets from src/assets/case-studies, others
// were pasted into chat this session and saved under public/images.
import screenSplash from "../../assets/case-studies/afaan-arcade/screen-splash.png";
import screenFirstLesson from "../../assets/case-studies/afaan-arcade/screen-first-lesson.png";
import screenProfile from "../../assets/case-studies/afaan-arcade/screen-profile.png";

export const afaanArcade = {
  slug: "afaan-arcade",
  title: "Afaan Arcade",
  subtitle: "Language Preservation through Play",
  heroImage: screenSplash,
  heroImageRatio: "393 / 852",

  meta: [
    { label: "Role", value: "Lead UX Designer, Founder" },
    { label: "Tools", value: "Figma, FigJam, Google Forms, Adobe Photoshop" },
    { label: "Timeline", value: "June 2025 - Present" },
  ],

  sections: [
    {
      kind: "intro",
      heading: "Rooted in Language, Revived in Play",
      body: [
        "Afaan Arcade is a gamified mobile learning platform created to help second-generation and diasporic Oromo youth strengthen their skills in Afaan Oromo and Qubee. As the fourth largest ethnic group in Africa, the Oromo people carry a rich cultural and linguistic heritage. Yet, Afaan Oromo was historically suppressed and banned in schools, media, and publications, creating gaps in literacy and comprehension. This project addresses that gap by combining language preservation with modern design and gamification, offering an accessible, culturally-rooted learning experience often overlooked by mainstream apps.",
      ],
      image: screenSplash,
    },

    {
      kind: "figure",
      images: [
        "/images/afaan-arcade/design-signup.webp",
        "/images/afaan-arcade/design-username.webp",
        "/images/afaan-arcade/design-unit-list.webp",
      ],
      caption: "Akkam sign-up, Create your User Name, and the Unit One (Irreecha) lesson list",
    },

    {
      kind: "twoColumn",
      columns: [
        {
          heading: "From Suppression to Struggle: The Need for Access",
          body: [
            "Afaan Oromo has faced decades of suppression that banned the use of the language in schools, media, and publications until the early 1990s. This led to generations of Oromos being discouraged or outright prevented from reading, writing, or publicly speaking their native language.",
            "Today, while Afaan Oromo is widely spoken, many diasporic and second-generation Oromos struggle with literacy and comprehension due to lack of access to learning tools. Despite its wide use, Afaan Oromo is underrepresented in mainstream learning platforms.",
          ],
        },
        {
          heading: "Preserving Culture Through Playful, Inclusive Design",
          body: [
            "Afaan Arcade seeks to empower second-generation Oromos and Diasporic Oromos to learn and practice Afaan Oromo and Qubee (writing system for Afaan Oromo). In taking into consideration diverse learning needs, cultural preservation, and community dialogue, this app offers the opportunity to strengthen users ties to their heritage.",
          ],
        },
      ],
    },

    {
      kind: "quote",
      text: "I've always wanted a fun and affirming way to practice Afaan Oromo, but there aren't really any apps out there for us.",
      attribution: "2nd Generation Oromo Interviewee",
    },

    {
      kind: "statement",
      heading: "Project Goal",
      body: [
        "Create an accessible, engaging learning platform for Oromo youth across the diaspora to preserve our language and cultural identity. By providing accessible, gamified learning in Afaan Oromo, it allows Oromo youth to reclaim a language that was historically suppressed.",
      ],
    },

    { kind: "sectionTitle", text: "Research" },

    {
      kind: "stats",
      heading: "Surveys",
      body: [
        "I created and distributed a Google Form survey (17 respondents) to better understand language learning habits, motivations, and challenges among Oromo youth in the diaspora.",
      ],
      items: [
        {
          label: "Insight 1",
          value: "100% of users wanted an auditory element in Afaan Arcade",
          image: "/images/afaan-arcade/survey-insight-1.webp",
        },
        {
          label: "Insight 2",
          value: "58.8% of participants wanted games and interactive exercises",
          image: "/images/afaan-arcade/survey-insight-2.webp",
        },
        {
          label: "Insight 3",
          value: "58.8% of participants would dedicate 5-10 minutes daily to learn Afaan Oromo",
          image: "/images/afaan-arcade/survey-insight-3.webp",
        },
      ],
    },

    {
      kind: "bullets",
      heading: "User Interviews",
      items: [
        {
          lead: "Method:",
          text: "Conducted 5, 30-45 min interviews, including one with a non-profit dedicated to Oromo youth advancement.",
        },
        {
          lead: "Cultural Identity:",
          text: "Many users said language is tied to pride, identity, and staying connected with family/community.",
        },
        {
          lead: "Pain Points:",
          text: "Lack of structured tools, intimidating to learn on their own, mainstream apps often don't support Afaan Oromo.",
        },
        {
          lead: "Desired Features:",
          text: "Gamification, audio pronunciation, progress tracking, and culturally relevant examples.",
        },
      ],
    },

    {
      kind: "figure",
      image: "/images/afaan-arcade/affinity-map.webp",
      caption: "Pain Points gathered during User Interviews",
    },

    {
      kind: "splitFigure",
      heading: "What our competitors did well:",
      body: [
        "To better understand the digital learning landscape, we analyzed existing educational platforms like Duolingo, Quizlet Learn, and Babel. Our competitive research diagram compared factors like:",
      ],
      list: [
        "Gamification & engagement",
        "Language offerings",
        "Accessibility features",
        "Cultural/contextual relevance",
        "Community interaction",
      ],
      bodyAfter: [
        "While Duolingo, Quizlet, and Babbel offer strong features like gamification, accessibility, and community interaction, only Quizlet provides limited access to Afaan Oromo through user-created sets. Duolingo and Babbel do not currently support Afaan Oromo at all, which highlights a significant gap in culturally relevant and accessible learning tools for the language.",
      ],
      image: "/images/afaan-arcade/competitive-matrix.webp",
      caption: "Evaluation of platform features and the availability of Afaan Oromo",
    },

    { kind: "sectionTitle", text: "Design Process" },

    {
      kind: "splitFigure",
      heading: "Low/Mid-Fidelity Wireframes",
      body: [
        "The sketches outline the core navigation structure and key screens including onboarding, dashboard, search, learning modules, leaderboard, and profile.",
        "The design emphasizes:",
      ],
      list: [
        "Immediate purpose clarity on the opening and sign-in screens.",
        "Consistent pixelated visual theme to align with the arcade concept.",
        "Personalization features such as learning style preferences and daily study goals.",
        "Gamification elements (leaderboards, progress tracking, achievements) to encourage continued engagement.",
        "Accessibility and customization options within settings and profile pages.",
      ],
      image: "/images/afaan-arcade/wireframes-sketch.webp",
    },

    {
      kind: "figure",
      heading: "High-Fidelity Screens",
      images: [screenProfile, "/images/afaan-arcade/design-exercise.webp", screenFirstLesson],
      caption: "Progress dashboard, a lesson exercise, and the first-lesson welcome screen",
    },

    {
      kind: "twoColumn",
      columns: [
        {
          heading: "Reflection:",
          body: [
            "This experience has been incredibly fulfilling for me as a first-generation Oromo-American. Through the design and research process, I not only developed my skills as a UX/UI designer but also strengthened my own connection to Afaan Oromo and Qubee.",
            "Engaging with other members of the Oromo diaspora online has been inspiring, their support affirmed the importance of creating accessible tools for language preservation. This project showed me firsthand how design can be more than aesthetics; it can serve as a vehicle for cultural survival and identity.",
            "Moving forward, I am committed to continuing this journey, making Afaan Arcade not just a concept but a reality and a success story for my community.",
          ],
        },
        {
          heading: "What's Next:",
          list: [
            "Expand Afaan Arcade's features to build on its foundation",
            "Integrated an auditory component so users can hear correct pronunciation, support comprehension and preserve oral traditions",
            "Add community challenges to connect diasporic Oromos through friendly competitions",
            "Develop story-based learning modules using folktales, dialogues, and cultural references",
            "Form partnerships with non-profits, schools, and community organizations to scale the platform and reach more learners",
          ],
        },
      ],
    },
  ],

  readMore: ["odyssey", "blueprint"],
};

export default afaanArcade;
