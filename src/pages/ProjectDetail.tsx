import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react";
import { useProjects } from "../contexts/ProjectContext";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { projects, isLoading } = useProjects();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const project = projects.find((p) => p.id === slug);

  // Get current project index and next/previous projects
  const currentIndex = projects.findIndex((p) => p.id === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1];

  useEffect(() => {
    if (!isLoading && !project) {
      navigate("/projects");
    }
  }, [project, navigate, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
        
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-10"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
            }}
          />
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 mb-8"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Projects</span>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="accent"
                        className="text-white bg-white/20 border-white/30"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight px-4">
                    {project.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed px-4">
                    {project.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Completed</p>
                      <p className="font-semibold text-white">{project.completedAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Category</p>
                      <p className="font-semibold text-white">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Star className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="font-semibold text-white">{project.featured ? 'Featured' : 'Completed'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Content - Light */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.03),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
                  OVERVIEW
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl leading-relaxed">{project.longDescription || project.description}</p>
              </motion.div>

              {/* Problem */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
                  THE
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    PROBLEM
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl leading-relaxed">{project.longDescription || project.description}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
                  OUR
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    SOLUTION
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl leading-relaxed">{project.longDescription || project.description}</p>
              </motion.div>


              {/* Tech Stack */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8">
                  TECHNOLOGY
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    STACK
                  </span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-lg px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info Card */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Project Details</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                          Completed
                        </p>
                        <p className="font-semibold text-gray-900">{project.completedAt}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                          Category
                        </p>
                        <p className="font-semibold text-gray-900">{project.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                          Status
                        </p>
                        <p className="font-semibold text-gray-900">{project.featured ? 'Featured' : 'Completed'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                          Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((technology) => (
                            <Badge key={technology} variant="primary" size="sm">
                              {technology}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {project.websiteUrl && (
                        <Button 
                          variant="accent" 
                          fullWidth
                          onClick={() => window.open(project.websiteUrl, '_blank')}
                        >
                          Visit Website
                          <ExternalLink size={20} />
                        </Button>
                      )}
                      <Link to="/contact" className="block">
                        <Button variant="primary" fullWidth>
                          Start Similar Project
                          <ExternalLink size={20} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 text-sm italic leading-relaxed">
                      "{project.testimonial?.text || 'No testimonial available'}"
                    </blockquote>
                    <div className="flex items-center space-x-3 pt-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {project.testimonial?.author?.charAt(0) || 'N'}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">
                          {project.testimonial?.author || 'Client'}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {project.testimonial?.role || 'Client'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Dark */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
                PROJECT
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  GALLERY
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 shadow-2xl"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsImageModalOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation - Light */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.03),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6"
          >
            {/* Previous Project */}
            <Link to={`/projects/${prevProject.slug}`} className="flex-1 group">
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 group-hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4">
                  <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors duration-200" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                      Previous Project
                    </p>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                      {prevProject.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Next Project */}
            <Link to={`/projects/${nextProject.slug}`} className="flex-1 group">
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 group-hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 text-right">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                      Next Project
                    </p>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                      {nextProject.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors duration-200" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8">
              READY TO START
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                YOUR PROJECT?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project requirements and create something
              amazing together. Our team is ready to help you bring your vision
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg">
                Start Your Project
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg border-white text-white hover:bg-white hover:text-black"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-xl max-h-[80vh]"
              />
              {/* Navigation arrows */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(
                      currentImageIndex === 0 ? project.gallery.length - 1 : currentImageIndex - 1
                    )}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(
                      currentImageIndex === project.gallery.length - 1 ? 0 : currentImageIndex + 1
                    )}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                  >
                    <ArrowRight size={24} />
                  </button>
                </>
              )}
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.gallery.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
