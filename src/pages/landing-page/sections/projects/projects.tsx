import React from 'react';
import Carousel from '../../../../components/carousel';
import {
  ContentContainer,
  Title,
  Card,
  Description,
} from '../../../../components';
import { IconBox, CardsContainer } from './projects.style';
import projects from './projects-mock';
import { LockIcon } from '../../../../icons';

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

const ProjectsSection = (): React.ReactElement => (
  <ContentContainer id="projetos">
    <Title>Conheça nossos projetos</Title>

    <Description>
      <IconBox>
        <LockIcon />
      </IconBox>
      Alguns projetos são exclusivos para pessoas que fazem parte da comunidade
    </Description>

    <CardsContainer>
      <ProjectsList>
        {projects.map(project => (
          <Card key={project.brandIcon} {...project} />
        ))}
      </ProjectsList>
    </CardsContainer>
  </ContentContainer>
);

export default ProjectsSection;
