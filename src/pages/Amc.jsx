import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const plans = [
  {
    icon: 'fa-calendar-check',
    name: 'Monthly Maintenance',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Routine check runs, lubrication, and basic leveling adjustments every 30 days.',
    includes: [
      'Monthly technician visit',
      'Lubrication of all moving parts',
      'Leveling & adjustment checks',
      'Door operation inspection',
      'Basic safety checks',
    ],
  },
  {
    icon: 'fa-rotate',
    name: 'Quarterly Maintenance',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Safety governor audits, brake adjustments, and controller diagnostics every 90 days.',
    includes: [
      'Quarterly technician visits',
      'Governor & brake adjustments',
      'Controller diagnostic logs',
      'Electrical safety audit',
      'Full mechanical inspection',
    ],
  },
  {
    icon: 'fa-star',
    name: 'Comprehensive AMC',
    badge: 'Most Popular',
    color: 'from-brand-navy to-slate-800',
    description: 'Full coverage including all breakdown support, parts, labor, and emergency callouts.',
    includes: [
      'All quarterly services included',
      'Unlimited breakdown support',
      'Spare parts & labor covered',
      'Motor & drive replacements',
      '24/7 emergency response',
      'Priority technician routing',
    ],
  },
  {
    icon: 'fa-screwdriver-wrench',
    name: 'Non-Comprehensive',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Monthly diagnostics and labor covered. Parts replacements billed separately.',
    includes: [
      'Monthly maintenance visits',
      'Labor & diagnostics covered',
      'Routine safety checks',
      'Emergency call support',
      'Parts billed separately',
    ],
  },
];

const benefits = [
  { poster: './POSTER/3rd insta Poster.png', title: 'Reduced Breakdowns', desc: 'Preventive maintenance minimizes major elevator faults and unplanned outages.' },
  { poster: './POSTER/INSTA POST 3.png', title: 'Extended Equipment Life', desc: 'Regular calibrations ensure motors, drives, and ropes wear out slowly.' },
  { poster: './POSTER/premium elevators.jpeg', title: 'Safety Compliance', desc: 'Adhering to local elevator rules prevents legal and liability concerns.' },
  { poster: './POSTER/Untitled design.png', title: 'Priority Service Support', desc: 'AMC subscribers receive priority placement in breakdown technician routing.' },
  { poster: './POSTER/1ST INSTA POST FOR DIGITECH.png', title: 'Cost Savings', desc: 'Prevent expensive emergency repairs by catching issues early through routine inspections.' },
  { poster: './POSTER/WOOD FINISH CABIN.png', title: '24/7 Helpline', desc: 'Round-the-clock dedicated support line for all AMC contract holders.' },
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
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        >
          <source src="lift4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay & radial gradient overlay for premium lighting */}
        <div className="absolute inset-0 bg-brand-navy/70 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_70%)] z-[2]"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">Preventive Maintenance</span>
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
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold animate-draw-line">Choose Your Plan</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">AMC Plan Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border-2 overflow-hidden flex flex-col shadow-sm card-hover transition-all duration-300 scroll-reveal ${plan.badge ? 'border-brand-gold shadow-brand-gold/20 shadow-lg' : 'border-slate-200 hover:border-brand-gold/50'}`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-brand-gold text-brand-navy text-[10px] font-bold text-center py-1.5 uppercase tracking-widest animate-pulse-ring">
                    ⭐ {plan.badge}
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white ${plan.badge ? 'pt-9' : ''}`}>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 transition-all duration-300">
                    <i className={`fa-solid ${plan.icon} text-brand-gold text-xl group-hover:animate-lift-ride`}></i>
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
                    href="#/quote"
                    className={`block text-center font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition mt-2 hover:scale-[1.02] ${plan.badge ? 'bg-brand-gold hover:bg-brand-gold-hover text-brand-navy shadow-lg btn-glow' : 'bg-brand-navy hover:bg-slate-800 text-white'}`}
                  >
                    Inquire This Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits ── */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-2 scroll-reveal">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold animate-draw-line">Why AMC Matters</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">Benefits of an AMC Plan</h2>
          </div>
          {/* Accordion container */}
          <div className="flex flex-col lg:flex-row gap-4 h-[420px] lg:h-[460px] overflow-hidden scroll-reveal-container">
            {benefits.map((b, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
                           w-full lg:flex-1 lg:hover:flex-[3.5] border border-slate-200 hover:border-brand-gold/50 shadow-lg min-h-[300px] lg:min-h-0"
                onClick={() => setLightboxImage(b.poster)}
              >
                {/* Background Image of the Poster with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${b.poster}')` }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-brand-navy/85 group-hover:bg-brand-navy/55 transition-all duration-500" />

                {/* Header (Number) */}
                <div className="relative z-10 flex justify-between items-center w-full">
                  <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-xs font-mono text-brand-gold bg-brand-navy/85 backdrop-blur-sm shadow-md">
                    {`0${i + 1}`}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:border-brand-gold transition-all duration-500">
                    <i className="fa-solid fa-expand text-[10px]" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="relative z-10 mt-12 lg:mt-0 flex flex-col justify-end h-full">
                  {/* Expanded text content */}
                  <div className="block lg:opacity-0 lg:group-hover:opacity-100 lg:h-0 lg:group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out space-y-2 bg-brand-navy/90 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                    <h4 className="font-serif font-bold text-base text-brand-gold">
                      {b.title}
                    </h4>
                    <p className="text-[11px] text-slate-355 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  {/* Vertical Collapsed text content for Desktop */}
                  <div 
                    className="hidden lg:flex lg:group-hover:hidden select-none absolute top-28 bottom-4 left-1/2 -translate-x-1/2 items-center justify-center"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    <span className="text-white font-serif font-semibold text-[11px] tracking-widest uppercase whitespace-nowrap bg-brand-navy/85 px-3.5 py-4 rounded-full border border-white/10 backdrop-blur-sm shadow-lg">
                      {b.title}
                    </span>
                  </div>
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
              <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
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
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0 mt-1 border border-brand-gold/20">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-navy">Premium Safety Auditing</h4>
                    <p className="text-slate-500 text-xs mt-1">We perform meticulous checks on governors, limit switches, and safety buffers during every service run.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0 mt-1 border border-brand-gold/20">
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
                className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 shadow-md bg-white hover:border-brand-gold transition duration-300 max-w-md w-full"
                onClick={() => setLightboxImage('./POSTER/WHY AMC.png')}
              >
                <img 
                  src="./POSTER/WHY AMC.png" 
                  alt="Why AMC Poster" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <span className="bg-brand-navy/90 text-brand-gold border border-brand-gold/30 rounded-xl px-4 py-2 text-xs font-bold shadow-lg">
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
          <div className="absolute top-4 right-4 text-white text-3xl cursor-pointer hover:text-brand-gold transition duration-200">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div 
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage} 
              alt="Poster Full Screen" 
              className="max-h-[80vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
            />
          </div>
        </div>,
        document.body
      )}

      {/* CTA ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 border-t-4 border-brand-gold text-center relative overflow-hidden">
        {/* Faint animated lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[25, 50, 75].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold" style={{ left: `${pos}%`, animation: 'shaftGlow 3s infinite' }} />
          ))}
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10 scroll-reveal-scale">
          <h2 className="font-serif text-2xl md:text-3xl font-bold">Ready to Protect Your Elevator?</h2>
          <p className="text-slate-300 text-sm">Sign up for an AMC plan today and ensure your elevators run safely, reliably, and efficiently year-round.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#/quote" className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:scale-105 btn-glow">
              Get a Free Quote
            </a>
            <a href="#/contact" className="border border-white hover:border-brand-gold hover:text-brand-gold text-white font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition hover:scale-105">
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

