export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'priya-fernando',
    name: 'Priya Fernando',
    role: 'Founder & CEO',
    company: 'Lanka Delivery',
    avatar: '/images/testimonials/priya-fernando.jpg',
    quote: 'CODEKNOX transformed our vision into reality. The platform has helped us connect with hundreds of restaurants and thousands of customers. Their expertise in both design and development made all the difference.',
    rating: 5,
    project: 'Lanka Delivery - Food Delivery Platform'
  },
  {
    id: 'ravi-perera',
    name: 'Ravi Perera',
    role: 'CEO',
    company: 'Eco Sri Lanka',
    avatar: '/images/testimonials/ravi-perera.jpg',
    quote: 'CODEKNOX helped us create a platform that not only drives sales but also promotes environmental consciousness. Their understanding of both technology and marketing was invaluable.',
    rating: 5,
    project: 'Eco Sri Lanka - Sustainability Marketplace'
  },
  {
    id: 'anjali-silva',
    name: 'Anjali Silva',
    role: 'Director',
    company: 'Tech Startup Hub',
    avatar: '/images/testimonials/anjali-silva.jpg',
    quote: 'CODEKNOX built a platform that has become the backbone of Sri Lanka\'s startup ecosystem. Their AI integration and scalable architecture have exceeded our expectations.',
    rating: 5,
    project: 'Tech Startup Hub - Innovation Center'
  },
  {
    id: 'dr-lakshmi-mendis',
    name: 'Dr. Lakshmi Mendis',
    role: 'Founder',
    company: 'Ayurveda Wellness',
    avatar: '/images/testimonials/lakshmi-mendis.jpg',
    quote: 'CODEKNOX created a beautiful app that bridges traditional wisdom with modern technology. The AI integration has made personalized wellness accessible to everyone.',
    rating: 5,
    project: 'Ayurveda Wellness - Health & Wellness App'
  },
  {
    id: 'kumara-perera',
    name: 'Kumara Perera',
    role: 'Curator',
    company: 'Colombo Arts Gallery',
    avatar: '/images/testimonials/kumara-perera.jpg',
    quote: 'CODEKNOX helped us create a beautiful digital space for Sri Lankan artists. The platform has opened new opportunities for our local art community.',
    rating: 5,
    project: 'Colombo Arts Gallery - Digital Art Platform'
  },
  {
    id: 'rajith-bandara',
    name: 'Rajith Bandara',
    role: 'Agricultural Officer',
    company: 'Smart Farming SL',
    avatar: '/images/testimonials/rajith-bandara.jpg',
    quote: 'CODEKNOX\'s IoT solution has revolutionized farming practices in Sri Lanka. The data-driven approach has helped farmers increase productivity significantly.',
    rating: 5,
    project: 'Smart Farming Sri Lanka - Agricultural Tech'
  },
  {
    id: 'sarah-jayawardena',
    name: 'Sarah Jayawardena',
    role: 'Marketing Director',
    company: 'Colombo Fashion House',
    avatar: '/images/testimonials/sarah-jayawardena.jpg',
    quote: 'The e-commerce platform CODEKNOX built for us has increased our online sales by 200%. Their attention to detail and user experience design is exceptional.',
    rating: 5
  },
  {
    id: 'mohan-rajapaksa',
    name: 'Mohan Rajapaksa',
    role: 'Operations Manager',
    company: 'Lanka Logistics',
    avatar: '/images/testimonials/mohan-rajapaksa.jpg',
    quote: 'CODEKNOX\'s logistics management system has streamlined our operations and reduced costs by 30%. Their technical expertise and local market understanding are outstanding.',
    rating: 5
  },
  {
    id: 'nimali-fernando',
    name: 'Nimali Fernando',
    role: 'Founder',
    company: 'GreenTech Solutions',
    avatar: '/images/testimonials/nimali-fernando.jpg',
    quote: 'Working with CODEKNOX has been a game-changer for our startup. They understood our vision and delivered a solution that exceeded our expectations.',
    rating: 5
  },
  {
    id: 'dilshan-perera',
    name: 'Dilshan Perera',
    role: 'CEO',
    company: 'Digital Marketing Pro',
    avatar: '/images/testimonials/dilshan-perera.jpg',
    quote: 'CODEKNOX\'s social media marketing services have helped us grow our client base by 150%. Their data-driven approach and creative strategies are unmatched.',
    rating: 5
  }
];

export const getFeaturedTestimonials = () => testimonials.filter(t => t.project).slice(0, 3);

export const getRandomTestimonials = (count: number = 3) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
