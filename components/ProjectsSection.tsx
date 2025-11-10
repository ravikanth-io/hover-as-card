import React from 'react';

const SwordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 inline-block mr-2 text-peacock-gold">
        <path d="M14.5 17.5 3 6.2 6.2 3l11.3 11.3" />
        <path d="m3 21 6-6" />
        <path d="m18 6-6 6" />
        <path d="M21 3l-6 6" />
    </svg>
);


const battles = [
    {
        title: 'vs. Daz Bonez (Mr. 1)',
        description: 'A pivotal battle in Alabasta where I learned to cut steel, pushing past my limits to achieve a new level of swordsmanship.',
        tags: ['Alabasta Arc', 'Cut Steel', 'Shishi Sonson']
    },
    {
        title: 'vs. Kaku (CP9)',
        description: 'An intense fight against a Rokushiki master in Enies Lobby, forcing the development of the demonic nine-sword style, Asura.',
        tags: ['Enies Lobby Arc', 'Asura Ichibugin', 'New Swords']
    },
    {
        title: 'vs. King the Conflagration',
        description: 'A life-and-death struggle against Kaido\'s strongest commander, awakening my Conqueror\'s Haki and mastering Enma.',
        tags: ['Wano Country Arc', 'King of Hell', 'Conqueror\'s Haki']
    }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto w-full my-12 text-left">
        <h2 className="text-4xl font-bold text-center mb-8 font-audiowide flex items-center justify-center">
            <SwordIcon />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-peacock-green to-peacock-blue">
                Notable Battles
            </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
            {battles.map(battle => (
                <div key={battle.title} className="bg-white/5 dark:bg-peacock-blue/10 backdrop-blur-md border border-peacock-teal/20 dark:border-peacock-teal/30 rounded-2xl p-6 transition-all duration-300 hover:border-peacock-gold/50 hover:shadow-2xl hover:shadow-peacock-green/10">
                    <h3 className="text-xl font-bold mb-2 text-peacock-blue dark:text-peacock-teal">{battle.title}</h3>
                    <p className="text-peacock-blue/80 dark:text-peacock-teal/80 text-sm mb-4 leading-relaxed">{battle.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {battle.tags.map(tag => (
                            <span key={tag} className="bg-peacock-green/10 text-peacock-green dark:bg-peacock-teal/10 dark:text-peacock-teal text-xs font-mono px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default ProjectsSection;