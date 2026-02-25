import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Users, Calendar, Download, LogOut, ArrowLeft } from 'lucide-react';

interface Subscriber {
  email: string;
  subscribedAt: string;
  source: string;
}

const NewsletterSubscribers: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check authentication on mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  // Load subscribers from localStorage
  useEffect(() => {
    const loadSubscribers = () => {
      try {
        const savedSubscribers = localStorage.getItem('newsletterSubscribers');
        if (savedSubscribers) {
          const parsedSubscribers = JSON.parse(savedSubscribers);
          setSubscribers(parsedSubscribers);
        }
      } catch (error) {
        // Silent error handling for production
      } finally {
        setIsLoading(false);
      }
    };

    loadSubscribers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const handleDownloadCSV = () => {
    const csvContent = [
      'Email,Subscribed Date,Source',
      ...subscribers.map(sub => `${sub.email},${new Date(sub.subscribedAt).toLocaleDateString()},${sub.source}`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading subscribers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors w-fit"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Newsletter Subscribers</h1>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Manage your email subscribers</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleDownloadCSV}
              disabled={subscribers.length === 0}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              <span>Download CSV</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{subscribers.length}</p>
                <p className="text-gray-600">Total Subscribers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {subscribers.filter(sub => sub.source === 'blog').length}
                </p>
                <p className="text-gray-600">From Blog</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {subscribers.filter(sub => {
                    const today = new Date();
                    const subDate = new Date(sub.subscribedAt);
                    const diffTime = Math.abs(today.getTime() - subDate.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays <= 7;
                  }).length}
                </p>
                <p className="text-gray-600">This Week</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subscribers List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Subscribers ({subscribers.length})
            </h2>
          </div>

          {subscribers.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No subscribers yet</h3>
              <p className="text-gray-600">Subscribers will appear here when they sign up for your newsletter.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscribed Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subscribers.map((subscriber, index) => (
                    <motion.tr
                      key={subscriber.email}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <Mail className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {subscriber.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {subscriber.source}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(subscriber.subscribedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribers;
