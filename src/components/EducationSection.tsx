
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface EducationProps {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  courses: string[];
}

const education: EducationProps[] = [
  {
    institution: "Arizona State University",
    degree: "Master's in Robotics and Autonomous Systems",
    period: "Expected Graduation: May 2026",
    location: "AZ, USA",
    gpa: "3.67/4.0",
    courses: [
      "Perception in Robotics",
      "Multi-Robot Systems",
      "Mechatronics",
      "Kinematics and dynamics",
      "Operating systems"
    ]
  },
  {
    institution: "National Institute of Technology Karnataka",
    degree: "Bachelor's, Electronics and Communication Engineering",
    period: "Graduated: May 2022",
    location: "Karnataka, India",
    courses: [
      "Control systems",
      "Microprocessors",
      "Image and Video Processing",
      "Internet of Things",
      "C/C++"
    ]
  }
];

export function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 bg-muted/30"
    >
      <div className="container max-w-5xl">
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading">
          Academic background in robotics and engineering
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <EducationCard 
              key={index} 
              education={edu} 
              index={index} 
              isVisible={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  education: EducationProps;
  index: number;
  isVisible: boolean;
}

function EducationCard({ education, index, isVisible }: EducationCardProps) {
  return (
    <div 
      className={cn(
        "education-card opacity-0",
        isVisible && `animate-fade-in-delay-${index + 1 <= 4 ? index + 1 : 4}`
      )}
      style={{ 
        animationDelay: index > 3 ? `${(index + 1) * 0.2}s` : undefined,
        animationFillMode: 'forwards'
      }}
    >
      <h3 className="text-xl font-bold">{education.institution}</h3>
      <p className="text-primary font-medium">{education.degree}</p>
      <p className="text-muted-foreground">{education.period}</p>
      <p className="text-muted-foreground">{education.location}</p>
      {education.gpa && (
        <p className="font-medium mt-2">GPA: {education.gpa}</p>
      )}
      
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Key Courses:</h4>
        <p className="text-muted-foreground">{education.courses.join(", ")}</p>
      </div>
    </div>
  );
}
