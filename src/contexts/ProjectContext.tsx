import React, { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { projects as oldProjects } from '../data/projects';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  gallery: string[];
  websiteUrl: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  completedAt: string;
  featured: boolean;
}

interface ProjectContextType {
  projects: Project[];
  isLoading: boolean;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, projectData: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  refreshProjects: () => void;
  migrateProjects: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Convert old project structure to new structure
const convertOldProjectToNew = (oldProject: any): Project => {
  return {
    id: oldProject.slug,
    slug: oldProject.slug,
    title: oldProject.title,
    description: oldProject.shortDescription,
    longDescription: oldProject.summary,
    image: oldProject.heroImage,
    category: oldProject.industry,
    technologies: oldProject.techStack,
    features: oldProject.services,
    gallery: oldProject.gallery,
    websiteUrl: oldProject.slug === 'smilehub-dental' ? 'https://smilehub.lk' :
                oldProject.slug === 'fort-knox-quantity-surveying' ? 'https://fortknox.lk' :
                oldProject.slug === 'wildscapia-environmental-news' ? 'https://wildscapia.com' : '',
    testimonial: oldProject.testimonial ? {
      text: oldProject.testimonial.quote,
      author: oldProject.testimonial.name,
      role: oldProject.testimonial.role,
      company: oldProject.industry
    } : undefined,
    completedAt: '2024-12-01', // Default completion date
    featured: oldProject.featured || false
  };
};

// Convert all old projects to new structure
const defaultProjects = oldProjects.map(convertOldProjectToNew);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fallback timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setProjects(defaultProjects);
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeout);
  }, [isLoading]);

  // Load projects from localStorage
  const loadProjects = () => {
    setIsLoading(true);
    try {
      const savedProjects = localStorage.getItem('projects');
      if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        setProjects(parsedProjects);
      } else {
        // Initialize with default projects if no saved projects
        setProjects(defaultProjects);
        localStorage.setItem('projects', JSON.stringify(defaultProjects));
      }
    } catch (error) {
      setProjects(defaultProjects);
    } finally {
      setIsLoading(false);
    }
  };

  // Force migration of old projects to new structure
  const migrateProjects = () => {
    setIsLoading(true);
    try {
      // Force clear localStorage first
      localStorage.removeItem('projects');
      
      // Set projects and save to localStorage
      setProjects(defaultProjects);
      localStorage.setItem('projects', JSON.stringify(defaultProjects));
      
      // Force a re-render by updating state again
      setTimeout(() => {
        setProjects(defaultProjects);
        setIsLoading(false);
      }, 100);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Save projects to localStorage
  const saveProjects = (newProjects: Project[]) => {
    try {
      localStorage.setItem('projects', JSON.stringify(newProjects));
    } catch (error) {
      // Silent error handling for production
    }
  };

  useEffect(() => {
    // Check if we need to migrate projects
    const savedProjects = localStorage.getItem('projects');
    if (!savedProjects || savedProjects === '[]') {
      migrateProjects();
    } else {
      loadProjects();
    }
    
    // Listen for storage changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'projects') {
        loadProjects();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Add a new project
  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: projectData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    };

    const updatedProjects = [newProject, ...projects];
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
  };

  // Update an existing project
  const updateProject = (id: string, projectData: Partial<Project>) => {
    const updatedProjects = projects.map(project => 
      project.id === id ? { ...project, ...projectData } : project
    );
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
  };

  // Delete a project
  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    saveProjects(updatedProjects);
  };

  return (
    <ProjectContext.Provider value={{ projects, isLoading, addProject, updateProject, deleteProject, refreshProjects: loadProjects, migrateProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};
