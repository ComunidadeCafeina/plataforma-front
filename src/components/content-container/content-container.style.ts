import styled from 'styled-components';

export const ContentContainer = styled.div`
  margin: 96px auto;
  padding: 0 32px;
  max-width: 1120px;
  box-sizing: content-box;

  @media screen and (max-width: 720px) {
    padding: 48px 16px;
    margin: 0;
  }
`;
