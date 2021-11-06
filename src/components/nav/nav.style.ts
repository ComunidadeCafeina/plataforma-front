import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  > * {
    margin-left: 50px;
    text-decoration: none;
    color: ${colors.white};
    font-size: ${fonts.sizes.m};
    font-weight: bold;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: ${colors.black};
  .mobile-logo {
    display: none;
  }

  @media (max-width: 720px) {
    justify-content: flex-start;
    .desktop-logo {
      display: none;
    }
    .mobile-logo {
      display: block;
      margin-left: 1rem;
    }
  }
`;
