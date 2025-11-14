import React from 'react';
import { ContactSection } from '../components/ContactSection';

export const Contact = ({ showNotification }) => {
  return (
    <div className="pt-24">
      <ContactSection onFormSubmit={showNotification} />
    </div>
  );
};