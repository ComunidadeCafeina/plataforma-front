import { useEffect, useState } from 'react';
import {
  ContentContainer,
  Title,
  ProjectsCard,
  Description,
  Carousel,
} from '../../../../components';
import { IconBox } from './projects.style';
import { LockIcon } from '../../../../icons';
import { Project } from '../../../../models/project';
import mockProjects from '../../../../mocks/constants/projects';

const ProjectsSection = (): React.ReactElement => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const sizeScreen = window.innerWidth;

  useEffect(() => {
    fetch('/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <ContentContainer id="projetos">
      <Title>Conheça nossos projetos</Title>

      <Description>
        <IconBox>
          <LockIcon />
        </IconBox>
        Alguns projetos são exclusivos para pessoas que fazem parte da
        comunidade
      </Description>

      {sizeScreen < 720 ? (
        projects.map(project => (
          <ProjectsCard key={project.brandIcon} {...project} />
        ))
      ) : (
        <Carousel show={sizeScreen >= 992 ? 2 : 1} infiniteLoop>
          {projects.map(project => (
            <div>
              <ProjectsCard key={project.brandIcon} {...project} />
            </div>
          ))}
        </Carousel>
      )}
    </ContentContainer>
  );
};

export default ProjectsSection;
