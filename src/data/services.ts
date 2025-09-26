import { 
  Palette, 
  Code, 
  Globe, 
  Settings, 
  Smartphone, 
  Share2, 
  Zap,
  Shield
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  priceRange: string;
  features: string[];
  color: string;
  tierDeliverables?: {
    bronze: string[];
    silver: string[];
    gold: string[];
  };
  packagePricing?: {
    bronze: string;
    silver: string;
    gold: string;
    custom: string;
  };
}

export const services: Service[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Create stunning, user-centered interfaces with AI-powered design thinking and modern tools.',
    icon: Palette,
    deliverables: [
      'User Research & Personas',
      'Wireframes & Prototypes',
      'High-fidelity Mockups',
      'Interactive Prototypes',
      'Design System & Guidelines',
      'User Testing & Iteration'
    ],
    timeline: '2-6 weeks',
    startingPrice: 'From 10,000 LKR',
    priceRange: 'Bronze: 10,000–20,000 LKR | Silver: 25,000–60,000 LKR | Gold: Above 80,000 LKR',
    features: ['Figma', 'Illustrator', 'Photoshop', 'AI Ideation'],
    color: 'from-purple-500 to-pink-500',
    tierDeliverables: {
      bronze: ['Basic layout design', '1-3 screens/pages', 'Responsive design'],
      silver: ['4-7 pages/screens', 'Branding integration', 'Interactive mockups'],
      gold: ['10+ pages', 'Animations', 'Full design system & style guide']
    },
    packagePricing: {
      bronze: 'LKR 10,000-20,000',
      silver: 'LKR 25,000-60,000', 
      gold: 'Above LKR 80,000',
      custom: 'Contact for quote'
    }
  },
  {
    id: 'website-development',
    title: 'Website Development (Frontend + Backend)',
    description: 'Full-stack website development including modern responsive frontend, secure backend APIs, SEO and deployment.',
    icon: Code,
    deliverables: [
      'Responsive Frontend',
      'Secure Backend APIs',
      'Authentication & CMS',
      'SEO Optimization',
      'Performance Optimization',
      'Deployment & Monitoring'
    ],
    timeline: '3-8 weeks',
    startingPrice: 'From 50,000 LKR',
    priceRange: 'Bronze: 50,000–100,000 LKR | Silver: 80,000–250,000 LKR | Gold: Above 100,000 LKR',
    features: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
    tierDeliverables: {
      bronze: ['Basic business site', 'Static pages', 'Contact form'],
      silver: ['Dynamic website', 'Blog/product catalog', 'Simple booking'],
      gold: ['Advanced custom site', 'Multi-language', 'E-commerce & integrations']
    }
  },
  {
    id: 'no-code-websites',
    title: 'No-Code Website Development',
    description: 'Fast, professional websites using Wix, Webflow, and WordPress with custom functionality.',
    icon: Globe,
    deliverables: [
      'Custom Website Design',
      'Content Management System',
      'E-commerce Integration',
      'SEO Optimization',
      'Analytics Setup',
      'Ongoing Maintenance'
    ],
    timeline: '1-3 weeks',
    startingPrice: 'From 20,000 LKR',
    priceRange: 'Bronze: 20,000–40,000 LKR | Silver: 40,000–70,000 LKR | Gold: Above 80,000 LKR',
    features: ['Wix', 'Webflow', 'WordPress', 'Custom Plugins'],
    color: 'from-orange-500 to-red-500',
    tierDeliverables: {
      bronze: ['1-3 page starter website', 'Template customization'],
      silver: ['4-7 pages', 'SEO plugins', 'Mobile optimized'],
      gold: ['10+ pages', 'E-commerce/shop setup', 'Maintenance']
    }
  },
  {
    id: 'system-management',
    title: 'System Management & POS',
    description: 'System administration plus POS solutions including billing, stock and reporting.',
    icon: Settings,
    deliverables: [
      'Server Monitoring',
      'Database Management',
      'Security Audits',
      'Backup & Recovery',
      'Performance Optimization',
      'POS Reporting'
    ],
    timeline: 'Ongoing',
    startingPrice: 'From 40,000 LKR',
    priceRange: 'Bronze: 40,000–90,000 LKR | Silver: 100,000–160,000 LKR | Gold: Above 150,000 LKR',
    features: ['Monitoring', 'DB Management', 'Security', 'Maintenance'],
    color: 'from-gray-500 to-slate-500',
    tierDeliverables: {
      bronze: ['Basic POS', 'Billing + stock'],
      silver: ['POS + multi-branch reporting'],
      gold: ['POS + full ERP', 'Inventory, finance, analytics']
    }
  },
  {
    id: 'mobile-app-design',
    title: 'Mobile App Design & Development',
    description: 'Native and cross-platform mobile app interfaces with Flutter and native Java.',
    icon: Smartphone,
    deliverables: [
      'Mobile UI/UX Design',
      'Interactive Prototypes',
      'Design Systems',
      'Platform Guidelines',
      'User Testing',
      'Design Handoff'
    ],
    timeline: '2-4 weeks',
    startingPrice: 'From 50,000 LKR',
    priceRange: 'Bronze: 50,000–100,000 LKR | Silver: 120,000–200,000 LKR | Gold: Above 120,000 LKR',
    features: ['Flutter', 'Native Java', 'iOS Guidelines', 'Material Design'],
    color: 'from-indigo-500 to-purple-500',
    tierDeliverables: {
      bronze: ['Basic app', 'Informational', 'Simple UI'],
      silver: ['Mid-level app', 'Accounts, forms', 'Basic APIs'],
      gold: ['Advanced app', 'Payments, booking', 'Push notifications, admin panel']
    }
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Comprehensive digital marketing across all major platforms with data-driven strategies.',
    icon: Share2,
    deliverables: [
      'Content Strategy',
      'Platform Management',
      'Paid Advertising',
      'SEO Optimization',
      'Analytics & Reporting',
      'Community Management'
    ],
    timeline: 'Ongoing',
    startingPrice: 'Setup 10,000 + 3,500/mo',
    priceRange: 'Bronze: Setup 10,000 + 3,500/mo | Silver: Setup 10,000 + 6,000/mo | Gold: Setup 10,000 + 10,000/mo',
    features: ['TikTok', 'Facebook', 'Instagram', 'LinkedIn', 'X'],
    color: 'from-pink-500 to-rose-500',
    tierDeliverables: {
      bronze: ['Page setup', '5 posts/month'],
      silver: ['15 posts/month', 'Ad boosting'],
      gold: ['20 posts/month', 'Ad boosting', 'Ad management + strategy']
    }
  },
  {
    id: 'saas-mvp',
    title: 'SaaS & MVP Development',
    description: 'Rapid MVP development for startups with scalable architecture and modern tech stack.',
    icon: Zap,
    deliverables: [
      'MVP Development',
      'Scalable Architecture',
      'User Authentication',
      'Payment Integration',
      'Analytics Dashboard',
      'Launch Support'
    ],
    timeline: '4-12 weeks',
    startingPrice: 'From 4,000 LKR/month',
    priceRange: 'Bronze: 4,000–6,000 LKR/month | Silver: 7,000–10,000 LKR/month | Gold: Above 15,000 LKR/month',
    features: ['React', 'Node.js', 'Firebase', 'Stripe'],
    color: 'from-teal-500 to-cyan-500',
    tierDeliverables: {
      bronze: ['Single-feature MVP prototype'],
      silver: ['MVP with 2-3 modules/features'],
      gold: ['Full SaaS', 'Dashboards & multiple modules']
    }
  },
  {
    id: 'ai-design-support',
    title: 'AI-Powered Design Support',
    description: 'AI-powered design assistance and creative solutions for modern applications.',
    icon: Zap,
    deliverables: [
      'AI-Powered Design',
      'Creative Direction',
      'Brand Identity',
      'Visual Assets',
      'Design Automation',
      'Creative Consulting'
    ],
    timeline: 'Per hour',
    startingPrice: 'From 2,000 LKR/hour',
    priceRange: 'Bronze: 2,000–3,000 LKR/hour | Silver: 4,000–5,000 LKR/hour | Gold: Above 5,000 LKR/hour',
    features: ['ChatGPT', 'Midjourney', 'Veo3', 'Claude'],
    color: 'from-yellow-500 to-orange-500',
    tierDeliverables: {
      bronze: ['Logo / poster design support'],
      silver: ['Social media creatives', 'Brand visuals'],
      gold: ['Full AI-powered branding kit']
    }
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support for your digital products.',
    icon: Shield,
    deliverables: [
      'Regular Updates',
      'Security Patches',
      'Performance Monitoring',
      'Bug Fixes',
      'Technical Support',
      'Backup Management'
    ],
    timeline: 'Ongoing',
    startingPrice: 'From 8,000 LKR/month',
    priceRange: 'Bronze: 8,000–12,000 LKR/month | Silver: 15,000–20,000 LKR/month | Gold: Above 20,000 LKR/month',
    features: ['24/7 Monitoring', 'Security', 'Updates', 'Support'],
    color: 'from-emerald-500 to-green-500',
    tierDeliverables: {
      bronze: ['Bug fixes', 'Monthly updates'],
      silver: ['Security checks', 'Backups', '24/7 support'],
      gold: ['Priority support', 'Proactive monitoring']
    }
  }
];

export const pricingTable = [
  {
    service: 'UI/UX Design',
    strategy: 'Per project',
    priceRange: 'Bronze: 10,000–20,000 LKR | Silver: 25,000–60,000 LKR | Gold: Above 80,000 LKR',
    notes: 'Includes research, design, and iterations'
  },
  {
    service: 'Website Development (Frontend + Backend)',
    strategy: 'Per project',
    priceRange: 'Bronze: 50,000–100,000 LKR | Silver: 80,000–250,000 LKR | Gold: Above 100,000 LKR',
    notes: 'Full-stack development with deployment'
  },
  {
    service: 'No-Code Website Development',
    strategy: 'Setup + Monthly',
    priceRange: 'Bronze: 20,000–40,000 LKR | Silver: 40,000–70,000 LKR | Gold: Above 80,000 LKR',
    notes: 'Includes hosting and maintenance'
  },
  {
    service: 'Mobile App Design & Development',
    strategy: 'Per app',
    priceRange: 'Bronze: 50,000–100,000 LKR | Silver: 120,000–200,000 LKR | Gold: Above 120,000 LKR',
    notes: 'Cross-platform or native development'
  },
  {
    service: 'Social Media Marketing',
    strategy: 'Setup + Monthly',
    priceRange: 'Bronze: Setup 10,000 + 3,500/mo | Silver: Setup 10,000 + 6,000/mo | Gold: Setup 10,000 + 10,000/mo',
    notes: 'Content creation and management'
  },
  {
    service: 'SaaS & MVP',
    strategy: 'Monthly subscription',
    priceRange: 'Bronze: 4,000–6,000 LKR/month | Silver: 7,000–10,000 LKR/month | Gold: Above 15,000 LKR/month',
    notes: 'Includes hosting and updates'
  },
  {
    service: 'AI-Powered Design Support',
    strategy: 'Per hour',
    priceRange: 'Bronze: 2,000–3,000 LKR/hour | Silver: 4,000–5,000 LKR/hour | Gold: Above 5,000 LKR/hour',
    notes: 'Creative and technical assistance'
  },
  {
    service: 'Maintenance & Support',
    strategy: 'Monthly',
    priceRange: 'Bronze: 8,000–12,000 LKR/month | Silver: 15,000–20,000 LKR/month | Gold: Above 20,000 LKR/month',
    notes: 'Ongoing support and updates'
  },
  {
    service: 'System Management & POS',
    strategy: 'Per project',
    priceRange: 'Bronze: 40,000–90,000 LKR | Silver: 100,000–160,000 LKR | Gold: Above 150,000 LKR',
    notes: 'POS setup, inventory, reporting'
  }
];
