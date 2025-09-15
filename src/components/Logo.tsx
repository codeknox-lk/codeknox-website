import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center justify-center transition-all duration-300 ${className}`}
    >
      {/* Logo Image */}
      <img 
        src="/logo.png" 
        alt="CODEKNOX Logo" 
        className="w-full h-full object-contain"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </Link>
  );
};

export default Logo;
