import styled from 'styled-components';
import breakpoints from '../../../../styles/breakpoints';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const FullContentContainer = styled.div`
  background-color: ${colors.lightGrey};
  padding: 96px 0 44px;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0;
  }

  .error-message {
    margin: 0;
    padding-bottom: 52px;
    font-weight: ${fonts.weights.bold};

    @media screen and (max-width: ${breakpoints.sm}) {
      padding: 0;
    }
  }
`;
