import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, BookOpen, Share2, Heart } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug } = useBlog();
  
  const post = getPostBySlug(slug!);
  
  // Initialize like count and state from localStorage or default values
  const [likeCount, setLikeCount] = useState(() => {
    if (post) {
      const savedCount = localStorage.getItem(`blog-like-count-${post.id}`);
      return savedCount ? parseInt(savedCount, 10) : 8;
    }
    return 8;
  });
  
  const [isLiked, setIsLiked] = useState(() => {
    if (post) {
      const savedState = localStorage.getItem(`blog-liked-${post.id}`);
      return savedState === 'true';
    }
    return false;
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      {/* Hero Section - Dark */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl text-white hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Blog</span>
              </Link>
            </motion.div>

            {/* Article Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-300 mb-6 sm:mb-8"
            >
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime}</span>
              </div>
            </motion.div>

            {/* Article Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              {post.excerpt}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Article Content Section - Light */}
      <section className="relative py-12 sm:py-24 md:py-28 lg:py-32 px-3 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 sm:h-80 md:h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 flex items-center justify-center" style={{ display: 'none' }}>
                <span className="text-white font-semibold text-2xl relative z-10">
                  {post.title}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl"
          >
            <div
              className="text-gray-800 leading-relaxed text-base sm:text-lg prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content
                  // First, handle headers (must be done before paragraphs)
                  .replace(/^### (.*$)/gm, '<h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6 sm:mt-10">$1</h3>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 mt-8 sm:mt-12">$1</h2>')
                  .replace(/^# (.*$)/gm, '<h1 class="text-3xl sm:text-4xl font-black text-gray-900 mb-6 sm:mb-8 mt-12 sm:mt-16 first:mt-0">$1</h1>')
                  // Handle bold text
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
                  // Handle bullet points
                  .replace(/^- (.*$)/gm, '<li class="mb-2 sm:mb-3">$1</li>')
                  // Wrap consecutive list items in ul tags
                  .replace(/(<li class="mb-2 sm:mb-3">.*<\/li>)/gs, '<ul class="list-disc list-inside mb-6 sm:mb-8 space-y-2 sm:space-y-3 pl-4 sm:pl-6">$1</ul>')
                  // Handle paragraphs (split by double newlines)
                  .split('\n\n')
                  .map(paragraph => {
                    // Skip if it's already a header or list
                    if (paragraph.includes('<h') || paragraph.includes('<ul>') || paragraph.includes('<li>')) {
                      return paragraph;
                    }
                    // Clean up and wrap in paragraph tags
                    return `<p class="mb-6 sm:mb-8 leading-relaxed sm:leading-loose">${paragraph.trim()}</p>`;
                  })
                  .join('') +
                  // Add author info at the bottom
                  `<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 space-y-2 sm:space-y-0">
                    <span class="text-gray-600 text-sm sm:text-lg">${new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span class="text-gray-900 font-semibold text-sm sm:text-lg">- ${post.author.name}</span>
                  </div>`
              }}
            />
          </motion.div>

          {/* Social Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 flex justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => {
                  if (isLiked) {
                    const newCount = likeCount - 1;
                    setLikeCount(newCount);
                    setIsLiked(false);
                    // Save to localStorage
                    if (post) {
                      localStorage.setItem(`blog-like-count-${post.id}`, newCount.toString());
                      localStorage.setItem(`blog-liked-${post.id}`, 'false');
                    }
                  } else {
                    const newCount = likeCount + 1;
                    setLikeCount(newCount);
                    setIsLiked(true);
                    // Save to localStorage
                    if (post) {
                      localStorage.setItem(`blog-like-count-${post.id}`, newCount.toString());
                      localStorage.setItem(`blog-liked-${post.id}`, 'true');
                    }
                  }
                }}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-xl border rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isLiked
                    ? 'bg-red-50 border-red-200 text-red-600'
                    : 'bg-white/80 border-gray-200/50 text-gray-700 hover:bg-white/90'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-red-500'}`} />
                <span className="font-medium">{likeCount}</span>
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }
                }}
                className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-xl sm:rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Share2 className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;