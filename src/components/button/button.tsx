import React from 'react';
import { StyledButton } from './button.style';
import { Icon, Icons } from '..';

interface ButtonProps {
  text: string;
  icon: Icons;
}

export const Button = ({ text, icon }: ButtonProps): React.ReactElement => (
  <StyledButton type="button">
    {text} <Icon icon={icon} />
  </StyledButton>
);
