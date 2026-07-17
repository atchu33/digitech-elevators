import React, { useState, useEffect } from 'react';

export default function Navbar({ currentHash }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (route) => {
    // Special handling for home route
    if (route === '/home') {
      return (currentHash === '#/home' || currentHash === '#/' || currentHash === '#')
        ? 'text-brand-gold border-b-2 border-brand-gold pb-0.5'
        : 'border-b-2 border-transparent pb-0.5 hover:text-brand-gold';
    }
    // Exact match for single pages (about, projects, careers, amc, faq, contact)
    const exactMatch = currentHash === `#${route}`;
    return exactMatch
      ? 'text-brand-gold border-b-2 border-brand-gold pb-0.5'
      : 'border-b-2 border-transparent pb-0.5 hover:text-brand-gold';
  };

  const isDropdownActive = (baseRoute) =>
    currentHash.startsWith(baseRoute) ? 'text-brand-gold border-brand-gold' : 'text-slate-800 border-transparent';

  const isDropdownItemActive = (fullRoute) =>
    currentHash === fullRoute ? 'bg-brand-gold/20 text-brand-navy font-bold' : '';

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-md'}`}>
      {/* ── Top Info Bar ── */}
      <div className="bg-brand-navy text-xs py-2 border-b border-slate-700">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-5 text-slate-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-shield-halved text-brand-gold text-sm"></i> Grade-A Safety Standards
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <i className="fa-solid fa-gears text-brand-gold text-sm"></i> Premium Engineering Solutions
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-300 font-semibold">
            <a href="tel:+919845071406" className="hover:text-brand-gold transition flex items-center gap-1.5">
              <i className="fa-solid fa-phone text-brand-gold text-sm"></i> 24/7: +91 98450 71406
            </a>
            <a href="https://wa.me/919845071406" target="_blank" rel="noopener noreferrer"
               className="hidden md:flex hover:text-brand-gold transition items-center gap-1.5">
              <i className="fa-brands fa-whatsapp text-brand-gold text-sm"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav Bar ── */}
      <nav className="bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center gap-8">
        {/* Logo */}
        <a href="#/home" className="flex items-center gap-3 shrink-0">
          <div className="h-16 w-16 flex items-center justify-center">
            <img 
              src="./logo-removebg-preview.png" 
              alt="Digitech Elevators Logo" 
              className="h-full w-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <h1 className="font-serif font-bold text-lg text-brand-navy tracking-tight leading-none">
              DIGITECH <span className="text-brand-gold">ELEVATORS</span>
            </h1>
            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500 font-medium mt-0.5">
              Safe &bull; Reliable &bull; Innovative
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-5 font-medium text-[13px] text-slate-800">
          <a href="#/home"  className={`transition ${isActive('/home')}`}>Home</a>
          <a href="#/about" className={`transition ${isActive('/about')}`}>About Us</a>

          {/* Products dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 hover:text-brand-gold transition border-b-2 pb-0.5 ${isDropdownActive('#/products')}`}>
              Products <i className="fa-solid fa-chevron-down text-[9px] mt-0.5 group-hover:rotate-180 transition-transform duration-200"></i>
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-1 transition-all duration-200 z-50 overflow-hidden">
              <div className="py-2">
                {[
                  ['fa-users',          'passenger',  'Passenger Lifts'],
                  ['fa-house-chimney',  'home',       'Home Lifts'],
                  ['fa-house-chimney-window', 'villa', 'Villa Lifts'],
                  ['fa-bed-pulse',      'hospital',   'Hospital Lifts'],
                  ['fa-truck-ramp-box', 'goods',      'Goods Lifts'],
                  ['fa-oil-can',        'hydraulic',  'Hydraulic Lifts'],
                  ['fa-microchip',      'mrl',        'MRL Lifts'],
                  ['fa-building',       'commercial', 'Commercial Lifts'],
                  ['fa-car',            'car',        'Car Lifts'],
                ].map(([icon, key, label]) => (
                  <a key={key} href={`#/products/${key}`}
                     className={`flex items-center gap-2.5 px-4 py-2.5 hover:bg-brand-gold/10 hover:text-brand-navy transition text-sm font-medium ${isDropdownItemActive(`#/products/${key}`)}`}>
                    <i className={`fa-solid ${icon} text-brand-gold w-4 text-center`}></i> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 hover:text-brand-gold transition border-b-2 pb-0.5 ${isDropdownActive('#/services')}`}>
              Services <i className="fa-solid fa-chevron-down text-[9px] mt-0.5 group-hover:rotate-180 transition-transform duration-200"></i>
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-1 transition-all duration-200 z-50 overflow-hidden">
              <div className="py-2">
                {[
                  ['fa-hammer',           'installation',  'Elevator Installation'],
                  ['fa-handshake',        'amc',           'Annual Maintenance (AMC)'],
                  ['fa-arrows-spin',      'modernization', 'Modernization & Upgrades'],
                  ['fa-screwdriver-wrench','repair',       'Repair & Breakdowns'],
                  ['fa-file-contract',    'licensing',     'Licensing & Renewals'],
                ].map(([icon, key, label]) => (
                  <a key={key} href={`#/services/${key}`}
                     className={`flex items-center gap-2.5 px-4 py-2.5 hover:bg-brand-gold/10 hover:text-brand-navy transition text-sm font-medium ${isDropdownItemActive(`#/services/${key}`)}`}>
                    <i className={`fa-solid ${icon} text-brand-gold w-4 text-center`}></i> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#/projects" className={`transition ${isActive('/projects')}`}>Projects</a>
          <a href="#/amc"      className={`transition ${isActive('/amc')}`}>AMC Plans</a>
          <a href="#/faq"      className={`transition ${isActive('/faq')}`}>FAQs</a>
          <a href="#/contact"  className={`transition ${isActive('/contact')}`}>Contact</a>
          <a href="#/careers"  className={`transition ${isActive('/careers')}`}>Careers</a>

          <a href="#/quote"
             className="ml-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow hover:shadow-lg">
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-brand-navy hover:text-brand-gold transition focus:outline-none">
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navy text-white border-t border-slate-700 py-6 px-6 flex flex-col gap-4 text-sm font-medium max-h-[80vh] overflow-y-auto shadow-2xl animate-fade-in">
          <a href="#/home"     onClick={closeAllMenus} className="hover:text-brand-gold transition py-1 border-b border-slate-800">Home</a>
          <a href="#/about"    onClick={closeAllMenus} className="hover:text-brand-gold transition py-1 border-b border-slate-800">About Us</a>

          {/* Accordion Products */}
          <div className="border-b border-slate-800 pb-2">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex justify-between items-center w-full py-1 text-left hover:text-brand-gold transition"
            >
              <span>Our Products</span>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180 text-brand-gold' : 'text-slate-400'}`}></i>
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 mt-2.5 space-y-2 border-l border-brand-gold/30 animate-slide-down">
                {[
                  ['fa-users',          'passenger',  'Passenger Lifts'],
                  ['fa-house-chimney',  'home',       'Home Lifts'],
                  ['fa-house-chimney-window', 'villa', 'Villa Lifts'],
                  ['fa-bed-pulse',      'hospital',   'Hospital Lifts'],
                  ['fa-truck-ramp-box', 'goods',      'Goods Lifts'],
                  ['fa-oil-can',        'hydraulic',  'Hydraulic Lifts'],
                  ['fa-microchip',      'mrl',        'MRL Lifts'],
                  ['fa-building',       'commercial', 'Commercial Lifts'],
                  ['fa-car',            'car',        'Car Lifts'],
                ].map(([icon, key, label]) => (
                  <a key={key} href={`#/products/${key}`} onClick={closeAllMenus}
                     className="flex items-center gap-2 py-1 text-slate-350 hover:text-brand-gold transition text-xs">
                    <i className={`fa-solid ${icon} text-brand-gold/75 text-[10px] w-3 text-center`}></i> {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Accordion Services */}
          <div className="border-b border-slate-800 pb-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full py-1 text-left hover:text-brand-gold transition"
            >
              <span>Our Services</span>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-brand-gold' : 'text-slate-400'}`}></i>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-2.5 space-y-2 border-l border-brand-gold/30 animate-slide-down">
                {[
                  ['fa-hammer',           'installation',  'Elevator Installation'],
                  ['fa-handshake',        'amc',           'Annual Maintenance (AMC)'],
                  ['fa-arrows-spin',      'modernization', 'Modernization & Upgrades'],
                  ['fa-screwdriver-wrench','repair',       'Repair & Breakdowns'],
                  ['fa-file-contract',    'licensing',     'Licensing & Renewals'],
                ].map(([icon, key, label]) => (
                  <a key={key} href={`#/services/${key}`} onClick={closeAllMenus}
                     className="flex items-center gap-2 py-1 text-slate-350 hover:text-brand-gold transition text-xs">
                    <i className={`fa-solid ${icon} text-brand-gold/75 text-[10px] w-3 text-center`}></i> {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#/projects" onClick={closeAllMenus} className="hover:text-brand-gold transition py-1 border-b border-slate-800">Projects</a>
          <a href="#/amc"      onClick={closeAllMenus} className="hover:text-brand-gold transition py-1 border-b border-slate-800">AMC Plans</a>
          <a href="#/faq"      onClick={closeAllMenus} className="hover:text-brand-gold transition py-1 border-b border-slate-800">FAQs</a>
          <a href="#/contact"  onClick={closeAllMenus} className="hover:text-brand-gold transition py-1 border-b border-slate-800">Contact</a>
          <a href="#/careers"  onClick={closeAllMenus} className="hover:text-brand-gold transition py-1 border-b border-slate-800">Careers</a>

          <a href="#/quote" onClick={closeAllMenus}
             className="bg-brand-gold text-brand-navy font-bold text-center py-3 rounded-xl mt-2 uppercase tracking-wider text-xs shadow hover:bg-brand-gold-hover transition">
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
