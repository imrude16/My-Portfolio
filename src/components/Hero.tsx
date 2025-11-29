import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, Play } from 'lucide-react';

const CodeWindow = () => {
  const [ , setCode] = useState('');
  const [hasTyped, setHasTyped] = useState(false);
  
  const fullCode = `const Developer = {
  name: "Deovrat Singh",
  role: "Full Stack Developer",
  education: "B.Tech AI & ML",
  location: "Lucknow, India",
  
  passion: [
    "Building meaningful solutions",
    "Learning by doing",
    "Creative problem-solving"
  ],
  
  approach: function() {
    return "Curiosity + Purpose + Growth";
  },
  
  status: "Open to opportunities"
};`;

  useEffect(() => {
    // Only type once
    if (hasTyped) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) {
        clearInterval(interval);
        setHasTyped(true);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [hasTyped, fullCode]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-lg bg-surface border border-borderColor shadow-2xl overflow-hidden font-mono text-xs md:text-sm"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-surfaceHighlight border-b border-borderColor">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500/20 border border-red-500/50 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500/20 border border-yellow-500/50 rounded-full" />
          <div className="w-3 h-3 bg-green-500/20 border border-green-500/50 rounded-full" />
        </div>
        <div className="text-textSecondary flex items-center gap-2">
          <Code2 size={12} />
          <span>about.tsx</span>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Code Area */}
      <div className="p-6 text-textSecondary min-h-[300px] relative bg-surface">
        <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-borderColor bg-surfaceHighlight flex flex-col items-end pt-6 pr-2 text-textSecondary/50 select-none font-mono text-[10px] leading-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="pl-8 whitespace-pre font-mono leading-6 text-textPrimary">
           <span className="text-pink-500">const</span> <span className="text-blue-400">Developer</span> <span className="text-textSecondary">=</span> {'{'}
           {'\n'}  <span className="text-purple-400">name:</span> <span className="text-green-400">"Deovrat Singh"</span>,
           {'\n'}  <span className="text-purple-400">role:</span> <span className="text-green-400">"Full Stack Developer"</span>,
           {'\n'}  <span className="text-purple-400">education:</span> <span className="text-green-400">"B.Tech AI & ML"</span>,
           {'\n'}  <span className="text-purple-400">location:</span> <span className="text-green-400">"Lucknow, India"</span>,
           {'\n'}  
           {'\n'}  <span className="text-purple-400">passion:</span> [
           {'\n'}    <span className="text-green-400">"Building meaningful solutions"</span>,
           {'\n'}    <span className="text-green-400">"Learning by doing"</span>,
           {'\n'}    <span className="text-green-400">"Creative problem-solving"</span>
           {'\n'}  ],
           {'\n'}  
           {'\n'}  <span className="text-blue-400">approach:</span> <span className="text-pink-500">function</span>() {'{'}
           {'\n'}    <span className="text-pink-500">return</span> <span className="text-green-400">"Curiosity + Purpose + Growth"</span>;
           {'\n'}  {'}'},
           {'\n'}  
           {'\n'}  <span className="text-purple-400">status:</span> <span className="text-green-400">"Open to opportunities"</span>
           {'\n'}{'}'};
           <motion.span 
             animate={{ opacity: [0, 1, 0] }} 
             transition={{ repeat: Infinity, duration: 0.8 }}
             className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
           />
        </div>
      </div>
      
      {/* Footer Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-surfaceHighlight border-t border-borderColor text-[10px] text-textSecondary">
         <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                <Terminal size={10} />
                <span>READY</span>
            </div>
            <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>v1.0.4</span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <span>TypeScript</span>
            <span>UTF-8</span>
         </div>
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const gridSize = 30;
    let offset = 0;

    const drawGrid = () => {
        ctx.clearRect(0, 0, width, height);
        
        const isDark = !document.documentElement.classList.contains('light-mode');
        
        ctx.strokeStyle = isDark ? '#222' : '#e5e5e5';
        ctx.lineWidth = 1;

        offset = (offset + 0.5) % gridSize;

        ctx.beginPath();
        for (let x = offset; x < width; x += gridSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        for (let y = offset; y < height; y += gridSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }
        ctx.stroke();

        const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
        if (isDark) {
            gradient.addColorStop(0, 'rgba(5, 5, 5, 0)');
            gradient.addColorStop(1, '#050505');
        } else {
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(1, '#ffffff');
        }
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    };

    const animate = () => {
        drawGrid();
        animationFrameRef.current = requestAnimationFrame(animate);
    }
    
    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-borderColor pt-20 pb-10 md:py-0 bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50" />
      
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 select-none">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-primary"></span>
                    <h2 className="text-primary font-mono text-sm tracking-widest">FULL STACK DEVELOPER</h2>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-textPrimary leading-[0.9]">
                    DEOVRAT <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-white">
                    SINGH
                    </span>
                </h1>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-textSecondary max-w-md text-lg font-light leading-relaxed border-l border-borderColor pl-6"
            >
                B.Tech student specializing in AI & ML, passionate about building meaningful web experiences. I approach development with curiosity, attention to detail, and a desire to create solutions that matter.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4 mt-4"
            >
                <button 
                  onClick={() => document.getElementById('selected-projects')?.scrollIntoView({ behavior: 'smooth'})}
                  className="bg-textPrimary text-background px-8 py-3 font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
                >
                    <Play size={16} fill="currentColor" /> VIEW WORK
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
                  className="px-8 py-3 font-bold text-textPrimary border border-borderColor hover:border-primary hover:text-primary transition-colors"
                >
                    CONTACT ME
                </button>
            </motion.div>
        </div>

        {/* Right Content - Code Editor */}
        <div className="relative flex justify-center lg:justify-end">
             <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
             <CodeWindow />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-textSecondary flex flex-col items-center gap-2"
        >
            <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-textSecondary to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero