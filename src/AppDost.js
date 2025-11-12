import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext'; // <-- This line is now fixed

// Import all your new components
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TechnologiesGrid } from './components/TechnologiesGrid';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CareersSection } from './components/CareersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Notification } from './components/Notification';
import { PortfolioModal, JobModal } from './components/Modals';

export default function AppDost() {
  const [notification, setNotification] = useState({ show: false, message: '' });
  
  // State for modals will be lifted here
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <ThemeProvider>
      {/* This main div now uses Tailwind's dark: variants */}
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
        
        {/* Background blur effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
        </div>
        
        <Notification 
          show={notification.show} 
          message={notification.message} 
        />
        
        <Navbar />
        
        <main className="relative z-10">
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <TechnologiesGrid />
          <PortfolioSection onProjectClick={setSelectedProject} />
          <WhyChooseUs />
          <CareersSection onJobClick={setSelectedJob} />
          <TestimonialsSection />
          <ContactSection onFormSubmit={showNotification} />
        </main>
        
        <Footer />
        <ScrollToTopButton />

        {/* Modals */}
        <PortfolioModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
        <JobModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      </div>
    </ThemeProvider>
  );
}