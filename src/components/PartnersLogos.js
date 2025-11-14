import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { partners } from '../data';

export const PartnersLogos = () => {
  return (
    <AnimatedSection className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-3xl font-black text-slate-900 dark:text-white mb-12">
          Supported & Recognized By
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
              {partner.icon}
              <span className="text-2xl font-bold text-slate-600 dark:text-slate-400">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};