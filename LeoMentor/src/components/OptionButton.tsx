
import React from 'react';
import { cn } from "@/lib/utils";

interface OptionButtonProps {
  label: string;
  onClick: () => void;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: string;
}

const OptionButton: React.FC<OptionButtonProps> = ({ 
  label, 
  onClick, 
  selected = false,
  disabled = false,
  className,
  style,
  animationDelay = '0s'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "option-button", 
        selected && "bg-option-selected",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      style={{ 
        animationDelay,
        ...style 
      }}
    >
      {label}
    </button>
  );
};

export default OptionButton;
