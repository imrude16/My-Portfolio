import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  return (
    <main className="w-full min-h-screen bg-background text-textPrimary selection:bg-primary/30 selection:text-primary relative transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <Hero />
      <Socials />
      <TechStack />
      <Experience />
      <div id="selected-projects">
        <Projects />
      </div>
      <Certifications />
      <Footer />

      {/* Decorative Fixed Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[40] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </main>
  );
};

export default App;