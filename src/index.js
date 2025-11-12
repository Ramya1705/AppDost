import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your Tailwind CSS import
import AppDost from './AppDost'; // Or App.js
import { ThemeProvider } from './context/ThemeContext'; // 1. Import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Wrap your entire <AppDost /> component here */}
    <ThemeProvider>
      <AppDost />
    </ThemeProvider>
  </React.StrictMode>
);