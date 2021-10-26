import React from 'react';
import Carousel from '../components/carousel/carousel';
import { Icon, ContentContainer, Title } from '../components';
import { IconBox, Description, CardsContainer } from './landing-page.style';
import { Card } from '../components/card';
import projects from './projects';

const LandingPage = () => (
  <ContentContainer>
    <Title>Conheça nossos projetos</Title>

    <Description>
      <IconBox>
        <Icon icon="cadeado" />
      </IconBox>
      Alguns projetos são exclusivos para pessoas que fazem parte da comunidade
    </Description>

    <CardsContainer>
      <Carousel
        breakpoints={[
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
        ]}
      >
        {projects.map((project, index) => (
          <Card key={project.brandIcon} {...project} id={`card-${index}`} />
        ))}
      </Carousel>
    </CardsContainer>
  </ContentContainer>
);

export default LandingPage;
