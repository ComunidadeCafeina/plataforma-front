import styled from 'styled-components';
import colors from '../../styles/colors';
import spaces from '../../styles/spaces';

export const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 52px 12px;
`;

export const IndicatorBullet = styled.button<{ highlighted: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 0;
  border: 0;
  outline: 0;
  margin-left: ${spaces.xs};
  margin-right: ${spaces.xs};
  background-color: ${props =>
    props.highlighted ? colors.lightRed : colors.grey};
  transition: transform 0.1s;
  transform: scale(${props => (props.highlighted ? '1.1' : '1')});

  &:hover {
    transition: transform 0.1s;
    transform: scale(1.1);
  }
`;
