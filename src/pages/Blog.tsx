import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Sparkles,
  X,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { Link } from "react-router-dom";
import { useBlog } from "../contexts/BlogContext";
import SEO from "../components/SEO";

const Blog: React.FC = () => {
  const { posts, isLoading } = useBlog();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const tags = ["All", ...Array.from(new Set(posts.flatMap(post => post.tags)))].slice(0, 8);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [posts, searchTerm, selectedTag]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsNewsletterSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Blog - Insights on Tech, Design & Digital Growth"
        description="Stay updated with the latest in technology, web development trends, and digital strategy. Insights and expertise from the CodeKnox development team."
      />
      {/* Hero Section - Light */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[grid-green-500/5] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mt-20">
            {/* Animated Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="inline-block mb-8 relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/20">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 text-green-500 opacity-50"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 text-emerald-500 opacity-50"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-12 text-teal-500 opacity-50"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-poppins font-black text-gray-900 mb-8 tracking-tight"
            >
              INSIGHTS FROM
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                THE STRONGHOLD
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-12"
            >
              Expert perspectives on emerging technologies, digital strategy, and the future of web development.
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group mb-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-green-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-8 py-6 bg-white border border-gray-200 rounded-3xl shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-lg"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${selectedTag === tag
                        ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-green-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-[16/10] rounded-[2rem] mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-6 left-6 flex gap-2">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full border border-white/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-green-600" />
                          {post.publishedAt}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-green-600" />
                          {post.readingTime}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 line-clamp-2 text-lg leading-relaxed font-light">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full border-2 border-green-50"
                        />
                        <span className="text-sm font-bold text-gray-900">{post.author.name}</span>
                        <div className="ml-auto w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-all duration-300">
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 px-4 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <X className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters.</p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedTag("All"); }}
              className="mt-8 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight"
              >
                JOIN THE
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  INNER CIRCLE
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed"
              >
                Get curated insights on technology trends, digital architecture, and growth strategies delivered straight to your inbox. No spam, just pure expertise.
              </motion.p>
              <div className="flex flex-wrap gap-8 items-center">
                {[
                  { label: "Weekly Insights" },
                  { label: "Curated Strategy" },
                  { label: "Tech Deep-Dives" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span className="font-bold text-sm tracking-wide uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500"></div>

                <AnimatePresence mode="wait">
                  {!isNewsletterSubscribed ? (
                    <motion.form
                      key="form"
                      onSubmit={handleNewsletterSubmit}
                      className="space-y-6"
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <div className="relative group/input">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 group-focus-within/input:text-green-500 transition-colors" />
                          <input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-16 pr-8 py-6 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-lg"
                          />
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-green-500/20 transition-all"
                      >
                        Subscribe Now
                      </motion.button>
                      <p className="text-center text-sm text-gray-500">
                        By subscribing, you agree to our <Link to="/privacy" className="text-gray-300 hover:text-white underline">Privacy Policy</Link>.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-6"
                    >
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/20">
                        <CheckCircle2 className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-black text-white">Welcome Aboard!</h3>
                      <p className="text-gray-400 text-lg">Check your inbox for a confirmation and our welcome guide.</p>
                      <button
                        onClick={() => setIsNewsletterSubscribed(false)}
                        className="text-green-400 font-bold hover:text-green-300 underline underline-offset-8"
                      >
                        Subscribe another email
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Topic / CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-[4rem] p-12 sm:p-20 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>

            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-xl relative z-10">
              <BookOpen className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8 relative z-10">
              LOOKING FOR
              <br />
              <span className="text-green-600">MORE?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl font-light leading-relaxed relative z-10">
              Download our latest whitepapers and case studies to see how we've helped businesses transform their digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
              <Link to="/projects">
                <button className="px-12 py-5 bg-gray-900 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                  Browse Case Studies
                </button>
              </Link>
              <Link to="/services">
                <button className="px-12 py-5 bg-white text-gray-900 rounded-full font-bold text-lg border border-gray-200 shadow-xl hover:shadow-2xl transition-all">
                  Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;