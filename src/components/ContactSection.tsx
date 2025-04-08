
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 bg-primary/5"
    >
      <div className="container max-w-4xl text-center">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="mailto:vamshi24@asu.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "w-full md:w-auto opacity-0",
              inView && "animate-fade-in-delay-1"
            )}
            style={{ animationFillMode: 'forwards' }}
          >
            <Button variant="outline" className="w-full md:w-auto h-auto py-6 flex flex-col items-center gap-3">
              <Mail className="h-8 w-8" />
              <span className="text-lg font-medium">Email</span>
            </Button>
          </a>
          
          <a 
            href="https://linkedin.com/in/vamshin24/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "w-full md:w-auto opacity-0",
              inView && "animate-fade-in-delay-2"
            )}
            style={{ animationFillMode: 'forwards' }}
          >
            <Button variant="outline" className="w-full md:w-auto h-auto py-6 flex flex-col items-center gap-3">
              <Linkedin className="h-8 w-8" />
              <span className="text-lg font-medium">LinkedIn</span>
            </Button>
          </a>
          
          <a 
            href="https://github.com/vamshin24" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "w-full md:w-auto opacity-0",
              inView && "animate-fade-in-delay-3"
            )}
            style={{ animationFillMode: 'forwards' }}
          >
            <Button variant="outline" className="w-full md:w-auto h-auto py-6 flex flex-col items-center gap-3">
              <Github className="h-8 w-8" />
              <span className="text-lg font-medium">GitHub</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
