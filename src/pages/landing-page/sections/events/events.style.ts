import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import colors from '../../../../styles/colors';

export const FullContentContainer = styled.div`
  background-color: ${colors.lightGrey};
  padding: 96px 0 44px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0;
  }
`;
