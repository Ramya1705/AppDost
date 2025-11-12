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
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div key={i} onClick={() => onProjectClick(project)} className="group overflow-hidden rounded-3xl cursor-pointer hover:scale-105 transition-all bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl">
              <div className={`aspect-video ${project.image} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-3xl font-black mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.stats}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};