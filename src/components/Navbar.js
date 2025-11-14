import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link & NavLink
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const dropdownLinks = [
    { name: 'Meet Our Team', path: '/team' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Terms & Privacy', path: '/terms' },
  ];

  const NavLinkItem = ({ to, children }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `font-semibold transition-colors ${isActive ? 'text-purple-500' : 'hover:text-purple-500'}`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl border-b-2 border-slate-200 dark:border-slate-800 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://res.cloudinary.com/dhled94be/image/upload/v1762145701/course_thumbnails/fc5f257dr6tzjntorhse.png"
              alt="AppDost Logo"
              className="w-12 h-12 rounded-2xl group-hover:scale-110 transition-all shadow-lg"
            />
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">AppDost</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(item => (
              <NavLinkItem key={item.name} to={item.path}>{item.name}</NavLinkItem>
            ))}
            
            {/* Dropdown Menu */}
            <div 
              className="relative" 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center font-semibold hover:text-purple-500 transition-colors">
                More <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 z-50">
                  {dropdownLinks.map(link => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-4 py-3 rounded-xl text-sm font-semibold hover:bg-purple-500/10 text-slate-900 dark:text-white"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 rounded-xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:scale-110 transition-all">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all">
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile Nav Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t-2 border-slate-200 dark:border-slate-800">
          <div className="px-6 py-6 space-y-4">
            {[...navLinks, ...dropdownLinks].map(item => (
              <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-purple-500/10 font-semibold">{item.name}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
