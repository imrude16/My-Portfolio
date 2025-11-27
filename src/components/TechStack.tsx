import React from 'react';
import { motion } from 'framer-motion';
import { 
  ReactIcon, TailwindIcon, NextJsIcon, NodeIcon, ViteIcon, 
  JavaScriptIcon, TypeScriptIcon, MongoIcon, GitIcon, PostmanIcon, ExpressIcon, TerminalIcon 
} from './Icons';

const technologies = [
  { name: 'JavaScript', icon: JavaScriptIcon, category: 'Language' },
  { name: 'TypeScript', icon: TypeScriptIcon, category: 'Language' }, 
  { name: 'React.js', icon: ReactIcon, category: 'Frontend' },
  { name: 'Next.js', icon: NextJsIcon, category: 'Framework' },
  { name: 'TailwindCSS', icon: TailwindIcon, category: 'Styling' },
  { name: 'Node.js', icon: NodeIcon, category: 'Backend' },
  { name: 'Express', icon: ExpressIcon, category: 'Backend' },
  { name: 'MongoDB', icon: MongoIcon, category: 'Database' },
  { name: 'Vite', icon: ViteIcon, category: 'Build Tool' },
  { name: 'Git', icon: GitIcon, category: 'Version Control' },
  { name: 'Postman', icon: PostmanIcon, category: 'Tools' },
  { name: 'Terminal', icon: TerminalIcon, category: 'Tools' },
];

const TechStack: React.FC = () => {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-l-2 border-primary pl-4">
          <h2 className="text-3xl font-bold text-textPrimary tracking-tight">TECHNOLOGIES</h2>
          <p className="text-textSecondary font-mono text-sm mt-1">THE ARSENAL</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative group h-32 bg-background border border-borderColor hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center gap-3"
            >
              <div className="text-textSecondary group-hover:scale-110 transition-transform duration-300">
                {/* Icons now have their own internal coloring */}
                <tech.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-textPrimary group-hover:text-textPrimary">{tech.name}</p>
                <p className="text-[10px] uppercase tracking-wider text-textSecondary group-hover:text-primary/70">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;