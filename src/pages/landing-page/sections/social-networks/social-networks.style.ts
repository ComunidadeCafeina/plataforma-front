import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 24px;

  @media screen and (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, calc(34% - 16px));
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, calc(51% - 16px));
  }
`;
