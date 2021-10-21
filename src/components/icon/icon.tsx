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
      {icons[icon].paths.map((path, index) => (
        <path
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          {...path}
        />
      ))}
    </StyledSVG>
  ) : null;
