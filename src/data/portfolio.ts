import { PersonalInfo, Experience, Project, Skill, NavLink, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Sohail Khan",
  title: "Front End Engineer",
  subtitle: "React.js Developer",
  email: "sohail.kh1002@email.com",
  phone: "+91 90099 22242",
  location: "Indore, India",
  linkedin: "https://www.linkedin.com/in/sohail-professional/",
  github: "https://github.com/sohail-khan",
  summary:
    "Front End Engineer with 5+ years of experience building scalable React.js applications, reusable UI components, and high-performance frontend architectures.",
  about: [
    "5+ years of hands-on experience with React.js development",
    "Expert in Redux & Redux Toolkit for state management",
    "Strong TypeScript skills for type-safe applications",
    "Proficient in REST API integrations and data handling",
    "Focus on performance optimization and scalable architecture",
    "Experience working in Agile/Scrum environments",
  ],
};

export const experiences: Experience[] = [
  {
    id: "gimmefy",
    company: "Gimmefy",
    role: "Front End Developer (React.js)",
    duration: "Mar 2024 — Present",
    techStack: ["React.js", "TypeScript", "Redux", "AI APIs"],
    responsibilities: [
      "Developed and maintained React.js and TypeScript based frontend applications",
      "Built AI-driven user interfaces including AI prompt editor and response system",
      "Implemented reusable React components and Redux-based state management",
    ],
  },
  {
    id: "indianic",
    company: "IndiaNIC Infotech Limited",
    role: "Front End Developer (React.js)",
    duration: "Mar 2021 — Feb 2024",
    techStack: ["React.js", "Redux", "JavaScript", "REST APIs"],
    responsibilities: [
      "Developed multiple web applications using React.js, Redux, and JavaScript",
      "Implemented REST API integrations and dynamic UI workflows",
      "Built reusable UI components following component-driven architecture",
    ],
  },
  {
    id: "chapter247",
    company: "Chapter247 Infotech",
    role: "UI Developer",
    duration: "May 2018 — Mar 2021",
    techStack: ["HTML5", "CSS3", "JavaScript", "jQuery", "React.js"],
    responsibilities: [
      "Developed responsive user interfaces using HTML5, CSS3, and JavaScript",
      "Worked on early React.js components and UI migration support",
      "Converted UI designs into reusable frontend components",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "gimmefy-project",
    name: "Gimmefy",
    description:
      "AI-powered marketing platform enabling businesses to generate content and manage marketing campaigns efficiently.",
    techStack: ["React.js", "TypeScript", "Redux", "AI APIs"],
    highlights: [
      "Developed AI-powered marketing platform using React.js and TypeScript",
      "Built AI prompt editor, response rendering system, and media management UI",
      "Integrated third-party and AI APIs using REST architecture",
      "Implemented reusable React components and optimized UI performance",
    ],
    liveUrl: "https://gimmefy.ai",
  },
  {
    id: "jobcheck",
    name: "Jobcheck",
    description:
      "Job search platform for the New Zealand market, connecting job seekers with employers through an intuitive interface.",
    techStack: ["React.js", "Next.js", "Bootstrap"],
    highlights: [
      "Built job search platform for New Zealand market",
      "Contributed to frontend development using React.js",
      "Implemented component-based architecture for scalability",
    ],
  },
  {
    id: "debriefing",
    name: "Debriefing",
    description:
      "Employee and employer management web application streamlining HR processes and team communication.",
    techStack: ["React.js", "Bootstrap"],
    highlights: [
      "Developed employee and employer management web application",
      "Implemented responsive UI and reusable React components",
      "Created intuitive dashboard for HR management",
    ],
  },
  {
    id: "cloudhouse",
    name: "CloudHouse",
    description:
      "Doctor task management and billing system designed to streamline healthcare administrative workflows.",
    techStack: ["HTML5", "CSS3", "Bootstrap", "jQuery"],
    highlights: [
      "Developed doctor task management and billing system",
      "Built responsive UI with improved usability",
      "Implemented dynamic task workflows and billing features",
    ],
  },
  {
    id: "photobash",
    name: "Photobash",
    description:
      "Photo selling web platform enabling photographers to showcase and monetize their work online.",
    techStack: ["Angular", "HTML5", "CSS3", "Bootstrap"],
    highlights: [
      "Built photo selling web platform",
      "Implemented Angular-based UI and frontend enhancements",
      "Developed responsive gallery and checkout features",
    ],
  },
  {
    id: "urstore",
    name: "URstore",
    description:
      "eCommerce platform for custom apparel allowing users to design and purchase personalized clothing.",
    techStack: ["HTML5", "CSS3", "Bootstrap", "CodeIgniter"],
    highlights: [
      "Developed eCommerce platform for custom apparel",
      "Implemented UI/UX improvements and frontend theme integration",
      "Built product customization and cart functionality",
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: 95 },
  { name: "JavaScript (ES6+)", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 88 },
  { name: "Redux", category: "frontend", level: 90 },
  { name: "Redux Toolkit", category: "frontend", level: 88 },
  { name: "Next.js", category: "frontend", level: 75 },

  // UI Technologies
  { name: "HTML5", category: "ui", level: 95 },
  { name: "CSS3", category: "ui", level: 92 },
  { name: "SCSS/SASS", category: "ui", level: 85 },
  { name: "Tailwind CSS", category: "ui", level: 88 },
  { name: "Bootstrap", category: "ui", level: 90 },

  // Tools
  { name: "Git", category: "tools", level: 88 },
  { name: "GitHub", category: "tools", level: 88 },
  { name: "Vite", category: "tools", level: 85 },
  { name: "NPM/Yarn", category: "tools", level: 90 },
  { name: "VS Code", category: "tools", level: 92 },
  { name: "Jira", category: "tools", level: 85 },

  // Concepts
  { name: "Component Architecture", category: "concepts", level: 92 },
  { name: "State Management", category: "concepts", level: 90 },
  { name: "REST APIs", category: "concepts", level: 88 },
  { name: "Agile/Scrum", category: "concepts", level: 85 },
  { name: "Performance Optimization", category: "concepts", level: 85 },
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
