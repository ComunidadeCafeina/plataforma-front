import React from 'react';
import { CompiladorasCup } from '../../icons/compiladoras-cup';
import { FooterTitle, FooterWrapper } from './footer.style';

export const Footer = (): React.ReactElement => {
  return (
    <FooterWrapper>
      <CompiladorasCup />
      <FooterTitle>Compiladoras de Cafeína @2021</FooterTitle>
    </FooterWrapper>
  );
};
