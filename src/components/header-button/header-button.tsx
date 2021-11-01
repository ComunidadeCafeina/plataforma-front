import React from 'react';
import { HeartIcon } from '../../icons/heart-icon';
import { ButtonContainer, StyledButtom } from './header-button-style';

interface HeaderButtonProps {
  onClick: () => void;
}

export const HeaderButton = ({ onClick }: HeaderButtonProps) => {
  return (
    <ButtonContainer>
      <StyledButtom onClick={onClick}>
        Quero fazer parte
        <HeartIcon />
      </StyledButtom>
    </ButtonContainer>
  );
};
