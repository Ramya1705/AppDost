import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your Tailwind CSS import
import AppDost from './AppDost'; // Or App.js
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppDost />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

