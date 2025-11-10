import React from 'react';

const DumbbellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 inline-block mr-2 text-peacock-gold">
        <path d="M14.4 14.4 9.6 9.6M18 6l-1.4-1.4M6 18l-1.4-1.4M21 21 3 3"></path>
        <path d="M21 16V5h-5"></path><path d="m5 21-1-1"></path>
        <path d="M3 8v11h5"></path><path d="m19 3 1 1"></path>
    </svg>
);

const records = [
    { label: 'Heaviest Lift', value: 'Entire Building' },
    { label: 'Greatest Feat', value: 'Survived "Nothing Happened"' },
    { label: 'Signature Move', value: 'Onigiri' }
];

const FitnessSection: React.FC = () => {
    return (
        <section className="max-w-4xl mx-auto w-full my-12 text-left">
            <h2 className="text-4xl font-bold text-center mb-8 font-audiowide flex items-center justify-center">
                <DumbbellIcon />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-peacock-green to-peacock-blue">
                    Unrelenting Training
                </span>
            </h2>
            <div className="bg-white/5 dark:bg-peacock-blue/10 backdrop-blur-md border border-peacock-teal/20 dark:border-peacock-teal/30 rounded-2xl p-8 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                    <p className="text-peacock-blue/80 dark:text-peacock-teal/80 leading-relaxed">
                        To surpass my rivals and my own limits, I train with an intensity that would break ordinary men. Strength isn't given, it's earned through relentless effort, pushing past pain and exhaustion. From lifting impossible weights on the ship's deck to my meditative focus in battle, every moment is an opportunity to grow stronger. My body is a weapon, and I keep it honed to its sharpest edge, ready for any challenge the Grand Line throws at us.
                    </p>
                </div>
                <div className="border-t-2 md:border-t-0 md:border-l-2 border-peacock-green/30 pt-6 md:pt-0 md:pl-8">
                    <h3 className="text-lg font-semibold text-peacock-blue dark:text-peacock-teal mb-4">Personal Bests</h3>
                    <ul className="space-y-2">
                        {records.map(record => (
                            <li key={record.label} className="flex justify-between items-baseline">
                                <span className="text-sm text-peacock-blue/80 dark:text-peacock-teal/80">{record.label}</span>
                                <span className="font-mono font-bold text-peacock-gold">{record.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FitnessSection;