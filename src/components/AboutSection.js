import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { missionVision } from '../data';

export const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="py-32 px-6 bg-gradient-to-b from-slate-50 via-indigo-50 to-slate-50 dark:from-slate-950 dark:via-indigo-950/10 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">About AppDost</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            Next-generation IT services specializing in software, web, and mobile app development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {[missionVision.mission, missionVision.vision].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl hover:scale-105 transition-transform">
              {item.icon}
              <h3 className="text-3xl font-black mb-4">{item.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
