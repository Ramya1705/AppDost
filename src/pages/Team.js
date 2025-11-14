import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  { name: "Team Member 1", role: "CEO & Founder", image: "https://placehold.co/400x400/3B82F6/FFFFFF?text=CEO" },
  { name: "Team Member 2", role: "CTO & Co-Founder", image: "https://placehold.co/400x400/8B5CF6/FFFFFF?text=CTO" },
  { name: "Team Member 3", role: "Lead Developer", image: "https://placehold.co/400x400/10B981/FFFFFF?text=Dev" },
  { name: "Team Member 4", role: "UI/UX Designer", image: "https://placehold.co/400x400/F59E0B/FFFFFF?text=UI/UX" },
];

export const Team = () => {
  return (
    <AnimatedSection className="py-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The passionate minds behind AppDost, dedicated to building your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-40 h-40 rounded-full mb-6 border-4 border-purple-500/20" 
              />
              <h3 className="text-2xl font-black mb-1">{member.name}</h3>
              <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
              <div className="flex space-x-4">
                {/* Use real profile URLs if available; placeholders open in a new tab */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  title={`${member.name} on LinkedIn`}
                  className="text-slate-500 hover:text-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Twitter`}
                  title={`${member.name} on Twitter`}
                  className="text-slate-500 hover:text-blue-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on GitHub`}
                  title={`${member.name} on GitHub`}
                  className="text-slate-500 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Team;
