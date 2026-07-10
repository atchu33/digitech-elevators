import React, { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fade-in">

      {/* ── Hero Banner ── */}
      <section className="bg-brand-navy text-white py-16 px-4 text-center hero-gradient relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Get In Touch</h3>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Contact Our Office</h2>
        </div>
      </section>


      {/* ── Contact Section ── */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-20 px-4 md:px-8 border-t-4 border-brand-gold">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — contact details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-2">Get In Touch</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Contact Us</h2>
            </div>

            <div className="space-y-5 text-sm text-slate-300">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-0.5">Office Address</p>
                  <p className="text-slate-400 text-xs leading-relaxed">No. 45, Ground Floor, Yeshwanthpur, Bangalore – 560022</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-0.5">Phone Numbers</p>
                  <p className="text-slate-400 text-xs">+91 98765 43210 / +91 80 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-0.5">Email Address</p>
                  <p className="text-slate-400 text-xs">info@digitechelevators.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs uppercase tracking-wider mb-0.5">Business Hours</p>
                  <p className="text-slate-400 text-xs">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-slate-400 text-xs">24/7 Emergency Breakdown Support</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%20Digitech%20Elevators"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-xl text-sm uppercase transition shadow-lg"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i> Chat on WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="w-full h-44 bg-slate-900/60 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-2">
              <i className="fa-solid fa-map-location-dot text-2xl text-brand-gold"></i>
              <span className="text-slate-400 text-xs">Google Map Location</span>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-10 text-slate-800 shadow-2xl">
            <h4 className="font-serif font-bold text-2xl text-brand-navy border-b border-slate-200 pb-3 mb-6 flex items-center gap-2">
              <i className="fa-solid fa-envelope-open-text text-brand-gold"></i> Online Enquiry Form
            </h4>
            {formSubmitted ? (
              <div className="text-center py-14">
                <i className="fa-solid fa-circle-check text-6xl text-green-500 mb-5 animate-bounce block"></i>
                <h4 className="font-serif font-bold text-2xl mb-2 text-brand-navy">Enquiry Submitted!</h4>
                <p className="text-sm text-slate-500">Thank you! Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Name *</label>
                    <input type="text" placeholder="Your Name"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy/20 transition" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Company / Building</label>
                    <input type="text" placeholder="Company / Building Name"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Phone Number *</label>
                    <input type="tel" placeholder="Mobile Number"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Email *</label>
                    <input type="email" placeholder="Email Address"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">City *</label>
                    <input type="text" defaultValue="Bangalore"
                      className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Service Required *</label>
                    <select className="w-full border border-slate-200 rounded-lg p-3 text-xs text-slate-600 focus:outline-none focus:border-brand-navy transition" required>
                      <option value="">Select Service Required</option>
                      <option>Elevator Installation</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                      <option>Elevator Modernization</option>
                      <option>Repair &amp; Breakdown Services</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Message</label>
                  <textarea rows="4" placeholder="Describe your requirements..."
                    className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy transition resize-none"></textarea>
                </div>
                <button type="submit"
                  className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:shadow-xl">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
