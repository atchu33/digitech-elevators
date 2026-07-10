import React from 'react';

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* ── Banner ── */}
      <section className="relative bg-brand-navy text-white py-24 px-4 text-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
        >
          <source src="lift1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay & radial gradient overlay for premium lighting */}
        <div className="absolute inset-0 bg-brand-navy/70 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_70%)] z-[2]"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">Our Legacy</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold animate-gold-shimmer">About Digitech Elevators</h2>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-6 scroll-reveal-left">
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold animate-draw-line">Company Overview</h3>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
            25+ Years of Vertical Mobility Expertise
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              <strong className="text-brand-navy">Company Background:</strong> Founded as a dedicated team of engineers, Digitech Elevators has evolved into a leading elevator service and installation provider operating under Grade-A safety standards. We serve thousands of properties across Karnataka.
            </p>
            <p>
              <strong className="text-brand-navy">Business Philosophy:</strong> We believe in quality first. By utilizing advanced VVVF controller designs and robust safety mechanisms, we ensure each layout meets rigid safety standards and provides passenger ride comfort.
            </p>
            <p>
              <strong className="text-brand-navy">Industry Expertise:</strong> With over 2500+ elevators under maintenance, our capabilities cover residential complexes, super-specialty stretcher facilities, heavy-duty goods setups, and bespoke villa lifts.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 grid grid-cols-1 gap-5 scroll-reveal-container">
          {[
            { icon:'fa-stamp',      title:'Quality Certified',   desc:'Fully compliant with the Bureau of Indian Standards (IS 14665) and industry safety benchmarks.' },
            { icon:'fa-users-gear', title:'Technical Team',      desc:'Experienced engineers available 24/7 for breakdown maintenance support.' },
            { icon:'fa-building',   title:'2500+ Installations', desc:'Successfully installed and maintained over 2500 elevators across Karnataka.' },
          ].map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 hover:shadow-md transition card-hover scroll-reveal">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-xl shrink-0 group-hover:scale-110 transition-all duration-300">
                <i className={`fa-solid ${c.icon} group-hover:animate-lift-ride`}></i>
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-navy mb-1">{c.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 scroll-reveal-container">
          {[
            { icon:'fa-bullseye', title:'Our Mission', text:'To provide safe, reliable, energy-efficient, and innovative elevator solutions while delivering exceptional customer service and maintaining the highest standards of quality.' },
            { icon:'fa-eye',      title:'Our Vision',  text:'To become one of India\'s most trusted elevator companies through innovation, technical excellence, customer satisfaction, and continuous improvement.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 space-y-5 card-hover scroll-reveal">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold text-2xl group-hover:rotate-6 transition-all">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="font-serif font-bold text-2xl text-brand-navy">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 scroll-reveal">
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Our Philosophy</h3>
          <h2 className="font-serif text-3xl font-bold text-brand-navy">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-center scroll-reveal-container">
          {[
            { icon:'fa-shield-halved',   title:'Safety' },
            { icon:'fa-scale-balanced',  title:'Integrity' },
            { icon:'fa-lightbulb',       title:'Innovation' },
            { icon:'fa-award',           title:'Quality' },
            { icon:'fa-hourglass-half',  title:'Reliability' },
            { icon:'fa-handshake-angle',  title:'Customer Commitment' },
          ].map((v, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-brand-gold hover:shadow-md transition-all card-hover scroll-reveal">
              <i className={`fa-solid ${v.icon} text-3xl text-brand-gold animate-bounce-soft`} style={{ animationDelay: `${i * 0.3}s` }}></i>
              <h4 className="font-bold text-sm text-brand-navy leading-tight">{v.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── Safety Standards ── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6 scroll-reveal-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold animate-draw-line">Quality Assurance</h3>
            <h2 className="font-serif text-3xl font-bold text-brand-navy leading-tight">Safety Standards</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Safety is our foundation. We maintain strict compliance checks across all operational milestones to ensure total passenger security.</p>
            <div className="space-y-5 scroll-reveal-container">
              {[
                { icon:'fa-screwdriver-wrench', title:'Professional Installation', desc:'High-precision rails alignment prevents cabin vibration.' },
                { icon:'fa-vial-circle-check',  title:'Quality Testing',           desc:'Every layout undergoes mechanical load testing before commission.' },
                { icon:'fa-arrows-spin',        title:'Regular Maintenance',       desc:'Routine inspections ensure parts wear is detected early.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 scroll-reveal">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-base shrink-0">
                    <i className={`fa-solid ${s.icon} animate-float`} style={{ animationDelay: `${i * 0.4}s` }}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">{s.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-md border border-slate-200 space-y-5 scroll-reveal-right">
            <h3 className="font-serif font-bold text-xl text-brand-navy border-b border-slate-200 pb-3">45-Point Safety Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 scroll-reveal-container">
              {[
                'Compliance with Industry Standards','Safety Inspections every 30 days',
                'Emergency Preparedness runs','Speed Governor drop testing',
                'ARD emergency battery backup checks','Door sensor infrared curtains testing',
              ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 scroll-reveal">
                  <i className="fa-solid fa-circle-check text-green-500 shrink-0"></i> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Trust Digitech ── */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 scroll-reveal">
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Our Reputation</h3>
          <h2 className="font-serif text-3xl font-bold text-brand-navy">Why Customers Trust Digitech</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
          {[
            { title:'Experienced Engineers',         desc:'Providing deep diagnostics expertise for high and low rise systems.' },
            { title:'Skilled Installation Team',     desc:'Trained builders executing precise structural fitments.' },
            { title:'Latest Technology',             desc:'Advanced 32-bit controllers, gearless motors, and VVVF systems.' },
            { title:'Genuine Spare Parts',           desc:'Only original manufacturer items are supplied.' },
            { title:'Preventive Maintenance',        desc:'Structured monthly visits to maximize elevator life.' },
            { title:'Competitive Pricing',           desc:'Fair cost layouts with no hidden fee inclusions.' },
            { title:'Transparent Communication',     desc:'Detailed inspection logs and service reports sent directly.' },
            { title:'Long-Term Customer Support',    desc:'Dedicated relationship executives for ongoing updates.' },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-gold hover:shadow-md transition-all group card-hover scroll-reveal">
              <div className="w-2 h-2 rounded-full bg-brand-gold mb-3 group-hover:w-4 transition-all duration-300"></div>
              <h4 className="font-bold text-brand-navy mb-1 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
