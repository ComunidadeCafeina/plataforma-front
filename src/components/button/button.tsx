import React from 'react';
import { StyledButton } from './button.style';
import { Icon, Icons } from '..';

interface ButtonProps {
  text: string;
  icon: Icons;
  onClick: () => void;
}

export const Button = ({
  text,
  icon,
  onClick,
}: ButtonProps): React.ReactElement => (
  <StyledButton type="button" onClick={onClick}>
    {text} <Icon icon={icon} />
  </StyledButton>
);
