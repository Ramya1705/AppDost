import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { testimonials } from '../data';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <AnimatedSection className="py-16 px-6 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-black text-center mb-12">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-xl hover:scale-105 transition-transform">
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${testimonial.image} rounded-2xl flex items-center justify-center text-white font-black`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-black">{testimonial.name}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};