import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SERVICES_DATA } from '../data/siteData';

const SERVICE_ICONS = {
  'Controller Replacement': 'fa-microchip',
  'VVVF Drive Upgrade': 'fa-bolt',
  'Automatic Door Upgrade': 'fa-arrows-left-right',
  'COP & LOP Replacement': 'fa-square-poll-vertical',
  'ARD Installation': 'fa-battery-three-quarters',
  'Gearless Machine Upgrade': 'fa-gear',
  'Cabin Interior Renovation': 'fa-brush',
  'LED Lighting': 'fa-lightbulb',
  'Voice Announcement System': 'fa-bullhorn',
  'Digital Display Panels': 'fa-tv',
};

const BENEFIT_ICONS = {
  'Reduced Breakdowns': 'fa-circle-check',
  'Improved Safety': 'fa-shield-halved',
  'Energy Savings': 'fa-leaf',
  'Smoother Ride': 'fa-wave-square',
  'Lower Maintenance Costs': 'fa-piggy-bank',
  'Extended Elevator Life': 'fa-hourglass-half',
};

const BENEFIT_DETAILS = {
  'Reduced Breakdowns': 'Minimizes passenger downtime and emergency breakdown call-outs.',
  'Improved Safety': 'Integrates modern safety gear, door sensors, and automatic rescue systems.',
  'Energy Savings': 'High-efficiency VVVF drives and LED systems reduce energy consumption by up to 40%.',
  'Smoother Ride': 'Precision rails alignment and leveling curves eliminate vibrations and jerking.',
  'Lower Maintenance Costs': 'Replacing legacy components reduces wear-and-tear and part replacements.',
  'Extended Elevator Life': 'Adds another 10-15 years of reliable, code-compliant service life.'
};

const INSTALLATION_POSTERS = [
  {
    image: './POSTER/3rd insta Poster.png',
    title: 'Precision Elevator Engineering',
    tag: 'Quality Installation',
    desc: 'State-of-the-art shaft alignment, precision brackets, and gearless motor placement.'
  },
  {
    image: './POSTER/WOOD FINISH CABIN.png',
    title: 'Custom Wooden & Glass Cabins',
    tag: 'Cabin Interiors',
    desc: 'Premium decorative cabin finishes customized to complement luxury architecture.'
  },
  {
    image: './POSTER/premium elevators.jpeg',
    title: 'High-Speed Passenger Elevators',
    tag: 'Commercial & Villa',
    desc: 'Energy-efficient VVVF motor drives with whisper-quiet, smooth ride quality.'
  },
  {
    image: './POSTER/INSTA POST 3.png',
    title: 'Advanced Microprocessor Control',
    tag: 'Smart Technology',
    desc: 'Integrated 32-bit controllers, ARD safety system, and automatic levelling.'
  },
  {
    image: './POSTER/Untitled design.png',
    title: 'Turnkey Residential Installation',
    tag: 'Home Lifts',
    desc: 'Tailored home elevator setups designed for low pit and overhead headroom.'
  },
  {
    image: './POSTER/1ST INSTA POST FOR DIGITECH.png',
    title: 'End-to-End Execution',
    tag: 'Complete Project Care',
    desc: 'From initial site survey and civil preparation to government licensing and handover.'
  }
];

export default function ServiceDetail({ serviceKey, fallbackToHome }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const srv = SERVICES_DATA[serviceKey];
  
  // Local scroll-reveal observer to guarantee transitions play when switching services
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (el.classList.contains('scroll-reveal-container')) {
                const children = el.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
                children.forEach((child, i) => {
                  setTimeout(() => {
                    child.classList.add('revealed');
                    child.setAttribute('data-revealed', 'true');
                  }, i * 80);
                });
                el.classList.add('revealed');
                el.setAttribute('data-revealed', 'true');
              } else {
                el.classList.add('revealed');
                el.setAttribute('data-revealed', 'true');
              }
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -10px 0px' }
      );

      const targets = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-container'
      );
      
      targets.forEach((el) => {
        const parentContainer = el.parentElement ? el.parentElement.closest('.scroll-reveal-container') : null;
        if (parentContainer && el !== parentContainer) {
          return;
        }
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [serviceKey]);

  if (!srv) {
    if (fallbackToHome) fallbackToHome();
    return null;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const message = formData.get('message');
    
    const whatsappMessage = `*New Service Inquiry - ${srv.title}*\n\n` +
      `*Name:* ${name}\n` +
      `*Mobile:* ${mobile}\n` +
      `*Message:* ${message || 'No additional message'}\n\n` +
      `*Service:* ${srv.title}`;
    
    const whatsappUrl = `https://wa.me/919845071406?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fade-in">
      {/* ── Hero Banner ── */}
      <section className="relative bg-brand-navy text-white overflow-hidden border-b-4 border-brand-gold" style={{minHeight:'400px'}}>

        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_#1a2744_0%,_#080f1e_70%)]" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80')`, mixBlendMode: 'luminosity' }}
        />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_75%_50%,_#D4AF37_0%,_transparent_55%)]" />

        {/* Animated elevator shaft lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[6, 12, 88, 94].map((pos, i) => (
            <div key={i} className="absolute top-0 bottom-0" style={{left:`${pos}%`, width:'1px', background:'rgba(212,175,55,0.12)'}} />
          ))}
          <div className="absolute left-0 right-0" style={{height:'1px', background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.35),transparent)', animation:'heroSweep 4s ease-in-out infinite', top:'35%'}} />
          <div className="absolute left-0 right-0" style={{height:'1px', background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.2),transparent)', animation:'heroSweep 4s ease-in-out 2s infinite', top:'70%'}} />
        </div>

        {/* ── SINGLE-COLUMN LAYOUT ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center" style={{minHeight:'400px'}}>

          {/* LEFT: Text Content */}
          <div className="flex flex-col justify-center items-center text-center py-8 lg:py-10 space-y-4">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="w-8 h-0.5 bg-brand-gold rounded-full" />
              <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.25em]">
                Our Services
              </span>
              <div className="w-8 h-0.5 bg-brand-gold rounded-full" />
            </div>

            {/* Title & desc */}
            <div className="space-y-3 w-full max-w-5xl mx-auto px-4">
              <h1 className="font-serif text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                {srv.title}
              </h1>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                {srv.desc}
              </p>
            </div>



            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md">
              {[
                { value: '24/7', label: 'Support' },
                { value: '100%', label: 'Guaranteed' },
                { value: '27+', label: 'Years Exp.' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-brand-gold/40 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-brand-gold font-serif">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>


          </div>

        </div>

        {/* Bottom gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.7),transparent)'}} />
      </section>


      {/* ── INSTALLATION PROCESS - Timeline with Images ── */}
      {serviceKey === 'installation' && srv.process && (
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center scroll-reveal">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                Step by Step
              </h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy">
                Our Installation Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal-container">
              {srv.process.map((p, i) => (
                <div key={i} className="relative scroll-reveal">
                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-brand-gold transition-all hover:shadow-2xl">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-navy font-bold text-xl shrink-0 shadow-lg">
                        {i+1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif font-bold text-xl text-brand-navy mb-2">{p.step}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{p.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {srv.types && (
              <div className="pt-12">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-3xl font-bold text-brand-navy">
                    Types of Elevators We Install
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {srv.types.map((t, i) => (
                    <div key={i} className="bg-brand-navy text-white p-6 rounded-2xl text-center shadow-lg hover:bg-slate-800 transition-all">
                      <span className="text-sm font-bold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── INSTALLATION GALLERY & POSTERS SHOWCASE ── */}
      {serviceKey === 'installation' && (
        <section className="py-24 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden border-t-4 border-brand-gold">
          {/* Subtle glowing radial background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto space-y-14 relative z-10">
            <div className="text-center space-y-3 scroll-reveal">
              <span className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                <i className="fa-solid fa-layer-group text-brand-gold" />
                Visual Showcase & Standards
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                Installation Standards & Quality Posters
              </h2>
              <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-medium">
                Explore our engineering benchmarks, cabin interior options, and turnkey elevator installation standards.
              </p>
            </div>

            {/* Poster Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal-container">
              {INSTALLATION_POSTERS.map((poster, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700 hover:border-brand-gold/80 shadow-xl hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 cursor-pointer flex flex-col scroll-reveal"
                  onClick={() => setSelectedPoster(poster)}
                >
                  {/* Poster Image Container */}
                  <div className="relative h-72 md:h-80 overflow-hidden bg-slate-950">
                    <img
                      loading="lazy"
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-brand-navy/90 border border-brand-gold/40 text-brand-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
                      {poster.tag}
                    </div>

                    {/* Expand / View Badge */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-gold/90 text-brand-navy flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                      <i className="fa-solid fa-magnifying-glass-plus text-xs" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-slate-900/90 backdrop-blur-md">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-white group-hover:text-brand-gold transition-colors duration-300 leading-snug mb-2">
                        {poster.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {poster.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-brand-gold font-semibold">
                      <span>Click to view full poster</span>
                      <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AMC SERVICES - Image Left, Content Right ── */}
      {serviceKey === 'amc' && srv.included && (
        <>
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="scroll-reveal-left lg:sticky lg:top-24">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/30 group">
                    <img loading="lazy"
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
                      alt="AMC Services"
                      className="w-full h-[450px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 bg-brand-gold text-brand-navy px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg animate-bounce-soft">
                      24/7 Support
                    </div>
                    
                    {/* Bottom info overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl">
                      <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">Comprehensive Maintenance</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">Regular inspections and preventive care for optimal performance</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 scroll-reveal-right">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                      Comprehensive Coverage
                    </h3>
                    <h2 className="font-serif text-4xl font-bold mb-4 text-brand-navy">
                      Services Included in AMC
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {srv.included.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-2 border-slate-100 hover:border-brand-gold transition-all">
                        <i className="fa-solid fa-circle-check text-green-500 shrink-0 text-lg" />
                        <span className="text-sm font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Choose Your Plan
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  AMC Plans
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
                {srv.plans.map((p, i) => (
                  <div key={i} className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-white/10 hover:border-brand-gold transition-all scroll-reveal hover:translate-y-[-8px]">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold text-3xl mb-6">
                      <i className="fa-solid fa-handshake" />
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-brand-navy mb-4">{p.name}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-8">{p.desc}</p>
                    <a href="#/quote" className="block text-center bg-brand-navy hover:bg-slate-800 text-white text-sm font-bold py-4 rounded-xl uppercase tracking-wider transition">
                      Inquire Plan
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── MODERNIZATION - Content Left, Image Right ── */}
      {serviceKey === 'modernization' && srv.services && (
        <>
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 scroll-reveal-left">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                      Upgrade Solutions
                    </h3>
                    <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                      Modernization Upgrades We Offer
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {srv.services.map((item, i) => {
                      const icon = SERVICE_ICONS[item] || 'fa-screwdriver-wrench';
                      return (
                        <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border-2 border-slate-100 hover:border-brand-gold transition-all">
                          <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-gold shrink-0">
                            <i className={`fa-solid ${icon} text-lg`} />
                          </div>
                          <span className="text-sm font-bold text-brand-navy">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="scroll-reveal-right lg:sticky lg:top-24">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img loading="lazy"
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
                      alt="Modernization"
                      className="w-full h-[450px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-brand-gold text-brand-navy px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg animate-bounce-soft">
                      Premium Service
                    </div>
                    
                    {/* Bottom info overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl">
                      <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">Advanced Technology</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">Modern components and systems for enhanced performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Why Upgrade
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  Key Benefits of Upgrading
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
                {srv.benefits.map((b, i) => {
                  const icon = BENEFIT_ICONS[b] || 'fa-circle-check';
                  const detail = BENEFIT_DETAILS[b] || '';
                  return (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-white/10 hover:border-brand-gold transition-all scroll-reveal hover:translate-y-[-4px]">
                      <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold text-2xl mb-5">
                        <i className={`fa-solid ${icon}`} />
                      </div>
                      <h4 className="font-serif font-bold text-xl text-brand-navy mb-3">{b}</h4>
                      {detail && <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── REPAIR SERVICES - Grid with Emergency Banner ── */}
      {serviceKey === 'repair' && srv.services && (
        <>
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Expert Solutions
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  Repair Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
                {srv.services.map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 hover:border-brand-gold transition-all scroll-reveal">
                    <div className="flex items-center gap-4">
                      <i className="fa-solid fa-screwdriver text-brand-gold text-xl shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative py-20 px-4 md:px-8 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 to-red-800/90" />
            
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 animate-pulse">
                <i className="fa-solid fa-truck-medical" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                24/7 Emergency Support
              </h2>
              <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
                {srv.emergency}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <a href="#/contact" className="bg-white hover:bg-slate-100 text-red-900 font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
                  <i className="fa-solid fa-phone mr-2" />
                  Emergency Call
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── LICENSING & RENEWALS SERVICE ── */}
      {serviceKey === 'licensing' && srv.services && (
        <>
          {/* Services Grid Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Our Services
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  Complete Elevator Licensing & Renewal Support
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
                {srv.services.map((service, i) => {
                  const detail = srv.serviceDetails[service] || '';
                  return (
                    <div key={i} className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-brand-gold transition-all scroll-reveal hover:translate-y-[-4px] shadow-xl group">
                      <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold text-2xl mb-5 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                        <i className="fa-solid fa-file-lines" />
                      </div>
                      <h4 className="font-serif font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{service}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Why Choose Us
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  Why Choose Digitech Elevators?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
                {srv.whyChoose.map((reason, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-xl transition-all scroll-reveal hover:translate-y-[-4px] group hover:shadow-2xl">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-xl mb-4 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-brand-navy group-hover:text-brand-gold transition-colors">{reason}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Who We Serve
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  Industries We Serve
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal-container">
                {srv.industries.map((industry, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl text-center border-2 border-slate-200 hover:border-brand-gold transition-all scroll-reveal hover:shadow-lg group">
                    <span className="text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Common Questions
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4 scroll-reveal-container">
                {srv.faqs.map((faq, i) => (
                  <details key={i} className="bg-white p-6 rounded-2xl border-2 border-white/10 hover:border-brand-gold transition-all scroll-reveal group">
                    <summary className="font-serif font-bold text-lg text-brand-navy cursor-pointer flex items-center justify-between group-hover:text-brand-gold transition-colors">
                      {faq.question}
                      <i className="fa-solid fa-chevron-down text-brand-gold group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-200">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="relative py-20 px-4 md:px-8 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-slate-900/90" />
            
            {/* Animated vertical lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              {[20, 50, 80].map(pos => (
                <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold animate-pulse" style={{ left: `${pos}%` }} />
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold text-4xl mx-auto mb-6 animate-bounce-soft">
                <i className="fa-solid fa-file-contract" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                Need Assistance with Licensing or Renewal?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                Our experts are ready to help you with documentation, inspections, and statutory compliance. Contact Digitech Elevators today for professional Licensing & Renewal Services.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <a href="#contact-form" className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
                  <i className="fa-solid fa-phone mr-2" />
                  Contact Us Now
                </a>
                <a href="#/quote" className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
                  <i className="fa-solid fa-calculator mr-2" />
                  Get Free Quote
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── CONTACT FORM - Split Layout ── */}
      <section id="contact-form" className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-reveal-left">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Get Started
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                  Need Professional Elevator Solutions?
                </h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you require a new installation, modernization, AMC, or emergency repairs, Digitech Elevators is ready to deliver safe, reliable, and customized elevator solutions.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-xl">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Call Us</div>
                    <div className="text-sm font-bold text-brand-navy">+91 98450 71406</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-xl">
                    <i className="fa-brands fa-whatsapp" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">WhatsApp</div>
                    <div className="text-sm font-bold text-brand-navy">Available 24/7</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 text-xl">
                    <i className="fa-solid fa-clock" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Emergency</div>
                    <div className="text-sm font-bold text-brand-navy">24/7 Response</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal-right">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-slate-100">
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-6">Request Consultation</h3>
                
                {formSubmitted ? (
                  <div className="text-center py-12 animate-zoom-in">
                    <i className="fa-solid fa-circle-check text-6xl text-green-500 mb-6 animate-bounce block" />
                    <h4 className="font-serif font-bold text-2xl mb-3 text-brand-navy">Request Received!</h4>
                    <p className="text-slate-600">We'll contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                      <input 
                        type="text"
                        name="name" 
                        placeholder="Enter your name" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-gold transition" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                      <input 
                        type="tel"
                        name="mobile" 
                        placeholder="Enter mobile number" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-gold transition" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                      <textarea 
                        rows="4"
                        name="message" 
                        placeholder="Describe your building parameters..." 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-gold transition"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest transition shadow-lg hover:shadow-2xl hover:scale-105">
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA - Full Width Background ── */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/90 to-transparent" />
        
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[20, 50, 80].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold animate-pulse" style={{ left: `${pos}%` }} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Start Your Service Request Today
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Contact us for expert elevator services and discover professional solutions for your building
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#/quote" className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
              <i className="fa-solid fa-calculator mr-2" />
              Free Quote
            </a>
            <a href="#/contact" className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105">
              <i className="fa-solid fa-phone mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPoster && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-brand-navy/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-gold text-white hover:text-brand-navy border border-white/20 flex items-center justify-center text-xl transition-all duration-300 shadow-2xl"
            onClick={() => setSelectedPoster(null)}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[90vh] w-full bg-slate-900 rounded-3xl border-2 border-brand-gold/40 shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-black flex items-center justify-center p-4">
              <img
                loading="lazy"
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="max-h-[75vh] w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            <div className="md:w-2/5 p-8 flex flex-col justify-between text-white space-y-6 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800">
              <div className="space-y-4">
                <span className="inline-block bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedPoster.tag}
                </span>
                <h3 className="font-serif font-bold text-2xl text-white leading-tight">
                  {selectedPoster.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedPoster.desc}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800">
                <a
                  href="#/quote"
                  onClick={() => setSelectedPoster(null)}
                  className="block text-center bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-lg btn-glow"
                >
                  Request Installation Quote
                </a>
                <button
                  onClick={() => setSelectedPoster(null)}
                  className="w-full text-center text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
