import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { PartnersLogos } from '../components/PartnersLogos';
import { CTABanner } from '../components/CTABanner';
import { Team } from './Team'; // We can reuse the team page content here

export const About = () => {
  return (
    <div className="pt-24">
      {/*  */}
      <AnimatedSection className="py-32 px-6 bg-gradient-to-b from-slate-100 dark:from-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About AppDost
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            AppDost Pvt. Ltd. is a next-generation IT services company specializing in software, web, and mobile app development. We help startups and enterprises scale their businesses through technology, design, and innovation.
          </p>
        </div>
      </AnimatedSection>
      <AboutSection />
      <WhyChooseUs />
      <PartnersLogos />
      <Team />
      <CTABanner />
    </div>
  );
};



