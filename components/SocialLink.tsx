import React from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-peacock-blue/70 dark:text-peacock-teal/70 hover:text-peacock-gold dark:hover:text-peacock-gold transition-colors duration-300"
    >
      {children}
    </a>
);

export default SocialLink;
