import React, { useState, useEffect } from 'react';
import { PRODUCTS_DATA, SERVICES_DATA, PROJECTS_DATA } from '../data/siteData';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [yearsVal, setYearsVal]     = useState(0);
  const [liftsVal, setLiftsVal]     = useState(0);
  const [customersVal, setCustomersVal] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);

  /* ── Stats counter animation ── */
  useEffect(() => {
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
    return () => clearInterval(iv);
  }, []);

  /* ── Testimonials auto‑rotate ── */
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
    <div className="animate-fade-in">

      {/* ══════════════════════════ HERO BANNER ══════════════════════════ */}
      <section className="relative bg-brand-navy text-white min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/92 to-brand-navy/60 z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-35 scale-105 transition-transform duration-[8000ms]"
               style={{ backgroundImage:"url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600')" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 lg:py-12 z-20 relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left — headline */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-3.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest animate-pulse">
              <i className="fa-solid fa-award"></i> Safe &bull; Reliable &bull; Innovative
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Reliable Elevator Solutions<br/>
              <span className="text-brand-gold">for Modern Buildings</span>
            </h2>
            <p className="text-brand-gold/90 font-semibold text-[11px] md:text-xs tracking-widest uppercase border-slate-700/60 lg:border-l-2 lg:pl-3 max-w-lg mx-auto lg:mx-0">
              Installation &bull; AMC &bull; Modernization &bull; Repair &bull; 24/7 Breakdown Support
            </p>
            <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Digitech Elevators is a trusted provider of complete elevator solutions, specializing in the installation, modernization, maintenance, and repair of elevators for residential, commercial, industrial, and healthcare buildings. Our focus is on safety, reliability, and customer satisfaction.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <a href="#/quote"
                 className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-5 py-2.5 rounded-lg shadow-lg transition-all hover:shadow-brand-gold/30 hover:shadow-xl flex items-center gap-1.5 text-xs">
                <i className="fa-solid fa-calculator"></i> Get a Free Quote
              </a>
              <a href="#/contact"
                 className="border border-white/70 hover:border-brand-gold hover:text-brand-gold text-white font-semibold px-5 py-2.5 rounded-lg transition flex items-center gap-1.5 text-xs">
                Contact Us
              </a>
              <a href="#enquiry-form"
                 className="bg-slate-700/80 hover:bg-slate-700 text-white font-semibold px-5 py-2.5 rounded-lg transition flex items-center gap-1.5 text-xs">
                <i className="fa-solid fa-calendar-check"></i> Request a Site Visit
              </a>
            </div>
          </div>

          {/* Right — glassmorphism quick-estimate card */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-2xl text-white shadow-2xl">
            <h3 className="font-serif font-bold text-base mb-0.5 flex items-center gap-1.5">
              <i className="fa-solid fa-circle-nodes text-brand-gold"></i> Fast Project Estimate
            </h3>
            <p className="text-[11px] text-slate-300 mb-3">Fill in specifications for a custom layout quote.</p>

            {formSubmitted ? (
              <div className="text-center py-8 bg-slate-900/50 rounded-xl border border-slate-700">
                <i className="fa-solid fa-circle-check text-3xl text-brand-gold mb-2 animate-bounce block"></i>
                <h4 className="font-serif font-bold text-sm mb-0.5">Design Received</h4>
                <p className="text-[11px] text-slate-350">We will call you within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">Select Elevator Type</label>
                  <select className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-gold">
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
                           className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-gold" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">Capacity</label>
                    <select defaultValue="8 Pax (544 kg)" className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-gold">
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
                         className="w-full bg-slate-950 border border-slate-600 rounded-lg p-2 text-xs text-white placeholder-slate-550 focus:outline-none focus:border-brand-gold" required />
                </div>
                <button type="submit"
                        className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-2 rounded-lg text-xs uppercase tracking-widest transition">
                  Calculate Design Layout
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ STATS STRIP ══════════════════════════ */}
      <section className="bg-brand-navy text-white py-12 px-4 border-t-2 border-brand-gold/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { val: `${yearsVal}+`, label: 'Years of Experience' },
            { val: `${liftsVal}+`, label: 'Elevators Maintained' },
            { val: `${customersVal}+`, label: 'Happy Customers' },
            { val: '24/7', label: 'Breakdown Support' },
            { val: 'ISO', label: '9001:2015 Certified' },
            { val: 'Govt', label: 'Enlisted Grade-A' },
          ].map((s, i) => (
            <div key={i} className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold font-serif text-brand-gold">{s.val}</p>
              <p className="text-[11px] uppercase text-slate-400 font-semibold tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════ ABOUT SECTION ══════════════════════════ */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — decorated panel */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-brand-gold -z-10 rounded-tl-md"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-brand-gold -z-10 rounded-br-md"></div>
          <div className="bg-gradient-to-tr from-brand-navy to-slate-800 rounded-2xl overflow-hidden shadow-2xl p-8 text-white space-y-6">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <span className="font-serif font-bold text-lg text-brand-gold">Quality Assured</span>
              <i className="fa-solid fa-certificate text-2xl text-brand-gold animate-float"></i>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              {['ISO 9001:2015 Certified Company',
                'Government of Karnataka Enlisted Grade-A',
                'VVVF Drive Energy Optimization Technology',
                'Automatic Rescue Devices (ARD) Standard'].map((t, i) => (
                <p key={i} className="flex items-center gap-3">
                  <i className="fa-solid fa-circle-check text-green-400 shrink-0"></i> {t}
                </p>
              ))}
            </div>
            <div className="bg-brand-gold/10 p-4 rounded-xl border border-brand-gold/20 flex gap-4 items-center">
              <i className="fa-solid fa-screwdriver-wrench text-2xl text-brand-gold animate-spin-slow shrink-0"></i>
              <p className="text-xs text-brand-gold/90 leading-snug">
                All installations undergo a rigorous <strong>45-point safety inspection</strong> checklist before final commissioning.
              </p>
            </div>
          </div>
        </div>

        {/* Right — text content */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">About Digitech</h3>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
            Welcome to Digitech Elevators
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>Digitech Elevators has been delivering reliable and innovative elevator solutions for over <strong>25 years</strong>. We specialize in designing, installing, maintaining, and modernizing elevators for apartments, hospitals, commercial buildings, industries, villas, and educational institutions.</p>
            <p>Our team of experienced engineers and technicians ensures every elevator meets the highest standards of safety, performance, and comfort. We use advanced technology and quality components to provide long-lasting, efficient elevator systems.</p>
            <p>Whether you require a new installation or modernization of an existing lift, Digitech Elevators is committed to delivering dependable solutions tailored to your requirements.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div>
              <h4 className="font-serif font-bold text-lg text-brand-navy">Our Mission</h4>
              <p className="text-xs text-slate-500 mt-1">To provide safe, reliable, energy-efficient, and innovative elevator solutions with exceptional service.</p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-brand-navy">Our Vision</h4>
              <p className="text-xs text-slate-500 mt-1">To become one of India's most trusted elevator companies through innovation and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES GRID ══════════════════════════ */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Expertise We Deliver</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SERVICES_DATA).map(([key, item]) => (
              <div key={key}
                   className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border-b-4 border-transparent hover:border-brand-gold card-hover">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                    <i className={`fa-solid ${serviceIcons[key] || 'fa-elevator'}`}></i>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-brand-navy">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
                {['installation','amc','modernization','repair'].includes(key) && (
                  <a href={`#/services/${key}`}
                     className="text-brand-navy hover:text-brand-gold font-semibold text-xs mt-6 inline-flex items-center gap-1.5 uppercase tracking-wider group-hover:gap-3 transition-all">
                    Explore Service <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PRODUCTS GRID ══════════════════════════ */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Elevator Solutions</h3>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">Premium Lift Systems We Deliver</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(PRODUCTS_DATA).map(([key, item]) => (
            <div key={key}
                 className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 card-hover">
              <div className="h-52 bg-gradient-to-tr from-brand-navy to-slate-800 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-110 transition-transform duration-700"
                     style={{ backgroundImage:`url('${item.image}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                <i className={`fa-solid ${item.icon} text-5xl text-brand-gold z-10 group-hover:scale-110 transition-transform duration-300`}></i>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-serif font-bold text-xl text-brand-navy">{item.bannerTitle}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.bannerSubtitle}</p>
                <div className="pt-4 flex justify-between items-center border-t border-slate-100">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Full Specs Available</span>
                  <a href={`#/products/${key}`}
                     className="text-brand-navy hover:text-brand-gold text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition">
                    View Details <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════ INDUSTRIES SERVED ══════════════════════════ */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Diverse Sector Expertise</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: 'fa-building', label: 'Apartments' },
              { icon: 'fa-house-chimney-window', label: 'Villas' },
              { icon: 'fa-city', label: 'Commercial Complexes' },
              { icon: 'fa-hospital', label: 'Hospitals' },
              { icon: 'fa-industry', label: 'Industries' },
              { icon: 'fa-graduation-cap', label: 'Educational Institutions' }
            ].map((ind, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-gold hover:shadow-md text-center transition-all duration-300 group card-hover flex flex-col items-center justify-center space-y-4">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <i className={`fa-solid ${ind.icon}`}></i>
                </div>
                <h4 className="font-serif font-bold text-sm text-brand-navy leading-snug">{ind.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ WHY CHOOSE DIGITECH ══════════════════════════ */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Our Commitment</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">Why Choose Digitech Elevators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon:'fa-user-tie',          title:'Experienced Engineers',      desc:'Highly trained professionals with decades of hands-on field experience.' },
              { icon:'fa-bezier-curve',       title:'Customized Solutions',       desc:'Elevator systems designed to suit each building\'s unique requirements.' },
              { icon:'fa-microchip',          title:'Premium Components',         desc:'Quality controllers, drives, doors, and safety systems from trusted manufacturers.' },
              { icon:'fa-shield-halved',      title:'Safety First',               desc:'Every installation complies with industry safety standards and rigorous testing.' },
              { icon:'fa-leaf',               title:'Energy Efficient Systems',   desc:'Modern technology that reduces electricity consumption while delivering superior performance.' },
              { icon:'fa-bolt-lightning',     title:'Fast Service Response',      desc:'Dedicated technicians available 24/7 for emergency breakdown support.' },
              { icon:'fa-tags',               title:'Affordable AMC Plans',       desc:'Flexible maintenance packages to maximize elevator lifespan and reduce costs.' },
              { icon:'fa-face-smile',         title:'Customer Satisfaction',      desc:'Long-term relationships built on quality workmanship and dependable service.' },
            ].map((item, i) => (
              <div key={i}
                   className="bg-white p-6 rounded-2xl shadow-sm space-y-3 border border-slate-200 hover:border-brand-gold hover:shadow-md transition-all duration-300 group card-hover">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-xl group-hover:bg-brand-navy group-hover:text-white transition-all">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h4 className="font-serif font-bold text-base text-brand-navy">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ OUR PROJECTS ══════════════════════════ */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Our Portfolio</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">Completed Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS_DATA.slice(0, 6).map((p, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group card-hover">
                <div className="h-44 relative flex items-end overflow-hidden">
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
                  <h4 className="font-serif font-bold text-base text-brand-navy leading-tight">{p.name}</h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] border-t border-slate-100 pt-3">
                    <div><span className="text-slate-400 font-semibold">Location:</span><br/><span className="text-slate-700">{p.location}</span></div>
                    <div><span className="text-slate-400 font-semibold">Elevator Type:</span><br/><span className="text-slate-700">{p.type}</span></div>
                    <div><span className="text-slate-400 font-semibold">Capacity:</span><br/><span className="text-slate-700">{p.cap}</span></div>
                    <div><span className="text-slate-400 font-semibold">Floors:</span><br/><span className="text-slate-700">{p.stops}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#/projects" className="inline-flex items-center gap-2 border border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition">
              View All Projects <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ══════════════════════════ */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Client Feedback</h3>
          <h2 className="font-serif text-3xl font-bold text-brand-navy">Testimonials</h2>

          <div className="relative bg-white p-10 md:p-14 rounded-3xl shadow-lg min-h-[200px] flex items-center justify-center border border-slate-200">
            <i className="fa-solid fa-quote-left absolute top-8 left-10 text-5xl text-brand-gold/20"></i>
            {testiIndex === 0 ? (
              <div className="space-y-5 animate-fade-in">
                <p className="text-slate-600 italic text-base md:text-lg leading-relaxed">
                  "Digitech Elevators has provided excellent AMC service for our apartment for several years. Their technicians respond quickly and maintain the elevators professionally."
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-lg mb-2">A</div>
                  <h4 className="font-serif font-bold text-slate-800">Apartment Association President</h4>
                  <p className="text-xs text-slate-500">Bangalore</p>
                </div>
              </div>
            ) : (
              <div className="space-y-5 animate-fade-in">
                <p className="text-slate-600 italic text-base md:text-lg leading-relaxed">
                  "Our hospital elevators have been operating reliably since installation. Excellent service and round-the-clock emergency support."
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-lg mb-2">H</div>
                  <h4 className="font-serif font-bold text-slate-800">Hospital Operations Director</h4>
                  <p className="text-xs text-slate-500">Bangalore</p>
                </div>
              </div>
            )}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {[0, 1].map(i => (
              <button key={i} onClick={() => setTestiIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${testiIndex === i ? 'bg-brand-gold w-6' : 'bg-slate-300'}`}></button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CONTACT / ENQUIRY FORM ══════════════════════════ */}
      <section id="enquiry-form" className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-20 px-4 md:px-8 border-t-4 border-brand-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left — contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-2">Get In Touch</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Contact Us</h2>
            </div>
            <div className="space-y-5 text-sm text-slate-300">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-0.5">Office Address</p>
                  <p className="text-slate-400 text-xs leading-relaxed">No. 45, Ground Floor, Yeshwanthpur, Bangalore – 560022</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-0.5">Phone Numbers</p>
                  <p className="text-slate-400 text-xs">+91 98765 43210 / +91 80 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-0.5">Email Address</p>
                  <p className="text-slate-400 text-xs">info@digitechelevators.com</p>
                </div>
              </div>
            </div>
            <a href="https://wa.me/919876543210?text=Hi%20Digitech%20Elevators"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-xl text-sm uppercase transition shadow-lg">
              <i className="fa-brands fa-whatsapp text-lg"></i> Chat on WhatsApp
            </a>
            {/* Map placeholder */}
            <div className="w-full h-44 bg-slate-900/60 rounded-2xl border border-slate-700 flex items-center justify-center">
              <span className="text-center text-slate-400 text-xs px-6">
                <i className="fa-solid fa-map-location-dot text-2xl text-brand-gold mb-2 block"></i>
                Google Map Location
              </span>
            </div>
          </div>

          {/* Right — enquiry form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-10 text-slate-800 shadow-2xl">
            <h4 className="font-serif font-bold text-2xl text-brand-navy border-b border-slate-200 pb-3 mb-6 flex items-center gap-2">
              <i className="fa-solid fa-envelope-open-text text-brand-gold"></i> Online Enquiry Form
            </h4>
            {formSubmitted ? (
              <div className="text-center py-14">
                <i className="fa-solid fa-circle-check text-6xl text-green-500 mb-5 animate-bounce block"></i>
                <h4 className="font-serif font-bold text-2xl mb-2 text-brand-navy">Enquiry Submitted!</h4>
                <p className="text-sm text-slate-500">Thank you! Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Name *</label>
                    <input type="text" placeholder="Your Name"
                           className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/20 transition" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Company</label>
                    <input type="text" placeholder="Company / Building Name"
                           className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Phone Number *</label>
                    <input type="tel" placeholder="Mobile Number"
                           className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Email *</label>
                    <input type="email" placeholder="Email Address"
                           className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">City *</label>
                    <input type="text" defaultValue="Bangalore"
                           className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Service Required *</label>
                    <select className="w-full border border-slate-200 rounded-lg p-3 text-xs text-slate-600 focus:outline-none focus:border-brand-navy transition" required>
                      <option value="">Select Service Required</option>
                      <option>Elevator Installation</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                      <option>Elevator Modernization</option>
                      <option>Repair &amp; Breakdown Services</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Message</label>
                  <textarea rows="3" placeholder="Describe your requirements..."
                            className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition"></textarea>
                </div>
                <button type="submit"
                        className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:shadow-xl">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
