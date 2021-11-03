import React from 'react';
import { StyledButton } from './button.style';
import { RestrictProjectIcon, RightArrowIcon } from '../../icons';

interface ButtonProps {
  text: string;
  restrict: boolean;
  onClick: () => void;
}

export const Button = ({
  text,
  restrict,
  onClick,
}: ButtonProps): React.ReactElement => (
  <StyledButton type="button" onClick={onClick}>
    {text} {restrict ? <RestrictProjectIcon /> : <RightArrowIcon />}
  </StyledButton>
);
