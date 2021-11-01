import React from 'react';
import { HeartIcon } from '../../icons/heart-icon';
import { ContentContainer, StyledButtom } from './header-button-style';

interface HeaderButtonProps {
  onClick: () => void;
}

export const HeaderButton = ({ onClick }: HeaderButtonProps) => {
  return (
    <ContentContainer>
      <StyledButtom onClick={onClick}>
        Quero fazer parte
        <HeartIcon />
      </StyledButtom>
    </ContentContainer>
  );
};
