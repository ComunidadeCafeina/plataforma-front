/* eslint-disable no-shadow */
import React from 'react';
import styled from 'styled-components';
import { Icon } from '..';

export enum ArrowType {
  previous = 'previous',
  next = 'next',
}

type Props = {
  type: ArrowType;
  disabled?: boolean;
  onClick: () => void;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;
`;

const Arrow = styled.button<Partial<Props>>`
  width: 63px;
  height: 63px;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Component: React.FC<Props> = ({ type, onClick, disabled }) => (
  <Container>
    {type === ArrowType.previous ? (
      <Arrow disabled={disabled} onClick={onClick} data-testid="arrow-previous">
        <Icon icon="seta-esquerda" />
      </Arrow>
    ) : (
      <Arrow disabled={disabled} onClick={onClick} data-testid="arrow-next">
        <Icon icon="seta-direita" />
      </Arrow>
    )}
  </Container>
);

export default Component;
