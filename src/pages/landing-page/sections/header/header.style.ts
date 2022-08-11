import styled from 'styled-components';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import breakpoints from '../../../../styles/breakpoints';
import spaces from '../../../../styles/spaces';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  margin: 112px 0 64px 0;
  text-align: center;
  font-size: ${fonts.sizes.xl};
  color: ${colors.white};

  @media (max-width: ${breakpoints.sm}) {
    text-align: left;
    margin-left: ${spaces.s};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderParagraph = styled.p`
  color: ${colors.white};
  font-size: ${fonts.sizes.m};
  text-align: center;
  max-width: 70ch;
  line-height: 150%;

  @media (max-width: ${breakpoints.sm}) {
    text-align: left;
    margin-left: ${spaces.s};
  }
`;

export const ContentContainer = styled.div`
  max-width: 100%;
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
