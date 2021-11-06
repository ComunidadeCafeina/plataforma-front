import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  height: 370px;
  background: ${colors.white};
  border: 2px solid ${colors.lightGrey};
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  width: 82%;
  text-align: center;
  margin: auto;

  @media screen and (max-width: 720px) {
    margin: 0 0 32px 0;
    width: 100%;
  }

  @media screen and (min-width: 720px) and (max-width: 992px) {
    height: 400px;
  }
`;

export const Title = styled.p`
  margin: auto;
  font-size: 20px;
  font-weight: 700;
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
  margin: 24px 0;
  height: 90px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
