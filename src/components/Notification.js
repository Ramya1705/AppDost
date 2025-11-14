import React from 'react';
import { Check } from 'lucide-react';

export const Notification = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-[150] flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 shadow-2xl">
      <Check className="w-5 h-5 text-green-400"/>
      <span className="text-sm font-semibold">{message}</span>
    </div>
  );
};
