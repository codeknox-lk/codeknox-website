import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check, AlertCircle } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
    
    // Listen for custom event to show banner
    const handleShowBanner = () => {
      setShowBanner(true);
    };
    
    window.addEventListener('showCookieBanner', handleShowBanner);
    
    return () => {
      window.removeEventListener('showCookieBanner', handleShowBanner);
    };
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    // Dispatch event to notify other components
    const event = new CustomEvent('cookiePreferencesUpdated');
    window.dispatchEvent(event);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptSelected = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleDeclineAll = () => {
    const onlyEssential: CookiePreferences = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    setPreferences(onlyEssential);
    savePreferences(onlyEssential);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (type: keyof CookiePreferences) => {
    if (type === 'essential') return; // Can't disable essential cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const getSelectedCount = () => {
    return Object.values(preferences).filter(Boolean).length;
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="max-w-6xl mx-auto">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    We use cookies to enhance your experience
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use cookies to analyze site usage, personalize content, and improve our services. 
                    Essential cookies are required for the site to function properly.
                  </p>
                  <div className="mt-2">
                    <a 
                      href="/cookies" 
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Learn more about our cookie policy →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Cookie Settings
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                >
                  Decline All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Essential Cookies */}
                <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                      <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Always Active
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Required for basic website functionality and security.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
                          preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            preferences.analytics ? 'translate-x-4' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">Functional Cookies</h4>
                      <button
                        onClick={() => togglePreference('functional')}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
                          preferences.functional ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            preferences.functional ? 'translate-x-4' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      Enable enhanced functionality and personalization.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
                          preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            preferences.marketing ? 'translate-x-4' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      Used to deliver relevant advertisements and marketing content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={handleDeclineAll}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                >
                  Decline All
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Save Preferences ({getSelectedCount()}/4)
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
