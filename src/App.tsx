import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import CursorTail from './components/CursorTail';

const App: React.FC = () => {
  // Initialize theme from localStorage or default to dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // Memoized toggle function to prevent unnecessary re-renders
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <main className="w-full min-h-screen bg-background text-textPrimary selection:bg-primary/30 selection:text-primary relative transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <CursorTail />
      <Hero />

      <Socials />
      <TechStack />
      <Experience />
      <div id="selected-projects">
        <Projects />
      </div>
      <Certifications />
      <Footer />

      {/* Decorative Fixed Grain Overlay - Optimized */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[40] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          willChange: 'transform' // Performance hint for GPU acceleration
        }}
        aria-hidden="true"
      />
    </main>
  );
};

export default App;