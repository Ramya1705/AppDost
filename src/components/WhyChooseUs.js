import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { whyChooseUs } from '../data';

export const WhyChooseUs = () => {
  return (
    <AnimatedSection id="why-choose-us" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Why Choose AppDost</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100 dark:bg-slate-800">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};