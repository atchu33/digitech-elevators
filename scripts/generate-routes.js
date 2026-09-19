import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf8');

const routes = [
  { path: 'about', title: 'About Us | Digitech Elevators Bangalore', desc: 'Over 27+ years of engineering excellence in elevator installation, maintenance, and modernization in Bangalore.' },
  { path: 'amc', title: 'Elevator AMC Plans & Maintenance | Digitech Elevators', desc: 'Comprehensive & Non-Comprehensive Elevator AMC maintenance contracts across Bangalore. 24/7 breakdown assistance.' },
  { path: 'contact', title: 'Contact Digitech Elevators | 24/7 Breakdown Support Bangalore', desc: 'Contact Digitech Elevators in RT Nagar, Bangalore. Call +91 98450 71406 for rapid breakdown support and sales enquiries.' },
  { path: 'quote', title: 'Get an Elevator Quote | Digitech Elevators Bangalore', desc: 'Request a customized quote for elevator installation, AMC maintenance, or modernization.' },
  { path: 'projects', title: 'Elevator Projects Portfolio | Digitech Elevators Bangalore', desc: 'Explore completed elevator installations across residential apartments, hospitals, commercial complexes, and villas.' },
  { path: 'gallery', title: 'Elevator Gallery & Finishes | Digitech Elevators', desc: 'View cabin interior finishes, stainless steel panels, automatic doors, and modern elevator designs.' },
  { path: 'faq', title: 'Frequently Asked Questions | Digitech Elevators', desc: 'Find answers to common questions about elevator installations, safety standards, AMC plans, and maintenance costs.' },
  { path: 'careers', title: 'Careers & Job Openings | Digitech Elevators Bangalore', desc: 'Join the Digitech Elevators engineering team. Exciting career opportunities for lift technicians and engineers.' },
  
  // Services
  { path: 'services/installation', title: 'Elevator Installation Services | Digitech Elevators', desc: 'Turnkey elevator installation for passenger, hospital, goods, and residential lifts in Bangalore.' },
  { path: 'services/amc', title: 'Annual Maintenance Contract (AMC) | Digitech Elevators', desc: 'Proactive 45-point monthly maintenance, 24/7 emergency breakdown support, and safety audits.' },
  { path: 'services/modernization', title: 'Elevator Modernization & Upgrades | Digitech Elevators', desc: 'Upgrade obsolete elevator controllers, VVVF drives, door systems, and cabin aesthetics.' },
  { path: 'services/repair', title: 'Elevator Repair & Emergency Breakdown | Digitech Elevators', desc: '24/7 rapid breakdown response team with original OEM spares and certified technicians.' },
  { path: 'services/licensing', title: 'Elevator Licensing & Statutory Compliance | Digitech Elevators', desc: 'End-to-end statutory government inspection, elevator license renewal, and CEIG approvals.' },

  // Products
  { path: 'products/passenger', title: 'Passenger Elevators | Digitech Elevators', desc: 'Smooth, whisper-quiet passenger elevators with VVVF gearless technology for apartments and commercial spaces.' },
  { path: 'products/home', title: 'Home & Residential Lifts | Digitech Elevators', desc: 'Custom compact home lifts with minimal civil changes, single-phase power, and panoramic glass options.' },
  { path: 'products/villa', title: 'Luxury Villa Elevators | Digitech Elevators', desc: 'Customized luxury villa lifts with Italian design aesthetics, glass shafts, and silent gearless drives.' },
  { path: 'products/hospital', title: 'Hospital & Stretcher Elevators | Digitech Elevators', desc: 'Jerk-free, spacious stretcher elevators with priority emergency medical override controls.' },
  { path: 'products/commercial', title: 'Commercial Elevators | Digitech Elevators', desc: 'High-speed heavy traffic elevators engineered for corporate offices, tech parks, and shopping malls.' },
  { path: 'products/goods', title: 'Goods & Freight Lifts | Digitech Elevators', desc: 'Heavy-duty industrial goods elevators designed for factories, warehouses, and logistics hubs.' },
  { path: 'products/hydraulic', title: 'Hydraulic Elevators | Digitech Elevators', desc: 'Pitto-free, low-headroom hydraulic lifts perfect for residential homes and retrofits.' },
  { path: 'products/mrl', title: 'MRL Gearless Elevators | Digitech Elevators', desc: 'Machine-Room-Less gearless elevators saving top terrace space with 40% energy savings.' },
  { path: 'products/capsule', title: 'Capsule & Panoramic Elevators | Digitech Elevators', desc: 'Aesthetic panoramic glass capsule elevators providing stunning views in malls and luxury hotels.' },
  { path: 'products/car', title: 'Car & Automobile Elevators | Digitech Elevators', desc: 'Rugged automobile lifts for multi-level parking lots, showrooms, and residential basements.' },
  { path: 'products/dumbwaiter', title: 'Dumbwaiter & Service Lifts | Digitech Elevators', desc: 'Compact food and service lifts for restaurants, hotels, hospitals, and residential pantries.' },

  // Legal
  { path: 'legal/privacy', title: 'Privacy Policy | Digitech Elevators', desc: 'Privacy Policy and data protection commitments of Digitech Elevators.' },
  { path: 'legal/terms', title: 'Terms of Service | Digitech Elevators', desc: 'Terms and conditions governing elevator supply, maintenance contracts, and services.' },
];

console.log(`Generating static HTML entry points for ${routes.length} routes...`);

for (const route of routes) {
  const routeDir = path.join(distDir, route.path);
  fs.mkdirSync(routeDir, { recursive: true });

  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace canonical URL
  const canonicalUrl = `https://www.digitechelevator.com/${route.path}`;
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace Meta Description
  html = html.replace(/<meta name="description"\s+content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);

  // Replace OpenGraph tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  const targetFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
}

console.log('Successfully generated all route HTML entry points!');
