import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-surface border-t border-borderColor py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start">
           <h3 className="text-2xl font-bold text-textPrimary mb-2">LET'S CONNECT</h3>
           <a href="mailto:hello@devfolio.com" className="flex items-center gap-2 text-textSecondary hover:text-primary transition-colors text-lg">
             <Mail size={20} />
             <span>hello@devfolio.com</span>
           </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors uppercase text-sm font-bold tracking-widest"
            >
                Back to Top
                <div className="p-2 border border-borderColor group-hover:border-textPrimary transition-colors rounded-full">
                    <ArrowUp size={16} />
                </div>
            </button>
            <p className="text-textSecondary text-xs font-mono mt-4">
                © {new Date().getFullYear()} DEVFOLIO. ALL RIGHTS RESERVED.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;