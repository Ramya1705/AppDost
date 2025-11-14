import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ServicesSection } from '../components/ServicesSection';
import { TechnologiesGrid } from '../components/TechnologiesGrid';
import { CTABanner } from '../components/CTABanner';

export const Services = () => {
  return (
    <div className="pt-24">
      <AnimatedSection className="py-32 px-6 bg-gradient-to-b from-slate-100 dark:from-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Core Services
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We provide end-to-end IT and digital solutions to help your business grow.
          </p>
        </div>
      </AnimatedSection>
      <ServicesSection />
      <TechnologiesGrid />
      <CTABanner />
    </div>
  );
};