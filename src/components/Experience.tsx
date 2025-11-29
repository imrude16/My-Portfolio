import React from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

const NetworkSkeleton = React.memo(() => (
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <svg className="w-full h-full" aria-hidden="true">
      <motion.path
        d="M50 50 L 150 100 L 250 50 L 150 100 L 150 200"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-primary"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <circle cx="50" cy="50" r="4" fill="currentColor" className="text-textPrimary" />
      <circle cx="150" cy="100" r="4" fill="currentColor" className="text-primary" />
      <circle cx="250" cy="50" r="4" fill="currentColor" className="text-textPrimary" />
      <circle cx="150" cy="200" r="4" fill="currentColor" className="text-textPrimary" />
    </svg>
  </div>
));

NetworkSkeleton.displayName = 'NetworkSkeleton';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "VaultofCodes",
    period: "Aug 2025 - Sept 2025",
    description:
      "Developed an AI-powered Resume Analyzer using React Router and TypeScript. Built responsive, SEO-optimized interfaces with TailwindCSS and implemented state management with Zustand. Created multiple projects demonstrating modern web development practices.",
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    description:
      "Building full-stack applications with React, Node.js, and MongoDB. Focused on AI-integrated solutions, including chat applications and trading platforms. Exploring modern technologies and best practices in web development.",
  },
  {
    role: "AI & ML Student",
    company: "BN College of Engineering",
    period: "2022 - Present",
    description:
      "Pursuing B.Tech in Artificial Intelligence & Machine Learning. Learning modern development workflows, data structures, and algorithms. Participating in hackathons and building projects that combine AI with practical web applications.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full py-20 bg-background border-t border-borderColor">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-end justify-between mb-12">
          <div className="border-l-2 border-primary pl-4">
            <h2 className="text-3xl font-bold text-textPrimary tracking-tight">
              EXPERIENCE
            </h2>
            <p className="text-textSecondary font-mono text-sm mt-1">MY JOURNEY</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-borderColor ml-8 mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-surfaceHighlight border border-borderColor p-8 flex flex-col h-[320px] justify-between overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
              <NetworkSkeleton />

              <div className="absolute top-4 right-4 text-xs font-mono text-textSecondary group-hover:text-primary transition-colors z-10">
                {exp.period}
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold text-textPrimary mb-1 group-hover:text-blue-300 transition-colors">
                  {exp.role}
                </h3>

                <p className="text-primary text-sm font-medium mb-4">{exp.company}</p>

                <p className="text-textSecondary leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-borderColor overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    delay: i * 0.1 + 0.3,
                  }}
                />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;