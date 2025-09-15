import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Save, 
  X, 
  Calendar,
  Tag,
  Star
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import type { Project } from '../contexts/ProjectContext';

const AdminProjectDashboard: React.FC = () => {
  const { projects, isLoading, addProject, updateProject, deleteProject } = useProjects();
  const navigate = useNavigate();
  
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    slug: '',
    title: '',
    description: '',
    longDescription: '',
    image: '',
    category: '',
    technologies: [],
    features: [],
    gallery: [],
    websiteUrl: '',
    testimonial: {
      text: '',
      author: '',
      role: '',
      company: ''
    },
    completedAt: '',
    featured: false
  });

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleAddProject = () => {
    if (!newProject.slug || !newProject.title || !newProject.description || !newProject.image) {
      alert('Please fill in all required fields (Slug, Title, Description, Image)');
      return;
    }

    addProject(newProject);
    setNewProject({
      slug: '',
      title: '',
      description: '',
      longDescription: '',
      image: '',
      category: '',
      technologies: [],
      features: [],
      gallery: [],
      websiteUrl: '',
      testimonial: {
        text: '',
        author: '',
        role: '',
        company: ''
      },
      completedAt: '',
      featured: false
    });
    setIsAdding(false);
  };

  const handleEditProject = (project: Project) => {
    setNewProject({
      slug: project.slug,
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      image: project.image,
      category: project.category,
      technologies: project.technologies,
      features: project.features,
      gallery: project.gallery,
      websiteUrl: project.websiteUrl,
      testimonial: project.testimonial || {
        text: '',
        author: '',
        role: '',
        company: ''
      },
      completedAt: project.completedAt,
      featured: project.featured
    });
    setEditingId(project.id);
    setIsAdding(true);
  };

  const handleUpdateProject = () => {
    if (!newProject.slug || !newProject.title || !newProject.description || !newProject.image) {
      alert('Please fill in all required fields (Slug, Title, Description, Image)');
      return;
    }

    if (editingId) {
      updateProject(editingId, newProject);
      setEditingId(null);
      setIsAdding(false);
      setNewProject({
        slug: '',
        title: '',
        description: '',
        longDescription: '',
        image: '',
        category: '',
        technologies: [],
        features: [],
        gallery: [],
        websiteUrl: '',
        testimonial: {
          text: '',
          author: '',
          role: '',
          company: ''
        },
        completedAt: '',
        featured: false
      });
    }
  };

  const handleDeleteProject = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
    }
  };

  const addTechnology = () => {
    setNewProject({
      ...newProject,
      technologies: [...newProject.technologies, '']
    });
  };

  const updateTechnology = (index: number, value: string) => {
    const updated = [...newProject.technologies];
    updated[index] = value;
    setNewProject({
      ...newProject,
      technologies: updated
    });
  };

  const removeTechnology = (index: number) => {
    const updated = newProject.technologies.filter((_, i) => i !== index);
    setNewProject({
      ...newProject,
      technologies: updated
    });
  };

  const addFeature = () => {
    setNewProject({
      ...newProject,
      features: [...newProject.features, '']
    });
  };

  const updateFeature = (index: number, value: string) => {
    const updated = [...newProject.features];
    updated[index] = value;
    setNewProject({
      ...newProject,
      features: updated
    });
  };

  const removeFeature = (index: number) => {
    const updated = newProject.features.filter((_, i) => i !== index);
    setNewProject({
      ...newProject,
      features: updated
    });
  };

  const addGalleryImage = () => {
    setNewProject({
      ...newProject,
      gallery: [...newProject.gallery, '']
    });
  };

  const updateGalleryImage = (index: number, value: string) => {
    const updated = [...newProject.gallery];
    updated[index] = value;
    setNewProject({
      ...newProject,
      gallery: updated
    });
  };

  const removeGalleryImage = (index: number) => {
    const updated = newProject.gallery.filter((_, i) => i !== index);
    setNewProject({
      ...newProject,
      gallery: updated
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Project Management</h1>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">Manage your portfolio projects</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                to="/admin/dashboard"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span>← Back to Dashboard</span>
              </Link>
              <button
                onClick={() => setIsAdding(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Add Project</span>
              </button>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Projects ({projects.length})</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
                        }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        {project.featured && (
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Tag className="w-4 h-4" />
                          <span>{project.category}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.completedAt}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/projects/${project.id}`}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      title="View Project"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleEditProject(project)}
                      className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                      title="Edit Project"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add/Edit Project Modal */}
        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {editingId ? 'Edit Project' : 'Add New Project'}
                    </h2>
                    <button
                      onClick={() => {
                        setIsAdding(false);
                        setEditingId(null);
                        setNewProject({
                          slug: '',
                          title: '',
                          description: '',
                          longDescription: '',
                          image: '',
                          category: '',
                          technologies: [],
                          features: [],
                          gallery: [],
                          websiteUrl: '',
                          testimonial: {
                            text: '',
                            author: '',
                            role: '',
                            company: ''
                          },
                          completedAt: '',
                          featured: false
                        });
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Slug *
                      </label>
                      <input
                        type="text"
                        value={newProject.slug}
                        onChange={(e) => setNewProject({ ...newProject, slug: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="project-slug"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter project title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <input
                        type="text"
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Web Development, Mobile App"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Short Description *
                    </label>
                    <textarea
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Brief description of the project"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Long Description
                    </label>
                    <textarea
                      value={newProject.longDescription}
                      onChange={(e) => setNewProject({ ...newProject, longDescription: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={5}
                      placeholder="Detailed description of the project"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hero Image URL *
                      </label>
                      <input
                        type="url"
                        value={newProject.image}
                        onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        value={newProject.websiteUrl}
                        onChange={(e) => setNewProject({ ...newProject, websiteUrl: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Completion Date
                      </label>
                      <input
                        type="date"
                        value={newProject.completedAt}
                        onChange={(e) => setNewProject({ ...newProject, completedAt: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={newProject.featured}
                          onChange={(e) => setNewProject({ ...newProject, featured: e.target.checked })}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Featured Project</span>
                      </label>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Technologies Used
                      </label>
                      <button
                        type="button"
                        onClick={addTechnology}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        + Add Technology
                      </button>
                    </div>
                    <div className="space-y-2">
                      {newProject.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={tech}
                            onChange={(e) => updateTechnology(index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., React, Node.js, MongoDB"
                          />
                          <button
                            type="button"
                            onClick={() => removeTechnology(index)}
                            className="p-2 text-red-600 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Key Features
                      </label>
                      <button
                        type="button"
                        onClick={addFeature}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        + Add Feature
                      </button>
                    </div>
                    <div className="space-y-2">
                      {newProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => updateFeature(index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., Responsive Design, User Authentication"
                          />
                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="p-2 text-red-600 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gallery */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Gallery Images
                      </label>
                      <button
                        type="button"
                        onClick={addGalleryImage}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        + Add Image
                      </button>
                    </div>
                    <div className="space-y-2">
                      {newProject.gallery.map((image, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="url"
                            value={image}
                            onChange={(e) => updateGalleryImage(index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://example.com/gallery-image.jpg"
                          />
                          <button
                            type="button"
                            onClick={() => removeGalleryImage(index)}
                            className="p-2 text-red-600 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Client Testimonial (Optional)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Testimonial Text
                        </label>
                        <textarea
                          value={newProject.testimonial?.text || ''}
                          onChange={(e) => setNewProject({
                            ...newProject,
                            testimonial: { ...newProject.testimonial!, text: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows={3}
                          placeholder="What the client said about the project"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Author Name
                        </label>
                        <input
                          type="text"
                          value={newProject.testimonial?.author || ''}
                          onChange={(e) => setNewProject({
                            ...newProject,
                            testimonial: { ...newProject.testimonial!, author: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Client name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Role/Position
                        </label>
                        <input
                          type="text"
                          value={newProject.testimonial?.role || ''}
                          onChange={(e) => setNewProject({
                            ...newProject,
                            testimonial: { ...newProject.testimonial!, role: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="e.g., CEO, Marketing Director"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={newProject.testimonial?.company || ''}
                          onChange={(e) => setNewProject({
                            ...newProject,
                            testimonial: { ...newProject.testimonial!, company: e.target.value }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
                  <button
                    onClick={() => {
                      setIsAdding(false);
                      setEditingId(null);
                      setNewProject({
                        slug: '',
                        title: '',
                        description: '',
                        longDescription: '',
                        image: '',
                        category: '',
                        technologies: [],
                        features: [],
                        gallery: [],
                        websiteUrl: '',
                        testimonial: {
                          text: '',
                          author: '',
                          role: '',
                          company: ''
                        },
                        completedAt: '',
                        featured: false
                      });
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={editingId ? handleUpdateProject : handleAddProject}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    <span>{editingId ? 'Update Project' : 'Add Project'}</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminProjectDashboard;
