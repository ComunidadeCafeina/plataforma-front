import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 24px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, calc(34% - 16px));
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, calc(51% - 16px));
  }
`;
