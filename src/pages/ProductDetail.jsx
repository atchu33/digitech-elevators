import React, { useState, useEffect } from 'react';
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

// Why Choose Details Mapping
const WHY_CHOOSE_DETAILS = {
  'Premium Quality Components': 'We source only Grade-A certified parts to ensure safety, durability, and smooth ride comfort.',
  'Safe & Reliable': 'Equipped with multi-tier emergency rescue systems, reliable braking, and backup power integrations.',
  'Low Maintenance': 'Built with highly optimized mechanical components that minimize friction, wear, and overall service costs.',
  'Customized Design': 'Custom cabin claddings, lighting, doors, and indicators to perfectly match your building architecture.',
  'Professional Installation': 'Engineered and installed by certified, experienced lift technicians following rigorous safety protocols.',
  'Patient Comfort': 'Designed with slow deceleration and smooth leveling to ensure vibration-free travel for sensitive medical equipment.',
  'Safe Transportation': 'Extra-wide doors and spacious stretcher-sized cabins for seamless patient movement.',
  'Reliable Performance': 'Engineered to handle high-frequency duty cycles in busy hospital environments 24/7.',
  'Easy Maintenance': 'Standardized components allowing rapid servicing and minimal downtime for crucial facility operations.',
  'High Durability': 'Reinforced steel columns, heavy-duty guide rails, and durable platforms built for intense cargo loading.',
  'Efficient Material Handling': 'Optimized for forklifts, hand jacks, and pallet transfer in warehouses or industrial zones.',
  'Long Service Life': 'Industrial-grade wear resistance to withstand heavy daily use over decades.',
  'Luxury Appearance': 'Premium glass, wood paneling, and custom gold claddings designed to elevate your private residence.',
  'Easy Installation': 'Compact pit and headroom requirements make it easy to fit into existing duplexes or villas.',
  'Safe Operation': 'Comprehensive home safety sensors, emergency backup power, and soft-start/stop drive systems.',
  'Adds Property Value': 'A luxurious, functional addition that enhances accessibility and increases the resale value of your home.'
};

export default function ProductDetail({ productKey, fallbackToHome }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const prod = PRODUCTS_DATA[productKey];
  
  // Local scroll-reveal observer to guarantee transitions play when switching products
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
  }, [productKey]);

  if (!prod) {
    if (fallbackToHome) fallbackToHome();
    return null;
  }

  const handleFormSubmit = (e) => { 
    e.preventDefault(); 
    
    const formData = new FormData(e.target);
    const name = formData.get('name') || 'Customer';
    const mobile = formData.get('mobile') || 'Not provided';
    const email = formData.get('email');
    const message = formData.get('message');
    
    const whatsappMessage = `Hi Digitech Elevators! I'm interested in ${prod.title}:\n\n` +
                           `👤 *Contact Details:*\n` +
                           `• Name: ${name}\n` +
                           `• Mobile: ${mobile}\n` +
                           `• Email: ${email || 'Not provided'}\n\n` +
                           `📋 *Product:* ${prod.bannerTitle}\n\n` +
                           (message ? `📝 *Message:*\n${message}\n\n` : '') +
                           `Please provide more information and pricing.`;
    
    window.open(`https://wa.me/919845071406?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setFormSubmitted(true);
  };
  const gallery = prod.gallery || [];

  return (
    <div className="animate-fade-in">
      {/* ── Premium Split Banner ── */}
      <section className="relative bg-brand-navy text-white overflow-hidden hero-gradient border-b-4 border-brand-gold">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)]"></div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[320px] lg:min-h-[380px]">
          {/* Left Text Column */}
          <div className="relative z-10 flex items-center px-4 md:px-8 lg:pl-12 xl:pl-16 py-12 md:py-16">
            <div className="max-w-2xl space-y-6 text-left">
              <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest animate-fade-simple">
                Premium range
              </span>
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-left">
                  {prod.bannerTitle}
                </h2>
                <p className="text-brand-gold font-bold text-xl md:text-xl tracking-wider uppercase flex items-center gap-2 animate-slide-right">
                  <i className="fa-solid fa-circle-check text-lg"></i> {prod.bannerSubtitle}
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image Column - Full height, bleed to edge */}
          <div className="relative h-[350px] lg:h-auto group">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 5%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.8) 18%, black 25%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 5%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.8) 18%, black 25%)'
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg flex items-center justify-between text-sm z-10">
              <span className="font-bold text-white uppercase tracking-wider">{prod.title}</span>
              <span className="text-brand-gold font-bold flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-sm"></i> Certified Safety
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE - Large Image Section ── */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Large Product Image */}
            <div className="scroll-reveal-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/30 group">
                <img
                  src={
                    productKey === 'commercial' ? './commercial1.png' :
                    productKey === 'home' ? './homelift2.png' :
                    productKey === 'villa' ? './villa1.png' :
                    productKey === 'hospital' ? './hospital1.png' :
                    productKey === 'goods' ? './goods1.png' :
                    productKey === 'hydraulic' ? './hydraulic1.png' :
                    productKey === 'mrl' ? './mrl1.png' :
                    productKey === 'car' ? './car1.png' :
                    './passenger%20elevator.jpg'
                  }
                  alt={prod.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl">
                  <h3 className="font-serif font-bold text-2xl text-brand-navy mb-2">{prod.title}</h3>
                  <p className="text-brand-gold font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                    <i className="fa-solid fa-shield-halved" />
                    Certified Safety Standards
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 scroll-reveal-right">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 flex items-center gap-3">
                  <span className="w-16 h-px bg-brand-gold" />
                  Overview
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                  Premium Quality<br />Elevator Solutions
                </h2>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                {prod.desc}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-5 rounded-2xl shadow-lg border-2 border-slate-100">
                  <div className="text-3xl font-bold text-brand-gold font-serif mb-1">
                    {prod.caps.length}+
                  </div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
                    Capacity Options
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-lg border-2 border-slate-100">
                  <div className="text-3xl font-bold text-brand-gold font-serif mb-1">
                    {prod.features.length}+
                  </div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
                    Key Features
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE GALLERY - Masonry Layout ── */}
      {gallery.length > 0 && (
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 scroll-reveal">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Visual Showcase</h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy">
                {prod.bannerTitle} Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[3/4] scroll-reveal hover:translate-y-[-8px] transition-all duration-300 hover:shadow-2xl"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className={`w-full h-full ${img.url.includes('villa4.png') ? 'object-cover object-left' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-end p-6 translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div>
                      <p className="text-white font-serif font-bold text-sm mb-2">{img.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── APPLICATIONS - Image Left, Content Right ── */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="scroll-reveal-left order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={
                    productKey === 'passenger' ? './passenger1.png' :
                    productKey === 'home' ? './homelift3.png' :
                    productKey === 'villa' ? './villa2.png' :
                    productKey === 'hospital' ? './hospital1.png' :
                    productKey === 'goods' ? './goods2.png' :
                    productKey === 'hydraulic' ? './hydraulic2.png' :
                    productKey === 'mrl' ? './mrl2.png' :
                    productKey === 'commercial' ? './commercial3.png' :
                    productKey === 'car' ? './car2.png' :
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
                  }
                  alt="Building Applications"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-gold/20" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 scroll-reveal-right order-1 lg:order-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Perfect For
                </h3>
                <h2 className="font-serif text-4xl font-bold mb-4">
                  Suitability & Applications
                </h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {prod.apps.map((a, i) => {
                  const icon = APP_ICONS[a] || 'fa-building';
                  return (
                    <div key={i} className="group bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:border-brand-gold/50 flex items-center gap-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-gold/10">
                      <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center text-brand-gold text-xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <i className={`fa-solid ${icon}`} />
                      </div>
                      <span className="text-sm font-bold transition-colors group-hover:text-brand-gold">{a}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES - Content Left, Image Right ── */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 scroll-reveal-left">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Advanced Technology
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                  Engineered Features
                </h2>
              </div>
              
              <div className="space-y-3">
                {prod.features.map((f, i) => (
                  <div key={i} className="group flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-2 border-slate-100 hover:border-brand-gold hover:bg-slate-100/50 hover:pl-6 hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 shrink-0 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-brand-navy">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="scroll-reveal-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={
                    productKey === 'commercial' ? './commercial2.png' :
                    productKey === 'home' ? './homelift1.png' :
                    productKey === 'passenger' ? './passenger2.png' :
                    productKey === 'villa' ? './villa3.png' :
                    productKey === 'hospital' ? './hospital3.png' :
                    productKey === 'goods' ? './goodss3.png' :
                    productKey === 'hydraulic' ? './hydraulic3.png' :
                    productKey === 'mrl' ? './mrl3.png' :
                    productKey === 'car' ? './car3.png' :
                    prod.image
                  }
                  alt="Features"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl">
                    <h4 className="font-serif font-bold text-xl text-brand-navy mb-2">Premium Components</h4>
                    <p className="text-sm text-slate-600">Built with advanced technology and premium materials for superior performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPACITIES - Full Width with Background ── */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
              Flexible Options
            </h3>
            <h2 className="font-serif text-4xl font-bold text-brand-navy">
              Available Capacities
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 scroll-reveal-container">
            {prod.caps.map((c, i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-brand-gold hover:shadow-brand-gold/15 hover:shadow-2xl transition-all duration-300 scroll-reveal hover:translate-y-[-6px] hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:rotate-12 transition-all duration-500">
                    <i className="fa-solid fa-weight-scale" />
                  </div>
                  <div className="text-left">
                    <div className="font-serif font-bold text-2xl text-brand-navy">{c}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Load Capacity</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE - Animated Grid Cards ── */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-brand-navy/90" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-white space-y-4 mb-12 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-brand-gold"></span>
              Excellence Guaranteed
              <span className="w-12 h-px bg-brand-gold"></span>
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Why Choose Digitech for {prod.title}
            </h2>
          </div>

          {/* Animated Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
            {prod.whyChoose.map((w, i) => {
              const desc = WHY_CHOOSE_DETAILS[w] || 'Digitech Elevators is committed to delivering safe, reliable, and premium quality vertical mobility solutions.';
              const icons = [
                'fa-certificate',
                'fa-shield-halved', 
                'fa-tools',
                'fa-palette',
                'fa-users-gear',
                'fa-medal',
                'fa-handshake',
                'fa-star'
              ];
              return (
                <div 
                  key={i} 
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 hover:border-brand-gold hover:from-brand-gold/10 hover:to-brand-gold/5 transition-all duration-500 scroll-reveal hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Animated Background Circle */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-brand-gold/30 flex items-center justify-center text-xs font-bold text-brand-gold bg-brand-gold/5 group-hover:rotate-12 transition-transform duration-500">
                    {`0${i + 1}`}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-brand-gold/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-brand-gold text-2xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 border-2 border-brand-gold/30">
                      <i className={`fa-solid ${icons[i % icons.length]}`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h4 className="font-serif font-bold text-xl text-white group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                      {w}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS - Modern Cards ── */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
              Technical Details
            </h3>
            <h2 className="font-serif text-4xl font-bold text-brand-navy">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
            {Object.entries(prod.specs).map(([k, v], i) => (
              <div key={k} className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy p-8 rounded-2xl shadow-xl text-white border-2 border-brand-gold/30 scroll-reveal">
                <div className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">{k}</div>
                <div className="text-lg font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM - Split Layout ── */}
      <section id="inquiry-form" className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 scroll-reveal-left">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Get Started Today
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                  Ready to Upgrade with a Reliable Elevator?
                </h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you require a passenger elevator, hospital lift, goods lift, home elevator, hydraulic lift, or an MRL solution, Digitech Elevators provides customized systems for safety, reliability, and long-term performance.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-xl">
                    <i className="fa-solid fa-circle-check animate-pulse" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Experienced Engineering Team</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-xl">
                    <i className="fa-solid fa-circle-check animate-pulse" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">24/7 Breakdown Support</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="scroll-reveal-right">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-slate-100">
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-6">Inquire Now</h3>
                
                {formSubmitted ? (
                  <div className="text-center py-12 animate-zoom-in">
                    <i className="fa-solid fa-circle-check text-6xl text-green-500 mb-6 animate-bounce block" />
                    <h4 className="font-serif font-bold text-2xl mb-3 text-brand-navy">Request Submitted!</h4>
                    <p className="text-slate-600">Our team will contact you shortly.</p>
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
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email (Optional)</label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="Enter email" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-gold transition" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                      <textarea 
                        rows="3"
                        name="message"
                        placeholder="Any specific requirements?" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-gold transition resize-none" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest transition shadow-lg hover:shadow-2xl hover:scale-105">
                      Request Technical Layout
                    </button>
                    <a 
                      href="#/quote" 
                      className="block text-center border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-bold py-4 rounded-xl text-sm uppercase tracking-widest transition">
                      Get Full Quote
                    </a>
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
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/90 to-transparent" />
        
        {/* Animated elevator shaft lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[20, 50, 80].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold animate-pulse" style={{ left: `${pos}%` }} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Start Your Elevator Project Today
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Contact us for a consultation and discover the perfect elevator solution for your building
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#/quote" className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
              <i className="fa-solid fa-calculator mr-2" />
              Free Consultation
            </a>
            <a href="#/contact" className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105">
              <i className="fa-solid fa-phone mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
