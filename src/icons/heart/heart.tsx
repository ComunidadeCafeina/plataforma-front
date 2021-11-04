import React from 'react';
import { HeartContainer, HeartStyle, HeartWrapper } from './heart.style';

export const Heart = (): React.ReactElement => {
  return (
    <HeartContainer>
      <HeartWrapper>
        <HeartStyle />
      </HeartWrapper>
    </HeartContainer>
  );
};
