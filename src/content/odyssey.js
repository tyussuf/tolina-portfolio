// Real content, transcribed verbatim from the source case-study PDF
// ("case study screenshots (2).pdf"). Any [TODO: ...] string is content
// that was never supplied — it renders visibly on the page rather than
// being invented. Unlike Afaan Arcade (solo), Odyssey was a team project
// with the author as team lead — "we/our" language in the source is kept
// as-is, since it's accurate here, not a voice defect to fix.

export default {
  id: 'odyssey',
  title: 'Odyssey',
  descriptor: 'Your Mobile Travel App Companion',

  year: '2025',
  role: 'Team Lead',
  tools: ['Figma', 'FigJam'],
  timeframe: '[TODO: timeframe not supplied]',
  vinylColor: { dark: '#5C1220', light: '#7D1F30' },

  sections: [
    {
      id: 'hero',
      type: 'hero',
      descriptor: 'Your Mobile Travel App Companion',
      mockup: {
        variant: 'phone',
        src: '/images/odyssey/hero-device.png',
        alt: '',
      },
    },
    {
      id: 'overview',
      type: 'overview',
      label: 'Overview',
      navHidden: true,
      summary:
        'Odyssey is a mobile travel companion app designed to streamline itinerary management, airport navigation, and personalized recommendations into one seamless experience. As team lead, I guided our group through the Goal-Directed Design process, coordinating research, persona development, and in creating a mobile travel app companion.',
    },
    {
      id: 'gaps-integration',
      type: 'split',
      label: 'Identifying the Gaps in Travel Apps',
      problem: {
        heading: 'Identifying the Gaps in Travel Apps',
        body: 'I came up with the idea for Odyssey while traveling to D.C. That had been the first time that I had traveled solo, and it came with a lot of questions. Existing travel apps often lacked in providing a streamlined experience, leaving users juggling multiple platforms for itinerary organization, booking management, airport navigation, and personalized recommendations.',
      },
      solution: {
        heading: 'Simplifying Travel Through Integration',
        body: 'With Odyssey, we aimed to bridge this gap by combining these features into one intuitive app. Our goal was to simplify itinerary and booking management, assist with airport navigation, and offer personalized travel recommendations, all within a single, user-friendly platform.',
      },
    },
    {
      id: 'approach',
      type: 'text',
      label: 'Guided by Goal-Directed Design',
      body: "Our team followed the Goal-Directed Design (GDD) methodology, a user-centered process developed by Alan Cooper, author of About Face: The Essentials of Interaction Design. Unlike feature-focused approaches, GDD prioritizes users' underlying motivations and goals, ensuring the design supports their true needs rather than just technical function. Through user research, we identified key traveler frustrations and used these insights to help guide our design decisions. By aligning features with user goals, Odyssey was shaped into a travel app that is efficient and responsive to real-world travel challenges.",
    },
    {
      id: 'research',
      type: 'research',
      label: 'Research',
      body: "During our kickoff meeting, we defined our intentions with this app, as well as questions of who our user is, what will this app look like, and how do we determine success. We determined that the users of this app are travelers, including young professionals, solo travelers, families, and remote workers, and that they need an all-in-one place to address their travel needs whether they are an experienced traveler or a first-time solo traveler.\n\nIn order to gain a better understanding of Odyssey's product domain, we conducted a Literature Review about the challenges users face with travel in the digital age. Our findings revealed key pain points, including app fatigue, information overload, and mistrust in travel platforms. Additionally, we found that users value simplicity, brand reliability, and personalized recommendations when engaging with mobile travel apps.\n\nWe conducted five user interviews with participants from diverse travel experiences and needs, including those with accessibility requirements, rewards optimization, and an excursion-seeking mindset. The interviews lasted 45 minutes to an hour, utilizing open-ended questions to gain insight. During several of the interviews, I served as primary moderator, asking questions and cultivating a space for participants to share detailed experiences that informed our design decisions.",
      competitive: {
        body: 'By analyzing the strengths and weaknesses of our competitors — Kayak, Expedia, and Trip Advisor — we identified app features that we could integrate into Odyssey\'s framework. We were able to identify similarities across travel apps that we could implement as conventions, delivering a travel app that feels familiar yet distinctly optimized for modern travelers.',
        image: {
          src: '/images/odyssey/competitive-matrix.png',
          alt: '',
          caption: 'Competitive audit of Kayak, Expedia, and Trip Advisor, used to identify features and conventions to carry into Odyssey',
        },
      },
    },
    {
      id: 'research-findings',
      type: 'constraints',
      label: 'Key Research Findings',
      items: [
        'The users of this app are travelers — young professionals, solo travelers, families, and remote workers',
        'Travelers want an all-in-one place to address their travel needs, whether experienced or first-time solo',
        'Customization is incredibly important in travel aid apps',
        'Users prefer to have an all-in-one app',
        'The significance of options in a range according to budget',
        'User reviews are critical',
      ],
    },
    {
      id: 'affinity-mapping',
      type: 'gallery',
      label: 'Affinity Mapping',
      body: 'After we completed our interviews, we completed Affinity Maps to organize and analyze our findings. We each took 15 minutes to write down our reflections and key points mentioned by the interviewee. We then discussed our findings collectively and grouped together similar points to indicate a pattern. These patterns we determined through Affinity Mapping point to shared behaviors and goals within interviewees, thus influencing our design choices.\n\nWe found that interviewees highlighted the importance of an easy-to-navigate platform, honest reviews, and organization to a positive travel experience.',
      image: {
        src: '/images/odyssey/affinity-map.webp',
        alt: '',
        caption: 'Interview notes clustered into themes — interviewees highlighted the importance of an easy-to-navigate platform, honest reviews, and organization to a positive travel experience',
      },
    },
    {
      id: 'behavioral-continuums',
      type: 'gallery',
      label: 'Behavioral Continuums',
      body: 'After completing our interviews, we proceeded onto the Modeling phase. In order to create a user persona, we identified and analyzed Behavioral Variables from our Affinity Mapping Process. This process highlights any definitive patterns/key archetypes amongst our interviewees.',
      image: {
        src: '/images/odyssey/behavioral-continuums.webp',
        alt: '',
        caption: 'Behavioral continuums identifying definitive patterns and key traveler archetypes from the affinity mapping process',
      },
    },
    {
      id: 'persona',
      type: 'gallery',
      label: 'User Persona',
      body: 'Using our key behavior continuums, we developed a list of goals and behaviors from the core patterns we observed. After developing and fleshing this out, we created a Primary Persona, named Femi Adeyemi. Femi represents our core needs and goals of Odyssey.\n\nWe started by mapping out key behavioral patterns in how people think and act. From there, we pulled together a list of goals and behaviors that reflected what users really needed from our product, Odyssey.',
      image: {
        src: '/images/odyssey/persona-femi.webp',
        alt: '',
        caption: 'Femi Adeyemi, primary persona — a busy, travel-curious college student, built from the behavioral continuums to represent Odyssey’s core user',
      },
    },
    {
      id: 'context-scenario',
      type: 'gallery',
      label: 'Context Scenarios',
      body: "Context Scenarios: Bringing Femi's Journey to Life. After developing our primary persona, Femi Adeyemi, we created a context scenario to explore how Odyssey would fit into her daily life as a busy, travel-curious college student. This step was a crucial part of the Goal-Directed Design process, allowing us to imagine how travelers would interact with the app in real-world settings and how it could help them meet their travel goals.",
      image: {
        src: '/images/odyssey/context-scenario.webp',
        alt: '',
        caption: "Context scenario exploring how Odyssey fits into Femi's daily life as a busy, travel-curious college student",
      },
    },
    {
      id: 'requirements-list',
      type: 'gallery',
      label: 'Requirements List',
      image: {
        src: '/images/odyssey/requirements-list.webp',
        alt: '',
        caption: 'Requirements list mapping user actions, objects, and context for the key path scenario',
      },
    },
    {
      id: 'wireframes',
      type: 'gallery',
      label: 'Wireframes',
      body: "Wireframes: Mapping Navigation and Personalized Journeys. After finalizing the context scenarios and requirements list for our primary persona, we transitioned into wireframing Odyssey, our mobile travel companion app. We focused first on building out the key path scenario, which follows the traveler's most typical and goal-oriented journey through the app. This included onboarding, exploration, and booking.\n\nIn addition to this core flow, we designed validation scenarios to represent alternative paths, such as starting with excursions or exploring local transportation first. To visualize these interactions, our team created wireframes in FigJam. Our research showed that users appreciated intuitive navigation and tailored recommendations based on trip type, travel goals, and past activity within the app.",
      images: [
        {
          src: '/images/odyssey/wireframes-key-path.png',
          alt: '',
          caption: "Key path scenario: the traveler's most typical, goal-oriented journey through onboarding, exploration, and booking",
        },
        {
          src: '/images/odyssey/wireframes-validation.png',
          alt: '',
          caption: 'Validation scenarios representing alternative paths, such as starting with excursions or exploring local transportation first',
        },
      ],
    },
    {
      id: 'usability-testing',
      type: 'text',
      label: 'Usability Testing',
      body: 'After finishing our prototype, I led both usability studies. Due to limited time, we conducted two usability tests. I asked the participants to perform tasks in the app, such as navigating through it, selecting user reviews, reviewing travel alerts, and, most importantly, planning out their trip.',
    },
    {
      id: 'usability-findings',
      type: 'constraints',
      label: 'Usability Testing Findings',
      items: [
        'Users experienced difficulty navigating from the home page to the trips section due to broken or unclear interactions.',
        'Review tags, especially those associated with excursions, were confusing or lacked clear connection to the relevant experiences.',
      ],
    },
    {
      id: 'refinement',
      type: 'text',
      label: 'Refining the Prototype: Smoother Flows and Clearer Reviews',
      body: 'To address these issues, my team and I refined the prototype within Figma. We reworked the interactive flow between key screens to ensure smooth transitions between the home page, search sections (accommodations, flights, excursions, and cars), and the trips page. This improved the overall navigation and usability of the app.\n\nWe also redesigned the review tags, ensuring they were clearly linked to specific excursions or accommodations and more intuitive for users to understand at a glance. These updates enhanced the experience of browsing and selecting travel options, making the app more cohesive and user-friendly.',
    },
    {
      id: 'reflection',
      type: 'reflection',
      label: 'Leading Odyssey: Lessons in Collaboration and Growth',
      body: "Being the team lead for Odyssey was a rewarding experience that taught me a lot about collaboration and leadership. One of our biggest challenges was communication, team members were accidentally duplicating work in Figma, which led to design inconsistencies. To fix this, I set up daily virtual check-ins during the week so we could stay aligned and avoid overlap. When technical issues came up, like component merging in Figma, we worked through them together, those with more experience led mini tutorials to help the rest of the team. I learned that being a leader isn't just about delegating, it's about listening, making decisions when needed, and making sure everyone feels included.",
    },
    {
      id: 'next-project',
      type: 'next-project',
      label: 'Next Project',
      navHidden: true,
      nextProject: { id: 'blueprint', title: 'BluePrint' },
    },
  ],
}
