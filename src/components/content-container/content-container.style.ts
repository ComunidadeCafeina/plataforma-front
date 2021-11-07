import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

export const ContentContainer = styled.div`
  margin: 96px auto;
  padding: 0 32px;
  max-width: 1120px;
  box-sizing: content-box;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 48px 16px;
    margin: 0;
  }
`;
