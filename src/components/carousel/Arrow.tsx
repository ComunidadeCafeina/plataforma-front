import styled from 'styled-components';
import { Icon } from '..';

export enum ArrowType {
  previous = 'previous',
  next = 'next',
}

interface ArrowProps {
  type: ArrowType;
  onClick: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;
`;

const Arrow = styled.button`
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

const Component = ({ type, onClick }: ArrowProps) => (
  <Container>
    {type === ArrowType.previous ? (
      <Arrow onClick={onClick}>
        <Icon icon="seta-esquerda" />
      </Arrow>
    ) : (
      <Arrow onClick={onClick}>
        <Icon icon="seta-direita" />
      </Arrow>
    )}
  </Container>
);

export default Component;
