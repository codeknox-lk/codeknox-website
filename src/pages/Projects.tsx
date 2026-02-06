import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, Star, TrendingUp, Sparkles, ChevronDown, X, Tag, Calendar, CheckCircle } from "lucide-react";
import { useProjects } from "../contexts/ProjectContext";

const Projects: React.FC = () => {
  const { projects, isLoading, migrateProjects } = useProjects();
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("all");
  const [isIndustryOpen, setIsIndustryOpen] = useState<boolean>(false);
  const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);

  const industryRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIsIndustryOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get unique categories and technologies for filters
  const categories = useMemo(() => {
    const unique = [...new Set(projects.map((project) => project.category))];
    return ["all", ...unique];
  }, [projects]);

  const technologies = useMemo(() => {
    const allTechnologies = projects.flatMap((project) => project.technologies);
    const unique = [...new Set(allTechnologies)];
    return ["all", ...unique];
  }, [projects]);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedIndustry === "all" || project.category === selectedIndustry;
      const technologyMatch =
        selectedService === "all" || project.technologies.includes(selectedService);
      return categoryMatch && technologyMatch;
    });
  }, [projects, selectedIndustry, selectedService]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
      </div>
    );
  }

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
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              OUR
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                DIGITAL
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Discover how we transform ideas into digital reality. Each project tells a story of innovation, creativity, and measurable success.
            </motion.p>

            {/* Floating Sparkles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <div className="flex space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 text-green-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 text-emerald-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 text-teal-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters Section - Light */}
      <section className="relative py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 z-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        </div>

        <div className="relative z-50 max-w-6xl mx-auto">
          {/* Dropdown Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 shadow-xl shadow-green-500/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              {/* Filter Title & Results */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Filter Projects</h3>
                  <p className="text-sm text-gray-600">
                    Showing <span className="text-green-600 font-semibold">{filteredProjects.length}</span> of <span className="text-green-600 font-semibold">{projects.length}</span> projects
                  </p>
                </div>
              </div>

              {/* Dropdown Filters - Side-by-side on mobile */}
              <div className="grid grid-cols-2 gap-4 w-full sm:w-auto">
                {/* Category Dropdown */}
                <div className="relative z-[9999]" ref={industryRef}>
                  <button
                    onClick={() => setIsIndustryOpen(!isIndustryOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {selectedIndustry === "all" ? "All Categories" : selectedIndustry}
                    </span>
                    <motion.div
                      animate={{ rotate: isIndustryOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isIndustryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] overflow-hidden"
                      >
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedIndustry(category);
                              setIsIndustryOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 hover:bg-gray-50 ${selectedIndustry === category
                              ? "bg-green-50 text-green-700 border-l-4 border-green-500"
                              : "text-gray-700"
                              }`}
                          >
                            {category === "all" ? "All Categories" : category}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Technology Dropdown */}
                <div className="relative z-[9999]" ref={serviceRef}>
                  <button
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {selectedService === "all" ? "All Technologies" : selectedService}
                    </span>
                    <motion.div
                      animate={{ rotate: isServiceOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isServiceOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] overflow-hidden"
                      >
                        {technologies.map((technology) => (
                          <button
                            key={technology}
                            onClick={() => {
                              setSelectedService(technology);
                              setIsServiceOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 hover:bg-gray-50 ${selectedService === technology
                              ? "bg-emerald-50 text-emerald-700 border-l-4 border-emerald-500"
                              : "text-gray-700"
                              }`}
                          >
                            {technology === "all" ? "All Technologies" : technology}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Clear Filters */}
                {(selectedIndustry !== "all" || selectedService !== "all") && (
                  <button
                    onClick={() => {
                      setSelectedIndustry("all");
                      setSelectedService("all");
                    }}
                    className="flex items-center space-x-2 px-4 py-3 text-red-600 hover:text-white bg-red-50 hover:bg-red-500 rounded-xl transition-all duration-300 text-sm font-medium border border-red-200 hover:border-red-500"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section - Dark */}
      <section className="relative py-20 sm:py-24 md:py-24 lg:py-20 xl:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8"
            >
              FEATURED
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto"
            >
              Each project represents our commitment to excellence and innovation
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/projects/${project.id}`}>
                    {/* Project Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2">
                      {/* Project Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
                          }}
                          onLoad={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.opacity = '1';
                          }}
                          style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-2 shadow-lg">
                              <Star className="w-3 h-3" />
                              <span>FEATURED</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-8 sm:p-10">
                        {/* Project Title & Description */}
                        <div className="space-y-6 mb-8">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white group-hover:text-green-300 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Project Meta */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                          <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4">
                            <Tag className="w-5 h-5 text-green-400" />
                            <span className="text-gray-300 text-base">{project.category}</span>
                          </div>
                          <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4">
                            <Calendar className="w-5 h-5 text-emerald-400" />
                            <span className="text-gray-300 text-base">{project.completedAt}</span>
                          </div>
                        </div>

                        {/* Category & Technologies */}
                        <div className="space-y-6 mb-8">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Category:</span>
                            <span className="text-green-400 font-bold text-lg">{project.category}</span>
                          </div>

                          <div>
                            <span className="text-sm text-gray-500 uppercase tracking-wider block mb-3 font-semibold">Technologies:</span>
                            <div className="flex flex-wrap gap-3">
                              {project.technologies.slice(0, 3).map((technology) => (
                                <span key={technology} className="px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20 font-medium">
                                  {technology}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full border border-white/20 font-medium">
                                  +{project.technologies.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        {project.features.length > 0 && (
                          <div className="mb-8">
                            <div className="flex items-center space-x-3 mb-4">
                              <TrendingUp className="w-6 h-6 text-emerald-400" />
                              <span className="text-emerald-400 font-bold text-xl">Key Features</span>
                            </div>
                            <div className="space-y-2">
                              {project.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                              ))}
                              {project.features.length > 3 && (
                                <div className="text-gray-400 text-sm">
                                  +{project.features.length - 3} more features
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* View Project Button */}
                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                          <span className="text-green-400 font-bold text-xl group-hover:text-green-300 transition-colors duration-300">
                            View Project
                          </span>
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <ArrowRight className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 max-w-lg mx-auto">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Filter className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">No projects found</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  {projects.length === 0
                    ? "No projects are currently available. Click below to load default projects."
                    : "Try adjusting your filters to see more projects."
                  }
                </p>
                <div className="space-y-4">
                  <button
                    onClick={migrateProjects}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                  >
                    Load Default Projects
                  </button>
                  <button
                    onClick={() => {
                      setSelectedIndustry("all");
                      setSelectedService("all");
                    }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section - Light */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
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
              className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-gray-900 mb-10 leading-tight tracking-tight"
            >
              READY TO CREATE
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                SOMETHING AMAZING?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss your project requirements and create something extraordinary together. Our team is ready to help you bring your vision to life.
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
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                  />
                </motion.button>
              </Link>

              {/* Schedule a Call Button - Opens Email Client */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:sales@codeknox.lk?subject=Schedule a Call - CODEKNOX&body=Hi! I would like to schedule a consultation call to discuss my project. Please let me know your available times.', '_blank')}
                className="group px-14 py-6 text-2xl font-bold rounded-full border-3 border-gray-300 text-gray-700 hover:border-green-400 hover:text-green-600 bg-transparent transition-all duration-500 hover:shadow-lg hover:shadow-green-400/25"
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Horizontal Infinite Scroll Text Section */}
      <section className="py-40 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden relative">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-teal-500/3"></div>

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Subtle geometric shapes */}
          <motion.div
            className="absolute top-20 right-20 w-24 h-24 border border-emerald-400/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-teal-400/5 to-emerald-400/5"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{
              rotate: -360,
              y: [0, -15, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Main scrolling text layer with enhanced typography */}
          <motion.div
            className="flex whitespace-nowrap mb-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: "fit-content" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`main-${setIndex}-${i}`}
                    className="text-5xl md:text-6xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-teal-400 flex-shrink-0 mr-12 sm:mr-24 tracking-tight px-4"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #6ee7b7, #34d399, #10b981, #059669, #047857)',
                      backgroundSize: '400% 400%',
                      animation: `gradientShift 6s ease-in-out infinite ${i * 1}s`,
                      textShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                      filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.2))'
                    }}
                    whileHover={{
                      scale: 1.02,
                      filter: "brightness(1.3) drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))"
                    }}
                  >
                    THE STRONGHOLD OF SMART SOLUTIONS
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Secondary scrolling text layer with refined styling */}
          <motion.div
            className="flex whitespace-nowrap mb-8"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: "fit-content" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={`set-sec-${setIndex}`} className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`secondary-${setIndex}-${i}`}
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-gray-200 to-slate-300 flex-shrink-0 mr-12 sm:mr-20 opacity-40 tracking-wide px-4"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #cbd5e1, #e2e8f0, #cbd5e1)',
                      backgroundSize: '200% 200%',
                      animation: `gradientShift 8s ease-in-out infinite ${i * 1.5}s`,
                      textShadow: '0 0 15px rgba(203, 213, 225, 0.2)'
                    }}
                  >
                    INNOVATION • EXCELLENCE • RELIABILITY
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Accent line */}
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>

        {/* Enhanced overlay gradients with better blending */}
        <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-slate-900 via-slate-900/80 via-slate-900/40 to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-slate-900 via-slate-900/80 via-slate-900/40 to-transparent z-20"></div>

        {/* Top and bottom fade with enhanced blending */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-900 via-slate-900/60 to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-20"></div>

        {/* Interactive hover effects with improved responsiveness */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none"
          whileHover={{ opacity: 0.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-teal-400/0"></div>
        </motion.div>

        {/* Subtle border accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent"></div>
      </section>
    </div>
  );
};

export default Projects;
