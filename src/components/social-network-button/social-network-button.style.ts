import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: static;
  width: 100%;
  height: 62px;
  box-sizing: border-box;
  border-radius: 48px;
  border: none;
  background-color: ${colors.lightGrey};
  font-weight: bold;
  font-size: ${fonts.sizes.xs};
  color: ${colors.black};
  cursor: pointer;
  text-align: center;
  justify-content: flex-start;
`;

export const Text = styled.span`
  margin-left: 16px;
`;
