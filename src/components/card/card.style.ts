import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import breakpoints from '../../styles/breakpoints';
import spaces from '../../styles/spaces';

export const Container = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  padding: ${spaces.m} ${spaces.s};
  height: 370px;
  background: ${colors.white};
  border: 2px solid ${colors.lightGrey};
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
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

export const Title = styled.p`
  margin: auto;
  font-size: ${fonts.sizes.m};
  font-weight: ${fonts.weights.bold};
  line-height: 30px;
`;

export const Divisor = styled.div`
  border: 1px solid ${colors.lightRed};
  background-color: ${colors.lightRed};
  width: 79px;
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: ${spaces.m} 0;
  height: 90px;
  font-size: ${fonts.sizes.s};
  font-weight: ${fonts.weights.normal};
  line-height: ${spaces.m};
`;
