'use client';

import React from 'react';
import './fish-animation.css';

const FishAnimation = () => {
  const coilCount = Array.from({ length: 15 });

  return (
    <div className="fish-container">
      <div className="fish">
        {coilCount.map((_, i) => <div key={i} className="koiCoil"></div>)}
      </div>
      <div className="fish">
        {coilCount.map((_, i) => <div key={i} className="koiCoil"></div>)}
      </div>
    </div>
  );
};

export default FishAnimation;
