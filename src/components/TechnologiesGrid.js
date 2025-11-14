import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { technologies } from '../data';

export const TechnologiesGrid = () => {
  // We duplicate the array to create a seamless loop
  const techLogos = [...technologies, ...technologies];

  return (
    <AnimatedSection id="tech" className="py-32 px-6 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Technologies We Use</h2>
        </div>
        
        {/* --- UPDATE: Auto-scrolling Carousel --- */}
        <div 
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
            {techLogos.map((tech, i) => (
              <li 
                key={i} 
                className="flex-shrink-0 w-60 flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl"
              >
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 bg-slate-100 dark:bg-slate-800">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-black">{tech.name}</h3>
              </li>
            ))}
          </ul>
           <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
            {techLogos.map((tech, i) => (
              <li 
                key={i} 
                className="flex-shrink-0 w-60 flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl"
              >
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 bg-slate-100 dark:bg-slate-800">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-black">{tech.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

