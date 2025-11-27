
import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2023",
    link: "https://coursera.org",
    skills: ["React", "UX/UI", "JavaScript"]
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "https://aws.amazon.com",
    skills: ["Cloud Security", "AWS Core Services"]
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "Udemy / Angela Yu",
    date: "2022",
    link: "https://udemy.com",
    skills: ["Node.js", "Express", "MongoDB"]
  }
];

const Certifications: React.FC = () => {
  return (
    <section className="w-full py-20 bg-background border-t border-borderColor">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
           <div className="border-l-2 border-primary pl-4">
            <h2 className="text-3xl font-bold text-textPrimary tracking-tight">CERTIFICATIONS</h2>
            <p className="text-textSecondary font-mono text-sm mt-1">VALIDATIONS & AWARDS</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-borderColor ml-8 mb-2"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-surface border border-borderColor p-6 flex flex-col justify-between hover:border-primary transition-all duration-300 h-[220px]"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                   <div className="p-2 bg-surfaceHighlight border border-borderColor rounded-none text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                     <Award size={24} />
                   </div>
                   <ExternalLink size={16} className="text-textSecondary group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-textPrimary mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm font-mono text-textSecondary">{cert.issuer} • {cert.date}</p>
              </div>

              <div className="relative z-10 mt-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span key={skill} className="text-[10px] uppercase font-bold px-2 py-1 bg-surfaceHighlight text-textSecondary border border-borderColor group-hover:border-primary/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-primary transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent group-hover:border-primary transition-all duration-300" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
