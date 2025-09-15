import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-offset-gray-950';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white focus:ring-blue-500 focus-visible:ring-blue-500',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-500 focus-visible:ring-gray-500',
    accent: 'bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white focus:ring-blue-500 focus-visible:ring-blue-500',
    outline: 'bg-transparent border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 focus:ring-blue-500 focus-visible:ring-blue-500',
    ghost: 'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white focus:ring-gray-500 focus-visible:ring-gray-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  // Handle click with error boundary
  const handleClick = () => {
    if (disabled || loading) return;
    
    try {
      onClick?.();
    } catch (error) {
      // Silent error handling for production
    }
  };
  
  return (
    <motion.button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled || loading}
      whileHover={disabled || loading ? {} : { scale: 1.05 }}
      whileTap={disabled || loading ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-disabled={disabled || loading}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2" aria-hidden="true">{icon}</span>
      )}
      
      <span className={loading ? 'sr-only' : ''}>
        {loading ? 'Loading...' : children}
      </span>
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2" aria-hidden="true">{icon}</span>
      )}
    </motion.button>
  );
};

export default Button;