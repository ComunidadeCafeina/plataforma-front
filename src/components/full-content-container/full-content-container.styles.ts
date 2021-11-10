import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';
import spaces from '../../styles/spaces';

export const FullContentContainer = styled.div`
  background-color: ${colors.lightGrey};

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: ${spaces.xl} ${spaces.s};
  }
`;
