import React from 'react';

export default function Legal({ type }) {
  return (
    <div className="animate-fade-in py-20 px-4 max-w-2xl mx-auto text-xs text-slate-600 space-y-4">
      <h2 className="font-serif text-2xl font-bold text-brand-navy border-b pb-2 capitalize">{type} Policy</h2>
      <p>Standard regulatory compliance files regarding Digitech Elevators operation and maintenance details in Bangalore.</p>
    </div>
  );
}
