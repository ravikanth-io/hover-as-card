import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <header className="mb-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-2 font-audiowide uppercase">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-peacock-green to-peacock-blue">
          {name}
        </span>
      </h1>
      <p className="text-lg md:text-xl text-peacock-blue/80 dark:text-peacock-teal/80">{title}</p>
    </header>
  );
};

export default Header;