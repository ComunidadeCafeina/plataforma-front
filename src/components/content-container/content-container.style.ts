import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import spaces from '../../styles/spaces';

export const ContentContainer = styled.div`
  margin: ${spaces.xxl} auto;
  padding: 0 ${spaces.l};
  max-width: 1120px;
  box-sizing: content-box;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: ${spaces.xl} ${spaces.s};
    margin: 0;
  }
`;
