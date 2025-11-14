import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { customers } from '../data';

export const CustomerLogos = () => {
  return (
    <AnimatedSection className="py-24 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-3xl font-black text-slate-900 dark:text-white mb-12">
          Trusted By Customers Like
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {customers.map((customer, i) => (
            <div key={i} className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
              {customer.icon}
              <span className="text-2xl font-bold text-slate-600 dark:text-slate-400">{customer.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
