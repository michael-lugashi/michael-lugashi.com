import { Fragment } from 'react';
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
import StripedBox from '../components/StripedBox';

interface Project {
  imageUrl: string;
  title: string;
  text: string;
  buttonText: string;
  url: string;
}

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="-mt-30">
      <div className="mb-20 flex flex-row justify-between items-stretch">
        <Title
          title="Projects"
          align="left"
          className="laptop:w-1/2"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum"
        />
        <StripedBox className="hidden laptop:block w-1/3 my-8" />
      </div>
      {projects.map((project, index) => (
        <Fragment key={project.title}>
          <ProjectCard {...project} />
          {index !== projects.length - 1 && <hr className="my-20 hidden laptop:block border-gray-p" />}
        </Fragment>
      ))}
    </section>
  );
};

export default Projects;
