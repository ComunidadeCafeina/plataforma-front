import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  position: static;
  width: 116.45px;
  height: 56px;
  border: 2px solid ${colors.lightRed};
  box-sizing: border-box;
  border-radius: 24px;
  background-color: ${colors.white};
  font-weight: 700;
  font-size: 16px;
  color: ${colors.lightRed};
  cursor: pointer;
`;
