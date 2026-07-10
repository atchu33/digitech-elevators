import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/siteData';

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
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="animate-fade-in">
      {/* ── Banner ── */}
      <section className="relative bg-brand-navy text-white py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/85 z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-25 scale-105 transition-transform duration-[6000ms]"
               style={{ backgroundImage:`url('${prod.image}')` }}></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-4 z-20 relative">
          <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold text-3xl mx-auto mb-4 border-2 border-brand-gold/30 animate-pulse-ring">
            <i className={`fa-solid ${prod.icon}`}></i>
          </div>
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">Product Specifications</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold animate-slide-left">{prod.bannerTitle}</h2>
          <p className="text-brand-gold font-semibold text-sm tracking-wider uppercase animate-slide-right">{prod.bannerSubtitle}</p>
        </div>
      </section>

      {/* ── Image Gallery ── */}
      {gallery.length > 0 && (
        <section className="bg-slate-50 py-14 px-4 md:px-8 border-b border-slate-200">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="text-center space-y-2 mb-8 scroll-reveal">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold animate-draw-line">Visual Showcase</h3>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy inline-block">{prod.bannerTitle} — Photo Gallery</h2>
            </div>

            {/* Main featured image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group scroll-reveal-scale"
                 style={{ height: '420px' }}
                 onClick={() => setLightbox(activeImg)}>
              <img
                src={gallery[activeImg].url}
                alt={gallery[activeImg].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-serif font-bold text-lg">{gallery[activeImg].caption}</p>
                  <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider">{prod.bannerTitle}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 text-white text-xs font-bold flex items-center gap-2 group-hover:bg-white/30 transition">
                  <i className="fa-solid fa-magnifying-glass-plus"></i> View Full
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-3 scroll-reveal-container">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative rounded-xl overflow-hidden group transition-all duration-300 scroll-reveal ${i === activeImg ? 'ring-3 ring-brand-gold shadow-lg scale-[1.02]' : 'opacity-70 hover:opacity-100 hover:scale-[1.02]'}`}
                  style={{ height: '100px' }}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {i === activeImg && (
                    <div className="absolute inset-0 bg-brand-gold/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-check text-brand-navy text-[10px]"></i>
                      </div>
                    </div>
                  )}
                </button>
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
            <p className="text-slate-600 text-sm leading-relaxed">{prod.desc}</p>
          </div>

          {/* Applications + Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal-container">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 card-hover scroll-reveal">
              <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-2">
                <i className="fa-solid fa-hotel text-brand-gold text-sm"></i> Applications
              </h4>
              <ul className="space-y-2.5">
                {prod.apps.map((a, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <i className="fa-solid fa-circle-check text-green-500 shrink-0"></i> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 card-hover scroll-reveal">
              <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-2">
                <i className="fa-solid fa-list-check text-brand-gold text-sm"></i> Key Features
              </h4>
              <ul className="space-y-2.5">
                {prod.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <i className="fa-solid fa-circle-check text-green-500 shrink-0"></i> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capacity + Why Choose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal-container">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 card-hover scroll-reveal">
              <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-2">
                <i className="fa-solid fa-weight-hanging text-brand-gold text-sm"></i> Available Capacity
              </h4>
              <ul className="space-y-2.5">
                {prod.caps.map((c, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <i className="fa-solid fa-circle-arrow-right text-brand-gold shrink-0"></i> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-4 card-hover scroll-reveal">
              <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-2">
                <i className="fa-solid fa-award text-brand-gold text-sm"></i> Why Choose Digitech
              </h4>
              <ul className="space-y-2.5">
                {prod.whyChoose.map((w, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <i className="fa-solid fa-circle-check text-green-500 shrink-0"></i> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Specs Table */}
          <div className="space-y-4 scroll-reveal">
            <h3 className="font-serif font-bold text-2xl text-brand-navy flex items-center gap-2 border-b border-slate-200 pb-3">
              <i className="fa-solid fa-gears text-brand-gold text-base"></i> Technical Specifications
            </h3>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-brand-navy text-white font-serif text-[11px]">
                    <th className="p-4 w-1/3">Parameter</th>
                    <th className="p-4">Standard Configuration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {Object.entries(prod.specs).map(([k, v]) => (
                    <tr key={k} className="hover:bg-slate-50 transition">
                      <td className="p-4 font-semibold text-brand-navy bg-slate-50/50">{k}</td>
                      <td className="p-4 text-slate-600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="lg:col-span-4 scroll-reveal-right">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6 sticky top-28">
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

      {/* ── Product CTA ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 md:px-8 border-t-4 border-brand-gold text-center relative overflow-hidden">
        {/* Animated cables */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[20, 50, 80].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold" style={{ left: `${pos}%`, animation: 'shaftGlow 3s infinite' }} />
          ))}
        </div>
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 scroll-reveal-scale">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to Upgrade Your Building with a Reliable Elevator?</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Whether you require a passenger elevator, hospital lift, goods lift, home elevator, hydraulic lift, or an MRL solution, Digitech Elevators provides customized systems for safety, reliability, and long-term performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#/quote"   className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:scale-105 btn-glow">Request a Free Consultation</a>
            <a href="#/quote"   className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition hover:scale-105">Get a Quote</a>
            <a href="#/contact" className="border border-white hover:border-brand-gold hover:text-brand-gold text-white font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition hover:scale-105">Contact Our Experts</a>
          </div>
        </div>
      </section>
    </div>
  );
}
