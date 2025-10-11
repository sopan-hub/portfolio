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
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(handleType, typingSpeed);

    return () => {
      clearTimeout(ticker);
    };
  }, [text, isDeleting, typingSpeed, loopNum, texts, delay]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink-caret border-r-2"></span>
    </span>
  );
};

export default Typewriter;
