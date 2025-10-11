import React from 'react';

const UiverseCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`neu-card ${className || ''}`}>
      {children}
    </div>
  );
};

export default UiverseCard;
