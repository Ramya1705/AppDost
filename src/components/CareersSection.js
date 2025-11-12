import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { jobs } from '../data';
import { MapPin, Briefcase } from 'lucide-react';

export const CareersSection = ({ onJobClick }) => {
  return (
    <AnimatedSection id="careers" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Join Our Team</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <div 
              key={i} 
              onClick={() => onJobClick(job)} 
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:scale-105 transition-transform cursor-pointer shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-black">{job.title}</h3>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold">{job.type}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{job.description}</p>
              <div className="flex items-center gap-4 text-sm mb-4">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{job.location}</span>
                <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" />{job.experience}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-bold">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};