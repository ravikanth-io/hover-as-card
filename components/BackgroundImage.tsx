import React from 'react';

// Base64 encoded background image to ensure it's always available and reduces an HTTP request.
const saulGoodmanImage = 'data:image/jpeg;base64,';
const BackgroundImage: React.FC = () => (
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10 pointer-events-none"
    style={{ backgroundImage: `url(${saulGoodmanImage})` }}
    aria-hidden="true"
  />
);

export default BackgroundImage;
