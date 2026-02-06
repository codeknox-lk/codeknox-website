import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import ChatBot from './ChatBot';

// Company information
const companyInfo = {
  name: 'CODEKNOX',
  address: 'Colombo, Sri Lanka',
  email: 'sales@codeknox.lk',
  phone: '+94706633321',
  facebook: 'https://web.facebook.com/profile.php?id=61577218966588',
  linkedin: 'https://linkedin.com/company/codeknox',
  instagram: 'https://www.instagram.com/codeknox_lk/'
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navbar scroll state
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [, setIsOnServicesPage] = useState(false);

  const scrollTimeoutRef = useRef<number | null>(null);

  // Get current location to detect services page
  const location = useLocation();

  // Update services page detection when location changes
  useEffect(() => {
    const isServices = location.pathname === '/services';
    setIsOnServicesPage(isServices);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar when at the very top of the page
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else {
        // Determine scroll direction only when not at the top
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }

      // Check if we're over dark sections
      const allSections = document.querySelectorAll('section');
      let isOverAnyDarkSection = false;

      allSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= 100 && rect.bottom >= 100;

        if (isInViewport) {
          const sectionClasses = section.className;

          // Check for solid dark background classes
          const hasDarkBg = sectionClasses.includes('bg-black') ||
            sectionClasses.includes('bg-gray-900') ||
            sectionClasses.includes('bg-slate-800') ||
            sectionClasses.includes('bg-gray-800');

          // Check for gradient dark backgrounds (more comprehensive)
          const hasDarkGradient = sectionClasses.includes('from-gray-900') ||
            sectionClasses.includes('to-gray-900') ||
            sectionClasses.includes('via-slate-800') ||
            sectionClasses.includes('from-slate-800') ||
            sectionClasses.includes('to-slate-800') ||
            sectionClasses.includes('via-gray-900');

          if (hasDarkBg || hasDarkGradient) {
            isOverAnyDarkSection = true;
          }
        }
      });

      setIsOverDarkSection(isOverAnyDarkSection);

      setLastScrollY(currentScrollY);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set timeout to show navbar when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Liquid Glass Navigation Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.4 }
            }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center"
          >
            {/* Main Navigation Container */}
            <div className="relative w-full max-w-screen-2xl mx-3 sm:mx-4 md:mx-4 md-lg:mx-5 lg:mx-6 xl:mx-8 2xl:mx-10 mt-2 sm:mt-3 md:mt-2 md-lg:mt-3 lg:mt-4 max-h-24">
              {/* Liquid Glass Background */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                {/* Backdrop Blur Layer */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />

                {/* Liquid Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/15 to-white/20" />

                {/* Visible Border */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-gray-300/60 shadow-lg" />

                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/5 via-transparent to-teal-500/5" />

                {/* Content Container */}
                <div className="relative flex items-center justify-between px-3 sm:px-4 md:px-4 md-lg:px-5 lg:px-6 xl:px-8 2xl:px-10 py-2 sm:py-3 md:py-2 md-lg:py-2.5 lg:py-3">



                  {/* Logo Section */}
                  <div className="flex items-center justify-center">
                    <div className="w-28 h-16 sm:w-32 sm:h-18 md:w-36 md:h-20 md-lg:w-38 md-lg:h-22 lg:w-40 lg:h-24 flex items-center justify-center">
                      <Logo showText={false} />
                    </div>
                  </div>

                  {/* Desktop Navigation Links */}
                  <div className="hidden md:flex items-center space-x-1 md-lg:space-x-1.5 lg:space-x-2">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative group"
                      >
                        <Link
                          to={item.path}
                          className={`relative flex items-center px-1.5 sm:px-2 md:px-2 md-lg:px-2.5 lg:px-3 py-1 sm:py-1.5 md:py-1 md-lg:py-1.5 lg:py-1.5 transition-all duration-300 font-medium text-xs sm:text-sm md:text-sm md-lg:text-sm lg:text-sm tracking-wide whitespace-nowrap rounded-xl sm:rounded-2xl group ${isOverDarkSection
                              ? 'text-white hover:text-gray-200'
                              : 'text-gray-700 hover:text-gray-900'
                            }`}
                        >
                          {/* Text */}
                          <span className="relative z-10">{item.name}</span>

                          {/* Liquid Hover Background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />

                          {/* Liquid Underline */}
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />

                          {/* Subtle Glow */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Side Actions */}
                  <div className="flex items-center space-x-4">

                    {/* Let's Connect Button */}
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`hidden md:flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${isOverDarkSection
                            ? 'text-white hover:text-gray-200'
                            : 'text-teal-500 hover:text-teal-600'
                          }`}
                      >
                        <span className="hidden sm:inline">Let's Connect</span>
                        <span className="sm:hidden">Connect</span>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(true)}
                      className={`md:hidden p-1.5 sm:p-2 transition-colors duration-300 rounded-lg sm:rounded-xl hover:bg-white/20 ${isOverDarkSection
                          ? 'text-white hover:text-gray-200'
                          : 'text-gray-600 hover:text-gray-800'
                        }`}
                      aria-label="Menu"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 sm:w-80 bg-white/95 backdrop-blur-3xl border-l border-white/20 shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4 sm:p-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 sm:p-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 rounded-lg sm:rounded-xl hover:bg-gray-100"
                  aria-label="Close Menu"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-1 sm:space-y-2 px-4 sm:px-6">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center p-3 sm:p-4 text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium text-base sm:text-lg rounded-xl sm:rounded-2xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-teal-500/10"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 sm:p-4 text-teal-500 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:text-teal-600 flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base"
                  >
                    <span>Let's Connect</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Liquid Glass Footer - Matching Navbar Design */}
      <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200/50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 xl:px-8 2xl:px-10 py-12 md:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">

            {/* Company Info & Logo */}
            <div className="md:col-span-2 lg:col-span-2 space-y-8 lg:col-start-1">
              {/* Big Logo */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-48 h-24 md:w-64 md:h-32 flex items-center justify-center">
                  <Logo showText={false} />
                </div>
              </div>

              {/* Tagline */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent text-center md:text-left">
                  THE STRONGHOLD OF SMART SOLUTIONS
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl text-center md:text-left">
                  We build innovative software that drives business growth and digital transformation.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
                {/* Facebook */}
                <motion.a
                  href="https://web.facebook.com/profile.php?id=61577218966588"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/codeknox_lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-orange-400 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/company/codeknox"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </motion.a>

                {/* TikTok */}
                <motion.a
                  href="https://tiktok.com/@codeknox"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.05-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/94706633321"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </motion.a>
              </div>
            </div>



            {/* Contact Info & Quick Links */}
            <div className="space-y-8 text-center md:text-right md:col-start-2 lg:col-start-3">
              <h3 className="text-xl font-bold text-gray-900 flex items-center justify-center md:justify-end">
                Get in Touch
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {/* Email Button */}
                <button
                  onClick={() => window.open(`mailto:${companyInfo.email}?subject=Hello from CODEKNOX Website&body=Hi! I'm interested in your services. Please get in touch with me.`, '_blank')}
                  className="flex items-center space-x-2 sm:space-x-3 group justify-center md:justify-end w-full transition-all duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">{companyInfo.email}</p>
                  </div>
                </button>

                {/* Phone Button */}
                <button
                  onClick={() => window.open(`tel:${companyInfo.phone}`, '_blank')}
                  className="flex items-center space-x-2 sm:space-x-3 group justify-center md:justify-end w-full transition-all duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-sm sm:text-base group-hover:text-teal-600 transition-colors duration-300">{companyInfo.phone}</p>
                  </div>
                </button>
              </div>

              {/* Quick Links */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center md:text-right">Quick Links</h4>
                {/* Mobile: Horizontal layout, Desktop: Vertical layout */}
                <div className="md:space-y-3">
                  {/* Mobile: Horizontal grid */}
                  <div className="grid grid-cols-2 gap-2 md:hidden">
                    <Link to="/" className="text-center text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                      <span className="group-hover:text-blue-600">Home</span>
                    </Link>
                    <Link to="/services" className="text-center text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                      <span className="group-hover:text-blue-600">Services</span>
                    </Link>
                    <Link to="/blog" className="text-center text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                      <span className="group-hover:text-blue-600">Blog</span>
                    </Link>
                    <Link to="/projects" className="text-center text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                      <span className="group-hover:text-blue-600">Projects</span>
                    </Link>
                    <Link to="/about" className="text-center text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                      <span className="group-hover:text-blue-600">About</span>
                    </Link>
                    <Link to="/contact" className="text-center text-gray-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100">
                      <span className="group-hover:text-blue-600">Contact</span>
                    </Link>
                  </div>
                  {/* Desktop: Vertical layout */}
                  <div className="hidden md:block space-y-3">
                    <Link to="/" className="block text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group text-right">
                      <span className="group-hover:text-blue-600">Home</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </Link>
                    <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group text-right">
                      <span className="group-hover:text-blue-600">Services</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </Link>
                    <Link to="/blog" className="block text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group text-right">
                      <span className="group-hover:text-blue-600">Blog</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </Link>
                    <Link to="/projects" className="block text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group text-right">
                      <span className="group-hover:text-blue-600">Projects</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </Link>
                    <Link to="/about" className="block text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group text-right">
                      <span className="group-hover:text-blue-600">About</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </Link>
                    <Link to="/contact" className="block text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group text-right">
                      <span className="group-hover:text-blue-600">Contact</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
              <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
                © 2025 {companyInfo.name}. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <Link to="/privacy" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-blue-600 transition-colors duration-300">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />

      {/* Cookie Banner */}
    </div>
  );
};

export default Layout;
