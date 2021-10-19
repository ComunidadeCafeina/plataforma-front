import React from 'react';
import { Icon, ContentContainer, Title } from '../components';
import { IconBox, Description } from './landing-page.style';
import { Card } from '../components/card';
import projects from './projects';

const LandingPage = (): React.ReactElement => (
  <ContentContainer>
    <Title>Conheça nossos projetos</Title>

    <Description>
      <IconBox>
        <Icon icon="cadeado" />
      </IconBox>
      Alguns projetos são exclusivos para pessoas que fazem parte da comunidade
    </Description>

    {projects.map(project => (
      <Card key={project.brandIcon} {...project} />
    ))}
  </ContentContainer>
);

export default LandingPage;
