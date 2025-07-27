import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects demonstrating my capabilities and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={project.title} 
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0 relative">
                <div className="aspect-video overflow-hidden group">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.imageHint || "technology project"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl font-headline mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-medium">{tech}</Badge>
                  ))}
                </div>
                <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 bg-muted/30 dark:bg-muted/10 mt-auto border-t">
                <div className="flex w-full justify-start space-x-3">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild className="hover:bg-accent/10 hover:text-accent-foreground hover:border-accent">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                  {project.liveLink && (
                     <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
