import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/siteData';

export default function ServiceDetail({ serviceKey, fallbackToHome }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const srv = SERVICES_DATA[serviceKey];

  if (!srv) {
    if (fallbackToHome) fallbackToHome();
    return null;
  }

  const handleFormSubmit = (e) => { e.preventDefault(); setFormSubmitted(true); };

  return (
    <div className="animate-fade-in">
      {/* ── Banner ── */}
      <section className="relative bg-brand-navy text-white py-16 px-4 text-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">{srv.title}</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">{srv.desc}</p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-14">

          {/* INSTALLATION — 10-step timeline */}
          {serviceKey === 'installation' && (
            <div className="space-y-10">
              <h3 className="font-serif font-bold text-2xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3 scroll-reveal">
                <i className="fa-solid fa-list-check text-brand-gold text-base"></i> Our Installation Process
              </h3>
              <div className="space-y-6 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-brand-gold/25 scroll-reveal-container">
                {srv.process.map((p, i) => (
                  <div key={i} className="relative pl-14 space-y-1 scroll-reveal">
                    <div className="absolute left-2.5 top-1 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-md flex items-center justify-center">
                      <span className="text-[8px] font-bold text-brand-navy">{i+1}</span>
                    </div>
                    <h4 className="font-bold text-brand-navy text-sm">{p.step}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4 scroll-reveal">
                <h3 className="font-serif font-bold text-xl text-brand-navy">Types of Elevators We Install</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {srv.types.map((t, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 text-center text-xs font-bold text-brand-navy hover:border-brand-gold hover:shadow-sm transition">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* AMC — included list + 3 plan cards */}
          {serviceKey === 'amc' && (
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-2xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3 scroll-reveal">
                  <i className="fa-solid fa-list-check text-brand-gold text-base"></i> Services Included in AMC
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 scroll-reveal-container">
                  {srv.included.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200 hover:border-brand-gold transition scroll-reveal">
                      <i className="fa-solid fa-circle-check text-green-500 shrink-0"></i> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-2xl text-brand-navy border-b border-slate-200 pb-3 scroll-reveal">AMC Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal-container">
                  {srv.plans.map((p, i) => (
                    <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between card-hover scroll-reveal">
                      <div className="space-y-3">
                        <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-lg">
                          <i className="fa-solid fa-handshake"></i>
                        </div>
                        <h4 className="font-serif font-bold text-lg text-brand-navy border-b border-slate-100 pb-2">{p.name}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                      </div>
                      <a href="#/quote" className="block text-center bg-brand-navy hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl uppercase tracking-wider mt-6 transition">
                        Inquire Plan
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MODERNIZATION — services + benefits */}
          {serviceKey === 'modernization' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal-container">
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 scroll-reveal">
                <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-2">
                  <i className="fa-solid fa-screwdriver-wrench text-brand-gold text-sm"></i> Modernization Services
                </h4>
                <ul className="space-y-2.5">
                  {srv.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <i className="fa-solid fa-circle-check text-green-500 shrink-0"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 scroll-reveal">
                <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-2">
                  <i className="fa-solid fa-circle-up text-brand-gold text-sm"></i> Key Benefits
                </h4>
                <ul className="space-y-2.5">
                  {srv.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <i className="fa-solid fa-circle-check text-green-500 shrink-0"></i> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* REPAIR — checklist + emergency alert */}
          {serviceKey === 'repair' && (
            <div className="space-y-8">
              <h3 className="font-serif font-bold text-2xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3 scroll-reveal">
                <i className="fa-solid fa-screwdriver-wrench text-brand-gold text-base"></i> Repair Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 scroll-reveal-container">
                {srv.services.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200 hover:border-brand-gold transition scroll-reveal">
                    <i className="fa-solid fa-screwdriver text-brand-gold shrink-0"></i> {item}
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-2xl flex gap-5 items-start scroll-reveal-scale">
                <i className="fa-solid fa-truck-medical text-3xl text-red-600 animate-pulse shrink-0 mt-1"></i>
                <div>
                  <h4 className="font-serif font-bold text-red-900 text-sm mb-1">24/7 Emergency Support</h4>
                  <p className="text-xs text-red-700 leading-relaxed">{srv.emergency}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Sidebar ── */}
        <div className="lg:col-span-4 scroll-reveal-right">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6 sticky top-28">
            <h3 className="font-serif font-bold text-xl text-brand-navy border-b border-slate-200 pb-3">Request Consultation</h3>
            {formSubmitted ? (
              <div className="text-center py-10">
                <i className="fa-solid fa-circle-check text-5xl text-green-500 mb-4 animate-bounce block"></i>
                <h4 className="font-serif font-bold text-lg mb-2 text-brand-navy">Request Received!</h4>
                <p className="text-xs text-slate-500">We'll contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                <input type="tel" placeholder="Mobile Number" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                <textarea rows="3" placeholder="Describe your building parameters..." className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition"></textarea>
                <button type="submit" className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition shadow hover:shadow-lg">
                  Send Inquiry
                </button>
              </form>
            )}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs text-slate-500">
              <p className="flex items-center gap-2"><i className="fa-solid fa-phone text-brand-gold"></i> +91 98765 43210</p>
              <p className="flex items-center gap-2"><i className="fa-brands fa-whatsapp text-green-500"></i> WhatsApp Available</p>
              <p className="flex items-center gap-2"><i className="fa-solid fa-clock text-brand-gold"></i> 24/7 Emergency Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service CTA ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 md:px-8 border-t-4 border-brand-gold text-center relative overflow-hidden">
        {/* Animated cables */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[20, 50, 80].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold" style={{ left: `${pos}%`, animation: 'shaftGlow 3s infinite' }} />
          ))}
        </div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 scroll-reveal-scale">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Need Professional Elevator Solutions?</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Whether you require a new installation, modernization, AMC, or emergency repairs, Digitech Elevators is ready to deliver safe, reliable, and customized elevator solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#/quote"   className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:scale-105 btn-glow">Request a Free Quote</a>
            <a href="#/quote"   className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition hover:scale-105">Book a Site Inspection</a>
            <a href="#/contact" className="border border-white hover:border-brand-gold hover:text-brand-gold text-white font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition hover:scale-105">Contact Our Experts</a>
          </div>
        </div>
      </section>
    </div>
  );
}
