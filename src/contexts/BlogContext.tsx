import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { blogPosts as defaultBlogPosts } from '../data/blog';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  tags: string[];
  featured?: boolean;
  readingTime: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'slug' | 'publishedAt'>) => void;
  updatePost: (slug: string, post: Partial<BlogPost>) => void;
  deletePost: (slug: string) => void;
  getPostBySlug: (slug: string) => BlogPost | undefined;
  isLoading: boolean;
  refreshPosts: () => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load posts from localStorage
  const loadPosts = () => {
    try {
      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        const parsedPosts = JSON.parse(savedPosts);
        setPosts(parsedPosts);
      } else {
        // Initialize with default posts if no saved posts
        setPosts(defaultBlogPosts);
        localStorage.setItem('blogPosts', JSON.stringify(defaultBlogPosts));
      }
    } catch (error) {
      setPosts(defaultBlogPosts);
    } finally {
      setIsLoading(false);
    }
  };

  // Save posts to localStorage
  const savePosts = (newPosts: BlogPost[]) => {
    try {
      localStorage.setItem('blogPosts', JSON.stringify(newPosts));
    } catch (error) {
      // Silent error handling for production
    }
  };

  // Add a new post
  const addPost = (postData: Omit<BlogPost, 'slug' | 'publishedAt'>) => {
    const newPost: BlogPost = {
      ...postData,
      slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      publishedAt: new Date().toISOString().split('T')[0],
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  // Update an existing post
  const updatePost = (slug: string, postData: Partial<BlogPost>) => {
    const updatedPosts = posts.map(post => 
      post.slug === slug ? { ...post, ...postData } : post
    );
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  // Delete a post
  const deletePost = (slug: string) => {
    const updatedPosts = posts.filter(post => post.slug !== slug);
    setPosts(updatedPosts);
    savePosts(updatedPosts);
  };

  // Get post by slug
  const getPostBySlug = (slug: string) => {
    return posts.find(post => post.slug === slug);
  };

  // Refresh posts (reload from localStorage)
  const refreshPosts = () => {
    setIsLoading(true);
    loadPosts();
  };

  // Load posts on mount
  useEffect(() => {
    loadPosts();
  }, []);

  // Listen for storage changes (cross-tab updates)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'blogPosts') {
        loadPosts();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const value: BlogContextType = {
    posts,
    addPost,
    updatePost,
    deletePost,
    getPostBySlug,
    isLoading,
    refreshPosts,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
