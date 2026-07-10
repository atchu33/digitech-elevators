import React, { useState } from 'react';

const faqs = [
  {
    q: 'How often should an elevator undergo safety inspections?',
    a: 'Under Karnataka Lift Rules, elevators must be inspected at least once a month by licensed service technicians. An Annual Maintenance Contract (AMC) ensures this is done regularly.'
  },
  {
    q: 'What is an ARD (Automatic Rescue Device)?',
    a: 'An ARD is a battery-powered safety system that triggers automatically during a power cut to safely guide the elevator cabin to the nearest floor, allowing passengers to exit safely.'
  },
  {
    q: 'What is the difference between a Comprehensive and Non-Comprehensive AMC?',
    a: 'A Comprehensive AMC covers all maintenance services including spare parts, labor, and emergency breakdowns. A Non-Comprehensive AMC covers labor and routine maintenance only — spare parts are billed separately.'
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
    q: 'Is Digitech Elevators a government-approved contractor?',
    a: 'Yes. Digitech Elevators is a Government of Karnataka Enlisted Grade-A elevator contractor and an ISO 9001:2015 certified company.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      {/* ── Banner ── */}
      <section className="bg-brand-navy text-white py-16 px-4 text-center hero-gradient relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">
            General Queries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about elevator licensing, AMC contracts, installation procedures, and safety features.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto space-y-4 animate-slide-left">
        <div className="text-center mb-10 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Got Questions?</h3>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy">Helpful Answers</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
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

      {/* ── Call to Action ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 text-center border-t-4 border-brand-gold">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold">Still Have Questions?</h2>
          <p className="text-slate-350 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Our technical support coordinators are available to address queries regarding elevator engineering, space specifications, pricing parameters, or AMC renewals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/contact" className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg">
              Contact Us
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3 rounded-xl text-xs uppercase tracking-widest flex items-center gap-2 transition shadow-lg">
              <i className="fa-brands fa-whatsapp text-sm"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
