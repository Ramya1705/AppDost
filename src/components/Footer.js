import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Send, Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-200 dark:border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* This grid is already responsive. It's 1 col on mobile and 4 on desktop. */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Socials */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://res.cloudinary.com/dhled94be/image/upload/v1762145701/course_thumbnails/fc5f257dr6tzjntorhse.png"
                alt="AppDost Logo"
                className="w-12 h-12 rounded-2xl"
              />
              <span className="text-2xl font-black">AppDost</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Transforming ideas into digital reality.</p>
            <div className="flex space-x-4">
              {/* Use real/placeholder external URLs and accessible labels */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AppDost on LinkedIn"
                title="LinkedIn"
                className="w-12 h-12 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AppDost on Twitter"
                title="Twitter"
                className="w-12 h-12 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AppDost on Instagram"
                title="Instagram"
                className="w-12 h-12 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Company Links */}
          <div>
            <h4 className="font-black mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-black mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@appdost.com" className="hover:text-blue-400 transition-colors">info@appdost.com</a> 
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="https://www.appdost.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">www.appdost.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span>Banka, Bihar, India</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-black mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Get updates on our latest projects.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 focus:outline-none text-sm" />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-2xl hover:shadow-lg transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t-2 border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© 2025 AppDost Pvt. Ltd. | All Rights Reserved | Designed by AppDost Team</p>
        </div>
      </div>
    </footer>
  );
};
