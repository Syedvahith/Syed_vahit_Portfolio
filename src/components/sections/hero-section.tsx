"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Github, Linkedin, Code2, Brain, MonitorPlay, Network, Pyramid, Bot, BarChartBig, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const skillsIcons = [
  { icon: <Code2 size={48} />, name: 'Python' },
  { icon: <Brain size={48} />, name: 'AI & ML' },
  { icon: <MonitorPlay size={48} />, name: 'Web Automation' },
  { icon: <Network size={48} />, name: 'n8n' },
  { icon: <Pyramid size={48} />, name: 'SAP' },
  { icon: <Bot size={48} />, name: 'RPA' },
  { icon: <BarChartBig size={48} />, name: 'Pandas' },
  { icon: <Settings size={48} />, name: 'Pywinauto' },
  { icon: <Code2 size={48} />, name: 'Python' }, // Duplicate for seamless loop
  { icon: <Brain size={48} />, name: 'AI & ML' }, // Duplicate for seamless loop
  { icon: <MonitorPlay size={48} />, name: 'Web Automation' }, // Duplicate for seamless loop
  { icon: <Network size={48} />, name: 'n8n' }, // Duplicate for seamless loop
];

const SkillBanner = () => {
  return (
    <div className="relative h-48 md:h-64 lg:h-80 w-full rounded-xl overflow-hidden shadow-lg animate-fade-in-up mt-12 bg-primary/5 dark:bg-primary/10 border border-primary/10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-full h-full flex items-center overflow-hidden">
          <div className="absolute left-0 flex items-center animate-scroll-x" style={{ animationDuration: '40s' }}>
            {skillsIcons.map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-40 mx-4 flex items-center justify-center bg-background/70 dark:bg-card/70 rounded-2xl shadow-md backdrop-blur-sm border border-border/20">
                <div className="text-center text-primary space-y-2">
                   {React.cloneElement(skill.icon, { className: 'mx-auto' })}
                   <p className="text-sm font-medium text-foreground">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
           <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x linear infinite;
        }
      `}</style>
    </div>
  );
};


export function HeroSection() {
  return (
    <section id="hero" className="bg-background text-foreground relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <SkillBanner />

        <div className="relative px-4">
          {/* Content */}
          <div className="pt-12 pb-16 md:pb-24 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <p className="text-lg md:text-xl text-primary mb-2 font-medium">
              Freelance Python Automation & AI Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Syed Vahith
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I transform complex problems into elegant, automated solutions. Let's collaborate to bring your ideas to life and boost your operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform transform hover:scale-105">
                <Link href="#contact">
                  Get in Touch <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-foreground border-border hover:bg-accent/10 hover:text-primary shadow-md transition-transform transform hover:scale-105">
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" /> View My Work
                </Link>
              </Button>
            </div>
             <div className="mt-10 flex justify-center space-x-6">
              <Link href="https://github.com/syedvahith" target="_blank" rel="noopener noreferrer" aria-label="Syed Vahith's GitHub profile">
                <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com/in/syedvahith" target="_blank" rel="noopener noreferrer" aria-label="Syed Vahith's LinkedIn profile">
                <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
