import styled from 'styled-components';

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
