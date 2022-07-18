import React, { useState } from 'react';
import { CompiladorasIcon } from '../../icons';
import { FooterTitle, FooterWrapper } from './footer.style';

export const Footer = (): React.ReactElement => {
  const [year, _setYear] = useState(new Date().getFullYear());

  return (
    <FooterWrapper>
      <CompiladorasIcon />
      <FooterTitle>Cafeína Bits @{year}</FooterTitle>
    </FooterWrapper>
  );
};
