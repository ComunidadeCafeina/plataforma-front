import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  // min-width: 50%;

  > * {
    margin-left: 50px;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: #000000;
  .mobile-logo {
    display: none;
  }

  @media (max-width: 720px) {
    justify-content: flex-start;
    .desktop {
      display: none;
    }
    .mobile-logo {
      display: block;
      margin-left: 1rem;
    }
  }
`;
