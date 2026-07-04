import React, { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01';

// Matrix-style decode: characters scramble then lock in left to right.
const DecryptText = ({ text, className = '', speed = 40, startDelay = 0 }) => {
  const [display, setDisplay] = useState('');
  const frame = useRef(null);

  useEffect(() => {
    let iteration = 0;
    let timeout;
    const total = text.length;

    const tick = () => {
      const out = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < iteration) return char;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');
      setDisplay(out);

      if (iteration <= total) {
        iteration += 0.5;
        frame.current = setTimeout(tick, speed);
      }
    };

    timeout = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(frame.current);
    };
  }, [text, speed, startDelay]);

  return <span className={className}>{display || ' '}</span>;
};

export default DecryptText;
