import React from 'react';

const UiverseCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="uiverse-parent">
      <div className="uiverse-card">
        <div className="uiverse-glass"></div>
        <div className="uiverse-content">{children}</div>
      </div>
    </div>
  );
};

export default UiverseCard;
