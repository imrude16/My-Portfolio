import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, XIcon, DiscordIcon } from './Icons';

const socials = [
  { 
    name: 'GitHub', 
    icon: GithubIcon, 
    link: 'https://github.com', 
    // Uses CSS variable for text-primary (White in Dark, Black in Light)
    colorClass: 'group-hover:text-textPrimary',
    borderColorClass: 'group-hover:border-textPrimary'
  },
  { 
    name: 'LinkedIn', 
    icon: LinkedinIcon, 
    link: 'https://linkedin.com', 
    // Official LinkedIn Blue
    colorClass: 'group-hover:text-[#0077b5]',
    borderColorClass: 'group-hover:border-[#0077b5]'
  },
  { 
    name: 'X / Twitter', 
    icon: XIcon, 
    link: 'https://twitter.com', 
    // Uses CSS variable (White in Dark, Black in Light)
    colorClass: 'group-hover:text-textPrimary',
    borderColorClass: 'group-hover:border-textPrimary'
  },
  { 
    name: 'Discord', 
    icon: DiscordIcon, 
    link: 'https://discord.com', 
    // Official Discord Blurple
    colorClass: 'group-hover:text-[#5865F2]',
    borderColorClass: 'group-hover:border-[#5865F2]'
  },
];

const Socials: React.FC = () => {
  return (
    <section className="w-full py-10 border-b border-borderColor bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-borderColor border border-borderColor">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-background p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-surfaceHighlight"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 border border-borderColor group-hover:border-opacity-50 pointer-events-none transition-opacity duration-300" />
              
              {/* Icon - Colored SVG */}
              <social.icon 
                className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 text-textSecondary ${social.colorClass}`} 
              />
              
              {/* Text */}
              <span className={`font-mono text-sm transition-colors duration-300 text-textSecondary ${social.colorClass}`}>
                {social.name}
              </span>
              
              {/* Corner Accents - Styled with the same brand color */}
              <div className={`absolute top-0 left-0 w-2 h-2 border-l border-t border-transparent transition-all duration-300 ${social.borderColorClass}`} />
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-r border-b border-transparent transition-all duration-300 ${social.borderColorClass}`} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;