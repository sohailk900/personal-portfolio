export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  about: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  techStack: string[];
  responsibilities: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "ui" | "tools" | "concepts";
  level: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type SkillCategory = "frontend" | "ui" | "tools" | "concepts";

export const skillCategories: Record<SkillCategory, string> = {
  frontend: "Frontend Technologies",
  ui: "UI Technologies",
  tools: "Development Tools",
  concepts: "Core Concepts",
};
