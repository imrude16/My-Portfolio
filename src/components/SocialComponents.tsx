import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  brand: string;
}

interface SocialsProps {
  socials: SocialLink[];
}

const Socials: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <div className="bg-neutral-100 rounded-xl p-6 shadow-sm border border-neutral-300">
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink className="size-5 text-gray-600" />
        <h3 className="text-lg font-medium text-gray-900">Social</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="flex items-center gap-2 px-3 py-2 bg-neutral-100 border border-neutral-300 hover:bg-gray-100 rounded-lg transition-colors duration-200 min-w-0 flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex-shrink-0">{social.icon}</span>
            <span className="text-sm font-medium text-gray-700 truncate">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;