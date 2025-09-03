import React from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
  showLine?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, showLine = true, align = 'center', className = '' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const lineAlignmentClasses = {
    left: 'ml-0',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <div className={`${alignmentClasses[align]} mb-16 relative ${className}`}>
      <h2 className="text-6xl font-bold text-brown-p mb-6 leading-tight">
        {title}
        <span className="font-bold text-brown-s">.</span>
      </h2>
      {showLine && (
        <div
          className={`w-20 h-1 bg-gradient-to-r from-brown-p mb-6 to-brown-s rounded-full ${lineAlignmentClasses[align]}`}
        />
      )}
      {subtitle && (
        <p className={`text-2xl text-brown-p/80 max-w-2xl leading-relaxed ${lineAlignmentClasses[align]}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
