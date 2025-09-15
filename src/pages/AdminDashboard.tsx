import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Save, X, LogOut, Users } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';

const AdminDashboard: React.FC = () => {
  const { posts, addPost, updatePost, deletePost, isLoading } = useBlog();
  const navigate = useNavigate();
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '',
    tags: [] as string[],
    featured: false,
    readingTime: '5 min read',
    authorName: ''
  });

  // Check authentication on mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const handleAddPost = () => {
    if (!newPost.title || !newPost.excerpt || !newPost.content || !newPost.authorName) {
      alert('Please fill in all required fields (Title, Excerpt, Content, and Author Name)');
      return;
    }

    const authorData = {
      name: newPost.authorName,
      role: 'Senior Full-Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    };
    
    
    addPost({
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: newPost.content,
      coverImage: newPost.coverImage || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      author: authorData,
      tags: newPost.tags,
      featured: newPost.featured,
      readingTime: newPost.readingTime
    });

    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      coverImage: '',
      tags: [],
      featured: false,
      readingTime: '5 min read',
      authorName: ''
    });
    setShowAddForm(false);
    alert('Article added successfully!');
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setNewPost({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      tags: post.tags,
      featured: post.featured,
      readingTime: post.readingTime,
      authorName: post.author.name
    });
    setShowAddForm(true);
  };

  const handleUpdatePost = () => {
    if (!editingPost || !newPost.title || !newPost.excerpt || !newPost.content || !newPost.authorName) {
      alert('Please fill in all required fields (Title, Excerpt, Content, and Author Name)');
      return;
    }

    updatePost(editingPost.slug, {
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: newPost.content,
      coverImage: newPost.coverImage || editingPost.coverImage,
      author: {
        name: newPost.authorName,
        role: 'Senior Full-Stack Developer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      tags: newPost.tags,
      featured: newPost.featured,
      readingTime: newPost.readingTime
    });

    setEditingPost(null);
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      coverImage: '',
      tags: [],
      featured: false,
      readingTime: '5 min read',
      authorName: ''
    });
    setShowAddForm(false);
    alert('Article updated successfully!');
  };

  const handleDeletePost = (slug: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deletePost(slug);
      alert('Article deleted successfully!');
    }
  };

  const handleTagChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setNewPost({ ...newPost, tags });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Manage your blog articles</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/admin/projects')}
              className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => navigate('/admin/subscribers')}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Subscribers</span>
            </button>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Add Article</span>
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

        {/* Add/Edit Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingPost ? 'Edit Article' : 'Add New Article'}
              </h2>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingPost(null);
                  setNewPost({
                    title: '',
                    excerpt: '',
                    content: '',
                    coverImage: '',
                    tags: [],
                    featured: false,
                    readingTime: '5 min read',
                    authorName: ''
                  });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Article title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Article excerpt"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    value={newPost.coverImage}
                    onChange={(e) => setNewPost({ ...newPost, coverImage: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newPost.tags.join(', ')}
                    onChange={(e) => handleTagChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Web Development, React, Tutorial"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author Name *
                  </label>
                  <input
                    type="text"
                    value={newPost.authorName}
                    onChange={(e) => setNewPost({ ...newPost, authorName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter author name"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reading Time
                    </label>
                    <input
                      type="text"
                      value={newPost.readingTime}
                      onChange={(e) => setNewPost({ ...newPost, readingTime: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="5 min read"
                    />
                  </div>
                  <div className="flex items-center mt-6">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={newPost.featured}
                      onChange={(e) => setNewPost({ ...newPost, featured: e.target.checked })}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
                      Featured
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content * (Markdown supported)
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={20}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  placeholder="Write your article content here..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingPost(null);
                  setNewPost({
                    title: '',
                    excerpt: '',
                    content: '',
                    coverImage: '',
                    tags: [],
                    featured: false,
                    readingTime: '5 min read',
                    authorName: ''
                  });
                }}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={editingPost ? handleUpdatePost : handleAddPost}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-5 h-5" />
                <span>{editingPost ? 'Update Article' : 'Add Article'}</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Articles List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Articles ({posts.length})
            </h2>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles yet</h3>
              <p className="text-gray-600 mb-4">Get started by adding your first article.</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add First Article
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {posts.map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {post.title}
                        </h3>
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Published: {new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <span>{post.tags.length} tags</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Preview"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleEditPost(post)}
                        className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.slug)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;