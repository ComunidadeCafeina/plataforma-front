import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import breakpoints from '../../styles/breakpoints';
import spaces from '../../styles/spaces';
import shadows from '../../styles/shadows';

export const Container = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  height: 413px;
  background: ${colors.white};
  box-shadow: ${shadows.default};
  border-radius: 24px;
  width: 82%;
  text-align: center;
  margin: auto;

  @media screen and (max-width: ${breakpoints.sm}) {
    margin: 0 0 ${spaces.l} 0;
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg}) {
    height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spaces.m} ${spaces.s};
  text-align: left;
  height: 286px;
`;

export const Title = styled.p`
  margin: 0;
  color: ${colors.red};
  font-size: ${fonts.sizes.m};
  font-weight: ${fonts.weights.bold};
  line-height: 30px;
`;

export const Description = styled.p`
  margin: ${spaces.s} 0;
  font-size: ${fonts.sizes.s};
  font-weight: ${fonts.weights.normal};
  line-height: ${spaces.m};
`;

export const DetailsLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spaces.m};

  p {
    font-size: ${fonts.sizes.s};
    font-weight: ${fonts.weights.bold};
    margin: 0;

    &:first-child {
      color: ${colors.red};
    }
  }
`;

export const Image = styled.div<{ image: string }>`
  height: 127px;
  width: 100%;
  border-top-left-radius: ${spaces.m};
  border-top-right-radius: ${spaces.m};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
