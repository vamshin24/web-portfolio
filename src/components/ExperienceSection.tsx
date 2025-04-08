
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ExperienceProps {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceProps[] = [
  {
    company: "Addverb Technologies Ltd.",
    title: "Graduate Engineer Trainee - Robotics Software Engineer",
    period: "Aug 2022 - Aug 2023",
    location: "Noida, India",
    description: [
      "Built warehouse automation solution integrating AMRs, ASRs, WCS in Java, Spring Boot, MSSQL, enhancing inventory tracking, task scheduling and robot fleet coordination while efficiently processing 10K+ orders daily.",
      "Designed a DWS system with Microservices and REST APIs, increasing inbound workflow automation by 80%.",
      "Integrated TCP/IP and PLC programming, reducing signal transmission latency by 20% for robot communication.",
      "Optimized messaging with Redis, Kafka, RabbitMQ, improving coordination by 15% between Zippy and SortIE.",
      "Architected Springboot, Maven for inbound palletization for Addverb, boosting warehouse efficiency by 40%."
    ],
    technologies: ["Java", "Spring Boot", "MSSQL", "REST APIs", "Python", "Django", "Redis"]
  },
  {
    company: "OpenNets",
    title: "Full-Stack Developer Intern",
    period: "May 2021 - Jul 2021",
    location: "Bengaluru, India",
    description: [
      "Created a network simulator with Mininet, Node.js, and MongoDB to support 10+ network topologies, enabling traffic testing and performance evaluation under various configurations, cutting down configuration errors by 30%.",
      "Utilized AngularJS to develop UI responsible for editing topology settings, contributing to 30% of overall UI coverage.",
      "Collaborated with engineers using Git and Agile methods to deliver iterative improvements aligned with user needs."
    ],
    technologies: ["Node.js", "MongoDB", "AngularJS", "Git", "Agile", "Network Simulation"]
  }
];

export function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4"
    >
      <div className="container max-w-5xl">
        <h2 className="section-heading">Work Experience</h2>
        <p className="section-subheading">
          Professional experience in robotics software engineering and development
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index} 
              isVisible={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceProps;
  index: number;
  isVisible: boolean;
}

function ExperienceCard({ experience, index, isVisible }: ExperienceCardProps) {
  return (
    <div 
      className={cn(
        "experience-card opacity-0",
        isVisible && `animate-fade-in-delay-${index + 1 <= 4 ? index + 1 : 4}`
      )}
      style={{ 
        animationDelay: index > 3 ? `${(index + 1) * 0.2}s` : undefined,
        animationFillMode: 'forwards'
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <p className="text-primary font-medium">{experience.company}</p>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-muted-foreground">{experience.period}</p>
          <p className="text-muted-foreground">{experience.location}</p>
        </div>
      </div>
      
      <ul className="list-disc pl-5 mt-3 space-y-2 text-muted-foreground">
        {experience.description.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.technologies.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}
