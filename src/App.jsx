import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Careers = lazy(() => import('./pages/Careers'));
const Projects = lazy(() => import('./pages/Projects'));
const Amc = lazy(() => import('./pages/Amc'));
const Faq = lazy(() => import('./pages/Faq'));
const Contact = lazy(() => import('./pages/Contact'));
const Quote = lazy(() => import('./pages/Quote'));
const Legal = lazy(() => import('./pages/Legal'));

// Loader component for Suspense fallback
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 space-y-4">
    <div className="w-12 h-12 border-4 border-slate-200 border-t-brand-blue rounded-full animate-spin"></div>
    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold animate-pulse">Loading...</p>
  </div>
);

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const waPopupRef = useRef(null);

  // Routing Handler
  useEffect(() => {
    const handleHashChange = () => {
      setPageLoading(true);
      setTimeout(() => setPageLoading(false), 300);
      const hash = window.location.hash || '#/home';
      // Normalize empty hash or root to /home
      const normalizedHash = (hash === '#' || hash === '#/') ? '#/home' : hash;
      setCurrentHash(normalizedHash);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial hash on mount
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top after new route renders
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentHash]);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Scroll-Reveal Intersection Observer
  useEffect(() => {
    let observer = null;

    const attachObserver = () => {
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (el.classList.contains('scroll-reveal-container')) {
                // Staggered reveal for child elements
                const children = el.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
                children.forEach((child, i) => {
                  setTimeout(() => {
                    child.classList.add('revealed');
                    child.setAttribute('data-revealed', 'true');
                  }, i * 60);
                });
                el.classList.add('revealed');
                el.setAttribute('data-revealed', 'true');
              } else {
                // Individual reveal
                el.classList.add('revealed');
                el.setAttribute('data-revealed', 'true');
              }
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px 100px 0px' }
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
    };

    // Staggered attachment to catch lazy-loaded route chunk rendering
    const t1 = setTimeout(attachObserver, 50);
    const t2 = setTimeout(attachObserver, 300);
    const t3 = setTimeout(attachObserver, 800);

    // Ultimate fallback for mobile: reveal all unrevealed targets after 2s
    const t4 = setTimeout(() => {
      document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
      ).forEach((el) => {
        el.classList.add('revealed');
        el.setAttribute('data-revealed', 'true');
      });
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      if (observer) observer.disconnect();
    };
  }, [currentHash]);

  // View Router Parser
  const renderView = () => {
    const cleanHash = currentHash.replace('#', '');

    if (cleanHash.startsWith('/products/')) {
      const productKey = cleanHash.split('/products/')[1];
      return <ProductDetail productKey={productKey} fallbackToHome={() => window.location.hash = '#/home'} />;
    }
    if (cleanHash.startsWith('/services/')) {
      const serviceKey = cleanHash.split('/services/')[1];
      return <ServiceDetail serviceKey={serviceKey} fallbackToHome={() => window.location.hash = '#/home'} />;
    }

    switch (cleanHash) {
      case '/':
      case '/home':
        return <Home />;
      case '/about':
        return <About />;
      case '/projects':
        return <Projects />;
      case '/careers':
        return <Careers />;
      case '/amc':
        return <Amc />;
      case '/faq':
        return <Faq />;
      case '/contact':
        return <Contact />;
      case '/quote':
        return <Quote />;
      case '/legal/privacy':
        return <Legal type="privacy" />;
      case '/legal/terms':
        return <Legal type="terms" />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page loading bar — sliding blue strip like a floor indicator */}
      {pageLoading && (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent"
             style={{ animation: 'goldShimmer 0.5s linear forwards' }} />
      )}

      {/* Sticky Header Navigation */}
      <Navbar currentHash={currentHash} />

      {/* Main Dynamic View — animates in like elevator arriving at a new floor */}
      <main className="flex-grow">
        <div key={currentHash} className="animate-page-up">
          <Suspense fallback={<PageLoader />}>
            {renderView()}
          </Suspense>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-navy hover:bg-brand-blue rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 border-2 border-brand-blue hover:border-brand-navy animate-fade-in"
        >
          <i className="fa-solid fa-chevron-up text-white hover:text-white text-sm"></i>
        </button>
      )}

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">

        {/* Chat Popup Card */}
        {whatsappOpen && (
          <div
            ref={waPopupRef}
            className="rounded-2xl overflow-hidden border border-brand-blue/30 animate-fade-in"
            style={{ width: '288px', boxShadow: '0 12px 48px rgba(10,25,60,0.28)' }}
          >
            {/* Header — Brand Navy with blue accent */}
            <div className="bg-brand-navy px-4 py-3.5 flex items-center justify-between border-b border-brand-blue/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden border-2 border-brand-blue/50 shadow-md">
                  <img src="./logo-removebg-preview.png" alt="Digitech" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="font-serif font-bold text-sm leading-tight text-white">Digitech Elevators</p>
                  <span className="flex items-center gap-1.5 text-slate-400 text-[10px] mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                    Available on WhatsApp
                  </span>
                </div>
              </div>
              <button
                onClick={() => setWhatsappOpen(false)}
                className="w-7 h-7 rounded-full border border-brand-blue/30 bg-white/5 hover:bg-brand-blue/20 hover:border-brand-blue flex items-center justify-center text-slate-400 hover:text-brand-blue-bright transition-all duration-200"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark text-xs" />
              </button>
            </div>

            {/* Message area — dark slate bg */}
            <div className="bg-slate-900 px-4 py-5">
              <div className="bg-brand-navy rounded-xl rounded-tl-none px-4 py-3.5 border border-brand-blue/20 max-w-[92%] shadow-lg">
                <p className="text-brand-blue-bright font-serif font-semibold text-sm">Hi there 👋</p>
                <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">How can we help you? Our team is ready to assist with your elevator needs.</p>
                <span className="text-[10px] text-slate-500 block mt-2 text-right font-mono">Digitech Elevators</span>
              </div>
            </div>

            {/* CTA Button — Brand Blue */}
            <div className="bg-brand-navy px-4 py-3 border-t border-brand-blue/20">
              <a
                href={`https://wa.me/919845071406?text=${encodeURIComponent('Hello\n\nI visited the website of Digitech Elevators and would like to enquire about your elevator services. Please share further details.\n\nThank you.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-[1.02] shadow-lg"
                onClick={() => setWhatsappOpen(false)}
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setWhatsappOpen(prev => !prev)}
          title="Chat on WhatsApp"
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 ${
            whatsappOpen
              ? 'bg-brand-navy border-brand-blue hover:bg-slate-800'
              : 'bg-[#25D366] hover:bg-[#20ba5a] border-white/30 animate-bounce-soft'
          }`}
        >
          {whatsappOpen
            ? <i className="fa-solid fa-xmark text-brand-blue-bright text-2xl" />
            : <i className="fa-brands fa-whatsapp text-white text-3xl" />}
        </button>
      </div>
    </div>
  );
}
