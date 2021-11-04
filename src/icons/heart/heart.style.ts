import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
  0%{
    transform: rotate(45deg) scale(0.8);
  }
  25%{
    transform: rotate(45deg) scale(0.5);
  }
  50%{
    transform: rotate(45deg) scale(0.8);
  }
  75%{
    transform: rotate(45deg) scale(0.5);
  }
  100%{
    transform: rotate(45deg) scale(0.8);
  }
`;

export const HeartWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeartContainer = styled.div`
  position: relative;
`;

export const HeartStyle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  transform: rotate(45deg);
  animation: ${pulse} 4s linear infinite;

  &:before {
    content: '';
    position: absolute;
    background-color: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 0;
    left: -10px;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -10px;
    left: 0;
  }
`;
