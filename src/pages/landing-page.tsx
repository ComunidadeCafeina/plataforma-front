import React from 'react';
import Carousel from '../components/carousel/carousel';
import { Icon, ContentContainer, Title } from '../components';
import { IconBox, Description, CardsContainer } from './landing-page.style';
import { Card } from '../components/card';
import projects from './projects';

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

const LandingPage = (): React.ReactElement => {
  return (
    <ContentContainer>
      <Title>Conheça nossos projetos</Title>

      <Description>
        <IconBox>
          <Icon icon="cadeado" />
        </IconBox>
        Alguns projetos são exclusivos para pessoas que fazem parte da
        comunidade
      </Description>

      <CardsContainer>
        <ProjectsList>
          {projects.map((project, index) => (
            <Card key={project.brandIcon} {...project} id={`card-${index}`} />
          ))}
        </ProjectsList>
      </CardsContainer>
    </ContentContainer>
  );
};

export default LandingPage;
