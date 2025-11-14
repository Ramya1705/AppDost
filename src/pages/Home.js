import React from 'react';
import { HomeSection } from '../components/HomeSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { TechnologiesGrid } from '../components/TechnologiesGrid';
import { PortfolioSection } from '../components/PortfolioSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CustomerLogos } from '../components/CustomerLogos';
import { PartnersLogos } from '../components/PartnersLogos';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTABanner } from '../components/CTABanner';
import { ContactSection } from '../components/ContactSection';

export const Home = ({ onProjectClick, showNotification }) => {
  return (
    <>
      <HomeSection />
      <CustomerLogos />
      <AboutSection />
      <ServicesSection />
      <TechnologiesGrid />
      <PortfolioSection onProjectClick={onProjectClick} />
      <WhyChooseUs />
      <PartnersLogos />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection onFormSubmit={showNotification} />
    </>
  );
};

