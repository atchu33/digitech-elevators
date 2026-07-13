import React from 'react';

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* ── Banner with Video ── */}
      <section className="relative bg-brand-navy text-white py-16 px-4 text-center overflow-hidden">
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
        {/* Dark overlay & radial gradient overlay */}
        <div className="absolute inset-0 bg-brand-navy/70 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.25)_0%,_transparent_70%)] z-[2]"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="inline-block bg-brand-gold/20 border-2 border-brand-gold/40 text-brand-gold px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse-ring">Our Legacy Since 1998</span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold animate-gold-shimmer leading-tight">About Digitech<br />Elevators</h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">Building trust through innovation, safety, and excellence</p>
        </div>
      </section>

      {/* ── Company Overview - Diagonal Cut ── */}
      <section className="py-28 px-4 md:px-8 bg-gradient-to-br from-amber-50 via-white to-slate-50 relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
        {/* Decorative elements */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 scroll-reveal-left">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 flex items-center gap-3">
                <span className="w-16 h-px bg-brand-gold" />
                Company Overview
              </h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                <span className="bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">25+ Years</span> of Vertical<br />Mobility Expertise
              </h2>
            </div>
            <div className="space-y-6 text-slate-600 text-sm leading-relaxed border-l-4 border-brand-gold/30 pl-8">
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
                With over 2500+ elevators under maintenance, our capabilities cover residential complexes, super-specialty stretcher facilities, heavy-duty goods setups, and bespoke villa lifts.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 scroll-reveal-container">
            {[
              { icon:'fa-stamp',      title:'Quality Certified',   desc:'Fully compliant with the Bureau of Indian Standards (IS 14665) and industry safety benchmarks.' },
              { icon:'fa-users-gear', title:'Technical Team',      desc:'Experienced engineers available 24/7 for breakdown maintenance support.' },
              { icon:'fa-building',   title:'2500+ Installations', desc:'Successfully installed and maintained over 2500 elevators across Karnataka.' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-lg flex gap-5 hover:shadow-2xl hover:border-brand-gold transition-all duration-300 scroll-reveal group" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-2xl flex items-center justify-center text-white text-2xl shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
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

      {/* ── Mission & Vision - Dark Gradient ── */}
      <section className="relative py-28 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.4) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-brand-gold" />
              Our Purpose
              <span className="w-16 h-px bg-brand-gold" />
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 scroll-reveal-container">
            {[
              { icon:'fa-bullseye', title:'Our Mission', text:'To provide safe, reliable, energy-efficient, and innovative elevator solutions while delivering exceptional customer service and maintaining the highest standards of quality.' },
              { icon:'fa-eye',      title:'Our Vision',  text:'To become one of India\'s most trusted elevator companies through innovation, technical excellence, customer satisfaction, and continuous improvement.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border-2 border-white/20 space-y-6 hover:bg-white/15 hover:border-brand-gold/50 transition-all duration-300 scroll-reveal group" style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="w-20 h-20 bg-brand-gold/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-brand-gold text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-brand-gold/30">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="font-serif font-bold text-3xl text-white">{item.title}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values - Hexagon Grid ── */}
      <section className="py-28 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Our Philosophy</h3>
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
              <div key={i} className="relative p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-lg space-y-4 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 group scroll-reveal hover:translate-y-[-8px]" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-18 h-18 mx-auto bg-gradient-to-br from-brand-gold to-yellow-600 rounded-2xl flex items-center justify-center text-white text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  <i className={`fa-solid ${v.icon}`}></i>
                </div>
                <h4 className="font-serif font-bold text-base text-brand-navy leading-tight group-hover:text-brand-gold transition-colors">{v.title}</h4>
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 flex items-center gap-2">
                <span className="w-12 h-px bg-brand-gold" />
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
                <div key={i} className="flex gap-5 bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 hover:border-brand-gold/50 transition-all scroll-reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold text-xl shrink-0">
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
              <h3 className="font-serif font-bold text-2xl text-brand-navy border-b-2 border-brand-gold pb-4 flex items-center gap-3">
                <i className="fa-solid fa-clipboard-check text-brand-gold text-3xl" />
                45-Point Safety Checklist
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 scroll-reveal-container">
                {[
                  'Compliance with Industry Standards','Safety Inspections every 30 days',
                  'Emergency Preparedness runs','Speed Governor drop testing',
                  'ARD emergency battery backup checks','Door sensor infrared curtains testing',
                ].map((item, i) => (
                  <p key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border-2 border-slate-100 hover:border-brand-gold transition-all scroll-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <i className="fa-solid fa-circle-check text-green-500 text-lg shrink-0"></i>
                    <span className="leading-relaxed">{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-amber-50"
             style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }} />
      </section>

      {/* ── Why Trust Digitech - Timeline Style ── */}
      <section className="py-28 px-4 md:px-8 bg-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">Our Reputation</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              Why Customers<br />
              <span className="bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">Trust Digitech</span>
            </h2>
            <p className="text-slate-600 text-sm">Eight key reasons that make us the preferred choice</p>
          </div>
          
          {/* Horizontal timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold/20" />
            
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
                  <div className="bg-white p-7 rounded-3xl shadow-lg border-2 border-slate-200 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 group relative overflow-hidden hover:translate-y-[-4px]">
                    {/* Number badge */}
                    <div className="absolute top-3 right-3 w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                      <span className="text-brand-gold/40 font-bold text-xl font-mono">{item.num}</span>
                    </div>
                    
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-gold to-yellow-600 mb-4 group-hover:w-6 transition-all duration-300"></div>
                    <h4 className="font-serif font-bold text-brand-navy mb-3 text-base group-hover:text-brand-gold transition-colors">{item.title}</h4>
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
               backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.4) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4 scroll-reveal">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold flex items-center justify-center gap-3">
              <span className="w-16 h-px bg-brand-gold" />
              Trusted Partnerships
              <span className="w-16 h-px bg-brand-gold" />
            </h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              WHY BUILDERS & CLIENTS<br />
              TRUST <span className="text-brand-gold">DIGITECH ELEVATORS</span>
            </h2>
            <p className="text-slate-300 text-base">Proud to serve leading builders and prestigious projects across India</p>
          </div>

          {/* Scrolling Client Logos - Row 1 */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-8 animate-scroll-left whitespace-nowrap">
              {[
                { name: 'Sobha Projects', logo: 'SOBHA' },
                { name: 'Embassy Projects', logo: 'EMBASSY' },
                { name: 'Brigade Projects', logo: 'BRIGADE' },
                { name: 'Prestige Group', logo: 'PRESTIGE' },
                { name: 'Jal Vayu Heights', logo: 'JAL VAYU' },
                { name: 'Jal Vayu Towers', logo: 'JAL VAYU TOWERS' },
                { name: 'Kia India Pvt. Ltd.', logo: 'KIA' },
                { name: 'Pro FX Tech India', logo: 'PRO FX TECH' },
                { name: 'G-Corp (Sky garden)', logo: 'G-CORP' },
                { name: 'Renaissance Projects', logo: 'RENAISSANCE' },
              ].concat([
                { name: 'Sobha Projects', logo: 'SOBHA' },
                { name: 'Embassy Projects', logo: 'EMBASSY' },
                { name: 'Brigade Projects', logo: 'BRIGADE' },
                { name: 'Prestige Group', logo: 'PRESTIGE' },
                { name: 'Jal Vayu Heights', logo: 'JAL VAYU' },
                { name: 'Jal Vayu Towers', logo: 'JAL VAYU TOWERS' },
                { name: 'Kia India Pvt. Ltd.', logo: 'KIA' },
                { name: 'Pro FX Tech India', logo: 'PRO FX TECH' },
                { name: 'G-Corp (Sky garden)', logo: 'G-CORP' },
                { name: 'Renaissance Projects', logo: 'RENAISSANCE' },
              ]).map((client, i) => (
                <div key={i} className="inline-flex bg-white/5 backdrop-blur-sm rounded-full md:rounded-2xl border border-white/10 hover:border-brand-gold hover:bg-white/10 transition-all duration-300 flex-shrink-0 group w-24 h-24 md:w-auto md:h-auto md:min-w-[280px] md:px-12 md:py-8 items-center justify-center p-2 md:p-0">
                  <div className="text-center w-full">
                    <div className="text-white/80 group-hover:text-brand-gold transition-colors font-bold text-[10px] md:text-2xl tracking-wider md:mb-3 leading-tight px-1">
                      {client.logo}
                    </div>
                    <h4 className="hidden md:block text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-normal">
                      {client.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Client Logos - Row 2 (Reverse Direction) */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 md:gap-8 animate-scroll-right whitespace-nowrap">
              {[
                { name: 'Aditya Group of Institutions', logo: 'ADITYA' },
                { name: 'Hoysala Projects', logo: 'HOYSALA' },
                { name: 'Casa Grande Royce', logo: 'CASA GRANDE' },
                { name: 'GM Infinite', logo: 'GM INFINITE' },
                { name: 'Embassy Olive Groups', logo: 'EMBASSY OLIVE' },
                { name: 'Amara Courtyard', logo: 'AMARA' },
                { name: 'Durga Saffron Square', logo: 'DURGA' },
                { name: 'Gopu Homes', logo: 'GOPU HOMES' },
                { name: 'Fort House', logo: 'FORT HOUSE' },
              ].concat([
                { name: 'Aditya Group of Institutions', logo: 'ADITYA' },
                { name: 'Hoysala Projects', logo: 'HOYSALA' },
                { name: 'Casa Grande Royce', logo: 'CASA GRANDE' },
                { name: 'GM Infinite', logo: 'GM INFINITE' },
                { name: 'Embassy Olive Groups', logo: 'EMBASSY OLIVE' },
                { name: 'Amara Courtyard', logo: 'AMARA' },
                { name: 'Durga Saffron Square', logo: 'DURGA' },
                { name: 'Gopu Homes', logo: 'GOPU HOMES' },
                { name: 'Fort House', logo: 'FORT HOUSE' },
              ]).map((client, i) => (
                <div key={i} className="inline-flex bg-white/5 backdrop-blur-sm rounded-full md:rounded-2xl border border-white/10 hover:border-brand-gold hover:bg-white/10 transition-all duration-300 flex-shrink-0 group w-24 h-24 md:w-auto md:h-auto md:min-w-[280px] md:px-12 md:py-8 items-center justify-center p-2 md:p-0">
                  <div className="text-center w-full">
                    <div className="text-white/80 group-hover:text-brand-gold transition-colors font-bold text-[10px] md:text-2xl tracking-wider md:mb-3 leading-tight px-1">
                      {client.logo}
                    </div>
                    <h4 className="hidden md:block text-sm font-semibold text-slate-300 group-hover:text-white transition-colors whitespace-normal">
                      {client.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Message */}
          <div className="text-center space-y-6 pt-12 scroll-reveal">
            <div className="inline-block bg-brand-gold/10 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-8">
              <p className="text-brand-gold font-serif text-2xl font-bold mb-4">Our Commitment</p>
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
