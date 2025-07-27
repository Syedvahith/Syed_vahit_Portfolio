export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Syed Vahith. All rights reserved.</p>
        {/* <p className="mt-1">Built with Next.js and Tailwind CSS.</p> */}
      </div>
    </footer>
  );
}
