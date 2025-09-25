import React from 'react';
import Button from './Button';
import CopyButton from './CopyButton';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  text: string;
  buttonText: string;
  url: string;
  className?: string;
  testUsername?: string;
  testPassword?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  text,
  buttonText,
  url,
  className = '',
  testUsername,
  testPassword,
}) => {
  const handleButtonClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex flex-col laptop:flex-row ${className}`}>
      <div className="hidden laptop:flex w-5/12 justify-center items-center">
        <img src={imageUrl} alt={title} className="w-2/3 max-w-64" />
      </div>

      <div className="flex flex-col justify-center w-full laptop:w-7/12 laptop:px-4 text-brown-p dark:text-pink-p">
        <h3 className="text-5xl font-black mb-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-brown-p via-brown-p to-brown-s dark:from-pink-p dark:via-pink-p dark:to-brown-s w-fit">
          {title}
          <span className="text-brown-s">.</span>
        </h3>
        <p className="text-xl leading-relaxed mb-5">
          <img src={imageUrl} alt={title} className="w-1/3 max-w-36 laptop:hidden float-right mb-1 ml-1" />
          {text}
        </p>
        <div className="flex flex-col laptop:flex-row gap-5 clear-both">
          {testUsername && testPassword && (
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 font-bold items-center w-fit">
              <span className="text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brown-p via-brown-p to-gray-p dark:from-pink-p dark:via-pink-p dark:to-gray-p w-fit">
                Test Username:
              </span>
              <CopyButton text={testUsername} />
              <span className="text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brown-p via-brown-p to-gray-p dark:from-pink-p dark:via-pink-p dark:to-gray-p w-fit">
                Test Password:
              </span>
              <CopyButton text={testPassword} />
            </div>
          )}
          <Button className="w-full" onClick={handleButtonClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
