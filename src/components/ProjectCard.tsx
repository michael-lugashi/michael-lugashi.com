import React from 'react';
import Button from './Button';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  text: string;
  buttonText: string;
  url: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, text, buttonText, url, className = '' }) => {
  const handleButtonClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex flex-col laptop:flex-row ${className}`}>
      <div className="order-2 laptop:order-1 w-full laptop:w-5/12 flex justify-center items-center my-20 laptop:my-0">
        <img src={imageUrl} alt={title} className="w-2/3 max-w-70" />
      </div>

      <div className="order-1 laptop:order-2 flex flex-col justify-start w-full laptop:w-7/12 laptop:px-4 text-brown-p">
        <h3 className="text-5xl font-black  mb-4">
          {title}
          <span className="text-brown-s">.</span>
        </h3>
        <p className="text-xl leading-relaxed mb-10">{text}</p>

        <Button className="mr-auto" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
