// src/components/TypewriterEffect.jsx
import React, { useState, useEffect, useRef } from 'react'; // Added useRef

const TypewriterEffect = ({ text, attribution = '', delay = 100, loop = false, loopDelay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null); // To store the timeout ID for cleanup

  useEffect(() => {
    // Clear any existing timeout when dependencies change or component unmounts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (currentIndex < text.length) {
      // If there are still characters to type
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else if (loop) {
      // If typing is complete and looping is enabled
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(''); // Clear the text
        setCurrentIndex(0);   // Reset index to start typing from scratch
      }, loopDelay); // Wait for loopDelay before re-starting
    }

    // Cleanup function: This runs when the component unmounts or before the effect re-runs
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, text, delay, loop, loopDelay]); // Dependencies for useEffect

  const typingDone = currentIndex === text.length;

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        {displayedText}
        {!loop || (loop && currentIndex < text.length) ? <span className="animate-blink">|</span> : null}
      </h2>
      {attribution && (
        <p
          className="text-xl md:text-2xl text-secondary-light mt-2 transition-opacity duration-500"
          style={{ opacity: typingDone ? 1 : 0 }}
        >
          {attribution}
        </p>
      )}
    </div>
  );
};

export default TypewriterEffect;
