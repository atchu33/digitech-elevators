import React from 'react';

export default function Footer() {
  const services = [
    ['installation',  'fa-hammer',             'Elevator Installation'],
    ['amc',           'fa-handshake',          'Annual Maintenance (AMC)'],
    ['modernization', 'fa-arrows-spin',        'Modernization & Upgrades'],
    ['repair',        'fa-screwdriver-wrench', 'Repair & Breakdown'],
  ];

  const quickLinks = [
    ['#/about',    'About Us'],
    ['#/projects', 'Project Portfolio'],
    ['#/gallery',  'Media Gallery'],
    ['#/amc',      'AMC Plans'],
    ['#/faq',      'FAQs'],
    ['#/contact',  'Contact Us'],
    ['#/quote',    'Get a Free Quote'],
  ];

  return (
    <footer className="bg-brand-navy text-slate-400 border-t-4 border-brand-gold">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ─── Brand ─── */}
        <div className="space-y-5">
          <a href="#/home" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center font-bold text-brand-navy text-sm shadow-lg">
              DE
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-white tracking-tight leading-none">
                DIGITECH <span className="text-brand-gold">ELEVATORS</span>
              </h2>
              <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500 mt-0.5">
                Safe &bull; Reliable &bull; Innovative
              </p>
            </div>
          </a>

          <p className="text-sm leading-relaxed">
            25+ years delivering advanced vertical mobility solutions across Karnataka. ISO 9001:2015 Certified &amp; Govt. of Karnataka Enlisted Grade‑A.
          </p>

          <div className="flex gap-2.5">
            {['fa-facebook-f','fa-instagram','fa-linkedin-in','fa-youtube'].map(icon => (
              <div key={icon}
                   className="w-9 h-9 bg-slate-800 hover:bg-brand-gold rounded-lg flex items-center justify-center text-white hover:text-brand-navy transition-all cursor-pointer text-sm border border-slate-700 hover:border-brand-gold">
                <i className={`fa-brands ${icon}`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Quick Links ─── */}
        <div>
          <h3 className="font-serif font-bold text-white text-sm border-b border-slate-700 pb-2.5 mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="flex items-center gap-2 text-sm hover:text-brand-gold transition">
                  <i className="fa-solid fa-angle-right text-brand-gold text-[10px]"></i> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Services ─── */}
        <div>
          <h3 className="font-serif font-bold text-white text-sm border-b border-slate-700 pb-2.5 mb-5">Our Services</h3>
          <ul className="space-y-3">
            {services.map(([key, icon, label]) => (
              <li key={key}>
                <a href={`#/services/${key}`} className="flex items-center gap-2 text-sm hover:text-brand-gold transition">
                  <i className="fa-solid fa-angle-right text-brand-gold text-[10px]"></i> {label}
                </a>
              </li>
            ))}
          </ul>

          </div>

        {/* ─── Contact Info ─── */}
        <div>
          <h3 className="font-serif font-bold text-white text-sm border-b border-slate-700 pb-2.5 mb-5">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                <i className="fa-solid fa-location-dot text-sm"></i>
              </div>
              <p className="text-sm leading-relaxed mt-0.5">
                No. 45, Ground Floor,<br/>Yeshwanthpur, Bangalore – 560022
              </p>
            </div>

            <div className="flex gap-3">
              <div className="w-9 h-9 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                <i className="fa-solid fa-phone text-sm"></i>
              </div>
              <div className="mt-0.5">
                <a href="tel:+919876543210" className="block text-sm hover:text-brand-gold transition">+91 98765 43210</a>
                <a href="tel:+918012345678" className="block text-sm hover:text-brand-gold transition mt-0.5">+91 80 1234 5678</a>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-9 h-9 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                <i className="fa-solid fa-envelope text-sm"></i>
              </div>
              <a href="mailto:info@digitechelevators.com"
                 className="text-sm hover:text-brand-gold transition break-all mt-1.5">
                info@digitechelevators.com
              </a>
            </div>

            <a href="https://wa.me/919876543210?text=Hi%20Digitech%20Elevators"
               target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] hover:border-[#25D366] text-[#25D366] hover:text-white font-bold px-4 py-2.5 rounded-xl text-sm transition w-full mt-2">
              <i className="fa-brands fa-whatsapp text-base"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} <span className="text-slate-400 font-semibold">Digitech Elevators</span>. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5"><i className="fa-solid fa-stamp text-brand-gold"></i> ISO 9001:2015</span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5"><i className="fa-solid fa-landmark text-brand-gold"></i> Govt. Grade‑A</span>
          </div>
          <div className="flex gap-4">
            <a href="#/legal/privacy" className="hover:text-brand-gold transition">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#/legal/terms"   className="hover:text-brand-gold transition">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
