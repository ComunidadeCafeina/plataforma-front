/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

type Props = {
  items: number;
  slidesToShow: number;
  infinite?: boolean;
  active: number;
  onClick: (index: number) => void;
};

export const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 52px 12px;
`;

export const Indicator = styled.button<{ highlighted: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 0;
  border: 0;
  outline: 0;
  margin-left: 14px;
  margin-right: 14px;
  background-color: ${props => (props.highlighted ? '#FE393B' : '#C6C6C6')};
  transition: transform 0.1s;
  transform: scale(${props => (props.highlighted ? '1.1' : '1')});

  &:hover {
    transition: transform 0.1s;
    transform: scale(1.1);
  }
`;

const getNumberOfIndicators = (
  items: number,
  slidesToShow: number,
  infinite?: boolean,
) => {
  if (infinite || slidesToShow < items) {
    return items;
  }

  return 1;
};

const Component: React.FC<Props> = ({
  items,
  slidesToShow,
  infinite,
  active,
  onClick,
}) => {
  return (
    <IndicatorWrapper>
      {[...Array(getNumberOfIndicators(items, slidesToShow, infinite))].map(
        (e, i) => (
          <Indicator
            key={`carousel-indicator-${i}`}
            data-testid={`carousel-indicator-${i}`}
            highlighted={i === active % items}
            onClick={() => onClick(i)}
          />
        ),
      )}
    </IndicatorWrapper>
  );
};

export default Component;
