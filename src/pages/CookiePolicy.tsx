import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const [currentPreferences, setCurrentPreferences] = useState<any>(null);

  useEffect(() => {
    // Load current cookie preferences
    const loadPreferences = () => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (cookieConsent) {
        try {
          setCurrentPreferences(JSON.parse(cookieConsent));
        } catch (e) {
          // Silent error handling for production
        }
      } else {
        setCurrentPreferences(null);
      }
    };

    loadPreferences();

    // Listen for storage changes to update preferences
    const handleStorageChange = () => {
      loadPreferences();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events when preferences are updated
    const handlePreferencesUpdate = () => {
      setTimeout(loadPreferences, 100); // Small delay to ensure localStorage is updated
    };

    window.addEventListener('cookiePreferencesUpdated', handlePreferencesUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookiePreferencesUpdated', handlePreferencesUpdate);
    };
  }, []);

  const handleCookieSettings = () => {
    // Clear existing cookie consent
    localStorage.removeItem('cookieConsent');
    setCurrentPreferences(null);
    
    // Dispatch a custom event to trigger the main cookie banner
    const event = new CustomEvent('showCookieBanner');
    window.dispatchEvent(event);
    
    // Scroll to top to see the banner
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cookieTypes = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Essential Cookies",
      color: "bg-green-100 text-green-600",
      description: "These cookies are necessary for the website to function properly.",
      examples: [
        "Session management and user authentication",
        "Security and fraud prevention",
        "Load balancing and performance optimization",
        "Basic website functionality",
        "Form submission and validation"
      ],
      required: true
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Analytics Cookies",
      color: "bg-blue-100 text-blue-600",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: [
        "Google Analytics for website traffic analysis",
        "User behavior tracking and heatmaps",
        "Page views and session duration",
        "Popular content and user journeys",
        "Performance monitoring and optimization"
      ],
      required: false
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Functional Cookies",
      color: "bg-purple-100 text-purple-600",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: [
        "User preferences and settings",
        "Language and region selection",
        "Customized content delivery",
        "Remembering user choices",
        "Enhanced user experience features"
      ],
      required: false
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Marketing Cookies",
      color: "bg-orange-100 text-orange-600",
      description: "These cookies are used to deliver relevant advertisements and marketing content.",
      examples: [
        "Social media integration and sharing",
        "Advertising campaign tracking",
        "Retargeting and remarketing",
        "Conversion tracking and attribution",
        "Personalized marketing content"
      ],
      required: false
    }
  ];

  const cookieDetails = [
    {
      name: "session_id",
      purpose: "Maintains user session and authentication state",
      duration: "Session",
      type: "Essential"
    },
    {
      name: "_ga",
      purpose: "Google Analytics - distinguishes unique users",
      duration: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguishes unique users",
      duration: "24 hours",
      type: "Analytics"
    },
    {
      name: "user_preferences",
      purpose: "Stores user preferences and settings",
      duration: "1 year",
      type: "Functional"
    },
    {
      name: "marketing_consent",
      purpose: "Tracks user consent for marketing cookies",
      duration: "1 year",
      type: "Functional"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 md:pt-40 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Cookie className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            This policy explains how CODEKNOX uses cookies and similar technologies to enhance your browsing experience.
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </motion.div>

        {/* Cookie Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
          <p className="text-gray-600 text-lg">We use different types of cookies to provide and improve our services.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cookieTypes.map((cookie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-10 h-10 ${cookie.color} rounded-lg flex items-center justify-center`}>
                  {cookie.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{cookie.title}</h3>
                    {cookie.required ? (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        Required
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                        Optional
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <ul className="space-y-2">
                    {cookie.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-500 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cookie Details Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cookie Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold">Cookie Name</th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold">Purpose</th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold">Duration</th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {cookieDetails.map((cookie, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-blue-600 font-mono text-sm">{cookie.name}</td>
                    <td className="py-3 px-4 text-gray-600">{cookie.purpose}</td>
                    <td className="py-3 px-4 text-gray-600">{cookie.duration}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cookie.type === 'Essential' ? 'bg-red-100 text-red-600' :
                        cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {cookie.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Current Cookie Preferences */}
        {currentPreferences && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Your Current Cookie Preferences
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${currentPreferences.essential ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium text-gray-700">Essential</p>
                <p className="text-xs text-gray-500">{currentPreferences.essential ? 'Enabled' : 'Disabled'}</p>
              </div>
              <div className="text-center">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${currentPreferences.analytics ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium text-gray-700">Analytics</p>
                <p className="text-xs text-gray-500">{currentPreferences.analytics ? 'Enabled' : 'Disabled'}</p>
              </div>
              <div className="text-center">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${currentPreferences.functional ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium text-gray-700">Functional</p>
                <p className="text-xs text-gray-500">{currentPreferences.functional ? 'Enabled' : 'Disabled'}</p>
              </div>
              <div className="text-center">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${currentPreferences.marketing ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <p className="text-sm font-medium text-gray-700">Marketing</p>
                <p className="text-xs text-gray-500">{currentPreferences.marketing ? 'Enabled' : 'Disabled'}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Cookie Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Manage Your Cookie Preferences</h3>
          <p className="text-gray-600 mb-6">
            You can control and manage cookies through your browser settings or our cookie consent banner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleCookieSettings}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Settings className="w-5 h-5 mr-2" />
              {currentPreferences ? 'Update Cookie Settings' : 'Cookie Settings'}
            </button>
            <a
              href="mailto:sales@codeknox.lk"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
