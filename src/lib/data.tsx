import React from 'react';
import { LucideIcon, Code2, Bot, Network, Settings, Brain, BarChartBig, MonitorPlay, Pyramid, Database, GitBranch, LayoutTemplate, PenTool, Server, FileJson, DraftingCompass, Wind, Workflow, Cpu, Rocket, TestTube2, Palette, ShieldCheck, ProjectorScreen, Users } from "lucide-react";

// --- FREELANCER PLATFORM ICONS ---

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
  name:string;
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
  category: string;
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
    url: "https://www.fiverr.com/syedvahith",
    icon: FiverrIcon,
    description: "Offering specialized gigs for Python automation, web scraping, and AI integration tasks.",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01e912b7a9de557452",
    icon: UpworkIcon,
    description: "Available for hourly or fixed-price projects, delivering robust and scalable solutions.",
  },
];

export const skillsData: Skill[] = [
    { name: "Python, SQL", icon: Code2, description: "Core programming and database languages.", category: "Languages" },
    { name: "Flask, Django, FastAPI", icon: Server, description: "Building robust backend APIs and web services.", category: "Frameworks/Libraries" },
    { name: "Pandas, Matplotlib", icon: BarChartBig, description: "Data analysis, manipulation, and visualization.", category: "Frameworks/Libraries" },
    { name: "Selenium, Pywinauto", icon: MonitorPlay, description: "Web and desktop GUI automation.", category: "Frameworks/Libraries" },
    { name: "LLMs (Mistral, LLaMA3)", icon: Brain, description: "Integrating large language models via Ollama.", category: "AI/ML" },
    { name: "Hugging Face, NLP", icon: Cpu, description: "Leveraging pre-trained models for NLP tasks.", category: "AI/ML" },
    { name: "UiPath, RPA", icon: Bot, description: "Enterprise-grade Robotic Process Automation.", category: "Automation/RPA" },
    { name: "n8n, Prefect", icon: Workflow, description: "Orchestrating complex data and automation workflows.", category: "Automation/RPA" },
    { name: "SAP GUI Scripting", icon: Pyramid, description: "Automating tasks within SAP environments.", category: "Automation/RPA" },
    { name: "React.js", icon: LayoutTemplate, description: "Building modern UIs and interacting with databases.", category: "Web/Databases" },
    { name: "MySQL, SQLite, Firebase", icon: Database, description: "Database management and integration.", category: "Web/Databases" },
    { name: "Git, GitHub", icon: GitBranch, description: "Version control for collaborative development.", category: "Tools" },
    { name: "Figma, Penpot, VS Code", icon: Palette, description: "Tools for design, prototyping, and development.", category: "Tools" },
    { name: "Docker", icon: FileJson, description: "Containerization for consistent deployment.", category: "Tools" },
    { name: "Agile, Project Management", icon: ProjectorScreen, description: "Methodologies for efficient project delivery.", category: "Professional" },
    { name: "Mentorship", icon: Users, description: "Guiding junior developers in automation and AI.", category: "Professional" },
];


export const projectsData: Project[] = [
  {
    title: "SmartFile AI – AI-Powered File Summarization",
    description: "Mechanized CSV ingestion, reducing data collection by 90%. Integrated LLMs (Mistral via Ollama) for real-time structured/unstructured data summarization. Generated charts with Matplotlib and interactive dashboard for reporting.",
    technologies: ["Python", "Flask", "Ollama", "Pandas", "Selenium"],
    imageUrl: "https://picsum.photos/seed/ai-files/600/400",
    imageHint: "AI dashboard data",
    githubLink: "https://github.com/syedvahith/smartfile-ai",
  },
  {
    title: "E-commerce Web Scraping Automation",
    description: "Systematized scraping of product, pricing, discount, and inventory data from multiple Indian e-commerce platforms. Enhanced data pipelines to clean, normalize, and analyze datasets for rapid pricing strategy decisions. Computerized report generation and alerts, reducing manual monitoring by 90%.",
    technologies: ["Python", "Selenium", "Playwright", "Pandas"],
    imageUrl: "https://picsum.photos/seed/web-scraping/600/400",
    imageHint: "data pipeline code",
    githubLink: "https://github.com/syedvahith/data-pipeline",
  },
  {
    title: "Business Process Automation Suite",
    description: "Mechanized end-to-end workflows, eliminating 15+ hours of manual work weekly. Enhanced in-house scripts replacing licensed software, cutting expenses by 75%.",
    technologies: ["Python", "Selenium", "Pywinauto"],
    imageUrl: "https://picsum.photos/seed/process-automation/600/400",
    imageHint: "business process diagram",
    githubLink: "https://github.com/syedvahith/desktop-automation",
  },
];

export const professionalSummary = {
  name: "Syed Vahith",
  title: "Python Automation & AI Engineer",
  skills: ["Python", "Selenium", "Flask", "Ollama", "Pandas", "UiPath", "Pywinauto", "React", "Mistral", "LLaMA3", "n8n"]
};
