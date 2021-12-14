import styled from 'styled-components';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import spaces from '../../../../styles/spaces';

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: ${spaces.s};
  position: static;
  width: 116.45px;
  height: 56px;
  border: 2px solid ${colors.lightRed};
  box-sizing: border-box;
  border-radius: 24px;
  background-color: ${colors.white};
  font-weight: ${fonts.weights.bold};
  font-size: ${fonts.sizes.s};
  color: ${colors.lightRed};
  cursor: pointer;
`;
