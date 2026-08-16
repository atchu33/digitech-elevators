import React from 'react';

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* ── Banner with Image ── */}
      <section className="relative bg-brand-navy text-white py-16 px-4 text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-45 z-0"
          style={{
            backgroundImage: "url('/digitech-elevators/about_bg.png')",
            animation: 'floatUp 16s ease-in-out infinite',
          }}
        />
        {/* Dark overlay & radial gradient overlay */}
        <div className="absolute inset-0 bg-brand-navy/60 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(23,105,194,0.2)_0%,_transparent_70%)] z-[2]"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block bg-brand-blue/20 border-2 border-brand-blue/40 text-brand-blue px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse-ring">Our Legacy Since 1999</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold animate-gold-shimmer leading-tight">About Digitech<br />Elevators</h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">Building trust through innovation, safety, and excellence</p>
        </div>
      </section>

      {/* ── Company Overview - Diagonal Cut ── */}
      <section className="py-28 px-4 md:px-8 bg-gradient-to-br from-[#EAF3FC] via-white to-slate-50 relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
        {/* Decorative elements */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 scroll-reveal-left">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4 flex items-center gap-3">
                <span className="w-16 h-px bg-brand-blue" />
                Company Overview
              </h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                <span className="bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent">27+ Years</span> of Vertical<br />Mobility Expertise
              </h2>
            </div>
            <div className="space-y-6 text-slate-600 text-sm leading-relaxed border-l-4 border-brand-blue/30 pl-8">
              <p>
                <strong className="text-brand-navy text-base">Company Background:</strong><br />
                Founded as a dedicated team of engineers, Digitech Elevators has evolved into a leading elevator service and installation provider operating under Grade-A safety standards. We serve thousands of properties across Karnataka.
              </p>
              <p>
                <strong className="text-brand-navy text-base">Business Philosophy:</strong><br />
                We believe in quality first. By utilizing advanced VVVF controller designs and robust safety mechanisms, we ensure each layout meets rigid safety standards and provides passenger ride comfort.
              </p>
              <p>
                <strong className="text-brand-navy text-base">Industry Expertise:</strong><br />
                With over 2480+ elevators under maintenance, our capabilities cover residential complexes, super-specialty stretcher facilities, heavy-duty goods setups, and bespoke villa lifts.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 scroll-reveal-container">
            {[
              { icon:'fa-stamp',      title:'Quality Certified',   desc:'Fully compliant with the Bureau of Indian Standards (IS 14665) and industry safety benchmarks.' },
              { icon:'fa-users-gear', title:'Technical Team',      desc:'Experienced engineers available 24/7 for breakdown maintenance support.' },
              { icon:'fa-building',   title:'2480+ Life Maintaining', desc:'Successfully installed and maintained over 2480 elevators across Karnataka.' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-lg flex gap-5 hover:shadow-2xl hover:border-brand-blue transition-all duration-300 scroll-reveal group" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl flex items-center justify-center text-white text-2xl shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  <i className={`fa-solid ${c.icon}`}></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-brand-navy mb-2 text-lg">{c.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision with Video ── */}
      <section className="relative px-4 md:px-8 py-16 md:py-20 bg-brand-navy text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(23,105,194,0.4) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-brand-blue" />
              Our Purpose
              <span className="w-16 h-px bg-brand-blue" />
            </h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Mission Card */}
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border-2 border-white/20 space-y-4 hover:bg-white/15 hover:border-brand-blue/50 transition-all duration-300 scroll-reveal group">
              <div className="w-14 h-14 bg-brand-blue/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-brand-blue text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-brand-blue/30">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-white">Our Mission</h3>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">To provide safe, reliable, energy-efficient, and innovative elevator solutions while delivering exceptional customer service and maintaining the highest standards of quality.</p>
            </div>

            {/* Video in Center */}
            <div className="scroll-reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border-2 border-brand-blue/30">
                <video 
                  className="w-full h-auto max-h-[400px] object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="none"
                >
                  <source src="./WhatsApp Video 2026-07-14 at 10.36.37.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-brand-navy/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-brand-blue/30 text-center">
                  <p className="text-brand-blue font-bold text-xs md:text-sm">27+ Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border-2 border-white/20 space-y-4 hover:bg-white/15 hover:border-brand-blue/50 transition-all duration-300 scroll-reveal group">
              <div className="w-14 h-14 bg-brand-blue/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-brand-blue text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-brand-blue/30">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-white">Our Vision</h3>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">To become one of India's most trusted elevator companies through innovation, technical excellence, customer satisfaction, and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values - Hexagon Grid ── */}
      <section className="py-28 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue">Our Philosophy</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Core Values That<br />
              <span className="text-3xl md:text-4xl text-slate-600">Define Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center scroll-reveal-container">
            {[
              { icon:'fa-shield-halved',    title:'Safety' },
              { icon:'fa-scale-balanced',   title:'Integrity' },
              { icon:'fa-lightbulb',        title:'Innovation' },
              { icon:'fa-award',            title:'Quality' },
              { icon:'fa-hourglass-half',   title:'Reliability' },
              { icon:'fa-handshake-angle',  title:'Customer Commitment' },
            ].map((v, i) => (
              <div key={i} className="relative p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-lg space-y-4 hover:border-brand-blue hover:shadow-2xl transition-all duration-300 group scroll-reveal hover:translate-y-[-8px]" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-18 h-18 mx-auto bg-gradient-to-br from-brand-blue to-brand-blue-dark rounded-2xl flex items-center justify-center text-white text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  <i className={`fa-solid ${v.icon}`}></i>
                </div>
                <h4 className="font-serif font-bold text-base text-brand-navy leading-tight group-hover:text-brand-blue-bright transition-colors">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety Standards - Split with Wave ── */}
      <section className="relative py-28 px-4 md:px-8 bg-brand-navy text-white overflow-hidden">
        {/* Wave divider at top */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"
             style={{ clipPath: 'ellipse(100% 100% at 50% 0%)' }} />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 pt-12">
          <div className="lg:col-span-5 space-y-8 scroll-reveal-left">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-4 flex items-center gap-2">
                <span className="w-12 h-px bg-brand-blue" />
                Quality Assurance
              </h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Safety Standards</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">Safety is our foundation. We maintain strict compliance checks across all operational milestones to ensure total passenger security.</p>
            <div className="space-y-6 scroll-reveal-container">
              {[
                { icon:'fa-screwdriver-wrench', title:'Professional Installation', desc:'High-precision rails alignment prevents cabin vibration.' },
                { icon:'fa-vial-circle-check',  title:'Quality Testing',           desc:'Every layout undergoes mechanical load testing before commission.' },
                { icon:'fa-arrows-spin',        title:'Regular Maintenance',       desc:'Routine inspections ensure parts wear is detected early.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-5 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 hover:border-brand-blue/50 transition-all scroll-reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <div className="w-14 h-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue text-xl shrink-0">
                    <i className={`fa-solid ${s.icon} animate-float`} style={{ animationDelay: `${i * 0.4}s` }}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-base mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-300">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 scroll-reveal-right">
            <div className="bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-2 border-white/20 space-y-6">
              <h3 className="font-serif font-bold text-2xl text-brand-navy border-b-2 border-brand-blue pb-4 flex items-center gap-3">
                <i className="fa-solid fa-clipboard-check text-brand-blue text-3xl" />
                Safety Checklist
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 scroll-reveal-container">
                {[
                  'Compliance with Industry Standards','Safety Inspections every 30 days',
                  'Emergency Preparedness runs','Speed Governor drop testing',
                  'ARD emergency battery backup checks','Door sensor infrared curtains testing',
                ].map((item, i) => (
                  <p key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border-2 border-slate-100 hover:border-brand-blue transition-all scroll-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <i className="fa-solid fa-circle-check text-green-500 text-lg shrink-0"></i>
                    <span className="leading-relaxed">{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#EAF3FC]"
             style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* ── Why Trust Digitech - Timeline Style ── */}
      <section className="py-28 px-4 md:px-8 bg-[#EAF3FC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue">Our Reputation</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Why Customers<br />
              <span className="bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent">Trust Digitech</span>
            </h2>
            <p className="text-slate-600 text-sm">Eight key reasons that make us the preferred choice</p>
          </div>
          
          {/* Horizontal timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue/20 via-brand-blue to-brand-blue/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-reveal-container">
              {[
                { title:'Experienced Engineers',         desc:'Providing deep diagnostics expertise for high and low rise systems.', num:'01' },
                { title:'Skilled Installation Team',     desc:'Trained builders executing precise structural fitments.', num:'02' },
                { title:'Latest Technology',             desc:'Advanced 32-bit controllers, gearless motors, and VVVF systems.', num:'03' },
                { title:'Genuine Spare Parts',           desc:'Only original manufacturer items are supplied.', num:'04' },
                { title:'Preventive Maintenance',        desc:'Structured monthly visits to maximize elevator life.', num:'05' },
                { title:'Competitive Pricing',           desc:'Fair cost layouts with no hidden fee inclusions.', num:'06' },
                { title:'Transparent Communication',     desc:'Detailed inspection logs and service reports sent directly.', num:'07' },
                { title:'Long-Term Customer Support',    desc:'Dedicated relationship executives for ongoing updates.', num:'08' },
              ].map((item, i) => (
                <div key={i} className="relative scroll-reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="bg-white p-7 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-brand-blue hover:shadow-2xl transition-all duration-300 group relative overflow-hidden hover:translate-y-[-4px]">
                    {/* Number badge */}
                    <div className="absolute top-3 right-3 w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                      <span className="text-brand-blue/40 font-bold text-xl font-mono">{item.num}</span>
                    </div>
                    
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-dark mb-4 group-hover:w-6 transition-all duration-300"></div>
                    <h4 className="font-serif font-bold text-brand-navy mb-3 text-base group-hover:text-brand-blue-bright transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Clients - Trusted Partners ── */}
      <section className="relative py-28 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(23,105,194,0.4) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-brand-blue" />
              Trusted Partnerships
              <span className="w-16 h-px bg-brand-blue" />
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              WHY BUILDERS &amp; CLIENTS<br />
              TRUST <span className="text-brand-blue">DIGITECH ELEVATORS</span>
            </h2>
            <p className="text-slate-300 text-base">Proud to serve leading builders and prestigious projects across India</p>
          </div>

          {/* Scrolling Client Logos - Row 1 */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />
            <div className="flex gap-6 animate-scroll-left" style={{ width: 'max-content' }}>
              {[
                { name: 'Sobha Projects',        logo: './logos/Sobha Projects.png' },
                { name: 'Embassy Group',         logo: './logos/Embassy Group.png' },
                { name: 'Brigade Group',         logo: './logos/brigade group.jpg' },
                { name: 'Prestige Group',        logo: './logos/Prestige.png' },
                { name: 'Jal Vayu Heights',      logo: './logos/Jal Vayu Heights.png' },
                { name: 'Jal Vayu Towers',       logo: './logos/Jal Vayu Towers.png' },
                { name: 'Kia India Pvt. Ltd.',   logo: './logos/Kia India Pvt. Ltd..jpeg' },
                { name: 'Pro FX Tech India',     logo: './logos/Pro FX Tech India.png' },
                { name: 'G-Corp Sky Garden',     logo: './logos/G CORP -Sky Garden.jpg' },
                { name: 'Renaissance Projects',  logo: './logos/Renaissance Projects.png' },
                { name: 'Soch Apparels',         logo: './logos/soch apparels pvt ltd.jpg' },
              ].concat([
                { name: 'Sobha Projects',        logo: './logos/Sobha Projects.png' },
                { name: 'Embassy Group',         logo: './logos/Embassy Group.png' },
                { name: 'Brigade Group',         logo: './logos/brigade group.jpg' },
                { name: 'Prestige Group',        logo: './logos/Prestige.png' },
                { name: 'Jal Vayu Heights',      logo: './logos/Jal Vayu Heights.png' },
                { name: 'Jal Vayu Towers',       logo: './logos/Jal Vayu Towers.png' },
                { name: 'Kia India Pvt. Ltd.',   logo: './logos/Kia India Pvt. Ltd..jpeg' },
                { name: 'Pro FX Tech India',     logo: './logos/Pro FX Tech India.png' },
                { name: 'G-Corp Sky Garden',     logo: './logos/G CORP -Sky Garden.jpg' },
                { name: 'Renaissance Projects',  logo: './logos/Renaissance Projects.png' },
                { name: 'Soch Apparels',         logo: './logos/soch apparels pvt ltd.jpg' },
              ]).map((client, i) => (
                <div key={i} className="flex-shrink-0 group bg-white rounded-2xl border-2 border-white/10 hover:border-brand-blue shadow-lg hover:shadow-brand-blue/20 hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 w-[180px] min-h-[120px] flex items-center justify-center p-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-[70px] max-w-[150px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
                  />
                  <span className="hidden text-brand-navy font-bold text-xs text-center leading-tight">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Client Logos - Row 2 (Reverse) */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />
            <div className="flex gap-6 animate-scroll-right" style={{ width: 'max-content' }}>
              {[
                { name: 'Aditya Group of Institutions',  logo: './logos/Aditya Group of Institutions.png' },
                { name: 'Hoysala Projects',              logo: './logos/Hoysala Projects.png' },
                { name: 'Casa Grande Royce',             logo: './logos/Casa Grande Royce.png' },
                { name: 'Olive Groups',                  logo: './logos/Olive Groups.png' },
                { name: 'Confident Canopus',             logo: './logos/Confident Canopus.webp' },
                { name: 'MD Retail India',               logo: './logos/MD Retail India Pvt. Ltd..jpg' },
                { name: 'Jus\'Trufs Chocolate',          logo: './logos/Jus\'Trufs Chocolate Shop & Cafe.jpg' },
                { name: 'Akshaya Hospital',              logo: './logos/Akshaya Hospital.jpg' },
                { name: 'Chaithanya Hospital',           logo: './logos/Chaithanya Hospital.jpg' },
              ].concat([
                { name: 'Aditya Group of Institutions',  logo: './logos/Aditya Group of Institutions.png' },
                { name: 'Hoysala Projects',              logo: './logos/Hoysala Projects.png' },
                { name: 'Casa Grande Royce',             logo: './logos/Casa Grande Royce.png' },
                { name: 'Olive Groups',                  logo: './logos/Olive Groups.png' },
                { name: 'Confident Canopus',             logo: './logos/Confident Canopus.webp' },
                { name: 'MD Retail India',               logo: './logos/MD Retail India Pvt. Ltd..jpg' },
                { name: 'Jus\'Trufs Chocolate',          logo: './logos/Jus\'Trufs Chocolate Shop & Cafe.jpg' },
                { name: 'Akshaya Hospital',              logo: './logos/Akshaya Hospital.jpg' },
                { name: 'Chaithanya Hospital',           logo: './logos/Chaithanya Hospital.jpg' },
              ]).map((client, i) => (
                <div key={i} className="flex-shrink-0 group bg-white rounded-2xl border-2 border-white/10 hover:border-brand-blue shadow-lg hover:shadow-brand-blue/20 hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 w-[180px] min-h-[120px] flex items-center justify-center p-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-[70px] max-w-[150px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
                  />
                  <span className="hidden text-brand-navy font-bold text-xs text-center leading-tight">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Message */}
          <div className="text-center space-y-6 pt-12 scroll-reveal">
            <div className="inline-block bg-brand-blue/10 backdrop-blur-md border border-brand-blue/30 rounded-2xl p-8">
              <p className="text-brand-blue font-serif text-2xl font-bold mb-4">Our Commitment</p>
              <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                We are committed to delivering cutting-edge elevator solutions with unmatched safety standards, 
                innovative technology, and exceptional customer service to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
