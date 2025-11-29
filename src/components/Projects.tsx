import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Signalist - AI Trading Platform',
    description: 'AI-driven trading platform delivering personalized investment recommendations.',
    fullDescription: 'A full-stack trading platform that automates daily market summaries and provides AI-generated insights to help investors make informed decisions. Features include personalized recommendations based on market data and user preferences, automated scheduling for market updates, and real-time email alerts.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    techStack: ['Next.js', 'MongoDB', 'TailwindCSS', 'Gemini'],
    liveLink: 'https://siggnalist.vercel.app/',
    githubLink: 'https://github.com/imrude16/trading-app'
  },
  {
    id: '2',
    title: 'AI Chat App',
    description: 'Context-aware chat application with persistent memory and real-time messaging.',
    fullDescription: 'An AI-powered chat application enabling task-specific conversations with persistent memory and user session management. Features include secure user authentication, real-time message synchronization, dynamic AI controls, and integration with OpenAI and Gemini APIs for intelligent responses. Built with modern animation and responsive design.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    techStack: ['React', 'TypeScript', 'Motion', 'OpenAI'],
    liveLink: 'https://github.com/imrude16/ai-chat-app',
    githubLink: 'https://github.com/imrude16/ai-chat-app'
  },
  {
    id: '3',
    title: 'AI Resume Analyzer',
    description: 'ATS optimization platform with real-time insights and keyword matching.',
    fullDescription: 'A platform that helps job seekers optimize their resumes for ATS systems by providing real-time insights, keyword matching, and scoring against job requirements. Features include PDF text extraction, AI-powered analysis with ATS scoring, interactive charts, and seamless file uploads with cloud integration.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    techStack: ['React', 'TypeScript', 'Zustand', 'Puter.js'],
    liveLink: 'https://resumiind.vercel.app/',
    githubLink: 'https://github.com/imrude16/ai-resume-analyzer'
  },
  {
    id: '4',
    title: '3D Portfolio',
    description: 'Fully responsive portfolio with 3D visuals and smooth animations.',
    fullDescription: 'A modern portfolio website built with clean UI principles and smooth motion animations. Features include dynamic navigation, showcase sections, experience display, tech stack visualization, and integrated email functionality. Includes 3D visuals using React Three Fiber and GLB models for enhanced visual appeal.',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    techStack: ['React', 'Tailwind CSS', 'React Three Fiber', 'EmailJS'],
    liveLink: 'https://myfolio-dev.vercel.app/',
    githubLink: 'https://github.com/imrude16/3d-portfolio-using-react'
  }
];

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = React.memo<ProjectCardProps>(({ project, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsInView] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          videoElement.play().catch(() => setVideoError(true));
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.25, rootMargin: '50px' }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
      videoElement.pause();
    };
  }, []);

  return (
    <motion.div
      className="relative min-w-[350px] md:min-w-[500px] h-[300px] md:h-[400px] bg-black border border-borderColor group overflow-hidden"
      whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {!videoError ? (
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
          onError={() => setVideoError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
          <p className="text-textSecondary text-sm">Preview Unavailable</p>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="flex gap-2 mb-3">
          {project.techStack.slice(0, 3).map(tech => (
            <span 
              key={tech} 
              className="text-[10px] uppercase font-bold px-2 py-1 bg-primary/20 text-white border border-primary/50 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
        
        <div className="mt-4 flex items-center text-primary text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
          <span>VIEW DETAILS</span>
          <span className="ml-2" aria-hidden="true">→</span>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const calculateWidth = () => {
      const scrollWidth = container.scrollWidth;
      const offsetWidth = container.offsetWidth;
      setDragWidth(scrollWidth - offsetWidth);
    };

    calculateWidth();

    const resizeObserver = new ResizeObserver(calculateWidth);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
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
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          className="flex gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-surfaceHighlight w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-borderColor shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 text-white transition-colors"
                aria-label="Close modal"
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
                  <h2 className="text-3xl font-bold text-textPrimary mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-primary font-mono text-sm mb-6">PROJECT SHOWCASE</p>
                  
                  <p className="text-textSecondary leading-relaxed mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-textPrimary mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span 
                          key={tech} 
                          className="text-xs font-mono text-textSecondary px-3 py-1 bg-background border border-borderColor"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-4">
                    {selectedProject.liveLink && (
                      <a 
                        href={selectedProject.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white py-3 font-bold transition-colors"
                      >
                        <ExternalLink size={18} /> LIVE DEMO
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 bg-background border border-borderColor hover:border-textPrimary text-textPrimary py-3 font-bold transition-colors"
                      >
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