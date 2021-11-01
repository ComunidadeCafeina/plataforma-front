import React from 'react';
import { NavContainer, Wrapper } from './nav.style';

import Logo from '../../assets/header.png';

export const Nav = () => {
  return (
    <NavContainer>
      <img src={Logo} alt="logo-compiladoras-de-cafeina" />
      <Wrapper>
        <a href="#projetos">Projetos</a>

        <a href="#eventos">Eventos</a>

        <a href="#redes-sociais">Redes Sociais</a>
      </Wrapper>
    </NavContainer>
  );
};
