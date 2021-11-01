import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #000000;
`;

export const HeaderTitle = styled.h1`
  margin-top: 5rem;
  font-size: 3.5rem;
  color: #ffffff;
`;

export const HeaderContainer = styled.div`
  max-width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderParagraph = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
  text-align: center;
  max-width: 70ch;
`;
