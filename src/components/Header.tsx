
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5",
        className
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary">
          Vamshi Narayana Babu
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#experience" 
            className="font-medium hover:text-primary transition-colors"
          >
            Experience
          </a>
          <a 
            href="#education" 
            className="font-medium hover:text-primary transition-colors"
          >
            Education
          </a>
          <a 
            href="#projects" 
            className="font-medium hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a 
            href="#achievements" 
            className="font-medium hover:text-primary transition-colors"
          >
            Achievements
          </a>
          <a 
            href="#contact" 
            className="font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md"
      >
        <div className="container py-4 flex flex-col space-y-4">
          <a 
            href="#experience" 
            className="font-medium hover:text-primary transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
          >
            Experience
          </a>
          <a 
            href="#education" 
            className="font-medium hover:text-primary transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
          >
            Education
          </a>
          <a 
            href="#projects" 
            className="font-medium hover:text-primary transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
          >
            Projects
          </a>
          <a 
            href="#achievements" 
            className="font-medium hover:text-primary transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
          >
            Achievements
          </a>
          <a 
            href="#contact" 
            className="font-medium hover:text-primary transition-colors"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
