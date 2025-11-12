import React, { useState, useEffect, useRef } from 'react';
import { AnimatedSection, AnimatedCounter } from './AnimatedSection';
import { heroContent } from '../data';
import { Sparkles, ArrowRight } from 'lucide-react';

export const HomeSection = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    // Corrected: Store statsRef.current in a variable
    const node = statsRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStatsVisible(true);
    }, { threshold: 0.5 });

    // Use the variable to observe
    if (node) observer.observe(node);
    
    // Use the variable in the cleanup function
    return () => { if (node) observer.unobserve(node); };
  }, []); // Empty dependency array is correct here

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatedSection id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-blue-100 dark:bg-blue-500/10 border-2 border-purple-500/30 rounded-full px-6 py-3 mb-10">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-sm bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {heroContent.tagline} {/* From PDF */}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            Build The Next <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Big Thing</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-14 max-w-3xl mx-auto font-medium">
            {heroContent.subtext} {/* From PDF */}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          _ <button onClick={(e) => handleNavClick(e, '#contact')} className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
              <span className="flex items-center space-x-3">
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <button onClick={(e) => handleNavClick(e, '#portfolio')} className="px-10 py-5 bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-2xl hover:scale-105 transition-all font-bold text-lg">
V             View Our Work
            </button>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {[{ number: 50, label: "Projects", suffix: "+" }, { number: 30, label: "Clients", suffix: "+" }, { number: 15, label: "Team", suffix: "+" }, { number: 98, label: "Success", suffix: "%" }].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform shadow-lg">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
F                 <AnimatedCounter end={stat.number} isVisible={statsVisible} />{stat.suffix}
          _   </div>
                <div className="text-slate-600 dark:text-slate-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
      </div>
    </AnimatedSection>
  );
};