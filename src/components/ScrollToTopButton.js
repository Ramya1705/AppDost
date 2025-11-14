import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export const ScrollToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isScrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-8 right-28 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:scale-110 transition-all flex items-center justify-center z-40"
        >
          <ChevronRight className="w-6 h-6 -rotate-90" />
        </button>
      )}
    </>
  );
};