import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log('Form Payload:', { ...formData, timestamp: new Date().toISOString() });
    
    // Fake form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      onFormSubmit('Message sent! We\'ll contact you soon.'); // Triggers notification
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <AnimatedSection id="contact" className="py-32 px-6 bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Have a project in mind? Let's talk!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-3">Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:outline-none" placeholder="Your name"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-3">Email *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:outline-none" placeholder="your@email.com"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-3">Phone</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:outline-none" placeholder="+91 1234567890"/>
            </div>
            <div>
              <label className="block text-sm font-bold mb-3">Service *</label>
              <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:outline-none">
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="design">UI/UX Design</option>
                <option value="software">Software Development</option>
                <option value="maintenance">Maintenance & Support</option>
                <option value="training">Internships & Training</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-3">Message *</label>
              <textarea required rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:outline-none resize-none" placeholder="Tell us about your project..."/>
            </div>
            <button type="submit" disabled={formStatus === 'submitting'} className="w-full px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg flex items-center justify-center space-x-3 disabled:opacity-50">
              <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-6 h-6" />
            </button>
            {formStatus === 'success' && <p className="text-center text-green-400 font-bold">✓ Message sent successfully!</p>}
          </form>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <a href="mailto:info@appdost.com" className="block text-sm text-slate-600 dark:text-slate-300 hover:text-blue-400">info@appdost.com</a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Response within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Available for consultation</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Mon - Sat: 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Offices</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Banka, Bihar, India</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Branches: Motihari & Patna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};