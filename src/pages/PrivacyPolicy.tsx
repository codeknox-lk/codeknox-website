import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Users, Globe, FileText, CheckCircle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number)",
        "Business information for project requirements",
        "Communication records and project discussions",
        "Website usage data and analytics",
        "Technical information for service delivery"
      ]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services",
        "To communicate about your projects",
        "To process payments and invoices",
        "To send important updates and notifications",
        "To analyze website performance and user experience"
      ]
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted during transmission and storage",
        "Access to your information is restricted to authorized personnel",
        "Regular security audits and updates",
        "Compliance with international data protection standards"
      ]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information",
        "Information may be shared with trusted service providers",
        "Data sharing only occurs with your explicit consent",
        "Legal compliance when required by law",
        "Business transfers with proper notification"
      ]
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "International Transfers",
      content: [
        "Data may be processed in Sri Lanka and other countries",
        "Adequate protection measures are in place",
        "Standard contractual clauses for international transfers",
        "Your rights remain protected regardless of location",
        "Transparency in cross-border data processing"
      ]
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Your Rights",
      content: [
        "Right to access your personal information",
        "Right to correct inaccurate data",
        "Right to delete your information",
        "Right to restrict processing",
        "Right to data portability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 md:pt-40 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Your privacy is important to us. This policy explains how CODEKNOX collects, uses, and protects your personal information.
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-lg p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Questions About Your Privacy?
          </h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@codeknox.lk"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Visit Contact Page
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
