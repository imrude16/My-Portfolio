import React, { useCallback, useMemo } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

// --- Constants ---
const CONTACT_EMAIL = 'hello@devfolio.com';
const PORTFOLIO_NAME = 'DEVFOLIO';

const Footer: React.FC = () => {
  // Memoized current year
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  // Optimized scroll to top handler
  const scrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  return (
    <footer 
      id="contact" 
      className="w-full bg-surface border-t border-borderColor py-12 px-6"
      role="contentinfo"
      aria-label="Site footer and contact information"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold text-textPrimary mb-2">
            LET'S CONNECT
          </h3>
          <a 
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-2 text-textSecondary hover:text-primary transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded px-2 py-1"
            aria-label={`Send email to ${CONTACT_EMAIL}`}
          >
            <Mail 
              size={20} 
              className="group-hover:scale-110 transition-transform" 
              aria-hidden="true"
            />
            <span className="group-hover:underline decoration-primary decoration-2 underline-offset-4">
              {CONTACT_EMAIL}
            </span>
          </a>
        </div>

        {/* Back to Top & Copyright Section */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors uppercase text-sm font-bold tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded px-3 py-2"
            aria-label="Scroll back to top of page"
          >
            <span className="group-hover:translate-x-[-4px] transition-transform">
              Back to Top
            </span>
            <div 
              className="p-2 border border-borderColor group-hover:border-textPrimary transition-colors rounded-full group-hover:bg-surfaceHighlight"
              aria-hidden="true"
            >
              <ArrowUp size={16} className="group-hover:translate-y-[-2px] transition-transform" />
            </div>
          </button>
          
          <p className="text-textSecondary text-xs font-mono text-center md:text-right">
            © {currentYear} {PORTFOLIO_NAME}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;