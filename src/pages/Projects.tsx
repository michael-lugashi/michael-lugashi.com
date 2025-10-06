import { Fragment } from 'react';
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
import StripedBox from '../components/StripedBox';
import { getProjectImage, type ImageKey } from '../assets/images';

interface Project {
  imageKey: string;
  title: string;
  text: string;
  buttonText: string;
  url: string;
  testUsername?: string;
  testPassword?: string;
}

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="laptop:-mt-10 -mt-30">
      <div className="mb-20 flex flex-row justify-between items-stretch">
        <Title
          title="Portfolio"
          align="left"
          className="laptop:w-1/2"
          subtitle="I build scalable, reliable applications that balance performance with great user experience — from intuitive user interfaces to robust servers, databases, and cloud infrastructure."
        />
        <StripedBox className="hidden laptop:block w-1/3 my-8" />
      </div>
      {projects.map((project, index) => (
        <Fragment key={project.title}>
          <ProjectCard {...project} imageUrl={getProjectImage(project.imageKey as ImageKey)} />
          {index !== projects.length - 1 && <hr className="my-20 invisible laptop:visible border-gray-p" />}
        </Fragment>
      ))}
    </section>
  );
};

export default Projects;
