import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS_DATA, SERVICES_DATA, PROJECTS_DATA } from '../data/siteData';

/* ── Scroll-reveal hook ── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale')
            .forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('revealed');
                child.setAttribute('data-revealed', 'true');
              }, i * 120);
            });
          // also reveal the container itself if it has scroll-reveal class
          if (el.classList.contains('scroll-reveal') ||
              el.classList.contains('scroll-reveal-left') ||
              el.classList.contains('scroll-reveal-right') ||
              el.classList.contains('scroll-reveal-scale')) {
            el.classList.add('revealed');
            el.setAttribute('data-revealed', 'true');
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

/* ── Floating particles for hero ── */
function HeroParticles() {
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${8 + (i * 6.5) % 88}%`,
    size: `${2 + (i % 3)}px`,
    delay: `${(i * 0.7) % 6}s`,
    duration: `${6 + (i * 0.8) % 6}s`,
    opacity: 0.3 + (i % 4) * 0.1,
    color: i % 3 === 0 ? 'rgba(212,175,55,0.7)' : i % 3 === 1 ? 'rgba(255,255,255,0.4)' : 'rgba(141,169,196,0.5)',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

/* ── Animated Elevator Shaft ── */
function ElevatorShaftVisual() {
  const floors = [5, 4, 3, 2, 1, 'G'];
  return (
    <div className="flex flex-row items-center gap-3 lg:gap-4 h-full justify-center">
      {/* Left side: Shaft visualization */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Shaft + cabin */}
        <div className="relative flex flex-col items-center" style={{ height: '240px', minHeight: '240px' }}>
          {/* Cable at top */}
          <div className="elevator-cable" style={{ height: '15px', top: 0 }} />

          {/* Shaft body - Responsive sizing */}
          <div className="elevator-shaft" style={{ height: '225px', width: '48px' }}>
            <div className="elevator-shaft-scanline" />
            {/* Floor markers inside shaft */}
            {floors.map((f, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 flex items-center"
                style={{ top: `${8 + i * 14.5}%` }}
              >
                <div className="w-1.5 h-px bg-brand-gold/25 ml-0.5" />
                <div className="flex-1 h-px bg-brand-gold/10" />
                <div className="w-1.5 h-px bg-brand-gold/25 mr-0.5" />
              </div>
            ))}
            {/* The cabin */}
            <div className="elevator-cabin" />
          </div>
        </div>

        {/* Floor number panel beside shaft */}
        <div className="flex flex-col justify-between h-[225px] py-1">
          {floors.map((f, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-2 md:w-4 h-px bg-brand-gold/30" />
              <span
                className="text-[9px] md:text-[10px] font-mono font-bold text-brand-gold/60 floor-display"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Stats panel - Vertical stack on both mobile and desktop */}
      <div className="flex flex-col gap-2 lg:gap-3">
        {[
          { icon: 'fa-shield-halved', label: 'Safety Certified' },
          { icon: 'fa-bolt-lightning', label: '24/7 Support' },
          { icon: 'fa-user-check',      label: 'Expert Engineers' },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-lg px-2.5 py-1.5 lg:px-3 lg:py-2 animate-lift-ride whitespace-nowrap"
            style={{ animationDelay: `${0.4 + i * 0.2}s` }}
          >
            <i className={`fa-solid ${item.icon} text-brand-gold text-xs shrink-0`} />
            <span className="text-white/80 text-[9px] lg:text-[11px] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [yearsVal,     setYearsVal]     = useState(0);
  const [liftsVal,     setLiftsVal]     = useState(0);
  const [customersVal, setCustomersVal] = useState(0);
  const [testiIndex,   setTestiIndex]   = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [heroLoaded,    setHeroLoaded]   = useState(false);

  const statsRef    = useScrollReveal(0.3);
  const aboutRef    = useScrollReveal(0.15);
  const servicesRef = useScrollReveal(0.1);
  const productsRef = useScrollReveal(0.1);
  const industryRef = useScrollReveal(0.15);
  const whyRef      = useScrollReveal(0.1);
  const projectsRef = useScrollReveal(0.1);
  const testiRef    = useScrollReveal(0.2);
  const contactRef  = useScrollReveal(0.1);

  /* ── Hero entrance ── */
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── Stats counter animation (triggered by intersection) ── */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          let yr = 0, lf = 0, cs = 0;
          const iv = setInterval(() => {
            if (yr < 25)   { yr += 1;   setYearsVal(yr); }
            if (lf < 2500) { lf += 100; setLiftsVal(lf); }
            if (cs < 1500) { cs += 60;  setCustomersVal(cs); }
            if (yr >= 25 && lf >= 2500 && cs >= 1500) {
              clearInterval(iv);
              setYearsVal(25); setLiftsVal(2500); setCustomersVal(1500);
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [statsAnimated]);

  /* ── Testimonials auto-rotate ── */
  useEffect(() => {
    const iv = setInterval(() => setTestiIndex(p => (p + 1) % 2), 6000);
    return () => clearInterval(iv);
  }, []);

  const handleFormSubmit = (e) => { e.preventDefault(); setFormSubmitted(true); };

  const serviceIcons = {
    installation: 'fa-hammer',
    amc:          'fa-handshake',
    modernization:'fa-arrows-spin',
    repair:       'fa-screwdriver-wrench',
    spareparts:   'fa-gears',
    emergency:    'fa-clock-rotate-left',
  };

  return (
    <div>

      {/* ══════════════════════════ HERO BANNER ══════════════════════════ */}
      <section className="relative bg-brand-navy text-white min-h-[82vh] lg:min-h-[86vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/92 to-brand-navy/55 z-10" />
          <div
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600')",
              animation: 'floatUp 12s ease-in-out infinite',
            }}
          />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 z-[2] opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Floating particles */}
        <HeroParticles />

        {/* Door-reveal overlay — slides away like elevator doors opening */}
        <div
          className={`absolute inset-y-0 left-0 w-1/2 bg-brand-navy z-20 pointer-events-none ${heroLoaded ? 'hero-door-left' : ''}`}
        />
        <div
          className={`absolute inset-y-0 right-0 w-1/2 bg-brand-navy z-20 pointer-events-none ${heroLoaded ? 'hero-door-right' : ''}`}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-12 z-30 relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
          {/* Left — headline */}
          <div className={`lg:col-span-5 space-y-4 text-center lg:text-left transition-all duration-700 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span
              className="inline-flex items-center gap-1.5 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest animate-pulse-ring"
              style={{ animationDelay: '0.8s' }}
            >
              <i className="fa-solid fa-award" /> Safe &bull; Reliable &bull; Innovative
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Reliable Elevator Solutions<br/>
              <span className="animate-gold-shimmer">for Modern Buildings</span>
            </h2>
            <p className="text-brand-gold/90 font-semibold text-[11px] md:text-xs tracking-widest uppercase border-slate-700/60 lg:border-l-2 lg:pl-3 max-w-lg mx-auto lg:mx-0">
              Installation &bull; AMC &bull; Modernization &bull; Repair &bull; 24/7 Breakdown Support
            </p>
            <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Digitech Elevators is a trusted provider of complete elevator solutions, specializing in the installation, modernization, maintenance, and repair of elevators for residential, commercial, industrial, and healthcare buildings.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <a href="#/quote"
                 className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-5 py-2.5 rounded-lg shadow-lg transition-all hover:shadow-brand-gold/40 hover:shadow-xl hover:scale-105 flex items-center gap-1.5 text-xs btn-glow"
                 style={{ animationDelay: '2s' }}>
                <i className="fa-solid fa-calculator" /> Get a Free Quote
              </a>
              <a href="#/contact"
                 className="border border-white/70 hover:border-brand-gold hover:text-brand-gold text-white font-semibold px-5 py-2.5 rounded-lg transition-all hover:scale-105 flex items-center gap-1.5 text-xs">
                Contact Us
              </a>
              <a href="#enquiry-form"
                 className="bg-slate-700/80 hover:bg-slate-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all hover:scale-105 flex items-center gap-1.5 text-xs">
                <i className="fa-solid fa-calendar-check" /> Request a Site Visit
              </a>
            </div>
          </div>

          {/* Centre — Elevator shaft visual */}
          <div
            className={`lg:col-span-3 flex justify-center items-center py-6 lg:py-0 transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <ElevatorShaftVisual />
          </div>

          {/* Right — glassmorphism quick-estimate card */}
          <div
            className={`lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-2xl text-white shadow-2xl transition-all duration-1000 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <h3 className="font-serif font-bold text-base mb-0.5 flex items-center gap-1.5">
              <i className="fa-solid fa-circle-nodes text-brand-gold" /> Fast Project Estimate
            </h3>
            <p className="text-[11px] text-slate-300 mb-3">Fill in specifications for a custom layout quote.</p>

            {formSubmitted ? (
              <div className="text-center py-8 bg-slate-900/50 rounded-xl border border-slate-700 animate-zoom-in">
                <i className="fa-solid fa-circle-check text-3xl text-brand-gold mb-2 animate-bounce block" />
                <h4 className="font-serif font-bold text-sm mb-0.5">Design Received</h4>
                <p className="text-[11px] text-slate-350">We will call you within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">Select Elevator Type</label>
                  <select className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-gold transition-colors">
                    <option>Passenger Elevator</option>
                    <option>Luxury Home Lift</option>
                    <option>Stretcher / Hospital Lift</option>
                    <option>Industrial Goods Lift</option>
                    <option>Hydraulic Lift</option>
                    <option>Machine Room Less (MRL)</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">Floors (Stops)</label>
                    <input type="number" min="2" max="40" defaultValue="4"
                           className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-gold transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">Capacity</label>
                    <select defaultValue="8 Pax (544 kg)" className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-gold transition-colors">
                      <option>4 Pax (320 kg)</option>
                      <option>6 Pax (408 kg)</option>
                      <option>8 Pax (544 kg)</option>
                      <option>10 Pax (680 kg)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">Mobile Number</label>
                  <input type="tel" placeholder="Mobile Number"
                         className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white placeholder-slate-550 focus:outline-none focus:border-brand-gold transition-colors" required />
                </div>
                <button type="submit"
                        className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-2 rounded-lg text-xs uppercase tracking-widest transition-all hover:scale-[1.02] hover:shadow-lg">
                  Calculate Design Layout
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-gold-shimmer z-20" />
      </section>

      {/* ══════════════════════════ STATS STRIP ══════════════════════════ */}
      <section ref={statsRef} className="bg-brand-navy text-white py-12 md:py-16 px-4 md:px-6 lg:px-8 relative" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 100%)' }}>
        {/* Diagonal cut creates separation from hero */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[20, 40, 60, 80].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold" style={{ left: `${pos}%` }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 xl:gap-6 text-center relative z-10 pt-8 md:pt-12">
          {[
            { val: `${yearsVal}+`, label: 'Years of Experience', icon: 'fa-clock' },
            { val: `${liftsVal}+`, label: 'Elevators Maintained', icon: 'fa-elevator' },
            { val: `${customersVal}+`, label: 'Happy Customers',    icon: 'fa-face-smile' },
            { val: '24/7',             label: 'Breakdown Support',  icon: 'fa-bolt-lightning' },
            { val: '100%',             label: 'Safety Record',      icon: 'fa-shield-halved' },
            { val: 'Premium',          label: 'Spares & Support',   icon: 'fa-screwdriver-wrench' },
          ].map((s, i) => (
            <div
              key={i}
              className="scroll-reveal space-y-2 md:space-y-3 group cursor-default"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300 animate-bounce-soft shadow-lg" style={{ animationDelay: `${i * 0.3}s` }}>
                <i className={`fa-solid ${s.icon} text-lg md:text-xl`} />
              </div>
              <p className="text-3xl md:text-4xl font-bold font-serif text-brand-gold floor-display animate-stat-glow" style={{ animationDelay: `${i * 0.2}s` }}>
                {s.val}
              </p>
              <p className="text-[10px] md:text-xs uppercase text-slate-300 font-semibold tracking-wide leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════ ABOUT SECTION ══════════════════════════ */}
      <section ref={aboutRef} className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — decorated gradient panel */}
          <div className="scroll-reveal-left relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-brand-gold -z-10 rounded-tl-3xl opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-brand-gold -z-10 rounded-br-3xl opacity-50" />
            <div className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy rounded-3xl overflow-hidden shadow-2xl p-10 text-white space-y-6 relative">
              {/* Decorative overlay pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-600/50 pb-5 mb-6">
                  <span className="font-serif font-bold text-2xl text-brand-gold flex items-center gap-3">
                    <i className="fa-solid fa-certificate text-3xl animate-float" />
                    Quality Assured
                  </span>
                </div>
                <div className="space-y-5 text-sm text-slate-200">
                  {['Experienced & Certified Technicians',
                    'Robust Mechanical Safety Standards',
                    'VVVF Drive Energy Optimization Technology',
                    'Automatic Rescue Devices (ARD) Standard'].map((t, i) => (
                    <p key={i} className="flex items-start gap-4 scroll-reveal" style={{ transitionDelay: `${0.3 + i * 0.1}s` }}>
                      <i className="fa-solid fa-circle-check text-green-400 shrink-0 text-lg animate-bounce-soft mt-0.5" style={{ animationDelay: `${i * 0.4}s` }} />
                      <span className="leading-relaxed">{t}</span>
                    </p>
                  ))}
                </div>
                <div className="bg-brand-gold/15 p-5 rounded-2xl border-2 border-brand-gold/30 flex gap-4 items-center scroll-reveal mt-8">
                  <i className="fa-solid fa-screwdriver-wrench text-3xl text-brand-gold animate-spin-slow shrink-0" />
                  <p className="text-sm text-brand-gold/95 leading-snug font-medium">
                    All installations undergo a rigorous <strong className="text-brand-gold">45-point safety inspection</strong> checklist before final commissioning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text content */}
          <div className="scroll-reveal-right space-y-5 order-1 lg:order-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2 flex items-center gap-2">
                <span className="w-12 h-px bg-brand-gold" />
                About Digitech
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Welcome to <span className="bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">Digitech Elevators</span>
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed border-l-4 border-brand-gold/30 pl-6">
              <p>Digitech Elevators has been delivering reliable and innovative elevator solutions for over <strong className="text-brand-navy">25 years</strong>. We specialize in designing, installing, maintaining, and modernizing elevators for apartments, hospitals, commercial buildings, industries, villas, and educational institutions.</p>
              <p>Our team of experienced engineers and technicians ensures every elevator meets the highest standards of safety, performance, and comfort. We use advanced technology and quality components to provide long-lasting, efficient elevator systems.</p>
              <p>Whether you require a new installation or modernization of an existing lift, Digitech Elevators is committed to delivering dependable solutions tailored to your requirements.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="scroll-reveal bg-slate-50 p-5 rounded-2xl border-l-4 border-brand-gold" style={{ transitionDelay: '0.2s' }}>
                <div className="w-11 h-11 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-3">
                  <i className="fa-solid fa-bullseye text-xl" />
                </div>
                <h4 className="font-serif font-bold text-base text-brand-navy mb-2">Our Mission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">To provide safe, reliable, energy-efficient, and innovative elevator solutions with exceptional service.</p>
              </div>
              <div className="scroll-reveal bg-slate-50 p-5 rounded-2xl border-l-4 border-brand-navy" style={{ transitionDelay: '0.35s' }}>
                <div className="w-11 h-11 bg-brand-navy/10 rounded-xl flex items-center justify-center text-brand-navy mb-3">
                  <i className="fa-solid fa-eye text-xl" />
                </div>
                <h4 className="font-serif font-bold text-base text-brand-navy mb-2">Our Vision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">To become one of India's most trusted elevator companies through innovation and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES GRID ══════════════════════════ */}
      <section ref={servicesRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
        {/* Full-width background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 opacity-95" />
          {/* Subtle geometric overlay */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(212,175,55,0.3) 49%, rgba(212,175,55,0.3) 51%, transparent 52%)',
                 backgroundSize: '80px 80px'
               }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-brand-gold" />
              Expertise We Deliver
              <span className="w-12 h-px bg-brand-gold" />
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Our Services</h2>
            <p className="text-slate-300 text-sm">Comprehensive elevator solutions tailored to your needs</p>
          </div>

          {/* Compact list layout - Two columns */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(SERVICES_DATA).map(([key, item], i) => (
              <div
                key={key}
                className="scroll-reveal group relative bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/10 hover:border-brand-gold transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Content container */}
                <div className="flex items-center gap-4 p-5 relative z-10">
                  {/* Left: Icon */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative shadow-lg">
                      <i className={`fa-solid ${serviceIcons[key] || 'fa-elevator'} text-2xl text-white`} />
                      {/* Animated pulse ring */}
                      <div className="absolute inset-0 rounded-xl border-2 border-brand-gold/0 group-hover:border-brand-gold group-hover:scale-125 transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-lg text-white group-hover:text-brand-gold transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>

                  {/* Right: Arrow */}
                  {['installation','amc','modernization','repair'].includes(key) && (
                    <a 
                      href={`#/services/${key}`}
                      className="shrink-0 w-10 h-10 bg-white/10 hover:bg-brand-gold rounded-xl flex items-center justify-center text-white hover:text-brand-navy transition-all group-hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-sm" />
                    </a>
                  )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PRODUCTS GRID ══════════════════════════ */}
      <section ref={productsRef} className="py-24 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-clip">
        {/* Decorative circles */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Elevator Solutions</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Premium Lift Systems<br />
              <span className="text-3xl md:text-4xl text-slate-600">We Deliver</span>
            </h2>
          </div>

          {/* Split image-content layout */}
          <div className="space-y-12 pb-16">
            {Object.entries(PRODUCTS_DATA).map(([key, item], i) => (
              <div
                key={key}
                className={`scroll-reveal group sticky bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 hover:border-brand-gold`}
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  top: '100px',
                  zIndex: i + 1,
                }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${i % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Image Side */}
                  <div className={`lg:col-span-5 relative h-64 lg:h-auto ${i % 2 === 0 ? '' : 'lg:col-start-8'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy">
                      <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-110 transition-all duration-700"
                           style={{ backgroundImage:`url('${item.image}')` }} />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 to-transparent" />
                      
                      {/* Icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-brand-gold/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-brand-gold/40">
                          <i className={`fa-solid ${item.icon} text-6xl text-brand-gold`} />
                        </div>
                      </div>

                      {/* Floor lines overlay */}
                      <div className="absolute inset-0 pointer-events-none opacity-20">
                        {[20,40,60,80].map(p => (
                          <div key={p} className="absolute left-0 right-0 h-px bg-white/20" style={{ top: `${p}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="space-y-5">
                      {/* Title */}
                      <div>
                        <h4 className="font-serif font-bold text-2xl lg:text-3xl text-brand-navy group-hover:text-brand-gold transition-colors mb-2">
                          {item.bannerTitle}
                        </h4>
                        <p className="text-sm text-brand-gold font-semibold uppercase tracking-wider">
                          {item.bannerSubtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc.substring(0, 150)}...
                      </p>

                      {/* Capacity badges */}
                      <div className="flex flex-wrap gap-2">
                        {item.caps.slice(0, 4).map((cap, idx) => (
                          <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium border border-slate-200">
                            {cap}
                          </span>
                        ))}
                      </div>

                      {/* Features list - Quick highlights */}
                      <div className="grid grid-cols-2 gap-3">
                        {item.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-green-500 shrink-0 mt-0.5" />
                            <span className="leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <a 
                          href={`#/products/${key}`}
                          className="inline-flex items-center gap-3 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg text-sm group"
                        >
                          View Full Specifications
                          <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-brand-gold/90 rounded-xl flex items-center justify-center shadow-lg z-10">
                  <span className="text-brand-navy font-bold text-lg font-serif">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ INDUSTRIES SERVED ══════════════════════════ */}
      <section ref={industryRef} className="relative py-24 px-4 md:px-8 bg-brand-navy text-white overflow-hidden">
        {/* Curved wave divider at top */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"
             style={{ clipPath: 'ellipse(100% 100% at 50% 0%)' }} />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.4) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} />

        <div className="max-w-7xl mx-auto relative z-10 pt-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-brand-gold" />
              Diverse Sector Expertise
              <span className="w-16 h-px bg-brand-gold" />
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Industries We Serve</h2>
            <p className="text-slate-300 text-sm">Trusted by leading organizations across sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: 'fa-building',                label: 'Apartments' },
              { icon: 'fa-house-chimney-window',    label: 'Villas' },
              { icon: 'fa-city',                    label: 'Commercial Complexes' },
              { icon: 'fa-hospital',                label: 'Hospitals' },
              { icon: 'fa-industry',                label: 'Industries' },
              { icon: 'fa-graduation-cap',          label: 'Educational Institutions' }
            ].map((ind, i) => (
              <div
                key={i}
                className="scroll-reveal-scale bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 hover:border-brand-gold hover:bg-white/20 text-center transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center space-y-5"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-18 h-18 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold text-3xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-400 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                  <i className={`fa-solid ${ind.icon} group-hover:animate-lift-ride`} />
                </div>
                <h4 className="font-serif font-bold text-sm text-white leading-snug group-hover:text-brand-gold transition-colors">{ind.label}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Curved wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-amber-50"
             style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* ══════════════════════════ WHY CHOOSE DIGITECH ══════════════════════════ */}
      <section ref={whyRef} className="py-24 px-4 md:px-8 bg-amber-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Our Commitment</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Why Choose<br />
              <span className="bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">Digitech Elevators</span>
            </h2>
            <p className="text-slate-600 text-sm">Eight reasons that make us the preferred choice for elevator solutions</p>
          </div>

          {/* Horizontal timeline/process layout */}
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold/20" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { icon:'fa-user-tie',          title:'Experienced Engineers',      desc:'Highly trained professionals with decades of hands-on field experience.', num:'01' },
                { icon:'fa-bezier-curve',      title:'Customized Solutions',       desc:'Elevator systems designed to suit each building\'s unique requirements.', num:'02' },
                { icon:'fa-microchip',         title:'Premium Components',         desc:'Quality controllers, drives, doors, and safety systems from trusted manufacturers.', num:'03' },
                { icon:'fa-shield-halved',     title:'Safety First',               desc:'Every installation complies with industry safety standards and rigorous testing.', num:'04' },
                { icon:'fa-leaf',              title:'Energy Efficient Systems',   desc:'Modern technology that reduces electricity consumption while delivering superior performance.', num:'05' },
                { icon:'fa-bolt-lightning',    title:'Fast Service Response',      desc:'Dedicated technicians available 24/7 for emergency breakdown support.', num:'06' },
                { icon:'fa-tags',              title:'Affordable AMC Plans',       desc:'Flexible maintenance packages to maximize elevator lifespan and reduce costs.', num:'07' },
                { icon:'fa-face-smile',        title:'Customer Satisfaction',      desc:'Long-term relationships built on quality workmanship and dependable service.', num:'08' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="scroll-reveal relative group"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute top-[4.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-brand-gold rounded-full border-4 border-amber-50 z-10 group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Card */}
                  <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-gold relative overflow-hidden group-hover:-translate-y-2">
                    {/* Number badge */}
                    <div className="absolute top-3 right-3 w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                      <span className="text-brand-gold/40 font-bold text-lg font-mono">{item.num}</span>
                    </div>
                    
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 mb-5 shadow-lg">
                      <i className={`fa-solid ${item.icon}`} />
                    </div>
                    <h4 className="font-serif font-bold text-base text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA button */}
          <div className="text-center scroll-reveal pt-8">
            <a href="#/about" className="inline-flex items-center gap-3 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
              Learn More About Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ OUR PROJECTS ══════════════════════════ */}
      <section ref={projectsRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
        {/* Parallax background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/95 to-white" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold flex items-center justify-center gap-3">
              <i className="fa-solid fa-briefcase" />
              Our Portfolio
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy">Completed Projects</h2>
            <p className="text-slate-600 text-sm">Showcasing excellence across diverse installations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 6).map((p, i) => (
              <div
                key={i}
                className="scroll-reveal bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-slate-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-500 group hover:translate-y-[-8px]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="h-52 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
                  {/* Animated floor lines */}
                  <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none">
                    {[20, 40, 60, 80].map(pct => (
                      <div key={pct} className="absolute left-0 right-0 h-px bg-white/10 group-hover:bg-brand-gold/30 transition-colors" style={{ top: `${pct}%` }} />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <span className="bg-brand-gold text-brand-navy text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide shadow-lg">
                        {p.category}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-white leading-tight drop-shadow-lg">{p.name}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-7 space-y-5">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Location</span>
                      <span className="text-slate-800 font-semibold">{p.location}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Type</span>
                      <span className="text-slate-800 font-semibold">{p.type}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Capacity</span>
                      <span className="text-slate-800 font-semibold">{p.cap}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 font-bold uppercase tracking-wider block mb-1">Floors</span>
                      <span className="text-slate-800 font-semibold">{p.stops}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 scroll-reveal">
            <a href="#/projects" className="inline-flex items-center gap-3 bg-white border-2 border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-widest transition-all hover:gap-5 hover:shadow-2xl shadow-lg">
              View All Projects <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ══════════════════════════ */}
      <section ref={testiRef} className="relative py-32 px-4 md:px-8 bg-gradient-to-br from-brand-gold/90 via-yellow-600 to-brand-gold text-white overflow-hidden"
               style={{ clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 92%)' }}>
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.3) 49%, rgba(255,255,255,0.3) 51%, transparent 52%)',
               backgroundSize: '60px 60px'
             }} />
        
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <div className="scroll-reveal space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-navy/80 flex items-center justify-center gap-3">
              <i className="fa-solid fa-quote-left text-xl" />
              Client Feedback
              <i className="fa-solid fa-quote-right text-xl" />
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy drop-shadow-sm">What Our Clients Say</h2>
            <p className="text-brand-navy/80 text-sm font-medium">Real experiences from satisfied customers</p>
          </div>

          <div className="scroll-reveal-scale relative">
            {/* Offset card layout for visual interest */}
            <div className="relative max-w-3xl mx-auto">
              {/* Background decorative card */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl transform rotate-2 scale-105" />
              <div className="absolute inset-0 bg-white/15 backdrop-blur-sm rounded-3xl transform -rotate-2 scale-105" />
              
              {/* Main testimonial card */}
              <div className="relative bg-white/95 backdrop-blur-md p-12 md:p-16 rounded-3xl shadow-2xl min-h-[280px] flex items-center justify-center border-2 border-white">
                <i className="fa-solid fa-quote-left absolute top-8 left-8 text-6xl text-brand-gold/20 animate-float" />
                <i className="fa-solid fa-quote-right absolute bottom-8 right-8 text-6xl text-brand-gold/20 animate-float" style={{ animationDelay: '1s' }} />
                
                {testiIndex === 0 ? (
                  <div key="t0" className="space-y-6 animate-lift-ride text-center">
                    <p className="text-slate-700 italic text-lg md:text-xl leading-relaxed font-medium">
                      "Digitech Elevators has provided excellent AMC service for our apartment for several years. Their technicians respond quickly and maintain the elevators professionally."
                    </p>
                    <div className="flex flex-col items-center pt-4 border-t-2 border-brand-gold/30">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg animate-pulse-ring">
                        A
                      </div>
                      <h4 className="font-serif font-bold text-xl text-brand-navy">Apartment Association President</h4>
                      <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                        <i className="fa-solid fa-location-dot text-brand-gold" />
                        Bangalore
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key="t1" className="space-y-6 animate-lift-ride text-center">
                    <p className="text-slate-700 italic text-lg md:text-xl leading-relaxed font-medium">
                      "Our hospital elevators have been operating reliably since installation. Excellent service and round-the-clock emergency support."
                    </p>
                    <div className="flex flex-col items-center pt-4 border-t-2 border-brand-gold/30">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg animate-pulse-ring">
                        H
                      </div>
                      <h4 className="font-serif font-bold text-xl text-brand-navy">Hospital Operations Director</h4>
                      <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                        <i className="fa-solid fa-location-dot text-brand-gold" />
                        Bangalore
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced dot indicators */}
          <div className="flex justify-center gap-3">
            {[0, 1].map(i => (
              <button key={i} onClick={() => setTestiIndex(i)}
                      className={`rounded-full transition-all duration-300 shadow-lg ${testiIndex === i ? 'bg-brand-navy w-12 h-4' : 'bg-white/60 hover:bg-white w-4 h-4'}`} />
            ))}
          </div>

          {/* Star rating display */}
          <div className="flex justify-center gap-2 text-3xl">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star text-brand-navy/80 animate-bounce-soft" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CONTACT / ENQUIRY FORM ══════════════════════════ */}
      <section ref={contactRef} id="enquiry-form" className="relative bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white py-20 px-4 md:px-8 overflow-hidden"
               style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)' }}>
        {/* Background animated cables */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          {[15, 35, 65, 85].map(pos => (
            <div
              key={pos}
              className="absolute top-0 bottom-0 w-px bg-brand-gold"
              style={{
                left: `${pos}%`,
                animation: `shaftGlow ${2 + pos * 0.02}s ease-in-out infinite`,
                animationDelay: `${pos * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Decorative geometric elements */}
        <div className="absolute top-1/4 right-[-5%] w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-[-5%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 pt-8">

          {/* Left — contact details */}
          <div className="lg:col-span-5 space-y-6 scroll-reveal-left">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Get In Touch
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-white">
                Contact Us
              </h2>
            </div>

            <div className="space-y-5">
              {/* Office Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <i className="fa-solid fa-location-dot text-xl" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm uppercase tracking-wider mb-1">Office Address</p>
                  <p className="text-slate-300 text-sm leading-relaxed">61 Third floor, 1st A main Road Bhuvaneshwari nagar, Vishwanath Naganahalli Main Rd, opp. Alphonsa Forane Church, Post, RT Nagar, Bengaluru, Karnataka 560032</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <i className="fa-solid fa-phone text-xl" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm uppercase tracking-wider mb-1">Phone Numbers</p>
                  <p className="text-slate-300 text-sm leading-relaxed">+91 98450 71406 / +91 76250 80504</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <i className="fa-solid fa-envelope text-xl" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm uppercase tracking-wider mb-1">Email Address</p>
                  <p className="text-slate-300 text-sm leading-relaxed">digitech.elevators@gmail.com</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="scroll-reveal pt-2">
              <a href="https://wa.me/919845926155?text=Hi%20Digitech%20Elevators"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-xl text-sm uppercase transition-all hover:scale-105 shadow-lg w-full justify-center">
                <i className="fa-brands fa-whatsapp text-2xl" /> Chat on WhatsApp
              </a>
            </div>

            {/* Map iframe */}
            <div className="w-full h-56 rounded-2xl border-2 border-slate-700 hover:border-brand-gold/50 overflow-hidden transition-all">
              <iframe
                title="Google Map Location"
                src="https://maps.google.com/maps?q=61%20Third%20floor,%201st%20A%20main%20Road%20Bhuvaneshwari%20nagar,%20Vishwanath%20Naganahalli%20Main%20Rd,%20opp.%20Alphonsa%20Forane%20Church,%20RT%20Nagar,%20Bengaluru,%20Karnataka%20560032&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right — enquiry form */}
          <div className="lg:col-span-7 scroll-reveal-right">
            <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-800 shadow-2xl border-4 border-brand-gold/20">
              <h4 className="font-serif font-bold text-2xl text-brand-navy border-b-2 border-brand-gold pb-4 mb-6 flex items-center gap-3">
                <i className="fa-solid fa-envelope-open-text text-brand-gold text-2xl animate-float" />
                <span>Online Enquiry Form</span>
              </h4>
              {formSubmitted ? (
                <div className="text-center py-16 animate-zoom-in">
                  <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <i className="fa-solid fa-circle-check text-5xl text-green-500 animate-bounce" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl mb-2 text-brand-navy">Enquiry Submitted!</h4>
                  <p className="text-slate-600 text-sm">Thank you! Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Name *</label>
                      <input type="text" placeholder="Your Name"
                             className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Company</label>
                      <input type="text" placeholder="Company / Building Name"
                             className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-navy transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                      <input type="tel" placeholder="Mobile Number"
                             className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-gold transition-all" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email *</label>
                      <input type="email" placeholder="Email Address"
                             className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-gold transition-all" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">City *</label>
                      <input type="text" defaultValue="Bangalore"
                             className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-navy transition-all" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Service Required *</label>
                      <select className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm text-slate-700 focus:outline-none focus:border-brand-navy transition-all" required>
                        <option value="">Select Service Required</option>
                        <option>Elevator Installation</option>
                        <option>Annual Maintenance Contract (AMC)</option>
                        <option>Elevator Modernization</option>
                        <option>Repair &amp; Breakdown Services</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Message</label>
                    <textarea rows="3" placeholder="Describe your requirements..."
                              className="w-full border-2 border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-navy transition-all resize-none" />
                  </div>
                  <button type="submit"
                          className="w-full bg-gradient-to-r from-brand-navy to-brand-gold hover:from-brand-gold hover:to-brand-navy text-white font-bold py-4 rounded-2xl text-sm uppercase tracking-widest transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                    <i className="fa-solid fa-paper-plane" />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
