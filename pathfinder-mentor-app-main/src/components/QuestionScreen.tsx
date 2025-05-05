import React, { useState, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import OptionButton from './OptionButton';

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface QuestionScreenProps {
  question: Question;
  onSelectOption: (questionId: number, optionIndex: number) => void;
  isLastQuestion: boolean;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ 
  question, 
  onSelectOption, 
  isLastQuestion
}) => {
  const [typing, setTyping] = useState(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Reset states when question changes
    setTyping(true);
    setSelectedOption(null);
    setShowOptions(false);
    
    // Simulate typing effect
    const typingTimer = setTimeout(() => {
      setTyping(false);
      
      // Show options after typing is complete
      const optionsTimer = setTimeout(() => {
        setShowOptions(true);
      }, 300);
      
      return () => clearTimeout(optionsTimer);
    }, 1500);
    
    return () => clearTimeout(typingTimer);
  }, [question]);

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    // Delay moving to next question for animation effect
    setTimeout(() => {
      onSelectOption(question.id, optionIndex);
    }, 800);
  };

  return (
    <div className="flex flex-col space-y-8 w-full max-w-3xl mx-auto">
      <ChatBubble 
        message={question.text} 
        isTyping={typing}
      />
      
      {showOptions && (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center">
          {question.options.map((option, index) => (
            <OptionButton
              key={index}
              label={option}
              onClick={() => handleOptionClick(index)}
              selected={selectedOption === index}
              disabled={selectedOption !== null}
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>
      )}
      
      {isLastQuestion && selectedOption !== null && (
        <div className="bg-green-100 p-4 rounded-xl border border-green-200 mt-6 animate-fade-in">
          <p className="text-green-800 font-medium text-center">
            ¡Gracias por completar todas las preguntas! Pronto tendremos tus resultados.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionScreen;
