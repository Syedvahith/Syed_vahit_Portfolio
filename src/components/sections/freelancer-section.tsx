import Link from "next/link";
import { freelancePlatforms } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FreelancerSection() {
  return (
    <section id="freelance" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Available for Hire</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring my expertise to your project. Find me on your favorite platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {freelancePlatforms.map((platform, index) => (
            <Card 
              key={platform.name}
              className="flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-muted rounded-lg">
                  <platform.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-headline">{platform.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                  {platform.description}
                </CardDescription>
              </CardContent>
              <div className="p-6 mt-auto">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                    View My Profile
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
