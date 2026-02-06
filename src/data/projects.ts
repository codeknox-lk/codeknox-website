export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  gallery: string[];
  services: string[];
  industry: string;
  duration: string;
  team: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: {
    metric: string;
    percentage: number;
  }[];
  techStack: string[];
  testimonial: {
    name: string;
    role: string;
    quote: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'smilehub-dental',
    title: 'SmileHub Premium Dental Care',
    shortDescription: 'A professional dental clinic website showcasing premium dental services and modern patient care in Kandy, Sri Lanka.',
    heroImage: '/projects/smile-hub hero.jpg',
    gallery: [
      '/projects/smile-hub 1.jpg',
      '/projects/smile-hub 2.jpg',
      '/projects/smile-hub 3.jpg'
    ],
    services: ['UI/UX Design', 'No-Code Websites', 'Social Media Marketing'],
    industry: 'Healthcare & Dental',
    duration: '3 weeks',
    team: '1 developer, 1 designer',
    summary: 'SmileHub Premium Dental Care is a professional dental clinic website that showcases comprehensive dental services and patient information. Located in Kandy, Sri Lanka, the clinic emphasizes personalized care and modern dental treatments.',
    problem: 'SmileHub needed a professional online presence to attract patients and showcase their premium dental services. They required a modern website that could provide information about their comprehensive dental care offerings and contact details.',
    solution: 'We developed a responsive WordPress website with modern design, service showcase, patient testimonials, and contact information. The website emphasizes the clinic\'s premium services and professional approach to dental care.',
    outcomes: [
      { metric: 'Website traffic', percentage: 120 },
      { metric: 'Patient inquiries', percentage: 95 },
      { metric: 'Service visibility', percentage: 150 },
      { metric: 'Online presence', percentage: 200 }
    ],
    techStack: ['WordPress', 'Custom Theme', 'Contact Forms', 'Responsive Design', 'SEO Optimization'],
    testimonial: {
      name: 'Dr. SmileHub Team',
      role: 'SmileHub Premium Dental Care',
      quote: 'CODEKNOX created a beautiful and professional website that perfectly represents our premium dental services. The website has helped us reach more patients and showcase our expertise effectively.'
    },
    featured: true
  },
  {
    slug: 'fort-knox-quantity-surveying',
    title: 'Fort Knox - Professional Quantity Surveying',
    shortDescription: 'A professional quantity surveying service provider website showcasing expertise in cost planning, BoQ preparation, and construction consulting.',
    heroImage: '/projects/fort-knox hero.jpg',
    gallery: [
      '/projects/fort-knox 1.jpg .png',
      '/projects/fort-knox 2.jpg'
    ],
    services: ['UI/UX Design', 'No-Code Websites', 'SEO Optimization'],
    industry: 'Construction & Engineering',
    duration: '4 weeks',
    team: '1 developer, 1 designer',
    summary: 'Fort Knox is a leading professional quantity surveying service provider with over 3 years of industry experience. The website showcases their expertise in cost planning, Bill of Quantities (BoQ), and construction consulting services.',
    problem: 'Fort Knox needed a professional online presence to showcase their quantity surveying expertise and attract clients in the construction industry. They required a website that could demonstrate their services and build trust with potential clients.',
    solution: 'We developed a modern, professional website highlighting their core services including Bill of Quantities, Cost Planning & Estimates, and Contractor Services. The website emphasizes their experience, values, and international project portfolio.',
    outcomes: [
      { metric: 'Client inquiries', percentage: 85 },
      { metric: 'Service visibility', percentage: 120 },
      { metric: 'Professional credibility', percentage: 150 },
      { metric: 'Online presence', percentage: 180 }
    ],
    techStack: ['WordPress', 'Custom Theme', 'Contact Forms', 'Responsive Design', 'SEO Optimization'],
    testimonial: {
      name: 'Team Fort Knox',
      role: 'Fort Knox Quantity Surveying',
      quote: 'CODEKNOX created a professional website that perfectly represents our quantity surveying expertise. The website has helped us establish credibility and attract quality clients in the construction industry.'
    },
    featured: true
  },
  {
    slug: 'wildscapia-environmental-news',
    title: 'Wildscapia - Environmental Science & Conservation News',
    shortDescription: 'A comprehensive environmental science and conservation news platform featuring wildlife articles, environmental impact stories, and conservation updates from around the world.',
    heroImage: '/projects/wildscapia hero.jpg',
    gallery: [
      '/projects/wildscapia 1.jpg',
      '/projects/wildscapia 2.jpg',
      '/projects/wildscapia 3.jpg'
    ],
    services: ['UI/UX Design', 'Custom Web Development', 'Content Management', 'SEO Optimization'],
    industry: 'Environmental & Conservation',
    duration: '6 weeks',
    team: '2 developers, 1 designer, 1 content manager',
    summary: 'Wildscapia is an environmental science and conservation news platform that offers comprehensive coverage of wildlife, environmental issues, and conservation efforts worldwide. The platform features articles, news updates, and educational content about nature and environmental sustainability.',
    problem: 'Wildscapia needed a modern, engaging website to share environmental science news and conservation stories. They required a platform that could effectively organize and present diverse content including wildlife features, environmental news, and conservation updates to educate and engage their audience.',
    solution: 'We developed a comprehensive news platform with categorized content sections, search functionality, newsletter integration, and social media connectivity. The website features a clean, nature-inspired design that makes environmental content accessible and engaging for readers worldwide.',
    outcomes: [
      { metric: 'Content engagement', percentage: 180 },
      { metric: 'Newsletter subscribers', percentage: 150 },
      { metric: 'Social media reach', percentage: 200 },
      { metric: 'Environmental awareness', percentage: 120 }
    ],
    techStack: ['WordPress', 'Custom Theme', 'Newsletter Integration', 'Social Media API', 'SEO Optimization', 'Content Management'],
    testimonial: {
      name: 'Wildscapia Team',
      role: 'Environmental News Platform',
      quote: 'CODEKNOX created an exceptional platform that perfectly captures our mission of environmental education and conservation awareness. The website has significantly increased our reach and engagement with environmental content.'
    },
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectBySlug = (slug: string) => projects.find(project => project.slug === slug);

export const getProjectsByService = (service: string) => 
  projects.filter(project => project.services.includes(service));

export const getProjectsByIndustry = (industry: string) => 
  projects.filter(project => project.industry === industry);
