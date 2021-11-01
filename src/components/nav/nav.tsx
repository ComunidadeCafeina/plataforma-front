import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, Wrapper } from './nav.style';

import Logo from '../../assets/header.png';

export const Nav = () => {
  return (
    <NavContainer>
      <img src={Logo} alt="logo-compiladoras-de-cafeina" />
      <Wrapper>
        <Link to="/#projetos">Projetos</Link>
        <Link to="/#eventos">Eventos</Link>
        <Link to="/#redes-sociais">Redes Sociais</Link>
      </Wrapper>
    </NavContainer>
  );
};
