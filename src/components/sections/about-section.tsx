import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Zap, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my professional journey and passions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Image
              src="/About.png"
              alt="Syed Vahith working on a project"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="developer coding"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary">
              Python Automation & AI Engineer
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              With 1.5 years of dedicated experience, I specialize in crafting intelligent automation solutions and integrating AI to enhance efficiency and drive innovation. My work primarily involves Python, where I leverage its powerful ecosystem to build robust applications and streamline complex workflows.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I am deeply passionate about the intersection of software engineering and artificial intelligence, constantly exploring new tools and techniques to solve real-world problems. My focus is on delivering results-driven outcomes, whether it's through developing sophisticated data processing pipelines, automating intricate UI interactions, or deploying cutting-edge language models.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="bg-card/70">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Experience</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.5 Years</div>
                  <p className="text-xs text-muted-foreground">
                    in Automation & AI
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/70">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Core Focus</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Efficiency</div>
                  <p className="text-xs text-muted-foreground">
                    through intelligent solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
