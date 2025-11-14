import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatWidget } from './ChatWidget';
import { ScrollToTopButton } from './ScrollToTopButton';
import { Notification } from './Notification';

// This component makes sure new pages load scrolled to the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const Layout = ({ notification }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
      <ScrollToTop />
      
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
      
      {/* This renders the current page (Home, About, etc.) */}
      <main className="relative z-10">
        <Outlet />
      </main>
      
      <Footer />
      <ScrollToTopButton />
      <ChatWidget />
    </div>
  );
};


