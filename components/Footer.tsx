import React from 'react';
import { GithubIcon, LinkedinIcon, XIcon } from '../constants';
import SocialLink from './SocialLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full p-4 text-center text-sm">
      <div className="flex justify-center items-center space-x-6 mb-2">
          <SocialLink href="https://github.com/ravikanth-io" label="View GitHub profile">
            <GithubIcon />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/ksravikanth" label="View LinkedIn profile">
            <LinkedinIcon />
          </SocialLink>
          <SocialLink href="#" label="View X (formerly Twitter) profile">
            <XIcon/>
          </SocialLink>
      </div>
      <p className="text-peacock-blue/60 dark:text-peacock-teal/60">&copy; {currentYear} RAVIKANTH K S. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;