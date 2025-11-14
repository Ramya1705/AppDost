import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { portfolio } from '../data';

export const PortfolioSection = ({ onProjectClick }) => {
  const [portfolioFilter, setPortfolioFilter] = useState('All');

  const categories = ['All', ...new Set(portfolio.map(p => p.category))];
  const filtered = portfolio.filter(p => portfolioFilter === 'All' || p.category === portfolioFilter);

  return (
    <AnimatedSection id="portfolio" className="py-32 px-6 bg-gradient-to-b from-slate-50 via-purple-50 to-slate-50 dark:from-slate-950 dark:via-purple-950/10 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map(cat => (
            <button key={cat} onClick={() => setPortfolioFilter(cat)} 
              className={`px-6 py-3 rounded-2xl font-bold transition-all ${
                portfolioFilter === cat 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110' 
                : 'bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* --- UPDATE: Horizontal Scroll Carousel --- */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute top-0 left-0 -ml-6 w-16 h-full bg-gradient-to-r from-slate-50 dark:from-slate-950 z-10" />
          <div className="absolute top-0 right-0 -mr-6 w-16 h-full bg-gradient-to-l from-slate-50 dark:from-slate-950 z-10" />
          
          <div className="flex space-x-8 overflow-x-auto p-4 snap-x snap-mandatory scrollbar-hide">
            {filtered.map((project, i) => (
              // This is the "small card with logo"
              <div 
                key={i} 
                onClick={() => onProjectClick(project)} 
                className="group flex-shrink-0 w-80 snap-center overflow-hidden rounded-3xl cursor-pointer hover:scale-105 transition-all bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl"
              >
                {/* --- UPDATE: Using style for background image --- */}
                <div 
                  className="h-48 relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-black mb-1">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.stats}</p>
                  </div>
                </div>
                {/* --- END UPDATE --- */}
                <div className="p-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm h-16">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t, idx) => ( // Show only first 3 techs
                      <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

