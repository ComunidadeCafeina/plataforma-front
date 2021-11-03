import React from 'react';
import { StyledButton } from './card-button.style';
import { RestrictProjectIcon, RightArrowIcon } from '../../icons';

interface CardButtonProps {
  text: string;
  restrict: boolean;
  onClick: () => void;
}

export const CardButton = ({
  text,
  restrict,
  onClick,
}: CardButtonProps): React.ReactElement => (
  <StyledButton type="button" onClick={onClick}>
    {text} {restrict ? <RestrictProjectIcon /> : <RightArrowIcon />}
  </StyledButton>
);
