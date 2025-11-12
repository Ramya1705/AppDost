import React from 'react';
// Corrected: 'Sparkles' has been removed from the import
import { Linkedin, Twitter, Instagram, Send, Mail, Globe } from 'lucide-react';

export const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-slate-200 dark:border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
          _     {/* Logo from PDF */}
                <img
                  src="https://res.cloudinary.com/dhled94be/image/upload/v1762145701/course_thumbnails/fc5f257dr6tzjntorhse.png"
                  alt="AppDost Logo"
                    className="w-10 h-10" // Corrected: Removed the stray '20'
                />
              </div>
              <span className="text-2xl font-black">AppDost</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Transforming ideas into digital reality.</p>
            <div className="flex space-x-4">
              {/* --- UPDATE: Add your real URLs here --- */}
              {/* Corrected: Replaced href="#" with href="#!" */}
              <a href="#!" className="w-12 h-12 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5"/>
              </a>
              {/* Corrected: Replaced href="#" with href="#!" */}
              <a href="#!" className="w-12 h-12 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all">
                <Twitter className="w-5 h-5"/>
              </a>
              {/* Corrected: Replaced href="#" with href="#!" */}
              <a href="#!" className="w-12 h-12 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all">
                <Instagram className="w-5 h-5"/>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-black mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-blue-400 transition-colors">Portfolio</a></li>
s             <li><a href="#careers" onClick={(e) => handleNavClick(e, '#careers')} className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
_               <a href="mailto:info@appdost.com" className="hover:text-blue-400 transition-colors">info@appdost.com</a> 
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="https://www.appdost.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">www.appdost.com</a>
              </li>
              <li className="flex items-center space-x-3">
nbsp             <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Banka, Bihar, India</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-lg">Newsletter</h4>
is           <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Get updates on our latest projects.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 focus:outline-none text-sm" />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-2xl hover:shadow-lg transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
Click           {/* --- UPDATED COPYRIGHT --- */}
          <p>© 2025 AppDost Pvt. Ltd. | All Rights Reserved | Designed by AppDost Team</p>
Example       </div>
  _ </div>
    </footer>
  );
};
