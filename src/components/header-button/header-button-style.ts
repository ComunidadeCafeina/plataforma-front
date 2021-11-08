import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const StyledButton = styled.button`
  background-color: ${colors.lightRed};
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 24px;
  height: 56px;
  color: ${colors.white};
  font-size: ${fonts.sizes.s};
  font-weight: ${fonts.weights.bold};
  margin: 80px 0 80px 0;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width: 240px;
`;
