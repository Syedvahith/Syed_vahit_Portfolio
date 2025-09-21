import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, FileText, BookOpenCheck } from "lucide-react";

const awards = [
  {
    title: "HEPL Spot Award – Splendid Performer",
    issuer: "Hemas Enterprise Pvt Ltd",
    date: "Aug 2025",
    icon: <Award className="h-8 w-8 text-primary" />,
    image: "/Sport_award.jpeg",
    description: "Recognized as a 'Splendid Performer On Time' for outstanding contributions and timely project delivery.",
  },
  {
    title: "Ethical Hacking Through Programming",
    issuer: "SNA Academy",
    icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
    image: "/Hack_certificate.png",
    description: "Certified in foundational and advanced techniques for ethical hacking using programming.",
  },
  {
    title: "Research Publication: IJSART",
    issuer: "Paper ID: IJSARTV9I360245",
    icon: <FileText className="h-8 w-8 text-primary" />,
    image: "/Paper_published_certificate.jpeg",
    description: "Published research contributing to the academic body of knowledge in the field.",
    link: "https://ijsart.com/an-fully-automated-ai-based-trading-system-60245"
  },
];

export function AwardsSection() {
  return (
    <section id="awards" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Awards & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition of my dedication, skills, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card 
              key={award.title} 
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {award.image && (
                <CardHeader className="p-0 relative">
                  <div className="aspect-video overflow-hidden group">
                    <Image
                      src={award.image}
                      alt={award.title}
                      width={600}
                      height={400}
                      className="object-contain w-full h-full p-4"
                      data-ai-hint="award certificate"
                    />
                  </div>
                </CardHeader>
              )}
              <CardContent className="p-6 flex-grow">
                <div className="flex items-start gap-4">
                  {award.icon}
                  <div className="flex-1">
                    <CardTitle className="text-xl font-headline mb-1">{award.title}</CardTitle>
                    <CardDescription className="text-primary font-medium mb-2">{award.issuer}</CardDescription>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              {award.link && (
                 <div className="p-6 pt-0">
                    <Link href={award.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                      View Publication
                    </Link>
                 </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
