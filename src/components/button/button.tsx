import React from 'react';
import { StyledButton } from './button.style';
import { Icon } from '..';

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps): React.ReactElement => (
  <StyledButton type="button">
    {text} <Icon icon="cadeado-botao" />
  </StyledButton>
);
