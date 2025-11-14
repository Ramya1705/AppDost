import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Career } from './pages/Career';
import { Team } from './pages/Team';
import { FAQ } from './pages/FAQ';
import { Terms } from './pages/Terms';
import { PortfolioModal, JobModal } from './components/Modals';

export default function AppDost() {
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  const layoutProps = {
    notification,
    showNotification,
  };

  return (
    <>
      <Routes>
        {/* All pages are rendered inside the Layout component */}
        <Route path="/" element={<Layout {...layoutProps} />}>
          
          {/* Page Components */}
          <Route 
            index 
            element={<Home onProjectClick={setSelectedProject} showNotification={showNotification} />} 
          />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact showNotification={showNotification} />} />
          <Route path="careers" element={<Career onJobClick={setSelectedJob} />} />
          <Route path="team" element={<Team />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="terms" element={<Terms />} />
          
          {/* Fallback Route */}
          <Route 
            path="*" 
            element={<Home onProjectClick={setSelectedProject} showNotification={showNotification} />} 
          />
        </Route>
      </Routes>

      {/* Modals */}
      <PortfolioModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <JobModal 
        job={selectedJob} 
        onClose={() => setSelectedJob(null)} 
      />
    </>
  );
}
