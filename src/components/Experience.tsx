import React from 'react';
import { motion } from 'motion/react';

// --- Skeleton Visualizations ---

const NetworkSkeleton = () => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
     <svg className="w-full h-full">
        <motion.path
          d="M50 50 L 150 100 L 250 50 L 150 100 L 150 200"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <circle cx="50" cy="50" r="4" fill="currentColor" className="text-textPrimary" />
        <circle cx="150" cy="100" r="4" fill="currentColor" className="text-primary" />
        <circle cx="250" cy="50" r="4" fill="currentColor" className="text-textPrimary" />
        <circle cx="150" cy="200" r="4" fill="currentColor" className="text-textPrimary" />
     </svg>
  </div>
);

// --- Data ---

const experiences = [
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Developing custom websites for small businesses using React and Tailwind CSS. Managing end-to-end delivery from design to deployment.",
    skeleton: <NetworkSkeleton />
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Contract",
    period: "2022 - 2023",
    description: "Collaborated on open-source projects. Built responsive UI components and optimized landing page performance.",
    skeleton: <NetworkSkeleton />
  },
  {
    role: "Web Development Student",
    company: "Personal Projects",
    period: "2021 - 2022",
    description: "Intensive self-study and building diverse full-stack applications. Mastered the MERN stack and modern development workflows.",
    skeleton: <NetworkSkeleton />
  }
];

const Experience: React.FC = () => {
  return (
    <section className="w-full py-20 bg-background border-t border-borderColor">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
           <div className="border-l-2 border-primary pl-4">
            <h2 className="text-3xl font-bold text-textPrimary tracking-tight">EXPERIENCE</h2>
            <p className="text-textSecondary font-mono text-sm mt-1">MY JOURNEY</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-borderColor ml-8 mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-surfaceHighlight border border-borderColor p-8 flex flex-col h-[320px] justify-between overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
              {/* Wireframe Skeleton Background */}
              {exp.skeleton}

              <div className="absolute top-4 right-4 text-xs font-mono text-textSecondary group-hover:text-primary transition-colors z-10">
                {exp.period}
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold text-textPrimary mb-1 group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                <p className="text-primary text-sm font-medium mb-4">{exp.company}</p>
                <p className="text-textSecondary leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-borderColor overflow-hidden">
                <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;