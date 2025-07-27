import React from 'react';
import type { LucideIcon } from "lucide-react";
import { Code2, Bot, Network, Settings, Brain, BarChartBig, MonitorPlay, Pyramid } from "lucide-react";

// --- FREELANCER PLATFORM ICONS ---

// Using a simple path for the Fiverr 'F'
const FiverrIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    fill="currentColor"
    {...props}
  >
    <path d="M96.4 46.4h-28v-10h-10v10h-8v-10h-10v10h-8v-10h-10v40h10v-10h10v10h8v-10h10v10h10v-10h20.8c5.3 0 9.6-4.3 9.6-9.6v-1.2c0-5.2-4.2-9.2-9.4-9.2z" />
  </svg>
);

// A generic 'U' shape for Upwork
const UpworkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.5 13.9c-2.3 2.1-4.2 3.6-7.2 3.6s-4.8-1.5-4.8-5.3c0-4.3 3.1-6.7 7.2-6.7 1.4 0 2.5.3 3.6.8" />
    <path d="M16.5 10.6v8.9m-4.4-1.1c-1 .8-2.2 1.2-3.6 1.2s-3.1-.6-3.1-2.4c0-1.6 1.1-2.2 3.1-2.2h3.6" />
  </svg>
);


// --- TYPE DEFINITIONS ---

export interface FreelancePlatform {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  level?: number;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint?: string;
  githubLink?: string;
  liveLink?: string;
}

// --- DATA ---

export const freelancePlatforms: FreelancePlatform[] = [
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/syedvahith", // Replace with your actual Fiverr URL
    icon: FiverrIcon,
    description: "Offering specialized gigs for Python automation, web scraping, and AI integration tasks.",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01abcdef1234567890", // Replace with your actual Upwork URL
    icon: UpworkIcon,
    description: "Available for hourly or fixed-price projects, delivering robust and scalable solutions.",
  },
];

export const skillsData: Skill[] = [
  { name: "Python", icon: Code2, level: 90, description: "Core language for automation and back-end services." },
  { name: "AI & ML", icon: Brain, level: 80, description: "Integrating LLMs (Mistral, LLaMA) via APIs & Ollama." },
  { name: "Web Automation", icon: MonitorPlay, level: 85, description: "Browser automation with Selenium for testing & scraping." },
  { name: "n8n Workflows", icon: Network, level: 80, description: "Creating complex, multi-system automated workflows." },
  { name: "SAP Automation", icon: Pyramid, level: 75, description: "Automating enterprise processes within SAP environments." },
  { name: "RPA", icon: Bot, level: 70, description: "Process automation using tools like UiPath." },
  { name: "Data Processing", icon: BarChartBig, level: 85, description: "Data manipulation and analysis with Pandas." },
  { name: "GUI Automation", icon: Settings, level: 70, description: "Automating desktop workflows with Pywinauto." },
];

export const projectsData: Project[] = [
  {
    title: "SmartFile AI",
    description: "An intelligent file management system leveraging Flask for the backend, Selenium for web automation tasks, and Ollama for local AI model integration to categorize and process files.",
    technologies: ["Flask", "Selenium", "Ollama", "Python"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "file management",
    githubLink: "https://github.com/syedvahith/smartfile-ai",
  },
  {
    title: "Automated Data Processing Pipeline",
    description: "Developed a robust pipeline using Pandas for complex data manipulation and transformation, integrated with UiPath for end-to-end Robotic Process Automation, significantly streamlining data workflows.",
    technologies: ["Pandas", "UiPath", "Python", "RPA"],
    imageUrl: "https://placehold.co/600x401.png",
    imageHint: "data pipeline",
    githubLink: "https://github.com/syedvahith/data-pipeline",
  },
  {
    title: "Desktop Application Automation",
    description: "Leveraged Pywinauto to automate interactions with legacy desktop applications, creating scripts to improve efficiency, reduce manual error, and integrate them into larger automated systems.",
    technologies: ["Pywinauto", "Python", "Desktop Automation"],
    imageUrl: "https://placehold.co/601x400.png",
    imageHint: "desktop automation",
    githubLink: "https://github.com/syedvahith/desktop-automation",
  },
  {
    title: "AI-Powered Content Summarizer",
    description: "Built a content summarization tool using Mistral and LLaMA3 models, integrated via a React frontend and Flask API, to provide concise summaries of long texts.",
    technologies: ["React", "Flask", "Mistral", "LLaMA3"],
    imageUrl: "https://placehold.co/601x401.png",
    imageHint: "text summarization",
    githubLink: "https://github.com/syedvahith/content-summarizer",
  },
];

export const professionalSummary = {
  name: "Syed Vahith",
  title: "Python Automation & AI Engineer",
  experienceYears: 1.4,
  skills: ["Python", "Selenium", "Flask", "Ollama", "Pandas", "UiPath", "Pywinauto", "React", "Mistral", "LLaMA3"]
};
