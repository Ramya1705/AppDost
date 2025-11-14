import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { services } from '../data'; // Import new data
import { Check } from 'lucide-react';

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <AnimatedSection id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our Core Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              onClick={() => setActiveService(activeService === i ? null : i)} 
              // Cleaner styling with dark:
              className={`group p-8 rounded-3xl cursor-pointer transition-all hover:scale-105 shadow-xl ${
                activeService === i 
                ? `bg-gradient-to-br ${service.gradient} text-white` 
                : 'bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${activeService === i ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-3">{service.title}</h3>
              <p className={`mb-5 ${activeService === i ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                {activeService === i ? service.description : service.description}
              </p>
              <ul className={`space-y-2 transition-all duration-300 ${activeService === i ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center space-x-2 text-sm ${activeService === i ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>
                    <Check className="w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
