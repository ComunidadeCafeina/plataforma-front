import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 50%;

  > * {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #000000;
  .mobile-logo {
    display: none;
  }

  @media (max-width: 720px) {
    .desktop {
      display: none;
    }
    .mobile-logo {
      display: block;
    }
  }
`;

export const WrapperMobileLogo = styled.div`
  margin: 2rem 0 0 1rem;
`;
