
import React from 'react';
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  isTyping?: boolean;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ 
  message, 
  isTyping = false,
  className,
  style,
  animationDelay = '0s'
}) => {
  return (
    <div 
      className={cn("chat-bubble max-w-3xl", className)}
      style={{ 
        animationDelay,
        ...style
      }}
    >
      {/* Bubble arrow */}
      <div className="absolute -bottom-2 -left-0 w-4 h-4 bg-mentor-bubble border-l border-b border-purple-100 transform rotate-45"></div>
      
      {isTyping ? (
        <div className="flex space-x-2 items-center h-6">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      ) : (
        <p className="text-gray-800">{message}</p>
      )}
    </div>
  );
};

export default ChatBubble;
