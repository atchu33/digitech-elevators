import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/siteData';

const APP_ICONS = {
  'Apartments': 'fa-building',
  'Office Buildings': 'fa-building-shield',
  'Shopping Malls': 'fa-store',
  'Hotels': 'fa-hotel',
  'Educational Institutions': 'fa-school',
  'Commercial Complexes': 'fa-city',
  'Hospitals': 'fa-hospital',
  'Clinics': 'fa-house-medical',
  'Medical Colleges': 'fa-graduation-cap',
  'Healthcare Centres': 'fa-hand-holding-medical',
  'Factories': 'fa-industry',
  'Warehouses': 'fa-warehouse',
  'Industries': 'fa-gears',
  'Shopping Centres': 'fa-bag-shopping',
  'Logistics Facilities': 'fa-truck-moving',
  'Villas': 'fa-house-laptop',
  'Duplex Houses': 'fa-home',
  'Bungalows': 'fa-campground',
  'Private Homes': 'fa-house'
};

export default function ProductDetail({ productKey, fallbackToHome }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState(null); // index of open image
  const prod = PRODUCTS_DATA[productKey];

  if (!prod) {
    if (fallbackToHome) fallbackToHome();
    return null;
  }

  const handleFormSubmit = (e) => { e.preventDefault(); setFormSubmitted(true); };

  const gallery = prod.gallery || [];

  return (
    <div className="animate-fade-simple">
      {/* ── Premium Split Banner ── */}
      <section className="relative bg-brand-navy text-white py-6 md:py-8 px-4 md:px-8 border-b-4 border-brand-gold overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-3 text-left">
            <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-3 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-widest animate-fade-simple">
              Premium range
            </span>
            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-slide-left">
                {prod.bannerTitle}
              </h2>
              <p className="text-brand-gold font-bold text-[11px] md:text-xs tracking-wider uppercase flex items-center gap-1.5 animate-slide-right">
                <i className="fa-solid fa-circle-check text-[9px]"></i> {prod.bannerSubtitle}
              </p>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-xl animate-fade-simple">
              {prod.desc}
            </p>
          </div>
          
          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[16/10] h-48 md:h-52 rounded-xl overflow-hidden border border-brand-gold/50 shadow-2xl shadow-black/85 group scroll-reveal-scale">
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-lg flex items-center justify-between text-[10px]">
                <span className="font-bold text-white uppercase tracking-wider">{prod.title}</span>
                <span className="text-brand-gold font-bold flex items-center gap-1">
                  <i className="fa-solid fa-shield-halved text-[10px]"></i> Certified Safety
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image Gallery ── */}
      {gallery.length > 0 && (
        <section className="bg-slate-50 py-14 px-4 md:px-8 border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="text-center space-y-2 mb-8 scroll-reveal">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold animate-draw-line">Visual Showcase</h3>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy">{prod.bannerTitle} — Photo Gallery</h2>
            </div>

            {/* Gallery Grid of Vertical Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-reveal-container">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group border border-slate-200 bg-white aspect-[3/4] transition duration-300 hover:shadow-2xl scroll-reveal"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent opacity-85 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-white font-serif font-bold text-xs md:text-sm leading-snug">{img.caption}</p>
                    <p className="text-brand-gold text-[10px] font-bold uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                      <i className="fa-solid fa-magnifying-glass-plus text-[9px]"></i> View Full
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="animate-zoom-in max-w-4xl w-full space-y-4" onClick={e => e.stopPropagation()}>
            <img
              src={gallery[lightbox].url}
              alt={gallery[lightbox].caption}
              className="w-full rounded-2xl shadow-2xl max-h-[75vh] object-contain"
            />
            <div className="flex items-center justify-between px-2">
              <p className="text-white font-serif text-lg">{gallery[lightbox].caption}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setLightbox(l => (l - 1 + gallery.length) % gallery.length)}
                  className="w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-full flex items-center justify-center text-white transition"
                ><i className="fa-solid fa-chevron-left"></i></button>
                <button
                  onClick={() => setLightbox(l => (l + 1) % gallery.length)}
                  className="w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-full flex items-center justify-center text-white transition"
                ><i className="fa-solid fa-chevron-right"></i></button>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-10 h-10 bg-white/10 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition"
                ><i className="fa-solid fa-xmark"></i></button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Content ── */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-14">
          {/* Overview */}
          <div className="space-y-4 scroll-reveal-left">
            <h3 className="font-serif font-bold text-2xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3">
              <i className="fa-solid fa-circle-info text-brand-gold text-base"></i> Overview
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed bg-slate-50 border-l-4 border-brand-gold p-5.5 rounded-r-2xl shadow-xs">
              {prod.desc}
            </p>
          </div>

          {/* Applications Area */}
          <div className="space-y-4 scroll-reveal">
            <h3 className="font-serif font-bold text-xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3">
              <i className="fa-solid fa-building text-brand-gold text-base"></i> Suitability & Applications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 scroll-reveal-container">
              {prod.apps.map((a, i) => {
                const icon = APP_ICONS[a] || 'fa-building';
                return (
                  <div key={i} className="flex flex-col items-center justify-center text-center p-4 bg-slate-50/70 rounded-2xl border border-slate-100/80 scroll-reveal">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold text-base mb-2 shrink-0">
                      <i className={`fa-solid ${icon}`}></i>
                    </div>
                    <span className="text-[11px] font-bold text-brand-navy">{a}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Features & Why Choose Row */}
          <div className="space-y-4 scroll-reveal">
            <h3 className="font-serif font-bold text-xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3">
              <i className="fa-solid fa-list-check text-brand-gold text-base"></i> Engineered Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 scroll-reveal-container">
              {prod.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 scroll-reveal">
                  <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 shrink-0 text-xs">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Capacities */}
          <div className="space-y-4 scroll-reveal">
            <h3 className="font-serif font-bold text-xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3">
              <i className="fa-solid fa-weight-hanging text-brand-gold text-base"></i> Available Capacities
            </h3>
            <div className="flex flex-wrap gap-2.5 scroll-reveal-container">
              {prod.caps.map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-brand-navy text-white px-4 py-2.5 rounded-xl border border-brand-navy/10 text-xs font-semibold scroll-reveal">
                  <i className="fa-solid fa-weight-scale text-brand-gold shrink-0"></i>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Trust Banner (Why Choose) */}
          <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-6 rounded-r-2xl space-y-4 scroll-reveal">
            <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2">
              <i className="fa-solid fa-award text-brand-gold text-base"></i> Why Choose Digitech for {prod.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {prod.whyChoose.map((w, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-brand-navy font-semibold">
                  <i className="fa-solid fa-circle-check text-brand-gold shrink-0 text-sm"></i>
                  {w}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Specs */}
          <div className="space-y-4 scroll-reveal">
            <h3 className="font-serif font-bold text-2xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3">
              <i className="fa-solid fa-gears text-brand-gold text-base"></i> Technical Specifications
            </h3>
            <div className="bg-gradient-to-tr from-brand-navy via-slate-800 to-brand-navy p-6 rounded-2xl shadow-xl text-white space-y-5 border-b-4 border-brand-gold">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(prod.specs).map(([k, v]) => (
                  <div key={k} className="flex flex-col p-3.5 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider">{k}</span>
                    <span className="text-xs font-semibold text-slate-200 mt-1">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Product CTA Callout Card ── */}
          <div className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white p-8 rounded-2xl border-b-4 border-brand-gold text-center relative overflow-hidden shadow-xl scroll-reveal">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              {[20, 50, 80].map(pos => (
                <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold" style={{ left: `${pos}%`, animation: 'shaftGlow 3s infinite' }} />
              ))}
            </div>
            <div className="space-y-5 relative z-10">
              <h3 className="font-serif font-bold text-xl md:text-2xl">Ready to Upgrade with a Reliable Elevator?</h3>
              <p className="text-slate-300 text-xs leading-relaxed max-w-xl mx-auto">
                Whether you require a passenger elevator, hospital lift, goods lift, home elevator, hydraulic lift, or an MRL solution, Digitech Elevators provides customized systems for safety, reliability, and long-term performance.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a href="#/quote"   className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-5 py-2.5 rounded-lg text-[10px] uppercase tracking-wider transition shadow-lg hover:scale-105 btn-glow">Free Consultation</a>
                <a href="#/quote"   className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-5 py-2.5 rounded-lg text-[10px] uppercase tracking-wider transition hover:scale-105">Get a Quote</a>
                <a href="#/contact" className="border border-white hover:border-brand-gold hover:text-brand-gold text-white font-bold px-5 py-2.5 rounded-lg text-[10px] uppercase tracking-wider transition hover:scale-105">Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6 sticky top-28 h-fit">
            <h3 className="font-serif font-bold text-xl text-brand-navy border-b border-slate-200 pb-3">Inquire Now</h3>
            {formSubmitted ? (
              <div className="text-center py-10 animate-zoom-in">
                <i className="fa-solid fa-circle-check text-5xl text-green-500 mb-4 animate-bounce block"></i>
                <h4 className="font-serif font-bold text-lg mb-2 text-brand-navy">Request Submitted!</h4>
                <p className="text-xs text-slate-500">Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Your Name</label>
                  <input type="text" placeholder="Name" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Mobile Number</label>
                  <input type="tel" placeholder="Mobile" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Location</label>
                  <input type="text" placeholder="City / Area" defaultValue="Bangalore" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                </div>
                <button type="submit" className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition shadow hover:shadow-lg hover:scale-[1.01] btn-glow">
                  Request Technical Layout
                </button>
                <a href="#/quote" className="block text-center border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-bold py-2.5 rounded-xl text-xs uppercase tracking-widest transition">
                  Get Full Quote
                </a>
              </form>
            )}

            {/* Quick trust markers */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs text-slate-500">
              <p className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-green-500 animate-pulse"></i> Experienced Engineering Team</p>
              <p className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-green-500 animate-pulse delay-200"></i> 24/7 Breakdown Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
