import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What services do you offer?", a: "We offer a full range of IT services, including custom software development, mobile app development (iOS & Android), web design, cloud & DevOps, and digital marketing." },
  { q: "What technologies do you specialize in?", a: "Our team is expert in Java (Spring Boot), React, Angular, React Native, Node.js, Python, and cloud platforms like AWS." },
  { q: "How long does a project typically take?", a: "Project timelines vary based on complexity. A simple website might take 4-6 weeks, while a complex mobile app could take 4-6 months. We provide a detailed timeline after our initial discovery call." },
  { q: "How much will my project cost?", a: "We provide custom quotes based on your specific requirements. We are known for our affordable pricing, especially for startups. Contact us for a free, no-obligation quote." },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 border-slate-200 dark:border-slate-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left"
      >
        <span className="text-xl font-black">{faq.q}</span>
        <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6 pr-10">
          <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="pt-24">
      <AnimatedSection className="py-32 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

