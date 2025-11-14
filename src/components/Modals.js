import React from 'react';
import { X, Check } from 'lucide-react';

export const PortfolioModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl p-10 max-w-2xl w-full border-2 border-slate-200 dark:border-slate-800 shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-4xl font-black">{project.title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl">
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg">{project.fullDescription}</p>
        <div className="mb-6">
          <div className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">Technologies</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-bold">{t}</span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <div className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-2">Duration</div>
          <div className="font-black text-lg">{project.duration}</div>
        </div>
      </div>
    </div>
  );
};

export const JobModal = ({ job, onClose }) => {
  if (!job) return null;

  const handleApply = (job) => {
    onClose();
    window.location.href = `mailto:careers@appdost.com?subject=${encodeURIComponent(`Application for ${job.title}`)}&body=${encodeURIComponent(`Hello AppDost,\n\nI'm interested in ${job.title}.\n\nName:\nEmail:\nPhone:\nExperience:\nPortfolio:\n\nBest regards,`)}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl p-10 max-w-3xl w-full border-2 border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-4xl font-black mb-2">{job.title}</h3>
            <p className="text-purple-400 font-bold text-lg">{job.type} - {job.location}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="font-black text-2xl mb-6">Requirements</h4>
            <ul className="space-y-3">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-2xl mb-6">Responsibilities</h4>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button onClick={() => handleApply(job)} className="w-full mt-10 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-lg">Apply Now</button>
      </div>
    </div>
  );
};
