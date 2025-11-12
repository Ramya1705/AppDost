import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data';
import { Menu, X, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navId = (link) => (link === 'Home' ? '#home' : `#${link.toLowerCase()}`);

  return (
    <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl border-b-2 border-slate-200 dark:border-slate-800 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center space-x-3 group">
            {/* --- UPDATED LOGO --- */}
            <img
              src="https://res.cloudinary.com/dhled94be/image/upload/v1762145701/course_thumbnails/fc5f257dr6tzjntorhse.png"
              alt="AppDost Logo"
              className="w-12 h-12 rounded-2xl group-hover:scale-110 transition-all shadow-lg"
            />
            {/* --- END UPDATE --- */}
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AppDost</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(item => (
              <a key={item} href={navId(item)} onClick={(e) => handleNavClick(e, navId(item))} className="font-semibold hover:text-purple-500 transition-colors">{item}</a>
            ))}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 rounded-xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:scale-110 transition-all">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {/* --- UPDATED BUTTON TEXT --- */}
            <button onClick={(e) => handleNavClick(e, '#contact')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all">
              Get a Quote
            </button>
            {/* --- END UPDATE --- */}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t-2 border-slate-200 dark:border-slate-800">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map(item => (
              <a key={item} href={navId(item)} onClick={(e) => handleNavClick(e, navId(item))} className="block py-3 px-4 rounded-xl hover:bg-purple-500/10 font-semibold">{item}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
