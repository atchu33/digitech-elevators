import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { getAssetUrl } from '../utils/router';

const plans = [
  {
    icon: 'fa-screwdriver-wrench',
    name: 'Non-Comprehensive',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Monthly inspections and basic labor covered. All parts and emergency repairs billed extra.',
    includes: [
      'Monthly technician visits',
      'Labor & diagnostics covered',
      'Routine safety checks',
      'Greasing & cleaning',
      'Parts & emergencies billed extra',
    ],
  },
  {
    icon: 'fa-gears',
    name: 'Semi-Comprehensive',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Includes maintenance, labor, and selected consumable spare parts.',
    includes: [
      'Monthly Preventive Maintenance',
      'Unlimited Breakdown Support',
      'Labor Charges Included',
      'Minor Electrical Parts Covered',
      'Lubricants & Consumables Included',
      'Safety Inspection & Testing',
      'Major Spare Parts Extra',
    ],
  },
  {
    icon: 'fa-star',
    name: 'Comprehensive',
    badge: 'Most Popular',
    color: 'from-brand-navy to-slate-800',
    description: 'Full coverage including all breakdown support, routine parts, labor, and emergency callouts.',
    includes: [
      'All routine servicing included',
      'Unlimited breakdown support',
      'Spare parts & labor covered',
      'Standard wear-and-tear parts',
      '24/7 emergency response',
      'Priority technician routing',
    ],
  },
  {
    icon: 'fa-crown',
    name: 'Platinum Comprehensive',
    badge: 'Premium',
    color: 'from-slate-800 to-slate-950',
    description: 'Our premium AMC plan offering complete protection, fastest response, and maximum reliability.',
    includes: [
      'Everything in Comprehensive AMC',
      '24×7 Priority Breakdown Support',
      'Dedicated Service Engineer',
      'Fastest Response Time',
      'Complete Spare Parts Coverage',
      'Annual Health Audit Report',
      'Priority Customer Support',
    ],
  },
];



export default function Amc() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative bg-brand-navy text-white py-24 px-4 text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        >
          <source src={getAssetUrl("lift4.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay & radial gradient overlay for premium lighting */}
        <div className="absolute inset-0 bg-brand-navy/70 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(23,105,194,0.25)_0%,_transparent_70%)] z-[2]"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-blue/30 border border-brand-blue/50 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">Preventive Maintenance</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold animate-gold-shimmer">Annual Maintenance Contract Plans</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Keep your elevators running safely and efficiently with our flexible AMC plans designed for all building types.
          </p>
        </div>
      </section>

      {/* Pricing Cards ── */}
      <section className="py-20 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-2 scroll-reveal">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blue animate-draw-line">Choose Your Plan</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">AMC Plan Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border-2 overflow-hidden flex flex-col shadow-sm card-hover transition-all duration-300 scroll-reveal ${plan.badge ? 'border-brand-blue shadow-brand-blue/20 shadow-lg' : 'border-slate-200 hover:border-brand-blue/50'}`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-brand-blue text-white text-[10px] font-bold text-center py-1.5 uppercase tracking-widest animate-pulse-ring">
                    ⭐ {plan.badge}
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white ${plan.badge ? 'pt-9' : ''}`}>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 transition-all duration-300">
                    <i className={`fa-solid ${plan.icon} text-brand-blue text-xl group-hover:animate-lift-ride`}></i>
                  </div>
                  <h4 className="font-serif font-bold text-lg leading-tight">{plan.name}</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">{plan.description}</p>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <ul className="space-y-2.5 flex-grow">
                    {plan.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <i className="fa-solid fa-circle-check text-green-500 shrink-0 mt-0.5 animate-bounce-soft" style={{ animationDelay: `${j * 0.25}s` }}></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/quote"
                    className={`block text-center font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition mt-2 hover:scale-[1.02] ${plan.badge ? 'bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg btn-glow' : 'bg-brand-navy hover:bg-slate-800 text-white'}`}
                  >
                    Inquire This Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Why AMC Infographic Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block bg-brand-blue/10 border border-brand-blue/30 text-brand-blue px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                Infographic Guide
              </span>
              <h2 className="font-serif text-3xl font-bold text-brand-navy leading-tight">
                Why Digitech AMC is the Smartest Choice
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Elevators require regular precision maintenance to guarantee safety parameters. Our Annual Maintenance Contract ensures your systems are looked after by Grade-A licensed engineers, keeping safety components certified and operational.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-sky-300 flex items-center justify-center shrink-0 mt-1 border border-sky-400/30">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-navy">Premium Safety Auditing</h4>
                    <p className="text-slate-500 text-xs mt-1">We perform meticulous checks on governors, limit switches, and safety buffers during every service run.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-sky-300 flex items-center justify-center shrink-0 mt-1 border border-sky-400/30">
                    <i className="fa-solid fa-arrow-down-up-lock"></i>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-navy">Minimized Risk & Downtime</h4>
                    <p className="text-slate-500 text-xs mt-1">Catching minor mechanical and electrical anomalies early helps prevent sudden shutdowns and expensive components failures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex justify-center">
              <div 
                className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 shadow-md bg-white hover:border-brand-blue transition duration-300 max-w-md w-full"
                onClick={() => setLightboxImage('./POSTER/WhatsApp Image 2026-08-05 at 16.58.11.jpeg')}
              >
                <img loading="lazy" 
                  src={getAssetUrl("./POSTER/WhatsApp Image 2026-08-05 at 16.58.11.jpeg")} 
                  alt="Why AMC Poster" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <span className="bg-brand-navy/90 text-sky-300 border border-sky-400/40 rounded-xl px-4 py-2 text-xs font-bold shadow-lg">
                    <i className="fa-solid fa-magnifying-glass-plus mr-1"></i> View Full Poster
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-brand-navy/60 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="absolute top-4 right-4 text-white text-3xl cursor-pointer hover:text-brand-blue-bright transition duration-200">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div 
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img loading="lazy" 
              src={getAssetUrl(lightboxImage)} 
              alt="Poster Full Screen" 
              className="max-h-[80vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
            />
          </div>
        </div>,
        document.body
      )}

      {/* CTA ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 border-t-4 border-brand-blue text-center relative overflow-hidden">
        {/* Faint animated lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[25, 50, 75].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-blue" style={{ left: `${pos}%`, animation: 'shaftGlow 3s infinite' }} />
          ))}
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10 scroll-reveal-scale">
          <h2 className="font-serif text-2xl md:text-3xl font-bold">Ready to Protect Your Elevator?</h2>
          <p className="text-slate-300 text-sm">Sign up for an AMC plan today and ensure your elevators run safely, reliably, and efficiently year-round.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="/quote" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:scale-105 btn-glow">
              Get a Free Quote
            </a>
            <a href="/contact" className="border border-white hover:border-brand-blue hover:text-brand-blue text-white font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition hover:scale-105">
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

