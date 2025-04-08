
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: ProjectProps[] = [
  {
    title: "UAV Autonomous Landing & Color-Based Navigation",
    period: "Jan 2025 - Present",
    description: "Designed Motor mixing Algorithm utilizing OpenCV, Python, Gazebo, MATLAB for motion control, increasing stability, adaptive control, precision and dynamic path optimization achieving 97% landing accuracy in 50+ test flights.",
    technologies: ["Python", "OpenCV", "Gazebo", "MATLAB"],
    image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Path Planning for Maze Solving with MyCobot Pro 600",
    period: "Aug 2024 - Nov 2024",
    description: "Programmed a robot for autonomous navigation, with computer vision for path optimization, incorporating inverse kinematics with Python, OpenCV, MATLAB Simulink, ROS2, reducing maze-solving time by 40%.",
    technologies: ["Python", "OpenCV", "MATLAB Simulink", "ROS2"],
    image: "https://images.unsplash.com/photo-1581092160607-ee23e93fac9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Task Management Application",
    period: "Jan 2024 - Mar 2024",
    description: "Built a personalized Task Management app with React, JavaScript, Node.js, and PostgreSQL, featuring secure authentication, role-based access, and real-time task updates, enhancing workflow efficiency and task organization.",
    technologies: ["React", "JavaScript", "Node.js", "PostgreSQL", "Authentication"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  },
  {
    title: "WhatsApp Group Chat Analysis",
    period: "Oct 2023 - Dec 2023",
    description: "Conducted data analysis on WhatsApp group chats using Python, Pandas, NumPy, and regex, processing 10,000+ messages to extract insights such as message counts, media usage, and link frequencies with 98% parsing accuracy.",
    technologies: ["Python", "Pandas", "NumPy", "Regex", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Performance Enhancement of Underwater Communication",
    period: "Jan 2022 - May 2022",
    description: "Developed a deep learning model with PyTorch, MATLAB, NumPy, reaching 92% accuracy and improving classification reliability, feature extraction, signal processing efficiency, and decision-making accuracy by 30%.",
    technologies: ["PyTorch", "MATLAB", "NumPy", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Image Restoration of Natural Images",
    period: "Aug 2021 - Nov 2021",
    description: "Implemented a PyTorch-based CNN encoder-decoder network with ORSNet to restore rain-affected images, achieving 90% restoration accuracy on a dataset of 10,000+ natural images with enhanced texture preservation.",
    technologies: ["PyTorch", "CNN", "ORSNet", "Image Processing"],
    image: "https://images.unsplash.com/photo-1581092335878-2d9a0ab72c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4"
    >
      <div className="container max-w-6xl">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading">
          Showcasing innovative robotics and software projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              isVisible={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
  isVisible: boolean;
}

function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  return (
    <div 
      className={cn(
        "project-card flex flex-col h-full opacity-0",
        isVisible && `animate-fade-in-delay-${index + 1 <= 4 ? index + 1 : 4}`
      )}
      style={{ 
        animationDelay: index > 3 ? `${(index + 1) * 0.15}s` : undefined,
        animationFillMode: 'forwards'
      }}
    >
      <div className="h-48 rounded-t-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="flex-1 flex flex-col p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{project.period}</span>
        </div>
        
        <p className="text-muted-foreground text-sm flex-1 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
