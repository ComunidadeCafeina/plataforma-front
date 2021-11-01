import React from 'react';
import { Heart } from '../heart';
import { ContentContainer, StyledButton } from './header-button-style';

interface HeaderButtonProps {
  onClick: () => void;
}

export const HeaderButton = ({ onClick }: HeaderButtonProps) => {
  return (
    <ContentContainer>
      <StyledButton onClick={onClick}>
        Quero fazer parte
        <Heart />
      </StyledButton>
    </ContentContainer>
  );
};
