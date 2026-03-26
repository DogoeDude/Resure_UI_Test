import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/Circular_Logo.png"
                alt="ReSURE Logo"
                className="relative h-12 w-12 lg:h-16 lg:w-16 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-primary tracking-tight leading-none group-hover:text-accent transition-colors duration-300">
                ReSURE
              </span>
              <span className="text-[10px] lg:text-xs font-medium text-muted-foreground tracking-widest uppercase">
                Global Regulatory Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {[
              { path: "#", label: "Home" },
              { path: "#expertise", label: "Expertise" },
              { path: "#ai", label: "AI Solutions" },
              { path: "#process", label: "Process" },
              { path: "#credibility", label: "About" }
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="relative text-base font-medium transition-colors hover:text-primary py-2 text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="accent" className="rounded-full border-2 border-accent text-accent-foreground px-5 h-10 text-xs font-bold hover:scale-105 transition-all duration-300 shadow-md shadow-accent/20 active:scale-95">
              <a href="#contact">
                <Mail className="h-3.5 w-3.5 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left flex items-center gap-2">
                    <img src="/Circular_Logo.png" alt="Logo" className="h-8 w-8" />
                    <span className="font-bold text-primary">ReSURE</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {[
                    { path: "#", label: "Home" },
                    { path: "#expertise", label: "Expertise" },
                    { path: "#ai", label: "AI Solutions" },
                    { path: "#process", label: "Process" },
                    { path: "#credibility", label: "About" }
                  ].map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary text-muted-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="h-px bg-border my-2" />
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 text-lg font-medium bg-accent text-accent-foreground p-3 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Contact Us
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
