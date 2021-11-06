import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  margin: 7rem 0 4rem 0;
  text-align: center;
  font-size: 3.5rem;
  color: ${colors.white};
  @media (max-width: 720px) {
    text-align: left;
    margin-left: 1rem;
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
  font-size: 1.25rem;
  text-align: center;
  max-width: 70ch;
  line-height: 150%;
  @media (max-width: 720px) {
    text-align: left;
    margin-left: 1rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 100%;
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
