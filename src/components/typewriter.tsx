'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  delay = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(ticker);
  }, [currentText, isDeleting, typingSpeed, loopNum, texts, delay]);
  
  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink-caret border-r-2"></span>
    </span>
  );
};

export default Typewriter;
