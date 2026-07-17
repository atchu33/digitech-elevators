import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/siteData';

const categories = [
  'All Projects',
  'Apartments',
  'Villas',
  'Commercial Complexes',
  'Hospitals',
  'Industries',
  'Educational Institutions',
];

export default function Projects() {
  const [filter, setFilter] = useState('All Projects');
  const shown = filter === 'All Projects' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in">
      {/* ── Banner ── */}
      <section className="relative bg-brand-navy text-white py-16 px-4 text-center hero-gradient overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        >
          <source src="lift5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-brand-navy/70 z-[1]"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] z-[2]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">Our Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Gallery of Completed Projects</h2>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${filter === cat ? 'bg-brand-gold text-brand-navy shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-gold hover:text-brand-navy'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shown.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group card-hover">
              {/* Visual image container */}
              <div className="h-48 relative flex items-end overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${p.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/40 to-transparent"></div>
                <div className="relative z-10 w-full px-5 pb-4">
                  <span className="bg-brand-gold/90 text-brand-navy text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h4 className="font-serif font-bold text-lg text-brand-navy leading-tight">{p.name}</h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] border-t border-slate-100 pt-3">
                  <div><span className="text-slate-400 font-semibold">Location:</span><br/><span className="text-slate-700">{p.location}</span></div>
                  <div><span className="text-slate-400 font-semibold">Elevator Type:</span><br/><span className="text-slate-700">{p.type}</span></div>
                  <div><span className="text-slate-400 font-semibold">Capacity:</span><br/><span className="text-slate-700">{p.cap}</span></div>
                  <div><span className="text-slate-400 font-semibold">Floors:</span><br/><span className="text-slate-700">{p.stops}</span></div>
                  <div><span className="text-slate-400 font-semibold">Year:</span><br/><span className="text-slate-700 font-bold">{p.year}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
