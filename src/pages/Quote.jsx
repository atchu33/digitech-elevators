import React, { useState } from 'react';

export default function Quote() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name') || 'Customer';
    const company = formData.get('company');
    const mobile = formData.get('mobile') || 'Not provided';
    const email = formData.get('email');
    const city = formData.get('city') || 'Bangalore';
    const buildingType = formData.get('buildingType');
    const elevatorType = formData.get('elevatorType');
    const floors = formData.get('floors');
    const capacity = formData.get('capacity');
    const service = formData.get('service');
    const details = formData.get('details');
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Digitech Elevators! I need a detailed quote:\n\n` +
                           `👤 *Contact Details:*\n` +
                           `• Name: ${name}\n` +
                           `• Company: ${company || 'Not specified'}\n` +
                           `• Mobile: ${mobile}\n` +
                           `• Email: ${email || 'Not provided'}\n` +
                           `• City: ${city}\n\n` +
                           `📋 *Project Specifications:*\n` +
                           `• Building Type: ${buildingType || 'Not specified'}\n` +
                           `• Elevator Type: ${elevatorType || 'Not specified'}\n` +
                           `• Floors: ${floors || 'Not specified'}\n` +
                           `• Capacity: ${capacity || 'Not specified'}\n` +
                           `• Service Scope: ${service || 'Not specified'}\n\n` +
                           (details ? `📝 *Additional Requirements:*\n${details}\n\n` : '') +
                           `Please provide a comprehensive quotation.`;
    
    // Open WhatsApp
    const whatsappURL = `https://wa.me/919845071406?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fade-in bg-slate-50">
      {/* ── Banner ── */}
      <section className="bg-brand-navy text-white py-16 px-4 text-center hero-gradient relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest animate-pulse-ring">
            Free Consultation
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Request a Free Quote</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Fill in your project specifications below. Our technical experts and engineering team will design a custom proposal within 24 working hours.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Sidebar */}
        <div className="lg:col-span-4 space-y-8 scroll-reveal-left">
          <div className="bg-brand-navy text-white p-8 rounded-2xl space-y-6 shadow-xl border-b-4 border-brand-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full -mr-5 -mt-5"></div>
            <h3 className="font-serif font-bold text-xl text-brand-gold border-b border-slate-700 pb-3 flex items-center gap-2">
              <i className="fa-solid fa-circle-question text-base text-brand-gold"></i> Why Request a Quote?
            </h3>
            <ul className="space-y-4 text-xs text-slate-300 scroll-reveal-container">
              <li className="flex gap-3 items-start scroll-reveal">
                <i className="fa-solid fa-check text-brand-gold shrink-0 mt-0.5 animate-bounce-soft"></i> 
                <span>Custom elevator design matching your layout specs</span>
              </li>
              <li className="flex gap-3 items-start scroll-reveal">
                <i className="fa-solid fa-check text-brand-gold shrink-0 mt-0.5 animate-bounce-soft" style={{ animationDelay: '0.2s' }}></i> 
                <span>Transparent quote estimates with zero hidden charges</span>
              </li>
              <li className="flex gap-3 items-start scroll-reveal">
                <i className="fa-solid fa-check text-brand-gold shrink-0 mt-0.5 animate-bounce-soft" style={{ animationDelay: '0.4s' }}></i> 
                <span>Professional engineering site audits included free</span>
              </li>
              <li className="flex gap-3 items-start scroll-reveal">
                <i className="fa-solid fa-check text-brand-gold shrink-0 mt-0.5 animate-bounce-soft" style={{ animationDelay: '0.6s' }}></i> 
                <span>Expert safety & energy efficiency recommendations</span>
              </li>
              <li className="flex gap-3 items-start scroll-reveal">
                <i className="fa-solid fa-check text-brand-gold shrink-0 mt-0.5 animate-bounce-soft" style={{ animationDelay: '0.8s' }}></i> 
                <span>Dedicated support advisor during execution</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-serif font-bold text-brand-navy text-sm border-b pb-2">Direct Channels</h4>
            <div className="space-y-3.5 text-xs text-slate-600">
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-brand-gold w-4 text-center"></i> 
                <a href="tel:+919845071406" className="hover:text-brand-gold transition font-medium">+91 98450 71406</a>
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-brand-gold w-4 text-center"></i> 
                <a href="mailto:digitech.elevators@gmail.com" className="hover:text-brand-gold transition font-medium">digitech.elevators@gmail.com</a>
              </p>
              <p className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-[#25D366] w-4 text-center text-sm"></i> 
                <a href="https://wa.me/919845071406" className="hover:text-[#25D366] transition font-semibold">Chat on WhatsApp</a>
              </p>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="lg:col-span-8 scroll-reveal-right">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-2xl">
            <h3 className="font-serif font-bold text-2xl text-brand-navy border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
              <i className="fa-solid fa-calculator text-brand-gold animate-float"></i> Project Layout Specifications
            </h3>
            {formSubmitted ? (
              <div className="text-center py-16 animate-zoom-in">
                <i className="fa-solid fa-circle-check text-7xl text-green-500 mb-6 animate-bounce block"></i>
                <h4 className="font-serif font-bold text-2xl mb-2 text-brand-navy">Quote Request Received!</h4>
                <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Thank you for sharing your project specifications. Our technical engineering division is reviewing your layout and will issue a detailed custom catalog and quote within 24 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Contact Name *</label>
                    <input type="text" name="name" placeholder="Your Full Name" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Company / Building Name</label>
                    <input type="text" name="company" placeholder="Company or Property Name" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Phone Number *</label>
                    <input type="tel" name="mobile" placeholder="Mobile Number" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email Address</label>
                    <input type="email" name="email" placeholder="Email Address" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">City / Location *</label>
                    <input type="text" name="city" placeholder="City" defaultValue="Bangalore" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Building Type *</label>
                    <select name="buildingType" className="w-full border border-slate-200 rounded-lg p-3 text-xs text-slate-600 focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" required>
                      <option value="">Select Building Type</option>
                      <option>Residential Apartment</option>
                      <option>Villa / Duplex House</option>
                      <option>Commercial Building</option>
                      <option>Hospital / Clinic</option>
                      <option>Hotel / Guesthouse</option>
                      <option>Educational Institution</option>
                      <option>Industrial / Warehouse</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Elevator Category *</label>
                    <select name="elevatorType" className="w-full border border-slate-200 rounded-lg p-3 text-xs text-slate-600 focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" required>
                      <option value="">Select Elevator Type</option>
                      <option>Passenger Lift</option>
                      <option>Hospital Lift</option>
                      <option>Goods Lift</option>
                      <option>Home Elevator</option>
                      <option>Hydraulic Lift</option>
                      <option>Machine Room Less Lift</option>
                      <option>Villa Lift</option>
                      <option>Commercial Lift</option>
                      <option>Car Elevator</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Number of Floors (Stops)</label>
                    <input type="number" name="floors" min="2" max="50" placeholder="e.g. 5" className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Required Capacity</label>
                    <select name="capacity" className="w-full border border-slate-200 rounded-lg p-3 text-xs text-slate-600 focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200">
                      <option value="">Select Capacity Option</option>
                      <option>4 Passengers (320 kg)</option>
                      <option>6 Passengers (408 kg)</option>
                      <option>8 Passengers (544 kg)</option>
                      <option>10 Passengers (680 kg)</option>
                      <option>13 Passengers (1000 kg)</option>
                      <option>Custom Capacity Requirement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Scope of Service Required *</label>
                    <select name="service" className="w-full border border-slate-200 rounded-lg p-3 text-xs text-slate-600 focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200" required>
                      <option value="">Select Scope</option>
                      <option>New Elevator Installation</option>
                      <option>Annual Maintenance Contract (AMC)</option>
                      <option>Elevator Modernization</option>
                      <option>Repair & Breakdown Services</option>
                      <option>Licensing & Renewals</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">Detailed Layout / Shaft Requirements</label>
                  <textarea rows="4" name="details" placeholder="Mention shaft measurements, interior choices (Glass/SS), door style, or specific timelines if any..." className="w-full border border-slate-200 rounded-lg p-3 text-xs focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition duration-300 shadow-lg hover:shadow-xl mt-2 flex items-center justify-center gap-2 hover:scale-[1.01] btn-glow">
                  <i className="fa-solid fa-paper-plane text-xs text-brand-gold"></i> Submit Quote Proposal Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
