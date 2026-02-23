import { PersonalInfo, Experience, Project, Skill, NavLink, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Sohail Khan",
  title: "Front-End Developer",
  subtitle: "React Developer / JavaScript Engineer",
  email: "sohail.kh1002@email.com",
  phone: "+91 90099 22242",
  location: "Indore, India",
  linkedin: "https://www.linkedin.com/in/sohail-professional",
  github: "https://github.com/sohail-khan",
  summary:
    "Front-End Developer with 7+ years of professional experience, including 4+ years in React.js, building production-grade web applications using JavaScript (ES6+) and TypeScript. Specialized in scalable component architecture, Redux/Redux Toolkit, API and AI API integration, and frontend performance optimization. Experienced in leading frontend modules, mentoring developers, and coordinating cross-functional Agile/Scrum teams.",
  about: [
    "7+ years of professional experience, including 4+ years in React.js",
    "Expert in Redux & Redux Toolkit for state management",
    "Strong TypeScript skills for type-safe applications",
    "Proficient in REST, Third-Party, and AI API integrations",
    "Focus on scalable component architecture and performance optimization",
    "Experience in leading frontend modules and mentoring developers",
  ],
};

export const experiences: Experience[] = [
  {
    id: "gimmefy",
    company: "Gimmefy (Teemuno)",
    role: "Senior Front-End Developer (React.js)",
    duration: "Mar 2024 — Jan 2026",
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "AI APIs"],
    responsibilities: [
      "Led frontend module development and coordinated task delivery across team members",
      "Developed and maintained React.js + TypeScript applications used by 5,000+ monthly active users",
      "Built AI-driven prompt editor and real-time rendering UI reducing manual workflow time by 35%",
      "Designed 40+ reusable React components, reducing duplicate UI code by 30%",
      "Implemented Redux Toolkit state architecture across 15+ modules",
      "Integrated 10+ REST and AI APIs with structured error handling",
      "Optimized rendering and memoization strategies, reducing re-renders by 40%",
      "Improved initial page load by 28% using lazy loading and code splitting",
      "Implemented async queue + retry logic improving AI response success rate to > 95%",
      "Conducted code reviews and guided junior developers on React patterns and performance practices",
    ],
  },
  {
    id: "indianic",
    company: "IndiaNIC Infotech Limited",
    role: "Front-End Developer (React.js)",
    duration: "Mar 2021 — Feb 2024",
    techStack: ["React.js", "Redux", "JavaScript", "REST APIs"],
    responsibilities: [
      "Delivered multiple React.js production applications across client projects",
      "Handled frontend feature modules and task breakdown within sprint cycles",
      "Developed reusable component libraries and shared UI systems",
      "Implemented REST API integrations and dynamic data-driven workflows",
      "Applied Redux-based state architecture across large applications",
      "Collaborated with QA, backend, and product teams for release delivery",
      "Debugged and optimized production React applications",
    ],
  },
  {
    id: "chapter247",
    company: "Chapter247 Infotech",
    role: "UI Developer",
    duration: "May 2018 — Mar 2021",
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "React.js"],
    responsibilities: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript, and jQuery",
      "Converted design mockups into reusable frontend components",
      "Supported React.js migration and early component architecture setup",
      "Coordinated with backend teams for API-driven UI features",
      "Optimized UI behavior and cross-browser compatibility",
    ],
  },
  // {
  //   id: "indianlancer",
  //   company: "Indianlancer Software Company",
  //   role: "UI Developer",
  //   duration: "Apr 2017 — Apr 2018",
  //   techStack: ["HTML5", "CSS3", "JavaScript", "jQuery"],
  //   responsibilities: [
  //     "Developed responsive web interfaces using HTML5, CSS3, JavaScript, and jQuery",
  //     "Converted UI designs into production-ready web pages",
  //     "Implemented API-driven UI interactions",
  //     "Debugged and optimized frontend code for performance and stability",
  //   ],
  // },
];

export const projects: Project[] = [
  {
    id: "gimmefy-project",
    name: "Gimmefy Platform",
    description:
      "AI-powered marketing platform enabling businesses to generate content and manage marketing campaigns efficiently.",
    techStack: ["React.js", "TypeScript", "Redux", "AI APIs"],
    highlights: [
      "Developed AI-powered marketing platform frontend using React.js and TypeScript",
      "Built prompt editor, response rendering engine, and media management UI modules",
      "Integrated multiple AI and REST APIs with async handling and structured error states",
      "Implemented reusable component patterns and optimized render performance",
      "Managed complex async states and real-time UI updates across workflows",
    ],
    liveUrl: "https://gimmefy.ai",
  },
  {
    id: "debriefing",
    name: "Debriefing — React Application",
    description:
      "Employee and employer management system UI streamlining HR processes and team communication.",
    techStack: ["React.js", "Bootstrap"],
    highlights: [
      "Developed employee and employer management system UI using React",
      "Built reusable and responsive React components and form workflows",
      "Implemented API-driven data views and dashboard-style interfaces",
      "Handled state management and validation logic for user operations",
    ],
  },
  {
    id: "jobcheck",
    name: "Jobcheck — Next.js Platform",
    description:
      "Job search platform for the New Zealand market, connecting job seekers with employers through an intuitive interface.",
    techStack: ["React.js", "Next.js", "Bootstrap"],
    highlights: [
      "Built job search platform frontend modules using React and Next.js",
      "Implemented SSR-based pages and component-driven layout structure",
      "Developed search, listing, and detail view UI flows",
      "Integrated API-based job data and dynamic routing",
    ],
    liveUrl: "https://www.jobcheck.org.nz",
  },
  {
    id: "cloudhouse",
    name: "CloudHouse — Medical System UI",
    description:
      "Doctor task management and billing system designed to streamline healthcare administrative workflows.",
    techStack: ["HTML5", "CSS3", "Bootstrap", "jQuery"],
    highlights: [
      "Developed responsive doctor task and billing interface",
      "Built dashboard screens and workflow-based UI components",
      "Integrated backend APIs for records and billing data display",
      "Improved usability and layout responsiveness across devices",
    ],
  },
  {
    id: "photobash",
    name: "Photobash — Angular Platform",
    description:
      "Photo selling web platform enabling photographers to showcase and monetize their work online.",
    techStack: ["Angular", "HTML5", "CSS3", "Bootstrap"],
    highlights: [
      "Implemented Angular-based UI features and frontend enhancements",
      "Developed reusable templates and component views",
      "Integrated API data into listing and media display modules",
      "Fixed UI performance and rendering issues in production screens",
    ],
    liveUrl: "https://www.photobash.org/",
  },
  {
    id: "urstore",
    name: "URstore — eCommerce",
    description:
      "eCommerce platform for custom apparel allowing users to design and purchase personalized clothing.",
    techStack: ["HTML5", "CSS3", "Bootstrap", "CodeIgniter"],
    highlights: [
      "Delivered frontend theme and UI integration for eCommerce platform",
      "Implemented product listing and customization page layouts",
      "Built responsive UI components using Bootstrap",
      "Improved cross-browser compatibility and styling consistency",
    ],
    liveUrl: "https://urstore.ca",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: 95 },
  { name: "JavaScript (ES6+)", category: "frontend", level: 92 },
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "Redux", category: "frontend", level: 90 },
  { name: "Redux Toolkit", category: "frontend", level: 88 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "React Hooks", category: "frontend", level: 92 },
  { name: "Context API", category: "frontend", level: 88 },
  { name: "WebSocket", category: "frontend", level: 80 },

  // UI Technologies
  { name: "HTML5", category: "ui", level: 95 },
  { name: "CSS3", category: "ui", level: 92 },
  { name: "SCSS/SASS", category: "ui", level: 88 },
  { name: "Tailwind CSS", category: "ui", level: 90 },
  { name: "Bootstrap", category: "ui", level: 90 },

  // Tools
  { name: "Git", category: "tools", level: 88 },
  { name: "GitHub", category: "tools", level: 88 },
  { name: "Vite", category: "tools", level: 88 },
  { name: "Webpack", category: "tools", level: 80 },
  { name: "NPM/Yarn", category: "tools", level: 90 },
  { name: "VS Code", category: "tools", level: 92 },
  { name: "Jira", category: "tools", level: 85 },

  // Concepts
  { name: "Component Architecture", category: "concepts", level: 92 },
  { name: "State Management", category: "concepts", level: 92 },
  { name: "REST APIs", category: "concepts", level: 90 },
  { name: "AI APIs", category: "concepts", level: 85 },
  { name: "Agile/Scrum", category: "concepts", level: 88 },
  { name: "Performance Optimization", category: "concepts", level: 88 },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sohail-professional/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:sohail.kh1002@email.com",
    icon: "mail",
  },
];
