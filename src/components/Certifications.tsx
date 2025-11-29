import React from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "React & Modern JavaScript",
    issuer: "Online Learning Platform",
    date: "2024",
    link: "#",
    skills: ["React.js", "ES6+", "Hooks"]
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Self-Paced Course",
    date: "2023",
    link: "#",
    skills: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    issuer: "Developer Community",
    date: "2024",
    link: "#",
    skills: ["TypeScript", "Type Safety", "Modern JS"]
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

const CertificationCard = React.memo<CertificationCardProps>(({ cert, index }) => {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-surface border border-borderColor p-6 flex flex-col justify-between hover:border-primary transition-all duration-300 min-h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`View ${cert.title} certification from ${cert.issuer}`}
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-surfaceHighlight border border-borderColor text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
            <Award size={24} aria-hidden="true" />
          </div>
          <ExternalLink 
            size={16} 
            className="text-textSecondary group-hover:text-primary transition-colors" 
            aria-hidden="true"
          />
        </div>

        <h3 className="text-lg font-bold text-textPrimary mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-sm font-mono text-textSecondary">
          {cert.issuer} • {cert.date}
        </p>
      </div>

      <div className="relative z-10 mt-4">
        <div className="flex flex-wrap gap-2" role="list" aria-label="Skills covered">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="text-[10px] uppercase font-bold px-2 py-1 bg-surfaceHighlight text-textSecondary border border-borderColor group-hover:border-primary/30 transition-colors"
              role="listitem"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-primary transition-all duration-300" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent group-hover:border-primary transition-all duration-300" />
    </motion.a>
  );
});

CertificationCard.displayName = 'CertificationCard';

const Certifications: React.FC = () => {
  return (
    <section
      className="w-full py-20 bg-background border-t border-borderColor"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-end justify-between mb-12">
          <div className="border-l-2 border-primary pl-4">
            <h2
              id="certifications-heading"
              className="text-3xl font-bold text-textPrimary tracking-tight"
            >
              CERTIFICATIONS
            </h2>
            <p className="text-textSecondary font-mono text-sm mt-1">
              CONTINUOUS LEARNING
            </p>
          </div>
          <div
            className="hidden md:block h-px flex-1 bg-borderColor ml-8 mb-2"
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;