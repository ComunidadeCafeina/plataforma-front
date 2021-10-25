import styled from 'styled-components';

export const IconBox = styled.div`
  min-width: 52px;
`;

export const Description = styled.div`
  display: flex;
  font-size: 20px;
`;

export const CardsContainer = styled.div`
  margin-top: 32px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
