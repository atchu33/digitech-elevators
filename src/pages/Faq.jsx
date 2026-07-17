import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const faqs = [
  {
    q: 'How often should an elevator undergo safety inspections?',
    a: 'Under local lift safety regulations, elevators must be inspected at least once a month by licensed service technicians. An Annual Maintenance Contract (AMC) ensures this is done regularly.'
  },
  {
    q: 'What is an ARD (Automatic Rescue Device)?',
    a: 'An ARD is a battery-powered safety system that triggers automatically during a power cut to safely guide the elevator cabin to the nearest floor, allowing passengers to exit safely.'
  },
  {
    q: 'What types of Annual Maintenance Contracts (AMC) do you offer?',
    a: 'We offer four AMC tiers: Non-Comprehensive (covers inspections, lubrication, and basic labor), Semi-Comprehensive (adds coverage for minor parts), Comprehensive (full coverage of routine parts, labor, and breakdown calls), and Platinum Comprehensive (ultimate coverage including high-value assets like motors, controllers, and ARD batteries).'
  },
  {
    q: 'What is a VVVF Drive?',
    a: 'VVVF stands for Variable Voltage Variable Frequency. It is an advanced motor control technology that ensures smooth acceleration and deceleration of the elevator while saving up to 40% energy.'
  },
  {
    q: 'What is a Machine Room Less (MRL) elevator?',
    a: 'An MRL elevator uses a compact gearless machine installed inside the hoistway itself, eliminating the need for a separate machine room. This saves space and reduces construction costs.'
  },
  {
    q: 'Can elevators be installed in existing buildings without a pit?',
    a: 'Yes. Digitech offers home elevators and hydraulic lifts that require minimal or zero pit depth (as low as 100mm), making them ideal for retrofitting in existing buildings.'
  },
  {
    q: 'How long does a new elevator installation take?',
    a: 'A standard elevator installation typically takes 4 to 8 weeks depending on the type, number of floors, and site conditions. Our project team provides a detailed timeline before work begins.'
  },
  {
    q: 'Does Digitech offer 24/7 emergency breakdown support?',
    a: 'Yes. Digitech Elevators provides round-the-clock emergency breakdown support. Our dedicated technicians are available 24 hours a day, 7 days a week to attend urgent calls.'
  },
  {
    q: 'What is elevator modernization?',
    a: 'Elevator modernization involves upgrading aging components such as the controller, VVVF drive, doors, cabin interiors, and safety systems to improve performance, safety, and energy efficiency — without replacing the entire lift.'
  },
  {
    q: 'What credentials and safety standards does Digitech Elevators follow?',
    a: 'Digitech Elevators is a leading elevator contractor operating under Grade-A safety standards. All our safety systems undergo rigorous multi-point checklist audits before final commissioning.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showSafetyModal, setShowSafetyModal] = useState(false);

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      {/* ── Banner ── */}
      <section className="relative bg-brand-navy text-white py-24 px-4 text-center overflow-hidden">
        {/* Background Image */}
        <img loading="lazy"
          src="faq_hero_bg.png"
          alt="FAQ background"
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        />
        {/* Dark overlay & radial gradient overlay for premium lighting */}
        <div className="absolute inset-0 bg-brand-navy/70 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_70%)] z-[2]"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">
            General Queries
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold animate-gold-shimmer">Frequently Asked Questions</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about elevator licensing, AMC contracts, installation procedures, and safety features.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto space-y-4">
        <div className="text-center mb-10 space-y-2 scroll-reveal">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold animate-draw-line">Got Questions?</h3>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy">Helpful Answers</h2>
        </div>

        <div className="space-y-4 scroll-reveal-container">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden scroll-reveal ${
                  isOpen ? 'border-brand-gold ring-1 ring-brand-gold/30' : 'border-slate-200 hover:border-brand-gold/50'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-serif font-bold text-brand-navy text-sm md:text-base flex items-center gap-3">
                    <span className="w-7 h-7 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0">
                      <i className="fa-solid fa-question text-xs"></i>
                    </span>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? 'bg-brand-gold text-brand-navy rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 border-t border-slate-100 bg-slate-50/50' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5 text-slate-600 text-xs md:text-sm leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Safety First Section ── */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <span className="inline-block bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Safety First
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy">Elevator Safety Guidelines</h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              We prioritize passenger safety above all else. Check out our official safety guidelines poster for tips on how to use elevators responsibly.
            </p>
          </div>
          <div className="flex justify-center">
            <div 
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 shadow-md max-w-md w-full bg-slate-50 hover:border-brand-gold transition duration-300"
              onClick={() => setShowSafetyModal(true)}
            >
              <img loading="lazy" 
                src="./POSTER/SAFETY TIP.png" 
                alt="Elevator Safety Guidelines Poster" 
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
      </section>

      {/* Lightbox Modal for Safety Tip */}
      {showSafetyModal && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-brand-navy/60 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowSafetyModal(false)}
        >
          <div className="absolute top-4 right-4 text-white text-3xl cursor-pointer hover:text-brand-gold transition duration-200">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div 
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img loading="lazy" 
              src="./POSTER/SAFETY TIP.png" 
              alt="Safety Tips Poster Full" 
              className="max-h-[80vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
            />
          </div>
        </div>,
        document.body
      )}

      {/* ── Call to Action ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 text-center border-t-4 border-brand-gold relative overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[20, 50, 80].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold" style={{ left: `${pos}%`, animation: 'shaftGlow 3s infinite' }} />
          ))}
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10 scroll-reveal-scale">
          <h2 className="font-serif text-2xl md:text-3xl font-bold">Still Have Questions?</h2>
          <p className="text-slate-350 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Our technical support coordinators are available to address queries regarding elevator engineering, space specifications, pricing parameters, or AMC renewals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/contact" className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:scale-105 btn-glow">
              Contact Us
            </a>
            <a href="https://wa.me/919845071406" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest flex items-center gap-2 transition shadow-lg hover:scale-105 btn-glow">
              <i className="fa-brands fa-whatsapp text-sm"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
