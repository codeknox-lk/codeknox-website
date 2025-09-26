import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Check, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../data/services';

const Services: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPackages, setSelectedPackages] = useState<{[key: string]: 'bronze' | 'silver' | 'gold' | 'custom'}>({
    'ui-ux-design': 'bronze',
    'website-development': 'bronze',
    'no-code-websites': 'bronze',
    'system-management': 'bronze',
    'mobile-app-design': 'bronze',
    'social-media-marketing': 'bronze',
    'saas-mvp': 'bronze',
    'ai-design-support': 'bronze',
    'maintenance': 'bronze'
  });

  // Carousel configuration
  const itemsPerSlide = 3; // Show 3 items at once on desktop
  const totalSlides = Math.ceil(services.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple websites take 1-3 weeks, while complex applications can take 8-12 weeks. We provide detailed timelines during the proposal phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages including updates, security patches, performance monitoring, and technical support. We can customize support plans based on your needs."
    },
    {
      question: "Who owns the intellectual property of the work?",
      answer: "You own 100% of the intellectual property rights to your project. We retain rights only to any reusable components or libraries we've developed separately."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We typically require 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers and major credit cards."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can handle hosting setup, domain registration, and ongoing management. We work with reliable hosting providers to ensure optimal performance and uptime."
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight px-4"
            >
              OUR
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                DIGITAL
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                SERVICES
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed px-4"
            >
              From concept to deployment, we provide end-to-end digital solutions that drive growth and innovation for businesses across Sri Lanka and beyond.
            </motion.p>

            {/* Floating Sparkles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex justify-center"
            >
              <div className="flex space-x-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 text-green-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 text-emerald-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 text-teal-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
              </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Light */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.03),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8"
            >
              SERVICES
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                OVERVIEW
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto px-4 mb-8"
            >
              We offer comprehensive digital solutions to transform your business. Each service comes with three flexible packages (Bronze, Silver, Gold) plus custom solutions tailored to your specific needs.
            </motion.p>
          </motion.div>

          {/* Services Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-3xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                  width: `${totalSlides * 100}%`
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2">
                      {services
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((service, index) => (
                        <motion.div
                key={service.id}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2 h-full overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-100/30 to-cyan-100/30 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
                            
                            <div className="relative space-y-4 sm:space-y-6">
                              <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{service.title}</h3>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <p className="text-sm text-gray-500 font-medium">Timeline: {service.timeline}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                                {service.description}
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {service.features.slice(0, 3).map((feature, i) => (
                                  <motion.span 
                                    key={i} 
                                    className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs rounded-full border border-gray-200 group-hover:from-green-50 group-hover:to-emerald-50 group-hover:border-green-200 group-hover:text-green-700 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {feature}
                                  </motion.span>
                                ))}
                              </div>

                              {/* Enhanced Package Indicator */}
                              <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-green-200 transition-colors duration-300">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">4 Package Options</span>
                                  </div>
                                  <motion.button
                                    onClick={() => {
                                      document.getElementById('comprehensive-solutions')?.scrollIntoView({ 
                                        behavior: 'smooth',
                                        block: 'start'
                                      });
                                    }}
                                    className="text-green-500 group-hover:text-green-600 transition-colors duration-300 hover:bg-green-50 p-1 rounded-full"
                                    whileHover={{ x: 3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <ArrowRight className="w-4 h-4" />
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Previous Button */}
              <motion.button
                onClick={prevSlide}
                className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
              </motion.button>

              {/* Dot Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-green-500 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextSlide}
                className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
              </motion.button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500 font-medium">
                {currentSlide + 1} of {totalSlides}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section - Dark */}
      <section id="comprehensive-solutions" className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(20,184,166,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8"
            >
              COMPREHENSIVE
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                DIGITAL SOLUTIONS
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto"
            >
              From design to deployment, we provide end-to-end solutions that drive growth and innovation
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group scroll-mt-20"
              >
                {/* Service Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2">
                  {/* Service Header */}
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Package Selector for All Services */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-6">Choose Your Package:</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {[
                          { key: 'bronze', label: 'Bronze', color: 'from-amber-600 via-amber-700 to-amber-800', shadow: 'shadow-amber-500/25' },
                          { key: 'silver', label: 'Silver', color: 'from-gray-200 via-gray-300 to-gray-400', shadow: 'shadow-gray-400/30' },
                          { key: 'gold', label: 'Gold', color: 'from-yellow-400 via-yellow-500 to-yellow-600', shadow: 'shadow-yellow-500/25' },
                          { key: 'custom', label: 'Custom', color: 'from-cyan-100 via-blue-100 to-indigo-200', shadow: 'shadow-cyan-400/30' }
                        ].map((packageOption) => (
                          <button
                            key={packageOption.key}
                            onClick={() => setSelectedPackages(prev => ({...prev, [service.id]: packageOption.key as any}))}
                            className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                              selectedPackages[service.id] === packageOption.key
                                ? `bg-gradient-to-r ${packageOption.color} text-white border-transparent shadow-lg ${packageOption.shadow}`
                                : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10'
                            }`}
                          >
                            <div className="text-center">
                              <div className="font-bold text-lg">{packageOption.label}</div>
                              {service.packagePricing && (
                                <div className="text-sm mt-1 opacity-90">
                                  {service.packagePricing[packageOption.key as keyof typeof service.packagePricing]}
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                        <Check className="w-6 h-6 text-green-400" />
                        <span>
                          What you'll get ({selectedPackages[service.id].charAt(0).toUpperCase() + selectedPackages[service.id].slice(1)}):
                        </span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(selectedPackages[service.id] !== 'custom' 
                          ? service.tierDeliverables?.[selectedPackages[service.id] as 'bronze' | 'silver' | 'gold'] || []
                          : []
                        ).map((deliverable, i) => (
                          <div key={i} className="flex items-start space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{deliverable}</span>
                          </div>
                        ))}
                        {selectedPackages[service.id] === 'custom' && (
                          <div className="col-span-2 flex items-center space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">Custom features tailored to your specific requirements</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Service Meta */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Timeline</p>
                          <p className="text-white font-bold text-lg">{service.timeline}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Selected Package</p>
                          <div className="flex flex-col gap-1">
                            <span className="text-emerald-400 font-bold text-sm">
                              {selectedPackages[service.id].charAt(0).toUpperCase() + selectedPackages[service.id].slice(1)} - {service.packagePricing?.[selectedPackages[service.id] as keyof typeof service.packagePricing]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-white mb-4">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-3">
                          {service.features.map((feature, i) => (
                          <span key={i} className="px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20 font-medium">
                              {feature}
                          </span>
                          ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div 
                      className="flex items-center justify-between pt-6 border-t border-white/10 cursor-pointer group/btn"
                      onClick={() => {
                        const subject = `Request Proposal - ${service.title} - CODEKNOX`;
                        const body = `Hi! I would like to request a proposal for your ${service.title} service. Please provide me with detailed information about this service including pricing, timeline, and deliverables.`;
                        window.open(`mailto:hello@codeknox.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
                      }}
                    >
                      <span className="text-green-400 font-bold text-xl group-hover:text-green-300 group-hover/btn:text-green-300 transition-colors duration-300">
                        Request Proposal
                      </span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover/btn:shadow-green-500/25 transition-all duration-300"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section - Light */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.03),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8"
            >
              FREQUENTLY ASKED
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                QUESTIONS
              </span>
            </motion.h2>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
              Get answers to common questions about our services, process, and pricing.
            </motion.p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl overflow-hidden hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left group"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors duration-300"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  </button>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.08),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-10"
            >
              READY TO CREATE
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                SOMETHING AMAZING?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss your project requirements and create a custom solution that fits your budget and timeline. Our team is ready to help you bring your vision to life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-14 py-6 text-2xl font-bold rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-500"
                >
                  <span className="relative z-10">Get a Free Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                  />
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-14 py-6 text-2xl font-bold rounded-full border-3 border-gray-400 text-gray-300 hover:border-green-400 hover:text-green-400 bg-transparent transition-all duration-500 hover:shadow-lg hover:shadow-green-400/25"
                >
                  <span className="flex items-center space-x-3">
                    <span>Schedule a Call</span>
                    <motion.div
                      className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-sm">→</span>
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

