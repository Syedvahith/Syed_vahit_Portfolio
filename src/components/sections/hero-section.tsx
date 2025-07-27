import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="bg-background text-foreground relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Banner Image */}
        <div className="relative h-48 md:h-64 lg:h-80 w-full rounded-xl overflow-hidden shadow-lg animate-fade-in-up mt-12">
           <Image
            src="https://placehold.co/1200x400.png"
            alt="Syed Vahith - Professional Banner"
            layout="fill"
            objectFit="cover"
            className="bg-primary/10"
            data-ai-hint="abstract technology banner"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

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
