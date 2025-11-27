import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'Real-time analytics platform for distributed systems.',
    fullDescription: 'Nebula Dashboard provides comprehensive visualization for microservice architectures. It aggregates logs, metrics, and traces into a unified interface, allowing developers to debug issues 50% faster. Built with React flow for topology mapping and WebSockets for real-time data streaming.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    techStack: ['React', 'D3.js', 'Node.js', 'Socket.io'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    id: '2',
    title: 'E-Commerce Zenith',
    description: 'Headless commerce solution with AI recommendations.',
    fullDescription: 'A highly scalable headless e-commerce storefront. Features include AI-driven product recommendations, optimistic UI updates for cart management, and sub-second page loads via edge caching. Integrated with Stripe for payments and Sanity CMS for content management.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    id: '3',
    title: 'Crypto Tracker',
    description: 'DeFi portfolio management tool with blockchain indexing.',
    fullDescription: 'Connects multiple wallets to track assets across various chains. Uses a custom indexer to parse blockchain events and provide historical price data. Features a dark-mode first UI with complex data visualization charts.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    techStack: ['React', 'Web3.js', 'Express', 'PostgreSQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
    {
    id: '4',
    title: 'TaskFlow',
    description: 'Collaborative project management tool for remote teams.',
    fullDescription: 'TaskFlow simplifies remote collaboration with real-time kanban boards, chat integration, and file sharing. Includes automated workflow triggers and integration with Slack and Discord.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    techStack: ['Vue.js', 'Firebase', 'Tailwind'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="w-full py-20 bg-surface overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 mb-12">
         <div className="border-l-2 border-primary pl-4">
            <h2 className="text-3xl font-bold text-textPrimary tracking-tight">SELECTED PROJECTS</h2>
            <p className="text-textSecondary font-mono text-sm mt-1">DRAG TO EXPLORE</p>
          </div>
       </div>

      <motion.div 
        ref={containerRef} 
        className="cursor-grab active:cursor-grabbing px-6"
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative min-w-[350px] md:min-w-[500px] h-[300px] md:h-[400px] bg-black border border-borderColor group overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Video Background */}
              <video 
                src={project.videoUrl} 
                muted 
                loop 
                autoPlay 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex gap-2 mb-3">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] uppercase font-bold px-2 py-1 bg-primary/20 text-white border border-primary/50 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
                
                <div className="mt-4 flex items-center text-primary text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <span>VIEW DETAILS</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-surfaceHighlight w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-borderColor shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                 <div className="h-[300px] md:h-full bg-black relative">
                    <video 
                      src={selectedProject.videoUrl} 
                      muted 
                      loop 
                      autoPlay 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                 </div>
                 
                 <div className="p-8 flex flex-col">
                    <h2 className="text-3xl font-bold text-textPrimary mb-2">{selectedProject.title}</h2>
                    <p className="text-primary font-mono text-sm mb-6">PROJECT SHOWCASE</p>
                    
                    <p className="text-textSecondary leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-textPrimary mb-3 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(tech => (
                          <span key={tech} className="text-xs font-mono text-textSecondary px-3 py-1 bg-background border border-borderColor">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex gap-4">
                      {selectedProject.liveLink && (
                        <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white py-3 font-bold transition-colors">
                          <ExternalLink size={18} /> LIVE DEMO
                        </a>
                      )}
                      {selectedProject.githubLink && (
                        <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-background border border-borderColor hover:border-textPrimary text-textPrimary py-3 font-bold transition-colors">
                          <Github size={18} /> CODE
                        </a>
                      )}
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;