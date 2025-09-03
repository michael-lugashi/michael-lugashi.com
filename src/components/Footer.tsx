import React from 'react';

interface FooterProps {
  text: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ text, className = '' }) => {
  return (
    <div className={`text-center mt-16 ${className}`}>
      <div className="inline-flex items-center gap-4 text-brown-p/60">
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-brown-p/60"></div>
        <span className="text-sm font-medium">{text}</span>
        <div className="w-8 h-px bg-gradient-to-r from-brown-p/60 to-transparent"></div>
      </div>
    </div>
  );
};

export default Footer;
