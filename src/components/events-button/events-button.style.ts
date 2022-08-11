import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import spaces from '../../styles/spaces';

export const StyledButton = styled.button`
  padding: ${spaces.s};
  width: 236px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 24px;
  border: none;
  background-color: ${colors.lightGrey};
  font-weight: ${fonts.weights.bold};
  font-size: ${fonts.sizes.s};
  color: ${colors.black};
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
`;
