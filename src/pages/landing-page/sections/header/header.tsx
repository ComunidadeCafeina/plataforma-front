import React from 'react';
import { HeaderButton, Nav } from '../../../../components';
import {
  HeaderWrapper,
  HeaderParagraph,
  HeaderTitle,
  ContentContainer,
} from './header.style';

export const Header = (): React.ReactElement => {
  const handleClick = () => {
    window.open('https://t.me/CafeinaVagas');
  };

  return (
    <ContentContainer>
      <Nav />

      <HeaderWrapper>
        <HeaderTitle>Que bom te ver por aqui!</HeaderTitle>
        <HeaderParagraph>
          Somos a <strong>Cafeína Bits</strong>, uma comunidade focada em
          pessoas iniciantes na tecnologia, com foco em grupos minorizados.
        </HeaderParagraph>
      </HeaderWrapper>

      <HeaderButton onClick={handleClick} />
    </ContentContainer>
  );
};
