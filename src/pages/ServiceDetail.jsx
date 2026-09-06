import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SERVICES_DATA } from '../data/siteData';
import { getAssetUrl } from '../utils/router';

const SERVICE_ICONS = {
  'Controller Replacement': 'fa-microchip',
  'VVVF Drive Upgrade': 'fa-bolt',
  'Automatic Door Upgrade': 'fa-arrows-left-right',
  'COP & LOP Replacement': 'fa-square-poll-vertical',
  'ARD Installation': 'fa-battery-three-quarters',
  'Gearless Machine Upgrade': 'fa-gear',
  'Cabin Interior Renovation': 'fa-brush',
  'LED Lighting': 'fa-lightbulb',
  'Voice Announcement System': 'fa-bullhorn',
  'Digital Display Panels': 'fa-tv',
};

const BENEFIT_ICONS = {
  'Reduced Breakdowns': 'fa-circle-check',
  'Improved Safety': 'fa-shield-halved',
  'Energy Savings': 'fa-leaf',
  'Smoother Ride': 'fa-wave-square',
  'Lower Maintenance Costs': 'fa-piggy-bank',
  'Extended Elevator Life': 'fa-hourglass-half',
};

const BENEFIT_DETAILS = {
  'Reduced Breakdowns': 'Minimizes passenger downtime and emergency breakdown call-outs.',
  'Improved Safety': 'Integrates modern safety gear, door sensors, and automatic rescue systems.',
  'Energy Savings': 'High-efficiency VVVF drives and LED systems reduce energy consumption by up to 40%.',
  'Smoother Ride': 'Precision rails alignment and leveling curves eliminate vibrations and jerking.',
  'Lower Maintenance Costs': 'Replacing legacy components reduces wear-and-tear and part replacements.',
  'Extended Elevator Life': 'Adds another 10-15 years of reliable, code-compliant service life.'
};

const INSTALLATION_POSTERS = [
  {
    image: './POSTER/3rd insta Poster.png',
    title: 'Precision Elevator Engineering',
    tag: 'Quality Installation',
    desc: 'State-of-the-art shaft alignment, precision brackets, and gearless motor placement.'
  },
  {
    image: './POSTER/WOOD FINISH CABIN.png',
    title: 'Custom Wooden & Glass Cabins',
    tag: 'Cabin Interiors',
    desc: 'Premium decorative cabin finishes customized to complement luxury architecture.'
  },
  {
    image: './POSTER/premium elevators.jpeg',
    title: 'High-Speed Passenger Elevators',
    tag: 'Commercial & Villa',
    desc: 'Energy-efficient VVVF motor drives with whisper-quiet, smooth ride quality.'
  },
  {
    image: './POSTER/INSTA POST 3.png',
    title: 'Advanced Microprocessor Control',
    tag: 'Smart Technology',
    desc: 'Integrated 32-bit controllers, ARD safety system, and automatic levelling.'
  },
  {
    image: './POSTER/Untitled design.png',
    title: 'Turnkey Residential Installation',
    tag: 'Home Lifts',
    desc: 'Tailored home elevator setups designed for low pit and overhead headroom.'
  },
  {
    image: './POSTER/1ST INSTA POST FOR DIGITECH.png',
    title: 'End-to-End Execution',
    tag: 'Complete Project Care',
    desc: 'From initial site survey and civil preparation to government licensing and handover.'
  }
];

const portfolioCategories = [
  {
    id: 'corporate',
    title: 'Corporate & Education',
    icon: 'fa-building-columns',
    propertiesBadge: '25+ Properties',
    description: 'Corporate offices, IT buildings, schools, colleges, institutions',
    coverImage: './AMC IMAGES/Corporate & Educational/1_cp.jpg',
    images: [
      './AMC IMAGES/Corporate & Educational/1_cp.jpg',
      './AMC IMAGES/Corporate & Educational/2_cp.jpg',
      './AMC IMAGES/Corporate & Educational/3_cp.jpg',
      './AMC IMAGES/Corporate & Educational/4_cp.jpg',
      './AMC IMAGES/Corporate & Educational/5_cp.jpg',
      './AMC IMAGES/Corporate & Educational/0fcd6862-822e-48d2-a284-166ee6f25376.jpg',
      './AMC IMAGES/Corporate & Educational/12f2b0a1-8a57-4491-a5b1-5490c32dbcad.jpg',
      './AMC IMAGES/Corporate & Educational/260e7cc1-504b-46fd-bf0c-32ac3bd232ee.jpg',
      './AMC IMAGES/Corporate & Educational/2aa13cc0-d7e7-458f-a9a3-eaaef36cad65.jpg',
      './AMC IMAGES/Corporate & Educational/5fffe4e2-b6b2-42e6-932a-bde42eba502d.jpg',
      './AMC IMAGES/Corporate & Educational/608ee88b-1331-4770-9769-b2bb813de697.jpg',
      './AMC IMAGES/Corporate & Educational/7256d8c8-93bd-4e85-b7c1-4ca92e3ca29b.jpg',
      './AMC IMAGES/Corporate & Educational/76d824cf-7252-4b84-950a-4c585ddf4d26.jpg',
      './AMC IMAGES/Corporate & Educational/86e28586-2efe-44bd-bfeb-1530a69dfdcd.jpg',
      './AMC IMAGES/Corporate & Educational/8d933bf2-b638-49bc-bc4a-2110ea3eccd0.jpg',
      './AMC IMAGES/Corporate & Educational/8f2ec489-5962-4b67-9d9b-f7c74f127ace.jpg',
      './AMC IMAGES/Corporate & Educational/90ed39f7-e95e-4b69-b72c-aae606e39b18.jpg',
      './AMC IMAGES/Corporate & Educational/9c0b10e1-a81b-45d8-8230-f76b4bc05af1.jpg',
      './AMC IMAGES/Corporate & Educational/aedde61c-dc2b-478c-a34d-b8da461f2ebb.jpg',
      './AMC IMAGES/Corporate & Educational/b0b4b52c-6468-4296-a8c1-6b9bddb348b5.jpg',
      './AMC IMAGES/Corporate & Educational/c2ed95c3-58ab-4200-99b6-770d812e76d7.jpg',
      './AMC IMAGES/Corporate & Educational/c46a3a29-88de-4564-bafa-fabdabdd3976.jpg',
      './AMC IMAGES/Corporate & Educational/d18e7d24-3fc2-43c1-a2ed-4b7f943a8987.jpg',
      './AMC IMAGES/Corporate & Educational/d29205a3-9b8e-493b-99fa-d90a661f6839.jpg',
      './AMC IMAGES/Corporate & Educational/d6b345c0-3fac-431d-a12d-74f682ec625d.jpg',
      './AMC IMAGES/Corporate & Educational/f3841187-fff4-4759-9922-d85c4ebe71eb.jpg',
    ],
  },
  {
    id: 'hotels',
    title: 'Hotels & PGs',
    icon: 'fa-hotel',
    propertiesBadge: '20+ Properties',
    description: 'Hotels, PGs, serviced residences, hospitality buildings',
    coverImage: './AMC IMAGES/PGs & Hotels/716d6086-f514-4066-92a1-eb9990cc8dbf.jpg',
    images: [
      './AMC IMAGES/PGs & Hotels/06017ec0-d7c4-4496-be47-0e52458cad56.jpg',
      './AMC IMAGES/PGs & Hotels/480a1495-f736-4157-968a-adf0cd6749ab.jpg',
      './AMC IMAGES/PGs & Hotels/716d6086-f514-4066-92a1-eb9990cc8dbf.jpg',
      './AMC IMAGES/PGs & Hotels/95d48d5c-4ab7-4b2a-ba70-4814e4bde788.jpg',
      './AMC IMAGES/PGs & Hotels/997109a3-27b1-4006-a7c5-bd8747c80cc3.jpg',
      './AMC IMAGES/PGs & Hotels/c2719e32-5b3c-4378-972e-ec7c45791c44.jpg',
      './AMC IMAGES/PGs & Hotels/cfd88041-4e0b-4cd0-99a7-f01be1a76a4c.jpg',
      './AMC IMAGES/PGs & Hotels/e2636dce-750e-4571-bbaf-886bff05faf3.jpg',
      './AMC IMAGES/PGs & Hotels/ed0702f3-55a1-48c7-8c3e-619a0a508c93.jpg',
    ],
  },
  {
    id: 'residential',
    title: 'Residential',
    icon: 'fa-house-chimney',
    propertiesBadge: '20+ Properties',
    description: 'Villas, individual residences, independent buildings',
    coverImage: './AMC IMAGES/Residential Properties/4112cd43-89f6-43ba-8a6e-72f071806121.jpg',
    images: [
      './AMC IMAGES/Residential Properties/08d5c78e-5cf1-4462-af5e-c0037a84d4a0.jpg',
      './AMC IMAGES/Residential Properties/0f79003e-80ea-4413-aa21-ff7905537104.jpg',
      './AMC IMAGES/Residential Properties/11c3027c-7574-45b9-bdf7-38266826d8e1.jpg',
      './AMC IMAGES/Residential Properties/1965f8d6-6d0d-4e46-91fa-ee5022a75fe6.jpg',
      './AMC IMAGES/Residential Properties/1d7213ec-9800-4d81-b73e-7c38320f7d2e.jpg',
      './AMC IMAGES/Residential Properties/32d2ad78-6cf2-45b5-b4be-776bed9d6621.jpg',
      './AMC IMAGES/Residential Properties/3afe2e1a-8df9-44dd-a0d3-7ae1c2a87c3f.jpg',
      './AMC IMAGES/Residential Properties/4112cd43-89f6-43ba-8a6e-72f071806121.jpg',
      './AMC IMAGES/Residential Properties/5dda6431-a042-44fd-b100-214b565c6e75.jpg',
      './AMC IMAGES/Residential Properties/5fbdb0e3-1af6-4aba-abc3-a5d04e74cae0.jpg',
      './AMC IMAGES/Residential Properties/61c4d01e-26d2-4df3-b704-4bbbb0c7e8ae.jpg',
      './AMC IMAGES/Residential Properties/6d83197e-d827-458d-bade-db20a65f0e0a.jpg',
      './AMC IMAGES/Residential Properties/6e33a452-0464-4c62-99c3-8818d672563e.jpg',
      './AMC IMAGES/Residential Properties/7120a351-7370-43b8-b474-ff9a0333ecad.jpg',
      './AMC IMAGES/Residential Properties/75fd54ca-2495-4b9e-906e-af68cb2ad1e5.jpg',
      './AMC IMAGES/Residential Properties/7fe44e55-1bce-4130-bd0f-9e3d310dab87.jpg',
      './AMC IMAGES/Residential Properties/86413a97-dc17-4361-8c4f-c9e95dac4d64.jpg',
      './AMC IMAGES/Residential Properties/8b4d9f4b-99df-44bd-8661-fa3451a8e63a.jpg',
      './AMC IMAGES/Residential Properties/92c087a1-682e-410e-b6fa-422352907273.jpg',
      './AMC IMAGES/Residential Properties/9520045d-ef37-4081-9f31-6a7d9dc83b49.jpg',
      './AMC IMAGES/Residential Properties/982af516-0b21-4986-a146-dc3769a280cf.jpg',
      './AMC IMAGES/Residential Properties/9e09878e-a672-475e-8d6b-52fb064b1752.jpg',
      './AMC IMAGES/Residential Properties/a177e83f-e651-4b6b-9e07-00f834aafe23.jpg',
      './AMC IMAGES/Residential Properties/b0ca5546-6b35-4b8a-a381-d819f71002f6.jpg',
      './AMC IMAGES/Residential Properties/b405126f-e9b0-4eba-895a-148009d377a2.jpg',
      './AMC IMAGES/Residential Properties/ba7737e9-8c36-4a1c-983a-0c7fd4999aa3.jpg',
      './AMC IMAGES/Residential Properties/c3464f14-863b-402e-b3de-4b45dac38645.jpg',
      './AMC IMAGES/Residential Properties/c7ee5ee1-e89f-4888-8adc-9e990da36555.jpg',
      './AMC IMAGES/Residential Properties/de85b788-aa01-4823-9cb8-fcd179b30f02.jpg',
      './AMC IMAGES/Residential Properties/e594bf06-f5c8-4a82-a69c-6f0662ec9446.jpg',
      './AMC IMAGES/Residential Properties/e94bfdad-cc37-42c8-9580-e2ef85e07780.jpg',
      './AMC IMAGES/Residential Properties/ea220be7-4fc1-4536-9b67-064d044474f5.jpg',
      './AMC IMAGES/Residential Properties/fad0549d-1746-4a5f-a44a-a6bae2a72269.jpg',
      './AMC IMAGES/Residential Properties/ffb49fc1-2f4c-4ac8-9b71-b80c1050ba73.jpg',
    ],
  },
  {
    id: 'apartments',
    title: 'Apartments & Communities',
    icon: 'fa-building-user',
    propertiesBadge: '40+ Properties',
    description: 'Apartment complexes, gated communities, high-rise buildings',
    coverImage: './AMC IMAGES/Apartments & Communities/1_ap.jpg',
    images: [
      './AMC IMAGES/Apartments & Communities/1_ap.jpg',
      './AMC IMAGES/Apartments & Communities/2_ap.jpg',
      './AMC IMAGES/Apartments & Communities/3_ap.jpg',
      './AMC IMAGES/Apartments & Communities/4_ap.jpg',
      './AMC IMAGES/Apartments & Communities/0411169e-b0cc-4587-9520-e0fb707c74d2.jpg',
      './AMC IMAGES/Apartments & Communities/115e10f7-0aab-4f87-8960-8a5ae54c05c4.jpg',
      './AMC IMAGES/Apartments & Communities/1980a987-57de-43bd-b2a7-18ec9648c46f.jpg',
      './AMC IMAGES/Apartments & Communities/1ae0f282-06ac-4eb6-8634-091ce37c8e71.jpg',
      './AMC IMAGES/Apartments & Communities/1d800257-2d4c-4914-af28-fc4f7a5f1ab8.jpg',
      './AMC IMAGES/Apartments & Communities/20d967b2-ee22-4ef1-82a2-67ec6af00abb.jpg',
      './AMC IMAGES/Apartments & Communities/2ea296a5-858d-456f-a7e0-b93b24e7d764.jpg',
      './AMC IMAGES/Apartments & Communities/2fec06bd-6b9e-456e-a08e-773f54e87abf.jpg',
      './AMC IMAGES/Apartments & Communities/335eba99-43f9-470e-bdc4-0b599248a030.jpg',
      './AMC IMAGES/Apartments & Communities/387cc7f5-5ddd-43d3-9414-2a61f33d2481.jpg',
      './AMC IMAGES/Apartments & Communities/3b53b048-633f-4b34-9500-5b6783efa60a.jpg',
      './AMC IMAGES/Apartments & Communities/42c8b1fc-8a39-4c38-beea-4cb9029a1d70.jpg',
      './AMC IMAGES/Apartments & Communities/68c282f3-9bd7-46d8-9002-df842609f754.jpg',
      './AMC IMAGES/Apartments & Communities/8444a645-372e-4cb6-8250-5f32c736c3e0.jpg',
      './AMC IMAGES/Apartments & Communities/8458ea9f-9f56-4576-889d-b9fdec3a0b77.jpg',
      './AMC IMAGES/Apartments & Communities/87180f2c-0b49-4892-831b-021acb00138d.jpg',
      './AMC IMAGES/Apartments & Communities/8c895ad5-b192-483f-aa0f-b263b1060e3d.jpg',
      './AMC IMAGES/Apartments & Communities/8e0cf16b-0dd9-4f71-a0d2-827fdd9fa233.jpg',
      './AMC IMAGES/Apartments & Communities/915f5f84-146e-4b72-84b8-c7e37c1e9f28.jpg',
      './AMC IMAGES/Apartments & Communities/92461ef0-1a7c-4d09-91d8-1255a8dd9d6d.jpg',
      './AMC IMAGES/Apartments & Communities/9966e35c-c94d-48bf-836a-0a52064d8bd2.jpg',
      './AMC IMAGES/Apartments & Communities/a43cdeea-c901-47f9-be2e-47293b994e99.jpg',
      './AMC IMAGES/Apartments & Communities/a6794df2-2ca9-4eea-a332-00955a41b942.jpg',
      './AMC IMAGES/Apartments & Communities/b1ca2b33-04ed-4e2a-8f93-153b6941714f.jpg',
      './AMC IMAGES/Apartments & Communities/b7b5559f-07a9-472b-a579-9fa9e01649dc.jpg',
      './AMC IMAGES/Apartments & Communities/bb2bd759-260f-47b9-b766-6acd6ae283d5.jpg',
      './AMC IMAGES/Apartments & Communities/d96fb5ef-1ac7-4688-aa1a-9688a63e036f.jpg',
      './AMC IMAGES/Apartments & Communities/da23398a-b74b-4024-ac37-cbf584b380a2.jpg',
      './AMC IMAGES/Apartments & Communities/de283ece-1919-42ac-9629-17097ce158d2.jpg',
      './AMC IMAGES/Apartments & Communities/dfe999be-d616-4fb4-8478-9ad3be15ce35.jpg',
      './AMC IMAGES/Apartments & Communities/e30afb2d-91d4-4ca5-af07-7f9316d10cda.jpg',
      './AMC IMAGES/Apartments & Communities/e682d4d8-87fc-4ce5-a582-28a5d86177ee.jpg',
      './AMC IMAGES/Apartments & Communities/ea2392ca-ad98-4aed-9a77-e1e8ccb027e1.jpg',
      './AMC IMAGES/Apartments & Communities/f402b71b-1730-4cc9-ab5f-87a3c83ec530.jpg',
      './AMC IMAGES/Apartments & Communities/f612babd-b51e-4618-8c75-98248c45f7a6.jpg',
      './AMC IMAGES/Apartments & Communities/faca2569-8cd4-4806-85f6-d9f677ceab3f.jpg',
      './AMC IMAGES/Apartments & Communities/fffb99a1-774f-4e49-a0b9-15dbedc39107.jpg',
    ],
  },
];

export default function ServiceDetail({ serviceKey, fallbackToHome }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(null);

  const srv = SERVICES_DATA[serviceKey];

  const activeCategory = portfolioCategories.find((cat) => cat.id === selectedCategoryKey);
  const activePhotos = activeCategory ? activeCategory.images : [];

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    if (lightboxPhotoIndex !== null && activePhotos.length > 0) {
      setLightboxPhotoIndex((prev) => (prev === 0 ? activePhotos.length - 1 : prev - 1));
    }
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    if (lightboxPhotoIndex !== null && activePhotos.length > 0) {
      setLightboxPhotoIndex((prev) => (prev === activePhotos.length - 1 ? 0 : prev + 1));
    }
  };

  
  // Local scroll-reveal observer to guarantee transitions play when switching services
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (el.classList.contains('scroll-reveal-container')) {
                const children = el.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
                children.forEach((child, i) => {
                  setTimeout(() => {
                    child.classList.add('revealed');
                    child.setAttribute('data-revealed', 'true');
                  }, i * 80);
                });
                el.classList.add('revealed');
                el.setAttribute('data-revealed', 'true');
              } else {
                el.classList.add('revealed');
                el.setAttribute('data-revealed', 'true');
              }
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -10px 0px' }
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

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [serviceKey]);

  if (!srv) {
    if (fallbackToHome) fallbackToHome();
    return null;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const message = formData.get('message');
    
    const whatsappMessage = `*New Service Inquiry - ${srv.title}*\n\n` +
      `*Name:* ${name}\n` +
      `*Mobile:* ${mobile}\n` +
      `*Message:* ${message || 'No additional message'}\n\n` +
      `*Service:* ${srv.title}`;
    
    const whatsappUrl = `https://wa.me/919845071406?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fade-in">
      {/* ── Hero Banner ── */}
      <section className="relative bg-brand-navy text-white overflow-hidden border-b-4 border-brand-blue" style={{minHeight:'400px'}}>

        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_#1a2744_0%,_#080f1e_70%)]" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80')`, mixBlendMode: 'luminosity' }}
        />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_75%_50%,_#1769C2_0%,_transparent_55%)]" />

        {/* Animated elevator shaft lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[6, 12, 88, 94].map((pos, i) => (
            <div key={i} className="absolute top-0 bottom-0" style={{left:`${pos}%`, width:'1px', background:'rgba(23,105,194,0.12)'}} />
          ))}
          <div className="absolute left-0 right-0" style={{height:'1px', background:'linear-gradient(90deg,transparent,rgba(23,105,194,0.35),transparent)', animation:'heroSweep 4s ease-in-out infinite', top:'35%'}} />
          <div className="absolute left-0 right-0" style={{height:'1px', background:'linear-gradient(90deg,transparent,rgba(23,105,194,0.2),transparent)', animation:'heroSweep 4s ease-in-out 2s infinite', top:'70%'}} />
        </div>

        {/* ── SINGLE-COLUMN LAYOUT ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center" style={{minHeight:'400px'}}>

          {/* LEFT: Text Content */}
          <div className="flex flex-col justify-center items-center text-center py-8 lg:py-10 space-y-4">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="w-8 h-0.5 bg-brand-blue rounded-full" />
              <span className="text-brand-blue text-xs font-bold uppercase tracking-[0.25em]">
                Our Services
              </span>
              <div className="w-8 h-0.5 bg-brand-blue rounded-full" />
            </div>

            {/* Title & desc */}
            <div className="space-y-3 w-full max-w-5xl mx-auto px-4">
              <h1 className="font-serif text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                {srv.title}
              </h1>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                {srv.desc}
              </p>
            </div>



            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md">
              {[
                { value: '24/7', label: 'Support' },
                { value: '100%', label: 'Guaranteed' },
                { value: '27+', label: 'Years Exp.' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:border-brand-blue/40 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold text-brand-blue font-serif">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>


          </div>

        </div>

        {/* Bottom gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(23,105,194,0.7),transparent)'}} />
      </section>


      {/* ── INSTALLATION PROCESS - Timeline with Images ── */}
      {serviceKey === 'installation' && srv.process && (
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center scroll-reveal">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                Step by Step
              </h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy">
                Our Installation Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal-container">
              {srv.process.map((p, i) => (
                <div key={i} className="relative scroll-reveal">
                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-brand-blue transition-all hover:shadow-2xl">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg">
                        {i+1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif font-bold text-xl text-brand-navy mb-2">{p.step}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{p.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {srv.types && (
              <div className="pt-12">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-3xl font-bold text-brand-navy">
                    Types of Elevators We Install
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {srv.types.map((t, i) => (
                    <div key={i} className="bg-brand-navy text-white p-6 rounded-2xl text-center shadow-lg hover:bg-slate-800 transition-all">
                      <span className="text-sm font-bold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── INSTALLATION GALLERY & POSTERS SHOWCASE ── */}
      {serviceKey === 'installation' && (
        <section className="py-24 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden border-t-4 border-brand-blue">
          {/* Subtle glowing radial background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(23,105,194,0.15)_0%,_transparent_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto space-y-14 relative z-10">
            <div className="text-center space-y-3 scroll-reveal">
              <span className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                <i className="fa-solid fa-layer-group text-brand-blue" />
                Visual Showcase & Standards
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                Installation Standards & Quality Posters
              </h2>
              <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-medium">
                Explore our engineering benchmarks, cabin interior options, and turnkey elevator installation standards.
              </p>
            </div>

            {/* Poster Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal-container">
              {INSTALLATION_POSTERS.map((poster, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-700 hover:border-brand-blue/80 shadow-xl hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 cursor-pointer flex flex-col scroll-reveal"
                  onClick={() => setSelectedPoster(poster)}
                >
                  {/* Poster Image Container */}
                  <div className="relative h-72 md:h-80 overflow-hidden bg-slate-950">
                    <img
                      loading="lazy"
                      src={getAssetUrl(poster.image)}
                      alt={poster.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-brand-navy/90 border border-brand-blue/40 text-brand-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md">
                      {poster.tag}
                    </div>

                    {/* Expand / View Badge */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-brand-blue-dark transition-all duration-300">
                      <i className="fa-solid fa-magnifying-glass-plus text-xs" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-slate-900/90 backdrop-blur-md">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-white group-hover:text-brand-blue-bright transition-colors duration-300 leading-snug mb-2">
                        {poster.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {poster.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-brand-blue font-semibold">
                      <span>Click to view full poster</span>
                      <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AMC SERVICES - Image Left, Content Right ── */}
      {serviceKey === 'amc' && srv.included && (
        <>
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="scroll-reveal-left lg:sticky lg:top-24">
                  <div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-blue/30 group cursor-pointer"
                    onClick={() => setSelectedPoster({
                      image: './amc.jpeg',
                      title: 'Comprehensive Maintenance',
                      tag: 'AMC Services',
                      desc: 'Regular inspections and preventive care for optimal performance.'
                    })}
                  >
                    <img loading="lazy"
                      src={getAssetUrl("./amc.jpeg")}
                      alt="AMC Services"
                      className="w-full h-[450px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 z-20 pointer-events-none">
                      <span className="bg-brand-navy/90 text-brand-blue border border-brand-blue/30 rounded-xl px-4 py-2 text-xs font-bold shadow-lg pointer-events-auto">
                        <i className="fa-solid fa-magnifying-glass-plus mr-1"></i> View Full Image
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 bg-brand-blue text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg animate-bounce-soft">
                      24/7 Support
                    </div>
                    
                    {/* Bottom info overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl">
                      <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">Comprehensive Maintenance</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">Regular inspections and preventive care for optimal performance</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 scroll-reveal-right">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                      Comprehensive Coverage
                    </h3>
                    <h2 className="font-serif text-4xl font-bold mb-4 text-brand-navy">
                      Services Included in AMC
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {srv.included.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-2 border-slate-100 hover:border-brand-blue transition-all">
                        <i className="fa-solid fa-circle-check text-green-500 shrink-0 text-lg" />
                        <span className="text-sm font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Choose Your Plan
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  AMC Plans
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
                {srv.plans.map((p, i) => (
                  <div key={i} className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-white/10 hover:border-brand-blue transition-all scroll-reveal hover:translate-y-[-8px]">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue text-3xl mb-6">
                      <i className="fa-solid fa-handshake" />
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-brand-navy mb-4">{p.name}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-8">{p.desc}</p>
                    <a href="#/quote" className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-bold py-4 rounded-xl uppercase tracking-wider transition">
                      Inquire Plan
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── LONG-TERM AMC RELATIONSHIPS / CLIENT PORTFOLIO SECTION ── */}
          <section className="py-20 px-4 md:px-8 bg-white border-b border-slate-200 relative overflow-hidden">
            {/* Subtle luxury backdrop pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#0B2545_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                <div className="flex items-center justify-center gap-3 text-brand-blue text-xs font-bold uppercase tracking-[0.25em]">
                  <span className="h-px w-8 bg-brand-blue/60 inline-block"></span>
                  <span>Long-Term AMC Relationships</span>
                  <span className="h-px w-8 bg-brand-blue/60 inline-block"></span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
                  OUR AMC CLIENT PORTFOLIO
                </h2>
                <p className="text-slate-600 text-sm md:text-base font-medium">
                  Maintaining elevators for businesses, hotels, homes and residential communities across Bengaluru.
                </p>
              </div>

              {/* Description Highlight Card */}
              <div className="bg-gradient-to-r from-brand-navy via-slate-800 to-brand-navy text-white rounded-2xl p-6 md:p-8 mb-12 border border-brand-blue/30 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_rgba(23,105,194,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
                <div className="max-w-3xl space-y-2 relative z-10">
                  <span className="text-brand-blue font-semibold text-xs uppercase tracking-widest flex items-center gap-2">
                    <i className="fa-solid fa-shield-heart text-brand-blue"></i> Reliable Elevator Maintenance Across Diverse Properties
                  </span>
                  <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
                    We proudly maintain elevators for corporate, educational, hospitality, residential, and apartment properties. Our long-term AMC relationships reflect our commitment to reliable service and consistent maintenance.
                  </p>
                </div>
              </div>

              {/* 4 Category Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioCategories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategoryKey(cat.id);
                      setLightboxPhotoIndex(null);
                    }}
                    className="group relative bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-brand-blue/60 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col overflow-hidden card-hover"
                  >
                    {/* Cover Image Container */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      <img
                        src={getAssetUrl(cat.coverImage)}
                        alt={cat.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent"></div>
                      
                      {/* Photo Count Badge */}
                      <div className="absolute top-3 right-3 bg-brand-navy/85 backdrop-blur-md border border-brand-blue/40 text-brand-blue text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <i className="fa-solid fa-images text-[10px]"></i>
                        <span>{cat.images.length} Photos</span>
                      </div>

                      {/* Building Icon */}
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-lg font-bold text-lg">
                        <i className={`fa-solid ${cat.icon}`}></i>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-serif font-bold text-lg text-brand-navy group-hover:text-brand-blue-bright transition-colors duration-200">
                          {cat.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                        <span className="inline-block bg-brand-blue/10 border border-brand-blue/30 text-brand-navy text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                          ⚡ {cat.propertiesBadge}
                        </span>
                        <span className="text-brand-blue text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200">
                          View Gallery <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Stat Highlight Badge */}
              <div className="mt-14 text-center">
                <div className="inline-flex items-center gap-3 bg-slate-900 text-white border-2 border-brand-blue px-6 py-3 rounded-full shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-ping"></span>
                  <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-brand-blue uppercase">
                    100+ PROPERTIES • MONTHLY AMC SERVICE
                  </span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}


      {/* ── MODERNIZATION - Content Left, Image Right ── */}
      {serviceKey === 'modernization' && srv.services && (
        <>
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8 scroll-reveal-left">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                      Upgrade Solutions
                    </h3>
                    <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                      Modernization Upgrades We Offer
                    </h2>
                  </div>
                  
                  <div className="space-y-3">
                    {srv.services.map((item, i) => {
                      const icon = SERVICE_ICONS[item] || 'fa-screwdriver-wrench';
                      return (
                        <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border-2 border-slate-100 hover:border-brand-blue transition-all">
                          <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-blue shrink-0">
                            <i className={`fa-solid ${icon} text-lg`} />
                          </div>
                          <span className="text-sm font-bold text-brand-navy">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="scroll-reveal-right lg:sticky lg:top-24">
                  <div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                    onClick={() => setSelectedPoster({
                      image: './modernization.jpeg',
                      title: 'Advanced Technology',
                      tag: 'Modernization',
                      desc: 'Modern components and systems for enhanced performance.'
                    })}
                  >
                    <img loading="lazy"
                      src={getAssetUrl("./modernization.jpeg")}
                      alt="Modernization"
                      className="w-full h-[450px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 z-20 pointer-events-none">
                      <span className="bg-brand-navy/90 text-brand-blue border border-brand-blue/30 rounded-xl px-4 py-2 text-xs font-bold shadow-lg pointer-events-auto">
                        <i className="fa-solid fa-magnifying-glass-plus mr-1"></i> View Full Image
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-6 right-6 bg-brand-blue text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg animate-bounce-soft">
                      Premium Service
                    </div>
                    
                    {/* Bottom info overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl">
                      <h4 className="font-serif font-bold text-lg text-brand-navy mb-2">Advanced Technology</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">Modern components and systems for enhanced performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Why Upgrade
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  Key Benefits of Upgrading
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
                {srv.benefits.map((b, i) => {
                  const icon = BENEFIT_ICONS[b] || 'fa-circle-check';
                  const detail = BENEFIT_DETAILS[b] || '';
                  return (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-white/10 hover:border-brand-blue transition-all scroll-reveal hover:translate-y-[-4px]">
                      <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue text-2xl mb-5">
                        <i className={`fa-solid ${icon}`} />
                      </div>
                      <h4 className="font-serif font-bold text-xl text-brand-navy mb-3">{b}</h4>
                      {detail && <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── REPAIR SERVICES - Grid with Emergency Banner ── */}
      {serviceKey === 'repair' && srv.services && (
        <>
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Expert Solutions
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  Repair Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
                {srv.services.map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 hover:border-brand-blue transition-all scroll-reveal">
                    <div className="flex items-center gap-4">
                      <i className="fa-solid fa-screwdriver text-brand-blue text-xl shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative py-20 px-4 md:px-8 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 to-red-800/90" />
            
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6 animate-pulse">
                <i className="fa-solid fa-truck-medical" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                24/7 Emergency Support
              </h2>
              <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
                {srv.emergency}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <a href="#/contact" className="bg-white hover:bg-slate-100 text-red-900 font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
                  <i className="fa-solid fa-phone mr-2" />
                  Emergency Call
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── LICENSING & RENEWALS SERVICE ── */}
      {serviceKey === 'licensing' && srv.services && (
        <>
          {/* Services Grid Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Our Services
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  Complete Elevator Licensing & Renewal Support
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal-container">
                {srv.services.map((service, i) => {
                  const detail = srv.serviceDetails[service] || '';
                  return (
                    <div key={i} className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-brand-blue transition-all scroll-reveal hover:translate-y-[-4px] shadow-xl group">
                      <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue text-2xl mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        <i className="fa-solid fa-file-lines" />
                      </div>
                      <h4 className="font-serif font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-blue-bright transition-colors">{service}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Why Choose Us
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  Why Choose Digitech Elevators?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal-container">
                {srv.whyChoose.map((reason, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-xl transition-all scroll-reveal hover:translate-y-[-4px] group hover:shadow-2xl">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue text-xl mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-brand-navy group-hover:text-brand-blue-bright transition-colors">{reason}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Who We Serve
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy">
                  Industries We Serve
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal-container">
                {srv.industries.map((industry, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl text-center border-2 border-slate-200 hover:border-brand-blue transition-all scroll-reveal hover:shadow-lg group">
                    <span className="text-sm font-bold text-brand-navy group-hover:text-brand-blue-bright transition-colors">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center scroll-reveal">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Common Questions
                </h3>
                <h2 className="font-serif text-4xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4 scroll-reveal-container">
                {srv.faqs.map((faq, i) => (
                  <details key={i} className="bg-white p-6 rounded-2xl border-2 border-white/10 hover:border-brand-blue transition-all scroll-reveal group">
                    <summary className="font-serif font-bold text-lg text-brand-navy cursor-pointer flex items-center justify-between group-hover:text-brand-blue-bright transition-colors">
                      {faq.question}
                      <i className="fa-solid fa-chevron-down text-brand-blue group-open:rotate-180 transition-transform" />
                    </summary>
                    <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-200">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="relative py-20 px-4 md:px-8 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-slate-900/90" />
            
            {/* Animated vertical lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              {[20, 50, 80].map(pos => (
                <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-blue animate-pulse" style={{ left: `${pos}%` }} />
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
              <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue text-4xl mx-auto mb-6 animate-bounce-soft">
                <i className="fa-solid fa-file-contract" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                Need Assistance with Licensing or Renewal?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                Our experts are ready to help you with documentation, inspections, and statutory compliance. Contact Digitech Elevators today for professional Licensing & Renewal Services.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <a href="#contact-form" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
                  <i className="fa-solid fa-phone mr-2" />
                  Contact Us Now
                </a>
                <a href="#/quote" className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
                  <i className="fa-solid fa-calculator mr-2" />
                  Get Free Quote
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── CONTACT FORM - Split Layout ── */}
      <section id="contact-form" className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-reveal-left">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
                  Get Started
                </h3>
                <h2 className="font-serif text-4xl font-bold text-brand-navy mb-4">
                  Need Professional Elevator Solutions?
                </h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether you require a new installation, modernization, AMC, or emergency repairs, Digitech Elevators is ready to deliver safe, reliable, and customized elevator solutions.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue text-xl">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Call Us</div>
                    <div className="text-sm font-bold text-brand-navy">+91 98450 71406</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 text-xl">
                    <i className="fa-brands fa-whatsapp" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">WhatsApp</div>
                    <div className="text-sm font-bold text-brand-navy">Available 24/7</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 text-xl">
                    <i className="fa-solid fa-clock" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase">Emergency</div>
                    <div className="text-sm font-bold text-brand-navy">24/7 Response</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal-right">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-slate-100">
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-6">Request Consultation</h3>
                
                {formSubmitted ? (
                  <div className="text-center py-12 animate-zoom-in">
                    <i className="fa-solid fa-circle-check text-6xl text-green-500 mb-6 animate-bounce block" />
                    <h4 className="font-serif font-bold text-2xl mb-3 text-brand-navy">Request Received!</h4>
                    <p className="text-slate-600">We'll contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                      <input 
                        type="text"
                        name="name" 
                        placeholder="Enter your name" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-blue transition" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                      <input 
                        type="tel"
                        name="mobile" 
                        placeholder="Enter mobile number" 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-blue transition" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                      <textarea 
                        rows="4"
                        name="message" 
                        placeholder="Describe your building parameters..." 
                        className="w-full border-2 border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-blue transition"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest transition shadow-lg hover:shadow-2xl hover:scale-105">
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA - Full Width Background ── */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/90 to-transparent" />
        
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[20, 50, 80].map(pos => (
            <div key={pos} className="absolute top-0 bottom-0 w-px bg-brand-blue animate-pulse" style={{ left: `${pos}%` }} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Start Your Service Request Today
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Contact us for expert elevator services and discover professional solutions for your building
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#/quote" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-2xl">
              <i className="fa-solid fa-calculator mr-2" />
              Free Quote
            </a>
            <a href="#/contact" className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-8 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all hover:scale-105">
              <i className="fa-solid fa-phone mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPoster && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-brand-navy/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-brand-blue text-white hover:text-white border border-white/20 flex items-center justify-center text-xl transition-all duration-300 shadow-2xl"
            onClick={() => setSelectedPoster(null)}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[90vh] w-full bg-slate-900 rounded-3xl border-2 border-brand-blue/40 shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-black flex items-center justify-center p-4">
              <img
                loading="lazy"
                src={getAssetUrl(selectedPoster.image)}
                alt={selectedPoster.title}
                className="max-h-[75vh] w-full object-contain rounded-xl shadow-lg"
              />
            </div>

            <div className="md:w-2/5 p-8 flex flex-col justify-between text-white space-y-6 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800">
              <div className="space-y-4">
                <span className="inline-block bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedPoster.tag}
                </span>
                <h3 className="font-serif font-bold text-2xl text-white leading-tight">
                  {selectedPoster.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedPoster.desc}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800">
                <a
                  href="#/quote"
                  onClick={() => setSelectedPoster(null)}
                  className="block text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-lg btn-glow"
                >
                  Request Installation Quote
                </a>
                <button
                  onClick={() => setSelectedPoster(null)}
                  className="w-full text-center text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ── AMC PORTFOLIO GALLERY MODAL (NO REDIRECTION) ── */}
      {selectedCategoryKey && createPortal(
        <div
          className="fixed inset-0 z-[9990] bg-brand-navy/80 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-fade-in overflow-y-auto"
          onClick={() => {
            setSelectedCategoryKey(null);
            setLightboxPhotoIndex(null);
          }}
        >
          <div
            className="bg-white max-w-6xl w-full mx-auto rounded-2xl border border-slate-300 shadow-2xl flex flex-col my-auto max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header & Category Tabs */}
            <div className="p-4 md:p-6 bg-slate-900 text-white flex flex-col gap-4 border-b border-brand-blue/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                    <i className={`fa-solid ${activeCategory?.icon}`}></i>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] font-medium tracking-wide block">
                      Digitech AMC Portfolio • Real Client Installations in Bengaluru
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-blue">
                      {activeCategory?.title}
                    </h3>
                    <p className="text-slate-400 text-xs">
                      {activePhotos.length} Property Photos • {activeCategory?.propertiesBadge}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategoryKey(null);
                    setLightboxPhotoIndex(null);
                  }}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white text-slate-300 flex items-center justify-center transition-colors duration-200"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                {portfolioCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategoryKey(cat.id);
                      setLightboxPhotoIndex(null);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                      cat.id === selectedCategoryKey
                        ? 'bg-brand-blue text-white shadow-md scale-105'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <i className={`fa-solid ${cat.icon}`}></i>
                    <span>{cat.title}</span>
                    <span className="opacity-75 font-mono">({cat.images.length})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Body: Responsive Image Grid */}
            <div className="p-4 md:p-6 overflow-y-auto max-h-[65vh] bg-slate-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {activePhotos.map((imgSrc, index) => (
                  <div
                    key={index}
                    onClick={() => setLightboxPhotoIndex(index)}
                    className="group relative h-40 rounded-xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-200 shadow-sm hover:shadow-lg hover:border-brand-blue transition-all duration-300"
                  >
                    <img
                      src={getAssetUrl(imgSrc)}
                      alt={`AMC Property ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-8 h-8 rounded-full bg-brand-navy/90 text-brand-blue border border-brand-blue/40 flex items-center justify-center text-xs">
                        <i className="fa-solid fa-expand"></i>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ── SINGLE PHOTO LIGHTBOX INSPECTOR (INSIDE GALLERY MODAL) ── */}
      {lightboxPhotoIndex !== null && activePhotos[lightboxPhotoIndex] && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 animate-fade-in"
          onClick={() => setLightboxPhotoIndex(null)}
        >
          {/* Lightbox Header */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white py-2">
            <div className="flex items-center gap-3">
              <span className="bg-brand-blue/20 border border-brand-blue/40 text-brand-blue text-xs px-3 py-1 rounded-full font-bold">
                {activeCategory?.title}
              </span>
              <span className="text-slate-400 text-xs font-mono">
                Photo {lightboxPhotoIndex + 1} of {activePhotos.length}
              </span>
            </div>

            <button
              onClick={() => setLightboxPhotoIndex(null)}
              className="text-white hover:text-brand-blue text-2xl transition duration-200 px-3 py-1"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Lightbox Main Image & Prev/Next Nav */}
          <div
            className="relative max-w-5xl w-full flex-grow flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrevPhoto}
              className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full bg-brand-navy/80 border border-brand-blue/40 text-brand-blue flex items-center justify-center hover:bg-brand-blue hover:text-white transition duration-200 shadow-xl"
              title="Previous Photo"
            >
              <i className="fa-solid fa-chevron-left text-lg"></i>
            </button>

            <img
              src={getAssetUrl(activePhotos[lightboxPhotoIndex])}
              alt={`AMC Property Photo ${lightboxPhotoIndex + 1}`}
              className="max-h-[80vh] max-w-full object-contain rounded-xl border border-slate-800 shadow-2xl"
            />

            <button
              onClick={handleNextPhoto}
              className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full bg-brand-navy/80 border border-brand-blue/40 text-brand-blue flex items-center justify-center hover:bg-brand-blue hover:text-white transition duration-200 shadow-xl"
              title="Next Photo"
            >
              <i className="fa-solid fa-chevron-right text-lg"></i>
            </button>
          </div>

          {/* Lightbox Footer */}
          <div className="text-slate-400 text-xs py-2 text-center">
            Use Left/Right controls or click outside to return to category grid.
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
