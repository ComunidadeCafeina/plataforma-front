import React from 'react';
import { Heart } from '../heart';
import { ContentContainer, StyledButtom } from './header-button-style';

interface HeaderButtonProps {
  onClick: () => void;
}

export const HeaderButton = ({ onClick }: HeaderButtonProps) => {
  return (
    <ContentContainer>
      <StyledButtom onClick={onClick}>
        Quero fazer parte
        <Heart />
      </StyledButtom>
    </ContentContainer>
  );
};
