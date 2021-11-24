import React from 'react';
import { CompiladorasIcon } from '../../icons';
import { FooterTitle, FooterWrapper } from './footer.style';

export const Footer = (): React.ReactElement => {
  return (
    <FooterWrapper>
      <CompiladorasIcon />
      <FooterTitle>Compiladoras de Cafeína @2021</FooterTitle>
    </FooterWrapper>
  );
};
