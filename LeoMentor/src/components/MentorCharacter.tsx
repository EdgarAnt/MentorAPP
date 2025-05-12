import React from 'react';

interface MentorCharacterProps {
  className?: string;
}

const MentorCharacter: React.FC<MentorCharacterProps> = ({ className = '' }) => {
  return (
    <img 
      src="/assets/leoMentor.gif" 
      alt="Mentor Leo" 
      className={`block mx-auto w-full max-w-4xl ${className}`} 
    />
  );
};

export default MentorCharacter;
