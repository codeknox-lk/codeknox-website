import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Award,
  Globe,
  Mail,
  Sparkles,
  Lightbulb,
  Shield,
  TrendingUp,
} from "lucide-react";
import { companyInfo } from "../data/company";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About CodeKnox - The Stronghold of Smart Solutions"
        description="Learn about CodeKnox, Sri Lanka's leading digital partner. We are committed to excellence, innovation, and security in web and mobile app development."
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
                <Shield className="w-12 h-12 text-white" />
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
              <span className="block italic font-light text-3xl sm:text-4xl md:text-5xl mb-2 text-gray-500">THE</span>
              STRONGHOLD OF
              <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                SMART SOLUTIONS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-12"
            >
              We don't just build technology; we create high-performance digital powerhouses that empower businesses to thrive in the modern age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-800 transition-all duration-300"
                >
                  Work With Us
                </motion.button>
              </Link>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Team Member" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-green-500 flex items-center justify-center text-white font-bold text-xs">
                  +25
                </div>
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

      {/* Philosophy Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 leading-tight">
              OUR
              <br />
              <span className="text-green-600">PHILOSOPHY</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: "Precision Engineering",
                  desc: "We believe in pixel-perfect design and rock-solid code. Every solution is engineered for maximum performance and scalability."
                },
                {
                  icon: Users,
                  title: "Client-Centric Innovation",
                  desc: "Your success is our priority. We work as an extension of your team, turning your vision into a competitive digital advantage."
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Growth",
                  desc: "The digital landscape never stands still, and neither do we. We're constantly evolving our tech stack to offer the latest innovations."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="CodeKnox Team Office"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Stats */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <Globe className="w-8 h-8 text-green-600" />
                <span className="text-4xl font-black text-gray-900">50+</span>
              </div>
              <p className="text-gray-500 font-medium">Projects Delivered Globally</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">WHY CODEKNOX?</h2>
            <div className="h-1 w-20 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovative Mindset",
                desc: companyInfo.mission
              },
              {
                icon: Shield,
                title: "Security First",
                desc: "We implement enterprise-grade security protocols in every project to protect your data and users."
              },
              {
                icon: Award,
                title: "Quality Excellence",
                desc: "Rigorous testing and quality assurance ensure that our deliverables exceed industry standards."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-8 border border-green-500/30">
                  <value.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 sm:p-20 bg-green-50 rounded-[4rem] relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-200/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-200/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8 relative z-10">
              LET'S BUILD YOUR
              <br />
              <span className="text-green-600">STRONGHOLD</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Join dozens of innovative companies that have partnered with us to accelerate their digital growth and transform their vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link to="/contact">
                <button className="w-full sm:w-auto px-12 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl">
                  Start Your Project
                </button>
              </Link>
              <a href="mailto:hello@codeknox.com" className="w-full sm:w-auto flex items-center justify-center gap-3 text-gray-900 font-bold text-lg group">
                <Mail className="w-6 h-6" />
                <span className="group-hover:translate-x-1 transition-transform">hello@codeknox.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
