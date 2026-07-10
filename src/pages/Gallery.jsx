import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/siteData';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'installation', label: 'Installation Photos' },
    { id: 'machineroom', label: 'Machine Room Photos' },
    { id: 'completed', label: 'Completed Projects' },
    { id: 'modernization', label: 'Modernization Works' },
    { id: 'team', label: 'Team at Work' }
  ];

  // Flatten or filter gallery items depending on tab
  const getItems = () => {
    if (activeTab === 'all') {
      return Object.values(GALLERY_DATA).flat();
    }
    return GALLERY_DATA[activeTab] || [];
  };

  return (
    <div className="animate-fade-in">
      <section className="relative bg-brand-navy text-white py-24 px-4 text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        >
          <source src="lift2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay & radial gradient overlay for premium lighting */}
        <div className="absolute inset-0 bg-brand-navy/70 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_70%)] z-[2]"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">Visual Showcase</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold animate-gold-shimmer">Media Gallery</h2>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        {/* Gallery Tabs */}
        <div className="flex flex-wrap justify-center gap-3 border-b border-slate-200 pb-6 scroll-reveal">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition hover:text-brand-navy ${activeTab === t.id ? 'border-b-2 border-brand-gold text-brand-gold font-bold' : 'text-slate-500'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal-container">
          {getItems().map((item, i) => (
            <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition duration-300 scroll-reveal card-hover">
              <div className="h-56 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-115 transition duration-700 opacity-60" style={{ backgroundImage: `url('${item.img}')` }}></div>
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/40 transition duration-300"></div>
                {/* Horizontal elevator shaft lines */}
                <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none opacity-5 group-hover:opacity-15 transition-opacity">
                  {[25, 50, 75].map(pos => (
                    <div key={pos} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${pos}%` }} />
                  ))}
                </div>
                <div className="z-10 bg-brand-navy/60 text-brand-gold border border-brand-gold/30 rounded px-2.5 py-1.5 text-[10px] uppercase font-bold opacity-0 group-hover:opacity-100 transition duration-300 scale-95 group-hover:scale-100">
                  <i className="fa-solid fa-magnifying-glass-plus mr-1"></i> View Large
                </div>
              </div>
              <div className="p-4 space-y-1 bg-white">
                <h4 className="font-bold text-brand-navy text-sm">{item.title}</h4>
                <p className="text-[11px] text-slate-500 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
