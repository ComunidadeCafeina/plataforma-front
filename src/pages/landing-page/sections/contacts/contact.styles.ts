import styled from 'styled-components';
import {
  ContentContainer,
  Title as OldTitle,
  Description as OldDescription,
} from '../../../../components';
import breakpoints from '../../../../styles/breakpoints';
import colors from '../../../../styles/colors';
import spaces from '../../../../styles/spaces';

export const Content = styled(ContentContainer)`
  display: flex;
  align-items: center;
  background-color: ${colors.lightGrey};
  padding-top: ${spaces.xxl};
  padding-bottom: ${spaces.xxl};
  margin-bottom: 0;

  @media screen and (max-width: ${breakpoints.sm}) {
    display: grid;
    grid-row-gap: ${spaces.l};
    padding: 0;
  }
`;

export const Title = styled(OldTitle)`
  margin-bottom: 0;
  margin-right: 64px;
`;

export const Description = styled(OldDescription)`
  display: grid;
  grid-gap: 8px;
  margin-bottom: 0;

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;
