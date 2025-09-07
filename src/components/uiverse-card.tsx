import React from 'react';

const UiverseCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="neu-card p-4 sm:p-6">
      {children}
    </div>
  );
};

export default UiverseCard;
