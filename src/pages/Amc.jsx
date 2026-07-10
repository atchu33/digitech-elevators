import React from 'react';

const plans = [
  {
    icon: 'fa-calendar-check',
    name: 'Monthly Maintenance',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Routine check runs, lubrication, and basic leveling adjustments every 30 days.',
    includes: [
      'Monthly technician visit',
      'Lubrication of all moving parts',
      'Leveling & adjustment checks',
      'Door operation inspection',
      'Basic safety checks',
    ],
  },
  {
    icon: 'fa-rotate',
    name: 'Quarterly Maintenance',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Safety governor audits, brake adjustments, and controller diagnostics every 90 days.',
    includes: [
      'Quarterly technician visits',
      'Governor & brake adjustments',
      'Controller diagnostic logs',
      'Electrical safety audit',
      'Full mechanical inspection',
    ],
  },
  {
    icon: 'fa-star',
    name: 'Comprehensive AMC',
    badge: 'Most Popular',
    color: 'from-brand-navy to-slate-800',
    description: 'Full coverage including all breakdown support, parts, labor, and emergency callouts.',
    includes: [
      'All quarterly services included',
      'Unlimited breakdown support',
      'Spare parts & labor covered',
      'Motor & drive replacements',
      '24/7 emergency response',
      'Priority technician routing',
    ],
  },
  {
    icon: 'fa-screwdriver-wrench',
    name: 'Non-Comprehensive',
    badge: null,
    color: 'from-slate-700 to-slate-800',
    description: 'Monthly diagnostics and labor covered. Parts replacements billed separately.',
    includes: [
      'Monthly maintenance visits',
      'Labor & diagnostics covered',
      'Routine safety checks',
      'Emergency call support',
      'Parts billed separately',
    ],
  },
];

const benefits = [
  { icon: 'fa-chart-line', title: 'Reduced Breakdowns', desc: 'Preventive maintenance minimizes major elevator faults and unplanned outages.' },
  { icon: 'fa-battery-three-quarters', title: 'Extended Equipment Life', desc: 'Regular calibrations ensure motors, drives, and ropes wear out slowly.' },
  { icon: 'fa-file-shield', title: 'Safety Compliance', desc: 'Adhering to local elevator rules prevents legal and liability concerns.' },
  { icon: 'fa-user-clock', title: 'Priority Service Support', desc: 'AMC subscribers receive priority placement in breakdown technician routing.' },
  { icon: 'fa-coins', title: 'Cost Savings', desc: 'Prevent expensive emergency repairs by catching issues early through routine inspections.' },
  { icon: 'fa-headset', title: '24/7 Helpline', desc: 'Round-the-clock dedicated support line for all AMC contract holders.' },
];

export default function Amc() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 px-4 text-center hero-gradient relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">Preventive Maintenance</h3>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Annual Maintenance Contract Plans</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Keep your elevators running safely and efficiently with our flexible AMC plans designed for all building types.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Choose Your Plan</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">AMC Plan Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border-2 overflow-hidden flex flex-col shadow-sm card-hover transition-all duration-300 ${plan.badge ? 'border-brand-gold shadow-brand-gold/20 shadow-lg' : 'border-slate-200 hover:border-brand-gold/50'}`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-brand-gold text-brand-navy text-[10px] font-bold text-center py-1.5 uppercase tracking-widest">
                    ⭐ {plan.badge}
                  </div>
                )}
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white ${plan.badge ? 'pt-9' : ''}`}>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 border border-white/20">
                    <i className={`fa-solid ${plan.icon} text-brand-gold text-xl`}></i>
                  </div>
                  <h4 className="font-serif font-bold text-lg leading-tight">{plan.name}</h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">{plan.description}</p>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <ul className="space-y-2.5 flex-grow">
                    {plan.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <i className="fa-solid fa-circle-check text-green-500 shrink-0 mt-0.5"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#/quote"
                    className={`block text-center font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition mt-2 ${plan.badge ? 'bg-brand-gold hover:bg-brand-gold-hover text-brand-navy shadow-lg' : 'bg-brand-navy hover:bg-slate-800 text-white'}`}
                  >
                    Inquire This Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Why AMC Matters</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">Benefits of an AMC Plan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex gap-5 items-start card-hover group hover:border-brand-gold transition-all">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-xl shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-all">
                  <i className={`fa-solid ${b.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-navy mb-1">{b.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white py-16 px-4 border-t-4 border-brand-gold text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold">Ready to Protect Your Elevator?</h2>
          <p className="text-slate-300 text-sm">Sign up for an AMC plan today and ensure your elevators run safely, reliably, and efficiently year-round.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/quote" className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition shadow-lg">
              Get a Free Quote
            </a>
            <a href="#/contact" className="border border-white hover:border-brand-gold hover:text-brand-gold text-white font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition">
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
