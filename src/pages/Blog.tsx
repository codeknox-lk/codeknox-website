import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, User, ChevronDown, X, BookOpen, Sparkles, ArrowRight, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlog } from "../contexts/BlogContext";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Blog: React.FC = () => {
  const { posts, isLoading, refreshPosts } = useBlog();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [isTagOpen, setIsTagOpen] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error' | 'already_subscribed'>('idle');
  
  const tagRef = useRef<HTMLDivElement>(null);

  // Newsletter subscription handler
  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubscriptionStatus('error');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus('idle');

    try {
      // Check if email already exists in localStorage
      const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
      const existingSubscriber = subscribers.find((sub: any) => sub.email === email);
      
      if (existingSubscriber) {
        setSubscriptionStatus('already_subscribed');
        setIsSubscribing(false);
        return;
      }

      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Send welcome email to subscriber
      const welcomeEmailParams = {
        to_email: email,
        to_name: email.split('@')[0], // Use email prefix as name
        from_name: "CodeKnox Team",
        message: `Welcome to our newsletter! You'll receive the latest insights, tutorials, and industry trends delivered weekly.`,
        reply_to: "sales@codeknox.lk"
      };

      // Send notification email to you (admin) - using correct variable names
      const adminEmailParams = {
        to_email: "sales@codeknox.lk",
        to_name: "CodeKnox Team",
        from_name: "Newsletter Subscription",
        reply_to: email,
        current_date: new Date().toLocaleDateString()
      };

      // Send welcome email to subscriber
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATES.WELCOME, welcomeEmailParams);
      
      // Send admin notification
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATES.ADMIN_NOTIFICATION, adminEmailParams);

      // Add new subscriber to localStorage
      subscribers.push({
        email,
        subscribedAt: new Date().toISOString(),
        source: 'blog'
      });
      
      localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
      
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 5000);
      
    } catch (error) {
      // Silent error handling for production
      setSubscriptionStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tagRef.current && !tagRef.current.contains(event.target as Node)) {
        setIsTagOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get unique tags for filtering
  const allTags = useMemo(() => {
    const tags = posts.flatMap((post) => post.tags);
    const unique = [...new Set(tags)];
    return ["all", ...unique];
  }, [posts]);

  // Filter posts based on search and tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag =
        selectedTag === "all" || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, searchTerm, selectedTag]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Light */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
            >
              INSIGHTS &
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                UPDATES
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Stay updated with the latest trends in technology, design, and digital transformation. Discover insights that can help your business grow and succeed in the digital age.
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
                  className="w-8 h-8 text-blue-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 text-indigo-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 text-purple-400"
                >
                  <Sparkles className="w-full h-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters Section - Dark */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 z-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-50 max-w-6xl mx-auto">
          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/20"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-white placeholder-gray-400"
                />
              </div>

              {/* Tag Filter Dropdown */}
              <div className="relative z-[9999]" ref={tagRef}>
                <button
                  onClick={() => setIsTagOpen(!isTagOpen)}
                  className="flex items-center justify-between w-full sm:w-48 px-4 py-3 bg-white/10 border border-white/20 rounded-xl hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span className="text-sm font-medium text-white">
                    {selectedTag === "all" ? "All Topics" : selectedTag}
                  </span>
                  <motion.div
                    animate={{ rotate: isTagOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isTagOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] overflow-hidden"
                    >
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSelectedTag(tag);
                            setIsTagOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 hover:bg-gray-50 ${
                            selectedTag === tag
                              ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                              : "text-gray-700"
                          }`}
                        >
                          {tag === "all" ? "All Topics" : tag}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Results Count & Clear Filters */}
              <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-400">
                  Showing <span className="text-blue-400 font-semibold">{filteredPosts.length}</span> of <span className="text-blue-400 font-semibold">{posts.length}</span> articles
                </p>
                <button
                  onClick={refreshPosts}
                  className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-colors"
                >
                  Refresh
                </button>
                {(searchTerm || selectedTag !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedTag("all");
                    }}
                    className="flex items-center space-x-2 px-4 py-2 text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-all duration-300 text-sm font-medium border border-red-500/20 hover:border-red-500/40"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section - Light */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8"
            >
              LATEST
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ARTICLES
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover insights, tutorials, and industry trends from our expert team
            </motion.p>
          </motion.div>

          {/* Blog Posts Grid */}
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-16 max-w-lg mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Loading Articles...</h3>
                <p className="text-gray-600 text-lg">
                  Please wait while we load the latest articles.
                </p>
              </div>
            </motion.div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    {/* Blog Post Card */}
                    <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl overflow-hidden hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 h-full">
                      {/* Post Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 flex items-center justify-center" style={{ display: 'none' }}>
                          <span className="text-white font-semibold text-lg sm:text-xl relative z-10">
                            {post.title}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Featured Badge */}
                        {post.featured && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-2 shadow-lg">
                              <BookOpen className="w-3 h-3" />
                              <span>FEATURED</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Post Content */}
                      <div className="p-8 sm:p-10">
                        {/* Post Title & Description */}
                        <div className="space-y-6 mb-8">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Post Meta */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl p-4">
                            <User className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-700 text-sm font-medium">
                              {post.author?.name || 'Unknown Author'}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl p-4">
                            <Clock className="w-5 h-5 text-indigo-500" />
                            <span className="text-gray-700 text-sm font-medium">{post.readingTime} min read</span>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center space-x-3 mb-8">
                          <Calendar className="w-5 h-5 text-purple-500" />
                          <span className="text-gray-600 text-sm font-medium">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Read More Button */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                          <span className="text-blue-600 font-bold text-lg group-hover:text-blue-700 transition-colors duration-300">
                            Read Article
                          </span>
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                          >
                            <ArrowRight className="w-5 h-5 text-white" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
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
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-16 max-w-lg mx-auto">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">No articles found</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag("all");
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup Section - Modern Dark */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Modern Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.15),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-24 h-24 border border-indigo-500/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl rotate-45"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl rotate-12"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Container */}
            <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-500/10">
              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Side - Content */}
                <div className="space-y-8">
                  {/* Heading */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                      Stay Ahead of
                      <br />
                      <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        The Curve
                      </span>
                    </h2>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-300 leading-relaxed"
                  >
                    Get exclusive insights, cutting-edge tutorials, and industry trends delivered weekly. 
                    Join our community of innovators and never miss a breakthrough.
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {[
                      { icon: CheckCircle, text: "Weekly curated content" },
                      { icon: CheckCircle, text: "Exclusive industry insights" },
                      { icon: CheckCircle, text: "Early access to new features" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <feature.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature.text}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Side - Form */}
                <div className="relative">
                  {/* Form Container */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Get Started</h3>
                      <p className="text-gray-400">Enter your email to join our community</p>
                    </div>

                    <form onSubmit={handleNewsletterSubscribe} className="space-y-6">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-white placeholder-gray-400 text-lg transition-all duration-300"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubscribing}
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                      >
                        {isSubscribing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span>Subscribe Now</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      {/* Status Messages */}
                      <AnimatePresence>
                        {subscriptionStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-3"
                          >
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-medium">Welcome to our community!</span>
                          </motion.div>
                        )}
                        {subscriptionStatus === 'already_subscribed' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center space-x-2 text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
                          >
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-medium">You're already subscribed! Thank you for being part of our community.</span>
                          </motion.div>
                        )}
                        {subscriptionStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center"
                          >
                            {email && !email.includes('@') 
                              ? 'Please enter a valid email address.' 
                              : 'Something went wrong. Please try again.'
                            }
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>

                    {/* Trust Indicators */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>No spam</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>Unsubscribe anytime</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Blog;