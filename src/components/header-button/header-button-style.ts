import styled from 'styled-components';
import colors from '../../styles/colors';

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
  font-size: 1rem;
  font-weight: bold;
  margin: 5rem 0 5rem 0;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width: 15rem;
`;
