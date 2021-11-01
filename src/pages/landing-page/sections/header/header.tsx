import React from 'react';
import Logo from '../../../../assets/header.png';
import { Nav } from '../../../../components/nav';
import {
  HeaderContainer,
  HeaderParagraph,
  HeaderTitle,
  Wrapper,
} from './header.style';

export const Header = () => {
  return (
    <>
      {/* <Wrapper>
        <img src={Logo} alt="logo-compiladoras-de-cafeina" />
        <Nav />
      </Wrapper> */}
      <Nav />
      <HeaderContainer>
        <HeaderTitle>Que bom te ver por aqui!</HeaderTitle>
        <HeaderParagraph>
          Somos as <strong>Compiladoras de Cafeína</strong>, uma comunidade de
          acolhimento, apoio e educação para mulherese pessoas trans iniciantes
          em TI.
        </HeaderParagraph>
      </HeaderContainer>
    </>
  );
};
