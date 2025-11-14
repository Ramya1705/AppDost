import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export const Terms = () => {
  return (
    <div className="pt-24">
      <AnimatedSection className="py-32 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Terms & Privacy Policy
            </h1>
          </div>
          <div className="space-y-8 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-3xl font-black mb-4">Terms of Service</h2>
              <p className="mb-4">[Your Terms of Service content goes here. This is a placeholder.]</p>
              <p>Welcome to AppDost. By accessing our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern AppDost's relationship with you in relation to this website...</p>
            </section>
             <section>
              <h2 className="text-3xl font-black mb-4">Privacy Policy</h2>
              <p className="mb-4">[Your Privacy Policy content goes here. This is a placeholder.]</p>
              <p>This privacy policy sets out how AppDost uses and protects any information that you give when you use this website. We are committed to ensuring that your privacy is protected...</p>
            </section>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
