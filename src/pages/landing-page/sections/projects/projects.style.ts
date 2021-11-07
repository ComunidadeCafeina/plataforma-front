import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';

export const IconBox = styled.div`
  min-width: 52px;
`;

export const CardsContainer = styled.div`
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;
