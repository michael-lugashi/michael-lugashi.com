import React from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
  showLines?: boolean;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, showLines = true, className = '' }) => {
  return (
    <div className={`text-center mb-16 relative ${className}`}>
      <div className="inline-block mb-6">
        {showLines && (
          <div className="w-20 h-1 bg-gradient-to-r from-pink-p to-brown-p mx-auto mb-4 rounded-full"></div>
        )}
        <h2 className="text-6xl font-bold text-brown-p mb-6 leading-tight">{title}</h2>
        {showLines && <div className="w-20 h-1 bg-gradient-to-r from-brown-p to-pink-p mx-auto rounded-full"></div>}
      </div>
      {subtitle && <p className="text-2xl text-brown-p/80 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default Title;
