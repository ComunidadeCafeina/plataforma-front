import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  height: 420px;
  background: #ffffff;
  border: 2px solid #e8e8e8;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  width: 82%;
  text-align: center;
`;

export const Title = styled.p`
  margin: auto;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

export const Divisor = styled.div`
  border: 1px solid #fe393b;
  background-color: #fe393b;
  width: 79px;
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 24px 0;
  height: 115px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
