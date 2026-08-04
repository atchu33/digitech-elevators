import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/siteData';

const categories = [
  'All Projects',
  'Featured Projects',
  'Residential Apartments',
  'Commercial Buildings',
  'Healthcare & Institutions',
];

export default function Projects() {
  const [filter, setFilter] = useState('All Projects');

  const shown = filter === 'All Projects'
    ? PROJECTS_DATA.filter(p => !p.isCategoryOnly)
    : filter === 'Featured Projects'
      ? PROJECTS_DATA.filter(p => p.isFeatured)
      : PROJECTS_DATA.filter(p => p.category === filter && !p.isFeatured);

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
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Explore 25 verified elevator installation projects delivered across Bangalore with precision & safety.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => {
            const count = cat === 'All Projects'
              ? PROJECTS_DATA.filter(p => !p.isCategoryOnly).length
              : cat === 'Featured Projects'
                ? PROJECTS_DATA.filter(p => p.isFeatured).length
                : PROJECTS_DATA.filter(p => p.category === cat && !p.isFeatured).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 ${
                  filter === cat
                    ? 'bg-brand-gold text-brand-navy shadow-lg scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-gold hover:text-brand-navy'
                }`}
              >
                {cat === 'Featured Projects' ? '⭐ Featured Projects' : cat}
                <span className={`text-[10px] font-bold rounded-full px-1.5 py-0.5 ${filter === cat ? 'bg-brand-navy/20 text-brand-navy' : 'bg-slate-100 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shown.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-md border-2 border-slate-100 hover:border-brand-gold/60 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image or Graphic Container */}
              <div className="h-52 relative overflow-hidden bg-slate-900">
                {!p.noImage && p.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-90"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-slate-900 to-slate-800 flex items-center justify-center p-6 text-center">
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/40 text-brand-gold flex items-center justify-center mx-auto text-xl">
                        <i className="fa-solid fa-elevator" />
                      </div>
                      <span className="text-xs font-serif text-slate-300 block italic">Architectural Installation Spec</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
                
                {/* Badges on top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="bg-brand-navy/90 border border-brand-gold/40 text-brand-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    {p.category}
                  </span>
                  {p.isFeatured && (
                    <span className="bg-brand-gold text-brand-navy text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <h4 className="font-serif font-bold text-lg text-white leading-tight drop-shadow-md">
                    {p.name}
                  </h4>
                </div>
              </div>

              {/* Card Body Parameters */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5 text-slate-600">
                    <i className="fa-solid fa-location-dot text-brand-gold shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Location:</strong> {p.location}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Elevator Type</span>
                      <span className="text-slate-800 font-semibold text-[11px]">{p.type}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Capacity</span>
                      <span className="text-slate-800 font-semibold text-[11px]">{p.cap}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Floors</span>
                      <span className="text-slate-800 font-semibold text-[11px]">{p.stops}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">System</span>
                      <span className="text-slate-800 font-semibold text-[11px]">{p.system}</span>
                    </div>
                  </div>

                  {p.door && (
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Door Type</span>
                      <span className="text-slate-800 font-semibold text-[11px]">{p.door}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Year Installed</span>
                  <span className="font-bold text-brand-navy bg-brand-gold/20 border border-brand-gold/30 px-3 py-1 rounded-full text-[11px]">
                    {p.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
