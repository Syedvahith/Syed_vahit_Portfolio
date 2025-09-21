import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Zap } from "lucide-react";

function calculateExperience(startDate: Date): string {
  // Set to a fixed date to ensure consistent output for this interaction.
  const fixedToday = new Date('2024-08-20');
  const diffInMonths = (fixedToday.getFullYear() - startDate.getFullYear()) * 12 + (fixedToday.getMonth() - startDate.getMonth());
  const years = diffInMonths / 12;
  return years.toFixed(1);
}

export function AboutSection() {
  const experienceStartDate = new Date('2023-01-01');
  const experienceYears = calculateExperience(experienceStartDate);

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Me</h2>
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
              AI & Automation Engineer
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
               AI Automation Engineer with {experienceYears}+ years of experience in Python, RPA, SAP automation, e-commerce web scraping, and AI integration. I specialize in mechanizing workflows and competitor analysis, reducing manual effort by 85% and achieving 80% operational cost savings.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Skilled in LLM integration, web/data scraping, and building AI-driven intelligent systems. I am passionate about delivering measurable business impact through computerized and systematized automation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="bg-card/70">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Experience</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{experienceYears}+ Years</div>
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
                  <div className="text-2xl font-bold">Business Impact</div>
                  <p className="text-xs text-muted-foreground">
                    through intelligent automation
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