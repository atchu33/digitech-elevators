import React, { useState } from 'react';

export default function Legal({ type = 'privacy' }) {
  const [activeSection, setActiveSection] = useState('privacy');

  const sections = [
    { id: 'privacy', title: 'Privacy Policy', icon: 'fa-shield-halved' },
    { id: 'terms', title: 'Terms of Service', icon: 'fa-file-contract' },
    { id: 'disclaimer', title: 'Disclaimer', icon: 'fa-triangle-exclamation' },
    { id: 'compliance', title: 'Safety Compliance', icon: 'fa-certificate' }
  ];

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-brand-navy text-white py-16 px-4 text-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
            Legal Information
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Legal & Compliance</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Our commitment to transparency, safety standards, and regulatory compliance in all elevator operations.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {sections.map(sec => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeSection === sec.id
                    ? 'bg-brand-navy text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <i className={`fa-solid ${sec.icon} text-xs ${activeSection === sec.id ? 'text-brand-gold' : ''}`}></i>
                {sec.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 space-y-8">
          
          {/* Privacy Policy */}
          {activeSection === 'privacy' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-shield-halved text-brand-gold text-xl"></i>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy">Privacy Policy</h3>
                  <p className="text-xs text-slate-500">Last Updated: January 2025</p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">1. Information We Collect</h4>
                  <p className="mb-3">
                    Digitech Elevators collects personal information when you request quotes, schedule service appointments, 
                    or sign Annual Maintenance Contracts (AMC). This may include:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600">
                    <li>Name, phone number, and email address</li>
                    <li>Building address and property specifications</li>
                    <li>Elevator installation requirements and technical parameters</li>
                    <li>Service history and maintenance records</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">2. How We Use Your Information</h4>
                  <p className="mb-3">We use collected information to:</p>
                  <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600">
                    <li>Provide accurate quotes and technical consultations</li>
                    <li>Schedule installation, maintenance, and repair services</li>
                    <li>Send AMC renewal reminders and safety inspection notices</li>
                    <li>Communicate emergency breakdown support</li>
                    <li>Improve our service quality and customer experience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">3. Data Protection</h4>
                  <p>
                    We implement industry-standard security measures to protect your personal information. 
                    Your data is stored securely and is never shared with third parties without your explicit consent, 
                    except where required by law or for service delivery purposes (e.g., certified technicians, 
                    component suppliers).
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">4. Your Rights</h4>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600">
                    <li>Access your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Request deletion of your data (subject to legal retention requirements)</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">5. Contact for Privacy Concerns</h4>
                  <p>
                    For any privacy-related questions or to exercise your rights, contact us at:{' '}
                    <a href="mailto:privacy@digitechelevators.com" className="text-brand-gold hover:underline font-semibold">
                      privacy@digitechelevators.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Terms of Service */}
          {activeSection === 'terms' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-file-contract text-brand-gold text-xl"></i>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy">Terms of Service</h3>
                  <p className="text-xs text-slate-500">Effective Date: January 2025</p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">1. Service Agreement</h4>
                  <p>
                    By engaging Digitech Elevators for installation, maintenance, modernization, or repair services, 
                    you agree to these terms. All services are provided in accordance with local elevator safety 
                    regulations and manufacturer specifications.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">2. Installation Services</h4>
                  <p className="mb-3">
                    Installation timelines are estimates based on site conditions, building readiness, and component 
                    availability. Delays caused by factors beyond our control (e.g., civil work delays, permit approvals) 
                    may extend the timeline. Final commissioning requires all safety systems to pass inspection.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">3. Annual Maintenance Contracts (AMC)</h4>
                  <p className="mb-3">AMC terms include:</p>
                  <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600">
                    <li><strong>Non-Comprehensive AMC:</strong> Covers labor and routine maintenance; spare parts are billed separately</li>
                    <li><strong>Semi-Comprehensive AMC:</strong> Covers routine servicing, labor, and minor spare parts</li>
                    <li><strong>Comprehensive AMC:</strong> Covers standard parts, labor, and breakdown services</li>
                    <li><strong>Platinum Comprehensive AMC:</strong> Covers all major components including motors, controllers, and ARD batteries</li>
                    <li>Scheduled maintenance visits as per plan (monthly/quarterly)</li>
                    <li>24/7 emergency breakdown support for contract holders</li>
                    <li>Annual contract renewal with price revision based on inflation and component costs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">4. Payment Terms</h4>
                  <p>
                    Installation projects require payment in milestones: 30% advance, 40% at mid-stage, and 30% upon 
                    commissioning. AMC payments are annual or quarterly as per agreement. Late payments may result in 
                    service suspension.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">5. Warranty</h4>
                  <p>
                    New installations include a 12-month warranty covering manufacturing defects and installation errors. 
                    Warranty does not cover damage from misuse, unauthorized modifications, or lack of maintenance.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">6. Liability Limitations</h4>
                  <p>
                    Digitech Elevators is not liable for accidents or damages resulting from user negligence, 
                    unauthorized repairs, or failure to follow safety guidelines. Our liability is limited to the 
                    service contract value.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">7. Termination</h4>
                  <p>
                    Either party may terminate an AMC with 30 days written notice. Termination does not waive payment 
                    obligations for services already rendered.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          {activeSection === 'disclaimer' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-triangle-exclamation text-brand-gold text-xl"></i>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy">Disclaimer</h3>
                  <p className="text-xs text-slate-500">Important Legal Notice</p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">1. General Information</h4>
                  <p>
                    The information provided on this website is for general informational purposes only. While we strive 
                    to ensure accuracy, specifications, pricing, and technical details are subject to change without notice. 
                    Always request a formal quote for exact information.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">2. Technical Specifications</h4>
                  <p>
                    Elevator specifications (capacity, speed, dimensions) are standard configurations. Actual installation 
                    may vary based on building requirements, shaft dimensions, and local regulations. Site surveys are 
                    mandatory before finalizing specifications.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">3. Project Timelines</h4>
                  <p>
                    Installation timelines mentioned are estimates and may vary based on site readiness, permit approvals, 
                    weather conditions, and component availability. Digitech Elevators is not liable for delays caused by 
                    external factors.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">4. Third-Party Content</h4>
                  <p>
                    Our website may contain links to third-party websites or references to third-party products. 
                    We do not endorse or assume responsibility for the content, services, or policies of external sites.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">5. Professional Advice</h4>
                  <p>
                    Information on this website does not constitute professional engineering or legal advice. 
                    For specific building requirements, consult with our certified engineers and local regulatory authorities.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
                  <div className="flex gap-3">
                    <i className="fa-solid fa-exclamation-triangle text-yellow-600 text-xl shrink-0 mt-0.5"></i>
                    <div>
                      <h5 className="font-bold text-yellow-900 mb-1">Important Safety Notice</h5>
                      <p className="text-xs text-yellow-800 leading-relaxed">
                        Elevator installation, maintenance, and repair should only be performed by certified technicians. 
                        Unauthorized repairs or modifications void warranties and may violate safety regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Safety Compliance */}
          {activeSection === 'compliance' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-certificate text-brand-gold text-xl"></i>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy">Safety Compliance</h3>
                  <p className="text-xs text-slate-500">Certifications & Standards</p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">1. Regulatory Standards</h4>
                  <p className="mb-3">
                    Digitech Elevators operates in full compliance with:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600">
                    <li>Indian Standards (IS 14665) for elevator safety requirements</li>
                    <li>National Building Code of India (NBC) guidelines</li>
                    <li>State-level elevator inspection and licensing regulations</li>
                    <li>International Safety Standards (ISO 9001, CE marking where applicable)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">2. Safety Certifications</h4>
                  <p className="mb-3">Our elevators are equipped with certified safety features:</p>
                  <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600">
                    <li>Overspeed governor systems</li>
                    <li>Safety gear and buffers</li>
                    <li>Automatic Rescue Device (ARD) for power failures</li>
                    <li>Door interlocks and obstruction sensors</li>
                    <li>Emergency alarm and communication systems</li>
                    <li>Fire-rated components where required</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">3. Mandatory Inspections</h4>
                  <p>
                    All installed elevators undergo rigorous safety inspections before commissioning. 
                    Regular monthly maintenance and annual safety audits are mandatory under AMC agreements 
                    to maintain compliance with local regulations.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">4. Technician Qualifications</h4>
                  <p>
                    All Digitech technicians are certified and trained in:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-600 mt-2">
                    <li>Elevator installation and commissioning procedures</li>
                    <li>Safety system diagnostics and troubleshooting</li>
                    <li>Emergency rescue operations</li>
                    <li>Updated industry safety protocols</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-base">5. Environmental Compliance</h4>
                  <p>
                    We prioritize environmental responsibility by using energy-efficient VVVF drives, 
                    LED lighting, and recyclable materials where possible. Our modernization services 
                    help reduce energy consumption by up to 40%.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl">
                  <div className="flex gap-3">
                    <i className="fa-solid fa-shield-halved text-green-600 text-xl shrink-0 mt-0.5"></i>
                    <div>
                      <h5 className="font-bold text-green-900 mb-1">Safety First Commitment</h5>
                      <p className="text-xs text-green-800 leading-relaxed">
                        Digitech Elevators maintains a zero-compromise approach to safety. Every installation 
                        undergoes a comprehensive 45-point safety checklist before final commissioning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="bg-slate-50 rounded-xl p-6 space-y-4">
              <h4 className="font-serif font-bold text-lg text-brand-navy flex items-center gap-2">
                <i className="fa-solid fa-headset text-brand-gold"></i>
                Need Assistance?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                For questions regarding our legal policies, service agreements, or safety compliance, 
                please contact our support team.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#/contact" className="inline-flex items-center gap-2 bg-brand-navy hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition">
                  <i className="fa-solid fa-envelope"></i> Contact Us
                </a>
                <a href="tel:+919845071406" className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition">
                  <i className="fa-solid fa-phone"></i> +91 98450 71406
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-12 px-4 text-center border-t-4 border-brand-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[25, 50, 75].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-gold" style={{ left: `${pos}%`, animation: 'shaftGlow 3s infinite' }} />
          ))}
        </div>
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold">Questions About Our Policies?</h3>
          <p className="text-slate-300 text-sm">
            We're committed to transparency and compliance. Reach out to our team for clarification.
          </p>
          <a href="#/contact" className="inline-block bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg hover:scale-105 btn-glow mt-2">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
