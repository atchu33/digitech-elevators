import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Amc from './pages/Amc';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Legal from './pages/Legal';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  // Routing Handler
  useEffect(() => {
    const handleHashChange = () => {
      setPageLoading(true);
      setTimeout(() => setPageLoading(false), 500);
      setCurrentHash(window.location.hash || '#/home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Scroll-Reveal Intersection Observer
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
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
                  }, i * 120);
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
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );

      // Select all reveal elements and containers
      const targets = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-container'
      );

      targets.forEach((el) => {
        // Skip individual observation if the element is nested within a scroll-reveal-container
        const parentContainer = el.parentElement ? el.parentElement.closest('.scroll-reveal-container') : null;
        if (parentContainer && el !== parentContainer) {
          return;
        }
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 200); // 200ms delay to let the DOM settle after page route transitions

    return () => clearTimeout(timer);
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
      case '/gallery':
        return <Gallery />;
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
      {/* Page loading bar — sliding gold strip like a floor indicator */}
      {pageLoading && (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
             style={{ animation: 'goldShimmer 0.5s linear forwards' }} />
      )}

      {/* Sticky Header Navigation */}
      <Navbar currentHash={currentHash} />

      {/* Main Dynamic View — animates in like elevator arriving at a new floor */}
      <main className="flex-grow">
        <div key={currentHash} className="animate-page-up">
          {renderView()}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-navy hover:bg-brand-gold rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 border-2 border-brand-gold hover:border-brand-navy animate-fade-in"
        >
          <i className="fa-solid fa-chevron-up text-white hover:text-brand-navy text-sm"></i>
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Digitech%20Elevators"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 animate-bounce-soft"
      >
        <i className="fa-brands fa-whatsapp text-white text-3xl"></i>
      </a>
    </div>
  );
}
