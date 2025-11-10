import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import QRCodeCard from './components/QRCodeCard';
import Footer from './components/Footer';
import BackgroundImage from './components/BackgroundImage';

const AboutSection = lazy(() => import('./components/AboutSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const FitnessSection = lazy(() => import('./components/FitnessSection'));

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

const Spinner: React.FC = () => (
  <div className="flex justify-center items-center py-16" aria-live="polite" aria-busy="true">
    <div className="w-12 h-12 border-4 border-peacock-teal/20 border-t-peacock-teal rounded-full animate-spin" role="status">
        <span className="sr-only">Loading content...</span>
    </div>
  </div>
);


const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen text-peacock-blue dark:text-peacock-teal font-sans flex flex-col items-center p-4 overflow-x-hidden relative">
      <BackgroundImage />
      
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-2 rounded-full bg-peacock-teal/20 dark:bg-peacock-blue/50 text-peacock-blue dark:text-peacock-teal hover:bg-peacock-teal/40 dark:hover:bg-peacock-blue/70 transition-colors duration-300 z-50"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>

      <main className="relative z-10 flex flex-col items-center justify-start w-full flex-grow text-center px-4 pt-48">
        <Header name="Roronoa Zoro" title="World's Greatest Swordsman & Master of Three Sword Style" />
        <QRCodeCard />
        <Suspense fallback={<Spinner />}>
            <AboutSection />
            <ProjectsSection />
            <FitnessSection />
        </Suspense>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;