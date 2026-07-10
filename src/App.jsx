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
      {/* Page loading bar */}
      {pageLoading && (
        <div className="fixed top-0 left-0 right-0 z-[9999] h-0.5 bg-brand-gold animate-pulse" style={{ animation: 'loadBar 0.5s ease forwards' }}></div>
      )}

      {/* Sticky Header Navigation */}
      <Navbar currentHash={currentHash} />

      {/* Main Dynamic View */}
      <main className="flex-grow">
        {renderView()}
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
    </div>
  );
}
