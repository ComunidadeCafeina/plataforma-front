import { useEffect, useState } from 'react';
import Carousel from '../../../../components/carousel';
import {
  ContentContainer,
  Title,
  Card,
  Description,
} from '../../../../components';
import { IconBox, CardsContainer } from './projects.style';
import { LockIcon } from '../../../../icons';
import { Project } from '../../../../models/project';
import mockProjects from '../../../../mocks/constants/projects';

interface ProjectsListProps {
  children: React.ReactNode;
}

const ProjectsList = ({ children }: ProjectsListProps) => {
  const sizeScreen = window.innerWidth;

  const carouselBreakpoints = [
    {
      size: 719,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      size: 991,
      settings: {
        slidesToShow: 2,
      },
    },
  ];

  return sizeScreen < 720 ? (
    <>{children}</>
  ) : (
    <Carousel breakpoints={carouselBreakpoints}>{children}</Carousel>
  );
};

const ProjectsSection = (): React.ReactElement => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);

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

      <CardsContainer data-testid="projects-list">
        <ProjectsList>
          {projects.map(project => (
            <Card key={project.brandIcon} {...project} />
          ))}
        </ProjectsList>
      </CardsContainer>
    </ContentContainer>
  );
};

export default ProjectsSection;
