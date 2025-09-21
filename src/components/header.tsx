"use client"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Briefcase, Code, MessageSquare, UserCircle, Download, ExternalLink, Award } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const navItems = [
  { href: "#about", label: "About", icon: <UserCircle className="h-5 w-5" /> },
  { href: "#freelance", label: "Hire Me", icon: <ExternalLink className="h-5 w-5" /> },
  { href: "#skills", label: "Skills", icon: <Code className="h-5 w-5" /> },
  { href: "#projects", label: "Projects", icon: <Briefcase className="h-5 w-5" /> },
  { href: "#awards", label: "Awards", icon: <Award className="h-5 w-5" /> },
  { href: "#contact", label: "Contact", icon: <MessageSquare className="h-5 w-5" /> },
];

export function Header() {
  const isMobile = useIsMobile();

  const desktopNav = (
    <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
      {navItems.map((item) => (
        <Button key={item.label} variant="ghost" asChild className="text-sm lg:text-base hover:text-primary transition-colors">
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
      <ThemeToggle />
    </nav>
  );

  const mobileNav = (
    <div className="md:hidden flex items-center">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] p-6 bg-background">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-headline font-bold text-foreground mb-4">
              Syed Vahith
            </Link>
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild className="w-full justify-start text-lg py-3 hover:bg-accent hover:text-accent-foreground">
                <Link href={item.href} className="flex items-center space-x-3">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
             <Button variant="default" asChild className="w-full text-lg py-3 bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              <a href="/resume.pdf" download="Syed_Vahith_Resume.pdf" className="flex items-center justify-center space-x-3">
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl md:text-2xl font-headline font-bold text-foreground hover:text-primary transition-colors">
          Syed Vahith
        </Link>
        {isMobile ? mobileNav : desktopNav}
      </div>
    </header>
  );
}
