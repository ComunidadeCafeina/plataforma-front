import React from 'react';
import { Heart } from '../../icons';
import { ContentContainer, StyledButton } from './header-button-style';

interface HeaderButtonProps {
  onClick: () => void;
}

export const HeaderButton = ({
  onClick,
}: HeaderButtonProps): React.ReactElement => {
  return (
    <ContentContainer>
      <StyledButton onClick={onClick}>
        Quero fazer parte
        <Heart />
      </StyledButton>
    </ContentContainer>
  );
};
