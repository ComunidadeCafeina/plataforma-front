import React from 'react';
import { HeaderButton } from '../../../../components/header-button';
import { Nav } from '../../../../components/nav';
import {
  HeaderWrapper,
  HeaderParagraph,
  HeaderTitle,
  ContentContainer,
} from './header.style';

export const Header = (): React.ReactElement => {
  const handleClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeh8rIqDCip_i3B29Zbjmw-8dM80d8ins1qrjjuq5JjlcYW-Q/viewform',
    );
  };

  return (
    <ContentContainer>
      <Nav />

      <HeaderWrapper>
        <HeaderTitle>Que bom te ver por aqui!</HeaderTitle>
        <HeaderParagraph>
          Somos as <strong>Compiladoras de Cafeína</strong>, uma comunidade de
          acolhimento, apoio e educação para mulheres e pessoas trans iniciantes
          em TI.
        </HeaderParagraph>
      </HeaderWrapper>

      <HeaderButton onClick={handleClick} />
    </ContentContainer>
  );
};
