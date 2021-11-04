import React from 'react';
import { ContentContainer, Wrapper } from './nav.style';
import { CompiladorasMobileLogo, CompiladorasDesktopLogo } from '../../icons';

export const Nav = (): React.ReactElement => {
  return (
    <ContentContainer>
      <CompiladorasMobileLogo className="mobile-logo" />

      <CompiladorasDesktopLogo className="desktop-logo" />
      <Wrapper className="desktop-logo">
        <a href="#projetos">Projetos</a>

        <a href="#eventos">Eventos</a>

        <a href="#redes-sociais">Redes Sociais</a>
      </Wrapper>
    </ContentContainer>
  );
};
