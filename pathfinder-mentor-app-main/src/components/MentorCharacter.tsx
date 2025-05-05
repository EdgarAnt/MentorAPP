
import React, { useState, useEffect } from 'react';

interface MentorCharacterProps {
  expression?: 'neutral' | 'happy' | 'thinking' | 'excited';
  animate?: boolean;
  className?: string;
}

const MentorCharacter: React.FC<MentorCharacterProps> = ({ 
  expression = 'neutral', 
  animate = true,
  className = ''
}) => {
  const [waving, setWaving] = useState(false);

  useEffect(() => {
    // Randomly wave every 30-60 seconds
    const waveInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setWaving(true);
        setTimeout(() => setWaving(false), 2500);
      }
    }, 30000);

    return () => clearInterval(waveInterval);
  }, []);

  // Character base SVG - simplified version
  return (
    <div className={`relative ${className}`}>
      {/* Simplified character SVG */}
      <svg 
        width="200" 
        height="200" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={animate ? "animate-bounce-slight" : ""}
      >
        {/* Body */}
        <ellipse cx="100" cy="135" rx="50" ry="55" fill="#6366f1" />
        
        {/* Head */}
        <circle cx="100" cy="80" r="40" fill="#e0e7ff" />
        
        {/* Eyes */}
        <circle cx="85" cy="75" r="6" fill="#312e81" />
        <circle cx="115" cy="75" r="6" fill="#312e81" />
        
        {/* Mouth - changes with expression */}
        {expression === 'neutral' && (
          <path d="M90 95 Q100 100 110 95" stroke="#312e81" strokeWidth="3" fill="none" />
        )}
        {expression === 'happy' && (
          <path d="M85 95 Q100 105 115 95" stroke="#312e81" strokeWidth="3" fill="none" />
        )}
        {expression === 'thinking' && (
          <path d="M90 100 L110 100" stroke="#312e81" strokeWidth="3" fill="none" />
        )}
        {expression === 'excited' && (
          <path d="M85 95 Q100 115 115 95" stroke="#312e81" strokeWidth="3" fill="none" />
        )}
        
        {/* Glasses */}
        <circle cx="85" cy="75" r="10" stroke="#4338ca" strokeWidth="2" fill="none" />
        <circle cx="115" cy="75" r="10" stroke="#4338ca" strokeWidth="2" fill="none" />
        <line x1="95" y1="75" x2="105" y2="75" stroke="#4338ca" strokeWidth="2" />
        
        {/* Arm - only right arm will wave */}
        <g className={waving ? "animate-wave origin-bottom-right" : ""} style={{ transformOrigin: "130px 135px" }}>
          <path d="M130 135 L150 110" stroke="#6366f1" strokeWidth="10" strokeLinecap="round" />
        </g>
        <path d="M70 135 L50 110" stroke="#6366f1" strokeWidth="10" strokeLinecap="round" />
      </svg>
      
      <div className="character-shadow w-1/2 h-4 bg-black/10 rounded-full mx-auto mt-2"></div>
    </div>
  );
};

export default MentorCharacter;
