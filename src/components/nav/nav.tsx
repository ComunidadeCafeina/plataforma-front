import React from 'react';
import { ContentContainer, Wrapper, WrapperMobileLogo } from './nav.style';
import { CompiladorasMobileLogo, CompiladorasDesktopLogo } from '../../icons';

export const Nav = () => {
  return (
    <ContentContainer>
      <WrapperMobileLogo>
        <CompiladorasMobileLogo className="mobile-logo" />
      </WrapperMobileLogo>
      <CompiladorasDesktopLogo className="desktop" />
      <Wrapper className="desktop">
        <a href="#projetos">Projetos</a>

        <a href="#eventos">Eventos</a>

        <a href="#redes-sociais">Redes Sociais</a>
      </Wrapper>
    </ContentContainer>
  );
};
