import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Always close menu first
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Offset for fixed navbar (64px = h-16)
        const offset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-borderColor' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Portfolio Link */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold tracking-tighter hover:text-primary transition-colors font-mono"
            aria-label="Go to home"
          >
            DEV.FOLIO
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              PORTFOLIO
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
              aria-label="GitHub Profile"
            >
              GITHUB <Github size={14} />
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              CONTACTS
            </button>
            
            <div className="w-px h-4 bg-borderColor"></div>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surfaceHighlight transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surfaceHighlight transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-surfaceHighlight rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold hover:text-primary transition-colors"
            >
              PORTFOLIO
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-bold hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GITHUB <Github size={24} />
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-2xl font-bold hover:text-primary transition-colors"
            >
              CONTACTS
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Memoize to prevent re-renders when parent (App) re-renders
export default memo(Navbar);