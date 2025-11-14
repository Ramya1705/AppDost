import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { CareersSection } from '../components/CareersSection';
import { CTABanner } from '../components/CTABanner';

export const Career = ({ onJobClick }) => {
  return (
    <div className="pt-24">
      <AnimatedSection className="py-32 px-6 bg-gradient-to-b from-slate-100 dark:from-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We are always looking for passionate and talented individuals to help us build the future of technology.
          </p>
        </div>
      </AnimatedSection>
      <CareersSection onJobClick={onJobClick} />
      <CTABanner />
    </div>
  );
};

