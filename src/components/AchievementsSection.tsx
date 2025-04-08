
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

interface AchievementProps {
  title: string;
  organization: string;
  description: string;
  technologies: string[];
}

const achievements: AchievementProps[] = [
  {
    title: "Runner-up, Devils Invent Hackathon",
    organization: "Los Alamos National Laboratory (LANL)",
    description: "Automated MiniFlow Ion Cell unpacking system with Dobot Magician Lite, AI, Python and pydobot for improved efficiency.",
    technologies: ["Python", "AI", "Robotics"]
  },
  {
    title: "Aerospace Devils Invent Hackathon",
    organization: "Honeywell Aerospace",
    description: "Built a supply chain marketplace using React, TailwindCSS, blockchain Solidity, smart contract for Honeywell aerospace mechanical parts with integration of blockchain keeping track of materials and to keep the vendors accountable if any delay.",
    technologies: ["React", "TailwindCSS", "Blockchain", "Solidity", "Smart Contract"]
  },
  {
    title: "Visual AI Hackathon Winner",
    organization: "School of Arts, Media and Engineering, ASU",
    description: "Led the development of an OCR-based AI model for food safety using Python, OCR, and Pytesseract.",
    technologies: ["Python", "OCR", "Pytesseract", "AI"]
  },
  {
    title: "Endstar Game Development Hackathon",
    organization: "ASU Herberger Institute for Design and the Arts",
    description: "Crafted a multi-level interactive game with LUA scripting, AI, Decision Trees and UI/UX Design.",
    technologies: ["LUA", "AI", "Decision Trees", "UI/UX"]
  }
];

export function AchievementsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-20 px-4 bg-muted/30"
    >
      <div className="container max-w-5xl">
        <h2 className="section-heading">Achievements & Awards</h2>
        <p className="section-subheading">
          Recognition for innovation and technical excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              achievement={achievement} 
              index={index} 
              isVisible={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AchievementCardProps {
  achievement: AchievementProps;
  index: number;
  isVisible: boolean;
}

function AchievementCard({ achievement, index, isVisible }: AchievementCardProps) {
  return (
    <div 
      className={cn(
        "achievement-card opacity-0",
        isVisible && `animate-fade-in-delay-${index + 1 <= 4 ? index + 1 : 4}`
      )}
      style={{ 
        animationDelay: index > 3 ? `${(index + 1) * 0.2}s` : undefined,
        animationFillMode: 'forwards'
      }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Trophy className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{achievement.title}</h3>
          <p className="text-primary font-medium">{achievement.organization}</p>
          <p className="text-muted-foreground mt-2">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
