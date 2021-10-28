import React from 'react';

import { StyledSVG } from './icon.style';
import { Icons, icons } from './icons';

export interface IconProps {
  icon: Icons;
}

export const Icon: React.FC<IconProps> = ({ icon }) =>
  icons[icon] ? (
    <StyledSVG
      data-testid="svg-icon"
      width={icons[icon].width}
      height={icons[icon].height}
      fill="none"
    >
      {icons[icon].paths.map(path => (
        <path key={`${path}-${Math.random() * (100 - 1) + 1}`} {...path} />
      ))}
    </StyledSVG>
  ) : null;
