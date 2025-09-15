# CODEKNOX Website

A modern, responsive website for CODEKNOX Pvt Ltd - a Sri Lankan technology company specializing in digital solutions, web development, and AI-powered design.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme toggle
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed with modern web technologies
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Interactive**: Smooth animations and micro-interactions using Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router DOM for client-side routing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, Badge)
│   ├── Layout.tsx      # Main layout with header and footer
│   └── SplashScreen.tsx # Loading screen
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── Services.tsx    # Services page
│   ├── Projects.tsx    # Projects listing
│   ├── ProjectDetail.tsx # Individual project pages
│   ├── Blog.tsx        # Blog listing
│   ├── About.tsx       # About us page
│   ├── Contact.tsx     # Contact form
│   └── NotFound.tsx    # 404 page
├── data/               # Static data and content
│   ├── company.ts      # Company information
│   ├── services.ts     # Services data
│   ├── projects.ts     # Projects data
│   ├── blog.ts         # Blog posts data
│   └── testimonials.ts # Client testimonials
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark/light theme management
└── App.tsx             # Main app component with routing
```

## 🎨 Design System

### Colors

- **Primary**: #073D47 (Midnight Teal)
- **Accent**: #0B7A87 (Cyan-Teal)
- **Secondary**: #0E2A32 (Deep Blue-Green)
- **Light BG**: #F2F5F6

### Typography

- **Headings**: Poppins (700/600)
- **Body**: Inter (400/500)
- **Large Numeric**: Space Grotesk (optional)

### Components

- **Button**: Multiple variants (primary, secondary, accent, outline, ghost)
- **Card**: Glassmorphism effect with hover animations
- **Badge**: Small status indicators
- **Form Elements**: Styled inputs, selects, and textareas

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd codeknox-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Content Management

The website uses static data files for content management. To update content:

### Company Information

Edit `src/data/company.ts` to update:

- Company details (name, address, contact info)
- Mission, vision, and core values
- Tech stack and statistics

### Services

Edit `src/data/services.ts` to update:

- Service offerings and descriptions
- Pricing information
- Features and deliverables

### Projects

Edit `src/data/projects.ts` to update:

- Project portfolio
- Case studies and outcomes
- Client testimonials

### Blog Posts

Edit `src/data/blog.ts` to update:

- Blog articles and content
- Author information
- Tags and categories

## 🎯 Key Features

### Homepage

- Hero section with compelling headline and CTA
- Services overview with pricing
- Featured projects showcase
- Client testimonials
- Company statistics

### Services Page

- Detailed service descriptions
- Pricing table
- FAQ section
- Service-specific features

### Projects Portfolio

- Filterable project grid
- Detailed project pages
- Outcome metrics
- Technology stack used

### Contact Form

- Multi-field contact form
- Form validation
- Spam protection
- Success state handling

### Blog

- Article listing with search and filters
- Individual blog post pages
- Author information
- Related posts

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Layout.tsx`

### Styling Changes

- Modify `tailwind.config.js` for theme changes
- Update `src/index.css` for custom styles
- Use Tailwind utility classes for component styling

### Adding New Components

1. Create component in `src/components/`
2. Export from component index if needed
3. Import and use in pages

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The website supports dark/light theme toggle:

- Theme preference is saved in localStorage
- Automatic theme switching
- Consistent styling across all components

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional Hosting**: Upload `dist` folder to web server

## 📊 Performance

The website is optimized for:

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to CODEKNOX Pvt Ltd.

## 📞 Support

For support or questions:

- Email: contact@codeknox.lk
- Website: https://codeknox.lk

---

Built with ❤️ by CODEKNOX Team
# CodeKnox Website - Deployed Mon Sep 15 18:08:43 +0530 2025
