import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const CTABanner = () => {
  return (
    <AnimatedSection className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          Have an idea? <br /> Let's build it together.
        </h2>
        <Link 
          to="/contact"
          className="group px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all inline-block"
        >
          <span className="flex items-center space-x-3">
            <span>Contact Us Now</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </span>
        </Link>
      </div>
    </AnimatedSection>
  );
};

