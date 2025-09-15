import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Users, Shield, AlertTriangle, CheckCircle, Clock, DollarSign } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing our services, you agree to be bound by these terms",
        "These terms apply to all users of CODEKNOX services",
        "Continued use constitutes acceptance of any modifications",
        "You must be at least 18 years old to use our services",
        "Business users must have authority to enter into agreements"
      ]
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Service Description",
      content: [
        "CODEKNOX provides web development, mobile app development, and digital solutions",
        "Services include but are not limited to: custom software, websites, and consulting",
        "All services are provided on a project-by-project basis",
        "Service scope is defined in individual project agreements",
        "We reserve the right to modify or discontinue services"
      ]
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Payment Terms",
      content: [
        "Payment terms are specified in individual project agreements",
        "Invoices are due within 30 days unless otherwise specified",
        "Late payments may incur additional charges",
        "All prices are in USD unless otherwise stated",
        "Refunds are subject to our refund policy"
      ]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Intellectual Property",
      content: [
        "Client retains ownership of their original content and materials",
        "CODEKNOX retains rights to pre-existing intellectual property",
        "Custom code developed for clients transfers upon full payment",
        "We may use project work in our portfolio with permission",
        "Open source components remain under their respective licenses"
      ]
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount paid for services",
        "We are not liable for indirect or consequential damages",
        "Clients are responsible for backing up their data",
        "We provide services 'as is' without warranties",
        "Force majeure events may affect service delivery"
      ]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Project Timeline",
      content: [
        "Project timelines are estimates and may vary",
        "Delays may occur due to client feedback or scope changes",
        "We will communicate any significant timeline changes",
        "Rush projects may incur additional charges",
        "Client cooperation is essential for meeting deadlines"
      ]
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Termination",
      content: [
        "Either party may terminate services with written notice",
        "Payment is due for work completed up to termination date",
        "Client data will be returned within 30 days of termination",
        "Confidentiality obligations continue after termination",
        "We may suspend services for non-payment"
      ]
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Governing Law",
      content: [
        "These terms are governed by Sri Lankan law",
        "Disputes will be resolved through arbitration",
        "Jurisdiction is in Colombo, Sri Lanka",
        "English language version takes precedence",
        "Invalid provisions do not affect remaining terms"
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
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            These terms govern your use of CODEKNOX services. Please read them carefully before engaging with our services.
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
            Questions About These Terms?
          </h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us for clarification.
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

export default TermsOfService;
