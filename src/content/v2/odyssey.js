// Odyssey case study content
// Pulled from the existing UXfolio case study. Text is verbatim.
// Anything marked TODO did not survive the print and needs your input.

export const odyssey = {
  slug: "odyssey",
  title: "Odyssey",
  subtitle: "Your Mobile Travel App Companion",
  // Already a full iPhone mockup graphic (real notch, status bar, home
  // indicator baked in) — no CSS phone frame needed, unlike Afaan Arcade's
  // bare screen art.
  heroImage: "/images/odyssey/hero-splash-screen.webp",
  heroImageFramed: false,
  heroImageRatio: "447 / 559",

  meta: [
    { label: "Role", value: "Team Lead & UX/UI Designer" },
    { label: "Tools", value: "FigJam, Photopea, Figma" },
    { label: "Timeline", value: "Feb 2025 - May 2025" },
  ],

  sections: [
    {
      kind: "intro",
      heading: "Introducing Odyssey: A Seamless Travel Companion",
      body: [
        "Odyssey is a mobile travel companion app designed to streamline itinerary management, airport navigation, and personalized recommendations into one seamless experience. As team lead, I guided our group through the Goal-Directed Design process, coordinating research, persona development, and in creating a mobile travel app companion.",
      ],
      image: "/images/odyssey/home-mockup.webp",
      imageAlt: "Odyssey home screen: a \"Hi, Femi\" greeting, Stays, Flights and Cars shortcuts, and recommended destinations",
    },

    {
      kind: "twoColumn",
      columns: [
        {
          heading: "Identifying the Gaps in Travel Apps",
          body: [
            "I came up with the idea for Odyssey while traveling to D.C. That had been the first time that I had traveled solo, and it came with a lot of questions. Existing travel apps often lacked in providing a streamlined experience, leaving users juggling multiple platforms for itinerary organization, booking management, airport navigation, and personalized recommendations.",
          ],
        },
        {
          heading: "Simplifying Travel Through Integration",
          body: [
            "With Odyssey, we aimed to bridge this gap by combining these features into one intuitive app. Our goal was to simplify itinerary and booking management, assist with airport navigation, and offer personalized travel recommendations, all within a single, user-friendly platform.",
          ],
        },
      ],
    },

    { kind: "sectionTitle", text: "Our Approach" },

    {
      kind: "statement",
      heading: "Guided by Goal-Directed Design",
      body: [
        "Our team followed the Goal-Directed Design (GDD) methodology, a user-centered process developed by Alan Cooper, author of About Face: The Essentials of Interaction Design. Unlike feature-focused approaches, GDD prioritizes users' underlying motivations and goals, ensuring the design supports their true needs rather than just technical function.",
        "Through user research, we identified key traveler frustrations and used these insights to help guide our design decisions. By aligning features with user goals, Odyssey was shaped into a travel app that is efficient and responsive to real-world travel challenges.",
      ],
    },

    {
      kind: "processDiagram",
      caption: "The Five Major Steps of Goal-Directed Design",
      columns: [
        ["Literature Review", "Competitive Audit", "User Interviews"],
        ["Problem & Vision", "Behavioral Continuums", "Define Goals", "User Persona"],
        ["Persona Expectations", "Context Scenario", "Requirements List"],
        ["Key Path Scenario", "Validation Scenario", "Style Guide", "Prototyping"],
        ["Iterating"],
      ],
    },

    { kind: "sectionTitle", text: "Research" },

    {
      kind: "bullets",
      heading: "Kickoff Meeting: Defining Our User and Goals",
      body: [
        "During this meeting, we defined our intentions with this app, as well as questions of who our user is, what will this app look like, and how do we determine success",
      ],
      items: [
        {
          text: "We determined that the users of this app are travelers; including young professionals, solo travelers, families, and remote workers.",
        },
        {
          text: "The travelers have an all-in-one place to address their travel needs whether they are an experienced traveler or a first-time solo traveler.",
        },
      ],
    },

    {
      kind: "statement",
      heading: "Research Insights: Simplicity, Trust, and Personalization",
      body: [
        "In order to gain a better understanding of Odyssey's product domain, we conducted a Literature Review about the challenges users face with travel in the digital age.",
        "Our findings revealed key user pain points, including app fatigue, information overload, and mistrust in travel platforms. Additionally, we found that users value simplicity, brand reliability, and personalized recommendations when engaging with mobile travel apps.",
      ],
    },

    {
      kind: "splitFigure",
      heading: "Competitive Insights: Strengths, Weaknesses, and Conventions",
      body: [
        "By analyzing the strengths and weaknesses of our competitors, we identified app features that we could integrate into Odyssey's framework. We were able to identify similarities across travel apps that we could implement as conventions, delivering a travel app that feels familiar yet distinctly optimized for modern travelers.",
      ],
      image: "/images/odyssey/competitive-audit.webp",
    },

    {
      kind: "bullets",
      heading: "Interview Insights: Simplicity, Personalization, and Budget Flexibility",
      body: [
        "We conducted five user interviews with participants from diverse travel experiences and needs, including those with accessibility requirements, rewards optimization, and an excursion-seeking mindset.",
        "The interviews lasted 45 minutes to an hour, utilizing open-ended questions to gain insight. During several of the interviews, I served as primary moderator, asking questions and cultivating a space for participants to share detailed experiences that informed our design decisions.",
        "From the user interviews conducted we found:",
      ],
      items: [
        { text: "Customization is incredibly important in travel aid apps" },
        { text: "Users prefer to have an all-in-one app" },
        { text: "The significance of options in a range according to budget" },
        { text: "User Reviews are critical" },
      ],
    },

    {
      kind: "statement",
      heading: "Affinity Mapping: Patterns of Ease, Trust, and Organization",
      body: [
        "After we completed our interviews, we completed Affinity Maps to organize and analyze our findings. We each took 15 minutes to write down our reflections and key points mentioned by the interviewee. We then discussed our findings collectively and grouped together similar points to indicate a pattern. These patterns we determined through Affinity Mapping point to shared behaviors and goals within interviewees, thus influencing our design choices.",
        "We found that interviewees highlighted the importance of an easy-to-navigate platform, honest reviews, and organization to a positive travel experience.",
      ],
    },

    {
      kind: "figure",
      image: "/images/odyssey/affinity-map.webp",
      caption: "Affinity map clustering interview notes into travel app preferences, rewards system importance, existing app concerns, travel planning behaviors, user review importance, airport navigation assistance, and all-in-one vs. multiple apps",
    },

    { kind: "sectionTitle", text: "Modeling" },

    {
      kind: "splitFigure",
      heading: "Behavioral Continuums: Identifying Key Traveler Types",
      body: [
        "After completing our interviews, we proceeded onto the Modeling phase.",
        "In order to create a user persona, we identified and analyzed Behavioral Variables from our Affinity Mapping Process. This process highlights any definitive patterns/key archetypes amongst our interviewees.",
      ],
      image: "/images/odyssey/behavioral-continuums.webp",
    },

    {
      kind: "splitFigure",
      heading: "User Persona",
      body: [
        "Using our key behavior continuums, we developed a list of goals and behaviors from the core patterns we observed. After developing and fleshing this out, we created a Primary Persona, named Femi Adeyemi. Femi represents our core needs and goals of Odyssey.",
        "We started by mapping out key behavioral continuums to spot common patterns in how people think and act. From there, we pulled together a list of goals and behaviors that reflected what users really needed from our product, Odyssey.",
      ],
      image: "/images/odyssey/persona-femi.webp",
    },

    { kind: "sectionTitle", text: "Requirements" },

    {
      kind: "statement",
      heading: "Context Scenarios: Bringing Femi's Journey to Life",
      body: [
        "After developing our primary persona, Femi Adeyemi, we created a context scenario to explore how Odyssey would fit into her daily life as a busy, travel-curious college student. This step was a crucial part of the Goal-Directed Design process, allowing us to imagine how travelers would interact with the app in real-world settings and how it could help them meet their travel goals.",
      ],
    },

    {
      kind: "twoFigures",
      figures: [
        { image: "/images/odyssey/context-scenario.webp", caption: "Femi's Context Scenario" },
        { image: "/images/odyssey/requirements-list.webp", caption: "Design Requirements List" },
      ],
    },

    { kind: "sectionTitle", text: "Framework" },

    {
      kind: "statement",
      heading: "Wireframes: Mapping Navigation and Personalized Journeys",
      body: [
        "After finalizing the context scenarios and requirements list for our primary persona, we transitioned into wireframing Odyssey, our mobile travel companion app. We focused first on building out the key path scenario, which follows the traveler's most typical and goal-oriented journey through the app. This included onboarding, exploration, and booking.",
        "In addition to this core flow, we designed validation scenarios to represent alternative paths, such as starting with excursions or exploring local transportation first. To visualize these interactions, our team created wireframes in FigJam. Our research showed that users appreciated intuitive navigation and tailored recommendations based on trip type, travel goals, and past activity within the app.",
      ],
    },

    {
      kind: "figure",
      image: "/images/odyssey/wireframes-flow.webp",
      caption: "Full wireframe flow from FigJam, covering onboarding through booking",
    },

    { kind: "sectionTitle", text: "Refinement" },

    {
      kind: "bullets",
      heading: "Usability Testing",
      body: [
        "After finishing our prototype, I led both usability studies. Due to limited time, we conducted two usability tests. I asked the participants to perform tasks in the app, such as navigating through it, selecting user reviews, reviewing travel alerts, and, most importantly, planning out their trip.",
        "From the tests, we discovered:",
      ],
      items: [
        {
          text: "Users experienced difficulty navigating from the home page to the trips section due to broken or unclear interactions.",
        },
        {
          text: "Review tags, especially those associated with excursions, were confusing or lacked clear connection to the relevant experiences.",
        },
      ],
    },

    {
      kind: "statement",
      heading: "Refining the Prototype: Smoother Flows and Clearer Reviews",
      body: [
        "To address these issues, my team and I refined the prototype within Figma. We reworked the interactive flow between key screens to ensure smooth transitions between the home page, search sections (accommodations, flights, excursions, and cars), and the trips page. This improved the overall navigation and usability of the app.",
        "We also redesigned the review tags, ensuring they were clearly linked to specific excursions or accommodations and more intuitive for users to understand at a glance. These updates enhanced the experience of browsing and selecting travel options, making the app more cohesive and user-friendly.",
      ],
    },

    {
      kind: "statement",
      heading: "Leading Odyssey: Lessons in Collaboration and Growth",
      body: [
        "Being the team lead for Odyssey was a rewarding experience that taught me a lot about collaboration and leadership. One of our biggest challenges was communication, team members were accidentally duplicating work in Figma, which led to design inconsistencies. To fix this, I set up daily virtual check-ins during the week so we could stay aligned and avoid overlap. When technical issues came up, like component merging in Figma, we worked through them together, those with more experience led mini tutorials to help the rest of the team. I learned that being a leader isn't just about delegating, it's about listening, making decisions when needed, and making sure everyone feels included.",
      ],
    },
  ],

  readMore: ["blueprint", "afaan-arcade"],
};

export default odyssey;
