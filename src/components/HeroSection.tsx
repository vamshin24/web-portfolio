
import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [showBinaryCodes, setShowBinaryCodes] = useState(false);

  useEffect(() => {
    // Show the scroll hint after a delay
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 2500);

    // Show binary codes with a slight delay
    const binaryTimer = setTimeout(() => {
      setShowBinaryCodes(true);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(binaryTimer);
    };
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden"
    >
      {/* Floating binary codes in background */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${showBinaryCodes ? 'opacity-10' : 'opacity-0'}`}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-primary font-mono text-sm md:text-lg select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.7,
              textShadow: '0 0 5px currentColor'
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      
      <div className="container max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Hi, I'm <span className="text-primary">Vamshi Narayana Babu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground animate-fade-in-delay-1">
              Robotics Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-in-delay-2">
              Specialized in developing innovative robotics software solutions with expertise in warehouse automation, 
              autonomous navigation, and AI-driven systems. Currently pursuing a Master's in Robotics and Autonomous Systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <a href="mailto:vamshi24@asu.edu" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2 rounded-full" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/vamshin24/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2 rounded-full" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://github.com/vamshin24" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2 rounded-full" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="flex items-center gap-2 rounded-full">
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </Button>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center opacity-0 animate-fade-in-delay-4">
            <div className="relative w-full h-[320px] md:h-[420px] perspective-500">
              {/* Floating binary matrix effect */}
              <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
                <div className="binary-matrix h-full w-full">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="text-line text-primary/20 font-mono text-xs md:text-sm whitespace-nowrap overflow-hidden"
                      style={{ 
                        animationDuration: `${15 + Math.random() * 10}s`,
                        animationDelay: `${Math.random() * -15}s`
                      }}
                    >
                      {Array.from({ length: 50 }).map((_, j) => (
                        <span 
                          key={j} 
                          className="inline-block mx-1"
                          style={{
                            opacity: Math.random() > 0.5 ? 0.9 : 0.3,
                            animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        >
                          {Math.round(Math.random())}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full transform rotate-y-10">
                {/* Background blob */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90%] h-[90%] bg-primary/5 rounded-full filter blur-2xl animate-pulse"></div>
                </div>
                
                {/* Main image */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                  <img 
                    src="/lovable-uploads/66e12246-1d64-447a-b6d7-2c619c515f85.png"
                    alt="Robot and human collaboration with binary code" 
                    className="w-4/5 h-auto object-contain z-10 animate-float drop-shadow-lg"
                  />
                </div>
                
                {/* Floating binary digits around the image */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={`floating-binary-${i}`}
                    className="absolute text-primary font-mono font-bold z-20"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      fontSize: `${Math.random() > 0.7 ? '1.5rem' : '0.8rem'}`,
                      opacity: Math.random() > 0.5 ? 0.8 : 0.4,
                      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      textShadow: '0 0 3px currentColor'
                    }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </div>
                ))}
                
                {/* Tech keywords floating around */}
                <div className="absolute top-[10%] right-[15%] bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary font-mono animate-float" style={{ animationDelay: '0.5s' }}>
                  ROS2
                </div>
                <div className="absolute bottom-[20%] left-[15%] bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary font-mono animate-float" style={{ animationDelay: '1.2s' }}>
                  Python
                </div>
                <div className="absolute top-[35%] left-[10%] bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary font-mono animate-float" style={{ animationDelay: '0.8s' }}>
                  OpenCV
                </div>
                <div className="absolute bottom-[30%] right-[10%] bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-primary font-mono animate-float" style={{ animationDelay: '1.5s' }}>
                  Robotics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Animation */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center transition-opacity duration-500 cursor-pointer ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}
        onClick={scrollToExperience}
      >
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 mb-3 shadow-lg max-w-xs animate-fade-in">
          <p className="text-sm font-medium mb-1">Explore My Work</p>
          <p className="text-xs text-muted-foreground">Scroll down to see my experience and projects</p>
        </div>
        <div className="animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
}
