import React from 'react';
import { Container, Title, Divisor, Description } from './card.style';
import { Icon, Button, Icons } from '..';

interface CardProps {
  brandIcon: Icons;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const Card = ({
  brandIcon,
  title,
  description,
  icon,
  link,
}: CardProps): React.ReactElement => (
  <Container>
    <Icon icon={brandIcon} />

    <Title>{title}</Title>

    <Divisor />

    <Description>{description}</Description>

    <Button text="Entrar" />
  </Container>
);
