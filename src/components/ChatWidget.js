import React from 'react';
import { MessageSquare } from 'lucide-react';

export const ChatWidget = () => {
  return (
    <button 
      onClick={() => console.log('Chat widget clicked!')}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center z-40"
      aria-label="Chat with us"
    >
      <MessageSquare className="w-7 h-7" />
    </button>
  );
};
