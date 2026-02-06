import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Calendar,
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
  Sparkles,
  User,
  Building,
  DollarSign,
  CheckSquare,
  FileText,
  Shield,
} from "lucide-react";
import { companyInfo } from "../data/company";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  services: string[];
  message: string;
  honeypot: string;
  mathAnswer: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  budget?: string;
  services?: string;
  message?: string;
  mathAnswer?: string;
  general?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    services: [],
    message: "",
    honeypot: "",
    mathAnswer: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    "Under 50,000 LKR",
    "50,000 - 100,000 LKR",
    "100,000 - 250,000 LKR",
    "250,000 - 500,000 LKR",
    "500,000+ LKR",
  ];

  const serviceOptions = [
    "Website Design & Development",
    "Mobile App Development",
    "E-commerce Website",
    "Business Website",
    "Portfolio Website",
    "Social Media Management",
    "Digital Marketing",
    "Website Maintenance",
    "Custom Software Development",
    "Consultation & Planning",
  ];

  const mathQuestion = { num1: 7, num2: 3, answer: 10 };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (formData.mathAnswer !== mathQuestion.answer.toString()) {
      newErrors.mathAnswer = "Please check your math answer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleServiceToggle = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];
    handleInputChange("services", updatedServices);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleLaunchEmail = () => {
    // Create mailto link with form data
    const subject = `🚀 New Project Inquiry from ${formData.company} - ${formData.name}`;
    const body = `
🌟 NEW CLIENT INQUIRY - CODEKNOX WEBSITE
========================================

👤 CLIENT INFORMATION:
• Name: ${formData.name}
• Company: ${formData.company}
• Email: ${formData.email}
• Phone: ${formData.phone}

💰 PROJECT DETAILS:
• Budget Range: ${formData.budget}
• Services Needed: ${formData.services.join(', ')}

📝 PROJECT DESCRIPTION:
${formData.message}

⏰ SUBMITTED: ${new Date().toLocaleString()}

========================================
Please respond within 24 hours as promised.
Thank you! 🚀
    `;

    const mailtoLink = `mailto:sales@codeknox.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white max-w-lg w-full mx-auto p-8 sm:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg shadow-green-500/30">
            <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4">One Last Step!</h1>
          <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
            Your inquiry is ready. To ensure secure delivery, please click the button below to open your email client and hit send.
          </p>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLaunchEmail}
              className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/25 flex items-center justify-center space-x-2"
            >
              <span>Launch Email App</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Back to form
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.1),transparent_50%)]"></div>
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-poppins font-black text-white mb-8 leading-tight tracking-tight"
            >
              LET'S BUILD
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                SOMETHING
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                AMAZING
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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

      {/* Contact Information Section - Light */}
      <section className="relative py-24 sm:py-28 md:py-24 lg:py-20 xl:py-36 px-4 sm:px-6 laptop:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.03),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl laptop:max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 laptop:gap-14 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tight"
                >
                  GET IN
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    TOUCH
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl text-gray-600 leading-relaxed"
                >
                  Have a project in mind? Let's discuss how we can help you achieve your goals. We're here to answer any questions and provide guidance.
                </motion.p>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-10 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Address</h3>
                      <p className="text-gray-600 text-xl leading-relaxed">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-10 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Email</h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-green-600 hover:text-green-700 transition-colors duration-200 text-xl font-semibold"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-10 hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Phone</h3>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 text-xl font-semibold"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-gray-900">Follow Us</h3>
                <div className="flex space-x-6">
                  <a
                    href={companyInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    <Facebook size={28} className="text-white" />
                  </a>
                  <a
                    href={companyInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-600/25"
                  >
                    <Linkedin size={28} className="text-white" />
                  </a>
                  <a
                    href={companyInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/25"
                  >
                    <Instagram size={28} className="text-white" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-green-500/10 hover:bg-white/90 transition-all duration-500">
                {/* General Error Display */}
                {errors.general && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                      <p className="text-red-700 font-medium">{errors.general}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xl font-bold text-gray-900 mb-4"
                        >
                          <User className="w-6 h-6 inline mr-3" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-gray-900 placeholder-gray-500 text-lg ${errors.name
                            ? "border-red-500"
                            : "border-gray-200"
                            }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <AlertCircle size={16} className="mr-2" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xl font-bold text-gray-900 mb-4"
                        >
                          <Mail className="w-6 h-6 inline mr-3" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-gray-900 placeholder-gray-500 text-lg ${errors.email
                            ? "border-red-500"
                            : "border-gray-200"
                            }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <AlertCircle size={16} className="mr-2" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xl font-bold text-gray-900 mb-4"
                        >
                          <Phone className="w-6 h-6 inline mr-3" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-gray-900 placeholder-gray-500 text-lg ${errors.phone
                            ? "border-red-500"
                            : "border-gray-200"
                            }`}
                          placeholder="+94 11 234 5678"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <AlertCircle size={16} className="mr-2" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xl font-bold text-gray-900 mb-4"
                        >
                          <Building className="w-6 h-6 inline mr-3" />
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-gray-900 placeholder-gray-500 text-lg ${errors.company
                            ? "border-red-500"
                            : "border-gray-200"
                            }`}
                          placeholder="Your company name"
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm mt-2 flex items-center">
                            <AlertCircle size={16} className="mr-2" />
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xl font-bold text-gray-900 mb-4"
                      >
                        <DollarSign className="w-6 h-6 inline mr-3" />
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                        className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-gray-900 text-lg ${errors.budget
                          ? "border-red-500"
                          : "border-gray-200"
                          }`}
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {errors.budget}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xl font-bold text-gray-900 mb-4">
                        <CheckSquare className="w-6 h-6 inline mr-3" />
                        Services of Interest *
                      </label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {serviceOptions.map((service) => (
                          <label
                            key={service}
                            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                          >
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500 focus:ring-2 bg-white"
                            />
                            <span className="text-gray-900 text-lg font-medium">{service}</span>
                          </label>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {errors.services}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xl font-bold text-gray-900 mb-4"
                      >
                        <FileText className="w-6 h-6 inline mr-3" />
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-gray-900 placeholder-gray-500 text-lg ${errors.message
                          ? "border-red-500"
                          : "border-gray-200"
                          }`}
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Spam Protection */}
                    <div className="hidden">
                      <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={(e) =>
                          handleInputChange("honeypot", e.target.value)
                        }
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mathAnswer"
                        className="block text-xl font-bold text-gray-900 mb-4"
                      >
                        <Shield className="w-6 h-6 inline mr-3" />
                        Spam Protection: What is {mathQuestion.num1} +{" "}
                        {mathQuestion.num2}? *
                      </label>
                      <input
                        type="number"
                        id="mathAnswer"
                        value={formData.mathAnswer}
                        onChange={(e) =>
                          handleInputChange("mathAnswer", e.target.value)
                        }
                        className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-gray-900 placeholder-gray-500 text-lg ${errors.mathAnswer
                          ? "border-red-500"
                          : "border-gray-200"
                          }`}
                        placeholder="Enter the answer"
                      />
                      {errors.mathAnswer && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {errors.mathAnswer}
                        </p>
                      )}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-10 py-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-500 flex items-center justify-center space-x-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={28} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="relative py-24 sm:py-28 md:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.08),transparent_50%)]"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Quick Chat Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-3"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white mb-8">Quick Chat</h3>
              <p className="text-gray-300 mb-10 text-xl leading-relaxed">
                Have a quick question? Chat with us on WhatsApp for instant responses.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/94706633321?text=Hi! I would like to discuss a project with CODEKNOX.', '_blank')}
                className="w-full px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-4"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={24} />
              </motion.button>
            </motion.div>

            {/* Schedule Call Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-3"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white mb-8">Schedule a Call</h3>
              <p className="text-gray-300 mb-10 text-xl leading-relaxed">
                Book a call to discuss your project in detail.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:hello@codeknox.com?subject=Book a Call - CODEKNOX&body=Hi! I would like to schedule a consultation call to discuss my project. Please let me know your available times.', '_blank')}
                className="w-full px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center space-x-4"
              >
                <span>Book a Call</span>
                <ArrowRight size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
