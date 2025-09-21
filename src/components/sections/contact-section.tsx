import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:syedvahith21@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  syedvahith21@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+918489568126" className="text-foreground hover:text-primary transition-colors">
                  +91 84895 68126
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-6 w-6 text-primary" />
                <Link href="https://linkedin.com/in/syedvahith" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  linkedin.com/in/syedvahith
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-6 w-6 text-primary" />
                <Link href="https://github.com/syedvahith" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  github.com/syedvahith
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-headline">Let's Collaborate</CardTitle>
                <CardDescription>Interested in working together or have a question?</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-6">
                  Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you. My expertise in Python, automation, and AI can bring significant value to your initiatives.
                </p>
                <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="mailto:syedvahith21@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> Send an Email
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-headline">My Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  For a detailed overview of my skills and experience, download my resume.
                </p>
                <Button variant="outline" size="lg" asChild className="w-full text-foreground border-primary hover:bg-primary/10 hover:text-primary">
                  <a href="/resume.pdf" download="Syed_Vahith_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" /> Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
