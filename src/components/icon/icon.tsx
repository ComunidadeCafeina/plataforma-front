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
    >
      {icons[icon].paths.map(({ path, fill }, index) => (
        <path
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          d={path}
          fill={fill}
          fillRule="evenodd"
        />
      ))}
    </StyledSVG>
  ) : null;
