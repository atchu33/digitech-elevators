import React, { useState, useEffect } from 'react';
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

export default function ServiceDetail({ serviceKey, fallbackToHome }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
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

      {/* ── SERVICE SHOWCASE - Large Image Section ── */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal-left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/30 group">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
                  alt={srv.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl">
                  <h3 className="font-serif font-bold text-2xl text-brand-navy mb-2">{srv.title}</h3>
                  <p className="text-brand-gold font-bold uppercase text-sm tracking-wider flex items-center gap-2">
                    <i className="fa-solid fa-shield-halved" />
                    Professional Service Guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 scroll-reveal-right">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 flex items-center gap-3">
                  <span className="w-16 h-px bg-brand-gold" />
                  Excellence in Service
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                  Professional Elevator<br />Solutions
                </h2>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                {srv.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-5 rounded-2xl shadow-lg border-2 border-slate-100">
                  <div className="text-3xl font-bold text-brand-gold font-serif mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
                    Support Available
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-lg border-2 border-slate-100">
                  <div className="text-3xl font-bold text-brand-gold font-serif mb-1">
                    100%
                  </div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
                    Quality Assured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {srv.types.map((t, i) => (
                    <div key={i} className="bg-brand-navy text-white p-6 rounded-2xl text-center shadow-lg hover:bg-slate-800 transition-all">
                      <i className="fa-solid fa-elevator text-brand-gold text-3xl mb-3 block" />
                      <span className="text-sm font-bold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── AMC SERVICES - Image Left, Content Right ── */}
      {serviceKey === 'amc' && srv.included && (
        <>
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="scroll-reveal-left">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80"
                      alt="AMC Services"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-gold/20" />
                  </div>
                </div>

                <div className="space-y-8 scroll-reveal-right">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                      Comprehensive Coverage
                    </h3>
                    <h2 className="font-serif text-4xl font-bold mb-4">
                      Services Included in AMC
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {srv.included.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                        <i className="fa-solid fa-circle-check text-green-400 shrink-0 text-lg" />
                        <span className="text-sm font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Choose Your Plan
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  AMC Plans
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal-container">
                {srv.plans.map((p, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl shadow-2xl border-2 border-slate-100 hover:border-brand-gold transition-all scroll-reveal hover:translate-y-[-8px]">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

                <div className="scroll-reveal-right">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
                      alt="Modernization"
                      className="w-full h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-50 via-white to-slate-50">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                  Why Upgrade
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  Key Benefits of Upgrading
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
                {srv.benefits.map((b, i) => {
                  const icon = BENEFIT_ICONS[b] || 'fa-circle-check';
                  const detail = BENEFIT_DETAILS[b] || '';
                  return (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-brand-gold transition-all scroll-reveal hover:translate-y-[-4px]">
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
                        placeholder="Enter your name" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-gold transition" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                      <input 
                        type="tel" 
                        placeholder="Enter mobile number" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-gold transition" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                      <textarea 
                        rows="4" 
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
    </div>
  );
}
