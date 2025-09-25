import { 
  Palette, 
  Code, 
  Database, 
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
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Build responsive, performant web applications with modern React and Tailwind CSS.',
    icon: Code,
    deliverables: [
      'Responsive Web Applications',
      'Component Libraries',
      'Performance Optimization',
      'Cross-browser Compatibility',
      'SEO Optimization',
      'Progressive Web Apps'
    ],
    timeline: '3-8 weeks',
    startingPrice: 'From 50,000 LKR',
    priceRange: 'Bronze: 50,000–100,000 LKR | Silver: 80,000–250,000 LKR | Gold: Above 100,000 LKR',
    features: ['React', 'Tailwind CSS', 'HTML/CSS', 'TypeScript'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Scalable server-side solutions with Node.js and Firebase for real-time applications.',
    icon: Database,
    deliverables: [
      'API Development',
      'Database Design',
      'Authentication & Security',
      'Real-time Features',
      'Website Deployment',
      'Performance Monitoring'
    ],
    timeline: '4-10 weeks',
    startingPrice: 'From 50,000 LKR',
    priceRange: 'Bronze: 50,000–100,000 LKR | Silver: 80,000–250,000 LKR | Gold: Above 100,000 LKR',
    features: ['Node.js', 'Firebase', 'Real-time DB', 'API Integration'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'no-code-websites',
    title: 'No-Code Websites',
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
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'system-management',
    title: 'System Management',
    description: 'Comprehensive system administration and maintenance for reliable, secure applications.',
    icon: Settings,
    deliverables: [
      'Server Monitoring',
      'Database Management',
      'Security Audits',
      'Backup & Recovery',
      'Performance Optimization',
      'Website Maintenance'
    ],
    timeline: 'Ongoing',
    startingPrice: 'From 40,000 LKR',
    priceRange: 'Bronze: 40,000–90,000 LKR | Silver: 100,000–160,000 LKR | Gold: Above 150,000 LKR',
    features: ['Monitoring', 'DB Management', 'Security', 'Maintenance'],
    color: 'from-gray-500 to-slate-500'
  },
  {
    id: 'mobile-app-design',
    title: 'Mobile App Development',
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
    color: 'from-indigo-500 to-purple-500'
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
    color: 'from-pink-500 to-rose-500'
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
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'ai-design-support',
    title: 'AI Design Support',
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
    color: 'from-yellow-500 to-orange-500'
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
    color: 'from-emerald-500 to-green-500'
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
    service: 'Frontend & Backend',
    strategy: 'Per project',
    priceRange: 'Bronze: 50,000–100,000 LKR | Silver: 80,000–250,000 LKR | Gold: Above 100,000 LKR',
    notes: 'Full-stack development with deployment'
  },
  {
    service: 'No-Code Sites',
    strategy: 'Setup + Monthly',
    priceRange: 'Bronze: 20,000–40,000 LKR | Silver: 40,000–70,000 LKR | Gold: Above 80,000 LKR',
    notes: 'Includes hosting and maintenance'
  },
  {
    service: 'Mobile Apps',
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
    service: 'AI Design Support',
    strategy: 'Per hour',
    priceRange: 'Bronze: 2,000–3,000 LKR/hour | Silver: 4,000–5,000 LKR/hour | Gold: Above 5,000 LKR/hour',
    notes: 'Creative and technical assistance'
  },
  {
    service: 'Maintenance',
    strategy: 'Monthly',
    priceRange: 'Bronze: 8,000–12,000 LKR/month | Silver: 15,000–20,000 LKR/month | Gold: Above 20,000 LKR/month',
    notes: 'Ongoing support and updates'
  }
];
