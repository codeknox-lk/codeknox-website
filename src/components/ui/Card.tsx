import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  onClick 
}) => {
  const baseClasses = 'bg-gray-900/50 border border-gray-800 rounded-2xl shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:border-blue-400/50 hover:shadow-xl hover:transform hover:scale-105' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={hover && onClick ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;