import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Star
} from "lucide-react";
import { useProjects } from "../contexts/ProjectContext";

const Home: React.FC = () => {
  const { projects } = useProjects();
  const containerRef = useRef<HTMLDivElement>(null);

  // Get featured projects for testimonials
  const featuredProjects = projects.filter(project => project.featured);





  const capabilities = [
    "Websites", "UX/UI Design", "Web Applications", "Mobile Apps", "POS Systems",
    "E-Commerce", "System Management", "Social Media Marketing", "Database Design", "Custom Software"
  ];



  const processSteps = [
    { step: "01", title: "Discover", description: "We analyze your requirements and define the project scope" },
    { step: "02", title: "Design", description: "Create wireframes, prototypes, and user experience flows" },
    { step: "03", title: "Build", description: "Develop your solution using modern technologies and best practices" },
    { step: "04", title: "Test", description: "Comprehensive testing to ensure quality and performance" },
    { step: "05", title: "Launch", description: "Deploy and monitor your application with ongoing support" }
  ];

  // Slider navigation functions


  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-800 overflow-x-hidden pt-0">


      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-6 md-lg:px-7 lg:px-8 relative overflow-hidden pt-12 sm:pt-16 md:pt-16 md-lg:pt-18 lg:pt-20">
        {/* Beautiful Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

        {/* Floating Sparkles - Responsive Positioning */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-400/20 to-teal-500/20 rounded-full blur-lg sm:blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-[20%] right-[10%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-xl sm:blur-2xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-24 sm:bottom-28 md:bottom-30 md-lg:bottom-32 left-1/4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 md-lg:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500/15 to-teal-600/15 rounded-full blur-md sm:blur-lg"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-screen-2xl mx-auto flex justify-center relative z-10 w-full px-4 xl:px-8 2xl:px-10">
          {/* Centered Content - Responsive Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center space-y-2 sm:space-y-3 md:space-y-3 md-lg:space-y-4 lg:space-y-6 text-center px-4 sm:px-6 md:px-6 md-lg:px-7 lg:px-8 hero-section"
          >
            {/* Build Smart - Consistent sizing */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.3, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-gray-900 leading-tight tracking-tight uppercase"
              >
                BUILD SMART v2.0
              </motion.h2>
            </motion.div>

            {/* Build Bold - Consistent sizing */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.3, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-gray-900 leading-tight tracking-tight uppercase"
              >
                BUILD BOLD.
              </motion.h2>
            </motion.div>

            {/* Build with - Consistent sizing */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.3, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-gray-900 leading-tight tracking-tight uppercase"
              >
                BUILD WITH
              </motion.h2>
            </motion.div>

            {/* CODEKNOX - Consistent sizing with mobile fallback */}
            <motion.div
              initial={{ opacity: 0, scale: 0.1, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black leading-tight tracking-tight"
                style={{ color: '#07697f' }}
                initial={{ filter: "blur(20px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: "easeOut"
                }}
              >
                CODEKNOX.
              </motion.h2>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Marquee */}
      <section className="py-8 sm:py-12 md:py-16 border-y border-gray-200 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-teal-50/30"></div>

        <div className="relative z-10">
          {/* Infinite Marquee */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1250] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "reverse"
              }}
              className="flex space-x-6 sm:space-x-8 md:space-x-12 whitespace-nowrap"
            >
              {/* First set of capabilities */}
              {capabilities.map((capability, index) => (
                <div key={`first-${index}`} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <span>{capability}</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500" />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {capabilities.map((capability, index) => (
                <div key={`second-${index}`} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <span>{capability}</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500" />
                </div>
              ))}

              {/* Third set to ensure smooth transition */}
              {capabilities.map((capability, index) => (
                <div key={`third-${index}`} className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-sm sm:text-base md:text-lg font-medium text-gray-600 flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <span>{capability}</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storytelling Services - Big Typography */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Minimal Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        {/* Story Header */}
        <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4 sm:px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12"
            >
              <span className="text-sm sm:text-base md:text-lg text-gray-400 font-light tracking-widest">
                YOUR SUCCESS STORY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight tracking-tight"
            >
              WE TRANSFORM
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Your vision into powerful digital solutions that drive real business growth
            </motion.p>
          </motion.div>
        </div>

        {/* Storytelling Services */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 xl:px-8 2xl:px-10">
          {/* Service 1: Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 sm:mb-20 md:mb-24 lg:mb-24 xl:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-400 leading-none">
                    01
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
                >
                  WEBSITES
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-6 sm:mb-8"
                >
                  We don't just build websites. We create digital experiences that connect, engage, and convert.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                >
                  <Link to="/services" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-lg font-bold">→</span>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-blue-400 transition-colors duration-300">Discover More</span>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full aspect-[4/3] md:aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl border border-blue-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/websites.jpg"
                    alt="Digital Experience Creation - Websites that Connect, Engage and Convert"
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Service 2: Mobile Apps */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 sm:mb-20 md:mb-24 lg:mb-24 xl:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="w-full aspect-[4/3] md:aspect-video bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl border border-green-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/mobile.png"
                    alt="Mobile Apps that Feel Like Magic in Your Pocket"
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl"></div>
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-400 leading-none">
                    02
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
                >
                  MOBILE APPS
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-6 sm:mb-8"
                >
                  Apps that don't just work. They feel like magic in your pocket.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                >
                  <Link to="/services" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-lg font-bold">→</span>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-green-400 transition-colors duration-300">Learn More</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Service 3: Custom Software */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-purple-400 leading-none">
                    03
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
                >
                  CUSTOM SOFTWARE
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-6 sm:mb-8"
                >
                  When off-the-shelf doesn't cut it. We build exactly what you need.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                >
                  <Link to="/services" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-lg font-bold">→</span>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-purple-400 transition-colors duration-300">Explore</span>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-purple-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/custom-software.jpeg"
                    alt="Custom Software Built Exactly What You Need"
                    className="w-full h-full object-cover rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Service 4: E-Commerce Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl border border-orange-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/ecommerce.jpg"
                    alt="E-Commerce Solutions that Turn Browsers into Buyers"
                    className="w-full h-full object-cover rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl"></div>
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-orange-400 leading-none">
                    04
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
                >
                  E-COMMERCE
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-6 sm:mb-8"
                >
                  Turn browsers into buyers with powerful online stores that sell 24/7.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                >
                  <Link to="/services" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-lg font-bold">→</span>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-orange-400 transition-colors duration-300">Shop Now</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Service 5: UX/UI Design */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-pink-400 leading-none">
                    05
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
                >
                  UX/UI DESIGN
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-6 sm:mb-8"
                >
                  Beautiful interfaces that users fall in love with at first sight.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                >
                  <Link to="/services" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-lg font-bold">→</span>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-pink-400 transition-colors duration-300">Design More</span>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 rounded-3xl border border-blue-600/30 backdrop-blur-sm flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgb(26, 36, 64)' }}>
                  <img
                    src="/ui-ux.webp"
                    alt="UX/UI Design that Users Fall in Love With"
                    className="w-full h-full object-contain rounded-3xl opacity-95 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Service 6: System Management */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="System Management for Smooth Digital Infrastructure"
                    className="w-full h-full object-cover rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl"></div>
                </div>
              </motion.div>

              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-cyan-400 leading-none">
                    06
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight"
                >
                  SYSTEM MANAGEMENT
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-6 sm:mb-8"
                >
                  Keep your digital infrastructure running smoothly, securely, and efficiently.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                >
                  <Link to="/services" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-lg font-bold">→</span>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">Manage</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* More Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border-2 border-blue-500 text-blue-400 px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="flex items-center space-x-2 sm:space-x-3">
                  <span>Explore All Services</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg sm:text-xl md:text-2xl"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Story Ending */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center py-12 sm:py-16 md:py-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight"
            >
              READY TO START?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light mb-8 sm:mb-10 md:mb-12"
            >
              Your story begins here
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  LET'S BUILD
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Featured Projects - Beautiful Light Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Projects Header */}
        <div className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto px-4 sm:px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-600 font-semibold rounded-full border border-blue-200/50 backdrop-blur-sm text-sm sm:text-base">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight text-gray-900"
            >
              Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Digital masterpieces that showcase innovation and drive measurable success
            </motion.p>
          </motion.div>
        </div>

        {/* Beautiful Project Cards */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 xl:px-8 2xl:px-10">
          {/* Project 1: E-Commerce Platform */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-4 sm:mb-6"
                  >
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-600 font-semibold rounded-full border border-blue-200/50 text-xs sm:text-sm">
                      HEALTHCARE
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight text-gray-900"
                  >
                    SmileHub Dental Care
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6"
                  >
                    A professional dental clinic website showcasing premium dental services and modern patient care in Kandy, Sri Lanka.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                  >
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium rounded-full">🚀 300% Revenue</span>
                      <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm font-medium rounded-full">📱 Mobile-First</span>
                      <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 text-xs sm:text-sm font-medium rounded-full">💳 Secure</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/projects/smilehub-dental" className="inline-flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-white text-sm sm:text-base md:text-lg font-bold">→</span>
                      </div>
                      <span className="text-sm sm:text-base md:text-lg text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">View Case Study</span>
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
                >
                  <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl border border-blue-200/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <img
                      src="/projects/smile-hub hero.jpg"
                      alt="SmileHub Dental Care - Professional Dental Services"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Fort Knox Quantity Surveying */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 order-2 lg:order-1"
                >
                  <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl sm:rounded-2xl border border-green-200/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <img
                      src="/projects/fort-knox hero.jpg"
                      alt="Fort Knox Quantity Surveying - Professional Construction Services"
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>

                <div className="p-6 sm:p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-4 sm:mb-6"
                  >
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-600 font-semibold rounded-full border border-green-200/50 text-xs sm:text-sm">
                      CONSTRUCTION
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight text-gray-900"
                  >
                    Fort Knox Quantity Surveying
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6"
                  >
                    A professional quantity surveying service provider website showcasing expertise in cost planning, BoQ preparation, and construction consulting.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                  >
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm font-medium rounded-full">🔒 Bank-Level Security</span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium rounded-full">👥 100K+ Users</span>
                      <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 text-xs sm:text-sm font-medium rounded-full">📊 Real-Time</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/projects/fort-knox-quantity-surveying" className="inline-flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-white text-sm sm:text-base md:text-lg font-bold">→</span>
                      </div>
                      <span className="text-sm sm:text-base md:text-lg text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">Explore Project</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3: Wildscapia Environmental News */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 sm:mb-16 md:mb-20 lg:mb-32"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-emerald-500/10 to-green-500/10 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 order-2 lg:order-1"
                >
                  <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-black rounded-xl sm:rounded-2xl border border-gray-200/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <img
                      src="/projects/wildscapia logo.jpg"
                      alt="Wildscapia - Environmental Science & Conservation News"
                      className="w-full h-full object-contain rounded-xl sm:rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>

                <div className="p-6 sm:p-8 md:p-12 lg:p-16 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-4 sm:mb-6"
                  >
                    <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 text-emerald-600 font-semibold rounded-full border border-emerald-200/50 text-xs sm:text-sm">
                      ENVIRONMENTAL
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight"
                  >
                    WILDSCAPIA
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6"
                  >
                    A comprehensive environmental science and conservation news platform featuring wildlife articles and environmental impact stories from around the world.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6 sm:mb-8"
                  >
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <span className="px-2 sm:px-3 py-1 bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-medium rounded-full">🌍 Global Reach</span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium rounded-full">📰 News Platform</span>
                      <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 text-xs sm:text-sm font-medium rounded-full">🦋 Wildlife Focus</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Link to="/projects/wildscapia-environmental-news" className="inline-flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-white text-sm sm:text-base md:text-lg font-bold">→</span>
                      </div>
                      <span className="text-sm sm:text-base md:text-lg text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300">Discover Project</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-500 to-teal-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-full hover:from-blue-600 hover:to-teal-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 border-0"
              >
                <span className="flex items-center space-x-2 sm:space-x-3">
                  <span>View All Projects</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg sm:text-xl md:text-2xl"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Process - Modern Grid Design */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div>
          <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
            >
              HOW WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">BUILD</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-400 font-light"
            >
              A refined workflow designed for speed, precision, and scalability.
            </motion.p>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-y-1/2 z-0"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative z-10"
              >
                <div className="h-full bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-gray-800/50 hover:border-green-500/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col items-start justify-between">

                  {/* Step Number */}
                  <div className="mb-6 relative">
                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-600/20 to-emerald-600/20 group-hover:from-green-500/40 group-hover:to-emerald-500/40 transition-all duration-500 select-none">
                      {step.step}
                    </span>
                    <div className="absolute top-1/2 -right-4 w-12 h-12 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon/Decoration */}
                  <div className="mt-8 w-full flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-500">
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link to="/contact">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 hover:bg-green-500 active:scale-95">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-3">
                  Start Your Project
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand New Testimonials Slider */}
      {/* Beautiful New Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm"
            >
              <span className="mr-1 sm:mr-2">✨</span>
              Client Success Stories
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8"
            >
              What Our Clients Say
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Real feedback from businesses we've transformed with our innovative solutions
            </motion.p>
          </motion.div>

          {/* Testimonials Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/projects/${project.id}`} className="block">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] relative overflow-hidden cursor-pointer">
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index === 0 ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20' :
                      index === 1 ? 'bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20' :
                        'bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20'
                      }`} />
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold mr-3 sm:mr-4 shadow-lg ${index === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                          index === 1 ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                            'bg-gradient-to-br from-emerald-500 to-green-500'
                          }`}>
                          {project.testimonial?.author?.charAt(0) || 'C'}
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{project.testimonial?.author || 'Client'}</h4>
                          <p className="text-sm sm:text-base text-gray-600 font-medium">{project.testimonial?.role || 'Client'}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4 sm:mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic relative">
                        <span className={`absolute -top-1 sm:-top-2 -left-1 sm:-left-2 text-2xl sm:text-3xl md:text-4xl ${index === 0 ? 'text-blue-200' :
                          index === 1 ? 'text-green-200' :
                            'text-emerald-200'
                          }`}>"</span>
                        {project.testimonial?.text || 'Great work!'}
                      </blockquote>

                      {/* Project Link Indicator */}
                      <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                        <span>View Project →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link to="/contact">
              <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base">
                <span>Ready to join our success stories?</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l7 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Beautiful Start Your MVP Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]"></div>
        </div>

        {/* Floating Geometric Shapes - Mobile Optimized */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
          style={{
            background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(34, 211, 238, 0.05))',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.95, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          style={{
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: 180
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          style={{
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 sm:space-y-10 md:space-y-12"
          >
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
              >
                Ship Your{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  MVP
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
              >
                Ready to turn your idea into reality? Let's build something amazing together and launch your product to the world.
              </motion.p>
            </div>



            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                  />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:hello@codeknox.com?subject=Book a Call - CODEKNOX&body=Hi! I would like to schedule a consultation call to discuss my project. Please let me know your available times.', '_blank')}
                className="group px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-full border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 bg-transparent transition-all duration-500 hover:shadow-lg hover:shadow-cyan-400/25 cursor-pointer"
              >
                <span className="flex items-center space-x-1 sm:space-x-2">
                  <span>Schedule a Call</span>
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 border border-current rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xs">→</span>
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="pt-6 sm:pt-8 border-t border-gray-700/50"
            >
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">Trusted by innovative companies</p>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-6 md:gap-8 justify-items-center items-center">
                {/* Company Logos */}
                <div className="w-20 h-10 sm:w-28 sm:h-14 md:w-32 md:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-1 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300 shadow-lg overflow-hidden">
                  <img
                    src="/logos/company1-logo.png"
                    alt="Company 1"
                    className="w-full h-full object-cover filter brightness-110 contrast-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="w-20 h-10 sm:w-28 sm:h-14 md:w-32 md:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-1 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300 shadow-lg overflow-hidden">
                  <img
                    src="/logos/company2-logo.png"
                    alt="Company 2"
                    className="w-full h-full object-cover filter brightness-110 contrast-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="w-20 h-10 sm:w-28 sm:h-14 md:w-32 md:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-1 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300 shadow-lg overflow-hidden">
                  <img
                    src="/logos/company3-logo.png"
                    alt="Company 3"
                    className="w-full h-full object-cover filter brightness-110 contrast-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;