// Products Configuration Data
export const PRODUCTS_DATA = {
  passenger: {
    title: 'Passenger Lift',
    bannerTitle: 'Passenger Elevators',
    bannerSubtitle: 'Safe • Comfortable • Energy Efficient',
    icon: 'fa-users',
    image: './passenger_lift.png',
    desc: 'Digitech Passenger Elevators are designed to provide smooth, safe, and reliable vertical transportation for residential, commercial, and institutional buildings. Built with advanced technology and premium components, our elevators ensure superior ride quality, energy efficiency, and long-term performance.',
    apps: ['Apartments', 'Office Buildings', 'Shopping Malls', 'Hotels', 'Educational Institutions', 'Commercial Complexes'],
    features: ['VVVF Drive Technology', 'Automatic Rescue Device (ARD)', 'Energy-Efficient Operation', 'Smooth & Silent Performance', 'Stainless Steel Cabin', 'Automatic Doors', 'LED Lighting', 'Digital Display', 'Emergency Alarm', 'Advanced Safety System'],
    caps: ['4 Passenger', '6 Passenger', '8 Passenger', '10 Passenger', '13 Passenger', 'Custom Sizes Available'],
    specs: {
      'Capacity': '320 kg to 1000 kg',
      'Speed': '0.5 m/s to 1.75 m/s',
      'Travel Height': 'Up to 60 meters',
      'Number of Stops': 'Up to 20 stops',
      'Door Type': 'Automatic Center Opening / Telescopic',
      'Cabin Finish': 'Stainless Steel Hairline / Mirror / Gold etching',
      'Machine Type': 'Gearless PMSM / Geared Traction',
      'Controller': '32-Bit Microprocessor Controller'
    },
    whyChoose: ['Premium Quality Components', 'Safe & Reliable', 'Low Maintenance', 'Customized Design', 'Professional Installation'],
    gallery: [
      { url: './passenger3.png', caption: 'Modern Passenger Cabin Interior' },
      { url: './passenger4.png', caption: 'Stainless Steel Cabin Finish' },
      { url: './passenger5.png', caption: 'Commercial Building Installation' },
      { url: './passenger6.png', caption: 'Apartment Elevator System' },
    ]
  },
  hospital: {
    title: 'Hospital Lift',
    bannerTitle: 'Hospital & Stretcher Elevators',
    bannerSubtitle: 'Designed for Safe and Smooth Patient Transportation',
    icon: 'fa-bed-pulse',
    image: './hospital_lift.png',
    desc: 'Digitech Hospital Elevators are specially engineered for hospitals and healthcare facilities. They provide vibration-free operation with spacious cabins to safely transport patients, stretchers, wheelchairs, and medical equipment.',
    apps: ['Hospitals', 'Clinics', 'Medical Colleges', 'Healthcare Centres'],
    features: ['Large Cabin Size', 'Stretcher Compatible', 'Smooth Ride', 'Automatic Doors', 'Anti-Bacterial Cabin Finish', 'Emergency Operation', 'Battery Backup', 'Silent Operation'],
    caps: ['13 Passenger', '15 Passenger', '20 Passenger', 'Custom Capacity'],
    specs: {
      'Cabin Size': 'Deep cabin layout (typically 1600mm x 2400mm)',
      'Door Width': '1200mm to 1400mm telescopic opening',
      'Speed': '0.5 m/s to 1.5 m/s',
      'Stops': 'Up to 15 stops',
      'Machine Type': 'PMSM Gearless / Geared Traction',
      'Controller': '32-Bit Microprocessor with stretcher priority logic'
    },
    whyChoose: ['Patient Comfort', 'Safe Transportation', 'Reliable Performance', 'Easy Maintenance'],
    gallery: [
      { url: './hospital4.png', caption: 'Hospital Elevator Lobby' },
      { url: './hospital6.png', caption: 'Patient Transport System' },
      { url: './hospital5.png', caption: 'Healthcare Facility Lift' },
      { url: './hospital7.png', caption: 'Wide Door Stretcher Cabin' },
    ]
  },
  goods: {
    title: 'Goods Lift',
    bannerTitle: 'Goods Elevators',
    bannerSubtitle: 'Heavy-Duty Material Handling Solutions',
    icon: 'fa-truck-ramp-box',
    image: './goods_lift.png',
    desc: 'Digitech Goods Elevators are designed for safe and efficient transportation of heavy goods in factories, warehouses, commercial buildings, and industrial facilities.',
    apps: ['Factories', 'Warehouses', 'Industries', 'Shopping Centres', 'Logistics Facilities'],
    features: ['Heavy Duty Construction', 'High Load Capacity', 'Durable Platform', 'Reliable Operation', 'Low Maintenance', 'Industrial Safety Features'],
    caps: ['500 kg', '1000 kg', '2000 kg', '3000 kg', 'Custom Capacity'],
    specs: {
      'Structure': 'Reinforced steel columns and platform beams',
      'Loading Class': 'Class A, B, or C industrial loading options',
      'Speed': '0.25 m/s to 0.75 m/s',
      'Stops': 'Up to 10 stops',
      'Door Type': 'Manual Collapsible Gate / Automatic Bi-parting doors',
      'Machine Type': 'Geared Traction / Heavy duty hydraulic piston'
    },
    whyChoose: ['High Durability', 'Efficient Material Handling', 'Long Service Life'],
    gallery: [
      { url: './goods4.png', caption: 'Industrial Goods Elevator' },
      { url: './goods5.png', caption: 'Warehouse Freight Lift' },
      { url: './goods6.png', caption: 'Heavy Load Platform' },
      { url: './goods7.png', caption: 'Commercial Goods Transport' },
    ]
  },
  home: {
    title: 'Home Elevator',
    bannerTitle: 'Home Elevators',
    bannerSubtitle: 'Luxury, Comfort & Accessibility',
    icon: 'fa-house-chimney',
    image: './home_lift.png',
    desc: 'Digitech Home Elevators provide a stylish, compact, and safe mobility solution for villas, duplex homes, and private residences, enhancing convenience and accessibility.',
    apps: ['Villas', 'Duplex Houses', 'Bungalows', 'Private Homes'],
    features: ['Compact Design', 'Quiet Operation', 'Elegant Interiors', 'Automatic Doors', 'Energy Efficient', 'Low Power Consumption', 'Space Saving'],
    caps: ['2 Passenger', '4 Passenger', '6 Passenger'],
    specs: {
      'Required Pit': '100mm to 200mm (no deep pit required)',
      'Power Supply': 'Single-phase 220V standard home socket',
      'Internal Finish': 'Panoramic Glass / Wooden cabin finish / Gold cladding',
      'Speed': '0.2 m/s to 0.4 m/s'
    },
    whyChoose: ['Luxury Appearance', 'Easy Installation', 'Safe Operation', 'Adds Property Value'],
    gallery: [
      { url: './homelift4.png', caption: 'Luxury Villa Interior' },
      { url: './homelift5.png', caption: 'Home Elevator Glass Cabin' },
      { url: './homelift6.png', caption: 'Residential Lift Installation' },
      { url: './homelift7.png', caption: 'Premium Home Mobility' },
    ]
  },
  hydraulic: {
    title: 'Hydraulic Lift',
    bannerTitle: 'Hydraulic Elevators',
    bannerSubtitle: 'Powerful Performance for Low-Rise Buildings',
    icon: 'fa-oil-can',
    image: './hydraulic_lift.png',
    desc: 'Digitech Hydraulic Elevators are ideal for low-rise buildings where smooth operation, reliability, and high lifting capacity are required.',
    apps: ['Villas', 'Hospitals', 'Industrial Buildings', 'Commercial Buildings'],
    features: ['Smooth Ride', 'Heavy Load Capacity', 'Quiet Operation', 'Low Maintenance', 'Compact Machine Room'],
    caps: ['Residential', 'Commercial', 'Industrial'],
    specs: {
      'Lifting System': 'Hydraulic cylinder with proportional valve group',
      'Descent': 'Gravity assisted (zero energy consumption during down runs)',
      'Machine Location': 'Compact cabinet anywhere within 10 meters of shaft'
    },
    whyChoose: ['Reliable Operation', 'Cost Effective', 'Long Service Life'],
    gallery: [
      { url: './hydraulic4.png', caption: 'Hydraulic Lift Mechanism' },
      { url: './hydraulic5.png', caption: 'Low-Rise Building Lift' },
      { url: './hydraulic7.png', caption: 'Hydraulic System Installation' },
      { url: './hydraulic6.png', caption: 'Commercial Hydraulic Elevator' },
    ]
  },
  mrl: {
    title: 'Machine Room Less Lift',
    bannerTitle: 'Machine Room Less Elevators',
    bannerSubtitle: 'Modern Technology. Maximum Space Saving.',
    icon: 'fa-microchip',
    image: './mrl_lift.png',
    desc: 'Digitech Machine Room Less (MRL) Elevators eliminate the need for a separate machine room, making them an ideal choice for modern buildings where space optimization and energy efficiency are priorities.',
    apps: ['Apartments', 'Office Buildings', 'Hotels', 'Commercial Buildings', 'Residential Projects'],
    features: ['No Machine Room Required', 'Gearless Traction Technology', 'Energy Efficient', 'Silent Operation', 'Compact Design', 'Low Maintenance', 'Eco-Friendly'],
    caps: ['4 Passenger', '6 Passenger', '8 Passenger', '10 Passenger', 'Custom Configurations'],
    specs: {
      'Motor Unit': 'Synchronous Gearless Permanent Magnet motor placed inside hoistway',
      'Efficiency': '95% mechanical efficiency (saves up to 40% power)',
      'Travel speed': '1.0 m/s to 1.75 m/s'
    },
    whyChoose: ['Saves Building Space', 'Reduced Construction Cost', 'Lower Energy Consumption', 'Modern Appearance', 'High Performance'],
    gallery: [
      { url: './mrl4.png', caption: 'MRL Elevator Shaft Design' },
      { url: './mrl5.png', caption: 'Modern Apartment MRL Lift' },
      { url: './mrl6.png', caption: 'Space-Saving MRL System' },
      { url: './mrl7.png', caption: 'Energy Efficient MRL Elevator' },
    ]
  },
  villa: {
    title: 'Villa Lift',
    bannerTitle: 'Villa Lifts',
    bannerSubtitle: 'Luxury & Accessibility for Modern Villas',
    icon: 'fa-house-chimney-window',
    image: './villa_lift.png',
    desc: 'Digitech Villa Lifts offer the ultimate luxury and accessibility for high-end residential villas, combining premium craftsmanship with whisper-soft operations.',
    apps: ['Villas', 'Bungalows', 'Row Houses', 'Luxury Residences'],
    features: ['Quiet Hydraulic / Traction Drives', 'No Headroom / Low Pit Options', 'Custom Decorative Glass Cabins', 'Touch Panel Interfaces', 'Automatic Rescue Devices'],
    caps: ['3 Passenger', '5 Passenger', 'Custom Capacity'],
    specs: {
      'Lifting System': 'Hydraulic or Gearless Belt Drive',
      'Pit Depth': 'Minimum 100mm required',
      'Cabin Accent': 'Premium wood veneer, gold sheets, or panoramic glass',
      'Controller': 'Microprocessor-based low-noise controller'
    },
    whyChoose: ['Elegant Visual Appeal', 'Space-Saving Shaft Design', 'Whisper Quiet Operation'],
    gallery: [
      { url: './villa4.png', caption: 'Villa Luxury Cabin' },
      { url: './villa5.png', caption: 'Panoramic Glass Villa Lift' },
      { url: './villa6.png', caption: 'High-End Residential Elevator' },
      { url: './villa7.png', caption: 'Custom Wood Cabin Finish' },
    ]
  },
  commercial: {
    title: 'Commercial Lift',
    bannerTitle: 'Commercial Lifts',
    bannerSubtitle: 'High-Speed mobility for Commercial Spaces',
    icon: 'fa-building',
    image: './commercial_lift.png',
    desc: 'Digitech Commercial Lifts are high-capacity, high-traffic vertical transit systems engineered for offices, malls, corporate buildings, and public spaces.',
    apps: ['Corporate Offices', 'Shopping Complexes', 'Hotels', 'Public Infrastructure', 'Tech Parks'],
    features: ['High-Speed Traffic Control Grouping', 'Heavy-Duty Cabin Suspensions', 'Touchless Call Registration', 'Smart Display Integration', 'Advanced Double-Door Configurations'],
    caps: ['10 Passenger', '13 Passenger', '16 Passenger', '20 Passenger'],
    specs: {
      'Speed': '1.0 m/s to 2.5 m/s',
      'Group Operations': 'Duplex / Triplex / Quadruplex integration',
      'Door Systems': 'Broad side-opening or center-opening doors',
      'Traffic Logic': 'Peak traffic distribution controls'
    },
    whyChoose: ['Handles High Peak Traffic', 'Maximum System Up-Time', 'Low Energy Footprint'],
    gallery: [
      { url: './commercial4.png', caption: 'Corporate Office Elevator' },
      { url: './commercial5.png', caption: 'Shopping Mall Lift System' },
      { url: './commercial6.png', caption: 'High-Speed Commercial Lift' },
      { url: './commercial7.png', caption: 'Modern Commercial Tower' },
    ]
  },
  car: {
    title: 'Car Elevator',
    bannerTitle: 'Car Elevators',
    bannerSubtitle: 'Heavy-Duty Vehicle Mobility Solutions',
    icon: 'fa-car',
    image: './car_lift.png',
    desc: 'Digitech Car Elevators are heavy-duty vehicle vertical transit systems engineered for residential apartments, showrooms, parking garages, and commercial building basements.',
    apps: ['Showrooms', 'Basement Parking', 'Residential Apartments', 'Commercial Garages', 'Villas with Basements'],
    features: ['Reinforced Platform Structure', 'Dual Cabin Control Panels (for driver convenience)', 'Microprocessor-Controlled Levelling Accuracy', 'Infrared Vehicle Position Sensors', 'Mechanical Wheel-Stoppers'],
    caps: ['3000 kg', '4000 kg', '5000 kg', 'Custom Vehicle Capacity'],
    specs: {
      'Speed': '0.15 m/s to 0.5 m/s',
      'Cabin Dimensions': 'Typically 3000mm x 6000mm (customizable)',
      'Pit Depth': 'Minimum 1200mm required',
      'Door Type': 'Broad Side-Sliding or Center-Opening doors'
    },
    whyChoose: ['High Structural Durability', 'Safe Vehicle Transport', 'Smooth Basements Access'],
    gallery: [
      { url: './car7.png', caption: 'Car Elevator Platform' },
      { url: './car4.png', caption: 'Basement Parking Lift' },
      { url: './car5.png', caption: 'Showroom Vehicle Elevator' },
      { url: './car6.png', caption: 'Heavy Duty Car Platform' },
    ]
  }
};

// Services Configuration Data
export const SERVICES_DATA = {
  installation: {
    title: 'Elevator Installation',
    desc: 'We provide complete elevator installation services for residential apartments, commercial complexes, hospitals, villas, industries, hotels, and office buildings. From design consultation to commissioning, we ensure every installation meets the highest standards of safety, efficiency, and reliability.',
    process: [
      { step: '1. Site Survey', detail: 'Our engineering team audits the masonry or steel shaft dimensions, pits, overhead clearance, and electrical supply points.' },
      { step: '2. Technical Consultation', detail: 'We guide developers on capacity, stop rules, electrical feeds, and architectural requirements.' },
      { step: '3. Customized Elevator Design', detail: 'We produce detailed civil drawings and structural layout plans tailored to client specs.' },
      { step: '4. Manufacturing & Procurement', detail: 'Sourcing and production of high-precision components, motors, and cabin features.' },
      { step: '5. Professional Installation', detail: 'Setting bracket frameworks, guide rails, cabin chassis, and counterweights.' },
      { step: '6. Electrical Integration', detail: 'Wiring controller motherboards, VVVF drives, safety loops, and LOP/COP interfaces.' },
      { step: '7. Safety Testing', detail: 'Executing safety gear trip actions, ARD tests, and overspeed trip assessments.' },
      { step: '8. Final Commissioning', detail: 'Precision leveling adjustments and initial pilot runs of completed layouts.' },
      { step: '9. Customer Training', detail: 'Hands-on briefing for building administrators regarding manual rescues, LOP buttons, and emergency actions.' },
      { step: '10. After-Sales Support', detail: 'Direct access to regular upkeep schedules and priority breakdown assistance.' }
    ],
    types: [
      'Passenger Elevators',
      'Home Elevators',
      'Hospital Elevators',
      'Goods Elevators',
      'Hydraulic Elevators',
      'Machine Room Less Elevators',
      'Capsule Elevators',
      'Dumbwaiter Elevators'
    ]
  },
  amc: {
    title: 'Annual Maintenance Contract (AMC)',
    desc: 'Our AMC services are designed to maximize elevator reliability, improve passenger safety, and reduce costly breakdowns through regular preventive maintenance.',
    included: [
      'Scheduled Preventive Maintenance',
      'Complete Mechanical Inspection',
      'Electrical System Inspection',
      'Door Adjustment',
      'Lubrication',
      'Controller Inspection',
      'Brake Inspection',
      'Safety Device Testing',
      'Ride Quality Check',
      'Emergency Call Support',
      'Service Reports'
    ],
    plans: [
      {
        name: 'Comprehensive AMC',
        desc: 'Includes monthly maintenance runs, diagnostics checks, plus full cost-coverage of replacement parts, VVVF controllers, ARD batteries, and motor assemblies.'
      },
      {
        name: 'Semi-Comprehensive AMC',
        desc: 'Includes monthly preventive upkeep plus coverage for minor components, switches, locks, and relays. Large items (motors, cables) billed separate.'
      },
      {
        name: 'Non-Comprehensive AMC',
        desc: 'Includes monthly inspection checks, grease applications, door adjustments, and diagnostics reports. All repair components are billed at actual cost.'
      }
    ]
  },
  modernization: {
    title: 'Elevator Modernization',
    desc: 'Modernization upgrades aging elevator systems using the latest technology, improving safety, ride quality, energy efficiency, and reliability without replacing the entire lift.',
    services: [
      'Controller Replacement',
      'VVVF Drive Upgrade',
      'Automatic Door Upgrade',
      'COP & LOP Replacement',
      'ARD Installation',
      'Gearless Machine Upgrade',
      'Cabin Interior Renovation',
      'LED Lighting',
      'Voice Announcement System',
      'Digital Display Panels'
    ],
    benefits: [
      'Reduced Breakdowns',
      'Improved Safety',
      'Energy Savings',
      'Smoother Ride',
      'Lower Maintenance Costs',
      'Extended Elevator Life'
    ]
  },
  repair: {
    title: 'Repair & Breakdown Services',
    desc: 'Our experienced technicians diagnose and repair elevator faults quickly to restore safe and reliable operation. We maintain original manufacturer spare parts.',
    services: [
      'Controller Repairs',
      'Motherboard Replacement',
      'Door Operator Repairs',
      'VVVF Drive Repairs',
      'ARD Repairs',
      'Motor Repairs',
      'Brake System Repairs',
      'COP/LOP Replacement',
      'Electrical Troubleshooting',
      'Mechanical Repairs'
    ],
    emergency: 'We provide rapid-response breakdown assistance to minimize downtime and ensure passenger safety.'
  },
  licensing: {
    title: 'Licensing & Renewals',
    desc: 'Digitech Elevators provides comprehensive elevator licensing and renewal services to help building owners, associations, commercial establishments, hospitals, and industries comply with statutory regulations. Our experienced team assists in obtaining new elevator licenses, renewing existing licenses, and coordinating with the relevant government authorities to ensure a smooth and hassle-free process.',
    services: [
      'New Elevator Licensing',
      'Elevator License Renewal',
      'Government Inspection Coordination',
      'Documentation Support',
      'Compliance Assistance',
      'Renewal Reminders'
    ],
    serviceDetails: {
      'New Elevator Licensing': 'We assist in obtaining statutory approval and operational licenses for newly installed elevators by preparing the required documentation and coordinating with the concerned authorities.',
      'Elevator License Renewal': 'Our team manages the complete renewal process for existing elevator licenses, ensuring timely submission of documents and compliance with applicable regulations.',
      'Government Inspection Coordination': 'We coordinate with the concerned government authorities for mandatory elevator inspections and provide technical assistance during the inspection process.',
      'Documentation Support': 'We prepare and verify all necessary documents required for licensing and renewal, including technical details, test reports, maintenance records, and other statutory documents.',
      'Compliance Assistance': 'Before inspection, our engineers inspect the elevator and recommend any required corrective actions to ensure compliance with applicable safety standards and regulatory requirements.',
      'Renewal Reminders': 'To help our customers avoid delays, we provide timely reminders for upcoming license renewals and support throughout the renewal process.'
    },
    whyChoose: [
      'Experienced Technical Team',
      'Complete Documentation Assistance',
      'Government Inspection Support',
      'Compliance with Statutory Requirements',
      'Timely Renewal Assistance',
      'Reliable and Professional Service',
      'End-to-End Licensing Support'
    ],
    industries: [
      'Residential Apartments',
      'Commercial Buildings',
      'Hospitals',
      'Hotels',
      'Educational Institutions',
      'Shopping Malls',
      'Industrial Facilities',
      'Government Buildings'
    ],
    faqs: [
      {
        question: 'Do you assist with new elevator licenses?',
        answer: 'Yes. We provide complete assistance for obtaining licenses for newly installed elevators.'
      },
      {
        question: 'Can you help renew expired elevator licenses?',
        answer: 'Yes. We assist with the renewal process and provide guidance on the applicable requirements.'
      },
      {
        question: 'Do you prepare the required documents?',
        answer: 'Yes. Our team prepares, verifies, and submits all necessary documentation required for licensing and renewal.'
      },
      {
        question: 'Do you provide licensing services for elevators installed by other companies?',
        answer: 'Yes. We can assist with licensing and renewals for elevators of various makes and brands, subject to the applicable regulations and compliance requirements.'
      }
    ]
  },
  emergency: {
    title: '24/7 Emergency Support',
    desc: 'Our dedicated service team is available around the clock to attend emergency lift breakdowns and ensure minimal downtime.'
  }
};

// Projects Portfolio Data
export const PROJECTS_DATA = [
  { name: 'Prestige Heights Apartments', category: 'Apartments', location: 'Whitefield, BLR', type: 'Passenger MRL', cap: '8 Passenger', stops: 'G + 14', year: '2024', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sigma Tech Commercial Center', category: 'Commercial Complexes', location: 'Electronic City', type: 'Capsule Glass Lift', cap: '13 Passenger', stops: 'G + 6', year: '2023', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Vimal Multi-Speciality Hospital', category: 'Hospitals', location: 'Yeshwanthpur', type: 'Hospital Stretcher', cap: '15 Pax / 1020 Kg', stops: 'G + 5', year: '2024', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Duplex Villa Luxury Setup', category: 'Villas', location: 'Jayanagar, BLR', type: 'Home Hydraulic', cap: 'Glass Panoramic', stops: '3 Stops', year: '2025', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80' },
  { name: 'Karnataka Logistics Park', category: 'Industries', location: 'Nelamangala', type: 'Heavy Goods Lift', cap: '2000 Kg Capacity', stops: '4 Stops', year: '2023', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80' },
  { name: 'Bangalore Metro Office Center', category: 'Educational Institutions', location: 'Majestic, BLR', type: 'Heavy Passenger', cap: '13 Passenger', stops: 'G + 8', year: '2024', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80' },
  { name: 'Grand Royal Plaza', category: 'Commercial Complexes', location: 'Indiranagar, BLR', type: 'Capsule Passenger', cap: '10 Passenger', stops: 'G + 7', year: '2025', image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=800&q=80' }
];

// Gallery Data
export const GALLERY_DATA = {
  installation: [
    { title: 'Guide Rail Plumb Alignment', img: './passenger_lift.png', desc: 'Precision guide rail alignment for silent travel.' },
    { title: 'Bracket Fastening Work', img: './goods_lift.png', desc: 'Heavy bracket fitting in concrete lift shafts.' }
  ],
  machineroom: [
    { title: 'PMSM Gearless Motor Unit', img: './mrl_lift.png', desc: 'Modern high-efficiency gearless traction unit.' },
    { title: 'Microprocessor Controller Panel', img: './hydraulic_lift.png', desc: '32-Bit controller motherboard cabinet.' }
  ],
  completed: [
    { title: 'Luxury Villa Glass Elevator', img: './home_lift.png', desc: 'Panoramic capsule home lift.' },
    { title: 'Emergency Hospital Stretcher Lift', img: './hospital_lift.png', desc: 'Extra wide stretcher cabin.' }
  ],
  modernization: [
    { title: 'Relay-to-VVVF Upgrade', img: './mrl_lift.png', desc: 'Retrofitting old relay logic with computer controls.' },
    { title: 'Cabin Wall Cladding Upgrade', img: './passenger_lift.png', desc: 'Installing gold-finish interior cabin panels.' }
  ],
  team: [
    { title: '45-Point Safety Inspection', img: './hospital_lift.png', desc: 'Field technicians auditing safety governors.' },
    { title: 'Emergency Breakdowns Training', img: './goods_lift.png', desc: 'Certified safety training runs.' }
  ]
};

