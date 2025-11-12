import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { technologies } from '../data';

export const TechnologiesGrid = () => {
  return (
    <AnimatedSection id="tech" className="py-32 px-6 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Technologies We Use</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl hover:scale-105 transition-transform"
            >
              {/* --- UPDATED TO RENDER ICON --- */}
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 bg-slate-100 dark:bg-slate-800">
                {tech.icon}
              </div>
              <h3 className="text-lg font-black">{tech.name}</h3>
              {/* --- END UPDATE --- */}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};