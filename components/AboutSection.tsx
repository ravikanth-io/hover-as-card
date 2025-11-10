import React from 'react';
import { GithubIcon, LinkedinIcon, XIcon } from '../constants';
import SocialLink from './SocialLink';

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto w-full my-12">
      <div className="bg-white/5 dark:bg-peacock-blue/10 backdrop-blur-md border border-peacock-teal/20 dark:border-peacock-teal/30 rounded-2xl p-8">
        <h2 className="text-4xl font-bold text-center mb-6 font-audiowide bg-clip-text text-transparent bg-gradient-to-r from-peacock-green to-peacock-blue">
          About Me
        </h2>
        <p className="text-peacock-blue/80 dark:text-peacock-teal/80 text-justify mb-8 leading-relaxed max-w-3xl mx-auto">
         I'm RK but they call me the "Pirate Hunter," but my path has only one destination: to become the World's Greatest Swordsman. 
          I am the combatant of the Straw Hat Pirates and the first to join Monkey D. Luffy on his journey. 
          My loyalty to my captain is absolute, and my ambition is forged in steel. 
          I walk the path of the sword, wielding three blades as an extension of my own soul. 
          Each battle, each scar, is a step closer to my goal—a promise made that I will never lose again.
        </p>
        
        <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-peacock-blue dark:text-peacock-teal mb-4 font-audiowide">Core Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
                {['Three Sword Style', 'Armament Haki', 'Conqueror\'s Haki', 'Swordsmanship', 'Immense Strength', 'Endurance', 'Asura', 'Poor Sense of Direction'].map(skill => (
                    <span key={skill} className="bg-peacock-green/10 text-peacock-green dark:bg-peacock-teal/10 dark:text-peacock-teal text-sm font-medium px-3 py-1 rounded-full font-mono">
                        {skill}
                    </span>
                ))}
            </div>
        </div>

        <div className="flex justify-center items-center space-x-6">
          <SocialLink href="#" label="View GitHub profile">
            <GithubIcon />
          </SocialLink>
          <SocialLink href="#" label="View LinkedIn profile">
            <LinkedinIcon />
          </SocialLink>
          <SocialLink href="#" label="View X (formerly Twitter) profile">
            <XIcon />
          </SocialLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;